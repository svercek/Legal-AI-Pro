import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Briefcase, ArrowRight, CheckCircle } from 'lucide-react';

export default function EnterpriseHero() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50/30" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl mix-blend-multiply" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-100 border border-blue-200 rounded-full mb-6">
              <Building2 className="w-4 h-4 text-blue-700" />
              <span className="text-sm font-medium text-blue-800">Enterprise Systems Implementation</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Proven <span className="text-blue-700">Implementation</span> Strategies for Legal Tech
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We specialize in the expert deployment of leading AI and Automation tools. Leveraging 30+ years of Fortune 500 experience, we ensure your transition to AI and Automation Tools like Claude, DeepSeek and Make is smooth, secure, and successful.
            </p>

            <div className="flex flex-wrap gap-4">
              <button onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-semibold transition-all flex items-center group shadow-lg hover:shadow-xl">
                Explore Implementation Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="mt-10 flex items-center gap-6 text-gray-500 text-sm font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Certified Partners</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>30+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>End-to-End Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}