"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useHeader } from "@/context/HeaderContext";

const HeaderComponent = () => {
  const { isSticky } = useHeader();

  if (isSticky) {
    return (
      <div className="fixed top-0 left-0 z-[99] w-full p-4 transition-all">
        <div className="custom-container flex justify-between items-center">
          <Link href={`/`}>
            <p className="font-bold uppercase text-3xl">
              anforcom <br /> 2025
            </p>
          </Link>
          <Link href={`/`}>
            <Image
              src="/logo.svg"
              alt="robot"
              height={0}
              width={0}
              sizes="100vw"
              className="h-auto w-auto"
            />
          </Link>
          <button className="btn btn-neutral btn-custom">daftar</button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex mt-8 justify-between items-center transition-all">
      <Link href={`/`}>
        <p className="font-bold uppercase text-3xl">
          anforcom <br /> 2025
        </p>
      </Link>
      <Link href={`/`}>
        <Image
          src="/logo.svg"
          alt="robot"
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto w-auto"
        />
      </Link>
      <button className="btn btn-neutral btn-custom">daftar</button>
    </div>
  );
};

export default HeaderComponent;