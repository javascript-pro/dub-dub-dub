import config from "../config.json";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import {Uberedux} from "../ui/Uberedux";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Dub Dub Dub",
  description: "Goldlabel. with Turborepo & Next.js &",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/svg/favicon.svg" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="/png/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <meta name="theme-color" content={config.themeColor} />
        <meta property="og:site_name" content={config.title} />
        <meta property="og:title" content={config.title} />
        <meta property="og:url" content={config.url} />
        <meta property="og:description" content={config.description} />
        <meta property="og:image" content={config.ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content={config.ogImage} />
        <meta property="twitter:title" content={config.title} />
        <meta property="twitter:description" content={config.description} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Uberedux>
          {children}
        </Uberedux>\
      </body>
    </html>
  );
}
