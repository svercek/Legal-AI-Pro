import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Phone, Users, ShieldCheck, Server, BarChart } from 'lucide-react';

const projects = [
  {
    company: "CUNA Mutual Group (TruStage)",
    role: "Portfolio Solution Architect",
    period: "2011 - 2022",
    description: "Managed a portfolio of over 100 software systems including Mainframe, Windows, SaaS, and Cloud applications. Led strategic technical planning and Agile methodology implementation.",
    achievements: [
      "Supported 100+ applications and developed strategic plans for upgrades and migration to new technologies in the Finance organization.",
      "Implemented Agile Methodology across IT Finance Support organization",
      "Led SQL Injection mitigation and data encryption projects",
      "Designed implementation of RESQ System for Actuarial consistency"
    ],
    icon: Building2,
    color: "blue"
  },
  {
    company: "Verizon",
    role: "Enterprise Development Partner",
    period: "JCS Technologies Project",
    description: "Developed mission-critical Audio Conference Billing System and Reservation System, integrating directly with Microsoft Dynamics ERP.",
    achievements: [
      "Processed all conference records daily, resulting in 50% revenue increase",
      "Facilitated >50% workforce reduction through automation",
      "Built centralized reservation system using Visual Basic",
      "Streamlined business processes for Audio Conference Service Center"
    ],
    icon: Phone,
    color: "red"
  },
  {
    company: "Audio Conferencing Industry",
    role: "Software Innovator",
    period: "JCS Technologies Products",
    description: "Created industry-standard tools licensed by Adobe, AT Conference, InterCall, and others. Developed reservation systems for major bridge manufacturers.",
    achievements: [
      "Outlook Add-in licensed by major conferencing providers",
      "MultiLink: Brandable Conference Reservation System",
      "ConferTech: Integrated bridge system UI for legacy upgrades",
      "Custom security integrations for Bell Conferencing"
    ],
    icon: Users,
    color: "green"
  }
];

export default function SoftwarePortfolio() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Proven Track Record</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We bring the same engineering rigor used in these massive enterprise projects to optimize your legal firm's operations. Experience matters when integrating mission-critical systems.
          </p>
        </div>

        <div className="grid gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 lg:p-12 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col lg:flex-row gap-8 lg:items-start">
                <div className={`w-16 h-16 rounded-xl bg-${project.color}-100 flex items-center justify-center flex-shrink-0`}>
                  <project.icon className={`w-8 h-8 text-${project.color}-700`} />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{project.company}</h3>
                      <p className="text-lg text-blue-900 font-medium">{project.role}</p>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-gray-200 text-sm text-gray-600 font-medium mt-2 sm:mt-0">
                      {project.period}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    {project.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <ShieldCheck className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}