import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import FloatingNav from './components/layout/FloatingNav';
import ThemeControls from './components/layout/ThemeControls';
import PortfolioMark from './components/layout/PortfolioMark';
import { useDarkMode } from './hooks/useDarkMode';

const Home     = lazy(() => import('./pages/Home'));
const CaseStudy = lazy(() => import('./pages/CaseStudy'));

export default function App() {
  const { isDark, toggle } = useDarkMode();

  return (
    <BrowserRouter>
      <ThemeControls isDark={isDark} onToggle={toggle} />
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      }>
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <PortfolioMark />
              <FloatingNav />
            </>
          } />
          <Route path="/projects/:id" element={<CaseStudy />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
