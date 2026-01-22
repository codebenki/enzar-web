"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { FloatIn } from "@/components/FloatIn";

const newsItems = [
  {
    category: "Company News",
    date: "Jan 15, 2024",
    title: "Enzar Digital Launches Innovative Logistics Platform",
    description:
      "Announcing our new digital platform revolutionizing the logistics industry",
    // image: "/api/placeholder/400/250",
  },
  {
    category: "Partnership",
    date: "Jan 10, 2024",
    title: "New Strategic Partnership with Industry Leaders",
    description:
      "Collaborating with leading partners to expand our digital services",
    // image: "/api/placeholder/400/250",
  },
  {
    category: "Award",
    date: "Jan 5, 2024",
    title: "Awarded Best Digital Innovation",
    description:
      "International recognition for our innovative digital solutions in logistics",
    // image: "/api/placeholder/400/250",
  },
];

const insightItems = [
  {
    type: "Tech Insights",
    date: "Jan 20, 2024",
    readTime: "5 min read",
    title: "The Future of Digital Transformation in Logistics",
    description:
      "Exploring the trends and technologies shaping the industry's future",
  },
  {
    type: "Thought Leadership",
    date: "Jan 18, 2024",
    readTime: "8 min read",
    title: "Building Scalable Digital Platforms",
    description:
      "Best practices and lessons learned from developing enterprise-grade solutions",
  },
  {
    type: "Case Study",
    date: "Jan 12, 2024",
    readTime: "10 min read",
    title: "Transforming Logistics Operations: A Success Story",
    description:
      "How we helped a major client achieve 40% operational efficiency",
  },
];

export default function Media() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-black py-24 px-6 pt-32">
        <div className="max-w-7xl mx-auto my-10">
          <div className="text-center mb-24">
            <FloatIn direction="up">
              <h1 className="text-5xl md:text-8xl font-bold text-white mb-6">
                Media
              </h1>
              <p className="text-neutral-400 text-lg md:text-xl tracking-widest uppercase font-medium">
                Latest news, insights, and updates from Enzar Digital
              </p>
            </FloatIn>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="bg-black py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* NEWS SECTION */}
          <div className="mb-24">
            <div className="mb-12">
              <FloatIn direction="up">
                <h2 className="text-5xl font-bold text-white mb-4">News</h2>
                <p className="text-neutral-500">
                  Latest updates and announcements from the company
                </p>
              </FloatIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {newsItems.map((item, idx) => (
                <FloatIn key={`news-${idx}`} direction="up" delay={idx * 0.1}>
                  <div className="group bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden hover:border-red-600/30 transition-all duration-300 h-full">
                    <div className="aspect-video flex justify-center items-center bg-red-800 opacity-50 relative overflow-hidden">
                      {/* <img
                        src={item.image}
                        alt={item.title}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-60 group-hover:opacity-100"
                      /> */}
                      Image Placeholder
                    </div>
                    <div className="p-8 space-y-4">
                      <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest">
                        <span className="text-red-500 font-bold">
                          {item.category}
                        </span>
                        <span className="text-neutral-600">•</span>
                        <span className="text-neutral-400">{item.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white leading-tight group-hover:text-red-500 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-neutral-500 leading-relaxed">
                        {item.description}
                      </p>
                      <Link
                        href="#"
                        className="inline-flex items-center gap-2 text-xs font-bold text-red-500 pt-2 group/link"
                      >
                        Read More{" "}
                        <ArrowUpRight
                          size={14}
                          className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                        />
                      </Link>
                    </div>
                  </div>
                </FloatIn>
              ))}
            </div>
          </div>

          {/* INSIGHTS SECTION */}
          <div>
            <div className="mb-12">
              <FloatIn direction="up">
                <h2 className="text-5xl font-bold text-white mb-4">Insights</h2>
                <p className="text-neutral-500">
                  Thought leadership and in-depth articles from our experts
                </p>
              </FloatIn>
            </div>

            <div className="space-y-4">
              {insightItems.map((item, idx) => (
                <FloatIn
                  key={`insight-${idx}`}
                  direction="up"
                  delay={idx * 0.1}
                >
                  <div className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 hover:border-red-600/30 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-3 max-w-2xl">
                      <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold">
                        <span className="text-red-500">{item.type}</span>
                        <span className="text-neutral-600">•</span>
                        <div className="flex items-center gap-1.5 text-neutral-400">
                          <Calendar size={12} /> {item.date}
                        </div>
                        <span className="text-neutral-600">•</span>
                        <div className="flex items-center gap-1.5 text-neutral-400">
                          <Clock size={12} /> {item.readTime}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-red-500 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-neutral-500">
                        {item.description}
                      </p>
                    </div>

                    <Link
                      href="#"
                      className="shrink-0 flex items-center gap-2 text-xs font-bold text-white border border-white/10 px-6 py-3 rounded-full hover:bg-white/5 transition-all"
                    >
                      Read Article <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </FloatIn>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
