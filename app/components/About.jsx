import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6 py-16 md:py-24"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        
        {/* Image (Top on mobile, Left on desktop) */}
        <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 relative rounded-3xl overflow-hidden shadow-lg flex-shrink-0">
          <Image
            src="/1.jfif" // <-- replace with your image in /public
            alt="Mahak"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
            Who am I? 👨‍💻
          </h2>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
            I’m <span className="text-blue-400 font-semibold">Mahak</span>, 
            a fullstack developer who enjoys building{" "}
            <span className="text-blue-400 font-semibold">scalable, fast, and modern</span>{" "}
            web apps. I focus on creating solutions that not only work well but also{" "}
            <span className="italic text-gray-400">feel great to use</span>.
          </p>

          {/* Skills Section */}
          <div className="w-full flex flex-wrap justify-center md:justify-start gap-3 mb-8">
            {[
              "React",
              "Next.js",
              "Tailwind CSS",
              "JavaScript",
              "TypeScript",
              "Node.js",
              "Express.js",
              "MongoDB",
              "PostgreSQL",
              "REST APIs",
              "Git & GitHub",
              "Docker",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gray-700 rounded-full text-sm sm:text-base text-gray-200 hover:bg-gray-600 transition"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Call to Action */}
          <a
            href="mailto:porwalmahak784@gmail.com"
            className="inline-block px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
