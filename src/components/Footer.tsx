'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#101921] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="block mb-6">
              <Image
                src="/images/logo.svg"
                alt="Bindx Logo"
                width={160}
                height={50}
                className="filter-none"
              />
            </Link>
            <p className="text-gray-400 mb-4">
              Your trusted partner in SAP Infrastructure and Architecture consulting.
            </p>
            <div className="space-y-2">
              <p className="flex items-center text-gray-400">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@bindx.consulting" className="hover:text-white">info@bindx.consulting</a>
              </p>
              <p className="flex items-center text-gray-400">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <a href="https://www.bindx.consulting" className="hover:text-white">www.bindx.consulting</a>
              </p>
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="text-gray-400 hover:text-white">About Us</Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-gray-400 hover:text-white">Services</Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link>
                  </li>
                  <li>
                    <Link href="/careers" className="text-gray-400 hover:text-white">Careers</Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/services/sap-basis-support" className="text-gray-400 hover:text-white">SAP Basis Support</Link>
                  </li>
                  <li>
                    <Link href="/services/sap-security" className="text-gray-400 hover:text-white">SAP Security</Link>
                  </li>
                  <li>
                    <Link href="/services/cloud-solutions" className="text-gray-400 hover:text-white">Cloud Solutions</Link>
                  </li>
                  <li>
                    <Link href="/services/managed-services" className="text-gray-400 hover:text-white">Managed Services</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Bindx Consulting. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 