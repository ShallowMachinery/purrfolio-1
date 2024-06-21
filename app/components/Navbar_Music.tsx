import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen((prev) => !prev);
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };

  return (
    <nav className="w-full py-4 px-6 flex items-center justify-between sticky top-0 z-50" style={{ background: 'linear-gradient(rgba(31, 41, 55, 1), rgba(17, 24, 39, 1))' }}>
      <div>
        <img src="/logo.png" alt="Logo" className="h-8" />
      </div>
      <div className="hidden sm:flex items-center space-x-6">
        <a href="/" className={`text-gray-300 transition-colors duration-300 hover:text-blue-500`}>Home</a>
        <a href="/music" className={`text-gray-300 transition-colors duration-300 hover:text-blue-500`}>My Music</a>
      </div>
      <div className="flex sm:hidden">
        <button className="text-gray-300" onClick={toggleNavbar}>{isNavbarOpen ? '' : 'Menu'}</button>
      </div>
      {isNavbarOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-100 flex justify-center items-center transition-opacity duration-300">
          <div className="flex flex-col items-center space-y-4 transition-opacity duration-300">
            <button className="absolute top-8 left-8 text-gray-300 mt-0 ml-0" onClick={closeNavbar}>✖</button>
            <a href="/" className={`text-gray-300 transition-colors duration-300 hover:text-blue-500`}>Home</a>
            <a href="/music" className={`text-gray-300 transition-colors duration-300 font-bold hover:text-blue-500`}>My Music</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
