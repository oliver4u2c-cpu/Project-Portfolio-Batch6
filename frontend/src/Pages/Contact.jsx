import { useState } from "react";
import { motion } from "framer-motion";

export default function Contactpage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-bg-dark text-white py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <header className="mb-16">
        <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold block mb-3">
          CONNECT WITH US
        </span>
        <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Start a Conversation
        </h1>
        <p className="text-muted max-w-2xl text-sm md:text-base leading-relaxed">
          Whether you want to discuss a new spatial commission, partner on a research venture, or inquire about open positions, we look forward to hearing from you.
        </p>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        
        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 bg-bg-card border border-[#1e2330] p-8 md:p-10 rounded-sm"
        >
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center py-20 text-center">
              <span className="text-4xl text-accent block mb-4">✓</span>
              <h3 className="font-serif text-2xl mb-2 text-white">Message Transmitted</h3>
              <p className="text-muted text-sm max-w-xs">
                Thank you for reaching out. A partner from our studio will connect with you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-xs uppercase tracking-wider text-muted mb-2 font-semibold">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-[#0b0c10] border border-[#232836] p-3 text-sm rounded-sm focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-xs uppercase tracking-wider text-muted mb-2 font-semibold">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-[#0b0c10] border border-[#232836] p-3 text-sm rounded-sm focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="subject" className="text-xs uppercase tracking-wider text-muted mb-2 font-semibold">
                  SUBJECT
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="bg-[#0b0c10] border border-[#232836] p-3 text-sm rounded-sm focus:border-accent focus:outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-xs uppercase tracking-wider text-muted mb-2 font-semibold">
                  PROJECT DESCRIPTION / MESSAGE
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-[#0b0c10] border border-[#232836] p-3 text-sm rounded-sm focus:border-accent focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent-light text-bg-dark font-bold text-xs tracking-[0.2em] py-4 uppercase transition-colors rounded-sm"
              >
                SEND INQUIRY
              </button>
            </form>
          )}
        </motion.div>

        {/* Studio Locations */}
        <div className="lg:col-span-5 space-y-12">
          
          {/* Offices */}
          <div>
            <h2 className="font-serif text-2xl mb-6 border-b border-[#1e2330] pb-2 text-accent-light">
              Our Offices
            </h2>
            <div className="space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-accent font-semibold mb-1">COPENHAGEN</h4>
                <p className="text-muted text-sm leading-relaxed">
                  Nørrebrogade 45, Floor 2<br />
                  2200 København N, Denmark<br />
                  <span className="text-white text-xs font-semibold">cph@aura.design</span>
                </p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-accent font-semibold mb-1">KYOTO</h4>
                <p className="text-muted text-sm leading-relaxed">
                  21 Higashiyama-ku, Yasakadori<br />
                  Kyoto 605-0811, Japan<br />
                  <span className="text-white text-xs font-semibold">kyoto@aura.design</span>
                </p>
              </div>
            </div>
          </div>

          {/* Careers & PR */}
          <div>
            <h2 className="font-serif text-2xl mb-6 border-b border-[#1e2330] pb-2 text-accent-light">
              General Contacts
            </h2>
            <div className="space-y-4 text-sm text-muted">
              <div>
                <span className="block text-xs uppercase tracking-wider font-semibold text-accent mb-0.5">PRESS & MEDIA</span>
                <span className="text-white">press@aura.design</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider font-semibold text-accent mb-0.5">CAREERS</span>
                <span className="text-white">careers@aura.design</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}