// src/components/Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <nav className="bg-[#0e0e0e] p-4 flex justify-between items-center">
      <Link to="GameCreditsByJacob.github.io/" className="text-white text-2xl font-bold">MyApp</Link>
      <div className="flex items-center space-x-4 flex-grow justify-center">
        <div className="relative text-gray-600 w-full max-w-md">
          <input
            type="search"
            name="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-gray-700 text-white h-10 w-full px-5 pr-10 rounded-full text-sm focus:outline-none"
          />
          <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
            <svg className="h-4 w-4 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M10 2a8 8 0 015.293 13.707l5.707 5.707-1.414 1.414-5.707-5.707A8 8 0 1110 2zm0 2a6 6 0 100 12A6 6 0 0010 4z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/login" className="text-white">Log In</Link>
        <Link to="/signup" className="bg-blue-500 text-white px-3 py-2 rounded">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
