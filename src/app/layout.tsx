import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import i18nConfig from "@/app/i18nConfig";

const onest = Onest({
  subsets: ["latin", "cyrillic"],
  fallback: ["Helvetica", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Andrei Lihtgolt",
  description: "Frontend web developer | Frontend Coach | Good man",
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang="ru">
      <body className={onest.className}>{children}</body>
    </html>
  );
}
