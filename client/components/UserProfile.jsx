import React from 'react';
import { useAuth } from '../Context/AuthContext';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  const { user, isAuthenticated, loading, logout } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-20">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-10">
      <div className="p-8">
        <div className="flex items-center space-x-4 mb-6">
          <div className="flex-shrink-0">
            <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl font-bold">
              {user?.username?.charAt(0).toUpperCase() || 'G'}
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">
              {user?.username || 'Guest User'}
            </h1>
            {isAuthenticated && (
              <p className="text-gray-500 text-sm">
                {user?.role} • ID: {user?.id}
              </p>
            )}
          </div>
        </div>

        {isAuthenticated ? (
          <div className="space-y-4">
            <div className="border-t border-gray-200 pt-4">
              <h2 className="text-lg font-medium text-gray-900 mb-2">Account Details</h2>
              <div className="space-y-2">
                <p className="text-gray-600"><span className="font-medium">Email:</span> {user?.email || 'Not provided'}</p>
                <p className="text-gray-600"><span className="font-medium">Phone:</span> {user?.phone || 'Not provided'}</p>
              </div>
            </div>

            <div className="flex space-x-4 pt-4">
              <button
                onClick={logout}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-6">
            <p className="text-gray-600 mb-4">You're currently browsing as a guest</p>
            <div className="space-x-4">
              <Link 
                to="/login" 
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;