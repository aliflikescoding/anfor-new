"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useHeader } from "@/context/HeaderContext";

const faq = [
  {
    question: "Bagaimana cara mendaftar kompetisi ini?",
    answer:
      "Peserta diharapkan segera mendaftarkan timnya selama periode Batch 1 untuk mengamankan slot kompetisi.",
  },
  {
    question: "Apakah boleh mengikuti lebih dari satu kategori lomba?",
    answer:
      "Boleh, selama peserta membentuk tim yang berbeda untuk tiap kategori yang diikuti.",
  },
  {
    question: "Kapan batas akhir pendaftaran Batch 1?",
    answer:
      "Pendaftaran Batch 1 akan ditutup pada tanggal 20 Juli 2025 pukul 23.59 WIB.",
  },
  {
    question: "Apakah kompetisi ini bersifat online atau offline?",
    answer: "Kompetisi akan dilaksanakan secara offline di Gedung ICT Center.",
  },
  {
    question: "Berapa jumlah anggota dalam satu tim?",
    answer: "Setiap tim wajib terdiri dari 3-5 orang peserta.",
  },
  {
    question: "Siapa saja yang boleh mengikuti kompetisi ini?",
    answer:
      "Kompetisi ini terbuka untuk seluruh mahasiswa aktif dari universitas negeri maupun swasta di Indonesia.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { setIsSticky, setIsShowButton } = useHeader();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSticky(true);
          setIsShowButton(true);
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
  }, [setIsSticky]);

  const toggleFaq = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div ref={sectionRef} className="min-h-screen bg-[#FDF4F2] relative px-4 py-20 overflow-hidden">
      {/* Big FAQ Heading */}
      <h1 className="font-bold text-[300px] md:text-[500px] leading-none absolute top-0 left-0 text-black select-none z-0">
        FAQ
      </h1>

      {/* FAQ Container */}
      <div className="mx-auto mt-[30vh] bg-white rounded-xl shadow-md p-10 relative z-10">
        {faq.map((item, index) => (
          <div key={index} className="">
            <div
              className="flex justify-between cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <p className="text-3xl font-medium">({index + 1})</p>
              <p className="font-medium text-4xl">{item.question}</p>
            </div>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  className="mt-4 flex"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-[50%]"></div>
                  <p className="text-xl">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="divider"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
