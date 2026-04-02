import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ onExploreClick }) => {
  return (
    <section className="relative min-h-[95vh] flex items-center px-6 md:px-24 pt-20 overflow-hidden bg-white">
      {/* Structural Background Element */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-[#f8f9fa] hidden lg:block -skew-x-6 translate-x-20 z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-[1px] bg-black"></div>
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-gray-400">Software Architect</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl md:text-[120px] font-black text-[#1a1a1a] mb-10 tracking-tighter leading-[0.85] uppercase"
          >
            Crafting <br />
            <span className="text-primary">Digital</span> <br />
            <span className="italic font-light">Structure.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-400 max-w-md leading-relaxed mb-12 font-medium"
          >
            I'm <span className="text-black font-bold">Hussain Jan</span>. A Full Stack Developer focusing on architectural integrity and minimalist user interfaces.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-8"
          >
            <button 
              onClick={onExploreClick}
              className="bg-black text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest transition-all hover:bg-primary hover:shadow-2xl hover:shadow-primary/20"
            >
              The Work
            </button>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-square hidden lg:block"
        >
          <div className="absolute inset-0 border-[20px] border-[#f8f9fa] translate-x-10 translate-y-10 z-0"></div>
          <div className="relative z-10 w-full h-full bg-[#1a1a1a] p-16 flex flex-col justify-between overflow-hidden group">
            <div className="text-white">
              <span className="text-[120px] font-black leading-none text-white/5 absolute -top-10 -right-5">01</span>
              <h3 className="text-4xl font-black mb-4">Precision Engineering</h3>
              <p className="text-gray-400 max-w-xs text-sm">Building scalable backends and pixel-perfect frontends with a focus on code quality.</p>
            </div>
            <div className="flex justify-between items-end">
              <div className="space-y-1">
                <div className="w-12 h-1 bg-primary"></div>
                <div className="w-8 h-1 bg-white/20"></div>
                <div className="w-16 h-1 bg-white/10"></div>
              </div>
              <span className="text-xs font-black text-white/50 tracking-widest">EST. 2024</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Vertical Side Text */}
      <div className="absolute right-10 bottom-24 hidden xl:block vertical-text">
        <span className="text-[10px] font-black text-gray-300 uppercase tracking-[0.5em] rotate-180" style={{ writingMode: 'vertical-rl' }}>
          SCROLL TO EXPLORE WORK
        </span>
      </div>
    </section>
  );
};

export default Hero;
