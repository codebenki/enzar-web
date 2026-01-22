import { FloatingNav } from "@/components/ui/floating-navbar";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // Change to Promise
}) {
  // Use await to get the actual locale string
  const { locale } = await params;
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/en/about" },
    { name: "Services", link: "/en/services" },
    { name: "Culture", link: "/en/culture" },
    { name: "Media", link: "/en/media" },
    { name: "Careers", link: "/en/career" },
  ];

  return (
    <div dir={locale === "ar" ? "rtl" : "ltr"} className="bg-black text-white">
      {/* <SplashScreen /> */}
      <FloatingNav navItems={navItems} className="" />
      {children}
    </div>
  );
}
