'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useHeader } from "@/context/HeaderContext";

const TeaserSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const YOUTUBE_ID = 'rsWR64xHXQk';

  const { setIsSticky, setIsShowButton, setSection } = useHeader();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSticky(true);
          setIsShowButton(true);
          setSection("rundown");
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

  const bounceVariant = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: {
      duration: 0.8,
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  };

  return (
    <div id= "teaser" ref={sectionRef}>
      {/* JUDUL */}
      <section className="bg-[#FDF4F2] min-h-screen flex items-center justify-center px-4">
        <motion.div
          variants={bounceVariant}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-[18px] md:text-[30px] lg:text-[55px] font-semibold font-inter text-black leading-tight">
            Mulai Perjalananmu di{' '}
            <span className="text-[#FEB82F]">Anforcom 2025</span>:
          </p>
          <p className="text-[18px] md:text-[30px] lg:text-[55px] font-semibold text-black font-inter">
            Lihat Teaser & Panduan Pendaftaran.
          </p>
        </motion.div>
      </section>

      {/* VIDEO + IMAGE */}
      <section id= "teaser-video "className="bg-[#FDF4F2] min-h-screen grid grid-cols-1 md:grid-cols-2 w-full">
        {/* KIRI: VIDEO */}
        <motion.div
          variants={bounceVariant}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="relative w-full h-[300px] md:h-auto group overflow-hidden"
        >
          {isPlaying ? (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1`}
              title="Teaser Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div
              className="w-full h-full relative cursor-pointer"
              onClick={() => setIsPlaying(true)}
            >
              <img
                src="/images/teaser-thumbnail.jpg"
                alt="Teaser Thumbnail"
                className="w-full h-full object-cover"
              />
              {/* OVERLAY + PLAY */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex items-center justify-center">
                <div
                  className="text-white text-center 
                    opacity-100 md:opacity-0 
                    md:group-hover:opacity-100 
                    transition-opacity duration-300"
                >
                  <Image
                    src="/images/play.png"
                    alt="Play"
                    width={100}
                    height={100}
                    className="mx-auto mb-2"
                  />
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* KANAN: GAMBAR */}
        <motion.div
          variants={bounceVariant}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="relative w-full h-[300px] sm:h-[350px] md:h-auto min-h-full"
        >
          <Image
            src="/images/gitar.png"
            alt="Gitar"
            fill
            className="object-cover"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default TeaserSection;
