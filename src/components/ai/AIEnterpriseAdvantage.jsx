import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Scale, Server, History } from 'lucide-react';

export default function AIEnterpriseAdvantage() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Engineered AI is Crucial for Legal Firms
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Legal firms cannot afford experimental technology. You need proven, reliable systems. In the rush to adopt AI, many overlook the fundamentals of software engineering.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With 30+ years of experience managing complex enterprise applications, we understand that <strong>your client data is sacred</strong>. We apply Fortune 500-level rigor in security and compliance to ensure your AI integrations are as safe as they are efficient.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <ShieldCheck className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Security First</h4>
                  <p className="text-sm text-gray-600">Data privacy and protection baked in, not bolted on.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Server className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Scalable Architecture</h4>
                  <p className="text-sm text-gray-600">Systems built to handle growth and load reliably.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Scale className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Regulatory Compliance</h4>
                  <p className="text-sm text-gray-600">Navigating complex legal and industry standards.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <History className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Proven Methodology</h4>
                  <p className="text-sm text-gray-600">Applying decades of best practices to new tech.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 flex flex-col justify-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
              </div>
              
              <blockquote className="relative z-10 text-2xl font-medium text-gray-300 italic mb-6">
                "The excitement of AI shouldn't distract from the discipline of Engineering. We bring the stability of the past to the innovations of the future."
              </blockquote>
              <div className="text-white">
                <div className="font-bold text-xl">John Svercek</div>
                <div className="text-blue-400">Founder, JCS Technologies</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}