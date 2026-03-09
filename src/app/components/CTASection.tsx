import { Link } from 'react-router';
import { motion } from 'motion/react';

const ctaImage = "https://images.unsplash.com/photo-1681310483042-64aa6776f112?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbW9vZHklMjBpbnRlcmlvciUyMGRlc2lnbiUyMHNob3djYXNlfGVufDF8fHx8MTc3MjcyODU0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

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
            <span className="font-['DM_Sans',sans-serif] tracking-[-0.5px] md:tracking-[-1.28px]">Ready to </span>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper diam velit, a aliquam lorem congue sed. Donec ultricies purus dolor, sed semper quam ornare vitae.
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
        />
        <Link
          to="/contact"
          className="absolute bottom-6 right-6 md:bottom-10 md:right-10 bg-[#fff1e5] px-8 md:px-14 py-4 md:py-6 rounded-full font-['DM_Sans',sans-serif] text-[#0f0e0c] text-base md:text-2xl no-underline hover:bg-white transition-colors"
        >
          Schedule Your Consultation
        </Link>
      </motion.div>
    </section>
  );
}