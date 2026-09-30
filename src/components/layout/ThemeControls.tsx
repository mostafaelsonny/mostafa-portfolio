/* Theme Controls — top-right corner, exact Figma: dark circle buttons */
import { FaMoon, FaSun } from 'react-icons/fa6';

interface ThemeControlsProps {
  isDark: boolean;
  onToggle: () => void;
}

export default function ThemeControls({ isDark, onToggle }: ThemeControlsProps) {
  return (
    <div className="fixed top-7 right-8 z-50 flex items-center gap-2.5">
      <button
        onClick={onToggle}
        className="w-[42px] h-[42px] flex items-center justify-center rounded-full bg-surface border border-border text-text-muted hover:text-primary transition-colors"
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        style={{ boxShadow: 'var(--shadow-card)' }}
      >
        {isDark ? <FaSun size={17} /> : <FaMoon size={17} />}
      </button>
    </div>
  );
}
