"use client";

import { HeaderProvider } from "@/context/HeaderContext";
import HeroSection from "@/section/HeroSection";
import AboutSection from "@/section/AboutSection";
import Event from "@/section/Event";
import Competition from "@/section/Competition";
import Prize from "@/section/Prize";
import Countdown from "@/section/Countdown";
import Rundown from "@/section/Rundown";
import Gallery from "@/section/Gallery";
import Teaser from "@/section/Teaser";
import FaqSection from "@/section/FaqSection";
import FooterSection from "@/section/FooterSection";
import LenisWrapper from "@/components/LenisWrapper";
import RangkaianSection from "@/section/RangkaianSection";

export default function Home() {
  return (
    <LenisWrapper>
      <HeaderProvider>
        <main className="overflow-x-hidden">
          <HeroSection />
          <AboutSection />
          <Event />
          <Competition />
          <Prize />
          <Countdown />
          <RangkaianSection />
          <Rundown />
          <Gallery />
          <Teaser />
          <FaqSection />
        </main>
        <FooterSection />
      </HeaderProvider>
    </LenisWrapper>
  );
}
