/* Projects section — Figma node 4-3242
   Light bg: #F8F7FC with blue accent circle top-right
   Cards: white, shadow-card, 22px radius, 248px image area, prev/next carousel
*/
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6';
import { projects } from '../../data/info';
import AnimatedReveal from '../ui/AnimatedReveal';

const VISIBLE = 3; // Show 3 cards at a time, matching Figma

export default function Projects() {
  const [startIdx, setStartIdx] = useState(0);
  const canPrev = startIdx > 0;
  const canNext = startIdx + VISIBLE < projects.length;

  const visible = projects.slice(startIdx, startIdx + VISIBLE);

  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col justify-center py-20 overflow-hidden"
      style={{ background: 'var(--color-bg)' }}
    >
      {/* Top-right accent circle — from Figma */}
      <div
        className="absolute -top-56 right-[-180px] w-[620px] h-[620px] rounded-full pointer-events-none"
        style={{ background: 'var(--color-primary-light)' }}
      />

      <div className="relative z-10 max-w-[1184px] mx-auto px-6 lg:px-12 flex flex-col gap-7">

        {/* Heading row */}
        <AnimatedReveal className="flex items-end justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-[700px]">
            <span className="font-mono font-bold text-primary text-[10px] uppercase tracking-widest">
              Selected work
            </span>
            <h2 className="font-heading font-normal text-text text-[clamp(36px,4.5vw,52px)] leading-[1.08em]">
              My <span className="text-primary">Projects</span>
            </h2>
            <p className="text-text-muted text-[13px] leading-[1.55em] max-w-[600px]">
              A selection of full-stack and frontend builds — real products built with production-quality code.
            </p>
          </div>

          {/* Prev / Next controls — Figma: white circle (prev) + blue circle (next) */}
          <div className="flex items-center gap-2.5 pb-2 flex-shrink-0">
            <button
              onClick={() => setStartIdx(i => Math.max(0, i - 1))}
              disabled={!canPrev}
              aria-label="Previous projects"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-border bg-surface text-text disabled:opacity-30 hover:border-primary hover:text-primary transition-colors"
            >
              <FaArrowLeft size={18} />
            </button>
            <button
              onClick={() => setStartIdx(i => Math.min(projects.length - VISIBLE, i + 1))}
              disabled={!canNext}
              aria-label="Next projects"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-primary text-white disabled:opacity-30 hover:opacity-90 transition-opacity"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <FaArrowRight size={18} />
            </button>
          </div>
        </AnimatedReveal>

        {/* Project gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[22px]">
          {visible.map((project, i) => (
            <AnimatedReveal
              key={project.id}
              delay={i * 80}
              className="flex flex-col rounded-[22px] border border-border bg-surface overflow-hidden"
              style={{ boxShadow: 'var(--shadow-card)', height: '555px' }}
            >
              {/* Image area — 248px */}
              <div className="relative flex-shrink-0" style={{ height: '248px' }}>
                <div className="w-full h-full bg-gradient-to-br from-primary-light to-border flex items-center justify-center overflow-hidden">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  ) : (
                    <span className="font-mono text-text-muted/40 text-sm">Project Preview</span>
                  )}
                </div>
                {/* Number badge */}
                <div className="absolute top-4 left-4 px-3 h-7 flex items-center justify-center rounded-full bg-[rgba(16,20,37,0.85)]">
                  <span className="font-mono font-semibold text-white text-[10px]">
                    {String(startIdx + i + 1).padStart(2, '0')}
                  </span>
                </div>
                {/* Open arrow */}
                <Link
                  to={`/projects/${project.id}`}
                  className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-surface text-text hover:text-primary transition-colors"
                  style={{ boxShadow: 'var(--shadow-card)' }}
                  aria-label={`Open ${project.title}`}
                >
                  <FaArrowUpRightFromSquare size={17} />
                </Link>
              </div>

              {/* Details */}
              <div className="flex flex-col flex-1 p-[22px] gap-3.5">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="font-mono font-semibold text-primary text-[9px] uppercase tracking-wide">
                      {project.category}
                    </span>
                    <h3 className="font-heading font-bold text-text text-[21px] leading-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <p className="text-text-muted text-[12px] leading-[1.55em] flex-1">
                  {project.shortDescription}
                </p>
                {/* Tech tags */}
                <div className="flex flex-wrap gap-[7px]">
                  {project.technologies.slice(0, 4).map(tech => (
                    <span
                      key={tech}
                      className="px-[10px] h-[26px] flex items-center rounded-full text-primary text-[9px]"
                      style={{ background: 'var(--color-primary-light)' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Links row */}
                <div className="flex flex-col gap-3 pt-[3px] border-t border-border mt-auto">
                  <div className="flex items-center gap-[18px]">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-[7px] text-text hover:text-primary transition-colors text-[10px]"
                    >
                      <FaGithub size={14} /> Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-[7px] text-text hover:text-primary transition-colors text-[10px]"
                    >
                      <FaArrowUpRightFromSquare size={14} /> Live demo
                    </a>
                  </div>
                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center justify-center gap-[7px] w-full py-2.5 rounded-full bg-primary text-white font-mono font-semibold text-[10px] uppercase tracking-wide hover:opacity-90 transition-opacity mt-2"
                  >
                    View Case Study <FaArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
