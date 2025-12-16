import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ transparent = false, extraActions }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Check if we are on the About page
  // We check if the pathname ends with 'About' or is exactly 'About'
  const isAboutPage = location.pathname.includes('About');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navbar is transparent only if transparent prop is true AND not scrolled AND mobile menu is closed
  const isTransparent = transparent && !scrolled && !mobileMenuOpen;

  const navLinks = [
    { name: 'Home', path: createPageUrl('Home') },
    { name: 'Software Dev', path: createPageUrl('SoftwareDevelopment') },
    { name: 'AI Services', path: createPageUrl('AIServices') },
    { name: 'Blog', path: createPageUrl('RandomThoughts') },
    { 
      name: isAboutPage ? 'Contact' : 'About', 
      path: isAboutPage ? createPageUrl('Home') + '#contact' : createPageUrl('About') 
    }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent 
          ? 'bg-transparent' 
          : 'bg-white/95 backdrop-blur-md shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to={createPageUrl('Home')} className="flex items-center space-x-2 group">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6905182c3831d2f7bffc750b/dd558b37e_jcslogo120x120-modern.jpg" 
              alt="JCS Technologies" 
              className="h-12 w-auto rounded-lg"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path}
                className={`font-medium text-sm transition-colors ${
                  isTransparent 
                    ? 'text-blue-50 hover:text-white' 
                    : 'text-gray-600 hover:text-blue-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
            {extraActions && (
              <div className={`pl-4 border-l ml-4 transition-colors ${
                isTransparent ? 'border-white/20' : 'border-gray-200'
              }`}>
                {extraActions}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            {extraActions}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isTransparent ? 'text-white hover:bg-white/10' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="px-6 py-6 space-y-4 flex flex-col">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path}
                  className="text-lg font-medium text-gray-700 py-2 hover:text-blue-900 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}