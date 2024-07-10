import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({
  subsets: ["latin", "cyrillic"],
  fallback: ["Helvetica", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Andrei Lihtgolt",
  description: "Frontend web developer | Frontend Coach | Good man",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={onest.className}>{children}</body>
    </html>
  );
}
