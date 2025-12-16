import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { ArrowLeft, Calendar, User, Tag, Folder, Clock } from 'lucide-react';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/home/Footer';

export default function BlogPost() {
  const queryParams = new URLSearchParams(window.location.search);
  const postId = queryParams.get('id');

  const { data: post, isLoading } = useQuery({
    queryKey: ['blog-post', postId],
    queryFn: async () => {
      if (!postId) return null;
      // If we had a way to query by slug efficiently we would, but id is safer for now unless we implement custom filtering logic
      // We can filter by id which is efficient
      const result = await base44.entities.BlogPost.list(); 
      // Ideally we should use get(id) if available or filter, but .list() and find is okay for small apps
      // Actually base44 usually has a .get(id) or we can use filter
      // Let's try to find it in the list for now to be safe if .get isn't documented fully in prompt
      // But actually standard is often .get(id) or filter({id: id})
      // Let's use filter for safety
      const posts = await base44.entities.BlogPost.filter({ id: postId }, 1);
      return posts[0];
    },
    enabled: !!postId,
  });

  useEffect(() => {
    if (post) {
      document.title = post.seo_title || post.title;
      
      // Update meta description if possible (client side)
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', post.seo_description || post.title);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = post.seo_description || post.title;
        document.head.appendChild(meta);
      }
    }
  }, [post]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-pulse text-gray-400">Loading post...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h1>
        <Link to={createPageUrl('RandomThoughts')} className="text-blue-600 hover:underline">
          Back to Thoughts
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar transparent={false} />
      
      <article className="max-w-3xl mx-auto px-6 py-12 lg:py-20">
        <Link 
          to={createPageUrl('RandomThoughts')}
          className="inline-flex items-center text-gray-500 hover:text-blue-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Thoughts
        </Link>

        <header className="mb-10">
          {post.category && (
            <div className="inline-flex items-center space-x-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-900 text-sm font-medium">
                {post.category}
              </span>
              {post.status === 'draft' && (
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-medium">
                  Draft
                </span>
              )}
            </div>
          )}

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm border-b border-gray-100 pb-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author_name || 'Anonymous'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{format(new Date(post.created_date || Date.now()), 'MMMM d, yyyy')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{Math.max(1, Math.ceil(post.content.length / 1000))} min read</span>
            </div>
          </div>
        </header>

        {post.featured_image && (
          <div className="mb-10 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={post.featured_image} 
              alt={post.title} 
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-100">
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4 text-gray-400" />
              {post.tags.map((tag, index) => (
                <span key={index} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </article>

      <Footer />
    </div>
  );
}