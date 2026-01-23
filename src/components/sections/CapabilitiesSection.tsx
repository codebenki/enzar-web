"use client";

import { WobbleCard } from "../ui/wobble-card";
import { FloatIn } from "../FloatIn";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

type CapabilityCardData = {
  title: string[];
  color: string[];
  iconBg: string[];
  features: string[][];
};

type Standard = {
  abbr: string;
  name: string;
};

export default function CapabilitiesSection() {
  const t = useTranslations();

  const cards = t.raw("Capabilities.card") as CapabilityCardData;
  const capabilities = cards.title.map((title, index) => ({
    title,
    color: cards.color[index],
    iconBg: cards.iconBg[index],
    features: cards.features[index],
  }));

  const standardsData = t.raw("Capabilities.standards") as Standard[];
  const standards = standardsData.map((std) => ({
    abbr: std.abbr,
    name: std.name,
  }));

  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <FloatIn direction="none">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-xs font-medium uppercase tracking-widest">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
              {t("Capabilities.descriptions.1")}
            </div>

            <h2 className="text-5xl md:text-7xl font-bold text-white mt-4">
              {t("Capabilities.descriptions.2")}
            </h2>

            <p className="text-neutral-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mt-6">
              {t("Capabilities.descriptions.3")}
            </p>
          </FloatIn>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => (
            <FloatIn key={idx} direction="up" delay={idx * 0.1}>
              <WobbleCard
                containerClassName={cn(
                  "rounded-[30px]! border border-white/5 min-h-[360px] h-full",
                  cap.color,
                )}
              >
                <div className="space-y-6">
                  <div
                    className={cn(
                      "h-auto w-12 rounded-xl flex items-center justify-center text-xl shadow-lg",
                      cap.iconBg,
                    )}
                  >
                    <Sparkles size={20} />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">
                      {cap.title}
                    </h3>

                    <ul className="space-y-3">
                      {cap.features.map((feature, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-start gap-3 text-neutral-300"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-neutral-500 shrink-0" />
                          <span className="text-sm md:text-base">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </WobbleCard>
            </FloatIn>
          ))}
        </div>

        {/* Standards */}
        <div className="mt-20">
          <FloatIn direction="up" delay={0.4}>
            <div className="rounded-[40px] bg-[#2D0D0D] border border-white/5 p-8 md:p-12">
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-900/30 border border-red-500/20 text-red-400 text-sm font-medium">
                  <span>🔒</span> {t("Capabilities.descriptions.4")}
                </div>
              </div>

              <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">
                {t("Capabilities.descriptions.5")}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {standards.map((std: any, idx: any) => (
                  <div
                    key={idx}
                    className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center space-y-4 hover:bg-white/10 transition-colors duration-300"
                  >
                    <span className="text-red-500 text-3xl font-black tracking-tighter">
                      {std.abbr}
                    </span>
                    <p className="text-neutral-400 text-sm leading-relaxed max-w-50">
                      {std.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FloatIn>
        </div>
      </div>
    </section>
  );
}
