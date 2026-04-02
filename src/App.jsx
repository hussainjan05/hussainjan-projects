import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProjectGrid from './components/ProjectGrid';
import ProjectDetails from './components/ProjectDetails';
import HireMe from './components/HireMe';
import Footer from './components/Footer';
import CategoryView from './components/CategoryView';
import projectsData from './data/projects.json';

function App() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const hireMeRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    setProjects(projectsData);
    setFilteredProjects(projectsData);
  }, []);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.category === activeCategory));
    }
    // Scroll to top when category changes
    if (activeCategory !== 'all') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeCategory, projects]);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHireMe = () => {
    hireMeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const getCategoryTitle = () => {
    switch(activeCategory) {
      case 'fullstack': return 'Full Stack';
      case 'frontend': return 'Frontend';
      case 'small': return 'Small';
      default: return 'All';
    }
  };

  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white transition-colors duration-500">
      <Navbar 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
        scrollToHireMe={scrollToHireMe}
        scrollToProjects={scrollToProjects}
      />
    <br />
      
      <main>
        <AnimatePresence mode="wait">
          {activeCategory === 'all' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Hero 
                onExploreClick={scrollToProjects} 
              />

              <section ref={projectsRef} className="px-6 md:px-24 py-32 max-w-[1440px] mx-auto border-t border-gray-50">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12">
                  <div className="max-w-2xl">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-6 block">Case Studies</span>
                    <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
                      Featured <span className="italic font-light">Artifacts.</span>
                    </h2>
                  </div>
                  
                  {/* Category Filter - Minimal */}
                  <div className="flex flex-wrap gap-4 border-l border-gray-100 pl-8">
                    {['all', 'fullstack', 'frontend', 'small'].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                          activeCategory === cat
                            ? 'text-black'
                            : 'text-gray-300 hover:text-black'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
                
                <ProjectGrid 
                  projects={filteredProjects} 
                  onProjectClick={setSelectedProject} 
                />
              </section>
            </motion.div>
          ) : (
            <motion.div
              key="category"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <CategoryView 
                title={getCategoryTitle()}
                projects={filteredProjects}
                onProjectClick={setSelectedProject}
                setActiveCategory={setActiveCategory}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <HireMe innerRef={hireMeRef} />
      </main>

      <Footer />

      <ProjectDetails 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}

export default App;
