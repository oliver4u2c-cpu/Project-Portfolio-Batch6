import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#08090d] border-t border-[#161a24] text-white pt-16 pb-8 px-6 md:px-12 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
        {/* Logo and Tagline */}
        <div className="md:col-span-2 flex flex-col justify-between">
          <div>
            <Link to="/" className="font-serif text-3xl font-bold tracking-widest text-white hover:text-accent transition-colors duration-300">
              AURA
            </Link>
            <p className="mt-4 text-muted text-sm max-w-sm leading-relaxed">
              We design built environments that inspire, elevate, and endure. Our spatial creations combine Scandinavian craftsmanship with sustainable technical innovation.
            </p>
          </div>
          <div className="mt-8 flex gap-4 text-xs text-muted">
            <a href="#" className="hover:text-accent transition-colors duration-300">INSTAGRAM</a>
            <span>/</span>
            <a href="#" className="hover:text-accent transition-colors duration-300">LINKEDIN</a>
            <span>/</span>
            <a href="#" className="hover:text-accent transition-colors duration-300">PINTEREST</a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4">STUDIO</h4>
          <ul className="flex flex-col gap-2 text-sm text-muted">
            <Link to="/" className="hover:text-white transition-colors duration-300">Home</Link>
            <Link to="/about" className="hover:text-white transition-colors duration-300">About Studio</Link>
            <Link to="/projects" className="hover:text-white transition-colors duration-300">All Projects</Link>
            <Link to="/contact" className="hover:text-white transition-colors duration-300">Contact</Link>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h4 className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4">NEWS & INSIGHTS</h4>
          <p className="text-muted text-xs mb-4 leading-relaxed">
            Subscribe to receive our latest insights on sustainable space planning.
          </p>
          <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="bg-bg-dark border border-[#232836] p-3 text-xs tracking-wider rounded-sm focus:border-accent focus:outline-none transition-colors duration-300"
            />
            <button
              type="submit"
              className="bg-accent hover:bg-accent-light text-bg-dark font-semibold text-xs tracking-[0.25em] py-3 uppercase transition-colors duration-300"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Underbar */}
      <div className="max-w-7xl mx-auto border-t border-[#161a24] pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-muted gap-4">
        <span>© {currentYear} AURA ARCHITECTS. ALL RIGHTS RESERVED.</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors duration-300">PRIVACY POLICY</a>
          <a href="#" className="hover:text-white transition-colors duration-300">TERMS OF SERVICE</a>
        </div>
      </div>
    </footer>
  );
}
