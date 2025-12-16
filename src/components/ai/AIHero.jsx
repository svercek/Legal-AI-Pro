import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Brain, Cpu, ArrowRight } from 'lucide-react';

export default function AIHero() {
  return (
    <section className="relative py-20 bg-gray-900 overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl mix-blend-screen" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl mix-blend-screen" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-900/50 border border-blue-700 rounded-full mb-6">
              <Brain className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-200">AI & Automation for Legal Firms</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              AI Strategy <span className="text-blue-400">Engineered</span> for <span className="text-purple-400">Legal Efficiency</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Unlock 15-30% cost savings by seamlessly integrating AI into your existing legal workflows. We apply 30 years of enterprise engineering discipline to deliver reliable, secure automation—enhancing your current tools without disrupting your practice.
            </p>

            <div className="flex flex-wrap gap-4">
              <button onClick={() => document.getElementById('solutions').scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all flex items-center group">
                Explore AI Solutions
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}