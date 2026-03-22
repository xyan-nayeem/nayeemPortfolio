# Omur Faruk Nayeem — Portfolio (React + Tailwind CSS)

A professional, fully responsive portfolio website built with **React.js** and **Tailwind CSS**.

---

## 🚀 Tech Stack

| Tool | Purpose |
|---|---|
| React.js 18 | UI library |
| Tailwind CSS 3 | Utility-first styling |
| react-slick | Tech Stack carousel / slider |
| Poppins | Google Font |
| Font Awesome | Icons |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx       — Fixed navbar with mobile hamburger
│   ├── Banner.jsx       — Hero section with typewriter + floating cards
│   ├── About.jsx        — About me with avatar + info grid
│   ├── Experience.jsx   — Accordion timeline
│   ├── Skills.jsx       — Animated progress bars
│   ├── TechStack.jsx    — react-slick auto-play slider
│   ├── Projects.jsx     — Filterable project grid
│   ├── Contact.jsx      — Contact form with validation
│   └── Footer.jsx       — Footer with nav + social links
├── data/
│   └── index.js         ← ✏️  ALL your content lives here — edit this file!
├── hooks/
│   └── useReveal.js     — Scroll-reveal IntersectionObserver hook
├── App.js
├── index.js
└── index.css            — Tailwind directives + custom component classes
```

---

## ⚙️ Getting Started

### Step 1 — Install dependencies
```bash
npm install
```

### Step 2 — Start the dev server
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 3 — Build for production
```bash
npm run build
```
The optimized output goes into the `build/` folder.

---

## ✏️ How to Customize

**Everything is in one place: `src/data/index.js`**

Open that file and update:

- `personalInfo` — your name, email, location, social links, stats
- `typedWords` — the roles shown in the typewriter animation
- `aboutPoints` — bullet points in the About section
- `experiences` — your timeline entries
- `skillCategories` — skill names and percentage levels
- `techStack` — your tech stack cards in the slider
- `projects` — project cards (title, description, tags, links, gradient)

---

## 🌟 Features

| Feature | Details |
|---|---|
| Font | Poppins via Google Fonts |
| Styling | Tailwind CSS utility classes throughout |
| Slider | react-slick auto-play carousel (Tech Stack) |
| Typewriter | Animated cycling role text in Banner |
| Animations | Scroll-reveal, floating cards, skill bar fill |
| Accordion | Click-to-expand timeline in Experience |
| Filter | Filter projects by technology tag |
| Form | Contact form with client-side validation |
| Responsive | Fully mobile-friendly + hamburger menu |
| Dark Theme | Deep dark palette with purple accent |

---

## 🌐 Deploy Options

| Platform | How |
|---|---|
| **Netlify** | Drag & drop the `build/` folder |
| **Vercel** | Connect your GitHub repo and deploy |
| **GitHub Pages** | Use the `gh-pages` npm package |

---

## 📄 License

MIT — Free to use and customize.
