import Link from 'next/link';

export default function SitemapPage() {
  const baseUrl = 'https://www.bindx.consulting';
  
  const staticPages = [
    { path: '', title: 'Home' },
    { path: 'about', title: 'About Us' },
    { path: 'contact', title: 'Contact' },
    { path: 'careers', title: 'Careers' },
    { path: 'blog', title: 'Blog' },
  ];

  const servicePages = [
    { path: 'cloud-solutions', title: 'Cloud Solutions' },
    { path: 'database-service', title: 'Database as a Service' },
    { path: 'network-infrastructure', title: 'Network & Infrastructure' },
    { path: 'security-compliance', title: 'Security & Compliance' },
    { path: 'it-project-management', title: 'IT Project Management' },
    { path: 'sap-basis-support', title: 'SAP Basis Support' },
    { path: 'sap-authorization', title: 'SAP Authorization' },
    { path: 'sap-hana', title: 'SAP HANA Services' },
    { path: 'sap-performance', title: 'SAP Performance' },
    { path: 'sap-migration', title: 'SAP Migration' },
    { path: 'sap-cloud-alm', title: 'SAP Cloud ALM' },
    { path: 'sap-upgrade', title: 'SAP Upgrade' },
    { path: 'sap-patching', title: 'SAP Patching' }
  ];

  const blogPosts = [
    {
      slug: 'sap-s4hana-migration-guide-2024',
      title: 'SAP S/4HANA Migration: A Comprehensive Guide for 2024'
    },
    {
      slug: 'cloud-alm-revolutionizing-sap-lifecycle-management',
      title: 'Cloud ALM: Revolutionizing SAP Application Lifecycle Management'
    },
    {
      slug: 'sap-security-best-practices-2024',
      title: 'Essential SAP Security Best Practices for 2024'
    },
    {
      slug: 'optimizing-sap-performance-technical-guide',
      title: 'Optimizing SAP Performance: A Technical Deep Dive'
    },
    {
      slug: 'sap-cloud-platform-strategy-guide',
      title: 'SAP on Cloud: Choosing the Right Platform and Strategy'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12">Sitemap</h1>
        
        {/* Main Pages */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-blue-900">Main Pages</h2>
          <div className="grid gap-4">
            {staticPages.map((page) => (
              <Link
                key={page.path}
                href={`/${page.path}`}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span>{page.title}</span>
                <span className="text-sm text-gray-500">{`${baseUrl}/${page.path}`}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Service Pages */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-blue-900">Services</h2>
          <div className="grid gap-4">
            {servicePages.map((service) => (
              <Link
                key={service.path}
                href={`/services/${service.path}`}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span>{service.title}</span>
                <span className="text-sm text-gray-500">{`${baseUrl}/services/${service.path}`}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Blog Posts */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-blue-900">Blog Posts</h2>
          <div className="grid gap-4">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span>{post.title}</span>
                <span className="text-sm text-gray-500">{`${baseUrl}/blog/${post.slug}`}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
} 