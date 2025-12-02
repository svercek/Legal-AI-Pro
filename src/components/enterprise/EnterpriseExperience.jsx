import React from 'react';
import { motion } from 'framer-motion';
import { Shield, TrendingUp, LayoutTemplate, Clock } from 'lucide-react';

export default function EnterpriseExperience() {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              The Enterprise Advantage
            </h2>
            <p className="text-lg text-blue-200 mb-8 leading-relaxed">
              Implementing software in your firm requires the same rigor as deploying systems in a Fortune 500 company. We bring 30+ years of high-stakes implementation experience to your practice.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-800/50 flex items-center justify-center flex-shrink-0">
                  <LayoutTemplate className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Complex Portfolio Management</h4>
                  <p className="text-blue-200/80">
                    Managed portfolios of 100+ applications across Mainframe, Windows, SaaS, and Cloud platforms. We understand how systems interact and depend on each other.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-800/50 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Efficiency at Scale</h4>
                  <p className="text-blue-200/80">
                    Proven track record of delivering 50%+ efficiency gains through strategic system optimization and automation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-800/50 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Risk Mitigation</h4>
                  <p className="text-blue-200/80">
                    Decades of experience in regulated industries means we anticipate risks before they become problems—ensuring data integrity and compliance.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Integration Expertise box removed */}
        </div>
      </div>
    </section>
  );
}