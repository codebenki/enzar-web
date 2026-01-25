"use client";
import { FloatIn } from "@/components/FloatIn";
import Footer from "@/components/Footer";
import AspireSection from "@/components/sections/AspireSection";
import CapabilitiesSection from "@/components/sections/CapabilitiesSection";
import MissionSection from "@/components/sections/MissionSection";
import TimelineHome from "@/components/sections/TimelineHome";
import { useTranslations } from "next-intl";

export default function AboutHeader() {
  const t = useTranslations("About");
  return (
    <>
      <section className="bg-black py-24 px-6 pt-32">
        <div className="max-w-7xl mx-auto my-10">
          {/* Main Title Section */}
          <div className="text-center mb-24">
            <FloatIn direction="up">
              <h1 className="text-5xl md:text-8xl font-bold text-white mb-6">
                {t("description.0")}
              </h1>
              <p className="text-neutral-400 text-lg md:text-xl tracking-widest uppercase font-medium">
                {t("description.1")}
              </p>
            </FloatIn>
          </div>

          {/* Two Column Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mt-20">
            {/* Who We Are */}
            <FloatIn direction="up" delay={0.2}>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  {t("description.2")}
                </h2>
                <p className="text-neutral-400 text-lg leading-relaxed">
                  {t("description.3")}
                </p>
              </div>
            </FloatIn>

            {/* Why We Exist */}
            <FloatIn direction="up" delay={0.4}>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  {t("description.4")}
                </h2>
                <p className="text-neutral-400 text-lg leading-relaxed">
                  {t("description.5")}
                </p>
              </div>
            </FloatIn>
          </div>
        </div>
      </section>
      <TimelineHome />
      <MissionSection />
      <CapabilitiesSection />
      <AspireSection />
      <Footer />
    </>
  );
}
