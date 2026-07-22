import React, { useState, useEffect, useMemo } from 'react';
import { Search, User, ShoppingCart, ChevronDown, Menu, X, Trash2, Minus, Plus, Sparkles, ShieldCheck, Camera, Tv, Flame, Zap, ArrowRight, Tag, Filter, Command } from 'lucide-react';
import { megaMenu, formatPrice, dealsProducts, newArrivals, bestSellers } from '../mock/mock';
import { useCart } from '../context/CartContext';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './ui/sheet';

const Header = () => {
  const [shopOpen, setShopOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const { count, items, total, open, setOpen, removeFromCart, updateQty, addToCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut (Cmd/Ctrl + K or Esc)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen(true);
      }
      if (e.key === 'Escape') {
        setSearchModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // All products for instant spotlight search
  const allProducts = useMemo(() => {
    const map = new Map();
    [...dealsProducts, ...newArrivals, ...bestSellers].forEach((p) => map.set(p.id, p));
    return Array.from(map.values());
  }, []);

  // Filtered search results
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return allProducts.slice(0, 4);
    const q = searchQuery.toLowerCase();
    return allProducts.filter((p) => p.name.toLowerCase().includes(q) || (p.badge && p.badge.toLowerCase().includes(q)));
  }, [searchQuery, allProducts]);

  const trendingTags = ['4G Solar Camera', 'Color Night Vision', '4K Smart Projector', 'Dashcam 3in1', 'V360 WiFi'];

  return (
    <>
      {/* Announcement Bar Ticker */}
      <div className="bg-gradient-to-r from-[#041b54] via-[#082f89] to-[#041b54] text-white overflow-hidden py-1.5 sm:py-2.5 border-b border-white/10 relative z-50 select-none group shadow-sm" data-testid="announcement-bar">
        <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_4%,black_96%,transparent_100%)]">
          <div className="flex shrink-0 items-center gap-8 sm:gap-12 min-w-full animate-[marqueeScroll_28s_linear_infinite] group-hover:[animation-play-state:paused]">
            <span className="flex items-center gap-6 sm:gap-8 text-[10.5px] sm:text-[12px] md:text-[12.5px] font-extrabold tracking-normal sm:tracking-wider uppercase whitespace-nowrap">
              <span className="flex items-center gap-1.5">
                <span className="animate-bounce">🎉</span> NEW YEAR SALE IS LIVE! CODE{' '}
                <span className="bg-[#f00102] text-white px-2 py-0.5 rounded-full font-black text-[10px] sm:text-[11px] shadow-[0_3px_10px_rgba(240,1,2,0.4)] animate-pulse">
                  NEWYEAR25
                </span>{' '}
                (25% OFF)
              </span>
              <span className="text-[#01a345] font-black">•</span>
              <span className="flex items-center gap-1.5"><span>🚚</span> FREE SHIPPING ACROSS INDIA ABOVE ₹999</span>
              <span className="text-[#01a345] font-black">•</span>
              <span className="flex items-center gap-1.5"><span>🛡️</span> 6 MONTHS WARRANTY + 7-DAY REPLACEMENT</span>
              <span className="text-[#01a345] font-black">•</span>
              <span className="flex items-center gap-1.5"><span>🤖</span> INDIA&apos;S #1 AI SMART SECURITY BRAND</span>
              <span className="text-[#01a345] font-black">•</span>
            </span>
          </div>
          <div className="flex shrink-0 items-center gap-8 sm:gap-12 min-w-full animate-[marqueeScroll_28s_linear_infinite] group-hover:[animation-play-state:paused]" aria-hidden="true">
            <span className="flex items-center gap-6 sm:gap-8 text-[10.5px] sm:text-[12px] md:text-[12.5px] font-extrabold tracking-normal sm:tracking-wider uppercase whitespace-nowrap">
              <span className="flex items-center gap-1.5">
                <span className="animate-bounce">🎉</span> NEW YEAR SALE IS LIVE! CODE{' '}
                <span className="bg-[#f00102] text-white px-2 py-0.5 rounded-full font-black text-[10px] sm:text-[11px] shadow-[0_3px_10px_rgba(240,1,2,0.4)] animate-pulse">
                  NEWYEAR25
                </span>{' '}
                (25% OFF)
              </span>
              <span className="text-[#01a345] font-black">•</span>
              <span className="flex items-center gap-1.5"><span>🚚</span> FREE SHIPPING ACROSS INDIA ABOVE ₹999</span>
              <span className="text-[#01a345] font-black">•</span>
              <span className="flex items-center gap-1.5"><span>🛡️</span> 6 MONTHS WARRANTY + 7-DAY REPLACEMENT</span>
              <span className="text-[#01a345] font-black">•</span>
              <span className="flex items-center gap-1.5"><span>🤖</span> INDIA&apos;S #1 AI SMART SECURITY BRAND</span>
              <span className="text-[#01a345] font-black">•</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Billion-Dollar Glassmorphic Animated Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-[0_10px_30px_rgba(8,47,137,0.1)] py-1'
            : 'bg-white/90 backdrop-blur-md shadow-[0_1px_10px_rgba(8,47,137,0.04)] py-1.5 sm:py-2.5'
        }`}
        data-testid="site-header"
      >
        <div className="max-w-[1280px] mx-auto px-3 sm:px-6 lg:px-8 h-[56px] sm:h-[64px] flex items-center justify-between gap-2 sm:gap-4">

          {/* Left: Mobile menu toggle + Logo */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden text-[#07152e] hover:text-[#082f89] active:bg-slate-100 p-2 rounded-xl transition-all duration-200 flex items-center justify-center min-w-[40px] min-h-[40px]"
              aria-label="Open menu"
              data-testid="mobile-menu-toggle"
            >
              <Menu size={22} strokeWidth={2.2} />
            </button>

            {/* Logo with live status badge */}
            <a href="#top" className="flex items-center gap-2.5 shrink-0 group py-0.5" aria-label="RGMS home" data-testid="logo-link">
              <img
                src="/assets/rgms-logo-transparent.png"
                alt="RGMS Smarthome"
                className="h-8 sm:h-10 md:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                width="140"
                height="40"
              />
              <span className="hidden md:inline-flex items-center gap-1.5 bg-[#e8eeff] text-[#082f89] text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider border border-[#082f89]/20 shadow-sm group-hover:border-[#082f89] transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-[#01a345] animate-ping" />
                AI ONLINE
              </span>
            </a>
          </div>

          {/* Desktop Animated Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-8 text-[14.5px] font-bold text-[#07152e]" aria-label="Primary">
            
            {/* "Shop All" Mega Menu Drawer trigger */}
            <div
              className="relative"
              onMouseEnter={() => setShopOpen(true)}
              onMouseLeave={() => setShopOpen(false)}
            >
              <button
                className="flex items-center gap-1.5 py-5 hover:text-[#082f89] transition-colors font-extrabold relative after:content-[''] after:absolute after:bottom-3 after:left-0 after:w-0 after:h-[3px] after:bg-[#082f89] after:rounded-full hover:after:w-full after:transition-all after:duration-300"
                aria-expanded={shopOpen}
                aria-haspopup="true"
                data-testid="shop-all-btn"
              >
                <Sparkles size={15} className="text-[#01a345] animate-pulse" />
                Shop All
                <ChevronDown size={15} className={`transition-transform duration-300 text-[#082f89] ${shopOpen ? 'rotate-180 scale-110' : ''}`} />
              </button>

              {/* Billion-Dollar Opaque Luxury Mega Menu Drawer */}
              {shopOpen && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-full w-[1000px] bg-white rounded-3xl shadow-[0_30px_90px_rgba(2,11,34,0.25)] border border-slate-200/90 p-8 grid grid-cols-12 gap-8 z-50 animate-fadeSlideIn border-t-4 border-t-[#082f89]"
                  data-testid="mega-menu"
                >
                  {/* Category Column 1 */}
                  <div className="col-span-3 space-y-3 border-r border-slate-100 pr-4">
                    <div className="flex items-center gap-2 border-b border-slate-100 pb-2.5">
                      <span className="w-7 h-7 rounded-lg bg-[#e8eeff] text-[#082f89] flex items-center justify-center shrink-0">
                        <Camera size={15} />
                      </span>
                      <p className="text-[12px] font-black text-[#082f89] uppercase tracking-[0.12em]">Smart Cameras</p>
                    </div>
                    <ul className="space-y-1.5">
                      {megaMenu[0].items.map((item, idx) => (
                        <li key={item}>
                          <a
                            href="#top"
                            className="text-[13.5px] text-[#4a5568] hover:text-[#082f89] hover:bg-[#e8eeff]/70 px-3 py-2 rounded-xl font-semibold transition-all duration-200 flex items-center justify-between group"
                          >
                            <span>{item}</span>
                            {idx === 1 && <span className="bg-[#f00102] text-white text-[9.5px] font-black px-1.5 py-0.5 rounded uppercase">HOT</span>}
                            {idx === 2 && <span className="bg-[#01a345] text-white text-[9.5px] font-black px-1.5 py-0.5 rounded uppercase">NEW</span>}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Category Column 2 */}
                  <div className="col-span-3 space-y-3 border-r border-slate-100 pr-4">
                    <div className="flex items-center gap-2 border-b border-slate-100 pb-2.5">
                      <span className="w-7 h-7 rounded-lg bg-[#e8eeff] text-[#082f89] flex items-center justify-center shrink-0">
                        <Tv size={15} />
                      </span>
                      <p className="text-[12px] font-black text-[#082f89] uppercase tracking-[0.12em]">Smart Homes & Cinema</p>
                    </div>
                    <ul className="space-y-1.5">
                      {megaMenu[1].items.map((item, idx) => (
                        <li key={item}>
                          <a
                            href="#top"
                            className="text-[13.5px] text-[#4a5568] hover:text-[#082f89] hover:bg-[#e8eeff]/70 px-3 py-2 rounded-xl font-semibold transition-all duration-200 flex items-center justify-between group"
                          >
                            <span>{item}</span>
                            {idx === 1 && <span className="bg-[#082f89] text-white text-[9.5px] font-black px-1.5 py-0.5 rounded uppercase">4K</span>}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Category Column 3 */}
                  <div className="col-span-3 space-y-3 border-r border-slate-100 pr-4">
                    <div className="flex items-center gap-2 border-b border-slate-100 pb-2.5">
                      <span className="w-7 h-7 rounded-lg bg-[#e8eeff] text-[#082f89] flex items-center justify-center shrink-0">
                        <ShieldCheck size={15} />
                      </span>
                      <p className="text-[12px] font-black text-[#082f89] uppercase tracking-[0.12em]">Shop by Solution</p>
                    </div>
                    <ul className="space-y-1.5">
                      {megaMenu[2].items.map((item) => (
                        <li key={item}>
                          <a
                            href="#top"
                            className="text-[13.5px] text-[#4a5568] hover:text-[#082f89] hover:bg-[#e8eeff]/70 px-3 py-2 rounded-xl font-semibold transition-all duration-200 flex items-center justify-between group"
                          >
                            <span>{item}</span>
                            <ArrowRight size={13} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 text-[#082f89]" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 4: Product Showcase Card */}
                  <div className="col-span-3 bg-gradient-to-br from-[#e8eeff] to-[#f8fafc] rounded-2xl p-4 border border-slate-200/60 flex flex-col justify-between group cursor-pointer hover:shadow-lg transition-shadow">
                    <div>
                      <span className="inline-flex items-center gap-1 bg-[#01a345] text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider mb-2">
                        <Flame size={11} /> FEATURED DEAL
                      </span>
                      <p className="text-[13px] font-black text-[#07152e] leading-snug line-clamp-2 mt-1">
                        Lumora 4K Smart AI Android Cinema Projector
                      </p>
                      <div className="h-[120px] flex items-center justify-center my-2">
                        <img src="/assets/asset-27.png" alt="Lumora Projector" className="max-h-full object-contain group-hover:scale-105 transition-transform duration-300" />
                      </div>
                    </div>
                    <div>
                      <p className="text-[14px] font-black text-[#082f89]">{formatPrice(7819)}</p>
                      <button className="w-full mt-2 bg-[#082f89] hover:bg-[#0e45c4] text-white text-[11.5px] font-bold py-2 rounded-xl flex items-center justify-center gap-1 shadow-md transition-colors">
                        <span>Shop Now</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>

                </div>
              )}
            </div>

            <a href="#top" className="py-5 hover:text-[#082f89] transition-colors relative after:content-[''] after:absolute after:bottom-3 after:left-0 after:w-0 after:h-[3px] after:bg-[#082f89] after:rounded-full hover:after:w-full after:transition-all after:duration-300">
              About Us
            </a>
            <a href="#top" className="py-5 hover:text-[#082f89] transition-colors relative after:content-[''] after:absolute after:bottom-3 after:left-0 after:w-0 after:h-[3px] after:bg-[#082f89] after:rounded-full hover:after:w-full after:transition-all after:duration-300">
              Warranty
            </a>
            <a href="#top" className="py-5 hover:text-[#082f89] transition-colors relative after:content-[''] after:absolute after:bottom-3 after:left-0 after:w-0 after:h-[3px] after:bg-[#082f89] after:rounded-full hover:after:w-full after:transition-all after:duration-300">
              Support
            </a>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-1 sm:gap-2 md:gap-3">

            {/* Desktop Spotlight Search Bar Trigger */}
            <div
              onClick={() => setSearchModalOpen(true)}
              className="hidden md:flex items-center bg-[#f1f5f9] hover:bg-white cursor-pointer rounded-full pl-4 pr-2 py-1.5 w-[220px] lg:w-[260px] border border-transparent hover:border-[#082f89]/30 transition-all duration-300 shadow-inner group"
              data-testid="search-input"
            >
              <Search size={16} className="text-[#8b98ad] group-hover:text-[#082f89] transition-colors shrink-0" />
              <span className="text-[13px] font-semibold text-[#8b98ad] group-hover:text-[#07152e] ml-2 flex-1 truncate">
                Search cameras...
              </span>
              <kbd className="hidden lg:inline-flex items-center gap-0.5 bg-white border border-slate-200 text-[#082f89] text-[10px] font-black px-2 py-0.5 rounded-md shadow-xs">
                ⌘K
              </kbd>
            </div>

            {/* Mobile Search Icon Button */}
            <button
              onClick={() => setSearchModalOpen(true)}
              className="md:hidden text-[#07152e] hover:text-[#082f89] active:bg-slate-100 p-2 rounded-xl transition-all duration-200 min-w-[40px] min-h-[40px] flex items-center justify-center"
              aria-label="Search"
              data-testid="mobile-search-toggle"
            >
              <Search size={20} strokeWidth={2.2} />
            </button>

            {/* Mobile/Desktop Account Icon Button */}
            <button
              className="text-[#07152e] hover:text-[#082f89] hover:bg-[#e8eeff] p-2 rounded-xl sm:rounded-2xl transition-all duration-200 min-w-[40px] min-h-[40px] flex items-center justify-center hover:scale-105 active:scale-95"
              aria-label="Account"
              data-testid="account-btn"
            >
              <User size={20} strokeWidth={2.2} />
            </button>

            {/* Cart Button (Sleek Icon on Mobile, Pill Button on Desktop) */}
            <button
              onClick={() => setOpen(true)}
              className="relative text-[#07152e] hover:text-[#082f89] sm:bg-[#082f89] sm:hover:bg-[#0e45c4] sm:text-white p-2 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl transition-all duration-300 flex items-center gap-2 sm:shadow-[0_6px_20px_rgba(8,47,137,0.3)] hover:scale-105 active:scale-95 min-w-[40px] min-h-[40px] justify-center"
              aria-label={`Cart, ${count} items`}
              data-testid="cart-btn"
            >
              <ShoppingCart size={20} strokeWidth={2.2} />
              <span className="hidden sm:inline-block text-[13px] font-extrabold tracking-wide">Cart</span>
              
              {/* Badge */}
              <span className="absolute -top-1 -right-1 sm:static bg-[#f00102] text-white text-[10px] sm:text-[11px] font-black w-4 h-4 sm:min-w-[20px] sm:h-[20px] sm:px-1 rounded-full flex items-center justify-center shadow-md border-2 border-white tabular-nums animate-pulse">
                {count}
              </span>
            </button>

          </div>
        </div>
      </header>

      {/* Billion-Dollar Spotlight Search Modal Overlay */}
      {searchModalOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-[#020b22]/70 backdrop-blur-xl animate-fadeIn">
          <div
            className="w-full max-w-2xl bg-white/98 backdrop-blur-2xl rounded-3xl shadow-[0_35px_90px_rgba(8,47,137,0.35)] border border-slate-100 overflow-hidden animate-fadeSlideIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Input Header */}
            <div className="flex items-center px-6 py-4 border-b border-slate-100 gap-3">
              <Search size={22} className="text-[#082f89] shrink-0" strokeWidth={2.5} />
              <input
                autoFocus
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search RGMS AI Cameras, 4G Solar, Dashcams, Projectors..."
                className="flex-1 bg-transparent text-[16px] font-bold text-[#07152e] placeholder:text-[#94a3b8] outline-none"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="text-[#8b98ad] hover:text-[#07152e] p-1">
                  <X size={18} />
                </button>
              )}
              <button
                onClick={() => setSearchModalOpen(false)}
                className="bg-[#f1f5f9] text-[#07152e] hover:bg-[#e8eeff] text-[11px] font-black px-2.5 py-1 rounded-lg transition-colors"
              >
                ESC
              </button>
            </div>

            {/* Trending Searches Tags */}
            <div className="px-6 py-3 bg-[#f8fafc] border-b border-slate-100 flex items-center gap-2 overflow-x-auto scrollbar-hide">
              <span className="text-[11px] font-black text-[#8b98ad] uppercase tracking-wider whitespace-nowrap">Trending:</span>
              {trendingTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSearchQuery(tag)}
                  className="bg-white hover:bg-[#082f89] hover:text-white border border-slate-200/80 text-[#07152e] text-[11.5px] font-bold px-3 py-1 rounded-full whitespace-nowrap transition-colors shadow-xs"
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Results Grid */}
            <div className="max-h-[380px] overflow-y-auto p-4 space-y-2">
              <p className="text-[11.5px] font-black text-[#8b98ad] uppercase tracking-wider px-2 mb-2">
                {searchQuery ? `Search Results (${searchResults.length})` : 'Popular Recommendations'}
              </p>
              {searchResults.length === 0 ? (
                <div className="py-10 text-center text-[#8b98ad]">
                  <p className="text-[14px] font-bold text-[#07152e]">No matching RGMS products found</p>
                  <p className="text-[12px] mt-1">Try searching for &quot;4G&quot;, &quot;Solar&quot;, or &quot;Projector&quot;</p>
                </div>
              ) : (
                searchResults.map((p) => (
                  <div
                    key={p.id}
                    className="flex items-center gap-4 p-3 rounded-2xl bg-white hover:bg-[#e8eeff]/50 border border-slate-100 transition-colors group cursor-pointer"
                  >
                    <div className="w-14 h-14 bg-[#f1f5f9] rounded-xl flex items-center justify-center p-2 shrink-0">
                      <img src={p.image} alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        {p.badge && <span className="bg-[#f00102] text-white text-[9.5px] font-black px-1.5 py-0.5 rounded">{p.badge}</span>}
                        <p className="text-[13px] font-bold text-[#07152e] truncate">{p.name}</p>
                      </div>
                      <p className="text-[13px] font-black text-[#082f89] mt-0.5">{formatPrice(p.price)}</p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(p);
                        toast.success(`Added ${p.name.slice(0, 25)}... to cart!`);
                      }}
                      className="bg-[#082f89] hover:bg-[#0e45c4] text-white text-[12px] font-bold px-4 py-2 rounded-xl transition-all shadow-md shrink-0 active:scale-95"
                    >
                      + Add
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Navigation Drawer */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="left" className="w-full sm:max-w-sm p-0 flex flex-col bg-white">
          <SheetHeader className="px-5 py-4 border-b flex-row items-center space-y-0 bg-[#041b54] text-white pr-14">
            <div className="flex items-center gap-3">
              <img src="/assets/rgms-logo-transparent.png" alt="RGMS" className="h-8 w-auto object-contain bg-white rounded-xl p-1.5 shadow-sm" />
              <SheetTitle className="text-white text-[15px] font-black tracking-wide">Menu</SheetTitle>
            </div>
          </SheetHeader>
          <div className="flex-1 overflow-y-auto px-5 py-6 space-y-7">
            {megaMenu.map((col) => (
              <div key={col.title}>
                <p className="text-[12px] font-black text-[#082f89] uppercase tracking-[0.14em] mb-3 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#01a345]" />
                  {col.title}
                </p>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li key={item}>
                      <a
                        onClick={() => setMobileOpen(false)}
                        href="#top"
                        className="text-[14.5px] font-bold text-[#07152e] hover:text-[#082f89] hover:bg-[#e8eeff] px-3 py-2 rounded-xl transition-all block"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="pt-5 border-t border-slate-100 space-y-2">
              <a href="#top" className="block py-2.5 px-3 text-[14.5px] font-bold text-[#07152e]">About Us</a>
              <a href="#top" className="block py-2.5 px-3 text-[14.5px] font-bold text-[#07152e]">Warranty</a>
              <a href="#top" className="block py-2.5 px-3 text-[14.5px] font-bold text-[#07152e]">Support</a>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Shopping Cart Drawer */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="w-full sm:max-w-md flex flex-col p-0 bg-white" data-testid="cart-drawer">
          <SheetHeader className="px-5 py-4 border-b bg-[#041b54] text-white pr-14">
            <SheetTitle className="text-[16px] font-bold text-white flex items-center gap-3">
              <span>Shopping Cart</span>
              <span className="text-[12px] bg-[#01a345] text-white px-2.5 py-0.5 rounded-full font-black">
                {count} items
              </span>
            </SheetTitle>
          </SheetHeader>
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6">
              <div className="w-20 h-20 rounded-full bg-[#e8eeff] flex items-center justify-center text-[#082f89]">
                <ShoppingCart size={40} />
              </div>
              <p className="text-[#07152e] text-base font-extrabold">Your cart is empty</p>
              <p className="text-[#64748b] text-xs text-center max-w-xs font-medium">Explore India&apos;s #1 AI security cameras and smart home devices.</p>
              <button
                onClick={() => setOpen(false)}
                className="btn-primary text-[13px] font-bold px-8 py-3 rounded-full shadow-lg"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3 items-center border border-slate-100 rounded-2xl p-3 shadow-sm bg-white">
                    <div className="w-16 h-16 bg-[#f1f5f9] rounded-xl flex items-center justify-center overflow-hidden shrink-0">
                      <img src={item.image} alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[12.5px] font-bold text-[#07152e] truncate">{item.name}</p>
                      <p className="text-[13px] font-black text-[#082f89] mt-0.5">{formatPrice(item.price)}</p>
                      <div className="flex items-center gap-2 mt-1.5">
                        <button onClick={() => updateQty(item.id, item.qty - 1)} aria-label="Decrease quantity" className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center text-[#07152e] hover:border-[#082f89] hover:text-[#082f89] transition-colors"><Minus size={12} /></button>
                        <span className="text-[13px] font-bold w-5 text-center tabular-nums">{item.qty}</span>
                        <button onClick={() => updateQty(item.id, item.qty + 1)} aria-label="Increase quantity" className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center text-[#07152e] hover:border-[#082f89] hover:text-[#082f89] transition-colors"><Plus size={12} /></button>
                      </div>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-[#9aa7ba] hover:text-[#f00102] transition-colors shrink-0 p-2" aria-label="Remove">
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>
              <div className="border-t px-5 py-5 space-y-3 bg-[#f8fafc]">
                <div className="flex justify-between text-[15px] font-black text-[#07152e]">
                  <span>TOTAL AMOUNT:</span>
                  <span className="tabular-nums text-[#082f89]">{formatPrice(total)}</span>
                </div>
                <button className="w-full btn-primary text-[13px] font-extrabold py-3.5 rounded-full shadow-lg">
                  PROCEED TO CHECKOUT
                </button>
                <button onClick={() => setOpen(false)} className="w-full bg-white border border-slate-200 hover:border-[#082f89] hover:text-[#082f89] text-[#07152e] text-[13px] font-bold py-3 rounded-full transition-colors">
                  CONTINUE SHOPPING
                </button>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Header;
