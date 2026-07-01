const LEADERS = [
  {
    name: "Elena Rostova",
    role: "Founding Partner & Principal",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Marcus Vane",
    role: "Director of Sustainable Engineering",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Akiro Tanaka",
    role: "Lead Spatial Architect",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400"
  }
];

export default function Aboutpage() {
  return (
    <main className="min-h-screen bg-bg-dark text-white py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Editorial Header */}
      <header className="mb-20">
        <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold block mb-3">
          WHO WE ARE
        </span>
        <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Designing Spaces for Humanity
        </h1>
        <p className="text-muted max-w-3xl text-sm md:text-base leading-relaxed">
          Founded in 2010, AURA is an international design collective of architects, engineers, and researchers. We collaborate across boundaries to shape spaces that reflect cultural value, foster human connection, and challenge structural boundaries.
        </p>
      </header>

      {/* Quote Banner */}
      <section className="border-y border-[#161a24] py-16 my-16 text-center">
        <p className="font-serif text-xl md:text-3xl italic text-accent-light max-w-4xl mx-auto leading-relaxed">
          "Architecture is not just about building walls; it is the art of curating void, shadow, and human transition."
        </p>
        <span className="text-xs tracking-widest text-muted block mt-4 uppercase">— ELENA ROSTOVA</span>
      </section>

      {/* Core Design Pillars */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-24">
        <div>
          <span className="font-serif text-2xl text-accent block mb-4">01 / Circular Materiality</span>
          <p className="text-muted text-sm leading-relaxed">
            We prioritize raw materials that can be disassembled and composted or reused at the end of a building's lifecycle. We focus heavily on cross-laminated timber, local aggregate stone, and bio-based composites.
          </p>
        </div>
        <div>
          <span className="font-serif text-2xl text-accent block mb-4">02 / Passive Illumination</span>
          <p className="text-muted text-sm leading-relaxed">
            By analyzing local microclimatic sun paths, we layout rooms to capture optimal winter warmth while shielding interiors from intense summer glare, minimizing relying on active heating and cooling.
          </p>
        </div>
        <div>
          <span className="font-serif text-2xl text-accent block mb-4">03 / Conversational Context</span>
          <p className="text-muted text-sm leading-relaxed">
            A building must speak to its neighbors. Our designs draw inspiration from local history, geological profiles, and indigenous crafts to ensure they enrich rather than disrupt the neighborhood.
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white tracking-tight mb-12 border-b border-[#161a24] pb-4">
          Studio Leadership
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LEADERS.map((leader, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group"
            >
              <div className="overflow-hidden aspect-[3/4] border border-[#1e2330] mb-4">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="font-serif text-lg text-white font-bold">{leader.name}</h3>
              <span className="text-xs text-accent uppercase tracking-wider block mt-1">
                {leader.role}
              </span>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}