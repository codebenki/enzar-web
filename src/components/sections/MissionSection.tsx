"use client";
import { WobbleCard } from "../ui/wobble-card";
import { FloatIn } from "../FloatIn";
import { cn } from "@/lib/utils";

export default function MissionSection() {
  const cardData = [
    {
      title: "ENZAR Company - Heritage & Expertise",
      subtitle: "Established in 2002",
      icon: "🏛️",
      iconBg: "bg-[#6e020e] border border-2xl border-red-600",
      points: [
        "Over 20 years of integrated security expertise",
        "Successor to German company IBCOL (1987–2010)",
        "Saudi Aramco & Public Security approved",
        "Leading general contractor & systems integrator",
      ],
      containerClass: "bg-[#2e070b] hover:bg-[#57060f]", // Dark brownish tint from image
    },
    {
      title: "Enzar Digital - Technology Powerhouse",
      subtitle: "Digital Excellence Center",
      icon: "💻",
      iconBg: "bg-[#6e020e] border border-2xl border-red-600",
      points: [
        "Top-tier Software Engineers & AI Specialists",
        "Cloud Architects & Full-Stack Developers",
        "Culture rooted in innovation and collaboration",
        "Modern, secure, future-ready digital solutions",
      ],
      containerClass: "bg-[#2e070b] hover:bg-[#57060f]", // Dark reddish tint from image
    },
  ];

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <FloatIn>
          <div className="text-center text-5xl font-bold p-4 mb-18">
            We are <p className="text-red-600">Enzar Digital</p>
          </div>
        </FloatIn>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {cardData.map((card, idx) => (
            <FloatIn key={idx} direction="up" delay={idx * 0.2}>
              <WobbleCard
                containerClassName={cn(
                  "rounded-[30px]! overflow-hidden border border-white/5 min-h-[400px]",
                  card.containerClass,
                )}
              >
                <div className="flex flex-col h-full space-y-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={cn(
                        "h-14 w-14 rounded-2xl flex items-center justify-center text-2xl",
                        card.iconBg,
                      )}
                    >
                      {card.icon}
                    </div>
                    <div>
                      <h3 className="text-white text-2xl font-bold">
                        {card.title}
                      </h3>
                      <p className="text-neutral-400 text-sm">
                        {card.subtitle}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {card.points.map((point, pIdx) => (
                      <li
                        key={pIdx}
                        className="flex items-center gap-3 text-neutral-200"
                      >
                        <span
                          className={cn(
                            "flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center text-[10px]",
                            card.iconBg,
                          )}
                        >
                          ✔
                        </span>
                        <span className="text-sm md:text-base">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </WobbleCard>
            </FloatIn>
          ))}
        </div>
        {/* BOTTOM ROW: OUR MISSION */}
        <FloatIn direction="up" delay={0.2}>
          <div className="rounded-[30px] bg-[#2e070b] border border-white/5 p-10 md:p-16 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-900/30 border border-red-500/20 text-red-400 text-sm font-medium">
              <span>🚀</span> Our Mission
            </div>
            <h2 className="text-white text-xl md:text-3xl font-semibold leading-relaxed max-w-4xl mx-auto">
              Enzar Digital is more than a team—it is a center of excellence
              driving innovation across ENZAR&apos;s digital ecosystem, backed
              by over two decades of security and operational expertise.
            </h2>
          </div>
        </FloatIn>
      </div>
    </section>
  );
}
