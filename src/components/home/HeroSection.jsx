import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Layers } from 'lucide-react';

export default function HeroSection({ onCtaClick }) {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl mix-blend-screen animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl mix-blend-screen animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8"
          >
            <Layers className="w-4 h-4 text-blue-300" />
            <span className="text-sm font-medium text-blue-100">Integrated Software Solutions</span>
          </motion.div>

          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-8">
            AI & Automation for Legal Firms:
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Enhance Your Workflow, Cut Your Costs
            </span>
          </h1>

          <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto mb-12">
            Leverage 30+ years of enterprise software discipline to seamlessly integrate AI and automation into your legal practice's existing workflow. We identify opportunities to optimize your operations and reduce costs by 15-30%, without disrupting your established business processes.
          </p>
        </motion.div>
      </div>
      
      {/* Gradient fade to white at bottom for seamless transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}