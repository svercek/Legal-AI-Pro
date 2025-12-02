import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Award, Code, Settings, Shield, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import Footer from '../components/home/Footer';
import Navbar from '../components/layout/Navbar';

export default function About() {
  const experience = [
    {
      icon: Building2,
      title: 'IBM',
      years: '1974-1993',
      role: 'Developer to Technical Lead to Sales',
      highlight: 'Led cross-site teams developing enterprise I/O Controller Test Systems',
    },
    {
      icon: Code,
      title: 'JCS Technologies',
      years: '1993-Present',
      role: 'President & Founder',
      highlight: 'Built enterprise systems for Verizon, delivering 50%+ efficiency gains',
    },
    {
      icon: Award,
      title: 'CUNA Mutual Group',
      years: '2011-2022',
      role: 'Portfolio Solution Architect',
      highlight: 'Managed 100+ applications across Mainframe, Windows, SaaS, and Cloud',
    },
  ];

  const expertise = [
    {
      icon: Shield,
      title: 'Enterprise Implementation',
      description: 'Deployed and managed 100+ applications at Fortune 500 companies—from selection to optimization',
    },
    {
      icon: Users,
      title: 'Agile Leadership',
      description: 'Implemented Agile methodology across IT organizations, ensuring smooth adoption and business alignment',
    },
    {
      icon: Settings,
      title: 'System Integration',
      description: 'Decades of experience integrating complex systems across multiple platforms and technologies',
    },
    {
      icon: Code,
      title: 'Full-Stack Expertise',
      description: 'From mainframe COBOL to modern web applications, with deep knowledge of .NET and SQL Server',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar transparent={true} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl mix-blend-screen" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl mix-blend-screen" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-blue-300" />
              <span className="text-sm font-medium text-blue-100">30+ Years of Enterprise Software Excellence</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Enterprise Expertise
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                For Your Legal Practice
              </span>
            </h1>
            
            <p className="text-xl text-blue-100/80 leading-relaxed mb-8">
              JCS Technologies is led by John Svercek, a software engineering leader with over three decades 
              of experience developing and deploying enterprise applications for IBM, Verizon, and CUNA Mutual Group. 
              We bring Fortune 500-level expertise to legal practices of all sizes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Strategic Integration for Cost Savings
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  After managing portfolios of over 100 enterprise applications at Fortune 500 companies, 
                  I witnessed firsthand how the right technology—implemented correctly—transforms business operations.
                </p>
                <p>
                  Legal professionals need powerful software, but maximizing ROI requires more than just a subscription. 
                  We focus on seamlessly integrating AI and automation into your existing tools like Clio and PracticePanther—enhancing 
                  your current workflows rather than replacing them.
                </p>
                <p>
                  That's where I come in. I apply the same rigorous deployment methodology I used managing 100+ 
                  applications across multiple platforms—but tailored specifically for legal practices looking to modernize without disruption.
                </p>
                <p className="font-semibold text-blue-900">
                  My mission: Identify and implement opportunities to reduce your operational costs by 15-30% through 
                  intelligent automation, all without disrupting the business processes your firm relies on.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">What I Bring to Your Firm</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-900 font-bold text-sm">✓</span>
                  </div>
                  <span>Portfolio architect who managed 100+ production applications</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-900 font-bold text-sm">✓</span>
                  </div>
                  <span>Led Agile transformations ensuring business-technology alignment</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-900 font-bold text-sm">✓</span>
                  </div>
                  <span>Security expert who led SQL injection mitigation and encryption projects</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-900 font-bold text-sm">✓</span>
                  </div>
                  <span>Integration specialist across Mainframe, Windows, SaaS, and Cloud</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-900 font-bold text-sm">✓</span>
                  </div>
                  <span>Proven track record delivering 50%+ efficiency improvements</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proven Track Record
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three decades of delivering enterprise solutions that drive real business results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <exp.icon className="w-7 h-7 text-blue-900" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                <div className="text-sm text-blue-900 font-semibold mb-2">{exp.years}</div>
                <div className="text-gray-700 font-medium mb-3">{exp.role}</div>
                <p className="text-gray-600 text-sm">{exp.highlight}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Enterprise Expertise You Can Trust
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The same standards applied at Fortune 500 companies, now serving legal professionals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready for a Successful Implementation?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss your firm's needs and create a deployment strategy that works. 
              Free consultation—no obligation.
            </p>
            <Link to={createPageUrl('Home') + '#contact'}>
              <Button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-6 text-lg">
                Schedule Your Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}