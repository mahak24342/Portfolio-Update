import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-16 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Let’s Connect 🤝
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          I’m always open to new opportunities, collaborations, or just a friendly chat.  
          Reach out through any of the platforms below!
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 flex-wrap">
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white px-5 py-2 rounded-full font-medium transition"
          >
            <FaLinkedin size={20} />
            LinkedIn
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-gray-500 text-gray-300 hover:bg-gray-700 hover:text-white px-5 py-2 rounded-full font-medium transition"
          >
            <FaGithub size={20} />
            GitHub
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/your-handle"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-sky-500 text-sky-400 hover:bg-sky-600 hover:text-white px-5 py-2 rounded-full font-medium transition"
          >
            <FaTwitter size={20} />
            Twitter
          </a>

          {/* Email */}
          <a
            href="mailto:your-email@example.com"
            className="flex items-center gap-2 border border-pink-500 text-pink-400 hover:bg-pink-600 hover:text-white px-5 py-2 rounded-full font-medium transition"
          >
            <HiMail size={20} />
            Email
          </a>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center text-gray-500 text-sm mt-12">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </section>
  );
};

export default Contact;
