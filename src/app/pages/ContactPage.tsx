import { useState } from 'react';
import { motion } from 'motion/react';
import { HeroSection } from '../components/HeroSection';
import { FAQSection } from '../components/FAQSection';
import { Footer } from '../components/Footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const heroImg = "https://images.unsplash.com/photo-1763647972062-5e9cd48fb282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb20lMjB3YXJtfGVufDF8fHx8MTc3MjcyODUzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const contactImg1 = "https://images.unsplash.com/photo-1769366316790-dfcb6a546f05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwaW50ZXJpb3IlMjBkZWNvcmF0aW9uJTIwd2FybSUyMHRvbmVzfGVufDF8fHx8MTc3MjcyODU0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const contactImg2 = "https://images.unsplash.com/photo-1758548157747-285c7012db5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBpbnRlcmlvciUyMHNwYWNpb3VzfGVufDF8fHx8MTc3MjcyODU0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.6 },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  return (
    <div className="bg-[#fff1e5]">
      {/* Hero */}
      <HeroSection
        backgroundImage={heroImg}
        title={
          <div className="text-[#fff1e5] text-5xl sm:text-7xl md:text-9xl lg:text-[160px] leading-[1] capitalize">
            <span className="font-['DM_Sans',sans-serif] tracking-[-1px] md:tracking-[-3px]">Contact </span>
            <span className="font-['Instrument_Serif',serif] italic">Us</span>
          </div>
        }
      />

      {/* Contact Section */}
      <section className="bg-[#fff1e5] px-6 md:px-16 lg:px-24 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left - Images */}
          <motion.div {...fadeInUp} className="lg:w-1/2 flex flex-col gap-6">
            <div className="h-[300px] md:h-[450px] overflow-hidden">
              <ImageWithFallback src={contactImg1} alt="Interior design" className="w-full h-full object-cover" />
            </div>
            <div className="h-[250px] md:h-[350px] overflow-hidden">
              <ImageWithFallback src={contactImg2} alt="Interior design" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Right - Contact info + form */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <p className="font-['Raleway',sans-serif] text-[#6f7470] text-sm md:text-base leading-[1.6] mb-8">
              Ac volutpat et nulla ultricies convallis convallis sed. Sit nec risus sit nisl, quis in turpis gravida libero. At elit eu lacus, quam neque arcu euismod. At id in auctor posuere eget. Convallis varius laoreet.
            </p>

            <p className="font-['Satoshi',sans-serif] text-[#361e0f] text-xs tracking-[1.8px] uppercase opacity-60 mb-4">
              Info Contact
            </p>

            <div className="flex flex-col gap-3 mb-10">
              <p className="font-['DM_Sans',sans-serif] text-[#131714] text-lg md:text-xl">Sample</p>
              <p className="font-['DM_Sans',sans-serif] text-[#131714] text-lg md:text-xl">customer@electron.com</p>
              <p className="font-['DM_Sans',sans-serif] text-[#131714] text-lg md:text-xl">(+021) 345 678 910</p>
            </div>

            <p className="text-[#131714] text-2xl md:text-4xl mb-6">
              <span className="font-['Manrope',sans-serif]">Message </span>
              <span className="font-['Instrument_Serif',serif] italic">Us</span>
            </p>

            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-5 py-4 border border-[#d9d9d9] rounded-lg bg-white font-['Satoshi',sans-serif] text-[#131714] placeholder:text-[#999] focus:outline-none focus:border-[#974200] transition-colors"
              />
              <input
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-5 py-4 border border-[#d9d9d9] rounded-lg bg-white font-['Satoshi',sans-serif] text-[#131714] placeholder:text-[#999] focus:outline-none focus:border-[#974200] transition-colors"
              />
              <textarea
                placeholder="Message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-5 py-4 border border-[#d9d9d9] rounded-lg bg-white font-['Satoshi',sans-serif] text-[#131714] placeholder:text-[#999] focus:outline-none focus:border-[#974200] transition-colors resize-none"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#974200] text-white px-8 py-4 rounded-full font-['Satoshi',sans-serif] text-xs tracking-[1.8px] uppercase w-fit hover:bg-[#7a3600] transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      <FAQSection />
      <Footer />
    </div>
  );
}