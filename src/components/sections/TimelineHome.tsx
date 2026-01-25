"use client";
import { Timeline } from "../ui/timeline";
import { WobbleCard } from "../ui/wobble-card";
import { FloatIn } from "../FloatIn"; // Using the global animation we made
import { useTranslations } from "next-intl";
import { Calendar, Landmark } from "lucide-react";

export default function TimelineHome() {
  const t = useTranslations();

  const timeline = t.raw("Timeline") as {
    title: string[];
    header: string[];
    description: string[];
  };

  const data = timeline.title.map((title, index) => ({
    title,
    content: (
      <WobbleCard containerClassName="rounded-[30px]! overflow-hidden bg-black/50 border border-red-500/60">
        <div className="space-y-4">
          <div className="bg-red-500/10 text-red-700 text-xs font-bold px-2 py-1 rounded-md w-fit flex items-center gap-2">
            <Calendar />
            {title}
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-white">
            {timeline.header[index]}
          </h3>

          <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
            {Object.values(timeline.description[index]).map((desc, i) => (
              <span key={i}>{desc}</span>
            ))}
          </p>
        </div>
      </WobbleCard>
    ),
  }));

  return (
    <section className="relative w-full bg-[#250101] py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mb-96">
        {/* LEFT SIDE: STICKY HEADER */}
        <div className="lg:sticky lg:top-24 lg:h-fit space-y-6">
          <FloatIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-sm font-medium">
              <span>
                <Calendar />
              </span>
              {t("Timeline.sidetext.1")}
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight mt-4">
              {t("Timeline.sidetext.2")} <br />
              <span className="text-red-600">{t("Timeline.sidetext.3")}</span>
            </h2>
            <p className="text-neutral-400 text-lg max-w-md">
              {t("Timeline.sidetext.4")}
              {t("Timeline.sidetext.5")}
            </p>

            {/* Heritage Badge */}
            <div className="mt-10 p-6 rounded-[20px] bg-white/5 border border-red-500/60 flex items-center gap-4 w-fit">
              <div className="h-12 w-12 rounded-lg bg-red-600 flex items-center justify-center">
                <span className="text-white text-2xl">
                  <Landmark />
                </span>
              </div>
              <div>
                <p className="text-neutral-400 text-xs uppercase tracking-widest">
                  {t("Timeline.sidetext.6")}
                </p>
                <p className="text-white text-2xl font-bold">
                  {t("Timeline.sidetext.7")}
                </p>
              </div>
            </div>
          </FloatIn>
        </div>

        {/* RIGHT SIDE: SCROLLING TIMELINE */}
        <div className="w-full">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  );
}
