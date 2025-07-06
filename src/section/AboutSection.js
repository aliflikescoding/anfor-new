"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { IoPlayCircleOutline } from "react-icons/io5";
import { useHeader } from "@/context/HeaderContext";

const AboutSection = () => {
  const { setIsSticky, setIsShowButton, isShowButton, setSection } =
    useHeader();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSticky(true); // set to true when enters viewport
          setIsShowButton(false);
          setSection("about");
        }
        // do nothing when it leaves
      },
      { threshold: 0.4 }
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

  return (
    <div ref={sectionRef} className="custom-container pt-[20vh] sm:pt-[30vh] pb-[35vh] sm:pb-[60vh]">
      <div className="flex flex-col items-center justify-between text-center relative">
        <h1 className="text-5xl capitalize font-semibold">tentang anforcom</h1>
        <p className="text-md my-4">
          Ajang teknologi nasional untuk memicu inovasi, kompetisi, <br /> dan
          kolaborasi mahasiswa informatika masa depan.
        </p>
        <Link
          target="_blank"
          className="mb-8 text-md flex items-center gap-2"
          href={``}
        >
          <p>Teaser Video</p> <IoPlayCircleOutline />
        </Link>
        {!isShowButton && (
          <div className="flex items-center justify-center flex-wrap gap-4">
            <button className="btn btn-custom">Event 🗓️</button>
            <button className="btn btn-custom">Home 🏠</button>
            <button className="btn btn-custom">Competition 🏆</button>
          </div>
        )}

        {/* Responsive red background decorative elements */}
        <div
          className="bg-red-100 absolute rounded-2xl z-[-10] 
          w-[120px] h-[140px] left-[5%] top-[45%]
          sm:w-[150px] sm:h-[180px] sm:left-[8%] sm:top-[45%]
          md:w-[180px] md:h-[220px] md:left-[12%] md:top-[45%]
          lg:w-[211px] lg:h-[251px] lg:left-[15%] lg:top-[45%]"
        ></div>

        <div
          className="bg-red-400 absolute rounded-2xl z-[-10] 
          w-[110px] h-[70px] left-[70%] top-[110%]
          sm:w-[140px] sm:h-[85px] sm:left-[68%] sm:top-[110%]
          md:w-[170px] md:h-[105px] md:left-[65%] md:top-[110%]
          lg:w-[196px] lg:h-[123px] lg:left-[62%] lg:top-[110%]"
        ></div>

        <div
          className="bg-red-300 absolute rounded-2xl z-[-30] 
          w-[80px] h-[60px] left-[25%] top-[82.5%]
          sm:w-[95px] sm:h-[70px] sm:left-[27%] sm:top-[82.5%]
          md:w-[115px] md:h-[82px] md:left-[28%] md:top-[82.5%]
          lg:w-[132px] lg:h-[94px] lg:left-[30%] lg:top-[82.5%]"
        ></div>

        <div
          className="bg-red-200 absolute rounded-2xl z-[-20] 
          w-[100px] h-[100px] left-[20%] top-[120%]
          sm:w-[125px] sm:h-[125px] sm:left-[22%] sm:top-[120%]
          md:w-[150px] md:h-[150px] md:left-[23%] md:top-[120%]
          lg:w-[170px] lg:h-[168px] lg:left-[25%] lg:top-[120%]"
        ></div>
      </div>
    </div>
  );
};

export default AboutSection;
