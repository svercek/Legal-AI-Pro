import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles, Coffee } from 'lucide-react';
import Footer from '../components/home/Footer';
import BlogEditor from '../components/blog/BlogEditor';
import BlogList from '../components/blog/BlogList';
import Navbar from '../components/layout/Navbar';

export default function RandomThoughts() {
  const queryClient = useQueryClient();

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: () => base44.entities.BlogPost.list('-created_date'),
  });

  const handlePostCreated = () => {
    queryClient.invalidateQueries({ queryKey: ['blog-posts'] });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar transparent={true} />

      {/* Header */}
      <header className="bg-slate-900 py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl mix-blend-screen" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl mix-blend-screen" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl">
                <Coffee className="w-6 h-6 text-amber-300" />
              </div>
              
              <BlogEditor onPostCreated={handlePostCreated} />
              
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl">
                <Coffee className="w-6 h-6 text-amber-300" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Random Thoughts
            </h1>
            <p className="text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
              A collection of insights, project notes, and musings on software engineering, AI, and the evolution of technology.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-12">
        {isLoading ? (
          <div className="text-center py-20">
            <div className="animate-pulse text-gray-400">Loading thoughts...</div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <BlogList posts={posts} />
          </motion.div>
        )}
      </main>

      <Footer />
    </div>
  );
}