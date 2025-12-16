import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layers, Award } from 'lucide-react';

export default function SoftwareHero() {
  return (
    <section className="relative py-24 bg-slate-900 overflow-hidden text-white">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500 rounded-full blur-3xl mix-blend-screen opacity-20" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500 rounded-full blur-3xl mix-blend-screen opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8">
              <Code2 className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-200">30+ Years of Engineering Excellence</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Building Robust Software for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Industry Leaders
              </span>
            </h1>

            <p className="text-xl text-blue-100/80 mb-10 leading-relaxed max-w-2xl">
              From Fortune 500 financial systems to mission-critical telecom infrastructure. 
              We bring decades of proven software development experience to your project.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}