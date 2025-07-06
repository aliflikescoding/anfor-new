"use client";

import React, { useState, useRef, useEffect } from "react";
import { useHeader } from "@/context/HeaderContext";
import Image from "next/image";
import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
} from "framer-motion";

const CompetitionSection = () => {
  const { setIsSticky, setIsShowButton } = useHeader();
  const [activeIndex, setActiveIndex] = useState(0);
  const [accordionHeights, setAccordionHeights] = useState([]);
  const accordionRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const controls = useAnimation();

  // Scroll trap state
  const [isScrollTrapped, setIsScrollTrapped] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const lastScrollY = useRef(0);
  const scrollBuffer = useRef(0);

  const programs = [
    {
      id: 1,
      title: "DUC",
      description:
        "Ajang teknologi nasional untuk memicu inovasi, kompetisi, dan kolaborasi mahasiswa informatika masa depan.",
      image: "/images/duc.png",
    },
    {
      id: 2,
      title: "DLC",
      description:
        "Ajang teknologi nasional untuk memicu inovasi, kompetisi, dan kolaborasi mahasiswa informatika masa depan.",
      image: "/images/dlc.png",
    },
    {
      id: 3,
      title: "DDSC",
      description:
        "Ajang teknologi nasional untuk memicu inovasi, kompetisi, dan kolaborasi mahasiswa informatika masa depan.",
      image: "/images/ddsc.png",
    },
  ];

  // Animasi - DISABLED
  // useEffect(() => {
  //   if (isInView) {
  //     controls.start("visible");
  //   }
  // }, [isInView, controls]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSticky(true); // or false, depending on your desired header behavior
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
  }, []);

  const [hasAnimated, setHasAnimated] = useState(
    Array(programs.length).fill(false)
  );

  const toggleAccordion = (index) => {
    setActiveIndex(index);
    setHasAnimated((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  // Scroll trap logic
  useEffect(() => {
    const handleScroll = (e) => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;
      const windowHeight = window.innerHeight;

      // Check if section is in viewport
      const isInViewport = sectionTop < windowHeight && sectionBottom > 0;

      if (isInViewport && !isScrollTrapped) {
        // Start trapping when section enters viewport
        setIsScrollTrapped(true);
        document.body.style.overflow = "hidden";
        lastScrollY.current = window.scrollY;
        scrollBuffer.current = 0;
        return;
      }

      if (isScrollTrapped) {
        e.preventDefault();

        const delta = e.deltaY || (e.detail && e.detail * 40) || 0;
        scrollBuffer.current += delta;

        // Threshold for changing slides (adjust this value to make it more/less sensitive)
        const threshold = 100;

        if (Math.abs(scrollBuffer.current) > threshold) {
          const direction = scrollBuffer.current > 0 ? 1 : -1;
          const newIndex = Math.max(
            0,
            Math.min(programs.length - 1, activeIndex + direction)
          );

          if (newIndex !== activeIndex) {
            setActiveIndex(newIndex);
            setHasAnimated((prev) => {
              const newState = [...prev];
              newState[newIndex] = true;
              return newState;
            });
          }

          // If we've reached the end and user is scrolling down, or at beginning and scrolling up
          if (
            (newIndex === programs.length - 1 && direction > 0) ||
            (newIndex === 0 && direction < 0)
          ) {
            // Release the trap
            setIsScrollTrapped(false);
            document.body.style.overflow = "auto";

            // If at the end, allow normal scrolling to continue
            if (newIndex === programs.length - 1 && direction > 0) {
              window.scrollTo(0, lastScrollY.current + rect.height);
            }
          }

          scrollBuffer.current = 0;
        }
      }
    };

    const handleWheel = (e) => {
      if (isScrollTrapped) {
        e.preventDefault();
        handleScroll(e);
      }
    };

    const handleKeyDown = (e) => {
      if (isScrollTrapped) {
        if (e.key === "ArrowDown" || e.key === "PageDown") {
          e.preventDefault();
          const newIndex = Math.min(programs.length - 1, activeIndex + 1);
          if (newIndex !== activeIndex) {
            setActiveIndex(newIndex);
            setHasAnimated((prev) => {
              const newState = [...prev];
              newState[newIndex] = true;
              return newState;
            });
          } else if (newIndex === programs.length - 1) {
            // Release trap at the end
            setIsScrollTrapped(false);
            document.body.style.overflow = "auto";
          }
        } else if (e.key === "ArrowUp" || e.key === "PageUp") {
          e.preventDefault();
          const newIndex = Math.max(0, activeIndex - 1);
          if (newIndex !== activeIndex) {
            setActiveIndex(newIndex);
            setHasAnimated((prev) => {
              const newState = [...prev];
              newState[newIndex] = true;
              return newState;
            });
          } else if (newIndex === 0) {
            // Release trap at the beginning
            setIsScrollTrapped(false);
            document.body.style.overflow = "auto";
          }
        }
      }
    };

    // Add event listeners
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto"; // Ensure body overflow is restored
    };
  }, [isScrollTrapped, activeIndex, programs.length]);

  // Intersection Observer to detect when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            // Section is prominently in view, start trapping
            if (!isScrollTrapped) {
              setIsScrollTrapped(true);
              document.body.style.overflow = "hidden";
              lastScrollY.current = window.scrollY;
              scrollBuffer.current = 0;
            }
          } else if (!entry.isIntersecting && isScrollTrapped) {
            // Section is out of view, release trap
            setIsScrollTrapped(false);
            document.body.style.overflow = "auto";
          }
        });
      },
      { threshold: [0.5] }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      document.body.style.overflow = "auto";
    };
  }, [isScrollTrapped]);

  useEffect(() => {
    const updateHeights = () => {
      const heights = accordionRefs.current.map(
        (ref) => ref?.offsetHeight || 0
      );
      setAccordionHeights(heights);
    };

    updateHeights();
    window.addEventListener("resize", updateHeights);

    return () => window.removeEventListener("resize", updateHeights);
  }, [activeIndex]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Variants animasi - DISABLED (now static)
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0,
        delayChildren: 0,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 0, opacity: 1 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 1, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={sectionRef}
      initial="visible"
      animate="visible"
      variants={containerVariants}
      className="bg-[#FDF4F2] px-4 py-10 sm:px-6 md:px-8 lg:px-4 relative"
      style={{ height: "120vh" }}
    >
      {/* Scroll indicator */}
      {isScrollTrapped && (
        <div className="fixed top-4 right-4 z-50 bg-white/80 backdrop-blur-sm rounded-full p-2">
          <div className="text-xs text-gray-600">
            {activeIndex + 1} / {programs.length}
          </div>
        </div>
      )}

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
                ref={(el) => (accordionRefs.current[index] = el)}
                className={`relative border-b border-[#E9EAEB] ${
                  activeIndex === index ? "z-10" : ""
                }`}
                style={{ borderWidth: "1px" }}
                variants={itemVariants}
              >
                <div
                  className={`cursor-pointer transition-all duration-300 ${
                    activeIndex === index ? "pt-12 pb-6" : "py-6"
                  }`}
                  onClick={() => !isScrollTrapped && toggleAccordion(index)}
                >
                  <div className="flex flex-col items-center gap-2">
                    <h3
                      className="text-4xl md:text-6xl lg:text-[96px] font-bold text-[#020B0D] leading-none hover:scale-105 transition-transform"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {program.title}
                    </h3>

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
                            <div className="pt-10 pb-5 md:pt-16 lg:pt-28 w-10 h-10 relative mx-auto">
                              <Image
                                src="/images/star.png"
                                alt="Star Icon"
                                width={40}
                                height={40}
                                className="object-contain"
                              />
                            </div>
                            <div className="pt-6 pb-10 text-center px-4">
                              <p className="text-[#020B0D] text-base md:text-lg max-w-md mx-auto">
                                {program.description}
                              </p>
                            </div>
                            <div
                              className="pb-6 text-4xl md:text-6xl lg:text-[96px] font-bold text-[#020B0D] leading-none text-center"
                              style={{ fontFamily: "Inter, sans-serif" }}
                            >
                              {index + 1}
                            </div>
                            <div className="block lg:hidden w-full mt-4 rounded-xl overflow-hidden">
                              <Image
                                src={program.image}
                                alt={program.title}
                                width={800}
                                height={500}
                                className="object-cover w-full h-auto"
                              />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    ) : (
                      activeIndex === index && (
                        <>
                          <div className="pt-28 pb-5 w-10 h-10 relative mx-auto">
                            <Image
                              src="/images/star.png"
                              alt="Star Icon"
                              width={40}
                              height={40}
                              className="object-contain"
                            />
                          </div>
                          <div className="pt-6 pb-10 text-center px-4">
                            <p className="text-[#020B0D] text-base md:text-lg max-w-md mx-auto">
                              {program.description}
                            </p>
                          </div>
                          <div
                            className="pb-6 text-4xl md:text-6xl lg:text-[96px] font-bold text-[#020B0D] leading-none text-center"
                            style={{ fontFamily: "Inter, sans-serif" }}
                          >
                            {index + 1}
                          </div>
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
                    height: accordionHeights[index] || "auto",
                  }}
                  variants={imageVariants}
                >
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                    style={{ objectPosition: "center" }}
                  />
                  {activeIndex !== index && (
                    <div className="absolute inset-0 bg-black/20" />
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

export default CompetitionSection;
