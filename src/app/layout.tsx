import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#101921",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bindx.consulting'),
  title: {
    default: "BINDX Consulting - SAP Infrastructure & Architecture Solutions",
    template: "%s | BINDX Consulting"
  },
  description: "BINDX Consulting provides expert SAP infrastructure, architecture, and digital transformation solutions. Specializing in SAP BASIS, cloud migration, security, and managed services.",
  keywords: [
    "SAP consulting",
    "SAP BASIS",
    "SAP infrastructure",
    "SAP security",
    "cloud migration",
    "SAP HANA",
    "SAP S/4HANA",
    "digital transformation",
    "IT consulting",
    "managed services",
    "SAP architecture",
    "cloud solutions",
    "enterprise IT",
    "SAP performance",
    "SAP Cloud ALM"
  ],
  authors: [{ name: 'BINDX Consulting' }],
  creator: "BINDX Consulting",
  publisher: "BINDX Consulting",
  formatDetection: {
    email: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/images/favicon.ico' },
      { url: '/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/images/apple-touch-icon.png' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/images/safari-pinned-tab.svg',
        color: '#101921'
      }
    ]
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.bindx.consulting',
    siteName: 'BINDX Consulting',
    title: 'BINDX Consulting - SAP Infrastructure & Architecture Solutions',
    description: 'Expert SAP infrastructure, architecture, and digital transformation solutions. Specializing in SAP BASIS, cloud migration, security, and managed services.',
    images: [
      {
        url: 'https://www.bindx.consulting/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BINDX Consulting - SAP Solutions'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bindxconsulting',
    creator: '@bindxconsulting',
    title: 'BINDX Consulting - SAP Infrastructure & Architecture Solutions',
    description: 'Expert SAP infrastructure and architecture solutions for your business.',
    images: ['https://www.bindx.consulting/images/twitter-card.jpg']
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.bindx.consulting',
    languages: {
      'en-US': 'https://www.bindx.consulting'
    }
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'technology',
  classification: 'SAP Consulting Services',
  referrer: 'origin-when-cross-origin',
  applicationName: 'BINDX Consulting',
  generator: 'Next.js'
}

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
