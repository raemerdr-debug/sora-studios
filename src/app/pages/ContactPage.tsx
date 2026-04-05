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

const inputClass = "w-full px-5 py-4 border border-[#d9d9d9] rounded-lg bg-white font-['Satoshi',sans-serif] text-[#131714] placeholder:text-[#999] focus:outline-none focus:border-[#974200] transition-colors";
const selectClass = "w-full px-5 py-4 border border-[#d9d9d9] rounded-lg bg-white font-['Satoshi',sans-serif] text-[#131714] focus:outline-none focus:border-[#974200] transition-colors appearance-none";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    property_type: '',
    budget: '',
    room_count: '',
    preferred_date: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.property_type) return;

    setStatus('sending');

    const { error } = await supabase
      .from('consultations')
      .insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        property_type: formData.property_type,
        budget: formData.budget || null,
        room_count: formData.room_count || null,
        preferred_date: formData.preferred_date || null,
        message: formData.message || null,
      });

    if (error) {
      setStatus('error');
      console.error('Supabase error:', error);
    } else {
      // Send confirmation email via Edge Function
      try {
        await supabase.functions.invoke('send-consultation-email', {
          body: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            property_type: formData.property_type,
            budget: formData.budget,
            room_count: formData.room_count,
            preferred_date: formData.preferred_date,
            message: formData.message,
          },
        });
      } catch (emailError) {
        console.error('Email error (non-blocking):', emailError);
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', property_type: '', budget: '', room_count: '', preferred_date: '', message: '' });
    }

    setTimeout(() => setStatus('idle'), 5000);
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

      {/* Consultation Form Section */}
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

          {/* Right - Form */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <p className="font-['Raleway',sans-serif] text-[#6f7470] text-sm md:text-base leading-[1.6] mb-8">
              Tell us about your space and what you have in mind. Fill in the details below and we'll reach out within 24 hours to schedule your free consultation.
            </p>

            <p className="text-[#131714] text-2xl md:text-4xl mb-6">
              <span className="font-['Manrope',sans-serif]">Book a </span>
              <span className="font-['Instrument_Serif',serif] italic">Consultation</span>
            </p>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              {/* Phone & Preferred Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClass}
                />
                <input
                  type="date"
                  name="preferred_date"
                  value={formData.preferred_date}
                  onChange={handleChange}
                  className={`${inputClass} ${!formData.preferred_date ? 'text-[#999]' : ''}`}
                  title="Preferred consultation date"
                />
              </div>

              {/* Property Type */}
              <div className="relative">
                <select
                  name="property_type"
                  required
                  value={formData.property_type}
                  onChange={handleChange}
                  className={`${selectClass} ${!formData.property_type ? 'text-[#999]' : ''}`}
                >
                  <option value="" disabled>Property Type *</option>
                  <option value="BTO">BTO</option>
                  <option value="HDB Resale">HDB Resale</option>
                  <option value="Condo">Condo</option>
                  <option value="Landed">Landed</option>
                  <option value="Commercial">Commercial</option>
                </select>
                <svg className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M1 1L6 6L11 1" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Budget & Room Count */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={`${selectClass} ${!formData.budget ? 'text-[#999]' : ''}`}
                  >
                    <option value="" disabled>Budget Range</option>
                    <option value="Below $30k">Below $30k</option>
                    <option value="$30k - $50k">$30k - $50k</option>
                    <option value="$50k - $80k">$50k - $80k</option>
                    <option value="$80k - $120k">$80k - $120k</option>
                    <option value="Above $120k">Above $120k</option>
                  </select>
                  <svg className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M1 1L6 6L11 1" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="relative">
                  <select
                    name="room_count"
                    value={formData.room_count}
                    onChange={handleChange}
                    className={`${selectClass} ${!formData.room_count ? 'text-[#999]' : ''}`}
                  >
                    <option value="" disabled>Number of Rooms</option>
                    <option value="2-Room">2-Room</option>
                    <option value="3-Room">3-Room</option>
                    <option value="4-Room">4-Room</option>
                    <option value="5-Room">5-Room</option>
                    <option value="Executive">Executive</option>
                    <option value="Other">Other</option>
                  </select>
                  <svg className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M1 1L6 6L11 1" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Message */}
              <textarea
                name="message"
                placeholder="Tell us about your project — any ideas, preferences, or must-haves"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
              />

              {/* Submit */}
              <div className="flex items-center gap-4 mt-2">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={status === 'sending'}
                  className="bg-[#974200] text-white px-10 py-4 rounded-full font-['Satoshi',sans-serif] text-xs tracking-[1.8px] uppercase w-fit hover:bg-[#7a3600] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Submitting...' : 'Book Consultation'}
                </motion.button>
                <AnimatePresence>
                  {status === 'success' && (
                    <motion.p
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="font-['Satoshi',sans-serif] text-green-700 text-sm"
                    >
                      Booking received! Check your email for confirmation.
                    </motion.p>
                  )}
                  {status === 'error' && (
                    <motion.p
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="font-['Satoshi',sans-serif] text-red-600 text-sm"
                    >
                      Something went wrong. Please try again.
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
