import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectGrid = ({ projects, onProjectClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
      {projects.length > 0 ? (
        projects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onClick={onProjectClick} 
          />
        ))
      ) : (
        <div className="col-span-full py-20 text-center">
          <p className="text-gray-400 text-lg">No projects found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default ProjectGrid;
