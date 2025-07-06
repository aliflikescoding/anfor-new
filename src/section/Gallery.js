'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useHeader } from "@/context/HeaderContext";

const GalleryRow = () => (
  <div className="flex flex-wrap lg:flex-nowrap w-full lg:w-screen flex-shrink-0 h-auto lg:h-[500px]">
    {/* Kolom 1 */}
    <div className="flex flex-col justify-between px-4 w-full md:w-1/2 lg:w-[20%] h-auto lg:h-full mb-4 lg:mb-0">
      <div>
        <h2 className="font-inter italic font-bold text-[30px] md:text-[60px] lg:text-[100px] leading-[1] text-white text-center pb-4 md:pb-0">
          <span className="lg:hidden">ANFORCOM</span>
          <span className="hidden lg:inline-block">ANF<br />ORC<br />OM</span>
        </h2>
      </div>
      <div className="overflow-hidden rounded-[10px] w-full h-[100px] md:h-[130px] lg:h-[150px] group">
        <Image
          src="/images/gallery1.png"
          alt="Gallery 1"
          width={400}
          height={150}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
    </div>

    {/* Kolom 2 */}
    <div className="px-4 flex items-center justify-center w-full md:w-1/2 lg:w-[35%] h-auto lg:h-full mb-4 lg:mb-0">
      <div className="overflow-hidden rounded-[10px] w-full h-[200px] md:h-[300px] lg:h-full group">
        <Image
          src="/images/gallery2.png"
          alt="Gallery 2"
          width={600}
          height={500}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
    </div>

    {/* Kolom 3 */}
    <div className="flex flex-col justify-between px-4 text-white w-full md:w-1/2 lg:w-[20%] h-auto lg:h-full mb-4 lg:mb-0">
      <div className="overflow-hidden rounded-[10px] w-full h-[80px] md:h-[100px] lg:h-[100px] mb-2 group">
        <Image
          src="/images/gallery3.png"
          alt="Gallery 3"
          width={400}
          height={100}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="text-center">
        <h2 className="font-inter font-bold text-[30px] md:text-[60px] lg:text-[100px] leading-[1] mb-2 pt-4 md:pt-0">
          <span className="lg:hidden">GALLERY</span>
          <span className="hidden lg:inline-block">GAL<br />ERY</span>
        </h2>
        <p className="font-inter text-[14px] md:text-[15px] lg:text-[16px] leading-relaxed">
          Galeri ini merangkum semangat dan antusiasme <span className="font-bold">Anforcom 2024.</span> Setiap
          momen yang terekam menjadi bukti <span className="font-bold">kolaborasi, inovasi,</span> dan
          <span className="font-bold"> inspirasi</span> yang tercipta sepanjang rangkaian acara.
        </p>
      </div>
    </div>

    {/* Kolom 4 */}
    <div className="px-4 flex items-center justify-center w-full md:w-1/2 lg:w-[25%] h-auto lg:h-full">
      <div className="overflow-hidden rounded-[10px] w-full h-[180px] md:h-[300px] lg:h-[400px] group">
        <Image
          src="/images/gallery4.png"
          alt="Gallery 4"
          width={600}
          height={400}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
    </div>
  </div>
);

const GallerySection = () => {
  const { setIsSticky, setIsShowButton, setSection } = useHeader();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSticky(true);
          setIsShowButton(true);
          setSection("gallery");
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
  }, [setIsSticky, setIsShowButton, setSection]);

  return (
    <div ref={sectionRef} className="w-full overflow-hidden">
      {/* SECTION 1 */}
      <div className="bg-[#FDF4F2] min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          <p className="text-[15px] md:text-[25px] lg:text-[36px] font-semibold text-black font-inter">
            Powered by
          </p>
          <p className="text-[15px] md:text-[25px] lg:text-[36px] font-semibold font-inter text-black">
            Moments from <span className="text-[#FEB82F]">Anforcom 2024</span>, captured through real experiences
          </p>
          <p className="text-[15px] md:text-[25px] lg:text-[36px] font-semibold text-black font-inter">
            Snapshots of collaboration, innovation, and inspiration.
          </p>
        </motion.div>
      </div>

      {/* SECTION 2 */}
      <div className="bg-[#FEB82F] min-h-screen flex items-center overflow-hidden relative">
        {/* Desktop: scroll animation */}
        <div className="hidden lg:flex w-max animate-gallery-scroll">
          <GalleryRow />
          <GalleryRow />
        </div>

        {/* Mobile & Tablet: static */}
        <div className="block lg:hidden w-full my-8">
          <GalleryRow />
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
