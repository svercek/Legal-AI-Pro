import React from 'react';
import { format } from 'date-fns';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Building } from 'lucide-react';

export default function ContactRequestList({ requests, onStatusChange }) {
  const statusColors = {
    new: "bg-blue-100 text-blue-800 hover:bg-blue-200",
    contacted: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
    closed: "bg-gray-100 text-gray-800 hover:bg-gray-200"
  };

  if (!requests.length) {
    return <div className="text-center py-12 text-gray-500 bg-white rounded-xl border border-gray-100">No contact requests found.</div>;
  }

  return (
    <div className="overflow-x-auto bg-white rounded-xl border border-gray-200 shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="py-4 px-6 font-semibold text-sm text-gray-700">Date</th>
            <th className="py-4 px-6 font-semibold text-sm text-gray-700">Name</th>
            <th className="py-4 px-6 font-semibold text-sm text-gray-700">Contact Info</th>
            <th className="py-4 px-6 font-semibold text-sm text-gray-700">Firm</th>
            <th className="py-4 px-6 font-semibold text-sm text-gray-700">Message</th>
            <th className="py-4 px-6 font-semibold text-sm text-gray-700">Status</th>
            <th className="py-4 px-6 font-semibold text-sm text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {requests.map((request) => (
            <tr key={request.id} className="hover:bg-gray-50 transition-colors">
              <td className="py-4 px-6 text-sm text-gray-600 whitespace-nowrap">
                {format(new Date(request.created_date || Date.now()), 'MMM d, yyyy')}
                <div className="text-xs text-gray-400">{format(new Date(request.created_date || Date.now()), 'h:mm a')}</div>
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900">{request.name}</td>
              <td className="py-4 px-6 text-sm">
                <div className="flex flex-col gap-1.5">
                  <a href={`mailto:${request.email}`} className="flex items-center gap-2 text-blue-600 hover:underline">
                    <Mail className="w-3.5 h-3.5" /> {request.email}
                  </a>
                  {request.phone && (
                    <div className="flex items-center gap-2 text-gray-500">
                      <Phone className="w-3.5 h-3.5" /> {request.phone}
                    </div>
                  )}
                </div>
              </td>
              <td className="py-4 px-6 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-gray-400" />
                  {request.firm}
                </div>
              </td>
              <td className="py-4 px-6 text-sm text-gray-600 max-w-xs">
                <div className="truncate" title={request.message}>
                  {request.message}
                </div>
              </td>
              <td className="py-4 px-6 text-sm">
                <Badge className={`${statusColors[request.status] || "bg-gray-100"} uppercase text-[10px] tracking-wider`}>
                  {request.status}
                </Badge>
              </td>
              <td className="py-4 px-6 text-sm">
                <div className="flex flex-col gap-2">
                  {request.status === 'new' && (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="h-7 text-xs w-full justify-center"
                      onClick={() => onStatusChange(request.id, 'contacted')}
                    >
                      Mark Contacted
                    </Button>
                  )}
                  {request.status !== 'closed' && (
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="h-7 text-xs w-full justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                      onClick={() => onStatusChange(request.id, 'closed')}
                    >
                      Archive
                    </Button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}