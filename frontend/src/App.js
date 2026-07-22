import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import HeroProduct from './components/HeroProduct';
import DealsSection, { TrustBar } from './components/DealsSection';
import VideoTestimonials from './components/VideoTestimonials';
import ProtectingSection from './components/ProtectingSection';
import { NewArrivals, BrandSection, BestSellers, UsageTypes } from './components/ProductSections';
import { CustomerLove, NewsletterCards, Blogs, Footer } from './components/BottomSections';
import TrustedBy from './components/TrustedBy';

const Home = () => (
  <div className="min-h-screen bg-white overflow-x-hidden">
    <Header />
    <main>
      <HeroBanner />
      <HeroProduct />
      <DealsSection />
      <TrustBar />
      <VideoTestimonials />
      <TrustedBy />
      <ProtectingSection />
      <NewArrivals />
      <BrandSection />
      <BestSellers />
      <UsageTypes />
      <CustomerLove />
      <NewsletterCards />
      <Blogs />
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="bottom-right" richColors closeButton />
    </CartProvider>
  );
}

export default App;
