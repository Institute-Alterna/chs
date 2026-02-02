import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
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
      <body className={`${dmSans.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
