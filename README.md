# 🚀 Portfolio — React + Vite

Stylish animated dark-mode portfolio built with React + Vite.

## ✨ Features
- ⚡ Vite — super fast dev server
- 🕸️ Animated spiderweb background (mouse-interactive)
- 📱 Fully responsive + mobile hamburger menu
- 🎴 Skills cards with hover glow
- 🗂️ Projects gallery
- 📧 Contact form with EmailJS
- 🌙 Dark mode with #00e5a0 accent

## 📦 Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173)

### 3. Build for production
```bash
npm run build
```

## 🎨 Customize

| File | Kya Badlein |
|------|------------|
| `src/data.js` | Skills, Projects, Social links |
| `src/About.jsx` | Apna naam aur bio |
| `src/Hero.jsx` | Main heading/tagline |
| `src/Contact.jsx` | EmailJS IDs replace karo |
| `public/resume.pdf` | Apna resume PDF |
| `public/avatar.jpg` | Apni photo |
| `src/index.css` | Colors (--accent, --bg) |

## 📧 EmailJS Setup

`src/Contact.jsx` mein yeh 3 values apni real IDs se replace karo:

```js
emailjs.send(
  'YOUR_SERVICE_ID',   // EmailJS → Email Services
  'YOUR_TEMPLATE_ID',  // EmailJS → Email Templates
  form,
  'YOUR_PUBLIC_KEY'    // EmailJS → Account → General
)
```

## 🚀 Deploy (Vercel)

```bash
npm run build
# dist/ folder ko Vercel par upload karo
# Ya GitHub se connect karo — auto deploy
```

## 📁 Structure
```
portfolio-vite/
├── index.html
├── vite.config.js
├── package.json
├── public/
│   ├── avatar.jpg     ← apni photo
│   └── resume.pdf     ← apna resume
└── src/
    ├── main.jsx       ← entry point
    ├── App.jsx        ← main component
    ├── data.js        ← saara content
    ├── useReveal.js   ← scroll animation
    ├── Spider.jsx     ← spiderweb canvas
    ├── Nav.jsx        ← navbar + mobile menu
    ├── Hero.jsx       ← hero section
    ├── About.jsx      ← about + resume
    ├── Skills.jsx     ← skills cards
    ├── Projects.jsx   ← projects gallery
    ├── Contact.jsx    ← contact + emailjs
    └── *.css          ← component styles
```
