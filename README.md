# Tushar Sharma — performance marketing portfolio

A Next.js portfolio for Tushar Sharma, a performance marketer and Meta ads specialist based in Delhi.

## Stack

- Next.js App Router (JavaScript and JSX)
- Tailwind CSS
- Lucide React

There is no database and no contact API. The contact form validates in the browser and opens a `mailto:` draft to tusharsharma5510@gmail.com.

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm start
```

## Routes

| Page | Route |
|---|---|
| Home | `/` |
| About | `/about` |
| Services | `/services` |
| Case studies | `/case-studies` |
| Shubcure Ayurveda | `/case-studies/shubcure-ayurveda` |
| Unix Ayurveda | `/case-studies/unix-ayurveda` |
| Vishnu Murti Trust | `/case-studies/vishnu-murti-trust` |
| Brand On Top & Hisharder | `/case-studies/brand-on-top-hisharder` |
| Campaign results | `/results` |
| Experience | `/experience` |
| Skills | `/skills` |
| Education | `/education` |
| Contact | `/contact` |

## Reported results

Figures are labeled with the reporting period when that period is known. They are not combined into one campaign total. Employment dates and graduation years that were not supplied are not invented.

## Campaign screenshots

No Meta Ads Manager exports were in the project folder when this site was built, so the gallery is empty rather than filled with recreated dashboards.

To add a real export:

1. Copy the image into `public/images/campaigns/` without cropping or stretching it.
2. Add an entry to `data/campaigns.js` with the file’s real `width` and `height`, alt text, a caption that names the reporting period, and the case-study `slug` when it belongs to one project.

The results page and the matching case study will show it in a gallery. Opening a thumbnail uses a dialog and keeps the original aspect ratio.

## Site URL

Metadata, the sitemap, and `robots.txt` use `NEXT_PUBLIC_SITE_URL` when it is set. Otherwise they use `http://localhost:3000`. Set the variable to the real domain before production. A production domain is not hardcoded.

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```
