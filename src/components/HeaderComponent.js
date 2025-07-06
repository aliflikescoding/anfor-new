"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useHeader } from "@/context/HeaderContext";

const HeaderComponent = () => {
  const { isSticky, isShowButton, section } = useHeader();

  const getButtonVariant = () => {
    // Current logic for footer section
    if (section === "footer") {
      return "btn-accent";
    }

    // Default case
    return "btn-accent";

    // Room for additional logic in the future
    // Add more conditions here as needed
  };

  const getButtonSectionVariant = () => {
    if (section === "footer") {
      return ("btn-outline");
    }

    return "";
  };

  const getFontStyle = () => {
    if (section === "footer") {
      return "text-base-100";
    }

    return "text-base-content";
  };

  if (isSticky) {
    return (
      <div
        className={`fixed ${getFontStyle()} top-0 left-0 z-[99] w-full p-4 transition-all`}
      >
        <div className="custom-container flex justify-between items-center">
          <Link href={`/`}>
            <p className="font-bold uppercase text-3xl">
              anforcom <br /> 2025
            </p>
          </Link>
          {isShowButton ? (
            <div className="flex items-center gap-4">
              <button
                className={`btn ${getButtonSectionVariant()} ${getButtonVariant()} btn-custom`}
              >
                Event 🗓️
              </button>
              <button
                className={`btn ${getButtonSectionVariant()} ${getButtonVariant()} btn-custom`}
              >
                Home 🏠
              </button>
              <button
                className={`btn ${getButtonSectionVariant()} ${getButtonVariant()} btn-custom`}
              >
                Competition 🏆
              </button>
            </div>
          ) : (
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
          )}
          <button className={`btn ${getButtonVariant()} btn-custom`}>
            daftar
          </button>
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
      <button className={`btn ${getButtonVariant()} btn-custom`}>daftar</button>
    </div>
  );
};

export default HeaderComponent;
