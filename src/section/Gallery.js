'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useHeader } from "@/context/HeaderContext";

const GallerySection = () => {
  const { setIsSticky, setIsShowButton } = useHeader();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSticky(true);
          setIsShowButton(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [setIsSticky]);

  return (
    <div ref={sectionRef} className="bg-[#FDF4F2] min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center"
      >
        <p className="text-[15px] md:text-[25px] lg:text[36px] font-semibold text-black font-inter">
          Powered by
        </p>
        <p className="text-[15px] md:text-[25px] lg:text[36px] font-semibold font-inter text-black">
          Moments from{' '}
          <span className="text-[#FEB82F]">Anforcom 2024</span>, captured through real experiences
        </p>
        <p className="text-[15px] md:text-[25px] lg:text[36px] font-semibold text-black font-inter">
          Snapshots of collaboration, innovation, and inspiration.
        </p>
      </motion.div>
    </div>
  );
};

export default GallerySection;
