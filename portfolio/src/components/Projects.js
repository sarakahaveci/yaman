// Projects.js
import React from "react";
import Project from "./Project";
import projectsData from "./projectsData";

const Projects = () => {
  return (
    <section id="projects" className="bg-indigo-900 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          <span className="border-b text-white border-yellow-300 mb-8 pb-5">
            Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
          {projectsData.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
