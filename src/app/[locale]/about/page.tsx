"use client";
import { FloatIn } from "@/components/FloatIn";
import Footer from "@/components/Footer";
import AspireSection from "@/components/sections/AspireSection";
import CapabilitiesSection from "@/components/sections/CapabilitiesSection";
import ClientsSection from "@/components/sections/ClientsSection";
import MissionSection from "@/components/sections/MissionSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import TimelineHome from "@/components/sections/TimelineHome";
import UseCasesSection from "@/components/sections/UseCaseSection";

export default function AboutHeader() {
  return (
    <>
      <section className="bg-black py-24 px-6 pt-32">
        <div className="max-w-7xl mx-auto my-10">
          {/* Main Title Section */}
          <div className="text-center mb-24">
            <FloatIn direction="up">
              <h1 className="text-5xl md:text-8xl font-bold text-white mb-6">
                About Enzar Digital
              </h1>
              <p className="text-neutral-400 text-lg md:text-xl tracking-widest uppercase font-medium">
                The Digital Excellence Center of Enzar Group
              </p>
            </FloatIn>
          </div>

          {/* Two Column Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mt-20">
            {/* Who We Are */}
            <FloatIn direction="up" delay={0.2}>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Who We Are
                </h2>
                <p className="text-neutral-400 text-lg leading-relaxed">
                  Enzar Digital is the digital transformation powerhouse of
                  Enzar Group, combining over 20 years of security and
                  operational expertise with cutting-edge technological
                  innovation to deliver integrated digital solutions.
                </p>
              </div>
            </FloatIn>

            {/* Why We Exist */}
            <FloatIn direction="up" delay={0.4}>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Why We Exist
                </h2>
                <p className="text-neutral-400 text-lg leading-relaxed">
                  Our mission is to empower organizations with advanced digital
                  platforms that transform complex operations into seamless
                  experiences. We believe in the power of technology to create
                  lasting value and sustainable growth.
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
