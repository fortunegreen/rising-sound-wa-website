/* @ds-bundle: {"format":4,"namespace":"RisingSoundWADesignSystem_660faa","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Waveform","sourcePath":"components/core/Waveform.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"EventCard","sourcePath":"components/patterns/EventCard.jsx"},{"name":"Poster","sourcePath":"components/patterns/Poster.jsx"},{"name":"TierCard","sourcePath":"components/patterns/TierCard.jsx"},{"name":"VideoCard","sourcePath":"components/patterns/VideoCard.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"735d02b30097","components/core/Button.jsx":"2a4160228571","components/core/Card.jsx":"f0a132160c08","components/core/Icon.jsx":"cde3e5b8fce1","components/core/IconButton.jsx":"7fd907a502c2","components/core/Logo.jsx":"65ec4bebc5e5","components/core/SectionHeading.jsx":"4649c239f729","components/core/Tag.jsx":"1c7a877d64fb","components/core/Waveform.jsx":"ff42667ef990","components/feedback/Dialog.jsx":"ecce9f6801e4","components/feedback/Toast.jsx":"9f257414acb6","components/feedback/Tooltip.jsx":"076b59ec5b5e","components/forms/Checkbox.jsx":"a0eb6e5c17e5","components/forms/Input.jsx":"21df5ecebad3","components/forms/Radio.jsx":"3aca8a20ada4","components/forms/Select.jsx":"5aa328d186c8","components/forms/Switch.jsx":"23f1e87fabad","components/navigation/Tabs.jsx":"2e742416dd4e","components/patterns/EventCard.jsx":"1296fb7e0686","components/patterns/Poster.jsx":"ccf3856b010c","components/patterns/TierCard.jsx":"60ed90991504","components/patterns/VideoCard.jsx":"15a63a1bf939","ui_kits/website/EventScreen.jsx":"1cd0f035cf6c","ui_kits/website/HomeScreen.jsx":"56e796241038","ui_kits/website/JoinScreen.jsx":"e6b614863ff4","ui_kits/website/SiteChrome.jsx":"e66fed33b287","ui_kits/website/VideosScreen.jsx":"46e5e660c22b","ui_kits/website/WhatsOnScreen.jsx":"ca4690c0428f","ui_kits/website/data.js":"63f3f79220fc"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RisingSoundWADesignSystem_660faa = window.RisingSoundWADesignSystem_660faa || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  tone = "default",
  children,
  className = "",
  ...rest
}) {
  const cls = ["rs-badge", tone !== "default" && "rs-badge--" + tone, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  variant = "primary",
  size = "md",
  block = false,
  full = false,
  disabled = false,
  as = "button",
  href,
  icon,
  iconAfter,
  children,
  className = "",
  ...rest
}) {
  const cls = ["rs-btn", "rs-btn--" + variant, size !== "md" && "rs-btn--" + size, block && "rs-btn--block", full && "rs-btn--full", className].filter(Boolean).join(" ");
  const Tag = as === "a" ? "a" : "button";
  const props = Tag === "a" ? {
    href,
    className: cls,
    ...rest
  } : {
    className: cls,
    disabled,
    type: rest.type || "button",
    ...rest
  };
  return React.createElement(Tag, props, icon, children, iconAfter);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  tone = "default",
  block = false,
  interactive = false,
  flat = false,
  media,
  children,
  className = "",
  ...rest
}) {
  const cls = ["rs-card", tone !== "default" && "rs-card--" + tone, block && "rs-card--block", interactive && "rs-card--interactive", flat && "rs-card--flat", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    style: media ? {
      padding: 0
    } : undefined
  }, rest), media && /*#__PURE__*/React.createElement("div", {
    className: "rs-card__media"
  }, media), media ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--sp-5)"
    }
  }, children) : children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Lucide is loaded from CDN by the host page: https://unpkg.com/lucide@0.462.0/dist/umd/lucide.js
   The glyph is built into a node this component owns — never via the global
   lucide.createIcons(), which rewrites every [data-lucide] in the document and
   would stamp one instance's size onto all of them. */
