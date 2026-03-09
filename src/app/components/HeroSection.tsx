import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface HeroSectionProps {
  title: ReactNode;
  subtitle?: string;
  backgroundImage: string;
}

export function HeroSection({ title, subtitle, backgroundImage }: HeroSectionProps) {
  return (
    <section className="relative min-h-[50vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/27" />
      </div>

      {/* Gradient overlay top */}
      <div className="absolute top-0 left-0 right-0 h-[300px] md:h-[500px] bg-gradient-to-b from-[#0f0e0c] via-[#0f0e0c]/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 pt-20 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {title}
        </motion.div>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-['Poppins',sans-serif] text-[#fff1e5] opacity-50 text-base md:text-2xl mt-4 md:mt-8"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
