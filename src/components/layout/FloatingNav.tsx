/* Floating Navbar — Figma exact: #176BFF bg, 780×76px, borderRadius 22px */
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaHouse, FaUser, FaCode, FaBriefcase, FaEnvelope } from 'react-icons/fa6';

const NAV_ITEMS = [
  { label: 'Home',     href: '#hero',       Icon: FaHouse },
  { label: 'About',    href: '#about',      Icon: FaUser },
  { label: 'Skills',   href: '#skills',     Icon: FaCode },
  { label: 'Projects', href: '#projects',   Icon: FaBriefcase },
  { label: 'Contact',  href: '#contact',    Icon: FaEnvelope },
];

export default function FloatingNav() {
  const [active, setActive] = useState('Home');
  const { pathname } = useLocation();

  // Only show on home page
  if (pathname !== '/') return null;

  useEffect(() => {
    const sections = NAV_ITEMS.map(n => n.label);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const matched = NAV_ITEMS.find(n =>
              n.href.replace('#', '') === entry.target.id
            );
            if (matched) setActive(matched.label);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach(label => {
      const item = NAV_ITEMS.find(n => n.label === label);
      if (item) {
        const el = document.querySelector(item.href);
        if (el) observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, label: string) => {
    e.preventDefault();
    setActive(label);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      aria-label="Page navigation"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 px-3 py-2.5 rounded-[22px] bg-primary"
      style={{ boxShadow: 'var(--shadow-nav)', width: 'min(780px, calc(100vw - 32px))' }}
    >
      {NAV_ITEMS.map(({ label, href, Icon }) => {
        const isActive = active === label;
        return (
          <a
            key={label}
            href={href}
            onClick={(e) => handleClick(e, href, label)}
            className={`flex-1 flex flex-col items-center justify-center gap-1 h-14 rounded-[14px] transition-colors duration-200 ${
              isActive ? 'bg-white/12' : 'hover:bg-white/8'
            }`}
            aria-current={isActive ? 'page' : undefined}
          >
            <Icon size={17} className="text-white" />
            <span className={`text-white text-[10px] ${isActive ? 'font-bold' : 'font-medium'}`}>
              {label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
