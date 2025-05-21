
import React from 'react';
import { Link } from 'react-router-dom';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  authType: 'login' | 'register';
}

const AuthLayout = ({ children, title, subtitle, authType }: AuthLayoutProps) => {
  return (
    <div className="login-container">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-md p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-healthcare-blue-light rounded-bl-full opacity-70" />
          
          <div className="mb-6 relative z-10">
            <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
            {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
          </div>
          
          {children}
          
          <div className="mt-6 text-center border-t border-gray-100 pt-4">
            {authType === 'login' ? (
              <p className="text-sm text-gray-600">
                Are you a healthcare provider? <Link to="/register" className="text-healthcare-blue font-medium hover:underline">Apply here</Link>
              </p>
            ) : (
              <p className="text-sm text-gray-600">
                Already have an account? <Link to="/login" className="text-healthcare-blue font-medium hover:underline">Sign in</Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
