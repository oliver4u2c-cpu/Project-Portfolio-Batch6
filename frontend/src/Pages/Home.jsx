import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "../data/projectsData";
import ProjectCard from "../components/ProjectCard";

const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600",
    title: "Sculpting Light & Space",
    subtitle: "Modular Sustainable Habitats"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    title: "Elevating Urban Densities",
    subtitle: "Biophilic Tall Commercial Architecture"
  },
  {
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600",
    title: "Minimalist sanctuaries",
    subtitle: "Fusing Heritage With Spatial Modernity"
  }
];

export default function Homepage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto rotate hero slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const featuredProjects = projectsData.slice(0, 3); // Display top 3 projects

  return (
    <div className="bg-bg-dark text-white min-h-screen">
      {/* 1. Cinematic Hero Section */}
      <section className="relative w-full h-[85vh] overflow-hidden flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={HERO_SLIDES[currentSlide].image}
              alt={HERO_SLIDES[currentSlide].title}
              className="w-full h-full object-cover object-center"
            />
            {/* Dark gradient mask */}
            <div className="absolute inset-0 bg-black/45 bg-gradient-to-t from-bg-dark via-transparent to-black/30" />
          </motion.div>
        </AnimatePresence>

        {/* Hero Text */}
        <div className="relative z-10 text-center max-w-4xl px-6">
          <motion.span
            key={`sub-${currentSlide}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-accent text-xs font-semibold tracking-[0.4em] uppercase block mb-4"
          >
            {HERO_SLIDES[currentSlide].subtitle}
          </motion.span>
          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-4xl md:text-7xl font-bold tracking-tight text-white mb-8"
          >
            {HERO_SLIDES[currentSlide].title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/projects"
              className="bg-transparent hover:bg-white border border-white hover:border-white text-white hover:text-bg-dark text-xs tracking-[0.25em] font-semibold py-4 px-8 uppercase transition-all duration-300 rounded-sm"
            >
              EXPLORE WORKS
            </Link>
          </motion.div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 flex gap-3 z-10">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-12 h-[2px] transition-all duration-300 ${
                currentSlide === i ? "bg-accent" : "bg-white/30"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. Studio Philosophy Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold block mb-2">
              OUR STATEMENT
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white tracking-tight">
              AURA Spatial Design
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-6 text-muted leading-relaxed text-sm md:text-base">
            <p>
              We believe architecture holds the unique power to transform not just physical skylines, but the emotional landscapes of the communities inhabiting them. Our practice operates at the intersection of Scandinavian minimalism, zero-carbon construction engineering, and cultural context.
            </p>
            <p>
              From custom high-performance corporate towers to geometric cultural galleries, we approach every blueprint with a clean slate, prioritizing natural illumination, sensory materiality, and modular structural layouts.
            </p>
            <div className="pt-4">
              <Link to="/about" className="text-accent hover:text-accent-light text-xs font-semibold tracking-widest flex items-center gap-2 uppercase">
                LEARN MORE ABOUT OUR STUDIO <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Projects (Asymmetric Grid) */}
      <section className="py-20 bg-[#08090d] border-y border-[#161a24] px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold block mb-2">
                SELECTED PORTFOLIO
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-white tracking-tight">
                Featured Works
              </h2>
            </div>
            <Link to="/projects" className="text-xs text-accent hover:text-accent-light uppercase tracking-widest font-semibold border-b border-accent pb-1">
              View All Works
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Studio Statistics */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 text-center">
          <div>
            <span className="font-serif text-4xl md:text-6xl font-bold text-accent block mb-2">
              15+
            </span>
            <span className="text-xs text-muted font-semibold tracking-widest uppercase">
              YEARS EXPERIENCING
            </span>
          </div>
          <div>
            <span className="font-serif text-4xl md:text-6xl font-bold text-accent block mb-2">
              80+
            </span>
            <span className="text-xs text-muted font-semibold tracking-widest uppercase">
              COMPLETED BUILDS
            </span>
          </div>
          <div>
            <span className="font-serif text-4xl md:text-6xl font-bold text-accent block mb-2">
              18
            </span>
            <span className="text-xs text-muted font-semibold tracking-widest uppercase">
              DESIGN AWARDS
            </span>
          </div>
          <div>
            <span className="font-serif text-4xl md:text-6xl font-bold text-accent block mb-2">
              100%
            </span>
            <span className="text-xs text-muted font-semibold tracking-widest uppercase">
              CLIMATE COMMITTED
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}