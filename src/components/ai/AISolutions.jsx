import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Code2, Workflow } from 'lucide-react';

const solutions = [
  {
    icon: Compass,
    title: "Strategic AI Integration",
    description: "We analyze your current legal workflows to identify specific opportunities for cost reduction. Whether it's automating client intake or streamlining document review, we focus on high-impact integrations that deliver measurable 15-30% savings.",
    color: "blue"
  },
  {
    icon: Code2,
    title: "Custom AI Solution Development",
    description: "We build secure, custom AI tools that integrate directly with your existing legal software. From intelligent case summarization to automated contract analysis, we engineer solutions that fit perfectly into your established processes.",
    color: "purple"
  },
  {
    icon: Workflow,
    title: "AI-Driven Process Automation",
    description: "Streamline operations by intelligently automating complex workflows. We combine traditional automation logic with AI's cognitive capabilities to handle unstructured data, decision support, and adaptive processes that evolve with your business.",
    color: "indigo"
  }
];

export default function AISolutions() {
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive AI Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Moving beyond chatbots to deliver engineered intelligence that drives business value.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`w-14 h-14 rounded-xl bg-${item.color}-100 flex items-center justify-center mb-6`}>
                <item.icon className={`w-7 h-7 text-${item.color}-600`} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}