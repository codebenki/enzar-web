"use client";
import { Heart, Users2, Lightbulb, Target, Award, Globe } from "lucide-react";
import { FloatIn } from "@/components/FloatIn";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useTranslations } from "next-intl";

const icons = [
  <Heart className="w-6 h-6 text-red-600" />,
  <Users2 className="w-6 h-6 text-red-600" />,
  <Lightbulb className="w-6 h-6 text-red-600" />,
  <Target className="w-6 h-6 text-red-600" />,
  <Award className="w-6 h-6 text-red-600" />,
  <Globe className="w-6 h-6 text-red-600" />,
];

type Values = {
  title: string[];
  description: string[];
};
type Stats = {
  value: string;
  label: string;
};

export default function Culture() {
  const t = useTranslations("Culture");

  const data = t.raw("values");
  const values = data.title.map((title: any, index: any) => ({
    title: title,
    description: data.description[index],
    icon: icons[index],
  }));

  const dataStats = t.raw("stats") as Stats[];
  const stats = Array.isArray(dataStats) ? dataStats : [];

  return (
    <>
      <section className="bg-black py-24 px-6 pt-32">
        <div className="max-w-7xl mx-auto my-10">
          {/* Main Title Section */}
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
      <section className="bg-black py-24 px-6">
        <FloatIn>
          <div className="max-w-7xl mx-auto">
            {/* TOP STATS */}
            <FloatIn>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 text-center">
                {stats.map((stat: any, idx: any) => (
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
                  {t("description.2")}
                </h2>
                <p className="text-neutral-500 max-w-2xl mx-auto">
                  {t("description.3")}
                </p>
              </div>
            </FloatIn>

            {/* VALUES GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
              {values.map((item: any, idx: any) => (
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
                    {t("description.4")}
                  </h2>
                  <p className="text-neutral-400 leading-relaxed">
                    {t("description.5")}
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
                    {t("description.6")}
                  </h2>
                  <p className="text-neutral-400 leading-relaxed">
                    {t("description.7")}
                  </p>
                  <button className="relative group overflow-hidden">
                    <div className="absolute inset-0 bg-red-600 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
                    <div className="relative bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold transition-all active:scale-95">
                      <Link href={"/career"}>{t("description.8")}</Link>
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
