import { Metadata, Viewport } from 'next';
import NotFoundPage from '@/components/NotFoundPage';

export const viewport: Viewport = {
  themeColor: "#101921",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: '404 - Sayfa Bulunamadı | BINDX Consulting',
  description: 'Aradığınız sayfa bulunamadı veya taşınmış olabilir.',
};

export default function NotFound() {
  return <NotFoundPage />;
} 