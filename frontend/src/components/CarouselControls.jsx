import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const NavArrow = ({ dir, onClick, className = '', label }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={label || (dir === 'left' ? 'Previous' : 'Next')}
    data-testid={`carousel-${dir}`}
    className={
      'w-10 h-10 rounded-full bg-white/95 backdrop-blur border border-slate-200/80 ' +
      'shadow-[0_6px_20px_rgba(8,47,137,0.14)] flex items-center justify-center ' +
      'text-[#1e2c45] hover:text-[#082f89] hover:bg-white hover:scale-105 ' +
      'active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#082f89] ' +
      'disabled:opacity-40 disabled:cursor-not-allowed ' + className
    }
  >
    {dir === 'left' ? <ChevronLeft size={18} strokeWidth={2.2} /> : <ChevronRight size={18} strokeWidth={2.2} />}
  </button>
);

export const Dots = ({ count, activeIndex, onSelect, className = '' }) => {
  if (count <= 1) return null;
  return (
    <div className={'flex items-center justify-center gap-1.5 ' + className} role="tablist" aria-label="Slide navigation">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          type="button"
          role="tab"
          aria-selected={i === activeIndex}
          aria-label={`Go to slide ${i + 1}`}
          onClick={() => onSelect(i)}
          className="p-1 -m-1 focus:outline-none"
        >
          <span
            className={
              'block h-2 rounded-full transition-all duration-300 ' +
              (i === activeIndex ? 'w-7 bg-[#082f89]' : 'w-2 bg-[#cbd5e1] hover:bg-[#94a3b8]')
            }
          />
        </button>
      ))}
    </div>
  );
};
