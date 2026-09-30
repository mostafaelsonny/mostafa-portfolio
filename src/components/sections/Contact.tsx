/* Contact section — Figma node 4-3357
   Left: form panel (dark surface)  |  Right: info panel (blue gradient)
*/
import { useState } from 'react';
import { FaLock, FaPaperPlane, FaEnvelope, FaPhone, FaMapPin, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';
import { personalInfo } from '../../data/info';
import AnimatedReveal from '../ui/AnimatedReveal';

const INPUT_CLS =
  'w-full px-[15px] h-12 rounded-[8px] bg-bg border border-border text-text placeholder-text-muted text-[11px] font-sans outline-none focus:border-primary transition-colors';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);
    formData.append('access_key', 'bca86a8d-46b7-4f8e-9209-37aa9108ee04'); // Web3Forms Access Key
    formData.append('subject', 'New Portfolio Inquiry!');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      
      const data = await response.json();
      if (data.success) {
        setIsSent(true);
      } else {
        setErrorMsg(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setErrorMsg('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(90deg, var(--color-bg) 0%, var(--color-surface) 50%, var(--color-primary-light) 100%)',
      }}
    >
      {/* Ambient rings — Figma */}
      <div className="absolute right-[120px] top-20 w-[620px] h-[620px] rounded-full border border-primary/15 pointer-events-none" />
      <div className="absolute right-[200px] top-40 w-[460px] h-[460px] rounded-full border border-primary/22 pointer-events-none" />

      <div className="relative z-10 max-w-[1184px] mx-auto px-6 lg:px-12 flex flex-col gap-6">

        {/* Heading row */}
        <AnimatedReveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <span className="font-mono font-bold text-primary text-[10px] uppercase tracking-widest">
              Start a conversation
            </span>
            <h2 className="font-heading font-normal text-text text-[clamp(36px,4.5vw,52px)] leading-[1.08em]">
              Get <span className="text-primary">In Touch</span>
            </h2>
          </div>
          <p className="text-text-muted text-[12px] leading-[1.55em] max-w-[430px] sm:text-right">
            Have a project, role, or collaboration in mind? Share a few details and I'll get back to you.
          </p>
        </AnimatedReveal>

        {/* Contact panel */}
        <AnimatedReveal
          className="flex flex-col lg:flex-row overflow-hidden rounded-[22px] border border-border"
          style={{ boxShadow: 'var(--shadow-nav)', minHeight: '565px' }}
          delay={80}
        >
          {/* ── Left: Message form ── */}
          <div className="flex-[620px] lg:max-w-[620px] p-[34px] flex flex-col gap-4 bg-surface">
            <div className="flex flex-col gap-1 pb-1">
              <h3 className="font-heading font-bold text-text text-[22px]">Tell me about your idea</h3>
              <p className="text-text-muted text-[11px]">All fields are ready for your own form integration.</p>
            </div>

            {isSent ? (
              <div className="flex-1 flex flex-col items-center justify-center gap-3">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <FaPaperPlane size={24} className="text-primary" />
                </div>
                <p className="font-heading font-semibold text-text text-lg">Message sent successfully!</p>
                <p className="text-text-muted text-[13px]">I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-1">
                <input type="hidden" name="from_name" value="Portfolio Website" />
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                
                <div className="grid grid-cols-2 gap-3.5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-text-muted text-[10px]">Name</label>
                    <input type="text" name="name" placeholder="Your name" required className={INPUT_CLS} disabled={isSubmitting} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-text-muted text-[10px]">Email</label>
                    <input type="email" name="email" placeholder="you@example.com" required className={INPUT_CLS} disabled={isSubmitting} />
                  </div>
                </div>
                
                <div className="flex flex-col gap-1.5 flex-1 mt-2">
                  <label className="text-text-muted text-[10px]">Message</label>
                  <textarea
                    name="message"
                    placeholder="What would you like to build?"
                    required
                    rows={5}
                    className={`${INPUT_CLS} h-[140px] resize-none py-[14px]`}
                    disabled={isSubmitting}
                  />
                </div>
                
                {errorMsg && (
                  <p className="text-red-500 text-[11px] font-sans font-medium">{errorMsg}</p>
                )}
                
                <div className="flex items-center justify-between pt-0.5 mt-auto">
                  <div className="flex items-center gap-2 text-text-muted">
                    <FaLock size={13} />
                    <span className="text-[9px]">Secured by Web3Forms.</span>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 h-12 px-5 rounded-full bg-primary text-white font-sans font-bold text-[11px] hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    <FaPaperPlane size={15} className={isSubmitting ? 'animate-pulse' : ''} /> 
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}



          </div>

          {/* ── Right: Info panel — blue gradient ── */}
          <div
            className="flex-1 p-[38px] flex flex-col gap-6"
            style={{ background: 'linear-gradient(135deg, #152A56 0%, #0B1734 100%)' }}
          >
            {/* Availability */}
            <div className="inline-flex items-center gap-2 px-3 h-[30px] rounded-full bg-white/7 w-fit">
              <div className="w-[7px] h-[7px] rounded-full bg-green" />
              <span className="text-white/80 text-[9px]">Currently available</span>
            </div>

            {/* Statement */}
            <div className="flex flex-col gap-2.5">
              <h3 className="font-heading font-normal text-white text-[clamp(22px,2.5vw,34px)] leading-[1.14em]">
                Let's make something <span className="text-primary">useful.</span>
              </h3>
              <p className="text-white/60 text-[12px] leading-[1.6em]">
                Use the form or reach out directly through any of the editable contact details below.
              </p>
            </div>

            <div className="w-full h-px bg-white/9" />

            {/* Contact details */}
            <div className="flex flex-col gap-4">
              {[
                { Icon: FaEnvelope, label: 'Email',    value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { Icon: FaPhone,    label: 'Phone',    value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                { Icon: FaMapPin,   label: 'Location', value: 'Cairo, Egypt', href: undefined },
              ].map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-3.5">
                  <div className="w-10 h-10 flex items-center justify-center rounded-[8px] flex-shrink-0"
                    style={{ background: 'rgba(23,107,255,0.12)' }}>
                    <Icon size={17} className="text-primary" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-mono text-white/50 text-[8px] uppercase tracking-widest">{label}</span>
                    {href ? (
                      <a href={href} className="font-sans font-semibold text-white text-[12px] hover:text-primary transition-colors">
                        {value}
                      </a>
                    ) : (
                      <span className="font-sans font-semibold text-white text-[12px]">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-2.5 pt-1.5">
              {[
                { href: personalInfo.github,   Icon: FaGithub,   label: 'GitHub' },
                { href: personalInfo.linkedin, Icon: FaLinkedin, label: 'LinkedIn' },
                { href: personalInfo.whatsapp, Icon: FaWhatsapp, label: 'WhatsApp' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-[42px] h-[42px] flex items-center justify-center rounded-full text-white hover:text-primary transition-colors"
                  style={{ background: '#242842', border: '1px solid #343952' }}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
