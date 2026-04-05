import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { HeroSection } from '../components/HeroSection';
import { CTASection } from '../components/CTASection';
import { FAQSection } from '../components/FAQSection';
import { Footer } from '../components/Footer';
import { supabase } from '@/lib/supabase';
import { cloudImg, projects } from '@/lib/cloudinary';
import type { Database } from '@/lib/database.types';

type Project = Database['public']['Tables']['projects']['Row'];

const arrowSvg = (
  <svg width="16" height="16" viewBox="0 0 16.4714 16.4714" fill="none">
    <path d="M16.4714 0.666667C16.4714 0.298477 16.1729 0 15.8047 0H9.80474C9.43655 0 9.13807 0.298477 9.13807 0.666667C9.13807 1.03486 9.43655 1.33333 9.80474 1.33333H15.1381V6.66667C15.1381 7.03486 15.4365 7.33333 15.8047 7.33333C16.1729 7.33333 16.4714 7.03486 16.4714 6.66667V0.666667ZM0.471405 16L0.942809 16.4714L16.2761 1.13807L15.8047 0.666667L15.3333 0.195262L0 15.5286L0.471405 16Z" fill="#361E0F" />
  </svg>
);

// Layout pattern for the masonry grid
const layoutPattern = [
  // Row 1: 3 columns
  { width: 'md:w-1/3', height: 'h-[250px] md:h-[300px]', offset: '' },
  { width: 'md:w-1/3', height: 'h-[250px] md:h-[350px]', offset: 'md:mt-16' },
  { width: 'md:w-1/3', height: 'h-[250px] md:h-[300px]', offset: '' },
  // Row 2: 2 columns
  { width: 'md:w-1/2', height: 'h-[250px] md:h-[400px]', offset: '' },
  { width: 'md:w-1/2', height: 'h-[250px] md:h-[400px]', offset: '' },
];

function ProjectCard({ project, layout, delay }: { project: Project; layout: typeof layoutPattern[0]; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`${layout.width} ${layout.offset}`}
    >
      <Link to={`/projects/${project.slug}`} className="block no-underline group">
        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className={`${layout.height} overflow-hidden`}>
          <img src={project.hero_image} alt={project.name} className="w-full h-full object-cover" loading="lazy" />
        </motion.div>
        <div className="py-5">
          <p className="font-['Satoshi',sans-serif] text-[#974200] text-xl md:text-2xl tracking-[-0.7px] group-hover:opacity-80 transition-opacity">{project.name}</p>
          <div className="flex items-center gap-2 mt-3">
            <p className="font-['Satoshi',sans-serif] text-[#361e0f] opacity-60 text-sm tracking-[-0.5px]">View Details</p>
            {arrowSvg}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const [allProjects, setAllProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const { data } = await supabase
        .from('projects')
        .select('*')
        .order('display_order');
      if (data) setAllProjects(data);
    }
    fetchProjects();
  }, []);

  const heroImg = cloudImg(projects.tengah.hero, { w: 1920, h: 1080 });

  // Split projects into rows
  const row1 = allProjects.slice(0, 3);
  const row2 = allProjects.slice(3, 5);
  const remaining = allProjects.slice(5);

  return (
    <div className="bg-[#fff1e5]">
      {/* Hero */}
      <HeroSection
        backgroundImage={heroImg}
        title={
          <div className="text-[#fff1e5] text-5xl sm:text-7xl md:text-9xl lg:text-[160px] leading-[1] capitalize">
            <span className="font-['DM_Sans',sans-serif] tracking-[-0.5px] md:tracking-[-1.5px]">Our </span>
            <span className="font-['Instrument_Serif',serif] italic">Projects</span>
          </div>
        }
      />

      {/* Projects Grid - Masonry style */}
      <section className="bg-[#fff1e5] px-6 md:px-16 lg:px-24 py-16 md:py-24">
        {/* Row 1: 3 columns */}
        {row1.length > 0 && (
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-6 md:mb-8">
            {row1.map((p, i) => (
              <ProjectCard key={p.id} project={p} layout={layoutPattern[i]} delay={i * 0.1} />
            ))}
          </div>
        )}

        {/* Row 2: 2 columns */}
        {row2.length > 0 && (
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-6 md:mb-8">
            {row2.map((p, i) => (
              <ProjectCard key={p.id} project={p} layout={layoutPattern[3 + i]} delay={i * 0.1} />
            ))}
          </div>
        )}

        {/* Remaining: 3-column grid */}
        {remaining.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {remaining.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              >
                <Link to={`/projects/${p.slug}`} className="block no-underline group">
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="h-[250px] md:h-[350px] overflow-hidden">
                    <img src={p.hero_image} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
                  </motion.div>
                  <div className="py-5">
                    <p className="font-['Satoshi',sans-serif] text-[#974200] text-xl md:text-2xl tracking-[-0.7px] group-hover:opacity-80 transition-opacity">{p.name}</p>
                    <div className="flex items-center gap-2 mt-3">
                      <p className="font-['Satoshi',sans-serif] text-[#361e0f] opacity-60 text-sm tracking-[-0.5px]">View Details</p>
                      {arrowSvg}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      <CTASection />
      <FAQSection />
      <Footer />
    </div>
  );
}
