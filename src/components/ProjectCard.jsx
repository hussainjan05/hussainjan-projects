import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const ProjectCard = ({ project, onClick }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(project)}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group cursor-pointer relative"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="relative overflow-hidden aspect-[4/5] bg-[#f8f9fa] mb-6 shadow-2xl transition-shadow duration-500 group-hover:shadow-black/5"
      >
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 grayscale-0 group-hover:contrast-125"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500"></div>
        
        {/* Category Badge - Minimal */}
        <div className="absolute top-8 left-8" style={{ transform: "translateZ(75px)" }}>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 bg-white text-black shadow-sm">
            {project.category}
          </span>
        </div>

        {/* Overlay Action - Glassmorphism */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-black/10 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]"></div>
          <div className="relative z-10 flex justify-between items-center transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100">
            <span className="text-white text-xs font-black uppercase tracking-widest">Study Case</span>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-500">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div style={{ transform: "translateZ(30px)" }}>
        <div className="flex gap-4 mb-4">
          {project.tech.slice(0, 3).map((tech, index) => (
            <motion.span 
              key={index} 
              initial={{ opacity: 0.3, y: 0 }}
              whileHover={{ opacity: 1, y: -2 }}
              className="text-[9px] font-black uppercase tracking-widest text-primary/60 group-hover:text-primary transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </div>
        <h3 className="text-3xl md:text-4xl font-black text-[#1a1a1a] tracking-tighter transition-all duration-500 group-hover:pl-4">
          {project.title}
        </h3>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
