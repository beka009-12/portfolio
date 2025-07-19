import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Golden Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head></head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
