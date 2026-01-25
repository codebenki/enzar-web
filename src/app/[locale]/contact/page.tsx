"use client";
import { FloatIn } from "@/components/FloatIn";
import Footer from "@/components/Footer";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  ExternalLink,
  MessageSquare,
  Send,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("Contact");

  const offices = Array.isArray(t.raw("offices")) ? t.raw("offices") : [];

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
      <section className="bg-black py-24 px-6 text-white">
        <div className="max-w-7xl mx-auto space-y-32">
          {/* BRANCH INFORMATION */}
          <div className="text-center">
            <FloatIn direction="up">
              <h1 className="text-5xl font-bold mb-4">{t("description.0")}</h1>
              <p className="text-neutral-500 mb-16">{t("description.2")}</p>
            </FloatIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {offices.map((office: any, idx: any) => (
                <FloatIn key={office.id} direction="up" delay={idx * 0.1}>
                  <div className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 text-left relative group hover:border-red-600/30 transition-all h-full">
                    <div className="absolute top-6 right-6 w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-[10px] font-bold">
                      {office.id}
                    </div>

                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2.5 bg-red-600/10 rounded-xl text-red-600">
                        <MapPin size={20} />
                      </div>
                      <h3 className="text-xl font-bold">{office.city}</h3>
                    </div>

                    <div className="space-y-6 text-sm text-neutral-400">
                      <div className="flex gap-3">
                        <MapPin size={16} className="shrink-0 mt-0.5" />
                        <div>
                          <p className="leading-relaxed mb-2">
                            {office.address}
                          </p>
                          <a
                            href={office.mapUrl}
                            className="text-red-500 flex items-center gap-1 text-xs font-bold hover:underline"
                          >
                            {t("description.3")} <ExternalLink size={12} />
                          </a>
                        </div>
                      </div>

                      <div className="space-y-2">
                        {office.phones.map((phone: any, pIdx: any) => (
                          <div key={pIdx} className="flex items-center gap-3">
                            <Phone size={14} className="shrink-0" /> {phone}
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-3">
                        <Globe size={14} /> {office.web}
                      </div>

                      <div className="flex items-center gap-3">
                        <Mail size={14} /> {office.email}
                      </div>
                    </div>
                  </div>
                </FloatIn>
              ))}
            </div>
          </div>

          {/* INTERMEDIATE CTA BANNER */}
          <FloatIn direction="up">
            <div className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-12 text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">{t("description.4")}</h2>
              <p className="text-neutral-500 mb-8 max-w-md mx-auto">
                {t("description.5")}
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-sm font-bold flex items-center gap-2 mx-auto shadow-[0_0_30px_rgba(220,38,38,0.3)] transition-all">
                <MessageSquare size={16} /> {t("description.6")}
              </button>
            </div>
          </FloatIn>

          {/* MESSAGE FORM */}
          <div className="max-w-3xl mx-auto">
            <FloatIn direction="up">
              <div className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-2">
                  {t("description.7")}
                </h2>
                <p className="text-neutral-500 mb-10">{t("description.8")}</p>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                        {t("description.9.0")}
                      </label>
                      <input
                        type="text"
                        placeholder={t("description.9.1")}
                        className="w-full bg-[#111111] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-600/50 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                        {t("description.9.2")}
                      </label>
                      <input
                        type="text"
                        placeholder={t("description.9.3")}
                        className="w-full bg-[#111111] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-600/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                      {t("description.9.4")}
                    </label>
                    <input
                      type="email"
                      placeholder={t("description.9.5")}
                      className="w-full bg-[#111111] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-600/50 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                      {t("description.9.6")}
                    </label>
                    <input
                      type="tel"
                      placeholder={t("description.9.7")}
                      className="w-full bg-[#111111] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-600/50 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                      {t("description.9.8")}
                    </label>
                    <input
                      type="text"
                      placeholder={t("description.9.9")}
                      className="w-full bg-[#111111] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-600/50 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                      {t("description.9.10")}
                    </label>
                    <textarea
                      rows={4}
                      placeholder={t("description.9.11")}
                      className="w-full bg-[#111111] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-600/50 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all active:scale-[0.98]"
                  >
                    {t("description.9.12")}
                  </button>
                </form>
              </div>
            </FloatIn>
          </div>

          {/* NEWSLETTER FOOTER */}
          <div className="text-center pt-24 pb-12">
            <FloatIn direction="up">
              <h2 className="text-3xl font-bold mb-4">{t("description.10")}</h2>
              <p className="text-neutral-500 mb-8">{t("description.11")}</p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder={t("description.9.5")}
                  className="w-full bg-transparent border border-white/10 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-red-600/50 transition-colors"
                />
                <button className="whitespace-nowrap bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-sm font-bold shadow-lg transition-all">
                  {t("description.12")}
                </button>
              </div>
            </FloatIn>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
