"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { useHeader } from "@/context/HeaderContext";

const FooterSection = () => {
  const { setIsSticky, setIsShowButton, setSection } = useHeader();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSticky(true);
          setIsShowButton(true);
          setSection("footer");
        }
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
  }, [setIsSticky]);

  return (
    <footer
      ref={sectionRef}
      className="bg-[#020b0d] text-base-100 overflow-x-hidden"
    >
      <div className="min-h-screen flex items-center justify-center relative">
        <div className="h-full w-full">
          {/* Top Text Content */}
          <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-end px-14">
            <h1 className="text-5xl mb-4 sm:mb-0 md:text-8xl font-bold leading-none">
              GET IN <br /> TOUCH
            </h1>
            <div className="mb-6 sm:mb-0">
              <p className="text-sm text-base-100/70">Contact Person</p>
              <p className="text-2xl font-bold">085291105501</p>
            </div>
          </div>
          <Image
            src={`footerline.svg`}
            width={0}
            height={0}
            sizes="100vw"
            className="sm:h-auto w-full"
            alt="Footer Line"
          />
          <div className="w-full flex justify-between items-start px-14">
            {/* Left Section */}
            <div className="max-w-[500px]">
              <div className="flex sm:hidden mt-6 flex-col gap-2 text-sm">
                <a href="#" className="hover:underline">
                  Instagram
                </a>
                <a href="#" className="hover:underline">
                  Facebook
                </a>
                <a href="#" className="hover:underline">
                  Twitter
                </a>
                <a href="#" className="hover:underline">
                  Github
                </a>
                <a href="#" className="hover:underline">
                  YouTube
                </a>
              </div>
              <p className="mt-2 sm:mt-6 text-sm text-base-100/70">
                A series of events and competitions organized by the Computer
                Science Students of Diponegoro University that aims to introduce
                the Technology Culture to the community.
              </p>
            </div>

            {/* Right Section */}
            <div className="hidden sm:flex flex-col gap-6 text-right">
              <div className="flex flex-col gap-2 text-sm">
                <a href="#" className="hover:underline">
                  Instagram
                </a>
                <a href="#" className="hover:underline">
                  Facebook
                </a>
                <a href="#" className="hover:underline">
                  Twitter
                </a>
                <a href="#" className="hover:underline">
                  Github
                </a>
                <a href="#" className="hover:underline">
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={`/footerhex.svg`}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full sm:w-[30%] absolute left-1/2 top-[53%] -translate-x-1/2 -translate-y-1/2"
          alt="Logo"
        />
      </div>

      {/* Bottom Logo + Copyright */}
      <div className="flex flex-col gap-2 justify-center items-center py-11">
        <Image
          src={`/logowhite.svg`}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-auto"
          alt="Logo"
        />
        <p className="text-sm text-center">© 2025 Himpunan Mahasiswa Informatika Universitas Diponegoro</p>
      </div>
    </footer>
  );
};

export default FooterSection;
