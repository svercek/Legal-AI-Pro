import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6905182c3831d2f7bffc750b/dd558b37e_jcslogo120x120-modern.jpg" 
                alt="JCS Technologies" 
                className="h-12 w-auto rounded-lg"
              />
            </div>
            <p className="text-gray-400 text-sm">
              Expert software development with 30+ years of enterprise experience.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Expertise</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to={createPageUrl('SoftwareDevelopment')} className="hover:text-white transition-colors">Software Development</Link></li>
              <li><Link to={createPageUrl('AIServices')} className="hover:text-white transition-colors">AI Integration</Link></li>
              <li><Link to={createPageUrl('SoftwareDevelopment')} className="hover:text-white transition-colors">System Architecture</Link></li>
              <li><Link to={createPageUrl('SoftwareDevelopment')} className="hover:text-white transition-colors">Legacy Migration</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Platforms</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Claude</li>
              <li>DeepSeek</li>
              <li>Make.com</li>
              <li>Custom AI Agents</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to={createPageUrl('About')} className="hover:text-white transition-colors">About</Link></li>
              <li><Link to={createPageUrl('RandomThoughts')} className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to={createPageUrl('Home') + '#contact'} className="hover:text-white transition-colors">Contact</Link></li>
              <li className="pt-4"><Link to={createPageUrl('AdminContactRequests')} className="hover:text-white transition-colors text-gray-600 text-xs">Admin Dashboard</Link></li>
              </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 JCS Technologies, Inc. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/johnsvercek" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:john.svercek@jcstechnologies.com" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}