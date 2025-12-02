import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { Brain, Building2, Coffee, ArrowRight } from 'lucide-react';

const pathways = [
  {
    title: "Software Development",
    description: "Our enterprise-grade software development expertise now empowers legal firms. We ensure stable, scalable integration of new technologies into your current legal and business applications, focusing on enhancements, not overhauls.",
    icon: Building2,
    link: "SoftwareDevelopment",
    color: "blue",
    delay: 0.1
  },
  {
    title: "AI Services",
    description: "Unlock 15-30% cost savings by integrating practical AI and automation into your legal workflows. We identify opportunities within your existing systems to streamline operations and boost efficiency.",
    icon: Brain,
    link: "AIServices",
    color: "purple",
    delay: 0.2
  },
  {
    title: "Random Thoughts",
    description: "Insights, project notes, and musings on the evolution of software engineering.",
    icon: Coffee,
    link: "RandomThoughts",
    color: "amber",
    delay: 0.3
  }
];

export default function HomePathways() {
  return (
    <section className="py-24 bg-white relative z-10 -mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {pathways.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay }}
            >
              <Link 
                to={createPageUrl(item.link)}
                className="block h-full bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-${item.color}-50 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110`} />
                
                <div className={`w-14 h-14 rounded-xl bg-${item.color}-100 flex items-center justify-center mb-6 relative z-10`}>
                  <item.icon className={`w-7 h-7 text-${item.color}-700`} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3 relative z-10">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-6 relative z-10 leading-relaxed">
                  {item.description}
                </p>
                
                <div className={`flex items-center font-semibold text-${item.color}-700 group-hover:gap-2 transition-all relative z-10`}>
                  Explore
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}