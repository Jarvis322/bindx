import { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  themeColor: "#101921",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: 'SAP on Cloud Services - Cloud Transformation & Optimization | Bindx Consulting',
  description: 'Expert SAP cloud transformation services for AWS, Azure, and Google Cloud. Optimize performance, enhance scalability, and reduce costs with our comprehensive cloud solutions.',
  keywords: [
    'SAP on cloud',
    'SAP cloud services',
    'SAP AWS',
    'SAP Azure',
    'SAP Google Cloud',
    'cloud migration',
    'cloud optimization',
    'SAP cloud transformation',
    'SAP cloud strategy',
    'cloud cost optimization',
    'SAP cloud security',
    'cloud scalability'
  ],
  openGraph: {
    title: 'SAP on Cloud Services - Cloud Transformation & Optimization',
    description: 'Transform your SAP landscape with our expert cloud services. Optimize performance and reduce costs on AWS, Azure, or Google Cloud.',
    images: [
      {
        url: '/images/sap-cloud-services.jpg',
        width: 1200,
        height: 630,
        alt: 'SAP on Cloud Services'
      }
    ]
  }
}; 