import React from "react";

const Projects = () => {
 const projects = [
  {
    title: "Habit Tracker",
    description:
      "A productivity app to track and manage daily habits with a clean UI and local storage support.",
    tech: ["React", "Context API", "LocalStorage"],
    link: "https://github.com/mahak24342/HabitTracker",
  },
  {
    title: "Stream AI",
    description:
      "An AI-powered platform integrating modern UI with backend services for streaming and AI features.",
    tech: ["React", "Node.js", "MongoDB","OpenAI"],
    link: "https://github.com/mahak24342/StreamAi",
  },
  {
    title: "QuizzY",
    description:
      "An interactive quiz application with dynamic questions, scoring system, and responsive design.",
    tech: ["React", "Firebase", "Tailwind CSS","OpenAI"],
    link: "https://github.com/mahak24342/QuizzY",
  },
];


  return (
    <section
      id="projects"
      className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6 py-20"
    >
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Projects</h2>
        <p className="text-gray-400 text-lg">
  A showcase of projects that highlight my passion for building{" "}
  <span className="text-blue-400">modern, functional, and user-friendly</span> experiences.
</p>

      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-lg border border-gray-700 hover:border-blue-500 hover:shadow-blue-500/20 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-white mb-3">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              {project.description}
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-700/70 text-gray-300 text-xs rounded-full border border-gray-600"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA */}
            <a
              href={project.link}
              className="inline-block px-5 py-2 bg-blue-500 text-white text-sm font-medium rounded-full hover:bg-blue-600 transition"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
