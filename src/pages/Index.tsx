
import { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CourseSection from '../components/CourseSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import FooterSection from '../components/FooterSection';
import PromoPopup from '../components/PromoPopup';

const Index = () => {
  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CourseSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <FooterSection />
      <PromoPopup />
    </div>
  );
};

export default Index;
