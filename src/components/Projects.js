import React from 'react';
import './Projects.css';

const projects = [
  {
    name: 'Project 1',
    description: 'Github Link/Description',
  },
  {
    name: 'Project 2',
    description: 'Github Link/Description',
  },
  {
    name: 'Project 3',
    description: 'Github Link/Description',
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>HopeKCC Projects</h2>
      <ul className="projects-list">
        {projects.map((project, index) => (
          <li key={index} className="project-item">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
