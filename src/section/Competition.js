"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';

const AnforcomAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [accordionHeights, setAccordionHeights] = useState([]);
  const accordionRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const controls = useAnimation();

  const programs = [
    {
      id: 1,
      title: "DUC",
      description: "Ajang teknologi nasional untuk memicu inovasi, kompetisi, dan kolaborasi mahasiswa informatika masa depan.",
      image: "/images/duc.png"
    },
    {
      id: 2,
      title: "DLC",
      description: "Ajang teknologi nasional untuk memicu inovasi, kompetisi, dan kolaborasi mahasiswa informatika masa depan.",
      image: "/images/dlc.png"
    },
    {
      id: 3,
      title: "DDSC",
      description: "Ajang teknologi nasional untuk memicu inovasi, kompetisi, dan kolaborasi mahasiswa informatika masa depan.",
      image: "/images/ddsc.png"
    }
  ];

  // Animasi 
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const [hasAnimated, setHasAnimated] = useState(Array(programs.length).fill(false));

  const toggleAccordion = (index) => {
    setActiveIndex(index);
    setHasAnimated(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  useEffect(() => {
    const updateHeights = () => {
      const heights = accordionRefs.current.map(ref => ref?.offsetHeight || 0);
      setAccordionHeights(heights);
    };

    updateHeights();
    window.addEventListener('resize', updateHeights);

    return () => window.removeEventListener('resize', updateHeights);
  }, [activeIndex]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Variants animasi
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="min-h-screen bg-[#FDF4F2] px-4 py-10 sm:px-6 md:px-8 lg:px-4"
    >
      <div className="max-w-[1800px] mx-auto">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-0 relative"
          variants={containerVariants}
        >
          {/* Left Column - Accordion */}
          <div className="flex flex-col">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                ref={el => accordionRefs.current[index] = el}
                className={`relative border-b border-[#E9EAEB] ${activeIndex === index ? 'z-10' : ''}`}
                style={{ borderWidth: '1px' }}
                variants={itemVariants}
              >
                <div
                  className={`cursor-pointer transition-all duration-300 ${activeIndex === index ? 'pt-12 pb-6' : 'py-6'}`}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex flex-col items-center gap-2">
                    <motion.h3 
                      className="text-4xl md:text-6xl lg:text-[96px] font-bold text-[#020B0D] leading-none"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      whileHover={{ scale: 1.03 }}
                    >
                      {program.title}
                    </motion.h3>

                    {isMobile ? (
                      <AnimatePresence mode="wait">
                        {activeIndex === index && (
                          <motion.div
                            key={program.id}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="w-full overflow-hidden"
                          >
                            <motion.div 
                              className="pt-10 pb-5 md:pt-16 lg:pt-28 w-10 h-10 relative mx-auto"
                              initial={{ rotate: 0 }}
                              animate={{ 
                                rotate: hasAnimated[index] ? 0 : 360,
                                transition: { 
                                  duration: 1.5, 
                                  ease: "easeInOut",
                                  repeat: hasAnimated[index] ? 0 : 1,
                                  repeatType: "reverse"
                                } 
                              }}
                            >
                              <Image
                                src="/images/star.png"
                                alt="Star Icon"
                                width={40}
                                height={40}
                                className="object-contain"
                              />
                            </motion.div>
                            <motion.div 
                              className="pt-6 pb-10 text-center px-4"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.2 }}
                            >
                              <p className="text-[#020B0D] text-base md:text-lg max-w-md mx-auto">
                                {program.description}
                              </p>
                            </motion.div>
                            <motion.div 
                              className="pb-6 text-4xl md:text-6xl lg:text-[96px] font-bold text-[#020B0D] leading-none text-center" 
                              style={{ fontFamily: 'Inter, sans-serif' }}
                              initial={{ scale: 0.5 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring" }}
                            >
                              {index + 1}
                            </motion.div>
                            <motion.div 
                              className="block lg:hidden w-full mt-4 rounded-xl overflow-hidden"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 }}
                            >
                              <Image
                                src={program.image}
                                alt={program.title}
                                width={800}
                                height={500}
                                className="object-cover w-full h-auto"
                              />
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    ) : (
                      activeIndex === index && (
                        <>
                          <motion.div 
                            className="pt-28 pb-5 w-10 h-10 relative mx-auto"
                            initial={{ rotate: 0 }}
                            animate={{ 
                              rotate: hasAnimated[index] ? 0 : 360,
                              transition: { 
                                duration: 1.5, 
                                ease: "easeInOut",
                                repeat: hasAnimated[index] ? 0 : 1,
                                repeatType: "reverse"
                              } 
                            }}
                          >
                            <Image
                              src="/images/star.png"
                              alt="Star Icon"
                              width={40}
                              height={40}
                              className="object-contain"
                            />
                          </motion.div>
                          <motion.div 
                            className="pt-6 pb-10 text-center px-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            <p className="text-[#020B0D] text-base md:text-lg max-w-md mx-auto">
                              {program.description}
                            </p>
                          </motion.div>
                          <motion.div 
                            className="pb-6 text-4xl md:text-6xl lg:text-[96px] font-bold text-[#020B0D] leading-none text-center" 
                            style={{ fontFamily: 'Inter, sans-serif' }}
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring" }}
                          >
                            {index + 1}
                          </motion.div>
                        </>
                      )
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Image with Cropping Effect (desktop only) */}
          <div className="hidden lg:block h-full">
            <div className="flex flex-col h-full">
              {programs.map((program, index) => (
                <motion.div
                  key={program.id}
                  className="relative overflow-hidden transition-all duration-300"
                  style={{
                    height: accordionHeights[index] || 'auto'
                  }}
                  variants={imageVariants}
                >
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center' }}
                  />
                  {activeIndex !== index && (
                    <motion.div 
                      className="absolute inset-0 bg-black/20"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.2 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AnforcomAccordion;