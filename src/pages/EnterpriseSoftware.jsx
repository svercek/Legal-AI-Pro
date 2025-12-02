import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '../utils';

export default function EnterpriseSoftware() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(createPageUrl('SoftwareDevelopment'));
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <p className="text-gray-500">Redirecting...</p>
    </div>
  );
}