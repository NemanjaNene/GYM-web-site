# GYM-site

The first website where the fitness industry will truly experience its evolution – no empty talk or fabricated promises, only real workouts that deliver results. They are not for everyone. If you think you’re just like everyone else and don’t believe you’re special, keep searching for excuses. But if you think differently and want to stand out from the crowd – you’re in the right place.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Monorepo Structure](#monorepo-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Project Standards](#project-standards)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [Roadmap](#roadmap)

---

## Features

- Responsive, accessible UI for desktop and mobile
- Pages for: Chest, Legs, Arms, Shoulders, Back (each with videos and descriptions)
- Reusable components (headers, footers, cards, buttons)
- Contact/Subscribe form with email template-ready markup
- Simple Node.js backend endpoint for form submission and email sending
- SEO ready (semantic HTML, meta tags, Open Graph)

---

## Tech Stack

**Frontend:** HTML5, CSS3 (Flexbox/Grid), Vanilla JS

**Backend:** Node.js + Express (minimal API for forms/email)

**Tooling:** npm, Prettier, ESLint (optional), Git

---

## Monorepo Structure

```
GYM-web-site/
├─ gym-frontend/
├─ gym-backend/
└─ README.md
```

---

## Getting Started

### Prerequisites

- Node.js >= 18 and npm
- Git

### 1) Clone

```bash
git clone https://github.com/NemanjaNene/GYM-web-site.git
cd GYM-web-site
```

### 2) Install dependencies

```bash
# Frontend
cd gym-frontend
npm install

# Backend
cd ../gym-backend
npm install
```

### 3) Configure env

Create a `.env` file in `gym-backend` (see [Environment Variables](#environment-variables)).

### 4) Run locally

```bash
# Frontend
cd gym-frontend
# Run via Live Server extension in VS Code

# Backend
cd ../gym-backend
npm run start
```

---

## Environment Variables

```env
PORT=8080
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
FROM_EMAIL=no-reply@gym-site.com
TO_EMAIL=owner@gym-site.com
JWT_SECRET=please_change_me
```

---

## Scripts

```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```

---

## Project Standards

- Semantic HTML
- Mobile-first CSS
- Minimal JS
- Prettier for formatting

---

## Folder Structure

```
gym-frontend/
├─ assets/
├─ pages/
└─ index.html

gym-backend/
├─ server.js
└─ .env
```

---

## Contributing

1. Create a branch: `git checkout -b feat/<name>`
2. Commit with clear messages
3. Open a PR to `main`

---

## Roadmap

- Deploy frontend and backend
- Add newsletter template
- Add video content for each page

---

**All ideas and rights for this website are owned by Nikitovic Nemanja and Dejan Arsenijevic.**
