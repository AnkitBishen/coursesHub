import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Menu, X, User } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  // This would typically come from your authentication context or state management
  const isLoggedIn = true; // For demonstration purposes
  const user = { name: 'John Doe', email: 'john@example.com' }; // Mock user data

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">CourseHub</span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <nav className="flex space-x-4">
              <Link to="/courses" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Courses
              </Link>
              <Link to="/about" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link to="/contact" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
            </nav>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {isLoggedIn ? (
              <div className="ml-3 relative">
                <div>
                  <button
                    onClick={toggleUserMenu}
                    className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <span className="sr-only">Open user menu</span>
                    <User className="h-8 w-8 rounded-full" />
                  </button>
                </div>
                {isUserMenuOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Your Profile
                    </Link>
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/signin" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Sign In
              </Link>
            )}
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/courses" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Courses
            </Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              About
            </Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Contact
            </Link>
          </div>
          {isLoggedIn ? (
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <User className="h-10 w-10 rounded-full" />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">{user.name}</div>
                  <div className="text-sm font-medium text-gray-500">{user.email}</div>
                </div>
              </div>
              <div className="mt-3 space-y-1">
                <Link to="/profile" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
                  Your Profile
                </Link>
                <button className="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
                  Sign out
                </button>
              </div>
            </div>
          ) : (
            <div className="pt-4 pb-3 border-t border-gray-200">
              <Link to="/signin" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
                Sign In
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
}