import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Building2, Zap, Users, Shield, Target } from 'lucide-react';

const features = [
  {
    icon: Building2,
    title: 'IBM & Fortune 500 Veteran',
    description: '30+ years building and deploying enterprise systems at IBM, CUNA Mutual Group, and Verizon',
  },
  {
    icon: Target,
    title: 'Portfolio Architecture',
    description: 'Managed 100+ applications spanning Mainframe, Windows, SaaS, and Cloud platforms',
  },
  {
    icon: Users,
    title: 'Agile Implementation Expert',
    description: 'Led Agile transformation across IT organizations, ensuring business alignment and adoption',
  },
  {
    icon: Zap,
    title: 'Proven Results',
    description: 'Delivered 50%+ efficiency gains for Verizon, enterprise billing systems, and more',
  },
  {
    icon: Shield,
    title: 'Security & Integration',
    description: 'Led SQL injection mitigation, encryption projects, and complex system integrations',
  },
  {
    icon: CheckCircle,
    title: 'End-to-End Ownership',
    description: 'From requirements to training—we handle every phase of your software implementation',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Enterprise Expertise
            <span className="block bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
              For Your Legal Practice
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The same systems implementation standards used at Fortune 500 companies, now serving legal firms
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-blue-900" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-12"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready for a Successful Software Implementation?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your firm's needs and create a deployment plan that works
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white text-blue-900 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold"
          >
            Schedule Your Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}