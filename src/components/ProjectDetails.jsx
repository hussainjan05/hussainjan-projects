import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectDetails = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-white pt-20 overflow-y-auto"
      >
        {/* Navigation Sidebar-like Back Button */}
        <div className="fixed top-0 left-0 right-0 h-20 bg-white/80 backdrop-blur-md z-50 flex items-center justify-between px-6 md:px-12 border-b border-gray-50">
          <button 
            onClick={onClose}
            className="group flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em]"
          >
            <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Go Back
          </button>
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-300">Detailed Case Study</span>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-40 grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-primary mb-10 block">{project.category}</span>
              <h2 className="text-6xl md:text-9xl font-black text-[#1a1a1a] mb-12 tracking-tighter leading-[0.85] uppercase">
                {project.title}
              </h2>
              
              <div className="grid grid-cols-2 gap-12 mb-20">
                <div>
                  <h4 className="text-[10px] font-black uppercase text-gray-300 tracking-widest mb-4">Tech Stack</h4>
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs font-black uppercase tracking-widest">{t}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase text-gray-300 tracking-widest mb-4">Live Project</h4>
                  <a href={project.liveUrl} target="_blank" className="text-xs font-black uppercase tracking-widest hover:text-primary transition-colors underline decoration-2 underline-offset-8">Visit Site</a>
                </div>
              </div>

              <div>
                <h4 className="text-[10px] font-black uppercase text-gray-300 tracking-widest mb-8">The Solution</h4>
                <p className="text-xl md:text-2xl text-[#1a1a1a] leading-relaxed font-medium">
                  {project.longDescription}
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-12"
          >
            <div className="aspect-video bg-[#f8f9fa] overflow-hidden group">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale transition-all duration-[2s] group-hover:grayscale-0 group-hover:scale-105" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <a 
                href={project.liveUrl} 
                className="p-10 bg-black text-white text-center font-black uppercase tracking-widest transition-all hover:bg-primary"
              >
                Launch Demo
              </a>
              <a 
                href={project.githubUrl} 
                className="p-10 bg-white border border-gray-100 text-black text-center font-black uppercase tracking-widest transition-all hover:border-black"
              >
                View Source
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectDetails;
