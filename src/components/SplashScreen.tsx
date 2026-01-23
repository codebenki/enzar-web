"use client";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { useUIStore } from "@/store/useUIStore";
import Image from "next/image";
import { FloatIn } from "./FloatIn";
import { useTranslations } from "next-intl";

export default function SplashScreen() {
  const t = useTranslations("Banner");
  const { isLoaded, setLoaded } = useUIStore();
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  // 1. Ensure component is mounted on the client before doing anything
  useEffect(() => {
    setMounted(true);
  }, []);

  // 2. Trigger the load state
  useEffect(() => {
    if (mounted && !isLoaded) {
      const timer = setTimeout(() => setLoaded(), 1000);
      return () => clearTimeout(timer);
    }
  }, [mounted, isLoaded, setLoaded]);

  // 3. Trigger the banner after the splash is finished
  useEffect(() => {
    if (isLoaded && mounted) {
      const timer = setTimeout(() => setShowBanner(true), 500);
      return () => clearTimeout(timer);
    }
  }, [isLoaded, mounted]);

  // If not mounted, render nothing to match server-side initial state
  if (!mounted) return null;

  return (
    <>
      {/* splashscreen */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-9999 flex items-center justify-center bg-gray-50 text-white"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="text-4xl font-bold tracking-widest"
            >
              <Image
                src={"/assets/monogram-transparent.png"}
                alt="Enzar-Monogram"
                width={400}
                height={400}
                priority
              />
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              exit={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="fixed inset-0 z-1000 flex items-center justify-center bg-black text-white"
            />
          </motion.div>
        )}
      </AnimatePresence>
      {/* page banner */}
      <div className="relative h-screen w-full overflow-hidden bg-black">
        {showBanner && (
          <>
            <motion.div
              initial={{ opacity: 0, scale: 1.3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute h-full w-full"
            >
              <Image
                src="/assets/background-home.svg"
                alt="BG-Home"
                fill
                className="object-cover opacity-70"
                priority
              />
            </motion.div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
              <FloatIn>
                <FloatIn className="bg-black/70 p-10 rounded-4xl md:w-[60vw] :h-[35vh] flex flex-col justify-center gap-4 text-white">
                  <FloatIn>
                    <div className="border rounded-full w-full 2xl:w-[15vw] text-center">
                      {t("banner1")}
                    </div>
                  </FloatIn>
                  <FloatIn>
                    <div className="text-2xl xl:text-5xl font-bold xl:m-4">
                      {t("banner2")}
                      <br /> {t("banner3")}
                      <br />
                      {t("banner4")}
                    </div>
                  </FloatIn>
                  <FloatIn>
                    <div className="text-sm xl:text-lg font-semibold xl:m-4">
                      {t("banner5")} <br />
                      {t("banner6")}
                    </div>
                  </FloatIn>
                </FloatIn>
              </FloatIn>
            </div>
          </>
        )}
      </div>
    </>
  );
}
