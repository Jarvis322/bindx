'use client';

import { Metadata, Viewport } from 'next';
import ErrorPage from '@/components/ErrorPage';

export const viewport: Viewport = {
  themeColor: "#101921",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: '500 - Sunucu Hatası | BINDX Consulting',
  description: 'Üzgünüz, bir şeyler yanlış gitti. Lütfen tekrar deneyin.',
};

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <ErrorPage error={error} reset={reset} />;
} 