import AnimatedReveal from '../ui/AnimatedReveal';
import { FaCode, FaServer, FaDatabase, FaToolbox } from 'react-icons/fa6';

const SKILL_CATEGORIES = [
  {
    title: 'Frontend Development',
    icon: FaCode,
    skills: ['React 18/19', 'TypeScript', 'Tailwind CSS v4', 'Redux Toolkit', 'TanStack Query','React Hook Form', 'Zod', 'Vite']
  },
  {
    title: 'Backend & APIs',
    icon: FaServer,
    skills: ['Node.js', 'Express', 'Supabase (Edge Functions)', 'REST APIs', 'Socket.IO']
  },
  {
    title: 'Database & Cloud',
    icon: FaDatabase,
    skills: ['MongoDB', 'PostgreSQL (Supabase)', 'Firebase', 'Cloudinary']
  },
  {
    title: 'Tools & Integrations',
    icon: FaToolbox,
    skills: ['Git & GitHub', 'Stripe Payments', 'Google Gemini AI', 'IMAGIN.studio API', 'Figma' , 'Cursor' , 'Claude Code']
  }
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col justify-center py-20 overflow-hidden"
      style={{ background: 'var(--color-bg)' }}
    >
      <div className="relative z-10 max-w-[1184px] mx-auto px-6 lg:px-12 flex flex-col gap-10">
        
        {/* Heading */}
        <AnimatedReveal className="flex flex-col gap-2 items-center text-center max-w-[600px] mx-auto">
          <span className="font-mono font-bold text-primary text-[10px] uppercase tracking-widest">
            Expertise
          </span>
          <h2 className="font-heading font-normal text-text text-[clamp(36px,4.5vw,52px)] leading-[1.08em]">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-text-muted text-[13px] leading-[1.55em]">
            The tools and technologies I use to build scalable, high-performance web applications.
          </p>
        </AnimatedReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SKILL_CATEGORIES.map((category, idx) => (
            <AnimatedReveal 
              key={category.title} 
              delay={idx * 100}
              className="rounded-[22px] border border-border bg-surface p-8 flex flex-col gap-5"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-[12px]" style={{ background: 'var(--color-primary-light)' }}>
                  <category.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-heading font-bold text-text text-[20px]">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map(skill => (
                  <span 
                    key={skill}
                    className="px-3.5 py-1.5 rounded-full text-text text-[12px] border border-border bg-bg shadow-sm hover:border-primary hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </AnimatedReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
