# Mostafa Elsonny | Frontend Portfolio

A premium, production-ready personal portfolio built to showcase full-stack and frontend engineering projects. Designed with a focus on typography, fluid animations, and a pixel-perfect dark/light mode experience.

![Portfolio Preview](./src/assets/hero.png)

## 🚀 Live Demo
[View Live Portfolio](https://mostafaelsonny.github.io/) *(Update with your final URL)*

## 🛠 Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS v4 (with custom CSS variable theming)
- **Routing:** React Router v6 (Lazy loaded routes)
- **Icons:** React Icons (`fa6`)
- **Forms:** Web3Forms API (Serverless email delivery)

## ✨ Key Features

- **Pixel-Perfect Figma Implementation:** Exact typography scaling (`clamp()`), spacing, and layout translations from the original design.
- **Advanced Theming System:** Clean, class-based dark/light mode toggle. Dark mode avoids muddy gradients in favor of deep navy (`#090B16`) and vibrant primary blue (`#3D8BFF`).
- **Custom Scroll Animations:** Lightweight, dependency-free scroll reveal animations powered by a custom `IntersectionObserver` hook (`useScrollReveal`).
- **Dynamic Case Studies:** Projects are mapped from a single source of truth (`src/data/info.ts`) to dynamic `react-router` routes (`/projects/:id`).
- **Floating Navigation:** Interactive, pill-shaped floating navigation bar that tracks active sections based on scroll position.
- **Serverless Contact Form:** Fully functional contact form integrated with Web3Forms — no backend required.

## 📂 Project Structure

```text
src/
├── assets/         # Project images and SVGs
├── components/     
│   ├── layout/     # FloatingNav, ThemeControls, PortfolioMark
│   ├── sections/   # Hero, About, Skills, Projects, Contact
│   └── ui/         # AnimatedReveal wrapper
├── data/           # info.ts (Single source of truth for all content)
├── hooks/          # useDarkMode, useScrollReveal
├── pages/          # Home, CaseStudy
├── App.tsx         # Router and layout configuration
├── index.css       # Global styles and Tailwind v4 theme variables
└── main.tsx        # React root entry
```

## 💻 Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mostafaelsonny/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🎨 Theming (Tailwind v4)

This project utilizes Tailwind v4's new CSS variable integration. The theme is configured entirely in `src/index.css` using the `@theme` directive, which automatically generates utility classes (e.g., `bg-surface-dark`, `text-primary-light`).

```css
@theme {
  --color-primary: #176BFF;
  --color-bg: #F8F7FC;
  /* ... */
}
```

## 📬 Contact

**Mostafa Elsonny**  
Frontend Developer | React.js & TypeScript  
Email: elsonnymostafa231@gmail.com  
LinkedIn: [Mostafa Elsonny](https://www.linkedin.com/in/mostafa-elsonny-4115ba404)  
GitHub: [@mostafaelsonny](https://github.com/mostafaelsonny)
