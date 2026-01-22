"use client";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { useUIStore } from "@/store/useUIStore";
import Image from "next/image";
import { FloatIn } from "./FloatIn";

export default function SplashScreen() {
  const { isLoaded, setLoaded } = useUIStore();
  const [showBanner, setShowBanner] = useState(isLoaded);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(), 1000);
    return () => clearTimeout(timer);
  }, [setLoaded]);

  useEffect(() => {
    if (isLoaded && !showBanner) {
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [isLoaded, showBanner]);

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
                color="white"
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
              viewport={{ once: true }}
              initial={{ opacity: 0, scale: 1.3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute h-full w-full"
            >
              <Image
                src="/assets/background-home.svg"
                alt="BG-Home"
                fill
                className="object-cover object-center opacity-70"
                priority
              />
            </motion.div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
              <FloatIn>
                <FloatIn className="bg-black/70 p-10 rounded-4xl md:w-[60vw] :h-[35vh] flex flex-col justify-center gap-4">
                  <div className="border rounded-full w-full 2xl:w-[15vw] text-center">
                    UNIFIED DIGITAL EXPERIENCES
                  </div>
                  <FloatIn>
                    <div className="text-2xl xl:text-5xl font-bold xl:m-4">
                      ENZAR Digital - Engineering
                      <br /> the Future of Secure Digital
                      <br />
                      Transformation
                    </div>
                  </FloatIn>
                  <FloatIn>
                    <div className="text-sm xl:text-lg font-semibold xl:m-4">
                      A multidisciplinary team of innovators delivering
                      scalable, secure, <br />
                      and high-impact digital solutions for government and
                      enterprise sectors.
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
