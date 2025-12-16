import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion } from 'framer-motion';
import AIHero from '../components/ai/AIHero';
import AISolutions from '../components/ai/AISolutions';
import AIEnterpriseAdvantage from '../components/ai/AIEnterpriseAdvantage';
import Footer from '../components/home/Footer';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/layout/Navbar';

export default function AIServices() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar transparent={true} />

      <AIHero />
      <AISolutions />
      <AIEnterpriseAdvantage />
      
      {/* Contact CTA specifically for AI */}
      <section className="py-20 bg-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Ready to Engineer Your AI Strategy?</h2>
          <p className="text-xl text-blue-100 mb-8">Let's discuss how we can apply reliable engineering principles to your AI initiatives.</p>
          <Link to={createPageUrl('Home') + '#contact'}>
            <button className="px-8 py-4 bg-white text-blue-900 rounded-lg font-bold hover:bg-blue-50 transition-colors">
              Schedule a Consultation
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}