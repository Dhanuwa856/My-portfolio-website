# Portfolio Website

> Live Demo: [https://dhanushkarathnayakaportfolio.vercel.app/](https://dhanushkarathnayakaportfolio.vercel.app/)
> GitHub Repo: [My Portfolio Website](https://github.com/Dhanuwa856/My-portfolio-website.git)
> ☕ Tip Me: [buymeacoffee.com/dhanuwa](https://buymeacoffee.com/dhanuwa)

---

## 📋 Table of Contents

1. [Features](#-features)
2. [Tech Stack](#-tech-stack)
3. [Project Structure](#-project-structure)
4. [Installation](#-installation)
5. [Environment Variables](#-environment-variables)
6. [Usage](#-usage)
7. [Scripts](#-scripts)
8. [Components](#-components)
9. [Customization](#-customization)
10. [Deployment](#-deployment)

---

## 🚀 Features

- Dark/Light Mode toggle
- Scroll-triggered animations (Framer Motion)
- Responsive design (mobile → desktop)
- Skills section with animated progress bars
- Education timeline with step-by-step reveal
- Projects carousel with hover overlays
- Detailed project pages
- Contact cards & form with validation
- Navbar & Footer with social & coffee links

---

## 🛠️ Tech Stack

- **Framework:** Next.js (React)
- **Styling:** Tailwind CSS & Styled-Components
- **Animation:** Framer Motion
- **Icons:** React-Icons
- **Hosting:** Vercel

---

## 📂 Project Structure

```bash
├─ components/            # Reusable UI components
│  ├─ Navbar.jsx
│  ├─ TitleTag.jsx
│  ├─ EducationSection.jsx
│  ├─ Logos.jsx
│  ├─ ProjectSlider.jsx
│  ├─ ProjectPage.jsx
│  ├─ ContactSection.jsx
│  └─ Footer.jsx
├─ pages/                 # Next.js pages
│  ├─ index.jsx           # Home page
│  └─ projects/[slug].jsx # Project detail pages
├─ public/                # Static assets (images, logo)
├─ styles/                # Global styles (if any)
├─ tailwind.config.js     # Tailwind configuration
├─ postcss.config.js      # PostCSS configuration
├─ .env.example           # Example env vars file
├─ package.json
└─ README.md
```

---

## ⚙️ Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/Dhanuwa856/My-portfolio-website.git
   cd My-portfolio-website
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root (see next section)

---

## 🔑 Environment Variables

Add these to your `.env` (or `.env.local`) in the project root. **Never commit** real secrets to Git!

1. **Hugging Face Token** ⭐️

   - Go to [Hugging Face](https://huggingface.co/) → Avatar → **Settings** → **Access Tokens**
   - Create new token (read scope)
   - Copy & paste:

     ```env
     VITE_HF_TOKEN=hf_your_token_here
     ```

2. **EmailJS** 📧

   - Sign up / log in at [emailjs.com](https://www.emailjs.com/)
   - **Service ID**: Dashboard → Email Services → _Copy_ service ID
   - **Template ID**: Email Templates → _Create or select_ template → _Copy_ template ID
   - **User ID**: Integration → _Copy_ your public key
   - Add to `.env`:

     ```env
     VITE_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
     VITE_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_PUBLIC_EMAILJS_USER_ID=your_user_id
     ```

After adding env vars, restart the dev server for changes to take effect. 🛑

---

## 🏃 Usage

- **Develop:**

  ```bash
  npm run dev
  # or
  yarn dev
  ```

- **Production build:**

  ```bash
  npm run build
  npm start
  ```

---

## 📑 Scripts

| Command  | Description             |
| -------- | ----------------------- |
| `dev`    | Start local dev server  |
| `build`  | Create production build |
| `start`  | Run production server   |
| `lint`   | Lint code               |
| `format` | Format code             |

---

## 🧩 Components

- **Navbar:** Smooth scroll navigation
- **TitleTag:** Animated headers with hover effect
- **EducationSection:** Timeline with scroll reveal
- **Logos:** Tech icons with hover rotation
- **ProjectSlider:** Auto-scroll carousel
- **ProjectPage:** Detailed project layout
- **ContactSection:** Info cards & contact form
- **Footer:** Social & coffee links

---

## 🎨 Customization

- Update colors/fonts in `tailwind.config.js`
- Replace placeholder data in components or fetch from CMS
- Tweak animation props in Framer Motion

---

## 📦 Deployment

1. Push to GitHub
2. Import to Vercel ([https://vercel.com](https://vercel.com))
3. Set env vars in Vercel Dashboard under **Environment Variables**
4. Deploy! 🌐

---

## 📜 License

MIT © Dhanushka Rathnayaka
