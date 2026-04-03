import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { Footer } from '../components/Footer';
import { CTASection } from '../components/CTASection';
import { supabase } from '@/lib/supabase';
import type { Database } from '@/lib/database.types';

type Project = Database['public']['Tables']['projects']['Row'];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.6 },
};

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProject() {
      setLoading(true);
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('slug', slug!)
        .single();

      if (!error && data) {
        setProject(data);
      }
      setLoading(false);
    }
    if (slug) fetchProject();
  }, [slug]);

  if (loading) {
    return (
      <div className="bg-[#fff1e5] min-h-screen flex items-center justify-center">
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="font-['DM_Sans',sans-serif] text-[#974200] text-2xl"
        >
          Loading...
        </motion.div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="bg-[#fff1e5] min-h-screen flex flex-col items-center justify-center gap-6">
        <p className="font-['DM_Sans',sans-serif] text-[#974200] text-4xl">Project not found</p>
        <Link
          to="/projects"
          className="bg-[#974200] text-white px-8 py-4 rounded-full font-['Satoshi',sans-serif] text-sm tracking-[1.8px] uppercase no-underline hover:bg-[#7a3600] transition-colors"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  const allImages = [project.hero_image, ...project.images];

  return (
    <div className="bg-[#fff1e5]">
      {/* Hero */}
      <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden">
        <motion.img
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          src={project.hero_image}
          alt={project.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c]/70 via-transparent to-[#0f0e0c]/40" />


        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-16 pb-10 md:pb-16">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-['Satoshi',sans-serif] text-[#fff1e5]/60 text-sm tracking-[1.8px] uppercase mb-3"
          >
            Interior Design Project
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[#fff1e5] text-4xl sm:text-6xl md:text-8xl leading-[1]"
          >
            <span className="font-['DM_Sans',sans-serif] tracking-[-1px] md:tracking-[-2px]">{project.name}</span>
          </motion.h1>
        </div>
      </div>


      {/* Gallery Grid */}
      <section className="px-6 md:px-16 pt-12 md:pt-20 pb-16 md:pb-24">
        <motion.p
          {...fadeInUp}
          className="font-['Satoshi',sans-serif] text-[#361e0f]/50 text-xs tracking-[1.8px] uppercase mb-8"
        >
          Project Gallery
        </motion.p>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6">
          {allImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="mb-4 md:mb-6 break-inside-avoid cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <img
                  src={img}
                  alt={`${project.name} - Photo ${i + 1}`}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-8 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 5L5 15M5 5L15 15" stroke="#FFF1E5" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            src={selectedImage}
            alt={project.name}
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}

      <CTASection />
      <Footer />
    </div>
  );
}
