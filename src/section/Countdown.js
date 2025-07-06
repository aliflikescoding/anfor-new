"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useHeader } from "@/context/HeaderContext";

const CountdownSection = () => {
  const { setIsSticky, setIsShowButton, setSection } = useHeader();
  const sectionRef = useRef(null);

  // Sticky header observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSticky(true);
          setIsShowButton(true);
          setSection("countdown");
        }
      },
      { threshold: 0.5 }
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

  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-08-31T23:59:59");
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return null;
    }

    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
      minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const marqueeRef = useRef(null);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.4 }
    );
    if (marqueeRef.current) observer.observe(marqueeRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="bg-primary w-full overflow-hidden pt-[20vh] pb-[30vh] px-0">
      <div ref={marqueeRef} className="relative h-[40px] sm:h-[60px] lg:h-[80px] overflow-hidden w-full m-0">
        <div
          className={`absolute w-max flex whitespace-nowrap items-center ${isVisible ? "animate-marquee" : "justify-center"}`}
          style={{ left: 0 }}
        >
          {Array(20).fill(null).map((_, i) => (
            <span key={i} className="flex items-center px-2 sm:px-3">
              <span className="text-[#FDF4F2] text-[16px] sm:text-[28px] lg:text-[48px] font-semibold italic pr-2 sm:pr-3" style={{ fontFamily: "Inter, sans-serif" }}>
                COUNTDOWN TO THE MAIN EVENT
              </span>
              <Image 
                src="/images/whitestar.png" 
                alt="Star" 
                width={0}
                height={0}
                className="w-[16px] h-[16px] sm:w-[24px] sm:h-[24px] lg:w-[40px] lg:h-[40px] mx-1 sm:mx-2"
              />
            </span>
          ))}
        </div>
      </div>

      {/* Countdown Boxes */}
      {timeLeft && (
        <div className="flex justify-center items-center gap-0 sm:gap-1 mt-6 sm:mt-8 lg:mt-10 mb-8 sm:mb-12 lg:mb-16 flex-nowrap overflow-x-auto px-1 sm:px-2 pt-6 sm:pt-8 lg:pt-10">
          <div className="w-[40px] sm:w-[70px] lg:w-[120px] h-[40px] sm:h-[70px] lg:h-[120px] relative flex-shrink-0 flex items-center justify-center">
            <Image src="/images/starline.png" alt="Separator" fill className="object-contain" />
          </div>

          {[
            { label: "Hari", value: timeLeft.days },
            { label: "Jam", value: timeLeft.hours },
            { label: "Menit", value: timeLeft.minutes },
            { label: "Detik", value: timeLeft.seconds },
          ].map((item, idx) => (
            <React.Fragment key={idx}>
              <div className="text-center w-[50px] sm:w-[90px] lg:w-[160px] flex-shrink-0">
                <div className="text-[#FDF4F2] text-[32px] sm:text-[60px] lg:text-[144px] font-bold leading-none min-h-[40px] sm:min-h-[80px] lg:min-h-[160px] text-center" style={{ fontFamily: "Inter, sans-serif" }}>{item.value}</div>
                <div className="text-[#FDF4F2] text-[14px] sm:text-[24px] lg:text-[48px] font-semibold italic text-center" style={{ fontFamily: "Inter, sans-serif" }}>{item.label}</div>
              </div>
              <div className="w-[50px] sm:w-[70px] lg:w-[120px] h-[40px] sm:h-[70px] lg:h-[120px] relative flex-shrink-0 flex items-center justify-center">
                <Image src="/images/starline.png" alt="Separator" fill className="object-contain" />
              </div>
            </React.Fragment>
          ))}
        </div>
      )}

      {/* Marquee Animation Style */}
      <style jsx>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default CountdownSection;