import Link from 'next/link';

export default function Sitemap() {
  const siteStructure = [
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'Careers', path: '/careers' },
        { name: 'Blog', path: '/blog' },
      ],
    },
    {
      title: 'IT Services',
      links: [
        { name: 'Cloud Solutions', path: '/services/cloud-solutions' },
        { name: 'Database as a Service', path: '/services/database-service' },
        { name: 'Network & Infrastructure', path: '/services/network-infrastructure' },
        { name: 'Security & Compliance', path: '/services/security-compliance' },
        { name: 'IT Project Management', path: '/services/it-project-management' },
      ],
    },
    {
      title: 'SAP Services',
      links: [
        { name: 'SAP Basis Support', path: '/services/sap-basis-support' },
        { name: 'SAP Authorization', path: '/services/sap-authorization' },
        { name: 'SAP HANA Services', path: '/services/sap-hana' },
        { name: 'SAP Performance', path: '/services/sap-performance' },
        { name: 'SAP Migration', path: '/services/sap-migration' },
        { name: 'SAP Cloud ALM', path: '/services/sap-cloud-alm' },
        { name: 'SAP Upgrade', path: '/services/sap-upgrade' },
        { name: 'SAP Patching', path: '/services/sap-patching' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '/privacy-policy' },
        { name: 'Terms of Service', path: '/terms-of-service' },
      ],
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-12">Sitemap</h1>

        <div className="space-y-12">
          {siteStructure.map((section, index) => (
            <section key={index}>
              <h2 className="text-2xl font-semibold mb-6">{section.title}</h2>
              <ul className="grid md:grid-cols-2 gap-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.path}
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
} 