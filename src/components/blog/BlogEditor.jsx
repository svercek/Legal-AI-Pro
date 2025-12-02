import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { base44 } from '@/api/base44Client';
import { PenSquare, Loader2 } from 'lucide-react';

export default function BlogEditor({ onPostCreated }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    content: '',
    tags: '',
    category: 'Random Thoughts',
    author_name: '',
    status: 'draft',
    seo_title: '',
    seo_description: ''
  });

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  };

  const handleTitleChange = (e) => {
    const title = e.target.value;
    setFormData(prev => ({
      ...prev,
      title,
      slug: prev.slug || generateSlug(title), // Only auto-generate if empty
      seo_title: prev.seo_title || title // Auto-fill SEO title if empty
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const tagsArray = formData.tags.split(',').map(t => t.trim()).filter(t => t);
      
      await base44.entities.BlogPost.create({
        title: formData.title,
        slug: formData.slug || generateSlug(formData.title),
        content: formData.content,
        tags: tagsArray,
        category: formData.category,
        author_name: formData.author_name,
        status: formData.status,
        seo_title: formData.seo_title,
        seo_description: formData.seo_description
      });

      setFormData({ 
        title: '', slug: '', content: '', tags: '', 
        category: 'Random Thoughts', author_name: '', status: 'draft',
        seo_title: '', seo_description: ''
      });
      setIsOpen(false);
      if (onPostCreated) onPostCreated();
    } catch (error) {
      console.error("Failed to create post:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-900 hover:bg-blue-800 text-white gap-2">
          <PenSquare className="w-4 h-4" />
          Share Thought
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Share a Random Thought</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <Tabs defaultValue="content" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="settings">Settings & SEO</TabsTrigger>
            </TabsList>
            
            <TabsContent value="content" className="space-y-4 pt-4">
              <Input
                placeholder="Post Title"
                value={formData.title}
                onChange={handleTitleChange}
                required
                className="text-lg font-semibold"
              />
              
              <div className="grid grid-cols-2 gap-4">
                <Select 
                  value={formData.category} 
                  onValueChange={(value) => setFormData({...formData, category: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Software Development">Software Development</SelectItem>
                    <SelectItem value="AI & Automation">AI & Automation</SelectItem>
                    <SelectItem value="Legacy Systems">Legacy Systems</SelectItem>
                    <SelectItem value="Tech Leadership">Tech Leadership</SelectItem>
                    <SelectItem value="Random Thoughts">Random Thoughts</SelectItem>
                  </SelectContent>
                </Select>

                <Select 
                  value={formData.status} 
                  onValueChange={(value) => setFormData({...formData, status: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Textarea
                placeholder="Write your thoughts (Markdown supported)..."
                className="h-64 font-mono text-sm"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                required
              />
            </TabsContent>

            <TabsContent value="settings" className="space-y-4 pt-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Author Name</label>
                <Input
                  placeholder="e.g. John Svercek"
                  value={formData.author_name}
                  onChange={(e) => setFormData({ ...formData, author_name: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">URL Slug</label>
                <Input
                  placeholder="url-friendly-slug"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">SEO Title</label>
                <Input
                  placeholder="Meta Title"
                  value={formData.seo_title}
                  onChange={(e) => setFormData({ ...formData, seo_title: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">SEO Description</label>
                <Textarea
                  placeholder="Meta Description for search engines..."
                  value={formData.seo_description}
                  onChange={(e) => setFormData({ ...formData, seo_description: e.target.value })}
                  className="h-24"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Tags</label>
                <Input
                  placeholder="Tags (comma separated)"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading} className="bg-blue-900">
              {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              Publish
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}