import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '../utils';
import HeroSection from '../components/home/HeroSection';
import HomePathways from '../components/home/HomePathways';
import Footer from '../components/home/Footer';
import ContactSection from '../components/home/ContactSection';
import Navbar from '../components/layout/Navbar';

export default function Home() {
  const location = useLocation();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      // Small delay to ensure content is rendered
      setTimeout(() => {
        scrollToSection(id);
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar transparent={true} />

      {/* Sections */}
      <HeroSection onCtaClick={() => scrollToSection('contact')} />
      <HomePathways />
      <ContactSection />
      <Footer />
    </div>
  );
}