import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.bindx.consulting'
  
  // Ana sayfalar
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily' as const,
      priority: 1
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.8
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.8
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.7
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily' as const,
      priority: 0.9
    }
  ]

  // Servis sayfaları
  const servicePages = [
    'cloud-solutions',
    'database-service',
    'network-infrastructure',
    'security-compliance',
    'it-project-management',
    'sap-basis-support',
    'sap-authorization',
    'sap-hana',
    'sap-performance',
    'sap-migration',
    'sap-cloud-alm',
    'sap-upgrade',
    'sap-patching'
  ].map(service => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.8
  }))

  // Blog yazıları
  const blogPosts = [
    {
      slug: 'sap-s4hana-migration-guide-2024',
      title: 'SAP S/4HANA Migration Guide 2024'
    },
    {
      slug: 'cloud-alm-revolutionizing-sap-lifecycle-management',
      title: 'Cloud ALM: Revolutionizing SAP Lifecycle Management'
    },
    {
      slug: 'sap-security-best-practices-2024',
      title: 'SAP Security Best Practices 2024'
    },
    {
      slug: 'optimizing-sap-performance-technical-guide',
      title: 'Optimizing SAP Performance: Technical Guide'
    },
    {
      slug: 'sap-cloud-platform-strategy-guide',
      title: 'SAP Cloud Platform Strategy Guide'
    }
  ].map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.7
  }))

  // Yasal ve diğer sayfalar
  const otherPages = [
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.4
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.4
    },
    {
      url: `${baseUrl}/sitemap`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.3
    }
  ]

  return [...staticPages, ...servicePages, ...blogPosts, ...otherPages]
} 