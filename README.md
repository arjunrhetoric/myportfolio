# Arjun Singh — Portfolio

Personal portfolio of **Arjun Singh** (`product @ innoverse`). Built with Next.js 16,
React 19, and Tailwind CSS. All content is hardcoded in [`src/data/portfolio.ts`](src/data/portfolio.ts)
— no CMS, no backend.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

| What | Where |
| --- | --- |
| Profile, experience, education, skills, projects, blogs | `src/data/portfolio.ts` |
| Resume PDF | `public/resume.pdf` |
| Project screenshots | `public/*.png` |
| Avatar | `public/avatar.png` |
| Logo / favicon | `public/logo.svg`, `src/app/icon.svg` |
| Social share card (auto-generated) | `src/app/opengraph-image.tsx` |

## Terminal business card

A standalone npm package lives in [`npx-card/`](npx-card/) — published as
[`arjunrhetoric`](https://www.npmjs.com/package/arjunrhetoric). Run `npx arjunrhetoric`
anywhere to see it. To release a new version, bump `version` in
`npx-card/package.json` and run `npm publish --otp=<2fa-code>` from `npx-card/`.

## Deploy

```bash
npm run build
```

Push to GitHub and import the repo on [Vercel](https://vercel.com/new) (or run
`npx vercel`). After deploy, set the production URL in
`siteMetadata.siteUrl` (`src/data/portfolio.ts`) so Open Graph / Twitter cards
resolve with absolute URLs.
