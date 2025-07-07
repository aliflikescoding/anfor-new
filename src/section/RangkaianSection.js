"use client"

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useHeader } from "@/context/HeaderContext";

const RangkaianSection = () => {
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
      { threshold: 0 }
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
    <section
      ref={sectionRef}
      className="w-full pt-[15vh] pb-[45vh] flex flex-col justify-center items-center px-4"
      style={{
        background: "linear-gradient(to bottom, #FEB82F 70%, #FDF4F2 100%)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1
          className="text-[#FDF4F2] text-6xl sm:text-7xl md:text-9xl font-extrabold italic leading-[0.9]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <span className="block">RANGKAIAN</span>
          <span className="block">ACARA</span>
          <span className="block">ANFORCOM</span>
        </h1>
      </motion.div>
    </section>
  );
};

export default RangkaianSection;
