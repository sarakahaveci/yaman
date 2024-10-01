import React from "react";

const Project = ({ title, description, githubLink, demoLink, challenge, imageUrl }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover object-center"
      />
      <div className="p-4">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <span className="text-gray-700 mb-4">{description}</span>
        <br/><br/>
        <h5 className="text-gray-700 mb-4">{challenge}</h5>
        <div className="flex justify-between">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              GitHub
            </a>
          )}
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
