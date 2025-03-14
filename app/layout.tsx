import type { Metadata } from "next";
import {Montserrat } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Велопланета",
  description: "Продаж велосипедів та компонентів для велосипедів. Ремонт та обсуговування",
  keywords: ["велосипеды", "велосипед", "велопланета", "велопланета"],
  openGraph: {
    title: "Велопланета",
    description: "Продаж велосипедів та компонентів для велосипедів. Ремонт та обсуговування",
    type: "website",
    locale: "uk",
  },
  twitter: {
    title: "Велопланета",
    description: "Продаж велосипедів та компонентів для велосипедів. Ремонт та обсуговування",
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://veloplaneta.online/",
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className={montserrat.className}>
        <main className="min-h-screen relative w-full overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
