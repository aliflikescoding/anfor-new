"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { useHeader } from "@/context/HeaderContext";
import ThreeImage from "@/components/ThreeImage";

const EventSection = () => {
  const { setIsSticky, setIsShowButton, setSection } = useHeader();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSticky(true);
          setIsShowButton(true);
          setSection("event");
        }
      },
      { threshold: 0.3 }
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

  const content = {
    heading:
      "Kenapa hanya jadi penonton, kalau lewat seminar ini kamu bisa ikut membentuk masa depan teknologi?",
    description:
      "Di tengah arus perubahan digital yang semakin cepat, seminar Anforcom 2025 menghadirkan para ahli, praktisi, dan inovator untuk membagikan wawasan, pengalaman, serta gagasan masa depan.",
    seminars: [
      {
        id: 1,
        title: "Tips dan Trik dalam Menghubungi Dosen",
        speaker: "Mochammad Dzahwan 'Wanceng' Fadholy",
        role: "Women Heart Engineer @ Wanceng Inc.",
        image: "/images/event1.png",
      },
      {
        id: 2,
        title: "Membangun Relasi Profesional di Dunia Digital",
        speaker: "Rani Puspitasari",
        role: "Community Builder @ Digital Connect",
        image: "/images/event1.png",
      },
    ],
  };

  return (
    <div ref={sectionRef} className="bg-[#FEB82F]">
      {/* ========================= Page 1 ========================= */}
      <div className="container mx-auto px-6 xl:px-28 lg:px-40">
        <div className="pt-24 pb-10">
          <h2 className="text-2xl sm:text-4xl font-bold italic leading-tight text-left text-white">
            {content.heading.split("seminar").map((text, i) =>
              i === 0 ? (
                text
              ) : (
                <span key={i}>
                  <span className="font-bold">seminar</span>
                  {text.split("masa depan teknologi?").map((subText, j) =>
                    j === 0 ? (
                      subText
                    ) : (
                      <span key={j}>
                        <span className="font-bold">masa depan teknologi?</span>
                      </span>
                    )
                  )}
                </span>
              )
            )}
          </h2>
        </div>
      </div>

      {/* Separator full width */}
      <div className="w-full">
        <Image
          src="/images/strline.png"
          alt="Star Line"
          width={1920}
          height={200}
          className="w-full h-auto"
        />
      </div>

      {/* Content after separator */}
      <div className="container mx-auto px-6 xl:px-28 lg:px-40 pt-10 pb-24">
        <div className="flex flex-col xl:flex-row gap-8 items-center">
          <div className="xl:w-1/2 mb-18 sm:mb-[20vh] xl:mb-0">
            <ThreeImage />
          </div>
          <div className="xl:w-1/2 text-white text-lg leading-relaxed">
            {content.description}
          </div>
        </div>
      </div>

      {/* ========================= Page 2 ========================= */}
      <div className="container mx-auto px-6 xl:px-28 lg:px-40 min-h-screen flex flex-col justify-center gap-16 py-10">
        {content.seminars.map((seminar) => (
          <div
            key={seminar.id}
            className="flex flex-col xl:flex-row items-center xl:py-[20vh] gap-6"
          >
            <div className="xl:w-1/2 mb-18 sm:mb-[20vh] xl:mb-0">
              <ThreeImage />
            </div>
            <div className="xl:w-1/2 text-white">
              <p className="italic font-semibold text-sm xl:text-base lg:text-[18px] mb-2">
                Seminar {seminar.id}
              </p>
              <h3 className="font-semibold text-[22px] xl:text-[30px] lg:text-[40px] leading-snug mb-2">
                {seminar.title}
              </h3>
              <p className="text-sm xl:text-base lg:text-[18px]">
                {seminar.speaker}
                <br />
                {seminar.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventSection;
