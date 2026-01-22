"use client";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";
import { FloatIn } from "../FloatIn";
import { cn } from "@/lib/utils";

const solutions = [
  {
    title: "Management & Planning Solutions",
    description:
      "Tools that streamline project tracking, planning, resource allocation, and operational governance—all customized for complex government and enterprise workflows.",
    icon: "📊",
    color: "bg-[#1E0D0D]", // Deep Red/Brown
    iconBg: "bg-red-500",
    keyFeatures: [
      "Advanced project tracking",
      "Smart resource allocation",
      "Operational governance",
      "Strategic planning",
    ],
  },
  {
    title: "Operational Management Tools",
    description:
      "Comprehensive suite of tools for task management, workflow automation, and performance monitoring.",
    icon: "⚙️",
    color: "bg-[#0D1E1E]", // Deep Teal
    iconBg: "bg-emerald-500",
    keyFeatures: [
      "Task management",
      "Workflow automation",
      "Role-based access",
      "Performance dashboards",
      "KPI and SLA monitoring",
    ],
  },
  {
    title: "Custom Solutions",
    description:
      "Fully tailored digital products designed to meet specific client needs while ensuring full compliance with national regulations.",
    icon: "🔧",
    color: "bg-[#1E0D0D]",
    iconBg: "bg-red-500",
    keyFeatures: [
      "Fully custom design",
      "National compliance",
      "Legacy system integration",
      "Dedicated support",
    ],
  },
  {
    title: "Cloud-Based Platforms",
    description:
      "Solutions hosted and managed on our Azure infrastructure with enterprise-level reliability and security.",
    icon: "☁️",
    color: "bg-[#1E0D0D]",
    iconBg: "bg-red-500",
    keyFeatures: [
      "Azure hosting",
      "Enterprise security",
      "High reliability",
      "Auto-scaling",
    ],
  },
];

export default function SolutionsSection() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Block */}
        <div className="text-center mb-20">
          <FloatIn direction="none">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-xs font-medium uppercase tracking-widest">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
              Our Solutions
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mt-4">
              Products & Digital Solutions
            </h2>
            <p className="text-neutral-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mt-6">
              Comprehensive digital products and solutions designed to meet
              complex enterprise and government requirements with full
              regulatory compliance.
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
                      Key Features
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
