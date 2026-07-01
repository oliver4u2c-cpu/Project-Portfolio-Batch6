import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
      className="group relative overflow-hidden bg-bg-card border border-[#1e2330] rounded-sm aspect-[4/3] w-full"
    >
      <Link to={`/projects/${project.id}`} className="block w-full h-full">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={project.mainImage}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10]/95 via-[#0b0c10]/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
        </div>

        {/* Content Container */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
          <span className="text-xs uppercase tracking-[0.2em] text-accent mb-2">
            {project.category}
          </span>
          <h3 className="font-serif text-xl md:text-2xl text-white group-hover:text-accent-light transition-colors duration-300">
            {project.title}
          </h3>
          
          <div className="h-0 opacity-0 overflow-hidden group-hover:h-8 group-hover:opacity-100 transition-all duration-500 ease-out flex items-center justify-between mt-3 border-t border-[#c5a880]/30 pt-2">
            <span className="text-xs text-muted tracking-wider">
              {project.location}
            </span>
            <span className="text-xs text-accent font-semibold tracking-widest flex items-center gap-1">
              VIEW PROJECT <span className="text-[10px]">→</span>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
