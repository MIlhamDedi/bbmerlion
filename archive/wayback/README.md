# BBMerlion — Wayback Machine mirror

Local mirror of the original bbmerlion.com (2018), downloaded from the
Internet Archive Wayback Machine on 2026-07-19 for future reference.
The live site in this repo is a rebuild; this folder preserves the source
material it was rebuilt from.

## Pages (raw HTML, `id_` unmodified captures)

| File | Capture | Source |
|------|---------|--------|
| index.html | 2018-08-04 22:52:44 | https://web.archive.org/web/20180804225244/http://bbmerlion.com/ |
| about.html | 2018-08-18 07:36:00 | https://web.archive.org/web/20180818073600/http://bbmerlion.com/about.html |
| learn.html | 2018-08-18 07:53:41 | https://web.archive.org/web/20180818075341/http://bbmerlion.com/learn.html |
| campus.html | 2018-08-18 07:11:13 | https://web.archive.org/web/20180818071113/http://bbmerlion.com/campus.html |
| contact.html | 2018-08-18 07:13:11 | https://web.archive.org/web/20180818071311/http://bbmerlion.com/contact.html |

## Assets

CSS, JS, and images are mirrored under their original paths (`css/`,
`common-files/`, `flat-ui/`, `img/`), fetched from the captures nearest
2018-08-18 (`im_` raw responses).

## Crew portraits (`img/crew/`)

Recovered from the 2018-10-06 crawl (nearest capture per file):
pasha, dila, zhafir, ghifi, farhan, imam, naufal, karin.

**Permanently unrecoverable** — the only Wayback capture of each is an
HTTP 302 redirect to `error.hostinger.eu`, i.e. the origin server was
already failing when the crawler visited; the image bytes were never
archived: **pras, tony, audi, jadug, al, radit, ghifari**.

Also not archived: `flat-ui/js/bootstrap.min.js`.

The About page (`src/pages/about.astro`) automatically shows any portrait
placed in `public/assets/bbmerlion-archive/crew/<name>.jpg` and falls back
to initials otherwise.
