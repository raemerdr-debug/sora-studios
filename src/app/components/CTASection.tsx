import { Link } from 'react-router';
import { motion } from 'motion/react';
import { cloudImg, projects } from '@/lib/cloudinary';

const ctaImage = cloudImg(projects.simsdr.hero, { w: 1920, h: 800 });

export function CTASection() {
  return (
    <section className="bg-[#fff1e5] px-6 md:px-16 py-16 md:py-20">
      {/* Title and text */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-shrink-0"
        >
          <p className="font-['Instrument_Serif',serif] text-[#974200] text-5xl md:text-7xl lg:text-[128px] leading-[1]">
            <span className="font-['DM_Sans',sans-serif] tracking-[-0.5px] md:tracking-[-0.6px]">Ready to </span>
            <span className="italic">Transform</span>
          </p>
          <p className="font-['Instrument_Serif',serif] italic text-[#974200] text-5xl md:text-7xl lg:text-[128px] leading-[1]">
            Your Space?
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-['Poppins',sans-serif] text-[#361e0f] opacity-50 text-base md:text-xl lg:text-2xl max-w-[654px] self-start lg:self-center"
        >
          Have a project in mind — or just starting to think about it? Let's chat. Book a free consultation and we'll help you figure out the right design, budget, and timeline for your space.
        </motion.p>
      </div>

      {/* Image with button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative w-full h-[300px] md:h-[500px] lg:h-[700px] rounded-lg overflow-hidden"
      >
        <img
          src={ctaImage}
          alt="Interior design showcase"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <Link
          to="/contact"
          className="absolute bottom-6 right-6 md:bottom-10 md:right-10 bg-[#fff1e5] px-8 md:px-14 py-4 md:py-6 rounded-full font-['DM_Sans',sans-serif] text-[#0f0e0c] text-base md:text-2xl no-underline hover:bg-white transition-colors"
        >
          Book a Consultation
        </Link>
      </motion.div>
    </section>
  );
}