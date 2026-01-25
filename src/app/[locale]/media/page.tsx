"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Calendar, Clock, Dot } from "lucide-react";
import Link from "next/link";
import { FloatIn } from "@/components/FloatIn";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";

type NewsItems = {
  category: string[];
  date: string[];
  title: string[];
  description: string[];
};

type InsightItems = {
  type: string[];
  date: string[];
  readTime: string[];
  title: string[];
  description: string[];
};

export default function Media() {
  const t = useTranslations("Media");

  const data = t.raw("newsItems") as NewsItems;
  const newsItems = data.title.map((title: any, index: any) => ({
    category: data.category[index],
    date: data.date[index],
    title: title,
    description: data.description[index],
  }));

  const insightData = t.raw("insightItems") as InsightItems;
  const insightItems = insightData.title.map((title: any, index: any) => ({
    type: insightData.type[index],
    date: insightData.date[index],
    readTime: insightData.readTime[index],
    title: title,
    description: insightData.description[index],
  }));

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-black py-24 px-6 pt-32">
        <div className="max-w-7xl mx-auto my-10">
          <div className="text-center mb-24">
            <FloatIn direction="up">
              <h1 className="text-5xl md:text-8xl font-bold text-white mb-6">
                {t("description.0")}
              </h1>
              <p className="text-neutral-400 text-lg md:text-xl tracking-widest uppercase font-medium">
                {t("description.1")}
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
                <h2 className="text-5xl font-bold text-white mb-4">
                  {t("description.2.0")}
                </h2>
                <p className="text-neutral-500">{t("description.3.0")}</p>
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
                      {t("description.4")}
                    </div>
                    <div className="p-8 space-y-4">
                      <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest">
                        <span className="text-red-500 font-bold">
                          {item.category}
                        </span>
                        <span className="text-neutral-600">
                          <Dot />
                        </span>
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
                        {t("description.5")}{" "}
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
                <h2 className="text-5xl font-bold text-white mb-4">
                  {t("description.2.1")}
                </h2>
                <p className="text-neutral-500">{t("description.3.1")}</p>
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
                        <span className="text-neutral-600">
                          <Dot />
                        </span>
                        <div className="flex items-center gap-1.5 text-neutral-400">
                          <Calendar size={12} /> {item.date}
                        </div>
                        <span className="text-neutral-600">
                          <Dot />
                        </span>
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
                      {t("description.6")} <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </FloatIn>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
