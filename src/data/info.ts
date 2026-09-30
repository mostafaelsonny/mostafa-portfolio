import pharamCodeImg from '../assets/pharam-code.png';
import sonnyStoreImg from '../assets/sonny-store.png';
import automotiveImg from '../assets/elsonny automotive.png';
import tripleGymImg from '../assets/triple gym.png';

export const personalInfo = {
  name: 'Mostafa Amine Ahmed Emam',
  role: 'Front-End Developer | React.js & TypeScript',
  objective: 'Open to Front-End Developer Opportunities',
  phone: '+201117024184',
  email: 'elsonnymostafa231@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mostafa-elsonny-4115ba404',
  github: 'https://github.com/mostafaelsonny',
  whatsapp: 'https://wa.me/201117024184',
};

export const projects = [
  {
    id: 'pharmacode',
    category: 'Full-Stack Platform',
    title: 'PharmaCode',
    image: pharamCodeImg,
    shortDescription:
      'AI-Powered Smart Pharmacy Platform that digitizes the prescription workflow end-to-end — from image upload to doorstep delivery.',
    technologies: ['React 19', 'TypeScript', 'Node.js', 'MongoDB', 'Socket.IO', 'Gemini AI', 'Stripe', 'Redux Toolkit'],
    liveUrl: 'https://mediscout-frontend.vercel.app/',
    githubUrl: 'https://github.com/mostafaelsonny/pharam-code',
    features: [
      'AI-Powered Prescription Processing using Google Gemini Vision',
      'Real-Time Multi-Role Notification System with Socket.IO',
      'Smart Drug Availability & Alternative System',
      'Role-Based Access Control for 4 roles (Patient, Pharmacist, Delivery, Admin)',
      'Stripe Payment Integration with eligibility enforcement',
    ],
    overview:
      'MediScout is a full-stack healthcare platform that digitizes the pharmacy workflow. A patient uploads a photo of their handwritten prescription → Google Gemini AI reads it → the system checks live inventory → a pharmacist reviews and approves → the patient pays via Stripe → a delivery rep fulfills the order.',
    problem:
      'Pharmacy workflows are manual, slow, and error-prone — especially when handling handwritten prescriptions and out-of-stock situations.',
    role: 'Sole developer — responsible for architecture, frontend (React 19 + Redux Toolkit + TanStack Query), backend (Node.js/Express), AI integration, real-time events (Socket.IO), and payment flow (Stripe).',
    architecture:
      'Redux Toolkit manages global/event-driven state (auth, socket events). TanStack Query handles server state and cache invalidation. Routes are lazy-loaded per role so a patient never downloads the admin bundle.',
    challenges:
      'Engineering a consistent AI output schema from Gemini Vision for messy handwritten prescriptions, and coordinating 4 real-time actors without race conditions.',
    learnings:
      'Prompt engineering for structured JSON output from vision models. Designing role-aware Socket.IO rooms. Hybrid state management strategy (Redux + TanStack Query).',
  },
  {
    id: 'sonny-store',
    category: 'E-Commerce Platform',
    title: 'Sonny Store',
    image: sonnyStoreImg,
    shortDescription:
      'High-performance React e-commerce platform for smartphones with a serverless backend, Stripe payments, and a full admin dashboard.',
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Supabase', 'Stripe', 'Zod', 'React Hook Form'],
    liveUrl: 'https://sonny-store-iota.vercel.app/',
    githubUrl: 'https://github.com/mostafaelsonny/sonny-store',
    features: [
      'Zero-CLS responsive layouts across all viewports',
      'Hybrid Checkout (Cash on Delivery + Stripe via Supabase Edge Functions)',
      'Order lifecycle tracking (pending → shipped → delivered)',
      'Admin Dashboard with KPIs, product management, and order/user management',
      'Wishlist, Cart drawer, and real-time cart persistence',
    ],
    overview:
      'Sonny Store is a production-grade e-commerce platform tailored for smartphones. It combines a highly interactive React frontend with a serverless Supabase/PostgreSQL backend.',
    problem:
      'Build a scalable storefront without managing a traditional Node.js server, while supporting both COD and card payments.',
    role: 'Sole developer — frontend (React 19, Tailwind v4), backend (Supabase PostgreSQL + Edge Functions with Deno runtime), Stripe integration.',
    architecture:
      'Supabase Edge Functions (Deno) handle secure Stripe session creation. Row Level Security (RLS) policies govern all data access. Frontend uses React Context for cart/auth state.',
    challenges:
      'Implementing a secure payment flow without exposing the Stripe secret key to the client, using serverless Deno edge functions.',
    learnings:
      'Supabase Edge Functions and Deno runtime for secure serverless compute. Tailwind CSS v4 migration and zero-CLS layout strategy.',
  },
  {
    id: 'elsonny-automotive',
    category: 'Automotive Showroom',
    title: 'Elsonny Automotive',
    image: automotiveImg,
    shortDescription:
      'Premium React car showroom with live car images via IMAGIN.studio CDN, a live color picker, and persistent cart/wishlist.',
    technologies: ['React 18', 'Vite 5', 'CSS Variables', 'IMAGIN.studio API'],
    liveUrl: 'https://github.com/mostafaelsonny',
    githubUrl: 'https://github.com/mostafaelsonny/Elsonny-Automotive-Showroom',
    features: [
      'Real car images from IMAGIN.studio CDN with correct brand/model/year/angle',
      'Live color picker — image updates instantly on paint selection',
      'Brand swiper with auto-advance and responsive columns',
      'Persistent cart and wishlist via localStorage',
      'Responsive mobile-first UI with full dark/light theme toggle',
    ],
    overview:
      'A premium-feeling automotive showroom built entirely in React with no extra runtime dependencies — no Swiper.js, no Framer Motion.',
    problem:
      'Create a convincing car showroom experience with real, dynamic car imagery without managing a backend or CDN.',
    role: 'Sole developer — architecture, all components, CSS design system with custom properties, IMAGIN.studio API integration.',
    architecture:
      'All state uses custom useLocalStorage hooks. Theming via CSS custom properties on data-theme attribute. Zero runtime dependencies beyond React and Vite.',
    challenges:
      'Making IMAGIN.studio images load reliably with correct URL construction for every brand/model/year/color/angle combination.',
    learnings:
      'CSS custom property theming strategy. Lightweight state via localStorage hooks. Image CDN URL construction patterns.',
  },
  {
    id: 'triple-gym',
    category: 'Fitness Brand Website',
    title: 'Triple Gym',
    image: tripleGymImg,
    shortDescription:
      "Production-ready React website for Egypt's premier fitness brand — 7 pages, dark/gold design system, and scroll-triggered animations.",
    technologies: ['React 18', 'CSS Modules', 'Intersection Observer', 'React Router'],
    liveUrl: 'https://github.com/mostafaelsonny',
    githubUrl: 'https://github.com/mostafaelsonny/Triple-Gym-Peak-Performance-Hub',
    features: [
      '7 fully designed pages (Home, About, Programs, Memberships, Locations, Franchise, Contact)',
      'Scroll-triggered animations via Intersection Observer',
      'Interactive program tabs, testimonial carousel, FAQ accordion',
      'Google Maps embeds on Locations & Contact pages',
      'SEO meta tags and ARIA labels throughout',
    ],
    overview:
      "A production-ready multi-page website for a gym brand, featuring a dark premium design system with gold accents and CSS-only animations.",
    problem:
      'Build a premium multi-page website for a fitness brand with scroll animations and no animation library dependencies.',
    role: 'Sole developer — all 7 pages, CSS Modules design system, custom Intersection Observer hook for scroll animations.',
    architecture:
      'CSS Modules for scoped component styles. Global CSS variables for the dark/gold design token system. Custom useScrollAnimation hook with IntersectionObserver.',
    challenges:
      'Maintaining visual consistency across 7 distinct pages within a single CSS Module architecture.',
    learnings:
      'CSS Module architecture at scale. Building a custom animation system without Framer Motion. Design token strategy with CSS custom properties.',
  }
];

