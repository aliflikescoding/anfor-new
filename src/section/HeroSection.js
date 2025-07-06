"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import HeaderComponent from "@/components/HeaderComponent";
import { useHeader } from "@/context/HeaderContext";

const HeroSection = () => {
  const { setIsSticky, setIsShowButton, setSection } = useHeader();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSticky(false);
          setIsShowButton(false);
          setSection("hero");
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

  return (
    <div ref={sectionRef} className="custom-container pt-[7.5vh] sm:pt-[15vh] pb-[15vh] sm:pb-[30vh]">
      <div className="relative h-[500px] overflow-hidden rounded-2xl">
        {/* Background Image */}
        <Image
          src="/heroimage.png"
          alt="hero image"
          fill
          className="object-cover"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 hidden xl:flex flex-col justify-between py-4 px-10">
          <h2 className="text-6xl uppercase font-bold text-white mb-6 leading-tight">
            Digital innovation
          </h2>
          <div className="flex items-center justify-between">
            <h2 className="text-6xl font-bold uppercase text-white mb-6 leading-tight">
              for prosperous <br /> urban growth
            </h2>
            <p className="max-w-[370px] font-medium text-md text-white text-right">
              Inovasi digital menjadi pendorong utama dalam membangun kota yang
              cerdas, efisien, dan berkelanjutan demi tercapainya kesejahteraan
              bersama.
            </p>
          </div>
        </div>

        <div className="absolute z-10 inset-0 xl:hidden flex flex-col justify-between py-4 px-5">
          <div>
            <h2 className="text-3xl font-bold uppercase text-white leading-tight">
              Digital innovation
            </h2>
            <h2 className="text-3xl font-bold uppercase text-white mb-6 leading-tight">
              for prosperous <br /> urban growth
            </h2>
          </div>
          <p className="text-medium text-md text-white text-left">
            Inovasi digital menjadi pendorong utama dalam membangun kota yang
            cerdas, efisien, dan berkelanjutan demi tercapainya kesejahteraan
            bersama.
          </p>
        </div>

        <Image
          src="/robot.png"
          alt="robot"
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto w-[25%] absolute top-[-45%] right-[5%] scale-y-[-1] xl:block hidden"
        />

        <Image
          src="/robot.png"
          alt="robot"
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto w-[45%] sm:w-[35%] absolute top-1/4 sm:top-1/8 right-[-15%] sm:right-[-10%] origin-center rotate-270 xl:hidden block"
        />
      </div>
      <HeaderComponent />
    </div>
  );
};

export default HeroSection;
