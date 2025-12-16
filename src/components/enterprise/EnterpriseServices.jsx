import React from 'react';
import { motion } from 'framer-motion';
import { Search, Settings, Plug, Users, HeadphonesIcon } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: "Software Selection",
    description: "Navigating the legal tech landscape can be overwhelming. We analyze your firm's specific needs, workflows, and budget to recommend the perfect software stack.",
    color: "blue"
  },
  {
    icon: Settings,
    title: "Full Deployment",
    description: "We handle the entire setup process. From account configuration and data migration to security settings and user provisioning, we ensure your new system is production-ready from day one.",
    color: "indigo"
  },
  {
    icon: Plug,
    title: "System Integration",
    description: "Silos kill efficiency. We integrate your new legal software with your existing ecosystem—email, accounting, CRM, and document management systems—creating a unified, automated workflow.",
    color: "purple"
  },
  {
    icon: Users,
    title: "Training & Adoption",
    description: "Software is only useful if people use it. We provide comprehensive, role-based training for your staff, ensuring high adoption rates and minimizing disruption to your daily operations.",
    color: "green"
  },
  {
    icon: HeadphonesIcon,
    title: "Ongoing Support",
    description: "Our partnership doesn't end at go-live. We offer ongoing support, system optimization, and troubleshooting to keep your practice running smoothly as your needs evolve.",
    color: "amber"
  }
];

export default function EnterpriseServices() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">End-to-End Implementation Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive approach to modernizing your law firm, backed by decades of systems engineering discipline.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-xl bg-${item.color}-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
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