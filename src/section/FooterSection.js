"use client";

import React from "react";
import Image from "next/image";

const FooterSection = () => {
  return (
    <div className="min-h-screen bg-[#020b0d] text-base-100 flex items-center justify-center">
      <div className="h-full w-full relative">
        {/* Line Image */}
        <Image
          src={`footerline.svg`}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full"
          alt="Footer Line"
        />

        {/* Centered Hex Image Behind */}
        <Image
          src={`footerhex.svg`}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-[30%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          alt="Footer Hex"
        />
      </div>
    </div>
  );
};

export default FooterSection;
