import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/home/Footer';
import ContactRequestList from '../components/admin/ContactRequestList';
import { LayoutDashboard, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AdminContactRequests() {
  const queryClient = useQueryClient();

  const { data: requests = [], isLoading, refetch } = useQuery({
    queryKey: ['contact-requests'],
    queryFn: () => base44.entities.ContactRequest.list('-created_date'),
  });

  const updateStatusMutation = useMutation({
    mutationFn: ({ id, status }) => base44.entities.ContactRequest.update(id, { status }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contact-requests'] });
    },
  });

  const handleStatusChange = (id, status) => {
    updateStatusMutation.mutate({ id, status });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <LayoutDashboard className="w-8 h-8 text-blue-600" />
                Contact Submissions
              </h1>
              <p className="text-gray-500 mt-2">Manage inquiries from the contact form</p>
            </div>
            <Button 
              variant="outline" 
              onClick={() => refetch()} 
              className="flex items-center gap-2"
              disabled={isLoading}
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
              Refresh Data
            </Button>
          </div>
          
          {isLoading ? (
            <div className="bg-white p-12 rounded-xl border border-gray-200 shadow-sm flex justify-center items-center">
              <div className="animate-pulse text-gray-400">Loading submissions...</div>
            </div>
          ) : (
            <ContactRequestList requests={requests} onStatusChange={handleStatusChange} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}