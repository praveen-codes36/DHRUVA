<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=12,6,20&height=200&section=header&text=DHRUVA&fontSize=72&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Real-Time%20Train-Arrival%20Intelligence&descAlignY=60&descSize=20" width="100%" alt="DHRUVA"/>

<img src="./assets/dhruva-hero.svg" width="100%" alt="Animated DHRUVA concept: a train approaching a station with a confidence band around its ETA"/>

### *One fixed point you can trust in a journey full of things that shift.*

![Smart India Hackathon](https://img.shields.io/badge/SIH%202026-SIH26028-f97316?style=for-the-badge)
![React](https://img.shields.io/badge/React%2019-61dafb?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-a855f7?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind%20v4-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Gemini](https://img.shields.io/badge/Google%20Gemini-4285f4?style=for-the-badge&logo=googlegemini&logoColor=white)

</div>

---

## 🧭 The Problem

Millions of Indian Railways passengers plan their day around a single number: **the arrival time**. But that number shifts, and most apps show it as if it were certain. Passengers can't tell a *reliable* ETA from a *guess*, so they wait on platforms, miss connections, or send pickups too early or too late.

> The issue is not only that trains run late. It is that the **uncertainty is invisible**.

## 💡 The Solution

**DHRUVA** (ध्रुव, the Pole Star, the one fixed point in a moving sky) is a **confidence-scored arrival intelligence system** for Indian Railways, built for Smart India Hackathon problem statement **SIH26028**.

Instead of showing one number, DHRUVA pairs every predicted arrival with **how much that prediction can be trusted**, so a passenger knows when to rely on it and when to stay flexible.

## ✨ Features

- 🚆 **Real-time train-arrival intelligence** for Indian Railways journeys
- 🎯 **Confidence-scored ETAs**: every prediction comes with a trust level, not just a time
- 🤖 **Gemini-powered reasoning**, called **server-side** so the API key never reaches the browser
- ⚡ **Fast, modern UI** built with React 19, Tailwind CSS v4 and smooth `motion` animations

<!--
TODO (Praveen): add the features you actually built, one line each. Examples to check against your code:
- Search by train number / name / station?
- Delay / platform / crowd explanations?
- Alerts or notifications?
- Offline / low-bandwidth mode?
Delete any line above that is not implemented.
-->

## 🖼️ Screenshots

<!-- TODO: add 2-3 screenshots or a demo GIF in /docs and link them here -->
| Home | Arrival view | Confidence breakdown |
|:--:|:--:|:--:|
| _add screenshot_ | _add screenshot_ | _add screenshot_ |

## 🏗️ Architecture

```text
┌──────────────┐    HTTPS     ┌────────────────────┐    server-side    ┌──────────────┐
│  React 19 UI │ ───────────▶ │  Express (Node.js) │ ────────────────▶ │  Gemini API  │
│ Vite · TS    │ ◀─────────── │  API + secrets     │ ◀──────────────── │  (@google/   │
│ Tailwind v4  │   ETA + score│  dotenv            │                   │   genai)     │
└──────────────┘              └────────────────────┘                   └──────────────┘
```

The browser never sees the Gemini key; the Express layer holds it and relays results.

## 🛠️ Tech Stack

| Layer | Technology |
|:--|:--|
| Frontend | React 19, TypeScript, Vite, Tailwind CSS v4 |
| Animation & icons | `motion`, `lucide-react` |
| Backend | Node.js, Express, dotenv |
| AI | Google Gemini via `@google/genai` (server-side) |
| Tooling | tsx, esbuild, TypeScript type-checking |

## 🚀 Run Locally

**Prerequisites:** Node.js 18+ and a [Gemini API key](https://aistudio.google.com/apikey)

```bash
# 1. Clone
git clone https://github.com/praveen-codes36/DHRUVA.git
cd DHRUVA

# 2. Install
npm install

# 3. Add your key
cp .env.example .env.local
# open .env.local and set GEMINI_API_KEY=your_key_here

# 4. Start
npm run dev
```

Open **http://localhost:3000**

| Command | What it does |
|:--|:--|
| `npm run dev` | Start the dev server on port 3000 |
| `npm run build` | Production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Type-check with `tsc --noEmit` |

> 🔐 Never commit `.env.local`. It is already protected by `.gitignore`.

## 📁 Project Structure

```text
DHRUVA/
├── src/              # React app source
├── index.html        # App entry
├── metadata.json     # App metadata
├── .env.example      # Environment variable template
├── vite.config.ts
└── package.json
```

## 🗺️ Roadmap

- [ ] Plug in live Indian Railways running-status data
- [ ] Per-station delay history to improve confidence scoring
- [ ] Passenger alerts when confidence drops
- [ ] Regional-language support

## 👤 Author

**Praveen Kumar** · B.Tech student · [@praveen-codes36](https://github.com/praveen-codes36)

Also building: [PRAHARI AI](https://github.com/praveen-codes36/prahari-ai), AI for safer roads.

<div align="center">

**ध्रुव · the one fixed point you can trust.**

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=12,6,20&height=100&section=footer" width="100%" alt=""/>

</div>
