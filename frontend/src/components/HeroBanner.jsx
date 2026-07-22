import React from 'react';
import { heroBanners, categories } from '../mock/mock';
import useCarousel from '../hooks/useCarousel';
import { NavArrow, Dots } from './CarouselControls';
import { Sparkles } from 'lucide-react';

const HeroBanner = () => {
  const banner = useCarousel({ autoplay: true, interval: 5500 });
  const cats = useCarousel({ autoplay: false });

  return (
    <section className="bg-white pt-6 md:pt-8 pb-4 relative overflow-hidden" id="top" data-testid="hero-banner-section">
      {/* Background Ambient Glowing Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-gradient-to-r from-[#082f89]/15 via-[#01a345]/10 to-[#f00102]/10 blur-[100px] rounded-full pointer-events-none animate-heroGlow" />
      
      {/* Banner carousel */}
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 relative z-10">
        <NavArrow dir="left" onClick={banner.prev} className="absolute left-1 lg:-left-2 top-1/2 -translate-y-1/2 hidden sm:flex" label="Previous banner" />
        <div
          {...banner.scrollerProps}
          className="flex gap-4 sm:gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-1 focus:outline-none -mx-4 sm:mx-0 px-4 sm:px-1"
          aria-roledescription="carousel"
          aria-label="Featured banners"
          data-testid="hero-banner-scroller"
        >
          {heroBanners.map((b, i) => (
            <div key={b.id} data-slide className="w-[88vw] sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] flex-none snap-start" aria-roledescription="slide" aria-label={`${i + 1} of ${heroBanners.length}`}>
              <div className="rounded-3xl overflow-hidden aspect-[16/10] group cursor-pointer bg-[#f1f5f9] shadow-[0_8px_25px_rgba(8,47,137,0.08)] hover:shadow-[0_20px_45px_rgba(8,47,137,0.18)] border border-slate-200/80 transition-all duration-500 relative">
                {/* Image */}
                <img
                  src={b.image}
                  alt={b.alt}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-700 ease-out select-none pointer-events-none"
                  draggable={false}
                />
                {/* Shimmer overlay sweep */}
                <div className="animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
        <NavArrow dir="right" onClick={banner.next} className="absolute right-1 lg:-right-2 top-1/2 -translate-y-1/2 hidden sm:flex" label="Next banner" />

        <Dots count={heroBanners.length} activeIndex={banner.activeIndex} onSelect={banner.scrollToIndex} className="mt-5" />
      </div>

      {/* Animated Categories strip */}
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 mt-7 md:mt-10 relative z-10" data-testid="categories-strip">
        <div
          {...cats.scrollerProps}
          className="flex gap-4 sm:gap-6 md:gap-7 overflow-x-auto scrollbar-hide justify-start lg:justify-center -mx-4 sm:mx-0 px-4 sm:px-1 pb-2 focus:outline-none"
          aria-label="Shop by category"
        >
          {categories.map((c) => (
            <a key={c.id} href="#top" data-slide className="flex flex-col items-center gap-2.5 min-w-[76px] sm:min-w-[86px] group focus-visible:outline-none shrink-0">
              <div className="w-[72px] h-[72px] sm:w-[80px] sm:h-[80px] md:w-[92px] md:h-[92px] rounded-2xl sm:rounded-full overflow-hidden border border-slate-200/80 shadow-[0_4px_12px_rgba(8,47,137,0.08)] group-hover:shadow-[0_12px_28px_rgba(8,47,137,0.25)] group-hover:border-[#082f89] group-hover:ring-4 group-hover:ring-[#082f89]/15 group-hover:-translate-y-1.5 transition-all duration-300 bg-white p-1 relative">
                <img src={c.image} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover rounded-xl sm:rounded-full group-hover:scale-105 transition-transform duration-300" draggable={false} />
              </div>
              <span className="text-[11.5px] sm:text-[12.5px] font-extrabold text-[#1e2c45] group-hover:text-[#082f89] transition-colors whitespace-nowrap">{c.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
