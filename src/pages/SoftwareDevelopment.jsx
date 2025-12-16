import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { ArrowLeft, Code, Database, Shield, Layout } from 'lucide-react';
import SoftwareHero from '../components/software/SoftwareHero';
import SoftwarePortfolio from '../components/software/SoftwarePortfolio';
import Footer from '../components/home/Footer';
import Navbar from '../components/layout/Navbar';

export default function SoftwareDevelopment() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar transparent={true} />

      <SoftwareHero />
      
      {/* Skills Section - Hidden for now
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-4 bg-blue-50 rounded-xl">
              <Code className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-bold text-gray-900">.NET Framework</h3>
              <p className="text-sm text-gray-500">Expert Development</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-purple-50 rounded-xl">
              <Layout className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="font-bold text-gray-900">Agile Methodology</h3>
              <p className="text-sm text-gray-500">Process Transformation</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-green-50 rounded-xl">
              <Database className="w-8 h-8 text-green-600 mb-3" />
              <h3 className="font-bold text-gray-900">System Integration</h3>
              <p className="text-sm text-gray-500">Complex Architectures</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-amber-50 rounded-xl">
              <Shield className="w-8 h-8 text-amber-600 mb-3" />
              <h3 className="font-bold text-gray-900">Security</h3>
              <p className="text-sm text-gray-500">Risk Mitigation</p>
            </div>
          </div>
        </div>
      </section>
      */}

      <SoftwarePortfolio />

      <section className="py-20 bg-slate-900 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-6">Need Enterprise-Grade Software Development?</h2>
          <p className="text-xl text-blue-200 mb-8">
            Leverage 30+ years of experience to build scalable, secure, and efficient systems.
          </p>
          <Link to={createPageUrl('Home') + '#contact'}>
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-500 transition-colors shadow-lg hover:shadow-xl">
              Discuss Your Project
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}