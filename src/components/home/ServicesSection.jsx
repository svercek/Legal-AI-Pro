import React from 'react';
import { motion } from 'framer-motion';
import { Search, Settings, Users, Plug, HeadphonesIcon, BarChart } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Software Selection Consulting',
    description: 'Expert guidance on choosing the right legal software for your firm size, practice areas, and budget. We know what works.',
    gradient: 'from-blue-500 to-blue-700',
  },
  {
    icon: Settings,
    title: 'Complete Implementation',
    description: 'End-to-end deployment of Clio, LawDroid, PracticePanther, and other platforms. From configuration to go-live in weeks, not months.',
    gradient: 'from-purple-500 to-purple-700',
  },
  {
    icon: Plug,
    title: 'System Integration',
    description: 'Connect your legal software with existing tools—email, accounting, CRM. 30+ years of integration expertise ensures seamless workflows.',
    gradient: 'from-amber-500 to-amber-700',
  },
  {
    icon: Users,
    title: 'Training & Adoption',
    description: 'Hands-on training for your entire team. We ensure everyone is comfortable and productive with the new system from day one.',
    gradient: 'from-green-500 to-green-700',
  },
  {
    icon: BarChart,
    title: 'Optimization & Best Practices',
    description: 'Maximize ROI with workflow optimization, custom reports, and automation. Learn enterprise-level best practices adapted for your firm.',
    gradient: 'from-red-500 to-red-700',
  },
  {
    icon: HeadphonesIcon,
    title: 'Ongoing Support',
    description: "Post-implementation support and system management. We're here when you need us—whether it's questions, updates, or troubleshooting.",
    gradient: 'from-indigo-500 to-indigo-700',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Full-Service Legal
            <span className="block bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
              Software Implementation
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From selection to training, we handle every aspect of your legal software deployment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}