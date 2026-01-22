"use client";
import { motion } from "framer-motion";
import React from "react";

interface FadeInProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
}

export const FloatIn = ({
  children,
  direction = "up",
  delay = 0,
  duration = 1.5,
  distance = 40,
  className,
}: FadeInProps) => {
  // Map directions to X/Y coordinates
  const directions = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: false, margin: "-100px" }} // Trigger slightly before it enters view
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98], // "Global" premium ease-out curve
      }}
    >
      {children}
    </motion.div>
  );
};
