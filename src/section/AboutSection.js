"use client";

import React, { useEffect, useRef, useState } from "react";
import { IoPlayCircleOutline } from "react-icons/io5";
import { useHeader } from "@/context/HeaderContext";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const AboutSection = () => {
  const { setIsSticky, setIsShowButton, isShowButton, setSection } =
    useHeader();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.4 });

  const [isGalleryActive, setIsGalleryActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsSticky(true);
    setIsShowButton(false);
    setSection("about");
    setIsGalleryActive(isInView);
  }, [isInView]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Positions for mobile view when gallery is active
  const mobileActivePositions = [
    { top: "45%", left: "20%" },  // Image 1
    { top: "65%", left: "23%" },  // Image 2 (with gap)
    { top: "75%", left: "25%" },  // Image 3
    { top: "83%", left: "25%" }  // Image 4
  ];

  return (
    <div
      ref={sectionRef}
      className="custom-container pt-[30vh] pb-[60vh] relative overflow-visible min-h-[200vh] lg:min-h-[150vh]"
    >
      {/* Konten utama */}
      <div className="flex flex-col items-center justify-between text-center relative z-10">
        <h1 className="text-5xl capitalize font-semibold">tentang anforcom</h1>
        <p className="text-md my-4">
          Ajang teknologi nasional untuk memicu inovasi, kompetisi, <br /> dan
          kolaborasi mahasiswa informatika masa depan.
        </p>

        <button
          className="mb-8 text-md flex items-center gap-2 hover:underline"
          onClick={() => scrollToSection("teaser")}
        >
          <p>Teaser Video</p> <IoPlayCircleOutline />
        </button>

        {!isShowButton && (
          <div className="flex items-center justify-center flex-wrap gap-4">
            <button className="btn btn-custom bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300" onClick={() => scrollToSection("event")}>
              Event 🗓️
            </button>
            <button className="btn btn-custom text-white hover:text-white" style={{ backgroundColor: "#FEB82F" }} onClick={() => scrollToSection("home")}>
              Home 🏠
            </button>
            <button className="btn btn-custom bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300" onClick={() => scrollToSection("competition")}>
              Competition 🏆
            </button>
          </div>
        )}
// <<<<<<< novia
// =======

//         {/* Responsive red background decorative elements */}
//         <div
//           className="bg-red-100 absolute rounded-2xl z-[-10] 
//           w-[120px] h-[140px] left-[5%] top-[45%]
//           sm:w-[150px] sm:h-[180px] sm:left-[8%] sm:top-[45%]
//           md:w-[180px] md:h-[220px] md:left-[12%] md:top-[45%]
//           lg:w-[211px] lg:h-[251px] lg:left-[15%] lg:top-[45%]"
//         ></div>

//         <div
//           className="bg-red-400 absolute rounded-2xl z-[-10] 
//           w-[110px] h-[70px] left-[70%] top-[110%]
//           sm:w-[140px] sm:h-[85px] sm:left-[68%] sm:top-[110%]
//           md:w-[170px] md:h-[105px] md:left-[65%] md:top-[110%]
//           lg:w-[196px] lg:h-[123px] lg:left-[62%] lg:top-[110%]"
//         ></div>

//         <div
//           className="bg-red-300 absolute rounded-2xl z-[-30] 
//           w-[80px] h-[60px] left-[25%] top-[82.5%]
//           sm:w-[95px] sm:h-[70px] sm:left-[27%] sm:top-[82.5%]
//           md:w-[115px] md:h-[82px] md:left-[28%] md:top-[82.5%]
//           lg:w-[132px] lg:h-[94px] lg:left-[30%] lg:top-[82.5%]"
//         ></div>

//         <div
//           className="bg-red-200 absolute rounded-2xl z-[-20] 
//           w-[100px] h-[100px] left-[20%] top-[120%]
//           sm:w-[125px] sm:h-[125px] sm:left-[22%] sm:top-[120%]
//           md:w-[150px] md:h-[150px] md:left-[23%] md:top-[120%]
//           lg:w-[170px] lg:h-[168px] lg:left-[25%] lg:top-[120%]"
//         ></div>
// >>>>>>> main
      </div>

      {/* Gambar-gambar background */}
      <motion.div
        className="absolute w-[211px] h-[251px] rounded-2xl z-[-10] overflow-hidden"
        initial={isMobile ? { top: "30%", left: "30%" } : { top: "25%", left: "15%" }}
        animate={
          isGalleryActive
            ? isMobile
              ? mobileActivePositions[0]
              : { top: "50%", left: "8%" }
            : isMobile
            ? { top: "30%", left: "30%" }
            : { top: "25%", left: "15%" }
        }
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image src="/images/gallery1.png" alt="Gallery 1" fill className="object-cover" />
      </motion.div>

      <motion.div
        className="absolute w-[196px] h-[123px] rounded-2xl z-[-10] overflow-hidden"
        initial={isMobile ? { top: "30%", left: "30%" } : { top: "40%", left: "62%" }}
        animate={
          isGalleryActive
            ? isMobile
              ? mobileActivePositions[1]
              : { top: "55%", left: "70%" }
            : isMobile
            ? { top: "30%", left: "30%" }
            : { top: "40%", left: "62%" }
        }
        transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
      >
        <Image src="/images/gallery2.png" alt="Gallery 2" fill className="object-cover" />
      </motion.div>

      <motion.div
        className="absolute w-[132px] h-[94px] rounded-2xl z-[-30] overflow-hidden"
        initial={isMobile ? { top: "30%", left: "30%" } : { top: "34.5%", left: "28%" }}
        animate={
          isGalleryActive
            ? isMobile
              ? mobileActivePositions[2]
              : { top: "55%", left: "50%" }
            : isMobile
            ? { top: "30%", left: "30%" }
            : { top: "34.5%", left: "28%" }
        }
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        <Image src="/images/gallery3.png" alt="Gallery 3" fill className="object-cover" />
      </motion.div>

      <motion.div
        className="absolute w-[170px] h-[168px] rounded-2xl z-[-20] overflow-hidden"
        initial={isMobile ? { top: "30%", left: "30%" } : { top: "42%", left: "25%" }}
        animate={
          isGalleryActive
            ? isMobile
              ? mobileActivePositions[3]
              : { top: "52%", left: "30%" }
            : isMobile
            ? { top: "30%", left: "30%" }
            : { top: "42%", left: "25%" }
        }
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <Image src="/images/gallery4.png" alt="Gallery 4" fill className="object-cover" />
      </motion.div>
    </div>
  );
};

export default AboutSection;