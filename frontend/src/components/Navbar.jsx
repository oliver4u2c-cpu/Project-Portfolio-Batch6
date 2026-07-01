
import { Link, useLocation } from "react-router-dom";
import { userStore } from "../store/userStore.js";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { isLoggedIn, logOut, user } = userStore();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 w-full z-50 bg-[#0b0c10]/80 backdrop-blur-md border-b border-[#161a24] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Branding Logo */}
        <Link to="/" className="font-serif text-2xl font-bold tracking-widest text-white hover:text-accent transition-colors duration-300">
          AURA
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-[0.2em] uppercase text-muted">
          <Link
            to="/"
            className={`relative py-2 hover:text-white transition-colors duration-300 ${isActive("/") ? "text-accent font-bold" : ""}`}
          >
            HOME
            {isActive("/") && (
              <motion.span layoutId="underline" className="absolute left-0 bottom-0 w-full h-[1px] bg-accent" />
            )}
          </Link>
          <Link
            to="/projects"
            className={`relative py-2 hover:text-white transition-colors duration-300 ${isActive("/projects") ? "text-accent font-bold" : ""}`}
          >
            PROJECTS
            {isActive("/projects") && (
              <motion.span layoutId="underline" className="absolute left-0 bottom-0 w-full h-[1px] bg-accent" />
            )}
          </Link>
          <Link
            to="/about"
            className={`relative py-2 hover:text-white transition-colors duration-300 ${isActive("/about") ? "text-accent font-bold" : ""}`}
          >
            ABOUT
            {isActive("/about") && (
              <motion.span layoutId="underline" className="absolute left-0 bottom-0 w-full h-[1px] bg-accent" />
            )}
          </Link>
          <Link
            to="/contact"
            className={`relative py-2 hover:text-white transition-colors duration-300 ${isActive("/contact") ? "text-accent font-bold" : ""}`}
          >
            CONTACT
            {isActive("/contact") && (
              <motion.span layoutId="underline" className="absolute left-0 bottom-0 w-full h-[1px] bg-accent" />
            )}
          </Link>
        </div>

        {/* Desktop User Panel */}
        <div className="hidden md:flex items-center gap-6">
          {isLoggedIn ? (
            <div className="flex items-center gap-4">
              <span className="text-xs font-medium text-muted">
                Welcome, <span className="text-white font-semibold">{user?.name || user?.username || user?.email}</span>
              </span>
              <button
                onClick={logOut}
                className="border border-[#232836] hover:border-accent text-white hover:text-accent font-bold text-xs tracking-wider px-4 py-2 uppercase transition-all duration-300 rounded-sm"
              >
                LOGOUT
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link
                to="/login"
                className="text-xs font-semibold tracking-wider text-muted hover:text-white transition-colors duration-300"
              >
                LOGIN
              </Link>
              <Link
                to="/signup"
                className="bg-accent hover:bg-accent-light text-bg-dark font-bold text-xs tracking-wider px-5 py-2.5 uppercase transition-colors duration-300 rounded-sm"
              >
                SIGN UP
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-accent focus:outline-none z-50"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-b border-[#161a24] bg-[#0b0c10]"
          >
            <div className="px-6 py-8 flex flex-col gap-6 text-sm font-semibold tracking-[0.25em] text-muted">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`hover:text-white ${isActive("/") ? "text-accent" : ""}`}
              >
                HOME
              </Link>
              <Link
                to="/projects"
                onClick={() => setIsOpen(false)}
                className={`hover:text-white ${isActive("/projects") ? "text-accent" : ""}`}
              >
                PROJECTS
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className={`hover:text-white ${isActive("/about") ? "text-accent" : ""}`}
              >
                ABOUT
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={`hover:text-white ${isActive("/contact") ? "text-accent" : ""}`}
              >
                CONTACT
              </Link>

              <hr className="border-[#161a24] my-2" />

              {isLoggedIn ? (
                <div className="flex flex-col gap-4">
                  <span className="text-xs tracking-wider text-muted">
                    Signed in as: <span className="text-white">{user?.name || user?.username || user?.email}</span>
                  </span>
                  <button
                    onClick={() => {
                      logOut();
                      setIsOpen(false);
                    }}
                    className="border border-[#232836] text-center text-white py-3 uppercase tracking-widest text-xs"
                  >
                    LOGOUT
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="text-center text-white border border-[#232836] py-3 uppercase tracking-widest text-xs"
                  >
                    LOGIN
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setIsOpen(false)}
                    className="text-center bg-accent text-bg-dark font-bold py-3 uppercase tracking-widest text-xs"
                  >
                    SIGN UP
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}