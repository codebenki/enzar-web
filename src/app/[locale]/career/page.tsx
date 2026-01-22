"use client";
import { FloatIn } from "@/components/FloatIn";
import Footer from "@/components/Footer";
import { ArrowUpRight, MapPin, Briefcase, Clock } from "lucide-react";

const perks = [
  {
    title: "Competitive Salaries",
    description: "Competitive salary packages and performance bonuses",
  },
  {
    title: "Professional Growth",
    description: "Continuous training and professional development programs",
  },
  {
    title: "Flexible Work",
    description: "Flexible work options including remote work",
  },
  {
    title: "Health Insurance",
    description: "Comprehensive health insurance for you and your family",
  },
  {
    title: "Annual Leave",
    description: "Generous annual leave and sick leave",
  },
  {
    title: "Creative Environment",
    description:
      "Stimulating work environment that encourages creativity and innovation",
  },
];

const jobs = [
  {
    title: "Senior Software Engineer",
    dept: "Engineering",
    location: "Riyadh, Saudi Arabia",
    type: "Full-time",
  },
  {
    title: "UI/UX Designer",
    dept: "Design",
    location: "Jeddah, Saudi Arabia",
    type: "Full-time",
  },
  {
    title: "Product Manager",
    dept: "Product",
    location: "Riyadh, Saudi Arabia",
    type: "Full-time",
  },
  {
    title: "DevOps Engineer",
    dept: "Infrastructure",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Data Analyst",
    dept: "Data",
    location: "Dammam, Saudi Arabia",
    type: "Full-time",
  },
  {
    title: "Full Stack Developer",
    dept: "Engineering",
    location: "Riyadh, Saudi Arabia",
    type: "Full-time",
  },
];

export default function Career() {
  return (
    <>
      <section className="bg-black py-24 px-6 pt-32">
        <div className="max-w-7xl mx-auto my-10">
          {/* Main Title Section */}
          <div className="text-center mb-24">
            <FloatIn direction="up">
              <h1 className="text-5xl md:text-8xl font-bold text-white mb-6">
                Careers
              </h1>
              <p className="text-neutral-400 text-lg md:text-xl tracking-widest uppercase font-medium">
                Join our team and be part of our journey to transform the
                digital future
              </p>
            </FloatIn>
          </div>
        </div>
      </section>
      <section className="bg-black py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* BENEFITS & PERKS */}
          <div className="text-center mb-16">
            <FloatIn direction="up">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Benefits & Perks
              </h2>
              <p className="text-neutral-500">
                We care about our team and offer comprehensive benefits
              </p>
            </FloatIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
            {perks.map((perk, idx) => (
              <FloatIn key={idx} direction="up" delay={idx * 0.05}>
                <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl h-full hover:border-red-600/20 transition-colors">
                  <h3 className="text-white font-bold text-lg mb-2">
                    {perk.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {perk.description}
                  </p>
                </div>
              </FloatIn>
            ))}
          </div>

          {/* OPEN POSITIONS */}
          <div className="mb-12">
            <FloatIn direction="up">
              <h2 className="text-4xl font-bold text-white mb-4">
                Open Positions
              </h2>
              <p className="text-neutral-500">
                Explore available opportunities and find the right role for you
              </p>
            </FloatIn>
          </div>

          <div className="space-y-4">
            {jobs.map((job, idx) => (
              <FloatIn key={idx} direction="up" delay={idx * 0.1}>
                <div className="group bg-[#0a0a0a] border border-white/5 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/[0.02] transition-all">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-4 text-[10px] uppercase tracking-widest font-bold">
                      <span className="flex items-center gap-1.5 text-neutral-400">
                        <Briefcase size={12} className="text-red-600" />{" "}
                        {job.dept}
                      </span>
                      <span className="text-neutral-700">•</span>
                      <span className="flex items-center gap-1.5 text-neutral-400">
                        <MapPin size={12} className="text-red-600" />{" "}
                        {job.location}
                      </span>
                      <span className="text-neutral-700">•</span>
                      <span className="flex items-center gap-1.5 text-neutral-400">
                        <Clock size={12} className="text-red-600" /> {job.type}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-red-500 transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-sm text-neutral-500 max-w-xl">
                      Looking for a passionate individual to join our{" "}
                      {job.dept.toLowerCase()} team and help build the future of
                      digital solutions.
                    </p>
                  </div>

                  <button className="shrink-0 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-sm font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(220,38,38,0.2)] transition-all active:scale-95">
                    Apply Now <ArrowUpRight size={16} />
                  </button>
                </div>
              </FloatIn>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
