import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HeroSection } from '../components/HeroSection';
import { FAQSection } from '../components/FAQSection';
import { Footer } from '../components/Footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { cloudImg, projects } from '@/lib/cloudinary';
import { supabase } from '@/lib/supabase';

const heroImg = cloudImg(projects.senett.images[0], { w: 1280, h: 720 });
const contactImg1 = cloudImg(projects.jalan.images[2], { w: 900, h: 675 });
const contactImg2 = cloudImg(projects.metropolitan.images[3], { w: 900, h: 675 });

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.6 },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');
    const { error } = await supabase
      .from('contact_messages')
      .insert({ name: formData.name, email: formData.email, phone: formData.phone, message: formData.message });

    if (error) {
      setStatus('error');
      console.error('Supabase error:', error);
    } else {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }

    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <div className="bg-[#fff1e5]">
      {/* Hero */}
      <HeroSection
        backgroundImage={heroImg}
        title={
          <div className="text-[#fff1e5] text-5xl sm:text-7xl md:text-9xl lg:text-[160px] leading-[1] capitalize">
            <span className="font-['DM_Sans',sans-serif] tracking-[-0.5px] md:tracking-[-1.5px]">Contact </span>
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
              Whether you're planning a full renovation or just exploring ideas, we're here to help. Drop us a message and we'll get back to you to discuss your space, your vision, and how we can bring it to life.
            </p>

            <p className="text-[#131714] text-2xl md:text-4xl mb-6">
              <span className="font-['Manrope',sans-serif]">Message </span>
              <span className="font-['Instrument_Serif',serif] italic">Us</span>
            </p>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-5 py-4 border border-[#d9d9d9] rounded-lg bg-white font-['Satoshi',sans-serif] text-[#131714] placeholder:text-[#999] focus:outline-none focus:border-[#974200] transition-colors"
              />
              <input
                type="email"
                placeholder="Email address"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-5 py-4 border border-[#d9d9d9] rounded-lg bg-white font-['Satoshi',sans-serif] text-[#131714] placeholder:text-[#999] focus:outline-none focus:border-[#974200] transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-5 py-4 border border-[#d9d9d9] rounded-lg bg-white font-['Satoshi',sans-serif] text-[#131714] placeholder:text-[#999] focus:outline-none focus:border-[#974200] transition-colors"
              />
              <textarea
                placeholder="Message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-5 py-4 border border-[#d9d9d9] rounded-lg bg-white font-['Satoshi',sans-serif] text-[#131714] placeholder:text-[#999] focus:outline-none focus:border-[#974200] transition-colors resize-none"
              />
              <div className="flex items-center gap-4">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={status === 'sending'}
                  className="bg-[#974200] text-white px-8 py-4 rounded-full font-['Satoshi',sans-serif] text-xs tracking-[1.8px] uppercase w-fit hover:bg-[#7a3600] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </motion.button>
                <AnimatePresence>
                  {status === 'success' && (
                    <motion.p
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="font-['Satoshi',sans-serif] text-green-700 text-sm"
                    >
                      Message sent successfully!
                    </motion.p>
                  )}
                  {status === 'error' && (
                    <motion.p
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="font-['Satoshi',sans-serif] text-red-600 text-sm"
                    >
                      Failed to send. Please try again.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      <FAQSection />
      <Footer />
    </div>
  );
}