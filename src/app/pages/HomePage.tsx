import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import { HeroSection } from '../components/HeroSection';
import { CTASection } from '../components/CTASection';
import { FAQSection } from '../components/FAQSection';
import { Footer } from '../components/Footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { cloudImg, projects } from '@/lib/cloudinary';
import imgRectangle67 from "@/assets/cb9db9abc7dcc8b935de132918e5dfd892df0c0d.png";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function HomePage() {
  const portfolioProjects = [
    {
      name: '20 Sims Drive',
      desc: 'Modern living space renovation',
      main: cloudImg(projects.simsdr.hero, { w: 1080, h: 720 }),
      side1: cloudImg(projects.simsdr.images[0], { w: 540, h: 720 }),
      side2: cloudImg(projects.simsdr.images[1], { w: 540, h: 390 }),
    },
    {
      name: '224a Tengah Empyrean',
      desc: 'Contemporary interior redesign',
      main: cloudImg(projects.tengah.hero, { w: 1080, h: 720 }),
      side1: cloudImg(projects.tengah.images[0], { w: 540, h: 720 }),
      side2: cloudImg(projects.tengah.images[1], { w: 540, h: 390 }),
    },
    {
      name: '233B Upper Aljunied',
      desc: 'Elegant home transformation',
      main: cloudImg(projects.aljunied.hero, { w: 1080, h: 720 }),
      side1: cloudImg(projects.aljunied.images[0], { w: 540, h: 720 }),
      side2: cloudImg(projects.aljunied.images[1], { w: 540, h: 390 }),
    },
    {
      name: '285 Choa Chu Kang',
      desc: 'Warm residential styling',
      main: cloudImg(projects.choachukang.hero, { w: 1080, h: 720 }),
      side1: cloudImg(projects.choachukang.images[0], { w: 540, h: 720 }),
      side2: cloudImg(projects.choachukang.images[1], { w: 540, h: 390 }),
    },
    {
      name: 'Jalan',
      desc: 'Luxury space renovation',
      main: cloudImg(projects.jalan.hero, { w: 1080, h: 720 }),
      side1: cloudImg(projects.jalan.images[0], { w: 540, h: 720 }),
      side2: cloudImg(projects.jalan.images[1], { w: 540, h: 390 }),
    },
  ];

  const [currentProject, setCurrentProject] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);

  const goToProject = (direction: number) => {
    setSlideDirection(direction);
    setCurrentProject((prev) => {
      const next = prev + direction;
      if (next < 0) return portfolioProjects.length - 1;
      if (next >= portfolioProjects.length) return 0;
      return next;
    });
  };

  const project = portfolioProjects[currentProject];

  return (
    <div className="bg-[#fff1e5]">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background that spans both hero and stats */}
        <div className="absolute inset-0">
          <img src={imgRectangle67} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/27" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-[400px] md:h-[593px] bg-gradient-to-b from-[#0f0e0c] via-[#0f0e0c]/30 to-transparent" />

        {/* Hero content - full viewport height */}
        <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-['DM_Sans',sans-serif] text-[#fff1e5] text-4xl sm:text-6xl md:text-8xl lg:text-[120px] leading-[1] tracking-[-0.5px] md:tracking-[-1.5px] capitalize whitespace-nowrap"
          >
            Transforming Spaces into
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-['Instrument_Serif',serif] italic text-[#fff1e5] text-4xl sm:text-6xl md:text-8xl lg:text-[160px] leading-[1] capitalize"
          >
            Timeless Narratives
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-['Poppins',sans-serif] text-[#fff1e5] text-sm md:text-2xl mt-6 md:mt-10"
          >
            Thoughtful design for spaces that feel as good as they look.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex items-center gap-4 mt-8 md:mt-12"
          >
            <Link
              to="/projects"
              className="bg-[#fff1e5] px-8 md:px-14 py-4 md:py-6 rounded-full font-['DM_Sans',sans-serif] text-[#0f0e0c] text-base md:text-2xl no-underline hover:bg-white transition-colors"
            >
              Explore Our Portfolio
            </Link>
            <Link
              to="/projects"
              className="w-14 h-14 md:w-[77px] md:h-[77px] rounded-full border border-[rgba(255,241,229,0.5)] flex items-center justify-center hover:bg-[rgba(255,241,229,0.1)] transition-colors no-underline"
            >
              <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
                <path d="M2 18L9 10L2 2" stroke="#FFF1E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        </section>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-[300px] md:h-[500px] bg-gradient-to-t from-[#0f0e0c] via-[#0f0e0c]/30 to-transparent" />

        {/* Stats - below the fold */}
        <div className="relative z-10 px-6 md:px-16 pb-12 md:pb-20 pt-8 md:pt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-16">
          {[
            { value: 'Spaces Brought to Life', desc: 'Every project starts with a conversation and ends with a home that truly fits.' },
            { value: 'Professional Team', desc: 'Designers, architects, and craftsmen working together to bring your vision to life.' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <p className="font-['DM_Sans',sans-serif] text-[#fff1e5] text-2xl md:text-5xl tracking-[-0.5px] md:tracking-[-1.5px] capitalize">
                {stat.value}
              </p>
              <p className="font-['DM_Sans',sans-serif] text-[#fff1e5] opacity-50 text-sm md:text-2xl mt-3 capitalize">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section 02 - Designing with Purpose */}
      <section className="bg-[#fff1e5] px-6 md:px-16 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left title */}
          <motion.div {...fadeInUp} className="lg:w-1/3">
            <p className="text-[#974200] text-4xl md:text-6xl lg:text-8xl leading-[1] capitalize">
              <span className="font-['DM_Sans',sans-serif] tracking-[-0.5px] md:tracking-[-0.5px]">Designing with </span>
              <span className="font-['Instrument_Serif',serif] italic">Purpose</span>
              <span className="font-['Instrument_Serif',serif]"> and </span>
              <span className="font-['Instrument_Serif',serif] italic">Passion</span>
            </p>
          </motion.div>

          {/* Right content */}
          <div className="lg:w-2/3 flex flex-col gap-6">
            <motion.p {...fadeInUp} transition={{ duration: 0.6, delay: 0.1 }} className="font-['DM_Sans',sans-serif] text-[#361e0f] text-2xl md:text-5xl tracking-[-0.5px] md:tracking-[-1.5px]">
              Our Philosophy "Beyond Aesthetics"
            </motion.p>
            <motion.p {...fadeInUp} transition={{ duration: 0.6, delay: 0.2 }} className="font-['DM_Sans',sans-serif] text-[#361e0f] opacity-50 text-sm md:text-2xl">
              At Sora Studios, we believe a beautiful home should also be one you can truly live in. Every layout, material, and detail is chosen not just for how it looks, but for how it fits your daily life — from morning routines to quiet evenings in.
            </motion.p>
          </div>
        </div>

      </section>

      {/* Portfolio section */}
      <section className="bg-[#fff1e5] px-6 md:px-16 py-8 md:py-16">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Main project */}
          <div className="md:w-2/3">
            <div className="h-[300px] md:h-[530px] overflow-hidden relative">
              <AnimatePresence mode="wait" initial={false}>
                <motion.img
                  key={`main-${currentProject}`}
                  initial={{ opacity: 0, x: slideDirection * 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: slideDirection * -80 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  whileHover={{ scale: 1.03 }}
                  src={project.main}
                  alt={project.name}
                  className="w-full h-full object-cover absolute inset-0"
                />
              </AnimatePresence>
            </div>
            <div className="flex items-start justify-between mt-6 md:mt-10 gap-4">
              <AnimatePresence mode="wait">
                <motion.p
                  key={`name-${currentProject}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="font-['DM_Sans',sans-serif] text-[#974200] text-2xl md:text-5xl tracking-[-0.5px] md:tracking-[-0.96px]"
                >
                  {project.name}
                </motion.p>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.p
                  key={`desc-${currentProject}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                  className="font-['Satoshi',sans-serif] text-[#361e0f] opacity-70 text-base md:text-2xl tracking-[-0.48px] max-w-[227px]"
                >
                  {project.desc}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* Side images */}
          <div className="md:w-1/3 flex flex-row md:flex-col gap-4">
            <div className="h-[200px] md:h-[430px] w-1/2 md:w-full overflow-hidden relative">
              <AnimatePresence mode="wait" initial={false}>
                <motion.img
                  key={`side1-${currentProject}`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  src={project.side1}
                  alt="Project"
                  className="w-full h-full object-cover absolute inset-0"
                />
              </AnimatePresence>
            </div>
            <div className="h-[200px] md:h-[240px] w-1/2 md:w-full overflow-hidden opacity-80 relative">
              <AnimatePresence mode="wait" initial={false}>
                <motion.img
                  key={`side2-${currentProject}`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
                  whileHover={{ scale: 1.03 }}
                  src={project.side2}
                  alt="Project"
                  className="w-full h-full object-cover absolute inset-0"
                />
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex items-center justify-center md:justify-end gap-1.5 mt-6">
          {portfolioProjects.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setSlideDirection(i > currentProject ? 1 : -1);
                setCurrentProject(i);
              }}
              className={`h-1.5 transition-all duration-300 ${
                i === currentProject
                  ? 'w-5 bg-[#974200]'
                  : 'w-1.5 bg-[#974200] opacity-30 hover:opacity-60'
              }`}
            />
          ))}
        </div>

        {/* Arrow navigation */}
        <div className="flex items-center justify-center md:justify-end gap-4 mt-8">
          <button className="w-14 h-14 md:w-[77px] md:h-[77px] rounded-full border border-[#361e0f] flex items-center justify-center rotate-180 hover:bg-[#361e0f]/5 transition-colors" onClick={() => goToProject(-1)}>
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
              <path d="M2 18L9 10L2 2" stroke="#361E0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="w-14 h-14 md:w-[77px] md:h-[77px] rounded-full border border-[#361e0f] flex items-center justify-center hover:bg-[#361e0f]/5 transition-colors" onClick={() => goToProject(1)}>
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
              <path d="M2 18L9 10L2 2" stroke="#361E0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </section>

      {/* Collaborative Journey */}
      <section className="bg-[#fff1e5] px-6 md:px-16 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-12 md:mb-16">
          <motion.div {...fadeInUp} className="lg:w-1/2">
            <p className="text-[#974200] text-4xl md:text-6xl lg:text-8xl capitalize leading-[1]">
              <span className="font-['DM_Sans',sans-serif]">Our</span><br />
              <span className="font-['Instrument_Serif',serif] italic">Collaborative</span><br />
              <span className="font-['Instrument_Serif',serif]">Journey</span>
            </p>
          </motion.div>
          <motion.p
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 font-['Poppins',sans-serif] text-[#361e0f] opacity-50 text-sm md:text-2xl capitalize"
          >
            Every project follows a clear, structured process — so you always know what's happening and what comes next. No surprises, no guesswork. Just a smooth journey from first idea to finished home.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-0 right-0 top-0 h-px bg-[#361e0f] opacity-50" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 pt-8 md:pt-12">
            {[
              { title: 'Consultation', desc: 'We start by listening. Share your lifestyle, budget, and vision — we\'ll assess your space and map out what\'s possible.' },
              { title: 'Conceptualization', desc: 'Your ideas take shape. We develop layouts, material palettes, and 3D visuals so you can see and refine the design before any work begins.' },
              { title: 'Development', desc: 'Once everything\'s approved, we bring it to life — managing every detail from carpentry to finishing, keeping you updated throughout.' },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative"
              >
                {/* Dot */}
                <div className="hidden md:block absolute -top-[calc(3rem+8.5px)] left-0">
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <circle cx="8.5" cy="8.5" fill="#361E0F" r="8.5" />
                    <circle cx="8.5" cy="8.5" r="8" stroke="#FFF1E5" strokeOpacity="0.5" />
                  </svg>
                </div>
                <p className="font-['DM_Sans',sans-serif] text-[#974200] text-2xl md:text-5xl tracking-[-0.5px] md:tracking-[-1.5px] capitalize">
                  {step.title}
                </p>
                <p className="font-['Poppins',sans-serif] text-[#361e0f] opacity-50 text-sm md:text-2xl mt-3 capitalize">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Our Clients Say */}
      <section className="bg-[#fff1e5] px-6 md:px-16 py-16 md:py-24">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <p className="text-[#974200] text-3xl md:text-6xl lg:text-8xl capitalize">
            <span className="font-['DM_Sans',sans-serif] tracking-[-0.3px] md:tracking-[-0.64px]">What Our </span>
            <span className="font-['Instrument_Serif',serif] italic">Clients Say</span>
          </p>
          <a href="https://www.google.com/maps/place/Sora+Studios/@1.3329084,103.8911002,17z/data=!3m1!4b1!4m6!3m5!1s0x31da17337e8277b9:0x38bf33709533ccdb!8m2!3d1.3329084!4d103.8936751!16s%2Fg%2F11ysxddrw0?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 mt-6 hover:opacity-70 transition-opacity">
            <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="font-['Poppins',sans-serif] text-[#361e0f] opacity-40 text-sm md:text-base">Google Reviews</span>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {[
            { name: 'Nurhasanah S.', review: 'We had an amazing experience with Sora Studios. The space feels calm, functional, and well thought out. The layout, colour palette, and material choices were simple yet elegant, with strong attention to detail.' },
            { name: 'Syarafana B.', review: 'He took the time to understand what I envisioned and brought it to life in a way that feels both beautiful and personal. His patience, creativity and thoughtful approach made the entire process stress-free and enjoyable.' },
            { name: 'Jerome L.', review: 'Friendly, exceptionally helpful, and dedicated to finding solutions for every challenge we faced. Always responsive, kept the project on schedule, and offered reasonable pricing. We are very satisfied with the outcome.' },
            { name: 'RJ J.', review: 'We had a really fast and smooth renovation journey. The balance between Japanese minimalism and Scandinavian warmth was done beautifully — everything felt cohesive and thoughtfully designed.' },
            { name: 'Kelly N.', review: 'Absolutely blown away by the results! She has an incredible eye for detail and space planning. She listened carefully to our needs, gave honest advice, and transformed our home into something both beautiful and practical.' },
            { name: 'Arissa H.', review: 'As first-time homeowners, we were nervous about the process, but she managed everything seamlessly. She has a rare talent for balancing aesthetic wants with functional needs. We couldn\'t have asked for a better experience!' },
          ].map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col gap-3"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5 text-[#FBBC05]" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="font-['Poppins',sans-serif] text-[#361e0f] text-sm md:text-lg leading-[1.6] opacity-60">
                "{client.review}"
              </p>
              <p className="font-['DM_Sans',sans-serif] text-[#974200] text-base md:text-xl">
                {client.name}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
      <FAQSection />
      <Footer />
    </div>
  );
}