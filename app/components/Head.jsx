import React from "react";

const Head = () => {
  return (
    <header className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6">
      {/* Content */}
      <div className="max-w-3xl text-center">
        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 relative inline-block">
          Mahak Porwal 
          {/* Accent underline */}
          <span className="absolute left-0 bottom-0 w-full h-1 bg-blue-500 rounded"></span>
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-gray-400 mb-8">
          A passionate Frontend Developer building simple, elegant & responsive web apps.
        </p>

        {/* Button */}
      <a
  href="#projects"
  className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition"
>
  View Projects
</a>


        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-8 text-gray-400 text-lg">
          <a href="https://github.com/mahak24342" target="_blank" className="hover:text-white transition">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/mahak-porwal-43b3b420b/
" target="_blank" className="hover:text-white transition">
            LinkedIn
          </a>
          <a href="https://x.com/mahak_porwal6  " target="_blank" className="hover:text-white transition">
            Twitter
          </a>
        </div>
      </div>

     
    </header>
  );
};

export default Head;
