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
      main: cloudImg(projects.simsdr.hero, { w: 720, h: 480 }),
      side1: cloudImg(projects.simsdr.images[0], { w: 360, h: 480 }),
      side2: cloudImg(projects.simsdr.images[1], { w: 360, h: 260 }),
    },
    {
      name: '224a Tengah Empyrean',
      desc: 'Contemporary interior redesign',
      main: cloudImg(projects.tengah.hero, { w: 720, h: 480 }),
      side1: cloudImg(projects.tengah.images[0], { w: 360, h: 480 }),
      side2: cloudImg(projects.tengah.images[1], { w: 360, h: 260 }),
    },
    {
      name: '233B Upper Aljunied',
      desc: 'Elegant home transformation',
      main: cloudImg(projects.aljunied.hero, { w: 720, h: 480 }),
      side1: cloudImg(projects.aljunied.images[0], { w: 360, h: 480 }),
      side2: cloudImg(projects.aljunied.images[1], { w: 360, h: 260 }),
    },
    {
      name: '285 Choa Chu Kang',
      desc: 'Warm residential styling',
      main: cloudImg(projects.choachukang.hero, { w: 720, h: 480 }),
      side1: cloudImg(projects.choachukang.images[0], { w: 360, h: 480 }),
      side2: cloudImg(projects.choachukang.images[1], { w: 360, h: 260 }),
    },
    {
      name: 'Jalan',
      desc: 'Luxury space renovation',
      main: cloudImg(projects.jalan.hero, { w: 720, h: 480 }),
      side1: cloudImg(projects.jalan.images[0], { w: 360, h: 480 }),
      side2: cloudImg(projects.jalan.images[1], { w: 360, h: 260 }),
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
            className="font-['DM_Sans',sans-serif] text-[#fff1e5] text-4xl sm:text-6xl md:text-8xl lg:text-[120px] leading-[1] tracking-[-1px] md:tracking-[-3px] capitalize whitespace-nowrap"
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
            animate={{ opacity: 0.5 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-['Poppins',sans-serif] text-[#fff1e5] text-sm md:text-2xl mt-6 md:mt-10"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
            { value: '3k+ Project', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { value: '99% Succes Project', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { value: 'Professional Team', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <p className="font-['DM_Sans',sans-serif] text-[#fff1e5] text-2xl md:text-5xl tracking-[-0.5px] md:tracking-[-2.88px] capitalize">
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
              <span className="font-['DM_Sans',sans-serif] tracking-[-0.5px] md:tracking-[-1.12px]">Designing with </span>
              <span className="font-['Instrument_Serif',serif] italic">Purpose</span>
              <span className="font-['Instrument_Serif',serif]"> and </span>
              <span className="font-['Instrument_Serif',serif] italic">Passion</span>
            </p>
          </motion.div>

          {/* Right content */}
          <div className="lg:w-2/3 flex flex-col gap-6">
            <motion.p {...fadeInUp} transition={{ duration: 0.6, delay: 0.1 }} className="font-['DM_Sans',sans-serif] text-[#361e0f] text-2xl md:text-5xl tracking-[-0.5px] md:tracking-[-2.88px]">
              Our Philosophy "Beyond Aesthetics"
            </motion.p>
            <motion.p {...fadeInUp} transition={{ duration: 0.6, delay: 0.2 }} className="font-['DM_Sans',sans-serif] text-[#361e0f] opacity-50 text-sm md:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </motion.p>
          </div>
        </div>

        {/* Images */}
        <div className="flex flex-col md:flex-row gap-4 mt-10 md:mt-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/4 h-[250px] md:h-[300px]"
          >
            <img src={cloudImg(projects.tengah.images[0], { w: 300, h: 400 })} alt="Interior design" loading="lazy" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:w-3/4 h-[300px] md:h-[500px] lg:h-[620px]"
          >
            <img src={cloudImg(projects.simsdr.hero, { w: 800, h: 530 })} alt="Interior design" loading="lazy" className="w-full h-full object-cover" />
          </motion.div>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper diam velit, a aliquam lorem congue sed. Donec ultricies purus dolor, sed semper quam ornare vitae.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-0 right-0 top-0 h-px bg-[#361e0f] opacity-50" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 pt-8 md:pt-12">
            {[
              { title: 'Consultation', desc: 'Lorem ipsum dolor sit amet,' },
              { title: 'Conceptualization', desc: 'Lorem ipsum dolor sit amet,' },
              { title: 'Development', desc: 'Lorem ipsum dolor sit amet,' },
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
                <p className="font-['DM_Sans',sans-serif] text-[#974200] text-2xl md:text-5xl tracking-[-0.5px] md:tracking-[-2.88px] capitalize">
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
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {[
            { name: 'Sarah M.', active: false, img: 'https://images.unsplash.com/photo-1758600432914-2b5f4483c7b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwaGVhZHNob3QlMjBwcm9mZXNzaW9uYWwlMjB3YXJtfGVufDF8fHx8MTc3Mjc1MzA3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', review: 'Sora Studios transformed our living space beyond our wildest dreams. Their attention to detail is unmatched.' },
            { name: 'James L.', active: true, img: 'https://images.unsplash.com/photo-1723537742563-15c3d351dbf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGhlYWRzaG90JTIwYnVzaW5lc3MlMjBjYXN1YWx8ZW58MXx8fHwxNzcyNzUzMDc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', review: 'Working with the Sora team was an incredible experience. They truly listened and delivered a space that feels like home.' },
            { name: 'Emily R.', active: false, img: 'https://images.unsplash.com/photo-1772249541659-a034b3360f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwc21pbGluZyUyMHBvcnRyYWl0JTIwbmF0dXJhbHxlbnwxfHx8fDE3NzI2NzM5MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', review: 'From concept to completion, Sora made every step seamless. Our office redesign boosted team morale instantly.' },
            { name: 'David K.', active: false, img: 'https://images.unsplash.com/photo-1764084051438-369ad6a09334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBhZ2VkJTIwbWFuJTIwcG9ydHJhaXQlMjBjb25maWRlbnR8ZW58MXx8fHwxNzcyNzUzMDc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', review: 'The team at Sora understood our vision perfectly. Every corner of our home now tells a beautiful story.' },
            { name: 'Olivia P.', active: false, img: 'https://images.unsplash.com/photo-1770235622504-3851a96ac6ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwc3R1ZGlvJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzI3NTMwNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', review: 'Exceptional craftsmanship and creative vision. Sora turned our outdated kitchen into a culinary masterpiece.' },
            { name: 'Marcus T.', active: false, img: 'https://images.unsplash.com/photo-1762708550141-2688121b9ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbiUyMHBvcnRyYWl0JTIwY3JlYXRpdmUlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcyNzUzMDc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', review: 'I was blown away by the transformation. Sora Studios creates spaces that are both functional and breathtaking.' },
          ].map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-4 items-start"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#d9d9d9] shrink-0 overflow-hidden">
                <ImageWithFallback src={client.img} alt={client.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className={`font-['Poppins',sans-serif] text-[#974200] text-xl md:text-[32px] capitalize ${!client.active ? 'opacity-50' : ''}`}>
                  {client.name}
                </p>
                <p className={`font-['Poppins',sans-serif] text-[#361e0f] text-sm md:text-2xl capitalize mt-2 ${!client.active ? 'opacity-50' : ''}`}>
                  {client.review}
                </p>
              </div>
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