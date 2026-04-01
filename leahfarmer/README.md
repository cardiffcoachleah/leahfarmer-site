# leahfarmer.com — Site Rebuild

Next.js site for leahfarmer.com — Coaching & Advisory.
Built with Next.js, deployed on Vercel.

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Staging Deployment (2minutecoach.uk)

This site is being built and reviewed on **2minutecoach.uk** before going live on leahfarmer.com.
leahfarmer.com is NOT touched during this process.

### Step 1 — Push to GitHub
Create a private GitHub repo and push this folder to it.

### Step 2 — Deploy on Vercel
1. Go to vercel.com
2. Click Add New Project
3. Import your GitHub repo
4. Vercel detects Next.js automatically — just click Deploy
5. You'll get a temporary .vercel.app URL immediately

### Step 3 — Add 2minutecoach.uk domain
1. In Vercel project settings → Domains
2. Add `2minutecoach.uk`
3. Vercel gives you DNS records to add
4. Go to Squarespace (where 2minutecoach.uk is registered)
5. Update the DNS records there to point to Vercel

### When ready to go live on leahfarmer.com
1. Add `leahfarmer.com` in Vercel project settings → Domains
2. Update DNS at Hover to point leahfarmer.com to Vercel
3. Remove 2minutecoach.uk from Vercel domains
4. leahfarmer.com is live. 2minutecoach.uk goes back to doing nothing.

---

## Updating content

- `pages/index.js` — Homepage
- `pages/coaching.js` — Coaching page
- `pages/fractional.js` — Fractional & Advisory page
- `pages/about.js` — About page
- `components/Nav.js` — Navigation
- `components/Footer.js` — Footer

## Brand colours

Defined as CSS variables in `styles/globals.css`:
- `--black: #00001A`
- `--teal: #0EB2CD`
- `--teal-light: #6AE8A4`
- `--teal-deep: #067181`
- `--white: #FFFFFF`

## Calendly link

`https://calendly.com/lfcoaching/free-discovery-call`
Used in: coaching.js, fractional.js, Footer.js
