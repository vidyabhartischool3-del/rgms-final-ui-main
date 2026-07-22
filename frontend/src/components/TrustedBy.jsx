import React from 'react';

/**
 * Stylized brand wordmarks used for the "Trusted by Industry Leaders" marquee.
 * SVG-based for retina crispness. Each logo uses the brand's signature colour.
 */
const wm = (text, color, sub) => ({ text, color, sub });

export const brandLogos = [
  wm('amazon.in', '#FF9900'),
  wm('Flipkart', '#082f89'),
  wm('meesho', '#F43397'),
  wm('Croma', '#01a345'),
  wm('Reliance Digital', '#082f89'),
  wm('Vijay Sales', '#f00102'),
  wm('Snapdeal', '#E40046'),
  wm('JioMart', '#082f89'),
  wm('Tata CLiQ', '#f00102'),
  wm('Paytm Mall', '#00BAF2'),
  wm('IndiaMART', '#f00102'),
  wm('Shiprocket', '#5B21B6'),
  wm('Delhivery', '#f00102'),
  wm('Ekart', '#082f89'),
  wm('BlueDart', '#082f89'),
  wm('DHL', '#FFCC00', '#f00102'),
  wm('FedEx', '#4D148C', '#FF6600'),
  wm('UPS', '#5F3813', '#FFB500'),
  wm('Razorpay', '#082f89'),
  wm('PhonePe', '#5F259F'),
  wm('Google Pay', '#4285F4'),
  wm('Paytm', '#00BAF2'),
  wm('VISA', '#082f89'),
  wm('Mastercard', '#EB001B', '#F79E1B'),
  wm('RuPay', '#082f89', '#f00102'),
  wm('ISO 9001', '#082f89'),
  wm('BIS Certified', '#01a345'),
  wm('Make in India', '#FF9933', '#01a345'),
  wm('Startup India', '#082f89'),
  wm('CE', '#111827'),
];

const LogoTile = ({ logo }) => {
  const { text, color, sub } = logo;
  return (
    <div
      className="shrink-0 h-16 md:h-[84px] min-w-[170px] md:min-w-[240px] flex items-center justify-center px-6 md:px-8 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_10px_30px_rgba(8,47,137,0.06)] hover:shadow-[0_22px_45px_rgba(8,47,137,0.18)] hover:border-[#082f89]/50 hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer relative overflow-hidden"
      aria-label={text}
    >
      {/* Subtle hover shine gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#082f89]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

      <span className="flex items-center gap-2 whitespace-nowrap z-10">
        <span
          className="font-black tracking-tight text-[18px] md:text-[23px] leading-none group-hover:scale-105 transition-transform duration-300"
          style={{ color }}
        >
          {text}
        </span>
        {sub && (
          <span
            className="inline-block w-2.5 h-2.5 rounded-full shadow-sm"
            style={{ backgroundColor: sub }}
            aria-hidden
          />
        )}
      </span>
    </div>
  );
};

const TrustedBy = () => {
  // Duplicate list for seamless infinite marquee loop
  const track = [...brandLogos, ...brandLogos];

  return (
    <section className="relative bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#f8fafc] py-12 md:py-24 overflow-hidden border-y border-slate-200/60" aria-labelledby="trusted-heading">
      {/* Ambient glow accent behind marquee */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[700px] h-[200px] sm:h-[250px] bg-[#082f89]/10 blur-[90px] sm:blur-[110px] pointer-events-none rounded-full" />

      {/* Section header */}
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 text-center mb-8 md:mb-14 relative z-10">
        <span className="inline-flex items-center gap-2 bg-[#082f89]/10 text-[#082f89] text-[11px] sm:text-[12px] font-black uppercase tracking-[0.18em] px-3.5 py-1.5 rounded-full border border-[#082f89]/20 shadow-sm mb-3 sm:mb-4">
          <span className="w-2 h-2 rounded-full bg-[#01a345] animate-pulse" />
          Enterprise Trust & Scale
        </span>
        <h2
          id="trusted-heading"
          className="text-[26px] sm:text-[36px] md:text-[44px] font-black text-[#07152e] leading-tight tracking-tight"
        >
          Trusted by <span className="bg-gradient-to-r from-[#082f89] via-[#0e45c4] to-[#082f89] bg-clip-text text-transparent">Industry Leaders</span>
        </h2>
        <p className="text-[13px] md:text-[16px] font-medium text-[#5b6b82] mt-2.5 sm:mt-3.5 max-w-2xl mx-auto leading-relaxed">
          Powering next-generation security across India&apos;s leading e-commerce platforms, logistics networks, and enterprise ecosystems.
        </p>
      </div>

      {/* Marquee */}
      <div
        className="marquee-mask group relative z-10"
        role="region"
        aria-label="Trusted brand partners"
        data-testid="trusted-marquee"
      >
        <div className="marquee-track">
          {track.map((logo, i) => (
            <LogoTile key={i} logo={logo} />
          ))}
        </div>
        <div className="marquee-track" aria-hidden="true">
          {track.map((logo, i) => (
            <LogoTile key={`b-${i}`} logo={logo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
