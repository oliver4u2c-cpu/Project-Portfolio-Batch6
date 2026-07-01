import { useState } from "react";
import { projectsData } from "../data/projectsData";
import ProjectCard from "../components/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = ["All", "Commercial", "Residential", "Cultural", "Interior"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  return (
    <main className="min-h-screen py-24 px-6 md:px-12 bg-bg-dark text-white max-w-7xl mx-auto">
      {/* Editorial Header */}
      <header className="mb-16">
        <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold block mb-3">
          Our Works
        </span>
        <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
          Architectural Portfolio
        </h1>
        <p className="text-muted max-w-2xl text-sm md:text-base leading-relaxed">
          Explore our select architectural undertakings. We shape contexts, rethink structural dynamics, and optimize space to deliver sustainable benchmarks globally.
        </p>
      </header>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-4 md:gap-8 border-b border-[#161a24] pb-6 mb-12 text-xs font-semibold tracking-[0.15em] uppercase">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`relative py-2 transition-colors duration-300 ${
              selectedCategory === category ? "text-accent font-bold" : "text-muted hover:text-white"
            }`}
          >
            {category}
            {selectedCategory === category && (
              <motion.span
                layoutId="activeFilter"
                className="absolute left-0 bottom-0 w-full h-[2px] bg-accent"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Grid of Projects */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20 text-muted">
          No projects found in this category.
        </div>
      )}
    </main>
  );
}
