# Ananya Kura — Portfolio

Live at **https://ananyamk1.github.io**. Built with Next.js + Tailwind, exported as a static site and hosted free on GitHub Pages.

## Editing content

All site content lives in **[`data/portfolio.ts`](data/portfolio.ts)**:

| What                  | Where in the file |
| --------------------- | ----------------- |
| Name, bio, tech stack | `profile`         |
| Social links          | `socials`         |
| Work experience       | `experience`      |
| Education / awards    | `education`, `achievements` |
| Projects              | `projects`        |
| Tools page            | `tools`           |

- **Add a project:** copy one of the objects in `projects`, give it a new `slug` (becomes `/projects/<slug>`).
- **Project screenshot:** put an image in `public/` (e.g. `public/raredx.png`) and set `image: "/raredx.png"`.
- **Resume download:** put your PDF at `public/resume.pdf` and set `resumeUrl: "/resume.pdf"`.

Page layout/styling lives in `app/` and `styles/dummyStyles.ts`.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
```

## Deploy

Push to `main`. The GitHub Action in `.github/workflows/deploy.yml` builds the site and publishes it to GitHub Pages (takes ~1–2 minutes). Check progress under the repo's **Actions** tab.
