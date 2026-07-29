# Abhishek Shelar — Portfolio

A premium, fully responsive personal portfolio built with React + Vite,
Framer Motion and React Icons. Features a light/dark theme with
localStorage persistence, a signature animated network-graph hero
background, terminal-inspired micro-copy, and every section requested:
Hero, About, Skills, Experience, Projects, Education, Certifications,
Achievements, GitHub stats and Contact.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Customize

- **Your info**: edit the content arrays at the top of each file in
  `src/components/` (Hero, About, Skills, Experience, Projects,
  Education, Certifications, Achievements, Contact, Footer).
- **GitHub stats**: open `src/components/GithubStats.jsx` and change
  `USERNAME` to your GitHub handle.
- **Resume**: drop your PDF into `public/` as `resume.pdf` (the Hero
  "Resume" button already links to `/resume.pdf`).
- **Profile photo**: swap the initials placeholder in
  `src/components/Hero.jsx` (`hero-photo`) for an `<img>` tag pointing
  at a photo in `src/assets/`.
- **Colors / fonts**: all design tokens live in `src/styles/tokens.css`
  — separate variables for light and dark themes.
- **Social & contact links**: update the `href`s in `Hero.jsx`,
  `Contact.jsx` and `Footer.jsx`.
- **Contact form**: currently simulates a send client-side. Wire it up
  to a service like Formspree, EmailJS, or your own API by replacing
  the `handleSubmit` function in `src/components/Contact.jsx`.

## Tech stack

React 18 · Vite 5 · Framer Motion · React Icons · vanilla CSS with
custom properties (no CSS framework, so styles stay easy to tweak).
