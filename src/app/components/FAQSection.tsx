import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What services does Sora offer?',
    answer: 'At Sora we offer a full range of interior design services, including residential and commercial design, space planning, color consultation, furniture selection, and project management.',
  },
  { question: 'How does the design process work?', answer: 'Our design process begins with an initial consultation to understand your vision, followed by concept development, detailed design plans, and finally, project execution with regular check-ins.' },
  { question: 'Can Sora work within my budget?', answer: 'Absolutely! We work with a wide range of budgets and will tailor our services to meet your financial needs while still delivering exceptional design solutions.' },
  { question: 'How long does a typical project take?', answer: 'Project timelines vary based on scope and complexity. A single room redesign may take 4-6 weeks, while a full home renovation can take 3-6 months.' },
  { question: 'Do you provide virtual design services?', answer: 'Yes, we offer virtual design consultations and services for clients who prefer remote collaboration or are located outside our immediate service area.' },
  { question: 'Can you work with my existing furniture and decor?', answer: 'Of course! We love incorporating existing pieces that have sentimental value or fit your style. We will blend them seamlessly into the new design.' },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="bg-[#1c1815] relative overflow-hidden py-16 md:py-20 px-6 md:px-20">
      {/* Background text */}
      <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-['Inter_Display',sans-serif] text-[200px] md:text-[400px] lg:text-[510px] text-transparent bg-clip-text bg-gradient-to-b from-[#e8e6de] to-transparent opacity-[0.04] whitespace-nowrap tracking-[-15px] md:tracking-[-25px] leading-none select-none pointer-events-none">
        FAQ
      </p>

      <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-16 items-end">
        {/* Still have a question */}
        <div className="bg-[#26221f] p-8 md:p-12 flex flex-col gap-8 shrink-0 w-full lg:w-auto">
          <p className="font-['DM_Sans',sans-serif] text-[#e8e6de] text-3xl md:text-[52px] leading-[1.1] tracking-[-0.5px] md:tracking-[-0.5px] max-w-[273px]">
            Still Have A Question?
          </p>
          <a href="/contact" className="bg-[#fff1e5] h-12 px-6 rounded-full font-['Satoshi',sans-serif] text-[#111312] text-xs tracking-[1.8px] uppercase opacity-90 hover:opacity-100 transition-opacity w-fit inline-flex items-center no-underline">
            Book a Consultation
          </a>
        </div>

        {/* FAQ list */}
        <div className="flex-1 w-full">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="border-b border-[rgba(232,230,222,0.1)] cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            >
              <div className="flex items-center justify-between py-6 md:py-8 px-4 md:px-6">
                <p className="font-['DM_Sans',sans-serif] text-[#e8e6de] text-xl md:text-2xl lg:text-[32px] tracking-[-0.3px] md:tracking-[-0.64px]">
                  {faq.question}
                </p>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-[#e8e6de] opacity-60 shrink-0 ml-4" size={24} />
                </motion.div>
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="font-['Satoshi',sans-serif] text-[#e8e6de] opacity-60 text-sm tracking-[-0.28px] px-4 md:px-6 pb-6">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}