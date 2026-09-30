/* Hero section — Figma node 4-3038 */
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { personalInfo } from '../../data/info';
import AnimatedReveal from '../ui/AnimatedReveal';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background — dark uses radial glow from Figma, light is clean */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -left-32 top-1/3 w-[600px] h-[600px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-24">

        {/* Left column — decorative code block (Figma illustration) */}
        <AnimatedReveal className="hidden lg:flex flex-col items-center justify-center">
          <div className="relative w-72 h-72">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border border-primary/10" />
            <div className="absolute inset-8 rounded-full border border-primary/15" />
            {/* Center card */}
            <div className="absolute inset-16 rounded-[22px] bg-surface border border-border flex flex-col items-center justify-center gap-2"
              style={{ boxShadow: 'var(--shadow-card)' }}>
              <span className="font-mono font-bold text-primary text-3xl">&lt;/&gt;</span>
              <span className="font-mono text-text-muted text-[9px] uppercase tracking-widest">Design · Build · Refine</span>
            </div>
            {/* Floating label */}
            <div className="absolute top-6 right-4 bg-surface border border-border rounded-full px-3 py-1 flex items-center gap-1.5"
              style={{ boxShadow: 'var(--shadow-card)' }}>
              <span className="text-primary text-[10px]">✦</span>
              <span className="font-mono text-text text-[10px] uppercase tracking-wide">Creative UI</span>
            </div>
            <div className="absolute bottom-8 left-2 bg-surface border border-border rounded-full px-3 py-1"
              style={{ boxShadow: 'var(--shadow-card)' }}>
              <span className="font-mono text-text text-[10px] uppercase tracking-wide">Open to work</span>
            </div>
            {/* Blue dots */}
            <div className="absolute top-1/2 -left-4 w-2 h-2 rounded-full bg-primary opacity-60" />
            <div className="absolute bottom-4 right-6 w-1.5 h-1.5 rounded-full bg-primary opacity-40" />
          </div>
        </AnimatedReveal>

        {/* Right column — text content */}
        <AnimatedReveal className="flex flex-col gap-6" delay={80}>
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full w-fit" style={{ background: 'var(--color-primary-light)' }}>
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="font-sans font-bold text-primary text-[11px] uppercase tracking-wide">
              {personalInfo.objective}
            </span>
          </div>

          {/* Headline */}
          <div className="flex flex-col gap-1">
            <h1 className="font-heading font-normal text-text text-[clamp(48px,6vw,72px)] leading-[1.04em] tracking-tight">
              Hi, I'm <span className="text-primary font-bold">{personalInfo.name.split(' ')[0]}</span>
            </h1>
            <p className="font-heading font-semibold text-text text-[clamp(20px,2vw,26px)]">
              Frontend Developer <span className="text-primary">›</span>
            </p>
          </div>

          {/* Description */}
          <p className="text-text-muted text-[15px] leading-[1.7em] max-w-[520px]">
            I build full-stack web applications with clean interfaces, robust API integrations, and reliable frontend engineering. Comfortable across the stack with React, TypeScript, Node.js, and modern tools.
          </p>

          {/* Metrics */}
          <div className="flex items-center gap-7">
            {[
              { value: '04+', label: 'Core disciplines' },
              { value: '10+', label: 'Reusable patterns' },
              { value: '100%', label: 'Editable systems' },
            ].map(({ value, label }, i) => (
              <div key={label} className="flex items-center gap-7">
                {i > 0 && <div className="w-px h-8 bg-border" />}
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-text text-xl">{value}</span>
                  <span className="text-text-muted text-[11px]">{label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-white font-mono font-semibold text-[11px] uppercase tracking-wide hover:opacity-90 transition-opacity"
            >
              <FaDownload size={13} /> Download CV
            </a>
            <div className="flex items-center gap-2 ml-1">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-border text-text-muted hover:text-primary hover:border-primary transition-colors"
              >
                <FaGithub size={16} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-border text-text-muted hover:text-primary hover:border-primary transition-colors"
              >
                <FaLinkedin size={16} />
              </a>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