const pascal = n => String(n).replace(/(^|[-_ ])([a-z0-9])/g, (_, __, c) => c.toUpperCase());
function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current,
      L = window.lucide;
    if (!el || !L) return;
    const node = (L.icons || {})[pascal(name)];
    if (!node || !L.createElement) return;
    const svg = L.createElement(node);
    svg.setAttribute("width", size);
    svg.setAttribute("height", size);
    svg.setAttribute("stroke-width", strokeWidth);
    svg.setAttribute("stroke", color);
    el.replaceChildren(svg);
  }, [name, size, strokeWidth, color]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    role: "img",
    "aria-hidden": "true",
    className: className,
    style: {
      display: "inline-flex",
      width: size,
      height: size,
      flex: "none",
      verticalAlign: "middle"
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  variant = "default",
  size = "md",
  round = false,
  label,
  children,
  className = "",
  ...rest
}) {
  const cls = ["rs-iconbtn", variant !== "default" && "rs-iconbtn--" + variant, size !== "md" && "rs-iconbtn--" + size, round && "rs-iconbtn--round", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    "aria-label": label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FILES = {
  lockup: "logo-lockup-transparent.png",
  lockupInk: "logo-lockup-ink.png",
  wordmark: "logo-wordmark.png",
  wordmarkInk: "logo-wordmark-ink.png",
  mark: "mark-waveform.png"
};
function Logo({
  variant = "lockup",
  height = 48,
  basePath = "assets",
  src,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src || basePath + "/" + FILES[variant],
    alt: "Rising Sound WA",
    className: className,
    style: {
      height,
      width: "auto",
      display: "block"
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  eyebrow,
  title,
  action,
  rule = "heavy",
  className = "",
  ...rest
}) {
  const cls = ["rs-sectionhead", rule === "amber" && "rs-sectionhead--amber", rule === "hair" && "rs-sectionhead--hair", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("div", null, eyebrow && /*#__PURE__*/React.createElement("span", {
    className: "rs-sectionhead__eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "rs-sectionhead__title"
  }, title)), action);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  tone = "default",
  children,
  className = "",
  ...rest
}) {
  const cls = ["rs-tag", tone !== "default" && "rs-tag--" + tone, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/Waveform.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SHAPE = [.35, .62, .48, .9, 1, .72, .55, .38, .24];
function Waveform({
  height = 24,
  bars = 9,
  animate = false,
  color,
  className = "",
  ...rest
}) {
  const cls = ["rs-wave", animate && "rs-wave--animate", className].filter(Boolean).join(" ");
  const list = Array.from({
    length: bars
  }, (_, i) => SHAPE[i % SHAPE.length]);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    style: {
      height
    },
    "aria-hidden": "true"
  }, rest), list.map((v, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      height: Math.round(height * v),
      background: color,
      animationDelay: i * 90 + "ms"
    }
  })));
}
Object.assign(__ds_scope, { Waveform });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Waveform.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = true,
  title,
  onClose,
  footer,
  children,
  className = "",
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "rs-dialog__scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    className: ["rs-dialog", className].filter(Boolean).join(" "),
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation()
  }, rest), title && /*#__PURE__*/React.createElement("h2", {
    className: "rs-dialog__title"
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--text-body)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--sp-3)",
      marginTop: "var(--sp-5)"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Toast({
  tone = "default",
  icon,
  children,
  onDismiss,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["rs-toast", tone !== "default" && "rs-toast--" + tone, className].filter(Boolean).join(" "),
    role: "status"
  }, rest), icon, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, children), onDismiss && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      font: "inherit",
      color: "inherit",
      opacity: .6
    }
  }, "\u2715"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  label,
  children,
  className = "",
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["rs-tooltip", className].filter(Boolean).join(" "),
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, rest), children, show && /*#__PURE__*/React.createElement("span", {
    className: "rs-tooltip__bubble"
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  className = "",
  ...rest
}) {
  const [on, setOn] = React.useState(defaultChecked || false);
  const isOn = checked !== undefined ? checked : on;
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setOn(!isOn);
    onChange && onChange(!isOn);
  };
  return /*#__PURE__*/React.createElement("label", _extends({
    className: ["rs-check", className].filter(Boolean).join(" "),
    style: disabled ? {
      opacity: .4
    } : undefined,
    onClick: toggle
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: ["rs-check__box", isOn && "rs-check__box--on"].filter(Boolean).join(" "),
    role: "checkbox",
    "aria-checked": isOn
  }, isOn && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "4"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 12l6 6L20 5"
  }))), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  id,
  type = "text",
  className = "",
  ...rest
}) {
  const uid = id || "in-" + (label || "field").toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return /*#__PURE__*/React.createElement("div", {
    className: "rs-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "rs-label",
    htmlFor: uid
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: type,
    className: ["rs-input", error && "rs-input--invalid", className].filter(Boolean).join(" ")
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    className: "rs-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "rs-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  checked,
  disabled,
  onChange,
  name,
  value,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    className: ["rs-check", className].filter(Boolean).join(" "),
    style: disabled ? {
      opacity: .4
    } : undefined,
    onClick: () => !disabled && onChange && onChange(value)
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: ["rs-check__box", "rs-check__box--round", checked && "rs-check__box--on"].filter(Boolean).join(" "),
    role: "radio",
    "aria-checked": !!checked,
    "data-name": name
  }, checked && /*#__PURE__*/React.createElement("span", {
    className: "rs-check__dot"
  })), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  options = [],
  id,
  className = "",
  children,
  ...rest
}) {
  const uid = id || "sel-" + (label || "field").toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return /*#__PURE__*/React.createElement("div", {
    className: "rs-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "rs-label",
    htmlFor: uid
  }, label), /*#__PURE__*/React.createElement("select", _extends({
    id: uid,
    className: ["rs-select", className].filter(Boolean).join(" ")
  }, rest), children || options.map(o => {
    const v = typeof o === "string" ? o : o.value;
    const l = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), hint && /*#__PURE__*/React.createElement("span", {
    className: "rs-field__hint"
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  className = "",
  ...rest
}) {
  const [on, setOn] = React.useState(defaultChecked || false);
  const isOn = checked !== undefined ? checked : on;
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setOn(!isOn);
    onChange && onChange(!isOn);
  };
  return /*#__PURE__*/React.createElement("label", _extends({
    className: ["rs-switch", className].filter(Boolean).join(" "),
    style: disabled ? {
      opacity: .4
    } : undefined,
    onClick: toggle
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: ["rs-switch__track", isOn && "rs-switch__track--on"].filter(Boolean).join(" "),
    role: "switch",
    "aria-checked": isOn
  }, /*#__PURE__*/React.createElement("span", {
    className: "rs-switch__thumb"
  })), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  onChange,
  className = "",
  ...rest
}) {
  const [inner, setInner] = React.useState(value || items[0] && (items[0].value || items[0]));
  const active = value !== undefined ? value : inner;
  const pick = v => {
    if (value === undefined) setInner(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["rs-tabs", className].filter(Boolean).join(" "),
    role: "tablist"
  }, rest), items.map(it => {
    const v = it.value || it;
    const l = it.label || it;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": active === v,
      className: ["rs-tab", active === v && "rs-tab--active"].filter(Boolean).join(" "),
      onClick: () => pick(v)
    }, l);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/patterns/EventCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function EventCard({
  day,
  month,
  title,
  support,
  venue,
  time,
  price,
  tags = [],
  badge,
  onSelect,
  action,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("article", _extends({
    className: ["rs-event", className].filter(Boolean).join(" "),
    onClick: onSelect
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "rs-event__date"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rs-event__day"
  }, day), month), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--sp-3)",
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "rs-event__title"
  }, title), badge && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: badge.tone
  }, badge.label)), support && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-body)",
      marginBottom: 6,
      maxWidth: "52ch"
    }
  }, support), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-meta)",
      letterSpacing: "var(--ls-mono)",
      color: "var(--text-muted)",
      textTransform: "uppercase"
    }
  }, [venue, time].filter(Boolean).join(" · ")), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--sp-2)",
      marginTop: "var(--sp-3)",
      flexWrap: "wrap"
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t,
    tone: "outline"
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--sp-4)"
    }
  }, price && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-meta)",
      color: "var(--text-primary)",
      whiteSpace: "nowrap"
    }
  }, price), action));
}
Object.assign(__ds_scope, { EventCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/EventCard.jsx", error: String((e && e.message) || e) }); }

// components/patterns/Poster.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Poster({
  src,
  alt,
  ratio = "2/3",
  interactive = false,
  caption,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("a", _extends({
    className: ["rs-poster", interactive && "rs-poster--interactive", className].filter(Boolean).join(" "),
    style: {
      aspectRatio: ratio
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt || ""
  })), caption && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: "var(--sp-2)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-micro)",
      letterSpacing: "var(--ls-mono)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, caption));
}
Object.assign(__ds_scope, { Poster });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/Poster.jsx", error: String((e && e.message) || e) }); }

// components/patterns/TierCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TierCard({
  name,
  price,
  period = "per year",
  blurb,
  features = [],
  cta = "Join",
  featured = false,
  onSelect,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["rs-tier", featured && "rs-tier--featured", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: featured ? "var(--rs-amber-700)" : "var(--rs-amber)"
    }
  }, name), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "rs-tier__price"
  }, price), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-meta)",
      opacity: .7
    }
  }, period)), blurb && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--fs-body-sm)",
      opacity: .85
    }
  }, blurb), /*#__PURE__*/React.createElement("ul", {
    className: "rs-tier__list"
  }, features.map(f => /*#__PURE__*/React.createElement("li", {
    key: f
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: featured ? "var(--rs-amber-700)" : "var(--rs-amber)"
    }
  }, "\u2014"), f))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: featured ? "inverse" : "primary",
    full: true,
    onClick: onSelect
  }, cta));
}
Object.assign(__ds_scope, { TierCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/TierCard.jsx", error: String((e && e.message) || e) }); }

// components/patterns/VideoCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function VideoCard({
  title,
  artist,
  duration,
  episode,
  image,
  tone = "teal",
  live = false,
  onPlay,
  className = "",
  ...rest
}) {
  const fills = {
    teal: "var(--rs-teal)",
    voltage: "var(--rs-voltage)",
    amber: "var(--rs-amber)",
    flare: "var(--rs-flare)",
    ink: "var(--rs-ink-700)"
  };
  return /*#__PURE__*/React.createElement("a", _extends({
    className: ["rs-video", className].filter(Boolean).join(" "),
    onClick: onPlay
  }, rest), image ? /*#__PURE__*/React.createElement("img", {
    className: "rs-video__thumb",
    src: image,
    alt: ""
  }) : /*#__PURE__*/React.createElement("div", {
    className: "rs-video__thumb",
    style: {
      background: fills[tone],
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Waveform, {
    height: 64,
    bars: 15,
    animate: live,
    color: "rgba(0,0,0,.55)"
  })), /*#__PURE__*/React.createElement("div", {
    className: "rs-video__veil"
  }), /*#__PURE__*/React.createElement("div", {
    className: "rs-video__body"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--sp-2)",
      marginBottom: "var(--sp-2)"
    }
  }, episode && /*#__PURE__*/React.createElement(__ds_scope.Badge, null, episode), live && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "live"
  }, "Live")), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h3)",
      color: "var(--rs-bone-50)",
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-meta)",
      letterSpacing: "var(--ls-mono)",
      textTransform: "uppercase",
      color: "var(--rs-amber)",
      marginTop: 4
    }
  }, [artist, duration].filter(Boolean).join(" · "))));
}
Object.assign(__ds_scope, { VideoCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/VideoCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/EventScreen.jsx
try { (() => {
const {
  Button,
  Icon,
  Tag,
  Badge,
  Radio,
  Select,
  Checkbox,
  Dialog,
  Toast,
  Poster,
  Waveform
} = window.RisingSoundWADesignSystem_660faa;
function EventScreen({
  go
}) {
  const ev = EVENTS[0];
  const [tier, setTier] = React.useState("general");
  const [qty, setQty] = React.useState("2");
  const [open, setOpen] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const price = tier === "general" ? 25 : tier === "member" ? 18 : 20;
  const total = "$" + price * Number(qty);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderBottom: "6px solid var(--rs-flare)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ev.image,
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(90deg,rgba(0,0,0,.94) 0%,rgba(0,0,0,.7) 55%,rgba(0,0,0,.3) 100%)"
    }
  }), /*#__PURE__*/React.createElement(Section, {
    style: {
      position: "relative",
      padding: "var(--sp-9) var(--sp-6) var(--sp-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--sp-3)",
      marginBottom: "var(--sp-4)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "members"
  }, "Members first"), /*#__PURE__*/React.createElement(Tag, {
    tone: "teal"
  }, "Album launch"), /*#__PURE__*/React.createElement(Tag, {
    tone: "outline"
  }, "Rock")), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-mega)",
      fontSize: "clamp(3rem,7vw,6rem)",
      letterSpacing: "var(--ls-mega)",
      textTransform: "uppercase",
      margin: 0,
      color: "var(--rs-bone-50)",
      maxWidth: "14ch"
    }
  }, "Gidge Rock"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--sp-4)",
      fontSize: 19,
      color: "var(--rs-bone-200)",
      maxWidth: "46ch"
    }
  }, "Wabi Sabi album launch, with Midnight Francine and Mergo."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--sp-5)",
      fontFamily: "var(--font-mono)",
      fontSize: 15,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--rs-amber)"
    }
  }, "Fri 6 Jun \xB7 7:00pm \xB7 Midland Records, 7 Spring Park Rd"))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: "var(--sp-8)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      color: "var(--text-primary)"
    }
  }, "Gidge Rock launch ", /*#__PURE__*/React.createElement("em", null, "Wabi Sabi"), " on the shop floor at Midland Records, with Midnight Francine and Mergo opening. One PA, no support slots, records for sale at the counter all night."), /*#__PURE__*/React.createElement("p", null, "Doors at 6:30pm. Standing room, all ages, and the last set finishes in time for the train."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--sp-6)",
      borderTop: "1px solid var(--line-hairline)",
      paddingTop: "var(--sp-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rs-eyebrow",
    style: {
      marginBottom: "var(--sp-4)"
    }
  }, "On the bill"), [["Gidge Rock", "Wabi Sabi album launch", "../../assets/imagery/live-band-stage-lights.jpg"], ["Midnight Francine", "Special guest", "../../assets/imagery/artist-fender-graffiti.jpg"], ["Mergo", "Special guest", "../../assets/imagery/artist-guitarist-sepia.jpg"]].map(([n, d, src]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: "flex",
      gap: "var(--sp-4)",
      alignItems: "center",
      padding: "var(--sp-3) 0",
      borderBottom: "1px solid var(--line-hairline)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: 64,
      height: 64,
      objectFit: "cover",
      flex: "none",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--text-primary)",
      fontWeight: 700,
      fontSize: 17
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--text-muted)"
    }
  }, d))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--sp-7)",
      display: "grid",
      gridTemplateColumns: "200px 1fr",
      gap: "var(--sp-5)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Poster, {
    src: ev.poster,
    alt: "June live at Midland Records poster",
    caption: "June / Live at Midland Records"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "rs-eyebrow",
    style: {
      marginBottom: "var(--sp-3)"
    }
  }, "The whole month"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15
    }
  }, "This show opens the June program. Saturday Sessions follow on the 13th and 27th, both free."), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconAfter: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    }),
    onClick: () => go("whatson")
  }, "See the full program")))), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: "sticky",
      top: 110,
      background: "var(--surface-1)",
      border: "2px solid var(--rs-bone-50)",
      padding: "var(--sp-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rs-eyebrow"
  }, "Book tickets"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 10,
      margin: "var(--sp-4) 0"
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "tier",
    value: "general",
    label: "General admission \u2014 $25",
    checked: tier === "general",
    onChange: setTier
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "tier",
    value: "member",
    label: "Member \u2014 $18",
    checked: tier === "member",
    onChange: setTier
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "tier",
    value: "concession",
    label: "Concession \u2014 $20",
    checked: tier === "concession",
    onChange: setTier
  })), /*#__PURE__*/React.createElement(Select, {
    label: "Quantity",
    options: ["1", "2", "3", "4"],
    value: qty,
    onChange: e => setQty(e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      margin: "var(--sp-5) 0",
      paddingTop: "var(--sp-4)",
      borderTop: "1px solid var(--line-hairline)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "rs-label"
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 36,
      color: "var(--text-primary)"
    }
  }, total)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    full: true,
    size: "lg",
    onClick: () => setOpen(true)
  }, "Check out"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: "var(--text-muted)",
      marginTop: "var(--sp-3)",
      marginBottom: 0
    }
  }, "Booking fee $0 \u2014 we don\u2019t charge one."))), done && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      left: 24,
      bottom: 24,
      zIndex: 70,
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 18
    }),
    onDismiss: () => setDone(false)
  }, "Tickets confirmed. Check your email for the QR codes."))), /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    title: "Confirm your tickets",
    onClose: () => setOpen(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => {
        setOpen(false);
        setDone(true);
      }
    }, "Pay ", total), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setOpen(false)
    }, "Back"))
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15
    }
  }, qty, " \xD7 ", tier, " admission \u2014 Gidge Rock, Midland Records, Fri 6 Jun."), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Email me when this artist plays again",
    defaultChecked: true
  })));
}
Object.assign(window, {
  EventScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/EventScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Icon,
  Tag,
  Badge,
  SectionHeading,
  EventCard,
  VideoCard,
  Poster,
  Waveform,
  Card
} = window.RisingSoundWADesignSystem_660faa;
function HomeScreen({
  go
}) {
  const next = EVENTS[0];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderBottom: "6px solid var(--rs-teal)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/live-band-stage-lights.jpg",
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(90deg,rgba(0,0,0,.92) 0%,rgba(0,0,0,.72) 48%,rgba(0,0,0,.35) 100%)"
    }
  }), /*#__PURE__*/React.createElement(Section, {
    style: {
      position: "relative",
      padding: "var(--sp-9) var(--sp-6) var(--sp-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "62%"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "rs-eyebrow"
  }, "Midland \xB7 Perth \xB7 Western Australia"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-mega)",
      letterSpacing: "var(--ls-mega)",
      textTransform: "uppercase",
      margin: "var(--sp-4) 0 0",
      color: "var(--rs-bone-50)"
    }
  }, "Live music", /*#__PURE__*/React.createElement("br", null), "made in", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--rs-amber)"
    }
  }, "Western Australia")), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "44ch",
      marginTop: "var(--sp-5)",
      fontSize: 19,
      color: "var(--rs-bone-200)"
    }
  }, "Free Saturday Sessions on the shop floor at Midland Records, album launches at night, and a rehearsal-room fund for the players."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--sp-3)",
      marginTop: "var(--sp-6)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "ticket",
      size: 18
    }),
    onClick: () => go("whatson")
  }, "See what\u2019s on"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => go("join")
  }, "Become a member"))))), /*#__PURE__*/React.createElement(Ticker, {
    items: ["Saturday Sessions \u2014 free, 12\u20132pm", "Gidge Rock album launch 6 June", "Rehearsal fund round 3 open", "Members book 48hrs early"]
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.15fr 1fr",
      gap: "var(--sp-7)",
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 420,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: next.image,
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--overlay-bottom)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      padding: "var(--sp-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: ".14em",
      textTransform: "uppercase",
      color: "var(--rs-amber)",
      marginBottom: 10
    }
  }, "Next up \xB7 Fri 6 Jun"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-h2)",
      fontSize: 44,
      textTransform: "uppercase",
      color: "var(--rs-bone-50)",
      lineHeight: 1
    }
  }, next.title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontSize: 15,
      color: "var(--rs-bone-200)",
      maxWidth: "40ch"
    }
  }, next.support), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--sp-4)",
      display: "flex",
      gap: "var(--sp-3)",
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => go("event")
  }, "Tickets from $18"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      textTransform: "uppercase",
      color: "var(--rs-bone-200)"
    }
  }, "Midland Records \xB7 7:00pm")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--sp-3)",
      gridTemplateRows: "auto 1fr"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--rs-teal)",
      padding: "var(--sp-5)",
      color: "var(--rs-ink)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: ".14em",
      textTransform: "uppercase",
      marginBottom: 8
    }
  }, "Every other Saturday"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-h2)",
      fontSize: 32,
      textTransform: "uppercase",
      lineHeight: 1
    }
  }, "Saturday Sessions"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 10,
      marginBottom: 0,
      fontSize: 15
    }
  }, "Two hours, two acts, no cover charge. 12\u20132pm on the shop floor at Midland Records, 7 Spring Park Rd.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--rs-bone-50)",
      color: "var(--rs-ink)",
      padding: "var(--sp-5)",
      display: "flex",
      gap: "var(--sp-4)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-feature)",
      fontSize: 52,
      lineHeight: 1
    }
  }, "412"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      lineHeight: 1.35
    }
  }, "members keeping the lights on and the rooms open."))))), /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "What's on",
    title: "Coming up",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      iconAfter: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 16
      }),
      onClick: () => go("whatson")
    }, "All events")
  }), /*#__PURE__*/React.createElement("div", null, EVENTS.slice(0, 4).map(e => /*#__PURE__*/React.createElement(EventCard, _extends({
    key: e.title
  }, e, {
    onSelect: () => go("event"),
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm"
    }, e.price === "Free" ? "RSVP" : "Tickets")
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--rs-ink-900)"
    }
  }, /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Posters",
    title: "On the wall",
    rule: "amber"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "var(--sp-4)"
    }
  }, POSTERS.map(p => /*#__PURE__*/React.createElement(Poster, _extends({
    key: p.src
  }, p, {
    interactive: true,
    onClick: () => go("whatson")
  })))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Sessions on film",
    title: "Watch a set",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      iconAfter: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 16
      }),
      onClick: () => go("videos")
    }, "All sessions")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--sp-4)"
    }
  }, SESSIONS.slice(0, 3).map(s => /*#__PURE__*/React.createElement(VideoCard, _extends({
    key: s.episode
  }, s, {
    onPlay: () => go("videos")
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--rs-bone-50)",
      color: "var(--rs-ink)"
    }
  }, /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr auto",
      gap: "var(--sp-7)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--rs-teal-700)"
    }
  }, "Membership"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-display)",
      fontSize: 56,
      textTransform: "uppercase",
      color: "var(--rs-ink)",
      margin: "var(--sp-3) 0 var(--sp-4)",
      letterSpacing: "var(--ls-display)"
    }
  }, "Join the room"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "46ch",
      fontSize: 17,
      color: "var(--rs-ink-600)"
    }
  }, "From $30 a year. Member pricing on ticketed shows, 48-hour early booking, and a share of the rehearsal room fund for players."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--sp-3)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    block: true,
    onClick: () => go("join")
  }, "Become a member"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    style: {
      color: "var(--rs-ink)"
    },
    onClick: () => go("join")
  }, "Compare tiers"))), /*#__PURE__*/React.createElement(Waveform, {
    height: 140,
    bars: 11,
    color: "var(--rs-ink)"
  })))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/JoinScreen.jsx
