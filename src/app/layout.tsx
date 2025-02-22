import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bindx Consulting - SAP Infrastructure & Architecture Consulting",
  description: "Your trusted partner in SAP Infrastructure and Architecture consulting with over 18 years of experience. We specialize in SAP BASIS consulting, cloud transition, and managed services.",
  keywords: "SAP consulting, SAP BASIS, SAP infrastructure, cloud transition, Dubai IT consulting, SAP architecture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
