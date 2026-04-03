import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import imgLogo from '@/assets/aa188101b5fbbac719eb441e4b9accb610458b0c.png';

interface PageLoaderProps {
  children: React.ReactNode;
  locationKey: string | undefined;
}

export function PageLoader({ children, locationKey }: PageLoaderProps) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const preloadImages = useCallback(() => {
    setLoading(true);
    setProgress(0);

    // Wait a tick for the page to render so we can find all images
    requestAnimationFrame(() => {
      const images = Array.from(document.querySelectorAll('main img')) as HTMLImageElement[];
      // Only preload above-the-fold / eager images, skip lazy ones beyond first few
      const priorityImages = images.filter((img, i) => i < 6 || img.loading !== 'lazy');

      if (priorityImages.length === 0) {
        setProgress(100);
        setTimeout(() => setLoading(false), 300);
        return;
      }

      let loaded = 0;
      const total = priorityImages.length;
      const timeout = setTimeout(() => {
        // Safety timeout — reveal page after 4s max
        setProgress(100);
        setLoading(false);
      }, 4000);

      const onLoad = () => {
        loaded++;
        setProgress(Math.round((loaded / total) * 100));
        if (loaded >= total) {
          clearTimeout(timeout);
          setTimeout(() => setLoading(false), 200);
        }
      };

      priorityImages.forEach((img) => {
        if (img.complete && img.naturalHeight > 0) {
          onLoad();
        } else {
          img.addEventListener('load', onLoad, { once: true });
          img.addEventListener('error', onLoad, { once: true });
        }
      });
    });
  }, []);

  useEffect(() => {
    preloadImages();
  }, [locationKey, preloadImages]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 z-[100] bg-[#fff1e5] flex flex-col items-center justify-center gap-8"
          >
            {/* Logo */}
            <motion.img
              src={imgLogo}
              alt="Sora Studios"
              className="w-[140px] md:w-[180px] h-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />

            {/* Progress bar */}
            <div className="w-48 md:w-64 h-[2px] bg-[#974200]/15 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#974200] rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page content — always rendered but hidden behind loader */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {children}
      </motion.div>
    </>
  );
}
