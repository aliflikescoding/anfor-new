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
    <div
      ref={sectionRef}
      className="bg-primary w-full overflow-hidden pt-[20vh] pb-[30vh] px-0"
    >
      {/* TODO: Add responsive padding - use different padding for mobile/tablet/desktop */}

      <div
        ref={marqueeRef}
        className="relative h-[80px] overflow-hidden w-full m-0"
      >
        {/* TODO: Add responsive height - use different heights for mobile/tablet/desktop */}

        <div
          className={`absolute w-max flex whitespace-nowrap items-center ${
            isVisible ? "animate-marquee" : "justify-center"
          }`}
          style={{ left: 0 }}
        >
          {Array(20)
            .fill(null)
            .map((_, i) => (
              <span key={i} className="flex items-center px-3">
                {/* TODO: Add responsive padding - use different padding for mobile/tablet/desktop */}

                <span
                  className="text-[#FDF4F2] text-[48px] font-semibold italic pr-3"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {/* TODO: Add responsive font size - use different text sizes for mobile/tablet/desktop */}
                  COUNTDOWN TO THE MAIN EVENT
                </span>
                <Image
                  src="/images/whitestar.png"
                  alt="Star"
                  width={0}
                  height={0}
                  className="w-[40px] h-[40px] mx-2"
                />
              </span>
            ))}
        </div>
      </div>

      {/* Countdown Boxes */}
      {timeLeft && (
        <div className="flex flex-col xl:flex-row justify-center items-center gap-1 mt-10 mb-16 flex-nowrap overflow-x-auto px-2 pt-10">
          {/* TODO: Add responsive gaps, margins, and padding - use different spacing for mobile/tablet/desktop */}

          <div className="w-[120px] h-[120px] relative flex-shrink-0 hidden xl:flex items-center justify-center">
            {/* TODO: Add responsive separator sizes - use different widths/heights for mobile/tablet/desktop */}
            <Image
              src="/images/starline.png"
              alt="Separator"
              fill
              className="object-contain"
            />
          </div>

          {[
            { label: "Hari", value: timeLeft.days },
            { label: "Jam", value: timeLeft.hours },
            { label: "Menit", value: timeLeft.minutes },
            { label: "Detik", value: timeLeft.seconds },
          ].map((item, idx) => (
            <React.Fragment key={idx}>
              <div className="text-center w-[160px] flex-shrink-0">
                {/* TODO: Add responsive container width - use different widths for mobile/tablet/desktop */}

                <div
                  className="text-[#FDF4F2] text-[144px] font-bold leading-none min-h-[160px] text-center"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {/* TODO: Add responsive font size and min-height - use different sizes for mobile/tablet/desktop */}
                  {item.value}
                </div>
                <div
                  className="text-[#FDF4F2] text-[48px] font-semibold italic text-center"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {/* TODO: Add responsive font size - use different sizes for mobile/tablet/desktop */}
                  {item.label}
                </div>
              </div>
              <div className="w-[120px] h-[120px] relative flex-shrink-0 hidden xl:flex items-center justify-center">
                {/* TODO: Add responsive separator sizes - use different widths/heights for mobile/tablet/desktop */}
                <Image
                  src="/images/starline.png"
                  alt="Separator"
                  fill
                  className="object-contain"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      )}

      {/* Marquee Animation Style */}
      <style jsx>{`
        .animate-marquee {
          animation: marquee 60s linear infinite;
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