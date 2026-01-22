"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Heart, Users2, Lightbulb, Target, Award, Globe } from "lucide-react";
import { FloatIn } from "@/components/FloatIn";
import Footer from "@/components/Footer";
import Link from "next/link";

const stats = [
  { label: "Team Members", value: "150+" },
  { label: "Countries", value: "15+" },
  { label: "Women in Leadership", value: "45%" },
  { label: "Employee Satisfaction", value: "98%" },
];

const values = [
  {
    title: "Passion & Excellence",
    description:
      "We are passionate about what we do and strive for excellence in every project",
    icon: <Heart className="w-6 h-6 text-red-600" />,
  },
  {
    title: "Collaboration & Teamwork",
    description:
      "We believe in the power of teamwork and collaboration to achieve exceptional results",
    icon: <Users2 className="w-6 h-6 text-red-600" />,
  },
  {
    title: "Innovation & Creativity",
    description:
      "We encourage creative thinking and continuous innovation in our solutions",
    icon: <Lightbulb className="w-6 h-6 text-red-600" />,
  },
  {
    title: "Customer Focus",
    description:
      "We put our clients at the heart of everything we do and strive to exceed their expectations",
    icon: <Target className="w-6 h-6 text-red-600" />,
  },
  {
    title: "Quality & Professionalism",
    description:
      "We commit to the highest standards of quality and professionalism in all our work",
    icon: <Award className="w-6 h-6 text-red-600" />,
  },
  {
    title: "Diversity & Inclusion",
    description:
      "We celebrate diversity and create an inclusive environment where everyone thrives",
    icon: <Globe className="w-6 h-6 text-red-600" />,
  },
];

export default function Culture() {
  return (
    <>
      <section className="bg-black py-24 px-6 pt-32">
        <div className="max-w-7xl mx-auto my-10">
          {/* Main Title Section */}
          <div className="text-center mb-24">
            <FloatIn direction="up">
              <h1 className="text-5xl md:text-8xl font-bold text-white mb-6">
                Our Culture
              </h1>
              <p className="text-neutral-400 text-lg md:text-xl tracking-widest uppercase font-medium">
                A workplace that inspires creativity, celebrates diversity, and
                drives innovation
              </p>
            </FloatIn>
          </div>
        </div>
      </section>
      <section className="bg-black py-24 px-6">
        <FloatIn>
          <div className="max-w-7xl mx-auto">
            {/* TOP STATS */}
            <FloatIn>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 text-center">
                {stats.map((stat, idx) => (
                  <div key={idx} className="space-y-2">
                    <p className="text-4xl lg:text-5xl font-bold text-red-600">
                      {stat.value}
                    </p>
                    <p className="text-sm text-neutral-400 font-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FloatIn>

            <FloatIn>
              {/* SECTION HEADER */}
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Our Values
                </h2>
                <p className="text-neutral-500 max-w-2xl mx-auto">
                  The principles that guide our work and shape our culture
                </p>
              </div>
            </FloatIn>

            {/* VALUES GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
              {values.map((item, idx) => (
                <FloatIn key={idx}>
                  <div
                    key={idx}
                    className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 hover:border-red-600/30 transition-all duration-300 group"
                  >
                    <div className="mb-6">{item.icon}</div>
                    <h3 className="text-white text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </FloatIn>
              ))}
            </div>

            {/* FOOTER SPLIT LAYOUT */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <FloatIn>
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold text-white">
                    Work Environment
                  </h2>
                  <p className="text-neutral-400 leading-relaxed">
                    We provide a flexible and stimulating work environment that
                    encourages professional and personal development. We believe
                    in work-life balance and offer opportunities for continuous
                    learning and growth.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Flexible work (office & remote)",
                      "Professional development programs",
                      "Health and wellness initiatives",
                      "Team building events",
                    ].map((bullet, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-sm text-neutral-400"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </FloatIn>
              <FloatIn>
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold text-white">
                    Careers Philosophy
                  </h2>
                  <p className="text-neutral-400 leading-relaxed">
                    We seek talented and passionate individuals who share our
                    vision for innovation and excellence. We invest in our team
                    and provide opportunities for growth and development in a
                    supportive and stimulating environment.
                  </p>
                  <button className="relative group overflow-hidden">
                    <div className="absolute inset-0 bg-red-600 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
                    <div className="relative bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold transition-all active:scale-95">
                      <Link href={"/en/career"}>Explore Careers</Link>
                    </div>
                  </button>
                </div>
              </FloatIn>
            </div>
          </div>
        </FloatIn>
      </section>
      <Footer />
    </>
  );
}
