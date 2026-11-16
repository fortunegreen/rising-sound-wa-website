# Online editing for the committee: setup (one-off, about 45 minutes)

Result: Jon and the committee go to `https://admin.risingsoundwa.com.au`, sign in with GitHub, and edit events,
sessions, artists and so on in a form. Each save is a commit to GitHub. Cloudflare then rebuilds the public
site by itself, and the change is live in a minute or two.

How it fits together
- **`rising-sound-wa-website`** (existing Worker): the public static site. Unchanged.
- **`rising-sound-wa-admin`** (new Worker): only the editing screen. Built with `npm run build:admin`.
  It is marked noindex so Google ignores it.
- **GitHub repo**: where the content lives. Editors need a free GitHub account and write access to the repo.

> The GitHub App steps below are written from memory of Keystatic's GitHub-mode flow. Keystatic's own docs
> (keystatic.com/docs, "GitHub mode") were not reachable when this was written, so if a screen looks
> different, trust the on-screen prompts and tell me what you see.

## 1. Add these changes to the repo
Copy the changed files into the repo on a branch (see the file list in the chat), run `npm install`,
then `npm run build` to check the public site still builds (it must say "8 page(s) built"), commit and push.

## 2. Create the GitHub App (Keystatic does most of it)
1. In the project folder run `npm run dev:github` and open http://localhost:4321/keystatic
2. Keystatic offers to **create a GitHub App**. Follow the prompts, signed in to GitHub as the account that
   owns the repo (`fortunegreen`). When it asks, choose to install the app on **only** the
   `rising-sound-wa-website` repo.
3. Keystatic writes a `.env` file in the project folder with four values:
   `KEYSTATIC_GITHUB_CLIENT_ID`, `KEYSTATIC_GITHUB_CLIENT_SECRET`, `KEYSTATIC_SECRET`,
   `PUBLIC_KEYSTATIC_GITHUB_APP_SLUG`. Keep this file private. It is already git-ignored. Don't paste it into chat.
4. On GitHub: Settings → Developer settings → GitHub Apps → your new app → add this **Callback URL**
   (keep the localhost one too, so you can still test locally):
   `https://admin.risingsoundwa.com.au/api/keystatic/github/oauth/callback`

## 3. Create the admin Worker in Cloudflare
1. Workers & Pages → **Create → Import a repository** → pick `rising-sound-wa-website`.
2. Worker name: **`rising-sound-wa-admin`** (it must match `wrangler.admin.jsonc`).
3. Build command: `npm run build:admin`
   Deploy command: `npx wrangler deploy`
4. Build variables (Settings → Build → Variables and secrets): add
   `PUBLIC_KEYSTATIC_GITHUB_APP_SLUG` = the slug value from your `.env`.
5. Runtime secrets (Settings → Variables and Secrets → Add, type **Secret**): add
   `KEYSTATIC_GITHUB_CLIENT_ID`, `KEYSTATIC_GITHUB_CLIENT_SECRET`, `KEYSTATIC_SECRET` from your `.env`.
6. Settings → Domains & Routes → Add → Custom domain → `admin.risingsoundwa.com.au`.
7. Trigger a build (push a commit, or Deployments → Retry).

## 4. Make the public Worker rebuild when the committee saves
1. Workers & Pages → `rising-sound-wa-website` → Settings → **Builds** → connect the GitHub repo
   (branch `main`).
2. Build command: `npm run build`
   Deploy command: `npx wrangler deploy -c wrangler.jsonc`
   (The `-c wrangler.jsonc` matters. It stops the public Worker from ever picking up the admin build.)
3. While you're there, create a **deploy hook** and call it once a day around 1am Perth so events move from
   Upcoming to Past (see `DEPLOYMENT.md` section 6).

## 5. Give people access
1. Each editor makes a free GitHub account at github.com.
2. GitHub repo → Settings → Collaborators → **Add people** → give them **Write** access. Keep the repo **private**.
3. Send them `COMMITTEE-GUIDE.md`.

## 6. Test it
Sign in at `https://admin.risingsoundwa.com.au` as yourself, change something small (a venue name), save,
and check GitHub shows a new commit and the public site updates within a couple of minutes. Then undo the change.

## Good to know
- Editors save straight to `main`, so a mistake goes live. Anything can be undone from GitHub's history, and
  you can ask me about a review step (edits go to a branch, you approve) if you'd rather have one.
- Big camera photos are shrunk automatically on Cloudflare's builds (JPEGs only, 1600px wide). PNGs are not,
  so the guide asks editors to use JPEG.
- Local editing with `npm run dev` still works exactly as before.
- Removing someone's access: delete them as a collaborator on GitHub.
