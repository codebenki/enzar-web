"use client";
import { WobbleCard } from "../ui/wobble-card";
import { FloatIn } from "../FloatIn";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { Layers } from "lucide-react";

type Solutions = {
  title: string[];
  description: string[];
  color: string[];
  iconBg: string[];
  keyFeatures: string[][];
};

export default function SolutionsSection() {
  const t = useTranslations();
  const data = t.raw("Solutions") as Solutions;

  const solutions = data.title.map((item, index) => ({
    title: item,
    description: data.description[index],
    icon: <Layers size={20} />,
    color: data.color[index],
    iconBg: data.iconBg[index],
    keyFeatures: data.keyFeatures[index],
  }));

  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Block */}
        <div className="text-center mb-20">
          <FloatIn direction="none">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-xs font-medium uppercase tracking-widest">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
              {t("Solutions.container.1")}
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mt-4">
              {t("Solutions.container.2")}
            </h2>
            <p className="text-neutral-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mt-6">
              {t("Solutions.container.3")}
            </p>
          </FloatIn>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((item, idx) => (
            <FloatIn key={idx} direction="up" delay={idx * 0.1}>
              <WobbleCard
                containerClassName={cn(
                  "rounded-[30px]! border border-white/5 min-h-[450px] p-8 md:p-12 h-full",
                  item.color,
                )}
              >
                <div className="flex flex-col h-full space-y-8">
                  {/* Icon */}
                  <div
                    className={cn(
                      "h-14 w-14 rounded-2xl flex items-center justify-center text-2xl shadow-xl",
                      item.iconBg,
                    )}
                  >
                    {item.icon}
                  </div>

                  {/* Text Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-neutral-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Key Features List */}
                  <div className="space-y-4">
                    <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest">
                      {t("Solutions.container.4")}
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {item.keyFeatures.map((feature, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-center gap-3 text-neutral-200"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-neutral-600 shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </WobbleCard>
            </FloatIn>
          ))}
        </div>
      </div>
    </section>
  );
}
