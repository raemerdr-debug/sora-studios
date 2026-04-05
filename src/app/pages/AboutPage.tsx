import { motion } from 'motion/react';
import { Zap, Brain, ClipboardCheck } from 'lucide-react';
import { HeroSection } from '../components/HeroSection';
import { CTASection } from '../components/CTASection';
import { FAQSection } from '../components/FAQSection';
import { Footer } from '../components/Footer';
import { cloudImg, projects } from '@/lib/cloudinary';
import imgPattern from "@/assets/e3a8fcd893cc5c0ef6565c9d62f52fad24dd9381.png";

const imgRectangle65 = cloudImg(projects.aljunied.hero, { w: 1280, h: 720 });
const imgImage = cloudImg(projects.woodlands436.images[0], { w: 800, h: 1060 });
const imgImage1 = cloudImg(projects.woodlands436.images[1], { w: 800, h: 1060 });
const imgImage2 = cloudImg(projects.senett.hero, { w: 1200, h: 800 });
const imgImage3 = cloudImg(projects.sembawang.hero, { w: 1400, h: 900 });

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.6 },
};

export default function AboutPage() {
  return (
    <div className="bg-[#fff1e5]">
      {/* Hero */}
      <HeroSection
        backgroundImage={imgRectangle65}
        title={
          <div className="text-[#fff1e5] text-5xl sm:text-7xl md:text-9xl lg:text-[160px] leading-[1] capitalize">
            <span className="font-['DM_Sans',sans-serif] tracking-[-0.5px] md:tracking-[-1.5px]">About </span>
            <span className="font-['Instrument_Serif',serif] italic">Us</span>
          </div>
        }
      />

      {/* Brown section - Creative Concept */}
      <section className="relative bg-[#361e0f] overflow-hidden">
        {/* Pattern overlay */}
        <div className="absolute inset-0">
          <img src={imgPattern} alt="" className="w-full h-full object-cover opacity-30" />
        </div>

        <div className="relative z-10 px-6 md:px-16 lg:px-24 py-16 md:py-24 flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Left content */}
          <motion.div {...fadeInUp} className="lg:w-1/2 flex flex-col gap-8">
            <div>
              <p className="text-white text-3xl sm:text-5xl md:text-7xl leading-[1.2]">
                <span className="font-['Manrope',sans-serif]">We Made </span>
                <span className="font-['Instrument_Serif',serif] capitalize text-4xl sm:text-6xl md:text-8xl">New Creative Concept</span>
              </p>
            </div>
            <p className="font-['Raleway',sans-serif] text-white text-sm md:text-lg leading-[1.6]">
              We don't follow trends for the sake of it. Every concept we create starts with how you live — your routines, your preferences, your space. The result is a design that feels fresh and intentional, not borrowed from a catalog.
            </p>
            <p className="font-['Raleway',sans-serif] text-white text-sm md:text-lg leading-[1.6]">
              From BTOs, HDBs, to condos to landed homes, we've spent the last decade refining our approach — blending clean aesthetics with smart, functional layouts that hold up long after handover.
            </p>

            {/* Stats */}
            <div className="flex gap-8 md:gap-16 mt-4">
              {[
                { number: '10', label: 'Year\nexperience' },
                { number: '231', label: 'Properties\nbuild' },
                { number: '20', label: 'Awards\ngained' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  <p className="font-['Manrope',sans-serif] text-[#e3d27d] text-4xl md:text-7xl">{stat.number}</p>
                  <p className="font-['Raleway',sans-serif] text-white text-sm md:text-lg whitespace-pre-line mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <p className="font-['Manrope',sans-serif] text-white text-xl md:text-3xl mt-4">
              Spaces designed to be lived in, not just looked at.
            </p>
          </motion.div>

          {/* Right images */}
          <div className="lg:w-1/2 flex flex-col md:flex-row lg:flex-col gap-6">
            <div className="flex flex-row gap-6 flex-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-1/2 h-[250px] md:h-[400px]"
              >
                <img src={imgImage} alt="Interior" className="w-full h-full object-cover" loading="lazy" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="w-1/2 h-[250px] md:h-[400px]"
              >
                <img src={imgImage1} alt="Interior" className="w-full h-full object-cover" loading="lazy" />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-[250px] md:h-[400px] flex-1"
            >
              <img src={imgImage2} alt="Interior" className="w-full h-full object-cover" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* We Create - Home More Aesthetic */}
      <section className="bg-[#fff1e5] px-6 md:px-16 lg:px-24 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-10 md:mb-16">
          <motion.div {...fadeInUp} className="lg:w-1/2">
            <p className="text-[#131714] text-3xl md:text-5xl lg:text-7xl leading-[1.2]">
              <span className="font-['Manrope',sans-serif]">We Create</span><br />
              <span className="font-['Instrument_Serif',serif]">Home More Aesthetic</span>
            </p>
            <p className="font-['Raleway',sans-serif] text-[#6f7470] text-sm md:text-lg leading-[1.6] mt-6">
              Sora Studios was founded on a simple idea: your home should look good and work even better. We design spaces that balance beauty with everyday function — because a home that only looks great in photos isn't doing its job.
            </p>
          </motion.div>
          <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.2 }} className="lg:w-1/2">
            <p className="font-['Raleway',sans-serif] text-[#6f7470] text-sm md:text-lg leading-[1.6]">
              Over the years, we've worked across every property type in Singapore — from compact BTOs and executive flats to condos and landed homes. Each project has taught us something new, and that experience shapes how we approach every brief. We don't do cookie-cutter. Every home gets a concept built around the people living in it.
            </p>
            <p className="font-['Raleway',sans-serif] text-[#6f7470] text-sm md:text-lg leading-[1.6] mt-6">
              Our team handles everything from initial space planning to material selection, carpentry, and project coordination. We keep the process transparent and structured so you're never left wondering what's happening next. One team, one point of contact, from start to finish.
            </p>
          </motion.div>
        </div>

        {/* Video/Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative w-full h-[300px] md:h-[500px] lg:h-[700px] overflow-hidden"
        >
          <img src={imgImage3} alt="Interior showcase" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
            >
              <svg width="24" height="28" viewBox="0 0 24 28" fill="white">
                <path d="M24 14L0 28V0L24 14Z" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#fff1e5] px-6 md:px-16 lg:px-24 py-16 md:py-24">
        <motion.div {...fadeInUp} className="text-center mb-10 md:mb-16">
          <p className="text-[#131714] text-3xl md:text-5xl lg:text-7xl">
            <span className="font-['DM_Sans',sans-serif]">Why </span>
            <span className="font-['Instrument_Serif',serif]">Choose Us</span>
          </p>
          <p className="font-['Raleway',sans-serif] text-[#6f7470] text-sm md:text-lg leading-[1.6] mt-6 max-w-[744px] mx-auto">
            We've helped homeowners across Singapore turn empty spaces into homes they love. Here's what sets Sora Studios apart.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {[
            { title: 'Fast Building', desc: 'We respect your timeline. Our streamlined process and reliable contractor network mean your renovation stays on track — so you move in when planned, not months later.', icon: Zap },
            { title: 'Smartly Execute', desc: 'Every dollar counts. We optimize layouts, materials, and workflows to give you the best outcome within your budget — no unnecessary extras, no hidden costs.', icon: Brain },
            { title: 'Carefully Planned', desc: 'Nothing starts without a clear plan. From detailed drawings to material specs and timelines, everything is mapped out and approved by you before work begins.', icon: ClipboardCheck },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -5 }}
              className="bg-[#361e0f] p-8 md:p-10 flex flex-col gap-5"
            >
              <div className="w-16 h-16 rounded-lg bg-[#974200]/20 flex items-center justify-center">
                <card.icon className="w-8 h-8 text-[#e3d27d]" strokeWidth={1.5} />
              </div>
              <p className="font-['DM_Sans',sans-serif] text-white text-2xl md:text-4xl">{card.title}</p>
              <p className="font-['Raleway',sans-serif] text-white text-sm md:text-lg leading-[1.6]">{card.desc}</p>
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