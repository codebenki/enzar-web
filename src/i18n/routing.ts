import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // The locales you want to support
  locales: ["en", "ar"],
  // Default locale when no match is found
  defaultLocale: "en",
});

// Lightweight wrappers around Next.js navigation APIs
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
