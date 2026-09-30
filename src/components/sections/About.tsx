/* About section — Figma node 4-3120
   Dark bg per screen; light uses clean white/surface cards
   Layout: Profile card (left) | Quote + Timeline (centre) | Skills panel (bottom-right)
*/
import AnimatedReveal from '../ui/AnimatedReveal';
import { personalInfo } from '../../data/info';
import { FaEye, FaCubesStacked, FaCode } from 'react-icons/fa6';

const SKILLS = [
  { label: 'React & TypeScript', level: 'Advanced', pct: 93 },
  { label: 'UI Engineering',     level: 'Advanced', pct: 91 },
  { label: 'Node.js & APIs',     level: 'Strong',   pct: 85 },
  { label: 'Design Systems',     level: 'Strong',   pct: 82 },
];

const TIMELINE = [
  { step: 'Step 01', title: 'Understand', desc: 'Frame the user and product need.' },
  { step: 'Step 02', title: 'Shape',      desc: 'Explore structure and interaction.' },
  { step: 'Step 03', title: 'Build',      desc: 'Refine the system in code.' },
];

const CARD_CLS = 'rounded-[22px] border border-border bg-surface p-6 flex flex-col gap-4';

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, var(--color-bg) 0%, var(--color-surface) 60%, var(--color-primary-light) 100%)',
      }}
    >
      {/* Ambient glow */}
      <div className="absolute -left-48 bottom-0 w-[620px] h-[620px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)', opacity: 0.04 }} />

      <div className="relative z-10 max-w-[1184px] mx-auto px-6 lg:px-12 flex flex-col gap-7">

        {/* Heading row */}
        <AnimatedReveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="flex flex-col gap-3 max-w-[650px]">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full w-fit" style={{ background: 'var(--color-primary-light)' }}>
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="font-sans font-bold text-primary text-[11px] uppercase tracking-wide">About this portfolio</span>
            </div>
            <h2 className="font-heading font-normal text-text text-[clamp(36px,4.5vw,52px)] leading-[1.08em]">
              Designing clarity.<br />
              <span className="text-primary">Building with care.</span>
            </h2>
          </div>
          <span className="font-mono text-text-muted text-[12px] hidden sm:block">01 / ABOUT</span>
        </AnimatedReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-5">

          {/* ── Left: Profile summary ── */}
          <AnimatedReveal className={`${CARD_CLS} gap-5`} delay={60}>
            {/* Monogram panel */}
            <div className="w-full h-40 rounded-[14px] flex flex-col items-center justify-center gap-2"
              style={{ background: 'var(--color-primary-light)', border: '1px solid rgba(23,107,255,0.27)' }}>
              <span className="font-heading font-extrabold text-primary text-[70px] leading-none">ME</span>
              <span className="font-mono font-semibold text-text-muted text-[10px] uppercase tracking-widest">Frontend Developer</span>
            </div>

            {/* Bio */}
            <p className="text-text-muted text-[14px] leading-[1.65em]">
              I'm <strong className="text-text font-bold">{personalInfo.name.split(' ')[0]}</strong>, a Frontend Developer specializing in React and TypeScript. I build complex, production-ready web applications — from AI-powered healthcare platforms to high-performance e-commerce storefronts. I focus on bridging the gap between pixel-perfect design and robust frontend architecture.
            </p>

            {/* Availability */}
            <div className="flex items-center gap-2.5 rounded-[8px] px-4 py-2.5 bg-surface border border-border">
              <div className="w-2 h-2 rounded-full bg-green" />
              <span className="font-sans font-semibold text-text text-[11px]">{personalInfo.objective}</span>
            </div>

            {/* Value cards */}
            <div className="grid grid-cols-2 gap-2.5">
              {[
                { Icon: FaEye, title: 'Detail', desc: 'Polished, deliberate interfaces.' },
                { Icon: FaCubesStacked, title: 'Systems', desc: 'Reusable foundations that scale.' },
              ].map(({ Icon, title, desc }) => (
                <div key={title} className="flex flex-col gap-2.5 rounded-[14px] border border-border bg-bg p-[18px]">
                  <div className="w-8 h-8 flex items-center justify-center rounded-[8px]"
                    style={{ background: 'var(--color-primary-light)' }}>
                    <Icon size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-text text-[13px]">{title}</p>
                    <p className="text-text-muted text-[10px] leading-[1.45em] mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedReveal>

          {/* ── Right: Quote + Timeline + Skills ── */}
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_276px] gap-5">

              {/* Quote */}
              <AnimatedReveal className={`${CARD_CLS}`} delay={120}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-primary opacity-60">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" stroke="currentColor" strokeWidth="2" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" stroke="currentColor" strokeWidth="2" />
                </svg>
                <p className="font-heading font-semibold text-text text-[clamp(16px,1.8vw,22px)] leading-[1.36em]">
                  "A great frontend is more than just UI — it's about robust state management, performance, and clear system design."
                </p>
                <p className="text-text-muted text-[11px] leading-[1.5em]">
                  My approach balances pixel-perfect visual craft with scalable, maintainable React implementations.
                </p>
              </AnimatedReveal>

              {/* Timeline */}
              <AnimatedReveal className={`${CARD_CLS}`} delay={160}>
                {TIMELINE.map(({ step, title, desc }, i) => (
                  <div key={step} className="flex gap-4">
                    <div className="flex flex-col items-center w-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary border-2 border-primary-light flex-shrink-0 mt-0.5" />
                      {i < TIMELINE.length - 1 && <div className="w-px flex-1 bg-border mt-1.5" />}
                    </div>
                    <div className="pb-4 flex-1">
                      <span className="font-mono font-semibold text-primary text-[9px] uppercase tracking-wide">{step}</span>
                      <p className="font-heading font-normal text-text text-[13px] mt-0.5">{title}</p>
                      <p className="text-text-muted text-[10px] leading-[1.45em] mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </AnimatedReveal>
            </div>

            {/* Skills panel */}
            <AnimatedReveal className={`${CARD_CLS}`} delay={200}>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-heading font-bold text-text text-[20px]">Core skills</h3>
                  <p className="text-text-muted text-[10px] mt-0.5">A flexible toolkit for modern web products.</p>
                </div>
                <div className="w-[38px] h-[38px] flex items-center justify-center rounded-[8px]"
                  style={{ background: 'var(--color-primary-light)' }}>
                  <FaCode size={18} className="text-primary" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {SKILLS.map(({ label, level, pct }) => (
                  <div key={label} className="flex flex-col gap-2 w-full max-w-[250px]">
                    <div className="flex items-center justify-between">
                      <span className="text-text text-[13px]">{label}</span>
                      <span className="font-mono font-semibold text-primary text-[11px]">{level}</span>
                    </div>
                    <div className="w-full h-[7px] rounded-full bg-border overflow-hidden">
                      <div
                        className="h-full rounded-full bg-primary skill-bar"
                        style={{ width: `${pct}%`, animationDelay: '0.3s' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
