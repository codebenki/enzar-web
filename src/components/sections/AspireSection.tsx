"use client";
import React from "react";
import { FloatIn } from "../FloatIn";

export default function AspireSection() {
  return (
    <section className="bg-black py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <FloatIn direction="up">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-10 tracking-tight">
            What We Aspire to Be
          </h2>
        </FloatIn>

        {/* Aspiration Statement */}
        <FloatIn direction="up" delay={0.2}>
          <p className="text-neutral-400 text-lg md:text-2xl leading-relaxed font-medium">
            We aspire to be the leading digital partner for organizations
            seeking transformation. We strive to build platforms that don&apos;t
            just solve problems, but unlock new possibilities and create
            opportunities for growth and innovation.
          </p>
        </FloatIn>

        {/* Subtle Decorative Element */}
        <FloatIn direction="up" delay={0.4} distance={10}>
          <div className="mt-16 flex justify-center">
            <div className="h-px w-24 bg-linear-to-r from-transparent via-red-600 to-transparent opacity-50" />
          </div>
        </FloatIn>
      </div>
    </section>
  );
}
