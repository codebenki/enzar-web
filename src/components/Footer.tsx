"use client";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Copyright,
} from "lucide-react";
import { useTranslations } from "next-intl";

type FooterLinkItem = {
  name: string;
  href: string;
};

type FooterStructure = {
  company: FooterLinkItem[];
  services: FooterLinkItem[];
  connect: FooterLinkItem[];
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslations();

  const footerLinks = (t.raw("Footer") as FooterStructure) || {
    company: [],
    services: [],
    connect: [],
  };

  return (
    <footer className="bg-black text-white pb-4 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter">
                {t("Footer.description.0")}
              </h2>
              <p className="text-xs tracking-[0.3em] text-neutral-500 uppercase">
                {t("Footer.description.1")}
              </p>
            </div>

            <p className="text-xl md:text-2xl font-medium leading-relaxed max-w-sm">
              {t("Footer.description.2")}
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1">
                    {t("Footer.description.3.0")}
                  </p>
                  <a
                    href="mailto:info@enzar.com"
                    className="hover:text-red-500 transition-colors"
                  >
                    {t("Footer.description.3.1")}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1">
                    {t("Footer.description.4.0")}
                  </p>
                  <a
                    href="tel:+966114169057"
                    className="hover:text-red-500 transition-colors"
                  >
                    {t("Footer.description.4.1")}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1">
                    {t("Footer.description.5.0")}
                  </p>
                  <p>{t("Footer.description.5.1")}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="#"
                className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-red-500 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-red-500 transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* 4. Use the specific categories from the retrieved object */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-8">
                {t("Footer.description.6.0")}
              </h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link, idx) => (
                  <li key={`${link.name}-${idx}`}>
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-8">
                {t("Footer.description.6.1")}
              </h4>
              <ul className="space-y-4">
                {footerLinks.services.map((link, idx) => (
                  <li key={`${link.name}-${idx}`}>
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-8">
                {t("Footer.description.6.2")}
              </h4>
              <ul className="space-y-4">
                {footerLinks.connect.map((link, idx) => (
                  <li key={`${link.name}-${idx}`}>
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs text-neutral-500 uppercase tracking-widest">
          <p className="flex gap-2">
            <Copyright size={16} /> {t("Footer.description.6.3")}
          </p>
          <p>{t("Footer.description.6.4")}</p>
        </div>
      </div>
    </footer>
  );
}
