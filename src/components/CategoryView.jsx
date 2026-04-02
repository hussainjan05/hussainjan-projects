import React from 'react';
import { motion } from 'framer-motion';
import ProjectGrid from './ProjectGrid';

const CategoryView = ({ title, projects, onProjectClick, setActiveCategory }) => {
  return (
    <div className="min-h-screen pt-48 pb-32 px-6 md:px-24 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col mb-32 border-b border-gray-100 pb-20"
        >
          <button 
            onClick={() => setActiveCategory('all')}
            className="group flex items-center gap-4 text-xs font-black uppercase tracking-[0.4em] mb-12 hover:text-primary transition-colors pr-10"
          >
            <svg className="w-5 h-5 transition-transform group-hover:-translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Overview
          </button>
          
          <h1 className="text-6xl md:text-[140px] font-black text-[#1a1a1a] tracking-tighter leading-[0.8] uppercase flex flex-col">
            <span className="text-gray-200">{title}</span>
            <span className="italic font-light">Solutions.</span>
          </h1>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="w-16 h-[1px] bg-black"></div>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-gray-400">Total Entries: {projects.length}</span>
          </div>
        </motion.div>
        
        <ProjectGrid 
          projects={projects} 
          onProjectClick={onProjectClick} 
        />
      </div>
    </div>
  );
};

export default CategoryView;
