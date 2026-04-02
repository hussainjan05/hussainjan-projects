import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ activeCategory, setActiveCategory, scrollToHireMe, scrollToProjects }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { id: 'all', label: 'Overview', action: () => { setActiveCategory('all'); setIsOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); } },
    { id: 'fullstack', label: 'Full Stack', action: () => { setActiveCategory('fullstack'); setIsOpen(false); } },
    { id: 'frontend', label: 'Frontend', action: () => { setActiveCategory('frontend'); setIsOpen(false); } },
    { id: 'small', label: 'Small Projects', action: () => { setActiveCategory('small'); setIsOpen(false); } },
    { id: 'connect', label: 'Connect', action: () => { scrollToHireMe(); setIsOpen(false); } },
  ];

  const menuVariants = {
    closed: { opacity: 0, x: '100%' },
    open: { opacity: 1, x: 0 }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-8 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 border-b border-gray-100 shadow-sm' : ''}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => setActiveCategory('all')}
          className="mr-12 cursor-pointer flex items-center group relative"
        >
          <img src="/projects/logo.png" alt="HJ Hussain" className="h-14 w-auto filter grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105" />
          <div className="absolute -bottom-2 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500"></div>
        </div>

        {/* Desktop Menu Items */}
        <div className="hidden lg:flex items-center gap-12">
          {categories.filter(cat => cat.id !== 'connect').map((cat) => (
            <button
              key={cat.id}
              onClick={cat.action}
              className={`relative py-2 text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-300 ${activeCategory === cat.id
                  ? 'text-black'
                  : 'text-gray-400 hover:text-black'
                }`}
            >
              {cat.label}
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-primary"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Desktop Action Button */}
        <button
          onClick={scrollToHireMe}
          className="hidden lg:block group relative px-8 py-3 bg-black text-white rounded-full overflow-hidden transition-all duration-300 hover:px-10"
        >
          <span className="relative z-10 text-xs font-black uppercase tracking-widest">Connect</span>
          <div className="absolute inset-0 bg-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
        </button>

        {/* Mobile menu trigger */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden w-8 h-8 flex flex-col justify-center items-end gap-1.5 z-50 mr-[-10px]"
        >
          <motion.div 
            animate={isOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
            className={`w-8 h-[3px] transition-colors rounded-full ${isOpen ? 'bg-black' : 'bg-black'}`}
          />
          <motion.div 
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-5 h-[3px] bg-black rounded-full"
          />
          <motion.div 
            animate={isOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
            className={`w-8 h-[3px] transition-colors rounded-full ${isOpen ? 'bg-black' : 'bg-black'}`}
          />
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-0 bg-white flex flex-col justify-center items-center gap-8 z-40"
            >
              <div className="flex flex-col items-center gap-12">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={cat.action}
                    className={`text-3xl font-black uppercase tracking-[0.3em] transition-all hover:text-primary ${
                      activeCategory === cat.id ? 'text-primary' : 'text-black'
                    } ${cat.id === 'connect' ? 'bg-black text-white px-12 py-5 rounded-full mt-6 hover:bg-primary' : ''}`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
