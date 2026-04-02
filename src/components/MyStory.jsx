import React from 'react';
import { motion } from 'framer-motion';

const MyStory = ({ innerRef }) => {
  return (
    <section ref={innerRef} className="px-6 md:px-24 py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="relative order-2 lg:order-1">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="aspect-[3/4] bg-[#f8f9fa] relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-black/5 z-10 group-hover:bg-black/0 transition-colors duration-700"></div>
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072" 
              alt="Developer Workspace" 
              className="w-full h-full object-cover grayscale brightness-110"
            />
            {/* Architectural overlay */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 border-[20px] border-white z-20"></div>
          </motion.div>
          <div className="absolute -top-10 -left-10 text-[180px] font-black text-gray-50 z-0 select-none">
            HJ
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8 block">The Narrative</span>
            <h2 className="text-6xl md:text-8xl font-black text-[#1a1a1a] mb-12 tracking-tighter leading-[0.9] uppercase">
              Driven by <br />
              <span className="italic font-light">Structure.</span>
            </h2>
            
            <div className="space-y-8 text-gray-500 font-medium leading-relaxed">
              <p className="text-lg">
                My journey began with a fascination for how complex systems breathe. As a <span className="text-black font-bold">Full Stack Developer</span>, I don't just write code—I architect digital environments where every line serves a structural purpose.
              </p>
              <p>
                I believe that modern software has lost its sense of craft. My mission is to bring back the "Human Element"—building interfaces that feel intentional, sturdy, and mathematically precise, yet emotionally resonant.
              </p>
              
              <div className="pt-10 grid grid-cols-2 gap-12 border-t border-gray-100">
                <div>
                  <h4 className="text-[10px] font-black uppercase text-black tracking-widest mb-3">Philosophy</h4>
                  <p className="text-sm">Minimalism is not the absence of things, but the perfect density of essential elements.</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase text-black tracking-widest mb-3">Techne</h4>
                  <p className="text-sm">Mastering the stack from low-level logic to high-level aesthetic interactions.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MyStory;
