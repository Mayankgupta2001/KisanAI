# 🌾 KisanAI — भारत का पहला मुफ़्त AI किसान सहायक

> 60 करोड़ किसानों के लिए AI — हिंदी में, मुफ़्त में, हमेशा के लिए

## 🚀 Quick Start (5 मिनट में Setup)

### Step 1: Dependencies install करें
```bash
npm install
```

### Step 2: Environment variable set करें
```bash
cp .env.local.example .env.local
```
फिर `.env.local` खोलें और अपनी Groq API key डालें।

**Groq API key कैसे लें:**
1. https://console.groq.com पर जाएं
2. Sign up करें (free)
3. API Keys → Create New Key
4. Key copy करके `.env.local` में paste करें

### Step 3: Development server चलाएं
```bash
npm run dev
```
Browser में खोलें: http://localhost:3000

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout + metadata
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles
│   ├── sitemap.ts              # SEO sitemap
│   ├── robots.ts               # SEO robots
│   ├── fasal-doctor/
│   │   ├── page.tsx            # Server component (metadata)
│   │   └── FasalDoctorClient.tsx  # Client component (UI)
│   ├── mandi-bhav/
│   │   ├── page.tsx
│   │   └── MandiClient.tsx
│   ├── mausam-salah/
│   │   ├── page.tsx
│   │   └── MausamClient.tsx
│   ├── sarkari-yojana/
│   │   ├── page.tsx
│   │   └── YojanaClient.tsx
│   ├── mitti-pariksha/
│   │   ├── page.tsx
│   │   └── MittiClient.tsx
│   ├── about/page.tsx
│   ├── privacy/page.tsx
│   └── api/
│       ├── fasal-doctor/route.ts
│       ├── mausam-salah/route.ts
│       ├── yojana-finder/route.ts
│       ├── mitti-salah/route.ts
│       └── mandi-tips/route.ts
├── components/
│   ├── Navbar.tsx              # Sticky navbar + mobile bottom nav
│   ├── Footer.tsx              # Footer with helplines
│   ├── ChatBox.tsx             # Reusable AI chat component
│   ├── Disclaimer.tsx          # AI disclaimer
│   └── HelplineBar.tsx         # Emergency helpline numbers
└── lib/
    └── groq.ts                 # Groq client
```

---

## 🌐 Deploy to Vercel

```bash
# 1. GitHub pe push
git init
git add .
git commit -m "feat: KisanAI launch 🌾"
git remote add origin https://github.com/YOURUSERNAME/kisanai.git
git push -u origin main

# 2. Vercel.com pe:
# - New Project → GitHub repo connect करें
# - Environment Variables में GROQ_API_KEY add करें
# - Deploy!
```

---

## 📱 Features

| Feature | Description |
|---------|-------------|
| 🌿 फसल डॉक्टर | 500+ बीमारियों की AI पहचान |
| 📊 मंडी भाव | MSP + बेचने की strategy |
| 🌦️ मौसम सलाह | मौसम के हिसाब से खेती |
| 📋 सरकारी योजना | 50+ केंद्र/राज्य योजनाएं |
| 🌱 मिट्टी परीक्षा | उर्वरक सलाह |

---

## 🔧 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI**: Groq API (llama-3.3-70b-versatile) — FREE
- **Font**: Noto Sans Devanagari (Hindi support)
- **Hosting**: Vercel — FREE

---

## 📞 Emergency Helplines (built-in)

- किसान कॉल सेंटर: **1800-180-1551** (24/7 Free)
- PM Kisan: **155261**
- कृषि मंत्रालय: **1551**

---

## 💰 AdSense Setup

1. `public/ads.txt` में अपना Publisher ID डालें
2. `src/app/layout.tsx` में AdSense script का client ID update करें

---

## 🇮🇳 जय किसान!

Made with ❤️ for Bharat's farmers