try { (() => {
const {
  Button,
  Icon,
  Input,
  Select,
  Checkbox,
  Switch,
  TierCard,
  SectionHeading,
  Toast,
  Card
} = window.RisingSoundWADesignSystem_660faa;
function JoinScreen({
  go
}) {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--rs-amber)",
      color: "var(--rs-ink)"
    }
  }, /*#__PURE__*/React.createElement(Section, {
    style: {
      padding: "var(--sp-8) var(--sp-6)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase"
    }
  }, "Membership"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-mega)",
      fontSize: "clamp(3rem,7vw,5.5rem)",
      letterSpacing: "var(--ls-mega)",
      textTransform: "uppercase",
      color: "var(--rs-ink)",
      margin: "var(--sp-3) 0 0"
    }
  }, "Join the room"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "48ch",
      marginTop: "var(--sp-4)",
      fontSize: 18,
      color: "var(--rs-ink-700)"
    }
  }, "412 members fund the venues, the fees and the rehearsal rooms. Pick a tier and we\u2019ll see you at the next Saturday Session."))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--sp-4)",
      marginBottom: "var(--sp-9)"
    }
  }, /*#__PURE__*/React.createElement(TierCard, {
    name: "Listener",
    price: "$30",
    blurb: "For people who turn up.",
    features: ["Member ticket pricing", "48-hour early booking", "Monthly gig guide"],
    cta: "Join as Listener"
  }), /*#__PURE__*/React.createElement(TierCard, {
    name: "Supporter",
    price: "$60",
    blurb: "For the people in the room.",
    features: ["Everything in Listener", "Two guest passes a year", "Rising Rooms taping invites", "Name in the season program"],
    featured: true,
    cta: "Join as Supporter"
  }), /*#__PURE__*/React.createElement(TierCard, {
    name: "Player",
    price: "$90",
    blurb: "For working musicians.",
    features: ["Everything in Supporter", "Rehearsal room credit", "Grant application support", "A Saturday Sessions slot on request"],
    cta: "Join as Player"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--sp-8)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Step 1 of 2",
    title: "Your details",
    rule: "hair"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--sp-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--sp-4)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "First name",
    placeholder: "Jo"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Last name",
    placeholder: "Marsden"
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@example.com",
    hint: "One newsletter a month. Nothing else."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--sp-4)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Postcode",
    placeholder: "6000"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Tier",
    options: ["Listener $30", "Supporter $60", "Player $90"],
    defaultValue: "Supporter $60"
  })), /*#__PURE__*/React.createElement(Select, {
    label: "I mostly",
    options: ["Come to shows", "Play shows", "Both"]
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Instrument or act name",
    placeholder: "Optional"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 10,
      marginTop: "var(--sp-2)"
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Send me the monthly gig guide",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "I'd like to volunteer at events"
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Auto-renew my membership",
    defaultChecked: true
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => setSent(true)
  }, "Continue to payment"), sent && /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 18
    }),
    onDismiss: () => setSent(false)
  }, "Details saved. Payment is the next step."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--sp-4)",
      position: "sticky",
      top: 110
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "teal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rs-eyebrow",
    style: {
      color: "var(--rs-ink)"
    }
  }, "Where it goes"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: "var(--sp-4) 0 0",
      display: "grid",
      gap: 12,
      fontSize: 15,
      color: "var(--rs-ink)"
    }
  }, [["58%", "Artist fees"], ["24%", "Venue and production"], ["12%", "Rehearsal room fund"], ["6%", "Admin"]].map(([p, l]) => /*#__PURE__*/React.createElement("li", {
    key: l,
    style: {
      display: "flex",
      gap: "var(--sp-4)",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 26,
      minWidth: 64
    }
  }, p), /*#__PURE__*/React.createElement("span", null, l))))), /*#__PURE__*/React.createElement(Card, {
    tone: "light",
    media: /*#__PURE__*/React.createElement("img", {
      src: "../../assets/imagery/session-singer-midland-wide.jpg",
      alt: ""
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-feature)",
      fontSize: 24,
      lineHeight: 1.15,
      color: "var(--rs-ink)"
    }
  }, "\u201CPlaceholder quote \u2014 send us a real one from a member and it goes straight in here.\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      textTransform: "uppercase",
      letterSpacing: ".08em",
      marginTop: "var(--sp-4)",
      color: "var(--rs-ink-500)"
    }
  }, "Member since 2023"))))));
}
Object.assign(window, {
  JoinScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/JoinScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteChrome.jsx
try { (() => {
const {
  Logo,
  Button,
  IconButton,
  Icon,
  Waveform
} = window.RisingSoundWADesignSystem_660faa;
const NAV = [["home", "Home"], ["whatson", "What's on"], ["videos", "Sessions"], ["join", "Membership"]];
function Header({
  route,
  go
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 40,
      background: "rgba(0,0,0,.92)",
      backdropFilter: "var(--blur-glass)",
      borderBottom: "1px solid var(--line-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--maxw-page)",
      margin: "0 auto",
      padding: "0 var(--sp-6)",
      height: 84,
      display: "flex",
      alignItems: "center",
      gap: "var(--sp-7)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("home");
    },
    style: {
      border: "none",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 44,
    src: "../../assets/logo-lockup-transparent.png"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: "var(--sp-5)",
      marginLeft: "auto"
    }
  }, NAV.map(([k, l]) => /*#__PURE__*/React.createElement("a", {
    key: k,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(k);
    },
    style: {
      border: "none",
      fontFamily: "var(--font-text)",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: route === k ? "var(--rs-amber)" : "var(--rs-bone-50)",
      whiteSpace: "nowrap",
      paddingBottom: 2,
      boxShadow: route === k ? "inset 0 -3px 0 0 var(--rs-amber)" : "none"
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--sp-3)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Search",
    variant: "bare"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 20
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => go("join")
  }, "Join"))));
}
function Ticker({
  items
}) {
  const line = items.join("  \u2022  ");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--rs-amber)",
      color: "var(--rs-ink)",
      overflow: "hidden",
      borderTop: "2px solid var(--rs-ink)",
      borderBottom: "2px solid var(--rs-ink)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--sp-6)",
      alignItems: "center",
      padding: "10px 0",
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: ".12em",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      animation: "rs-ticker 28s linear infinite"
    }
  }, /*#__PURE__*/React.createElement("span", null, line), /*#__PURE__*/React.createElement("span", null, line), /*#__PURE__*/React.createElement("span", null, line)));
}
function Footer({
  go
}) {
  const col = (title, links) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--rs-amber)",
      marginBottom: "var(--sp-4)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      border: "none",
      color: "var(--rs-bone-200)",
      fontSize: 14
    }
  }, l))));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--rs-ink-900)",
      borderTop: "6px solid var(--rs-amber)",
      padding: "var(--sp-9) var(--sp-6) var(--sp-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--maxw-page)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "2fr 1fr 1fr 1fr",
      gap: "var(--sp-7)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    height: 56,
    src: "../../assets/logo-lockup-transparent.png"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--sp-4)",
      maxWidth: "34ch",
      fontSize: 14,
      color: "var(--text-muted)"
    }
  }, "A not-for-profit putting Western Australian musicians in front of rooms full of people. Live at Midland Records, 7 Spring Park Rd, Midland. Every ticket goes back into the program."), /*#__PURE__*/React.createElement(Waveform, {
    height: 22,
    bars: 17
  })), col("Go", ["What's on", "Saturday Sessions", "Sessions on film", "Membership"]), col("Musicians", ["Play a show", "Submit a session", "Grants & help", "Rehearsal fund"]), col("Org", ["About us", "Our board", "Annual report", "Contact"])), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--maxw-page)",
      margin: "var(--sp-8) auto 0",
      paddingTop: "var(--sp-5)",
      borderTop: "1px solid var(--line-hairline)",
      display: "flex",
      justifyContent: "space-between",
      gap: "var(--sp-5)",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: ".06em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Rising Sound WA acknowledges the Whadjuk Noongar people, traditional custodians of the land we play on."), /*#__PURE__*/React.createElement("span", null, "ABN 00 000 000 000")));
}
function Section({
  children,
  pad = true,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--maxw-page)",
      margin: "0 auto",
      padding: pad ? "var(--sp-9) var(--sp-6)" : "0 var(--sp-6)",
      ...style
    }
  }, children);
}
Object.assign(window, {
  Header,
  Footer,
  Ticker,
  Section
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteChrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/VideosScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Icon,
  IconButton,
  Badge,
  SectionHeading,
  VideoCard,
  Waveform
} = window.RisingSoundWADesignSystem_660faa;
function VideosScreen({
  go
}) {
  const [playing, setPlaying] = React.useState(false);
  const feat = SESSIONS[0];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--rs-ink-900)",
      borderBottom: "1px solid var(--line-hairline)"
    }
  }, /*#__PURE__*/React.createElement(Section, {
    style: {
      padding: "var(--sp-8) var(--sp-6) var(--sp-7)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "rs-eyebrow"
  }, "Sessions on film"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-display)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-display)",
      margin: "var(--sp-3) 0 0"
    }
  }, "Three songs, one take"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "54ch",
      marginTop: "var(--sp-4)",
      fontSize: 17
    }
  }, "Filmed on the shop floor at Midland Records between the racks. No overdubs, no second go."))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "21/9",
      overflow: "hidden",
      marginBottom: "var(--sp-6)",
      background: "var(--rs-ink-700)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: feat.image,
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--overlay-bottom)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      padding: "var(--sp-6)",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: "var(--sp-5)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "session"
  }, feat.episode), playing && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Badge, {
    tone: "live"
  }, "Now playing"), /*#__PURE__*/React.createElement(Waveform, {
    height: 20,
    bars: 9,
    animate: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-h2)",
      fontSize: 40,
      textTransform: "uppercase",
      color: "var(--rs-bone-50)"
    }
  }, feat.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      textTransform: "uppercase",
      color: "var(--rs-amber)",
      marginTop: 6
    }
  }, feat.artist, " \xB7 ", feat.duration)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--sp-3)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: playing ? "Pause" : "Play",
    variant: "accent",
    size: "lg",
    round: true,
    onClick: () => setPlaying(!playing)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: playing ? "pause" : "play",
    size: 22
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "Share"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "share-2",
    size: 18
  }))))), /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Archive",
    title: "Every session",
    rule: "hair",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      iconAfter: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 16
      })
    }, "Subscribe")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--sp-4)"
    }
  }, SESSIONS.map(s => /*#__PURE__*/React.createElement(VideoCard, _extends({
    key: s.episode
  }, s))))));
}
Object.assign(window, {
  VideosScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/VideosScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WhatsOnScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Icon,
  Tabs,
  Select,
  SectionHeading,
  EventCard,
  Poster
} = window.RisingSoundWADesignSystem_660faa;
function WhatsOnScreen({
  go
}) {
  const [filter, setFilter] = React.useState("All");
  const list = filter === "All" ? EVENTS : EVENTS.filter(e => e.kind === filter);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--rs-teal)",
      color: "var(--rs-ink)"
    }
  }, /*#__PURE__*/React.createElement(Section, {
    style: {
      padding: "var(--sp-8) var(--sp-6) var(--sp-7)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase"
    }
  }, "What\u2019s on"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-display)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-display)",
      margin: "var(--sp-3) 0 0",
      color: "var(--rs-ink)"
    }
  }, "Live at Midland Records"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "52ch",
      marginTop: "var(--sp-4)",
      fontSize: 17
    }
  }, "7 Spring Park Rd, Midland. Saturday Sessions are free, 12\u20132pm. Members book ticketed shows 48 hours before general release."))), /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: "var(--sp-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: "var(--sp-5)",
      marginBottom: "var(--sp-6)"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: ["All", "Saturday Sessions", "Concerts"],
    value: filter,
    onChange: setFilter
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 220
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Venue",
    options: ["All venues", "Midland Records"]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: "var(--sp-2)"
    }
  }, list.length, " events"), /*#__PURE__*/React.createElement("div", null, list.map(e => /*#__PURE__*/React.createElement(EventCard, _extends({
    key: e.title
  }, e, {
    onSelect: () => go("event"),
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm"
    }, e.price === "Free" ? "RSVP" : "Tickets")
  })))), list.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--sp-8) 0",
      textAlign: "center",
      color: "var(--text-muted)"
    }
  }, "Nothing in this category yet.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--rs-ink-900)"
    }
  }, /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Poster archive",
    title: "Every gig, on paper",
    rule: "hair"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "var(--sp-4)"
    }
  }, POSTERS.map(p => /*#__PURE__*/React.createElement(Poster, _extends({
    key: p.src
  }, p, {
    interactive: true
  })))))));
}
Object.assign(window, {
  WhatsOnScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WhatsOnScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// Real line-up taken verbatim from the supplied Rising Sound WA gig posters.
// Prices, ticket counts and member numbers are still placeholders.
const IMG = "../../assets/imagery/",
  POSTER = "../../assets/posters/";
const EVENTS = [{
  day: "06",
  month: "Jun / Fri",
  title: "Gidge Rock",
  support: "Wabi Sabi album launch, with Midnight Francine and Mergo",
  venue: "Midland Records",
  time: "7:00pm",
  price: "$25 / $18 members",
  tags: ["Album launch", "Rock"],
  kind: "Concerts",
  image: "../../assets/imagery/live-band-stage-lights.jpg",
  poster: "../../assets/posters/poster-june-live-at-midland.jpg"
}, {
  day: "13",
  month: "Jun / Sat",
  title: "Tanya Hemi and The Dusty Stingrays",
  venue: "Midland Records",
  time: "12\u20132pm",
  price: "Free",
  kind: "Saturday Sessions",
  badge: {
    tone: "session",
    label: "Saturday Sessions"
  },
  image: "../../assets/imagery/session-singer-midland-tall.jpg",
  poster: "../../assets/posters/poster-saturday-sessions-teal.jpg"
}, {
  day: "27",
  month: "Jun / Sat",
  title: "String and Bone",
  venue: "Midland Records",
  time: "12\u20132pm",
  price: "Free",
  tags: ["Folk"],
  kind: "Saturday Sessions",
  badge: {
    tone: "session",
    label: "Saturday Sessions"
  },
  image: "../../assets/imagery/artist-guitarist-sepia.jpg"
}, {
  day: "08",
  month: "Aug / Sat",
  title: "Vissac and Moana Mayatrix",
  venue: "Midland Records",
  time: "12\u20132pm",
  price: "Free",
  kind: "Saturday Sessions",
  badge: {
    tone: "session",
    label: "Saturday Sessions"
  },
  image: "../../assets/imagery/artist-fender-graffiti.jpg",
  poster: "../../assets/posters/poster-saturday-sessions-yellow.jpg"
}, {
  day: "22",
  month: "Aug / Sat",
  title: "Arturo and Blue Minou",
  venue: "Midland Records",
  time: "12\u20132pm",
  price: "Free",
  kind: "Saturday Sessions",
  badge: {
    tone: "session",
    label: "Saturday Sessions"
  },
  image: "../../assets/imagery/session-setup-midland-records.jpg",
  poster: "../../assets/posters/poster-saturday-sessions-pink.jpg"
}];
const POSTERS = [{
  src: "../../assets/posters/poster-june-live-at-midland.jpg",
  alt: "June live at Midland Records",
  caption: "June / Live at Midland Records"
}, {
  src: "../../assets/posters/poster-saturday-sessions-teal.jpg",
  alt: "Saturday Sessions, June 13",
  caption: "Saturday Sessions / 13 June"
}, {
  src: "../../assets/posters/poster-saturday-sessions-yellow.jpg",
  alt: "Saturday Sessions, 8 August",
  caption: "Saturday Sessions / 8 August"
}, {
  src: "../../assets/posters/poster-saturday-sessions-pink.jpg",
  alt: "Saturday Sessions, 22 August",
  caption: "Saturday Sessions / 22 August"
}];
const SESSIONS = [{
  episode: "S 05",
  title: "Live at Midland Records",
  artist: "Moana Mayatrix",
  duration: "12:40",
  image: "../../assets/imagery/session-singer-midland-wide.jpg"
}, {
  episode: "S 04",
  title: "Three songs, one take",
  artist: "Arturo",
  duration: "09:55",
  image: "../../assets/imagery/session-setup-midland-records.jpg"
}, {
  episode: "S 03",
  title: "Wabi Sabi, stripped",
  artist: "Gidge Rock",
  duration: "14:02",
  image: "../../assets/imagery/live-band-stage-lights.jpg"
}, {
  episode: "S 02",
  title: "Shop floor set",
  artist: "Blue Minou",
  duration: "11:18",
  image: "../../assets/imagery/artist-fender-graffiti.jpg"
}, {
  episode: "S 01",
  title: "First session",
  artist: "Tanya Hemi",
  duration: "10:05",
  image: "../../assets/imagery/artist-guitarist-sepia.jpg"
}, {
  episode: "S 00",
  title: "Pilot",
  artist: "String and Bone",
  duration: "08:30",
  tone: "teal"
}];
Object.assign(window, {
  EVENTS,
  POSTERS,
  SESSIONS,
  IMG,
  POSTER
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Waveform = __ds_scope.Waveform;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.EventCard = __ds_scope.EventCard;

__ds_ns.Poster = __ds_scope.Poster;

__ds_ns.TierCard = __ds_scope.TierCard;

__ds_ns.VideoCard = __ds_scope.VideoCard;

})();
