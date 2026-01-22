"use client";
import React from "react";
import { Timeline } from "../ui/timeline";
import { WobbleCard } from "../ui/wobble-card";
import { FloatIn } from "../FloatIn"; // Using the global animation we made

export default function TimelineHome() {
  const data = [
    {
      title: "1987",
      content: (
        <WobbleCard containerClassName="rounded-[30px]! overflow-hidden bg-black/50 border border-red-500/60">
          <div className="space-y-4">
            <div className="bg-red-500/10 text-red-700 text-xs font-bold px-2 py-1 rounded-md w-fit flex items-center gap-2">
              <span>📅</span> 1987
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white">
              German Heritage Begins
            </h3>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              IBCOL - German company established as a leader in integrated
              security systems in Saudi Arabia.
            </p>
          </div>
        </WobbleCard>
      ),
    },
    {
      title: "2002",
      content: (
        <WobbleCard containerClassName="rounded-[30px]! overflow-hidden bg-black/50 border border-red-500/60">
          <div className="space-y-4">
            <div className="bg-red-500/10 text-red-500 text-xs font-bold px-2 py-1 rounded-md w-fit flex items-center gap-2">
              <span>📅</span> 2002
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white">
              ENZAR is Born
            </h3>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              ENZAR Company founded as successor to IBCOL, combining German
              excellence with local expertise.
            </p>
          </div>
        </WobbleCard>
      ),
    },
    {
      title: "2010",
      content: (
        <WobbleCard containerClassName="rounded-[30px]! overflow-hidden bg-black/50 border border-red-500/60">
          <div className="space-y-4">
            <div className="bg-red-500/10 text-red-500 text-xs font-bold px-2 py-1 rounded-md w-fit flex items-center gap-2">
              <span>📅</span> 2010
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white">
              Growth & Expansion
            </h3>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              Full acquisition of IBCOL assets and expansion of services across
              Saudi Arabia with Saudi Aramco approval.
            </p>
          </div>
        </WobbleCard>
      ),
    },
    {
      title: "2020",
      content: (
        <WobbleCard containerClassName="rounded-[30px]! overflow-hidden bg-black/50 border border-red-500/60">
          <div className="space-y-4">
            <div className="bg-red-500/10 text-red-500 text-xs font-bold px-2 py-1 rounded-md w-fit flex items-center gap-2">
              <span>📅</span> 2020
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white">
              Digital Transformation
            </h3>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              Launch of digital transformation initiatives, integrating AI and
              machine learning into security solutions
            </p>
          </div>
        </WobbleCard>
      ),
    },
    {
      title: "2023",
      content: (
        <WobbleCard containerClassName="rounded-[30px]! overflow-hidden bg-black/50 border border-red-500/60">
          <div className="space-y-4">
            <div className="bg-red-500/10 text-red-500 text-xs font-bold px-2 py-1 rounded-md w-fit flex items-center gap-2">
              <span>📅</span> 2023
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white">
              Enzar Digital
            </h3>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              Establishment of Enzar Digital - the center of excellence driving
              innovation in digital and security solutions
            </p>
          </div>
        </WobbleCard>
      ),
    },
    {
      title: "2024+",
      content: (
        <WobbleCard containerClassName="rounded-[30px]! overflow-hidden bg-black/50 border border-red-500/60">
          <div className="space-y-4">
            <div className="bg-red-500/10 text-red-500 text-xs font-bold px-2 py-1 rounded-md w-fit flex items-center gap-2">
              <span>📅</span> 2024+
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white">
              The Future
            </h3>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              Expansion into software development, cloud computing, and
              AI-powered solutions shaping the future of digital security
            </p>
          </div>
        </WobbleCard>
      ),
    },
  ];

  return (
    <section className="relative w-full bg-[#250101] py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mb-96">
        {/* LEFT SIDE: STICKY HEADER */}
        <div className="lg:sticky lg:top-24 lg:h-fit space-y-6">
          <FloatIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-sm font-medium">
              <span>📅</span> Our Journey
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight mt-4">
              Discover How <br />
              <span className="text-red-600">ENZAR Was Formed</span>
            </h2>
            <p className="text-neutral-400 text-lg max-w-md">
              From German heritage to digital innovation - a journey of
              excellence, expertise, and continuous evolution.
            </p>

            {/* Heritage Badge */}
            <div className="mt-10 p-6 rounded-[20px] bg-white/5 border border-red-500/60 flex items-center gap-4 w-fit">
              <div className="h-12 w-12 rounded-lg bg-red-600 flex items-center justify-center">
                <span className="text-white text-2xl">🏛️</span>
              </div>
              <div>
                <p className="text-neutral-400 text-xs uppercase tracking-widest">
                  Heritage
                </p>
                <p className="text-white text-2xl font-bold">35+ Years</p>
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
