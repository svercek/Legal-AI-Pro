import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import { Calendar, Tag, User, Folder, ArrowRight } from 'lucide-react';

export default function BlogList({ posts }) {
  if (!posts.length) {
    return (
      <div className="text-center py-20 text-gray-500">
        <p className="text-xl">No thoughts shared yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <article key={post.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-all duration-300 relative overflow-hidden group">
          {post.status === 'draft' && (
            <div className="absolute top-4 right-4 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Draft
            </div>
          )}
          
          <header className="mb-4">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
              {post.category && (
                <div className="flex items-center gap-1 text-blue-600 font-medium">
                  <Folder className="w-4 h-4" />
                  {post.category}
                </div>
              )}
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {format(new Date(post.created_date || Date.now()), 'MMM d, yyyy')}
              </div>
              {post.author_name && (
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {post.author_name}
                </div>
              )}
            </div>
            
            <Link to={`${createPageUrl('BlogPost')}?id=${post.id}`} className="block group-hover:text-blue-600 transition-colors">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{post.title}</h2>
            </Link>
            
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {post.tags.map((tag, i) => (
                  <span key={i} className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-600">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </header>
          
          <div className="prose prose-blue max-w-none text-gray-600 mb-6 line-clamp-3">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          <Link 
            to={`${createPageUrl('BlogPost')}?id=${post.id}`}
            className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 transition-colors"
          >
            Read Article <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </article>
      ))}
    </div>
  );
}