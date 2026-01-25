import { FloatingNav } from "@/components/ui/floating-navbar";
import { getMessages, getTranslations } from "next-intl/server";
import { NextIntlClientProvider, useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isRtl = locale === "ar";

  const t = await getTranslations({ locale, namespace: "Navbar" });

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const navItems = [
    { name: t("home"), link: "/" },
    { name: t("about"), link: "/about" },
    { name: t("services"), link: "/services" },
    { name: t("culture"), link: "/culture" },
    { name: t("media"), link: "/media" },
    { name: t("careers"), link: "/career" },
    { name: t("contact"), link: "/contact" },
  ];

  return (
    <html lang={locale} dir={isRtl ? "rtl" : "ltr"} suppressHydrationWarning>
      <body
        className={`${isRtl ? "font-arabic" : "font-sans"} relative`}
        suppressHydrationWarning
      >
        <NextIntlClientProvider messages={await getMessages()}>
          <div className="relative flex flex-col min-h-screen">
            <FloatingNav navItems={navItems} />
            <main className="grow">{children}</main>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
