import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const loading = useSelector((state) => state.auth.loading);
  console.log('ProtectedRoute - isLoggedIn:', isLoggedIn);

  if (loading) {
    return <div>Loading...</div>; // Show loading while auth check completes
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
