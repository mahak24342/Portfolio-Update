import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6 py-20"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Image (First on mobile, Left on desktop) */}
        <div className="order-1 md:order-1 w-64 h-64 md:w-80 md:h-80 relative rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="/me.jpg" // <-- replace with your image in /public
            alt="Your Name"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Text (Second on mobile, Right on desktop) */}
        <div className="order-2 md:order-2 flex-1 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Who am I? 👨‍💻
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            I’m <span className="text-blue-400 font-semibold">Your Name</span>, 
            a frontend developer who loves crafting{" "}
            <span className="text-blue-400 font-semibold">
              clean, fast, and modern
            </span>{" "}
            websites. My focus is building apps that don’t just work, but also{" "}
            <span className="italic text-gray-400">feel good to use</span>.
          </p>

          {/* Skills as badges */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
            <span className="px-4 py-2 bg-gray-700 rounded-full text-sm">React</span>
            <span className="px-4 py-2 bg-gray-700 rounded-full text-sm">Next.js</span>
            <span className="px-4 py-2 bg-gray-700 rounded-full text-sm">Tailwind CSS</span>
            <span className="px-4 py-2 bg-gray-700 rounded-full text-sm">JavaScript</span>
            <span className="px-4 py-2 bg-gray-700 rounded-full text-sm">TypeScript</span>
          </div>

          {/* Call to Action */}
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
