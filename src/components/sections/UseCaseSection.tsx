"use client";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";
import { FloatIn } from "../FloatIn";
import { cn } from "@/lib/utils";

const caseStudies = [
  {
    id: "1",
    title: "Cluster 2 Use Cases",
    points: [
      "Real-time operational visibility",
      "Automated notifications",
      "Performance reports",
      "Digital service health checks",
    ],
    color: "bg-[#1E0D0D]", // Red-tinted
    numberBg: "bg-blue-600",
  },
  {
    id: "2",
    title: "DACO Use Case",
    points: [
      "Digital transformation support",
      "Operational management workflows",
      "Improved service delivery",
      "Automated process tracking",
    ],
    color: "bg-[#0D1E1E]", // Teal-tinted
    numberBg: "bg-blue-400",
  },
  {
    id: "3",
    title: "Operation Management & Monitoring",
    points: [
      "Real-time asset monitoring",
      "Automated alerts",
      "Integrated reporting system",
      "Decision support",
    ],
    color: "bg-[#1E0D0D]",
    numberBg: "bg-blue-600",
  },
];

export default function UseCasesSection() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Block */}
        <div className="text-center mb-16">
          <FloatIn direction="none">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-xs font-medium uppercase tracking-widest">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
              Use Cases
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mt-4">
              Real-World Use Cases
            </h2>
            <p className="text-neutral-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mt-6">
              Proven implementations across government and enterprise sectors,
              delivering measurable improvements in operational efficiency and
              digital transformation.
            </p>
          </FloatIn>
        </div>

        {/* Top Grid: Use Cases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {caseStudies.map((item, idx) => (
            <FloatIn key={idx} direction="up" delay={idx * 0.1}>
              <WobbleCard
                containerClassName={cn(
                  "rounded-[30px]! border border-white/5 p-8 min-h-[350px] h-full",
                  item.color,
                )}
              >
                <div className="flex flex-col space-y-6">
                  <div
                    className={cn(
                      "h-10 w-10 rounded-lg flex items-center justify-center text-white font-bold",
                      item.numberBg,
                    )}
                  >
                    {item.id}
                  </div>
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                  <ul className="space-y-3">
                    {item.points.map((point, pIdx) => (
                      <li
                        key={pIdx}
                        className="flex items-start gap-3 text-neutral-300"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-500 shrink-0" />
                        <span className="text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </WobbleCard>
            </FloatIn>
          ))}
        </div>

        {/* Featured Use Case Card */}
        <FloatIn direction="up" delay={0.4}>
          <div className="rounded-[40px] bg-[#0A0505] border border-white/5 p-10 md:p-16">
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-900/30 border border-orange-500/20 text-orange-400 text-sm font-medium">
                ⭐ Featured Use Case
              </div>
            </div>

            <h3 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">
              Smart Operations Monitoring Platform
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Challenge */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-4">
                <p className="text-pink-400 font-bold flex items-center gap-2">
                  🎯 Challenge
                </p>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Clients needed real-time visibility over operational assets
                  with automated alerts.
                </p>
              </div>

              {/* Solution */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-4">
                <p className="text-yellow-400 font-bold flex items-center gap-2">
                  💡 Solution
                </p>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Dynamic dashboards showing performance, utilization, and
                  system health. Automated alerts triggered by thresholds.
                </p>
              </div>

              {/* Outcomes */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-4">
                <p className="text-indigo-400 font-bold flex items-center gap-2">
                  📈 Outcomes
                </p>
                <ul className="space-y-2 text-neutral-400 text-sm">
                  <li>• 40% faster issue detection</li>
                  <li>• Reduction in downtime</li>
                  <li>• Improved operational responsiveness</li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center mt-12">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-2xl transition-all active:scale-95 flex items-center gap-2">
                Request More Scenarios 🚀
              </button>
            </div>
          </div>
        </FloatIn>
      </div>
    </section>
  );
}
