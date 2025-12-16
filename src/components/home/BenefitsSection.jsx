import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Clock, Award, Shield, Target } from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: 'Enterprise Expertise',
    description: 'Managed 100+ applications at Fortune 500 companies—we know how to deploy systems right',
  },
  {
    icon: Clock,
    title: 'Fast Implementation',
    description: 'Get up and running quickly with proven deployment methodologies from decades of experience',
  },
  {
    icon: Users,
    title: 'Smooth Adoption',
    description: 'Comprehensive training ensures your team embraces the new system instead of resisting it',
  },
  {
    icon: Award,
    title: 'Maximized ROI',
    description: 'Optimize workflows and automation to get the most value from your software investment',
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-24 bg-gradient-to-br from-blue-900 to-blue-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-300 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Why Choose JCS Technologies
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Decades of enterprise systems experience applied to your legal practice
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-lg rounded-2xl mb-4">
                <benefit.icon className="w-8 h-8 text-amber-400" />
              </div>
              <div className="text-xl font-bold text-white mb-2">{benefit.title}</div>
              <p className="text-blue-100 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <Shield className="w-8 h-8 text-amber-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Security-First Implementation</h3>
            <p className="text-blue-100 text-sm">Led SQL injection mitigation and data encryption projects at Fortune 500 scale</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <TrendingUp className="w-8 h-8 text-amber-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Proven Track Record</h3>
            <p className="text-blue-100 text-sm">Portfolio architect managing 100+ applications from mainframe to cloud platforms</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <Users className="w-8 h-8 text-amber-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Agile Methodology Expert</h3>
            <p className="text-blue-100 text-sm">Implemented Agile across IT organizations, aligning technology with business goals</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}