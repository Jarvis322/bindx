import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Image src="/images/logo.svg" alt="Bindx Logo" width={150} height={50} className="mb-4" />
            <p className="text-gray-400 mb-4">
              Your trusted partner in SAP Infrastructure and Architecture consulting with over 18 years of experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/cloud-solutions" className="text-gray-400 hover:text-white transition-colors">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/database-service" className="text-gray-400 hover:text-white transition-colors">
                  Database as a Service
                </Link>
              </li>
              <li>
                <Link href="/services/network-infrastructure" className="text-gray-400 hover:text-white transition-colors">
                  Network & Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/services/security-compliance" className="text-gray-400 hover:text-white transition-colors">
                  Security & Compliance
                </Link>
              </li>
              <li>
                <Link href="/services/it-project-management" className="text-gray-400 hover:text-white transition-colors">
                  IT Project Management
                </Link>
              </li>
            </ul>
          </div>

          {/* SAP Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">SAP Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/sap-basis-support" className="text-gray-400 hover:text-white transition-colors">
                  SAP Basis Support
                </Link>
              </li>
              <li>
                <Link href="/services/sap-authorization" className="text-gray-400 hover:text-white transition-colors">
                  SAP Authorization
                </Link>
              </li>
              <li>
                <Link href="/services/sap-hana" className="text-gray-400 hover:text-white transition-colors">
                  SAP HANA Services
                </Link>
              </li>
              <li>
                <Link href="/services/sap-performance" className="text-gray-400 hover:text-white transition-colors">
                  SAP Performance
                </Link>
              </li>
              <li>
                <Link href="/services/sap-migration" className="text-gray-400 hover:text-white transition-colors">
                  SAP Migration
                </Link>
              </li>
              <li>
                <Link href="/services/sap-cloud-alm" className="text-gray-400 hover:text-white transition-colors">
                  SAP Cloud ALM
                </Link>
              </li>
              <li>
                <Link href="/services/sap-upgrade" className="text-gray-400 hover:text-white transition-colors">
                  SAP Upgrade
                </Link>
              </li>
              <li>
                <Link href="/services/sap-patching" className="text-gray-400 hover:text-white transition-colors">
                  SAP Patching
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Bindx Consulting. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 