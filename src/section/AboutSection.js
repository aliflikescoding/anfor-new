"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { IoPlayCircleOutline } from "react-icons/io5";
import { useHeader } from "@/context/HeaderContext";

const AboutSection = () => {
  const { setIsSticky, setIsShowButton, isShowButton, setSection } = useHeader();
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

  return (
    <div ref={sectionRef} className="custom-container pt-[30vh] pb-[60vh]">
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
          <div className="flex items-center gap-4">
            <button className="btn btn-custom">Event 🗓️</button>
            <button className="btn btn-custom">Home 🏠</button>
            <button className="btn btn-custom">Competition 🏆</button>
          </div>
        )}
        <div className="bg-red-100 absolute w-[211px] h-[251px] rounded-2xl z-[-10] left-[15%] top-[45%]"></div>
        <div className="bg-red-400 absolute w-[196px] h-[123px] rounded-2xl z-[-10] left-[62%] top-[110%]"></div>
        <div className="bg-red-300 absolute w-[132px] h-[94px] rounded-2xl z-[-30] left-[30%] top-[82.5%]"></div>
        <div className="bg-red-200 absolute w-[170px] h-[168px] rounded-2xl z-[-20] left-[25%] top-[120%]"></div>
      </div>
    </div>
  );
};

export default AboutSection;
