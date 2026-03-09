import { motion } from 'motion/react';
import { HeroSection } from '../components/HeroSection';
import { CTASection } from '../components/CTASection';
import { FAQSection } from '../components/FAQSection';
import { Footer } from '../components/Footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const heroImg = "https://images.unsplash.com/photo-1696694138288-d3c14bdd35f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMHByb2plY3QlMjBzaG93Y2FzZSUyMGRhcmt8ZW58MXx8fHwxNzcyNzUzMDc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const arrowSvg = (
  <svg width="16" height="16" viewBox="0 0 16.4714 16.4714" fill="none">
    <path d="M16.4714 0.666667C16.4714 0.298477 16.1729 0 15.8047 0H9.80474C9.43655 0 9.13807 0.298477 9.13807 0.666667C9.13807 1.03486 9.43655 1.33333 9.80474 1.33333H15.1381V6.66667C15.1381 7.03486 15.4365 7.33333 15.8047 7.33333C16.1729 7.33333 16.4714 7.03486 16.4714 6.66667V0.666667ZM0.471405 16L0.942809 16.4714L16.2761 1.13807L15.8047 0.666667L15.3333 0.195262L0 15.5286L0.471405 16Z" fill="#361E0F" />
  </svg>
);

const projects = [
  { name: 'Home Decoration', category: 'View Details', img: 'https://images.unsplash.com/photo-1672860044506-e3ec09653e82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob21lJTIwZGVjb3JhdGlvbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzcyNzUzMDc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', size: 'small' },
  { name: 'Modern Kitchen', category: 'View Details', img: 'https://images.unsplash.com/photo-1643034738686-d69e7bc047e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBraXRjaGVuJTIwaW50ZXJpb3IlMjBtYXJibGV8ZW58MXx8fHwxNzcyNzUzMDc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', size: 'medium' },
  { name: 'Cozy Bedroom', category: 'View Details', img: 'https://images.unsplash.com/photo-1763419161907-1e00b2f883c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYmVkcm9vbSUyMGludGVyaW9yJTIwd2FybSUyMHRvbmVzfGVufDF8fHx8MTc3Mjc1MTczMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', size: 'small' },
  { name: 'Spa Bathroom', category: 'View Details', img: 'https://images.unsplash.com/photo-1750036015902-c6f5ebca924e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYmF0aHJvb20lMjBpbnRlcmlvciUyMHNwYSUyMGRlc2lnbnxlbnwxfHx8fDE3NzI3NTMwNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', size: 'medium' },
  { name: 'Creative Workspace', category: 'View Details', img: 'https://images.unsplash.com/photo-1703355685639-d558d1b0f63e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvciUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzI3MzIxMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', size: 'medium' },
  { name: 'Elegant Dining', category: 'View Details', img: 'https://images.unsplash.com/photo-1771218829838-f30edb7e0263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkaW5pbmclMjByb29tJTIwaW50ZXJpb3IlMjBjaGFuZGVsaWVyfGVufDF8fHx8MTc3Mjc1MzA4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', size: 'large' },
];

