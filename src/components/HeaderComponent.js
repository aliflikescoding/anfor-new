"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useHeader } from "@/context/HeaderContext";
import { motion, AnimatePresence } from "framer-motion";

const HeaderComponent = () => {
  const { isSticky, isShowButton, section } = useHeader();
  const [isLikeBarOpen, setIsLikeBarOpen] = useState(false);

  const getButtonVariantComp = () => {
    if (section === "competition") return "btn-primary";
    if (["event", "gallery", "rundown", "faq"].includes(section))
      return "glass";
    return "btn-accent";
  };

  const getButtonVariantHome = () => {
    if (section === "home") return "btn-primary";
    if (["event", "gallery", "rundown"].includes(section)) return "glass";
    if (section === "faq") return "glass text-base-content";
    return "btn-accent";
  };

  const getButtonVariantEvent = () => {
    if (section === "event") return "btn-accent";
    if (["gallery", "faq", "rundown"].includes(section)) return "glass";
    return "btn-accent";
  };

  const getButtonSectionVariant = () => {
    if (section === "footer") return "btn-outline";
    if (section === "prize") return "btn-ghost";
    if (section === "faq") return "glass";
    return "";
  };

  const getFontStyle = () => {
    if (["footer", "event"].includes(section)) return "text-base-100";
    if (section === "countdown") return "bg-base-100";
    return "text-base-content bg-transparent";
  };

  const getButtonVariant = () => {
    if (["footer", "event"].includes(section)) return "btn-accent";
    return "btn-neutral";
  };

  if (isSticky) {
    return (
      <>
        {/* Desktop header */}
        <div
          className={`xl:block hidden fixed ${getFontStyle()} top-0 left-0 z-[99] w-full p-4 transition-all`}
        >
          <div className="custom-container flex justify-between items-center">
            <Link href={`/`}>
              <p className="font-bold uppercase text-xl sm:text-3xl">
                anforcom <br /> 2025
              </p>
            </Link>

            {isShowButton ? (
              <div className="hidden xl:flex items-center gap-4">
                <button
                  className={`btn ${getButtonSectionVariant()} ${getButtonVariantEvent()} btn-custom`}
                >
                  Event
                </button>
                <button
                  className={`btn ${getButtonSectionVariant()} ${getButtonVariantHome()} btn-custom`}
                >
                  Home
                </button>
                <button
                  className={`btn ${getButtonSectionVariant()} ${getButtonVariantComp()} btn-custom`}
                >
                  Competition
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
                  className="h-auto w-[50px] sm:w-auto"
                />
              </Link>
            )}

            <div className="flex items-center gap-2">
              <button className={`btn ${getButtonVariant()} btn-custom`}>
                daftar
              </button>
              <button
                onClick={() => setIsLikeBarOpen(!isLikeBarOpen)}
                className="block xl:hidden btn btn-ghost btn-custom"
              >
                Like
              </button>
            </div>
          </div>
        </div>

        {/* Mobile header */}
        <div
          className={`xl:hidden block fixed ${getFontStyle()} top-0 left-0 z-[99] w-full p-4 transition-all`}
        >
          <div className="custom-container flex justify-between items-center">
            <Link href={`/`}>
              <p className="font-bold uppercase text-xl sm:text-3xl">
                anforcom <br /> 2025
              </p>
            </Link>
            <div className="flex items-center gap-2">
              <button className={`btn ${getButtonVariant()} btn-custom`}>
                daftar
              </button>
              <button
                onClick={() => setIsLikeBarOpen(!isLikeBarOpen)}
                className="btn btn-ghost btn-custom"
              >
                Like
              </button>
            </div>
          </div>

          {/* Like Bar with Framer Motion */}
          <AnimatePresence>
            {isLikeBarOpen && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.3 }}
                className="mt-4 bg-base-200 p-4 flex justify-center gap-4 shadow-md rounded-xl"
              >
                <button
                  className={`btn ${getButtonSectionVariant()} ${getButtonVariantEvent()} btn-custom`}
                >
                  Event
                </button>
                <button
                  className={`btn ${getButtonSectionVariant()} ${getButtonVariantHome()} btn-custom`}
                >
                  Home
                </button>
                <button
                  className={`btn ${getButtonSectionVariant()} ${getButtonVariantComp()} btn-custom`}
                >
                  Competition
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </>
    );
  }

  // Non-sticky header (no Like button, no like bar)
  return (
    <div className="flex mt-8 justify-between items-center transition-all">
      <Link href={`/`}>
        <p className="font-bold uppercase text-xl sm:text-3xl">
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
          className="h-auto w-[50px] sm:w-auto"
        />
      </Link>
      <button className={`btn ${getButtonVariant()} btn-custom`}>daftar</button>
    </div>
  );
};

export default HeaderComponent;
