import { Link } from 'react-router';
import { motion } from 'motion/react';
import imgLogo from "@/assets/aa188101b5fbbac719eb441e4b9accb610458b0c.png";

export function Footer() {
  return (
    <footer className="bg-[#26221f] relative overflow-hidden">
      {/* Background text */}
      <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-['DM_Sans',sans-serif] text-[200px] md:text-[500px] lg:text-[776px] text-transparent bg-clip-text bg-gradient-to-b from-[#e8e6de] to-transparent opacity-[0.04] whitespace-nowrap tracking-[-20px] md:tracking-[-38px] leading-none select-none pointer-events-none">
        Sora
      </p>

      <div className="relative z-10 px-6 md:px-20 py-16 md:py-20 flex flex-col gap-16 md:gap-32">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div className="flex flex-col gap-8 max-w-[429px]">
            <p className="font-['DM_Sans',sans-serif] text-[#e8e6de] text-3xl md:text-[42px] leading-none tracking-[-0.3px] md:tracking-[-0.84px]">
              Ready To Build Your Dream Project?
            </p>
            <Link
              to="/contact"
              className="bg-[#fff1e5] inline-flex items-center justify-center h-12 px-6 rounded-full font-['Satoshi',sans-serif] text-[#111312] text-xs tracking-[1.8px] uppercase no-underline hover:bg-white transition-colors w-fit"
            >
              Set A Meet
            </Link>
          </div>

          <div className="flex gap-16 md:gap-20 text-[#e8e6de]">
            <div className="flex flex-col gap-5">
              <p className="font-['Satoshi',sans-serif] opacity-60 text-sm tracking-[-0.28px]">Company</p>
              <Link to="/about" className="font-['Satoshi',sans-serif] text-xl md:text-[28px] tracking-[-0.56px] text-[#e8e6de] no-underline hover:opacity-80 transition-opacity">About</Link>
              <Link to="/" className="font-['Satoshi',sans-serif] text-xl md:text-[28px] tracking-[-0.56px] text-[#e8e6de] no-underline hover:opacity-80 transition-opacity">Home</Link>
              <Link to="/contact" className="font-['Satoshi',sans-serif] text-xl md:text-[28px] tracking-[-0.56px] text-[#e8e6de] no-underline hover:opacity-80 transition-opacity">Contact</Link>
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-['Satoshi',sans-serif] opacity-60 text-sm tracking-[-0.28px]">Pages</p>
              <p className="font-['Satoshi',sans-serif] text-xl md:text-[28px] tracking-[-0.56px] cursor-pointer hover:opacity-80 transition-opacity">TnC</p>
              <p className="font-['Satoshi',sans-serif] text-xl md:text-[28px] tracking-[-0.56px] cursor-pointer hover:opacity-80 transition-opacity">Policy</p>
              <p className="font-['Satoshi',sans-serif] text-xl md:text-[28px] tracking-[-0.56px] cursor-pointer hover:opacity-80 transition-opacity">FAQ</p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex flex-col gap-6 md:gap-12">
            <div className="h-[50px] md:h-[60px] w-[160px] md:w-[202px] relative overflow-hidden">
              <img
                src={imgLogo}
                alt="Sora Studios"
                className="absolute h-[346.67%] left-[-13.9%] top-[-128.33%] w-[102.97%] max-w-none object-cover"
              />
            </div>
            <p className="font-['Satoshi',sans-serif] text-[13px] text-white opacity-80 leading-[1.7] tracking-[-0.26px] max-w-[223px]">
              We encourage clients to actively participate in discussions, share their ideas, preferences, and feedback.
            </p>
          </div>

          <div className="font-['Satoshi',sans-serif] text-[#e8e6de] text-lg md:text-xl tracking-[-0.4px] leading-[1.4]">
            <p className="mb-0">70 University Ave</p>
            <p className="mb-6">Palo Alto, CA 94301</p>
            <p>21340549</p>
          </div>
        </div>
      </div>
    </footer>
  );
}