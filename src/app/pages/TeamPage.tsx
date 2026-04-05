import { useRef, useState, useCallback } from 'react';
import { motion } from 'motion/react';
import { HeroSection } from '../components/HeroSection';
import { FAQSection } from '../components/FAQSection';
import { Footer } from '../components/Footer';
import { cloudImg, projects } from '@/lib/cloudinary';
const imgRectangle64 = cloudImg(projects.woodlands436.hero, { w: 1920, h: 1080 });
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const teamMembers = [
  { name: 'Kason Koh', position: 'Director', img: 'https://static.wixstatic.com/media/1b4359_c366f63040fb4f8cae45ce4aa1bd5192~mv2.png/v1/fill/w_800,h_938,fp_0.51_0.16,q_90,enc_avif,quality_auto/F1.png' },
  { name: 'Anson Poon', position: 'Director', img: 'https://static.wixstatic.com/media/1b4359_7eed2322db264c549afa0d5e4bf99ec8~mv2.png/v1/fill/w_800,h_938,fp_0.49_0.19,q_90,enc_avif,quality_auto/F2.png' },
  { name: 'Daryl Lee', position: 'Assistant Director', img: 'https://static.wixstatic.com/media/1b4359_6b3410232b3646598621248cec875adf~mv2.png/v1/fill/w_800,h_938,fp_0.50_0.20,q_90,enc_avif,quality_auto/F3.png' },
];

export default function TeamPage() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const handlePlay = useCallback((index: number) => {
    // Pause all other videos
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
      }
    });

    const video = videoRefs.current[index];
    if (!video) return;

    if (video.paused) {
      // If this is the first play (thumbnail position) or video ended, start from beginning
      if (!video.dataset.hasPlayed || video.ended) {
        video.currentTime = 0;
        video.dataset.hasPlayed = 'true';
      }
      video.play();
      setPlayingIndex(index);
    } else {
      video.pause();
      setPlayingIndex(null);
    }
  }, []);

  return (
    <div className="bg-[#fff1e5]">
      {/* Hero */}
      <HeroSection
        backgroundImage={imgRectangle64}
        title={
          <div className="text-[#fff1e5] text-5xl sm:text-7xl md:text-9xl lg:text-[160px] leading-[1] capitalize">
            <span className="font-['DM_Sans',sans-serif] tracking-[-0.5px] md:tracking-[-1.5px]">Our </span>
            <span className="font-['Instrument_Serif',serif] italic">Team</span>
          </div>
        }
      />

      {/* Description */}
      <section className="bg-[#fff1e5] px-6 md:px-16 lg:px-24 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <p className="text-[#131714] text-3xl md:text-5xl lg:text-7xl leading-[1.2]">
              <span className="font-['Manrope',sans-serif]">The People Behind</span><br />
              <span className="font-['Instrument_Serif',serif]">Every Project</span>
            </p>
            <p className="font-['Raleway',sans-serif] text-[#6f7470] text-sm md:text-lg leading-[1.6] mt-6">
              We're a close-knit team of designers, project managers, who genuinely care about getting the details right.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <p className="font-['Raleway',sans-serif] text-[#6f7470] text-sm md:text-lg leading-[1.6]">
              At Sora Studios, every project is handled by people — not processes. Our designers bring years of hands-on experience across HDBs, condos, and landed properties, and they work directly with you from concept through to handover. No hand-offs between departments, no miscommunication.
            </p>
            <p className="font-['Raleway',sans-serif] text-[#6f7470] text-sm md:text-lg leading-[1.6] mt-6">
              Behind every design is a team that coordinates everything — materials, timelines, contractors, and quality checks. We keep things running smoothly so you don't have to chase anyone down or wonder what's happening next.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="bg-[#fff1e5] px-6 md:px-16 lg:px-24 pb-16 md:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-['DM_Sans',sans-serif] text-[#974200] text-2xl md:text-4xl mb-8 md:mb-12"
        >
          Directors
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
              className="flex flex-col"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="aspect-[4/5] overflow-hidden bg-[#d9d9d9]"
              >
                <ImageWithFallback
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="py-6">
                <p className="font-['Satoshi',sans-serif] text-[#974200] text-xl md:text-2xl lg:text-[28px] tracking-[-0.7px]">
                  {member.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Managers */}
      <section className="bg-[#fff1e5] px-6 md:px-16 lg:px-24 pb-16 md:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-['DM_Sans',sans-serif] text-[#974200] text-2xl md:text-4xl mb-8 md:mb-12"
        >
          Managers
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              name: 'At Sora Studios, every designer is trained, qualified, and rigorously assessed before handling your project.',
              video: 'https://kdlzxnkecdgqidxhtclm.supabase.co/storage/v1/object/public/videos/manager-video-1.mp4#t=5.5',
            },
            {
              name: 'This is Samantha, one of the people making sure your renovation stays on track. From detailed drawings to material specs.',
              video: 'https://kdlzxnkecdgqidxhtclm.supabase.co/storage/v1/object/public/videos/manager-video-2.mp4#t=3',
            },
            {
              name: 'Trust is everything when it comes to your home. At Sora Studio, Jackson guides every project from start to finish.',
              video: 'https://kdlzxnkecdgqidxhtclm.supabase.co/storage/v1/object/public/videos/manager-video-3.mp4#t=4',
            },
          ].map((manager, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col"
            >
              <div
                className="aspect-[9/16] overflow-hidden bg-[#0f0e0c] relative cursor-pointer group rounded-lg"
                onClick={() => handlePlay(i)}
              >
                <video
                  ref={(el) => { videoRefs.current[i] = el; }}
                  src={manager.video}
                  className="w-full h-full object-cover"
                  preload="metadata"
                  playsInline
                  onEnded={() => setPlayingIndex(null)}
                  onPause={() => { if (playingIndex === i) setPlayingIndex(null); }}
                />
                {/* Custom play/pause overlay */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${playingIndex === i ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#974200] flex items-center justify-center shadow-lg">
                    {playingIndex === i ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <rect x="6" y="4" width="4" height="16" rx="1" />
                        <rect x="14" y="4" width="4" height="16" rx="1" />
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
              <div className="py-6">
                <p className="font-['Satoshi',sans-serif] text-[#361e0f] text-sm md:text-base leading-[1.5] opacity-70">
                  {manager.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <FAQSection />
      <Footer />
    </div>
  );
}