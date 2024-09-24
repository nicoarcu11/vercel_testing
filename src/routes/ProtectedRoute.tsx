import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRouteProps {
  children?: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const authToken = localStorage.getItem('authToken');

  if (!authToken) {
    return <Navigate to="/login" />;
  }

  return children ? <>{children}</> : <Outlet />;
};

export default ProtectedRoute;
