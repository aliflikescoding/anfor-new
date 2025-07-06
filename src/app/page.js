import HeroSection from "@/section/HeroSection";
import AboutSection from "@/section/AboutSection";
import Competition from '@/section/Competition';
import Prize from '@/section/Prize';
import Countdown from '@/section/Countdown';
import Rundown from '@/section/Rundown';
import Gallery from '@/section/Gallery';
import Teaser from '@/section/Teaser';
import LenisWrapper from "@/components/LenisWrapper";

export default function Home() {
  return (
    <LenisWrapper>
      <HeroSection />
      <AboutSection />
      <Competition />
      <Prize />
      <Countdown />
      <Rundown />
      <Gallery />
      <Teaser />
    </LenisWrapper>
  );
}
