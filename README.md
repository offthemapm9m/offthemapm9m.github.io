# Off The Map — channel website

Static site for the **Off The Map** YouTube channel (@OffTheMap-m9m, "Weird geography, explained.").
Plain HTML/CSS/JS — no build step, no dependencies. `index.html` sits at the root of this folder,
which is exactly the layout GitHub Pages wants.

**Status: built and staged locally only. Nothing has been published, no repo created, nothing pushed.**

## What's in here

| File | Purpose |
| --- | --- |
| `index.html` | The whole page: hero, latest-episodes player, Season 1 guide, Shorts, About, follow footer |
| `styles.css` | Dark map/compass theme (ink navy + parchment + map-pin orange) |
| `script.js` | Recomputes episode statuses (Out now / Next up / Upcoming) from release dates, fills the hero "Next drop" line, sets the footer year |
| `off-the-map-profile.png` | Channel logo (orange map pin) — hero, header, favicon |
| `off-the-map-banner.png` | Channel banner — used as the darkened hero backdrop |

How it stays current with zero maintenance:

- **Latest episodes** is YouTube's own uploads-playlist player
  (`UU_PNgKyZ256QP5NWMTuKS0A`, the uploads playlist derived from channel ID
  `UC_PNgKyZ256QP5NWMTuKS0A`). Every new episode appears there on its own.
- **Episode statuses** in the Season 1 guide are recomputed in the visitor's browser
  from each episode's release timestamp, so badges flip from "Upcoming" → "Next up" →
  "Out now" automatically as the Mon/Thu 7 AM CT drops land.

## GitHub account (verified 2026-10-28, read-only via the GitHub connector)

- GitHub is **connected**. Signed-in username: **`rebelbigkountry1`**
  (profile: https://github.com/rebelbigkountry1)
- Account created 2025-08-26; **0 public repositories** right now — no existing
  website repo to reuse, and the clean root URL below is still available to claim.

## Recommended publish route — GitHub Pages (free)

Use the **user-site repo** so the site lives at the shortest possible address:

- **Repo name:** `rebelbigkountry1.github.io` (must match the username exactly)
- **Site URL:** https://rebelbigkountry1.github.io/

Steps:

1. On github.com, create a new **public** repository named `rebelbigkountry1.github.io`
   (free GitHub Pages requires a public repo on a free account). Don't add a README —
   this folder already has one; it can be uploaded with the rest harmlessly.
2. Upload the **contents of this `website/` folder** into the repo root
   (`index.html` must sit at the repo root, not inside a subfolder).
   Either drag-and-drop via "Add file → Upload files" on the repo page, or push with git.
3. In the repo: **Settings → Pages** → Source: "Deploy from a branch",
   Branch: `main`, folder: `/ (root)` → Save.
4. Wait for the green "Your site is live at https://rebelbigkountry1.github.io/" banner
   (usually a minute or two), then open the URL and check the player loads.
5. After it's live: put the URL in the YouTube channel's About/links, the Link-in-bio
   spots on TikTok/Instagram, and the Discord server description.

Alternative if the root URL is ever wanted for something else: create a project repo
named `off-the-map` instead and the same steps publish to
https://rebelbigkountry1.github.io/off-the-map/ — the site works identically from a
subpath because every asset/link in it is relative or absolute-external.

Notes:

- The two PNGs are large (logo ~1.1 MB, banner ~2.7 MB). Well inside GitHub Pages
  limits, but the hero will load faster someday if the banner gets compressed —
  optional polish, not a blocker.
- Season 2 will need the episode list in `index.html` extended (one `<li>` per
  episode, same pattern) — everything else carries over.
