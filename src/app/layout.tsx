import type { Metadata } from "next";
import { Onest, DM_Sans, DM_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Computing Honour Society",
    template: "%s | Computing Honour Society",
  },
  description:
    "Start a Computing Honour Society chapter at your school. Empower students, deliver hyper-local impact, and join a global network of student technologists.",
  keywords: [
    "computing",
    "honour society",
    "computer science",
    "student club",
    "STEM",
    "technology education",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Computing Honour Society",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${onest.variable} ${dmSans.variable} ${dmMono.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
