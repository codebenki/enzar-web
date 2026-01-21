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
  const navItems = [{ name: "Home", link: "/" }];

  return (
    <div dir={locale === "ar" ? "rtl" : "ltr"}>
      <FloatingNav navItems={navItems} />
      {children}
    </div>
  );
}
