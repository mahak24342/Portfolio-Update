"use client";
import React from "react";

const Nav = () => {
  return (
    <nav className="fixed top-0 w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-4 px-6 shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Left: Name */}
        <h1 className="text-xl md:text-2xl font-bold tracking-wide">
          Mahak
        </h1>

        {/* Right: Links (hidden on small screens) */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