export default function ProjectsPage() {
  return (
    <div className="bg-[#fff1e5]">
      {/* Hero */}
      <HeroSection
        backgroundImage={heroImg}
        title={
          <div className="text-[#fff1e5] text-5xl sm:text-7xl md:text-9xl lg:text-[160px] leading-[1] capitalize">
            <span className="font-['DM_Sans',sans-serif] tracking-[-1px] md:tracking-[-3px]">Our </span>
            <span className="font-['Instrument_Serif',serif] italic">Projects</span>
          </div>
        }
        subtitle="We transform ideas into compelling designs that captivate and convert"
      />

      {/* Projects Grid - Masonry style */}
      <section className="bg-[#fff1e5] px-6 md:px-16 lg:px-24 py-16 md:py-24">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Small left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/3"
          >
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="h-[250px] md:h-[300px] overflow-hidden">
              <img src={projects[0].img} alt={projects[0].name} className="w-full h-full object-cover" />
            </motion.div>
            <div className="py-5">
              <p className="font-['Satoshi',sans-serif] text-[#974200] text-xl md:text-2xl tracking-[-0.7px]">{projects[0].name}</p>
              <div className="flex items-center gap-2 mt-3">
                <p className="font-['Satoshi',sans-serif] text-[#361e0f] opacity-60 text-sm tracking-[-0.5px]">{projects[0].category}</p>
                {arrowSvg}
              </div>
            </div>
          </motion.div>

          {/* Medium center */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:w-1/3 md:mt-16"
          >
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="h-[250px] md:h-[350px] overflow-hidden">
              <img src={projects[1].img} alt={projects[1].name} className="w-full h-full object-cover" />
            </motion.div>
            <div className="py-5">
              <p className="font-['Satoshi',sans-serif] text-[#974200] text-xl md:text-2xl tracking-[-0.7px]">{projects[1].name}</p>
              <div className="flex items-center gap-2 mt-3">
                <p className="font-['Satoshi',sans-serif] text-[#361e0f] opacity-60 text-sm tracking-[-0.5px]">{projects[1].category}</p>
                {arrowSvg}
              </div>
            </div>
          </motion.div>

          {/* Small right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/3"
          >
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="h-[250px] md:h-[300px] overflow-hidden">
              <img src={projects[2].img} alt={projects[2].name} className="w-full h-full object-cover" />
            </motion.div>
            <div className="py-5">
              <p className="font-['Satoshi',sans-serif] text-[#974200] text-xl md:text-2xl tracking-[-0.7px]">{projects[2].name}</p>
              <div className="flex items-center gap-2 mt-3">
                <p className="font-['Satoshi',sans-serif] text-[#361e0f] opacity-60 text-sm tracking-[-0.5px]">{projects[2].category}</p>
                {arrowSvg}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-6 md:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="h-[250px] md:h-[400px] overflow-hidden">
              <img src={projects[3].img} alt={projects[3].name} className="w-full h-full object-cover" />
            </motion.div>
            <div className="py-5">
              <p className="font-['Satoshi',sans-serif] text-[#974200] text-xl md:text-2xl tracking-[-0.7px]">{projects[3].name}</p>
              <div className="flex items-center gap-2 mt-3">
                <p className="font-['Satoshi',sans-serif] text-[#361e0f] opacity-60 text-sm tracking-[-0.5px]">{projects[3].category}</p>
                {arrowSvg}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:w-1/2"
          >
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="h-[250px] md:h-[400px] overflow-hidden">
              <img src={projects[4].img} alt={projects[4].name} className="w-full h-full object-cover" />
            </motion.div>
            <div className="py-5">
              <p className="font-['Satoshi',sans-serif] text-[#974200] text-xl md:text-2xl tracking-[-0.7px]">{projects[4].name}</p>
              <div className="flex items-center gap-2 mt-3">
                <p className="font-['Satoshi',sans-serif] text-[#361e0f] opacity-60 text-sm tracking-[-0.5px]">{projects[4].category}</p>
                {arrowSvg}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Row 3 - centered */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 lg:w-1/3"
          >
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="h-[250px] md:h-[350px] overflow-hidden">
              <img src={projects[5].img} alt={projects[5].name} className="w-full h-full object-cover" />
            </motion.div>
            <div className="py-5">
              <p className="font-['Satoshi',sans-serif] text-[#974200] text-xl md:text-2xl tracking-[-0.7px]">{projects[5].name}</p>
              <div className="flex items-center gap-2 mt-3">
                <p className="font-['Satoshi',sans-serif] text-[#361e0f] opacity-60 text-sm tracking-[-0.5px]">{projects[5].category}</p>
                {arrowSvg}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
      <FAQSection />
      <Footer />
    </div>
  );
}