"use client";
import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useHeader } from "@/context/HeaderContext";

const RundownPage = () => {
  const { setIsSticky } = useHeader();
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSticky(true);
        }
      },
      { threshold: 0.1 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, [setIsSticky]);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const timelineData = [
    {
      date: "25 Agustus - 26 Agustus",
      title: "Pendaftaran Batch 1",
      description:
        "Peserta diharapkan segera mendaftarkan timnya selama periode Batch 1 untuk mengamankan slot kompetisi.",
    },
    {
      date: "27 Agustus - 28 Agustus",
      title: "Pendaftaran Batch 2",
      description:
        "Periode pendaftaran batch kedua untuk tim yang belum mendaftar pada batch pertama.",
    },
    {
      date: "1 September - 3 September",
      title: "Babak Penyisihan",
      description:
        "Kompetisi dimulai dengan babak penyisihan untuk menentukan tim yang lolos ke babak berikutnya.",
    },
  ];

  return (
    <div className="w-full h-auto">
      {/* Section 1 */}
      <section
        className="w-full h-screen flex flex-col justify-center items-center px-4"
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
            className="text-[#FDF4F2] text-[42px] xs:text-[60px] sm:text-[80px] md:text-[60px] lg:text-[150px] font-extrabold italic leading-[0.9]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <span className="block">RANGKAIAN</span>
            <span className="block">ACARA</span>
            <span className="block">ANFORCOM</span>
          </h1>
        </motion.div>
      </section>

      {/* Section 2 */}
      <section
        className="w-full bg-[#FDF4F2] py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-16 lg:px-32"
        ref={timelineRef}
      >
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-[18px] sm:left-6 top-0 bottom-0 w-0.5 bg-gray-300 overflow-hidden">
            <motion.div
              style={{ height: lineHeight }}
              className="bg-[#FEB82F] w-full"
            />
          </div>

          {/* Timeline Items */}
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                },
              }}
              viewport={{ once: true, margin: "-50px 0px -50px 0px" }}
              className="relative mb-8 sm:mb-12 last:mb-0"
            >
              {/* Dot */}
              <div className="absolute left-[14px] sm:left-4 top-2 w-3 h-3 sm:w-4 sm:h-4 bg-[#FEB82F] rounded-full"></div>

              {/* Content */}
              <div className="ml-10 sm:ml-16 pl-4 sm:pl-6">
                {/* Date */}
                <motion.div
                  className="mb-6 sm:mb-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.1 }}
                  viewport={{ once: true }}
                >
                  <span
                    className="text-[#FEB82F] text-[14px] sm:text-[16px] md:text-[20px] font-extrabold italic"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {item.date}
                  </span>
                </motion.div>

                {/* Title */}
                <motion.h3
                  className="text-[#020B0D] text-[24px] sm:text-[32px] md:text-[44px] font-bold mb-2 sm:mb-4 italic leading-tight"
                  style={{ fontFamily: "Inter, sans-serif" }}
                  initial={{ x: -10 }}
                  whileInView={{ x: 0 }}
                  transition={{ delay: index * 0.2 + 0.15 }}
                  viewport={{ once: true }}
                >
                  {item.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  className="text-[#020B0D] text-[14px] sm:text-[16px] md:text-[20px] font-normal leading-relaxed mb-6 sm:mb-10"
                  style={{ fontFamily: "Inter, sans-serif" }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.2 }}
                  viewport={{ once: true }}
                >
                  {item.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RundownPage;
