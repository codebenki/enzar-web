"use client";
import { WobbleCard } from "../ui/wobble-card";
import { FloatIn } from "../FloatIn";
import { cn } from "@/lib/utils";

const capabilities = [
  {
    title: "Software Engineering",
    icon: "⚙️",
    color: "bg-[#2D0D0D]", // Deep Red
    iconBg: "bg-red-500",
    features: [
      "Full-stack development",
      "Scalable architectures",
      "API integrations",
    ],
  },
  {
    title: "AI & Automation",
    icon: "🤖",
    color: "bg-[#1E110D]", // Deep Orange/Brown
    iconBg: "bg-orange-500",
    features: [
      "Process automation",
      "Intelligent decision systems",
      "Predictive analytics",
    ],
  },
  {
    title: "Front-End Excellence",
    icon: "🎨",
    color: "bg-[#0D2D23]", // Deep Teal/Green
    iconBg: "bg-emerald-500",
    features: [
      "Modern UI/UX",
      "High-performance React applications",
      "Responsive and accessible interfaces",
    ],
  },
  {
    title: "Back-End Engineering",
    icon: "🗄️",
    color: "bg-[#2D1B0D]", // Deep Amber
    iconBg: "bg-amber-600",
    features: [
      "Secure, modular, scalable backend systems",
      "High availability and failover design",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    color: "bg-[#2D0D0D]", // Deep Red
    iconBg: "bg-red-500",
    features: [
      "Azure cloud experts",
      "CI/CD pipelines",
      "Infrastructure as Code",
      "Containerization & Docker",
    ],
  },
  {
    title: "System Integration",
    icon: "📊",
    color: "bg-[#0D2D23]", // Deep Teal/Green
    iconBg: "bg-emerald-500",
    features: [
      "Enterprise-grade interoperability",
      "Workflow automation",
      "Real-time data pipelines",
    ],
  },
];
const standards = [
  {
    abbr: "NCA",
    name: "National Cybersecurity Authority",
  },
  {
    abbr: "CITC",
    name: "Communications & Information Technology Commission",
  },
  {
    abbr: "Saudi Gov",
    name: "Saudi Government Cybersecurity Standards",
  },
];

export default function CapabilitiesSection() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        <div className="text-center mb-16 space-y-4">
          <FloatIn direction="none">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-xs font-medium uppercase tracking-widest">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
              Our Expertise
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mt-4">
              Our Capabilities
            </h2>
            <p className="text-neutral-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mt-6">
              We deliver end-to-end digital solutions built with world-class
              engineering and aligned with all Saudi national cybersecurity and
              digital standards.
            </p>
          </FloatIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => (
            <FloatIn key={idx} direction="up" delay={idx * 0.1}>
              <WobbleCard
                containerClassName={cn(
                  "rounded-[30px]! border border-white/5 min-h-[360px] h-full",
                  cap.color,
                )}
              >
                <div className="space-y-6">
                  <div
                    className={cn(
                      "h-auto w-12 rounded-xl flex items-center justify-center text-xl shadow-lg",
                      cap.iconBg,
                    )}
                  >
                    {cap.icon}
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">
                      {cap.title}
                    </h3>
                    <ul className="space-y-3">
                      {cap.features.map((feature, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-start gap-3 text-neutral-300"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-neutral-500 shrink-0" />
                          <span className="text-sm md:text-base">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </WobbleCard>
            </FloatIn>
          ))}
        </div>
        <div className="mt-20">
          <FloatIn direction="up" delay={0.4}>
            <div className="rounded-[40px] bg-[#2D0D0D] border border-white/5 p-8 md:p-12">
              {/* Header Badge */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-900/30 border border-red-500/20 text-red-400 text-sm font-medium">
                  <span>🔒</span> Compliance & Security
                </div>
              </div>

              <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">
                Aligned with Saudi Standards
              </h2>

              {/* Standards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {standards.map((std, idx) => (
                  <div
                    key={idx}
                    className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center space-y-4 hover:bg-white/10 transition-colors duration-300"
                  >
                    <span className="text-red-500 text-3xl font-black tracking-tighter">
                      {std.abbr}
                    </span>
                    <p className="text-neutral-400 text-sm leading-relaxed max-w-50">
                      {std.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FloatIn>
        </div>
      </div>
    </section>
  );
}
