"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useHeader } from "@/context/HeaderContext";

const HeaderComponent = () => {
  const { isSticky, isShowButton, section } = useHeader();

  const getButtonVariantComp = () => {
    if (section === "competition") {
      return "btn-primary";
    }

    if (section === "event") {
      return "btn-outline btn-accent";
    }

    return "btn-accent"
  }

  const getButtonVariantHome = () => {
    if (section === "home") {
      return "btn-primary";
    }

    if (section === "event") {
      return "btn-outline btn-accent";
    }

    return "btn-accent";
  };

  const getButtonVariantEvent = () => {
    if (section === "event") {
      return "btn-accent";
    }

    return "btn-accent";
  };

  const getButtonSectionVariant = () => {
    if (section === "footer") {
      return ("btn-outline");
    }

    return "";
  };

  const getFontStyle = () => {
    if (section === "footer" || section === "event") {
      return "text-base-100";
    }

    if (section === "countdown") {
      return "bg-base-100"
    }

    return "text-base-content bg-transparent";
  };

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
                className={`btn ${getButtonSectionVariant()} ${getButtonVariantEvent()} btn-custom`}
              >
                Event 🗓️
              </button>
              <button
                className={`btn ${getButtonSectionVariant()} ${getButtonVariantHome()} btn-custom`}
              >
                Home 🏠
              </button>
              <button
                className={`btn ${getButtonSectionVariant()} ${getButtonVariantComp()} btn-custom`}
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
