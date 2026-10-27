# Hawaiʻi Appleseed reports

Public pages published from Cider (Hawaii-Appleseed/Cider). Each folder is one
page, written by `python3 -m docsync.website` when someone chooses
File ▸ Publish as a website… in the editor and then Saves or Publishes.
Its `.cider-page` file names the Cider project that owns the address.

Do not edit Cider's pages here by hand: the next publish replaces the whole folder.
Served by GitHub Pages at https://hawaii-appleseed.github.io/reports/.

## Blog embeds

A **blog embed** is an interactive graphic (a timeline, chart, calculator)
that goes inside a blog post on hiappleseed.org. Blog embeds live in `blog/`,
one folder per embed, and are placed by hand rather than by Cider. Cider never
writes into a folder it didn't create, so publishing can't touch them.

To ask for one, say: **"Make a blog embed for [post] and host it in reports/blog."**

Each folder holds:

| File | What it is |
|---|---|
| `squarespace-inject.html` | The embed itself. Edit this one. |
| `embed.js` | A small loader that pulls `squarespace-inject.html` into the post. |
| `README.md` | Which post it's for, where its content came from, and its Code Block. |

The blog post gets a two-line Squarespace Code Block ("Display Source" off),
listed in the folder's README:

    <div id="[name]-embed"></div>
    <script src="https://hawaii-appleseed.github.io/reports/blog/[folder]/embed.js"></script>

Changes to `squarespace-inject.html` reach the post within about 10 minutes of
committing to `main`, with nothing to re-paste.

| Folder | Blog post |
|---|---|
| `blog/snap-oct-1-2026-timeline/` | SNAP changes that took effect Oct 1, 2026 |
