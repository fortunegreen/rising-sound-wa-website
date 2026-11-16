// Small progressive enhancements. Every page works as plain HTML without this file;
// it only adds forms, pop-ups, filters and in-page video.
const API = document.documentElement.dataset.api;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

async function post(path, payload) {
  try {
    const res = await fetch(API + path, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    const data = await res.json().catch(() => ({}));
    return { ok: res.ok, data };
  } catch {
    return { ok: false, data: { error: 'Network error — please try again in a moment.' } };
  }
}

// Expand / collapse panels (event details, past-event media)
document.addEventListener('click', (e) => {
  const t = e.target.closest('[data-toggle]');
  if (!t) return;
  const panel = document.getElementById(t.dataset.toggle);
  if (!panel) return;
  const open = panel.hidden;
  panel.hidden = !open;
  t.setAttribute('aria-expanded', String(open));
  t.textContent = open ? t.dataset.openLabel : t.dataset.closedLabel;
});

// Play a film in place; otherwise let the link open normally
document.addEventListener('click', (e) => {
  const v = e.target.closest('a.rs-video[data-embed]');
  if (!v) return;
  e.preventDefault();
  const wrap = document.createElement('div');
  wrap.className = 'vid-frame';
  const f = document.createElement('iframe');
  f.src = v.dataset.embed; f.title = v.dataset.title || 'Video';
  f.allow = 'autoplay; fullscreen; picture-in-picture'; f.allowFullscreen = true;
  wrap.appendChild(f);
  v.replaceWith(wrap);
});

// "Play" buttons that trigger a film card elsewhere on the page
document.addEventListener('click', (e) => {
  const b = e.target.closest('[data-play]');
  if (!b) return;
  const card = document.getElementById(b.dataset.play);
  if (card && card.dataset.embed) { e.preventDefault(); card.click(); }
});

// Artist email buttons: the address is assembled here so it never sits whole in the page source
document.addEventListener('click', (e) => {
  const b = e.target.closest('[data-email-user]');
  if (b) location.href = 'mailto:' + b.dataset.emailUser + '@' + b.dataset.emailDomain;
});

// Lightbox
const lb = $('#lightbox');
function closeLb() { lb.hidden = true; $('img', lb).removeAttribute('src'); }
document.addEventListener('click', (e) => {
  const a = e.target.closest('[data-lightbox]');
  if (a && lb) {
    e.preventDefault();
    $('img', lb).src = a.getAttribute('href'); $('img', lb).alt = a.dataset.alt || '';
    $('#lightbox-caption').textContent = a.dataset.caption || '';
    lb.hidden = false; $('#lightbox-close').focus();
  } else if (e.target.closest('#lightbox') && !e.target.closest('img')) closeLb();
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { if (lb && !lb.hidden) closeLb(); closeDialog(); } });

// Events filter tabs
$$('[data-filter-group]').forEach((group) => {
  const tabs = $$('.rs-tab', group);
  const rows = $$('.eventrow', group.parentElement);
  const apply = (f) => {
    tabs.forEach((t) => { const on = t.dataset.filter === f; t.classList.toggle('rs-tab--active', on); t.setAttribute('aria-selected', String(on)); });
    let upcoming = 0;
    rows.forEach((r) => {
      const show = f === 'All' || (f === 'Free' ? r.dataset.free === '1' : r.dataset.region === f);
      r.hidden = !show;
      if (show && r.dataset.upcoming === '1') upcoming++;
    });
    const none = $('[data-none-upcoming]'); if (none) none.hidden = upcoming > 0;
  };
  tabs.forEach((t) => t.addEventListener('click', () => apply(t.dataset.filter)));
});

// Membership pop-up -> Stripe Checkout
const dlg = $('#membership-dialog');
let tier = null;
function closeDialog() { if (dlg) dlg.hidden = true; }
document.addEventListener('click', (e) => {
  const b = e.target.closest('[data-membership]');
  if (b && dlg) {
    tier = b.dataset.membership;
    $('#m-title').textContent = b.dataset.title || 'Become a member';
    $('#m-blurb').textContent = b.dataset.blurb || '';
    $('#m-error').hidden = true;
    dlg.hidden = false; $('#m-name').focus();
  } else if (e.target.closest('[data-close-dialog]') || e.target === dlg) closeDialog();
});
const mForm = $('#membership-form');
if (mForm) mForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn = $('button[type=submit]', mForm), err = $('#m-error');
  const email = $('#m-email').value.trim();
  if (!email || btn.disabled) return;
  btn.disabled = true; const label = btn.textContent; btn.textContent = 'Taking you to checkout…'; err.hidden = true;
  const { ok, data } = await post('/membership/checkout', { tier, email, name: $('#m-name').value.trim() });
  if (ok && data.url) { window.location.href = data.url; return; }
  btn.disabled = false; btn.textContent = label;
  err.textContent = data.error || "We couldn't start checkout. Please try again."; err.hidden = false;
});

// Generic form handler: newsletter + contact
function wire(form, path, build, onOk) {
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = $('button[type=submit]', form), err = $('.form-error', form);
    const payload = build(new FormData(form));
    if (btn.disabled) return;
    btn.disabled = true; const label = btn.textContent; btn.textContent = form.dataset.busy; err.hidden = true;
    const { ok, data } = await post(path, payload);
    btn.disabled = false; btn.textContent = label;
    if (ok && data.ok) onOk(payload); else { err.textContent = data.error || 'Something went wrong. Please try again.'; err.hidden = false; }
  });
}
wire($('#newsletter-form'), '/subscribe',
  (f) => ({ email: f.get('email'), name: f.get('name'), website: f.get('website') }),
  (p) => { $('#newsletter-form').hidden = true; $('#newsletter-email').textContent = p.email; $('#newsletter-done').hidden = false; });
wire($('#contact-form'), '/contact',
  (f) => ({ name: f.get('name'), email: f.get('email'), enquiry: f.get('enquiry'), message: f.get('message'), website: f.get('website') }),
  () => { $('#contact-form').hidden = true; $('#contact-done').hidden = false; });

// Back from Stripe Checkout
const q = new URLSearchParams(location.search).get('membership');
const notice = $('#notice');
if (q && notice) {
  const msgs = {
    success: ['Welcome aboard', "You're in. Check your email for the receipt and your member details."],
    cancelled: ['Checkout cancelled', 'Checkout cancelled — nothing was charged. Join any time.'],
  };
  if (msgs[q]) {
    $('#notice-eyebrow').textContent = msgs[q][0]; $('#notice-text').textContent = msgs[q][1]; notice.hidden = false;
    history.replaceState(null, '', location.pathname + location.hash);
  }
}
$('#notice-close')?.addEventListener('click', () => (notice.hidden = true));
