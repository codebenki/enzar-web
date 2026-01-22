"use client";
import SplashScreen from "@/components/SplashScreen";
import Image from "next/image";
import { useUIStore } from "@/store/useUIStore";
import TimelineHome from "@/components/sections/TimelineHome";
import { FloatIn } from "@/components/FloatIn";
import MissionSection from "@/components/sections/MissionSection";
import CapabilitiesSection from "@/components/sections/CapabilitiesSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import UseCasesSection from "@/components/sections/UseCaseSection";
import ClientsSection from "@/components/sections/ClientsSection";
import Footer from "@/components/Footer";

export default function BackgroundSection() {
  const isLoaded = useUIStore((state) => state.isLoaded);
  return (
    <>
      <SplashScreen />

      <MissionSection />
      <TimelineHome />
      <CapabilitiesSection />
      <SolutionsSection />
      <UseCasesSection />
      <ClientsSection />
      <Footer />
    </>
  );
}
