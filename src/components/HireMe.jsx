import React from 'react';
import { motion } from 'framer-motion';

const HireMe = ({ innerRef }) => {
  return (
    <section ref={innerRef} className="px-6 py-40 bg-[#f8f9fa] border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-20">
        <div className="max-w-xl">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8 block">Global Availability</span>
          <h2 className="text-6xl md:text-[100px] font-black text-[#1a1a1a] mb-12 tracking-tighter leading-[0.85] uppercase">
            Let's <br />
            Architect <br />
            The <span className="italic font-light">Future.</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-sm font-medium leading-relaxed mb-12">
            Currently accepting new project inquiries for 2024. Focused on building high-performance systems for agencies and startups.
          </p>
          <div className="flex items-center gap-10">
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase text-gray-300 tracking-widest mb-1">Email</span>
              <a href="mailto:hussainjanafridi5@gmail.com" className="text-lg font-black hover:text-primary transition-colors uppercase tracking-widest leading-none">hussainjanafridi5@gmail.com</a>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <a
            href="https://wa.me/923028063569"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full p-12 bg-black text-white hover:bg-primary transition-all duration-700 flex justify-between items-center"
          >
            <span className="text-4xl font-black uppercase tracking-tighter">Connect via WhatsApp</span>
            <svg className="w-12 h-12 transition-transform group-hover:translate-x-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <div
            onClick={() => window.open('')}
            className="cursor-pointer group w-full p-12 bg-white border border-gray-100 text-black hover:border-black transition-all duration-700 flex justify-between items-center"
          >
            <span className="text-4xl font-black uppercase tracking-tighter">Connect via Linkedln</span>
            <svg className="w-12 h-12 transition-transform group-hover:translate-x-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
