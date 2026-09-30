/* Portfolio mark — bottom-left, Figma: blue monogram circle + "PORTFOLIO" text */
export default function PortfolioMark() {
  return (
    <div className="fixed bottom-8 left-9 z-40 flex items-center gap-2.5 select-none pointer-events-none">
      <div className="w-[34px] h-[34px] rounded-full bg-primary flex items-center justify-center">
        <span className="font-heading font-extrabold text-white text-[12px] leading-none">ME</span>
      </div>
      <span className="font-sans text-text text-[12px] tracking-widest uppercase">Portfolio</span>
    </div>
  );
}
