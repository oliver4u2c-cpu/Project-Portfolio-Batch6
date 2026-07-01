import { useParams, Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function ProjectDetail() {
  const { id } = useParams();
  const projectIndex = projectsData.findIndex((p) => p.id === id);
  const project = projectsData[projectIndex];

  // Auto scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white bg-bg-dark">
        <h2 className="font-serif text-3xl mb-4">Project Not Found</h2>
        <Link to="/projects" className="text-accent underline text-sm tracking-wider">
          BACK TO PORTFOLIO
        </Link>
      </div>
    );
  }

  // Get next project ID for navigation loop
  const nextProject = projectsData[(projectIndex + 1) % projectsData.length];

  return (
    <main className="min-h-screen bg-bg-dark text-white pb-24">
      {/* Cinematic Hero Cover */}
      <div className="relative w-full h-[65vh] md:h-[80vh] overflow-hidden">
        <img
          src={project.mainImage}
          alt={project.title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-black/30" />
        <div className="absolute bottom-10 left-6 md:left-12 max-w-4xl z-10">
          <span className="text-xs uppercase tracking-[0.35em] text-accent font-semibold block mb-3">
            {project.category}
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-white mb-2">
            {project.title}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16">
        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          
          {/* Metadata Specs Column */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1 space-y-6 border-l border-[#1e2330] pl-6 h-fit"
          >
            <div>
              <span className="text-xs uppercase tracking-widest text-muted block mb-1">Location</span>
              <span className="text-sm font-semibold tracking-wider">{project.location}</span>
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-muted block mb-1">Year</span>
              <span className="text-sm font-semibold tracking-wider">{project.year}</span>
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-muted block mb-1">Client</span>
              <span className="text-sm font-semibold tracking-wider">{project.client}</span>
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-muted block mb-1">Size</span>
              <span className="text-sm font-semibold tracking-wider">{project.size}</span>
            </div>
            
            {project.highlights && (
              <div className="pt-4 border-t border-[#1e2330]">
                <span className="text-xs uppercase tracking-widest text-muted block mb-3">Highlights</span>
                <ul className="text-xs space-y-2 text-accent-light font-medium tracking-wide">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>

          {/* Project Details Narrative Column */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2 space-y-8"
          >
            <h2 className="font-serif text-2xl md:text-3xl text-accent-light">
              Design Narrative
            </h2>
            <p className="text-muted leading-relaxed text-sm md:text-base whitespace-pre-line">
              {project.description}
            </p>
          </motion.div>
        </div>

        {/* Project Photo Gallery */}
        {project.galleryImages && (
          <div className="mt-24">
            <h3 className="font-serif text-2xl mb-8 border-b border-[#1e2330] pb-4">
              Project Gallery
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="overflow-hidden aspect-[3/2] border border-[#1e2330]"
                >
                  <img
                    src={image}
                    alt={`${project.title} detail ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Footer Next Project Link */}
        <div className="mt-24 border-t border-[#1e2330] pt-12 flex justify-between items-center">
          <Link to="/projects" className="text-xs text-muted hover:text-white uppercase tracking-widest font-semibold">
            ← Back to Portfolio
          </Link>
          <Link
            to={`/projects/${nextProject.id}`}
            className="group flex flex-col items-end gap-1 text-right"
          >
            <span className="text-[10px] text-accent tracking-[0.3em] uppercase">Next Project</span>
            <span className="font-serif text-lg md:text-xl text-white group-hover:text-accent-light transition-colors duration-300">
              {nextProject.title} →
            </span>
          </Link>
        </div>

      </div>
    </main>
  );
}
