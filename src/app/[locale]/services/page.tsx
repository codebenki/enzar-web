"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FloatIn } from "@/components/FloatIn";
import {
  TrendingUp,
  Rocket,
  Target,
  Code2,
  Lightbulb,
  Database,
} from "lucide-react";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Digital Transformation",
    description:
      "Transform your operations with innovative digital solutions that increase efficiency and drive growth.",
    icon: <TrendingUp className="w-6 h-6 text-red-600" />,
    features: [
      "Digital strategy development",
      "Legacy system modernization",
      "Cloud architecture",
      "API integration",
    ],
  },
  {
    title: "Venture Building",
    description:
      "Launch digital products from zero to market with speed and efficiency.",
    icon: <Rocket className="w-6 h-6 text-red-600" />,
    features: [
      "Idea validation",
      "MVP development",
      "Go-to-market strategy",
      "Product scaling",
    ],
  },
  {
    title: "Business Consulting",
    description:
      "Strategic guidance to align your business goals with the right technology solutions.",
    icon: <Target className="w-6 h-6 text-red-600" />,
    features: [
      "Strategic planning",
      "Process analysis",
      "Business optimization",
      "Change management",
    ],
  },
  {
    title: "Technology Consulting",
    description:
      "Deep expertise in modern technologies and the right tech stack selection.",
    icon: <Code2 className="w-6 h-6 text-red-600" />,
    features: [
      "Architecture review",
      "Technology selection",
      "Code review",
      "Best practices",
    ],
  },
  {
    title: "Innovation & Strategy",
    description:
      "Lead innovation through data-driven strategies and design thinking.",
    icon: <Lightbulb className="w-6 h-6 text-red-600" />,
    features: [
      "Innovation workshops",
      "Market research",
      "Digital roadmap",
      "Design thinking",
    ],
  },
  {
    title: "Data & Analytics",
    description:
      "Turn data into actionable insights for better decision-making.",
    icon: <Database className="w-6 h-6 text-red-600" />,
    features: [
      "Data engineering",
      "Business intelligence",
      "Predictive analytics",
      "Data visualization",
    ],
  },
];

export default function Services() {
  return (
    <>
      <section className="bg-black py-24 px-6 pt-32">
        <div className="max-w-7xl mx-auto my-10">
          {/* Main Title Section */}
          <div className="text-center mb-24">
            <FloatIn direction="up">
              <h1 className="text-5xl md:text-8xl font-bold text-white mb-6">
                Our Services
              </h1>
              <p className="text-neutral-400 text-lg md:text-xl tracking-widest uppercase font-medium">
                Comprehensive solutions to digitally transform your business and
                drive innovation
              </p>
            </FloatIn>
          </div>
        </div>
      </section>
      <section className="bg-[#020202] py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* SERVICES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 hover:border-red-600/50 transition-all duration-500"
              >
                {/* Icon */}
                <div className="mb-6 flex items-center justify-start">
                  <div className="p-3 rounded-2xl bg-white/3 group-hover:bg-red-600/10 transition-colors">
                    {service.icon}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Feature List */}
                <ul className="space-y-3">
                  {service.features.map((feature, fIdx) => (
                    <li
                      key={fIdx}
                      className="flex items-start gap-2 text-xs text-neutral-500"
                    >
                      <span className="text-red-600 mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* BOTTOM CTA SECTION */}
          <div className="text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Ready to Start Your Project?
            </h2>
            <p className="text-neutral-400 max-w-xl mx-auto">
              Let's discuss how we can help you achieve your digital goals
            </p>
            <button className="relative group overflow-hidden bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full font-bold transition-all shadow-[0_0_30px_rgba(220,38,38,0.3)] hover:shadow-[0_0_50px_rgba(220,38,38,0.5)]">
              Contact Us
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
