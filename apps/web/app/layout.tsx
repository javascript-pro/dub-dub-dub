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

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Uberedux>
          {children}
        </Uberedux>\
      </body>
    </html>
  );
}
