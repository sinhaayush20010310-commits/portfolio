# 🚀 Ayush Sinha — Portfolio Website

A premium, futuristic full-stack developer portfolio built with React + Vite (frontend) and Node.js + Express + MongoDB (backend).

---

## 📁 Project Structure

```
ayush-portfolio/
├── frontend/          ← React + Vite + Tailwind + Framer Motion
│   ├── src/
│   │   ├── components/
│   │   │   ├── sections/   ← Hero, About, Skills, Experience, Projects, Contact
│   │   │   └── ui/         ← Navbar, Footer, LoadingScreen, CommandPalette
│   │   ├── context/        ← ThemeContext (dark mode + color themes)
│   │   ├── data/           ← portfolio.ts (all your content — EDIT THIS)
│   │   ├── hooks/          ← Custom hooks (Lenis, scroll, mouse, typewriter)
│   │   └── styles/         ← globals.css
│   └── package.json
└── backend/           ← Node.js + Express + MongoDB REST API
    ├── models/         ← User, Project, Contact MongoDB schemas
    ├── routes/         ← auth, projects, skills, experience, contact, blog...
    ├── middleware/     ← JWT auth guard
    └── server.js
```

---

## ⚡ Quick Start (Frontend Only)

This is the fastest way to get running. No backend needed.

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:5173 — done! 🎉

---

## 🔧 Full Setup (Frontend + Backend)

### Step 1 — Frontend

```bash
cd frontend
npm install
npm run dev
```

### Step 2 — Backend

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB URI, JWT secret, etc.
npm run dev
```

### Step 3 — MongoDB Atlas (free)

1. Go to https://cloud.mongodb.com
2. Create free cluster
3. Get connection string
4. Paste into `backend/.env` as `MONGODB_URI`

---

## ✏️ Customizing Your Content

**All your personal data is in one file:**

```
frontend/src/data/portfolio.ts
```

Edit this file to update:
- Your name, bio, location, email, social links
- Work experience
- Projects (add your real GitHub URLs and live URLs)
- Skills and proficiency levels
- Certificates and testimonials

---

## 🎨 Features

- ✅ Animated loading screen
- ✅ Smooth scroll (Lenis)
- ✅ Scroll progress bar
- ✅ Framer Motion animations on every section
- ✅ Hero with typewriter effect + floating tech icons + particles
- ✅ About with animated timeline + CountUp stats
- ✅ Skills with animated progress bars + category filter
- ✅ Experience with interactive detail panel
- ✅ Projects with search + filter + hover actions
- ✅ Contact form with validation + success animation
- ✅ Command Palette (Ctrl+K) with keyboard navigation
- ✅ Dark mode (default) + theme context
- ✅ Fully responsive (mobile → ultrawide)
- ✅ SEO meta tags

---

## 🚀 Deployment

### Frontend → Vercel (free)

```bash
cd frontend
npm run build
# Upload dist/ to Vercel, or connect GitHub repo
```

Or via Vercel CLI:
```bash
npm i -g vercel
cd frontend
vercel
```

### Backend → Render (free)

1. Push backend/ to GitHub
2. Create new Web Service on https://render.com
3. Set environment variables from .env.example
4. Deploy

---

## 🌈 Adding Your Resume

Put your resume PDF at:
```
frontend/public/resume.pdf
```

---

## 📦 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, TypeScript, Vite |
| Styling | Tailwind CSS, Framer Motion |
| Scroll | Lenis Smooth Scroll |
| Backend | Node.js, Express.js |
| Database | MongoDB + Mongoose |
| Auth | JWT |
| Email | Nodemailer |
| Media | Cloudinary |
| Deploy | Vercel (FE) + Render (BE) |

---

## 🔑 Environment Variables

Copy `backend/.env.example` to `backend/.env` and fill in:

| Variable | Description |
|----------|-------------|
| `MONGODB_URI` | MongoDB Atlas connection string |
| `JWT_SECRET` | Random secret for JWT signing |
| `CLOUDINARY_*` | Cloudinary credentials (optional) |
| `EMAIL_USER` | Gmail address for contact notifications |
| `EMAIL_PASS` | Gmail App Password (not your real password) |

---

## 🛠️ Commands Reference

```bash
# Frontend
npm run dev      # Start dev server (http://localhost:5173)
npm run build    # Production build → dist/
npm run preview  # Preview production build

# Backend
npm run dev      # Start with nodemon (auto-reload)
npm start        # Production start

# Keyboard shortcuts in the portfolio
Ctrl+K           # Open command palette
```

---

Built with ❤️ — Ayush Sinha
