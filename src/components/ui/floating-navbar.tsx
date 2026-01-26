"use client";
import { JSX, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useRouter, usePathname } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const pathname = usePathname(); // Get current path
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let previous = scrollYProgress.getPrevious();
      let direction = current - (previous ?? 0);

      if (current < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0 || mobileMenuOpen) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const router = useRouter();
  const locale = useLocale();

  const toggleLocale = () => {
    const nextLocale = locale === "en" ? "ar" : "en";
    router.replace(pathname, { locale: nextLocale });
  };

  const t = useTranslations("Navbar");

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn(
          "flex flex-col w-[95%] lg:max-w-fit fixed top-6 inset-x-0 mx-auto border border-white/10 rounded-4xl lg:rounded-full bg-black/80 backdrop-blur-md z-5000 shadow-2xl overflow-hidden",
          className,
        )}
      >
        <div className="flex w-full items-center justify-between px-6 lg:px-8 py-3">
          {/* LEFT: Logo Area */}
          <Link href="/" className="flex items-center shrink-0">
            <div className="flex flex-col items-start">
              <span className="text-white font-bold tracking-[0.2em] text-lg">
                ENZAR
              </span>
              <span className="text-[8px] tracking-[0.4em] text-neutral-500 -mt-1 uppercase">
                Digital
              </span>
            </div>
          </Link>
          {/* CENTER: Desktop Links with Active State logic */}
          <nav className="hidden lg:flex items-center space-x-8 px-8">
            {navItems.map((navItem, idx) => {
              const isActive =
                pathname === navItem.link ||
                pathname === `/en${navItem.link}` ||
                pathname === `/ar${navItem.link}` ||
                (navItem.link === "/" &&
                  (pathname === "/en" || pathname === "/ar"));

              return (
                <Link
                  key={`link=${idx}`}
                  href={navItem.link}
                  className={cn(
                    "relative text-sm font-medium transition-colors group py-1",
                    isActive
                      ? "text-white"
                      : "text-neutral-400 hover:text-white",
                  )}
                >
                  <span>{navItem.name}</span>
                  {/* Underline for active and hover states */}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-px bg-red-600 transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full",
                    )}
                  />
                </Link>
              );
            })}
          </nav>
          ;{/* RIGHT: Actions */}
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleLocale}
              className="hidden sm:flex h-9 w-9 rounded-full border border-white/10 items-center justify-center text-[10px] font-bold text-white hover:bg-white/5 transition-all"
            >
              {locale === "en" ? "AR" : "EN"}
            </button>

            <button className="relative group shrink-0">
              <div className="absolute inset-0 bg-red-600 rounded-full blur-md opacity-20 group-hover:opacity-50 transition-opacity" />
              <div className="relative bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full text-xs font-bold transition-all active:scale-95">
                <Link href={"/contact"}>{t("letsTalk")}</Link>
              </div>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:bg-white/5 rounded-full transition-colors"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* MOBILE COLLAPSIBLE CONTENT */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "circOut" }}
              className="lg:hidden border-t border-white/5 bg-black/40"
            >
              <div className="flex flex-col p-6 space-y-4">
                {navItems.map((navItem, idx) => {
                  const isActive = pathname === navItem.link;

                  return (
                    <Link
                      key={`mobile-link=${idx}`}
                      href={navItem.link}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "text-lg font-medium py-2 transition-colors border-b border-white/5 last:border-0",
                        isActive
                          ? "text-red-500"
                          : "text-neutral-400 hover:text-white",
                      )}
                    >
                      {navItem.name}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};
