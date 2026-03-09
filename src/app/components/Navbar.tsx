import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import imgLogo from "@/assets/aa188101b5fbbac719eb441e4b9accb610458b0c.png";
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Our Team', path: '/team' },
  { label: 'Our Projects', path: '/projects' },
];

export function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-16 transition-all duration-500 ${
        scrolled ? 'py-2 md:py-3 bg-[#0f0e0c]/70 backdrop-blur-xl shadow-lg' : 'py-4 md:py-8'
      }`}>
        <div className="flex items-center justify-between">
          {/* Nav links - desktop */}
          <div className="hidden md:flex items-center gap-3">
            {navLinks.map((link, i) => {
              const isActive = location.pathname === link.path;
              return (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`px-5 py-2.5 rounded-full border transition-all duration-300 font-['Poppins',sans-serif] text-base no-underline whitespace-nowrap block ${
                      isActive
                        ? 'bg-[#fff1e5] text-[#0f0e0c] border-[#fff1e5]'
                        : 'bg-[rgba(255,241,229,0.1)] text-[#fff1e5] border-[rgba(255,241,229,0.5)] hover:bg-[rgba(255,241,229,0.2)]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="md:hidden relative z-[60] p-2 rounded-full bg-[rgba(255,241,229,0.1)] border border-[rgba(255,241,229,0.5)] text-[#fff1e5]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>

          {/* Logo + Book consultation */}
          <div className="flex items-center gap-3">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={`h-auto transition-all duration-500 ${scrolled ? 'w-[90px] md:w-[130px]' : 'w-[120px] md:w-[180px]'}`}
            >
              <Link to="/">
                <img src={imgLogo} alt="Sora Studios" className="w-full h-auto object-contain" />
              </Link>
            </motion.div>

            {/* Book consultation - desktop */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="hidden md:block"
            >
              <Link
                to="/contact"
                className="flex items-center justify-center px-5 py-2.5 rounded-full bg-[rgba(255,241,229,0.1)] border border-[rgba(255,241,229,0.5)] text-[#fff1e5] font-['DM_Sans',sans-serif] text-base no-underline hover:bg-[rgba(255,241,229,0.2)] transition-all duration-300 whitespace-nowrap"
              >
                Book a Consultation
              </Link>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Mobile menu - rendered outside nav for proper full-screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-[55] bg-[#1c1815] flex flex-col items-center justify-center gap-6"
          >
            {navLinks.map((link, i) => {
              const isActive = location.pathname === link.path;
              return (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`px-8 py-3 rounded-full border text-xl font-['Poppins',sans-serif] no-underline transition-all block ${
                      isActive
                        ? 'bg-[#fff1e5] text-[#0f0e0c] border-[#fff1e5]'
                        : 'bg-transparent text-[#fff1e5] border-[rgba(255,241,229,0.5)]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: navLinks.length * 0.08 }}
            >
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="px-8 py-3 rounded-full bg-[#974200] text-[#fff1e5] border border-[#974200] text-xl font-['DM_Sans',sans-serif] no-underline block"
              >
                Book a Consultation
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}