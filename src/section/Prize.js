"use client";

import React, { useRef, useEffect } from 'react';
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useHeader } from "@/context/HeaderContext";

const PrizeSection = () => {
  const { setIsSticky, setIsShowButton, setSection } = useHeader();
  const prizes = [
    {
      id: 1,
      title: "Juara 2",
      amount: "Rp. 3.000.000",
      image: "/images/prize2.png"
    },
    {
      id: 2,
      title: "Juara 1",
      amount: "Rp. 5.000.000",
      image: "/images/prize1.png"
    },
    {
      id: 3,
      title: "Juara 3",
      amount: "Rp. 2.000.000",
      image: "/images/prize3.png"
    }
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSticky(true);
          setIsShowButton(true);
          setSection("prize");
        }
      },
      { threshold: 0.09 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [setIsSticky]);

  return (
    <section
      ref={ref}
      className="relative w-full bg-[#FDF4F2] py-[20vh] px-4 overflow-hidden"
    >
      {/* Background Text */}
      <h2
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                   text-[100vw] sm:text-[40vw] md:text-[30vw] font-black text-white 
                   whitespace-nowrap italic z-0 pointer-events-none select-none leading-none"
        style={{
          fontFamily: 'Inter, sans-serif',
        }}
      >
        WINNER'S PRIZE
      </h2>

      {/* Foreground Content with fade+scale scroll animation */}
      <motion.div
        className="relative max-w-7xl mx-auto z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 sm:mt-12 md:mt-16 px-4 md:px-8">
          {prizes.map((prize) => {
            const orderClass =
              prize.id === 2
                ? "order-1 md:order-2"
                : prize.id === 1
                ? "order-2 md:order-1"
                : "order-3 md:order-3";

            const marginClass =
              prize.id === 2
                ? "-mt-2 sm:-mt-4 md:-mt-10"
                : "mt-4 sm:mt-6 md:mt-12";

            return (
              <div
                key={prize.id}
                className={`flex flex-col items-center ${orderClass} ${marginClass}`}
              >
                {/* Trophy Image */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 lg:w-92 lg:h-92 mb-6">
                  <Image
                    src={prize.image}
                    alt={prize.title}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Prize Text */}
                <div className="text-center">
                  <h3
                    className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-[#020B0D] mb-2"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {prize.title}
                  </h3>
                  <p
                    className="text-lg sm:text-xl md:text-xl lg:text-2xl text-[#020B0D]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {prize.amount}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default PrizeSection;
