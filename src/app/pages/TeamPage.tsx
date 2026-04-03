import { motion } from 'motion/react';
import { HeroSection } from '../components/HeroSection';
import { FAQSection } from '../components/FAQSection';
import { Footer } from '../components/Footer';
import { cloudImg, projects } from '@/lib/cloudinary';
const imgRectangle64 = cloudImg(projects.simsdr.hero, { w: 1280, h: 720 });
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const teamMembers = [
  { name: 'Sarah Mitchell', position: 'Creative Director', img: 'https://images.unsplash.com/photo-1697095098675-1d02496ef86a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGFyY2hpdGVjdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjY1NTU4Mnww&ixlib=rb-4.1.0&q=80&w=1080' },
  { name: 'James Carter', position: 'Lead Designer', img: 'https://images.unsplash.com/photo-1761522002071-67755dc6c820?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBkZXNpZ25lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjcyODUzN3ww&ixlib=rb-4.1.0&q=80&w=1080' },
  { name: 'Elena Rodriguez', position: 'Senior Architect', img: 'https://images.unsplash.com/photo-1767605769884-ae3e4653186e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGludGVyaW9yJTIwZGVzaWduZXIlMjBjcmVhdGl2ZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjcyODUzOHww&ixlib=rb-4.1.0&q=80&w=1080' },
  { name: 'Michael Chen', position: 'Project Manager', img: 'https://images.unsplash.com/photo-1769636929231-3cd7f853d038?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBzdWl0JTIwcG9ydHJhaXQlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzI3MTE0MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { name: 'Olivia Brown', position: 'Interior Stylist', img: 'https://images.unsplash.com/photo-1769636930016-5d9f0ca653aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHByb2Zlc3Npb25hbCUyMHdvbWFuJTIwaGVhZHNob3QlMjBzdHVkaW98ZW58MXx8fHwxNzcyNzI4NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { name: 'David Park', position: 'Design Consultant', img: 'https://images.unsplash.com/photo-1607167494912-a6153535f03e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMGRlc2lnbmVyJTIwaGVhZHNob3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzI3Mjg1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { name: 'Lisa Wang', position: 'Space Planner', img: 'https://images.unsplash.com/photo-1697095098675-1d02496ef86a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGFyY2hpdGVjdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjY1NTU4Mnww&ixlib=rb-4.1.0&q=80&w=1080' },
  { name: 'Ryan Adams', position: 'Furniture Designer', img: 'https://images.unsplash.com/photo-1761522002071-67755dc6c820?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBkZXNpZ25lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjcyODUzN3ww&ixlib=rb-4.1.0&q=80&w=1080' },
];

export default function TeamPage() {
  return (
    <div className="bg-[#fff1e5]">
      {/* Hero */}
      <HeroSection
        backgroundImage={imgRectangle64}
        title={
          <div className="text-[#fff1e5] text-5xl sm:text-7xl md:text-9xl lg:text-[160px] leading-[1] capitalize">
            <span className="font-['DM_Sans',sans-serif] tracking-[-1px] md:tracking-[-3px]">Our </span>
            <span className="font-['Instrument_Serif',serif] italic">Team</span>
          </div>
        }
        subtitle="We transform ideas into compelling designs that captivate and convert"
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
              <span className="font-['Manrope',sans-serif]">Lorem ipsum</span><br />
              <span className="font-['Instrument_Serif',serif]">Lorem ipsum dolor sit amet</span>
            </p>
            <p className="font-['Raleway',sans-serif] text-[#6f7470] text-sm md:text-lg leading-[1.6] mt-6">
              Ac volutpat et nulla ultricies convallis convallis sed. Sit nec risus sit nisl, quis in turpis gravida libero. At elit eu lacus, quam neque arcu euismod.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id at mauris dis tincidunt ipsum faucibus ipsum. At laoreet vivamus ultrices dolor vel nisl. Leo, ultrices enim vel feugiat lectus nisi, phasellus egestas.
            </p>
            <p className="font-['Raleway',sans-serif] text-[#6f7470] text-sm md:text-lg leading-[1.6] mt-6">
              Ac volutpat et nulla ultricies convallis convallis sed. Sit nec risus sit nisl, quis in turpis gravida libero. At elit eu lacus, quam neque arcu euismod. At id in auctor posuere eget. Convallis varius laoreet.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="bg-[#fff1e5] px-6 md:px-16 lg:px-24 pb-16 md:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
                className="h-[300px] md:h-[380px] overflow-hidden bg-[#d9d9d9]"
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
                <div className="flex items-center gap-2 mt-4">
                  <p className="font-['Satoshi',sans-serif] text-[#361e0f] opacity-60 text-sm md:text-base tracking-[-0.5px]">
                    {member.position}
                  </p>
                  <svg width="16" height="16" viewBox="0 0 16.4714 16.4714" fill="none">
                    <path d="M16.4714 0.666667C16.4714 0.298477 16.1729 0 15.8047 0H9.80474C9.43655 0 9.13807 0.298477 9.13807 0.666667C9.13807 1.03486 9.43655 1.33333 9.80474 1.33333H15.1381V6.66667C15.1381 7.03486 15.4365 7.33333 15.8047 7.33333C16.1729 7.33333 16.4714 7.03486 16.4714 6.66667V0.666667ZM0.471405 16L0.942809 16.4714L16.2761 1.13807L15.8047 0.666667L15.3333 0.195262L0 15.5286L0.471405 16Z" fill="#361E0F" />
                  </svg>
                </div>
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