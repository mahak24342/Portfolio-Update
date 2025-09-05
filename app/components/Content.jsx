import React from "react";
import { FaYoutube } from "react-icons/fa";

const Content = () => {
  return (
    <section
      id="content"
      className="w-full py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Content & Writing ✍️
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          I love sharing my knowledge through{" "}
          <span className="text-blue-400 font-semibold">technical blogs</span> and{" "}
          <span className="text-red-400 font-semibold">videos</span>.  
          Explore my work on Hashnode and YouTube.
        </p>

        {/* Links */}
        <div className="flex justify-center gap-6 flex-wrap">
          {/* Hashnode Button */}
          <a
            href="https://your-hashnode-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-5 py-2 rounded-full font-medium transition"
          >
          
            Hashnode
          </a>

          {/* YouTube Button */}
          <a
            href="https://youtube.com/your-channel"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-red-500 text-red-400 hover:bg-red-600 hover:text-white px-5 py-2 rounded-full font-medium transition"
          >
            <FaYoutube size={20} />
            YouTube
          </a>
        </div>
      </div>
    </section>
  );
};

export default Content;
