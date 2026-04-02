import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onClick(project)}
      className="group cursor-pointer relative"
    >
      <div className="relative overflow-hidden aspect-[4/5] bg-[#f8f9fa] mb-6">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
        
        {/* Category Badge - Minimal */}
        <div className="absolute top-8 left-8">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 bg-white text-black shadow-sm">
            {project.category}
          </span>
        </div>

        {/* Overlay Action */}
        <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex justify-between items-center bg-gradient-to-t from-black/80 to-transparent">
          <span className="text-white text-xs font-black uppercase tracking-widest">Study Case</span>
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>

      <div>
        <div className="flex gap-4 mb-4 opacity-50">
          {project.tech.slice(0, 2).map((tech, index) => (
            <span key={index} className="text-[9px] font-black uppercase tracking-widest">{tech}</span>
          ))}
        </div>
        <h3 className="text-3xl font-black text-[#1a1a1a] tracking-tighter group-hover:text-primary transition-colors">
          {project.title}
        </h3>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
