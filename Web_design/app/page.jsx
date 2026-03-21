'use client';
import { useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import TrustedSection from '../Components/TrustedSection';
import FeaturesSection from '../Components/FeaturesSection';
import FeatureCarousel from '../Components/FeatureCarousel';

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.25 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="noder-app">
      <Header />
      <Hero />
      <TrustedSection />
      <FeaturesSection />
      <FeatureCarousel />
      <Footer />
    </div>
  );
}
