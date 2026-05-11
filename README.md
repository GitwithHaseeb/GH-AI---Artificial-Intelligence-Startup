<div align="center">

# GH AI — Artificial Intelligence Startup

**Intelligence that empowers.**

A production-ready, multi-page marketing website for **GH AI**, an enterprise
artificial intelligence company specializing in computer vision, large
language models, and autonomous agents.

[![Made with HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](#license)

</div>

---

## Overview

GH AI is a five-page enterprise AI website built with pure, dependency-free
HTML, CSS, and vanilla JavaScript. It ships with a dark editorial visual
system, glassmorphism navigation, scroll-reveal animations, and a fully
responsive layout — all without a build step.

Founded by **Ghania Tanveer** and **Muhammad Haseeb**, GH AI showcases
research, platform capabilities, and contact channels in a single,
performant static bundle ready for deployment to Vercel, Netlify, GitHub
Pages, or any static host.

> This project was built in collaboration with
> **[Ghania Tanveer](https://github.com/ghaniatanveer)** — AI/ML Engineer and
> co-founder of GH AI.

---

## Live Demo

| Environment | URL |
| ----------- | --- |
| Production  | _Add your Vercel URL here after deployment_ |
| Repository  | <https://github.com/GitwithHaseeb/GH-AI---Artificial-Intelligence-Startup> |

---

## Features

- **Multi-page architecture** — Home, Platform, Research, About / Careers, and Contact.
- **Dark editorial visual system** with a signature cyan AI accent (`#06b6d4`).
- **Glassmorphism navigation** with dropdowns and a mobile hamburger menu.
- **Floating bottom navigation** and a back-to-top button on every page.
- **Scroll-reveal animations** (`fade-up`) on hero, cards, and grids using `IntersectionObserver`.
- **Fully responsive** across mobile, tablet, and desktop breakpoints.
- **SEO ready** — title, meta description, Open Graph, and Twitter Card tags on every page.
- **Accessible** — semantic landmarks, ARIA labels on icon buttons, and focus styles.
- **Contact form** with required-field and email-format validation plus inline feedback.
- **Zero build step** — drop the folder on any static host and ship.

---

## Tech Stack

- **HTML5** — semantic markup with five standalone pages
- **CSS3** — custom design system, CSS variables, grid + flex, responsive media queries
- **JavaScript (ES6+)** — mobile menu, scroll reveal, form validation, back-to-top
- **[Iconify](https://iconify.design/)** — Solar and Material Design icon sets via CDN
- **[Fontshare — Satoshi](https://www.fontshare.com/fonts/satoshi)** — primary typeface
- **Vercel** — production hosting

---

## Project Structure

```text
gh-ai-website/
├── index.html          # Landing / hero + capabilities + showcase
├── platform.html       # Product platform overview
├── research.html       # Research papers and themes
├── about.html          # Company, founders, and careers
├── contact.html        # Contact form and channels
├── css/
│   └── style.css       # Design system + page styles
├── js/
│   └── main.js         # Navigation, scroll reveal, form validation
├── assets/
│   ├── icons/
│   │   └── favicon.svg
│   └── images/
├── vercel.json         # Vercel deploy configuration
├── .gitignore
└── README.md
```

---

## Getting Started

### Prerequisites

You only need a browser. For local hot-reload, any static file server works.

### Run Locally

Clone the repository and open the site:

```bash
git clone https://github.com/GitwithHaseeb/GH-AI---Artificial-Intelligence-Startup.git
cd GH-AI---Artificial-Intelligence-Startup
```

Then start a static server:

```bash
# Option 1 — Python (built in)
python -m http.server 5500

# Option 2 — Node.js
npx serve .

# Option 3 — VS Code
# Install the "Live Server" extension and click "Go Live"
```

Open <http://localhost:5500> in your browser.

---

## Deployment

### Deploy to Vercel (Recommended)

#### Option A — Vercel Dashboard

1. Push this repository to GitHub.
2. Go to <https://vercel.com/new> and import the repository.
3. Vercel auto-detects it as a static site — keep the defaults and click **Deploy**.

#### Option B — Vercel CLI

```bash
npm install -g vercel
vercel login
vercel        # preview deployment
vercel --prod # production deployment
```

The included `vercel.json` configures clean URLs (no `.html` extension)
and a single-page-style fallback to `index.html`.

### Deploy Elsewhere

This is plain HTML/CSS/JS — any static host works:

- **Netlify** — drag-and-drop the folder, or connect the repo
- **GitHub Pages** — enable Pages on the `main` branch
- **Cloudflare Pages** — connect the repo, framework preset: _None_

---

## Pages

| Page            | Purpose                                                    |
| --------------- | ---------------------------------------------------------- |
| `index.html`    | Hero, core capabilities, and solutions showcase            |
| `platform.html` | Product platform: vision, LLM, and agents                  |
| `research.html` | Research themes, papers, and labs                          |
| `about.html`    | Company story, founders, and careers anchor                |
| `contact.html`  | Validated contact form, email, and social channels         |

---

## Founders

<table>
  <tr>
    <td align="center" width="50%">
      <b>Ghania Tanveer</b><br/>
      CEO &amp; AI Research Lead<br/>
      <a href="https://github.com/ghaniatanveer">GitHub</a> ·
      <a href="https://www.linkedin.com/in/ghania-tanveer-894625311/">LinkedIn</a>
    </td>
    <td align="center" width="50%">
      <b>Muhammad Haseeb</b><br/>
      CTO &amp; Engineering<br/>
      <a href="https://github.com/GitwithHaseeb">GitHub</a> ·
      <a href="https://www.linkedin.com/in/muhammad-haseeb-5a73bb317/">LinkedIn</a>
    </td>
  </tr>
</table>

### Acknowledgements

This project was made by **Muhammad Haseeb** in collaboration with
**[Ghania Tanveer](https://github.com/ghaniatanveer)**. Thank you for the
design feedback, research direction, and partnership in building GH AI.

---

## Roadmap

- [ ] Hook the newsletter form to a real email provider (Resend / Loops)
- [ ] Wire the contact form to a serverless function or email API
- [ ] Add blog / changelog section sourced from MDX or a headless CMS
- [ ] Add automated Lighthouse and accessibility checks in CI
- [ ] Add a dark/light theme switcher

---

## Contributing

Issues and pull requests are welcome. For larger changes, please open an
issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feat/your-feature`)
3. Commit your changes (`git commit -m "feat: add your feature"`)
4. Push to the branch (`git push origin feat/your-feature`)
5. Open a pull request

---

## License

Released under the [MIT License](https://opensource.org/licenses/MIT).

> Copyright (c) 2026 Ghania Tanveer &amp; Muhammad Haseeb

---

<div align="center">

Built with care by <a href="https://www.linkedin.com/in/ghania-tanveer-894625311/">Ghania Tanveer</a>
&amp; <a href="https://www.linkedin.com/in/muhammad-haseeb-5a73bb317/">Muhammad Haseeb</a>.

</div>
