import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white shadow-md mt-8">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-gray-500">
              &copy; {currentYear} Your Company Name. All rights reserved.
            </p>
          </div>
          <nav className="flex space-x-4">
            <Link to="/admin/help" className="text-sm text-gray-500 hover:text-gray-700">
              Help
            </Link>
            <Link to="/admin/privacy" className="text-sm text-gray-500 hover:text-gray-700">
              Privacy
            </Link>
            <Link to="/admin/terms" className="text-sm text-gray-500 hover:text-gray-700">
              Terms
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}