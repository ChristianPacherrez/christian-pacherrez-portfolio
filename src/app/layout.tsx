import type { Metadata } from "next";

import { clashDisplay, inter } from "@/lib/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Christian Pacherrez — Product Designer",
  description:
    "Portafolio de Christian Pacherrez, Product Designer especializado en UX/UI y desarrollo frontend.",
  icons: {
    icon: "/images/lading-page/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${clashDisplay.variable} ${inter.variable} h-full antialiased`}>
      <body className="bg-background text-text flex min-h-full flex-col">{children}</body>
    </html>
  );
}
