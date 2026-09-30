import { useParams, Link } from 'react-router-dom';
import { projects, personalInfo } from '../data/info';
import { FaArrowLeft, FaArrowUpRightFromSquare, FaGithub, FaCircleCheck } from 'react-icons/fa6';
import { useEffect } from 'react';

export default function CaseStudy() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-4">
        <h1 className="font-heading font-bold text-text text-4xl">Project not found</h1>
        <Link to="/" className="text-primary underline">← Back to home</Link>
      </div>
    );
  }

  const SECTION_CLS = 'flex flex-col gap-3';
  const LABEL_CLS = 'font-mono font-bold text-primary text-[10px] uppercase tracking-widest';
  const H2_CLS = 'font-heading font-bold text-text text-2xl';
  const BODY_CLS = 'text-text-muted text-[15px] leading-[1.7em]';
  const CARD_CLS = 'rounded-[22px] border border-border bg-surface p-6 flex flex-col gap-4';

  return (
    <div className="min-h-screen py-16 pb-40" style={{ background: 'var(--color-bg)' }}>
      <article className="max-w-4xl mx-auto px-6 lg:px-8">

        {/* Back */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-text-muted hover:text-text font-sans text-[13px] font-medium mb-10 transition-colors"
        >
          <FaArrowLeft size={14} /> Back to portfolio
        </Link>

        {/* Header */}
        <header className="flex flex-col gap-4 mb-12">
          <span className={LABEL_CLS}>{project.category}</span>
          <h1 className="font-heading font-bold text-text text-[clamp(32px,5vw,56px)] leading-tight tracking-tight">
            {project.title}
          </h1>
          <p className="text-text-muted text-[17px] leading-[1.6em] max-w-2xl">{project.shortDescription}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-white font-mono font-semibold text-[11px] uppercase tracking-wide hover:opacity-90 transition-opacity"
            >
              <FaArrowUpRightFromSquare size={14} /> Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border text-text font-mono font-semibold text-[11px] uppercase tracking-wide hover:bg-surface transition-colors"
            >
              <FaGithub size={16} /> Source Code
            </a>
          </div>
        </header>

        {/* Project Image */}
        {project.image && (
          <div className="w-full rounded-[22px] overflow-hidden mb-12 border border-border shadow-lg" style={{ maxHeight: '600px' }}>
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>
        )}

        {/* Grid: 2 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">

          <div className={CARD_CLS}>
            <div className={SECTION_CLS}>
              <h2 className={H2_CLS}>Overview</h2>
              <p className={BODY_CLS}>{project.overview}</p>
            </div>
          </div>

          <div className={CARD_CLS}>
            <div className={SECTION_CLS}>
              <h2 className={H2_CLS}>Problem / Goal</h2>
              <p className={BODY_CLS}>{project.problem}</p>
            </div>
            <div className="w-full h-px bg-border" />
            <div className={SECTION_CLS}>
              <h2 className={H2_CLS}>My Role</h2>
              <p className={BODY_CLS}>{project.role}</p>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className={`${CARD_CLS} mb-5`}>
          <h2 className={H2_CLS}>Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(tech => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-full text-primary font-mono font-semibold text-[10px] uppercase tracking-wide border border-primary/20"
                style={{ background: 'var(--color-primary-light)' }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className={`${CARD_CLS} mb-5`}>
          <h2 className={H2_CLS}>Key Features</h2>
          <ul className="flex flex-col gap-3">
            {project.features.map((f, i) => (
              <li key={i} className="flex items-start gap-3">
                <FaCircleCheck size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <span className={BODY_CLS}>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture + Challenges + Learnings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {[
            { title: 'Architecture', body: project.architecture },
            { title: 'Challenges',   body: project.challenges },
            { title: 'Learnings',    body: project.learnings },
          ].map(({ title, body }) => (
            <div key={title} className={CARD_CLS}>
              <h2 className="font-heading font-bold text-text text-lg">{title}</h2>
              <p className="text-text-muted text-[13px] leading-[1.65em]">{body}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`${CARD_CLS} items-center text-center`} style={{ background: 'linear-gradient(135deg, #152A56 0%, #0B1734 100%)' }}>
          <h2 className="font-heading font-bold text-white text-2xl">Interested in working together?</h2>
          <p className="text-white/60 text-[14px]">I'm currently open to new Front-End Developer opportunities.</p>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-white font-mono font-semibold text-[11px] uppercase tracking-wide hover:opacity-90 transition-opacity"
          >
            Connect on LinkedIn
          </a>
        </div>
      </article>
    </div>
  );
}
