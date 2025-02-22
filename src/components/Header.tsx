'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getHeaderStyle = () => {
    if (isHomePage) {
      return isScrolled ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-xl' : 'bg-transparent';
    }
    return isScrolled ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-xl' : 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-xl';
  };

  const getTextStyle = (isButton = false) => {
    if (isButton) return isScrolled ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-blue-600 text-white hover:bg-blue-700";
    
    if (isHomePage) {
      return isScrolled ? 'text-gray-100 hover:text-blue-400' : 'text-gray-100 hover:text-blue-400';
    }
    return isScrolled ? 'text-gray-100 hover:text-blue-400' : 'text-gray-100 hover:text-blue-400';
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm bg-opacity-95 ${getHeaderStyle()}`}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center h-32">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <Image
              src="/images/logo.svg"
              alt="Bindx Logo"
              width={360}
              height={120}
              className="filter-none"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link
              href="/about"
              className={`text-lg font-medium transition-colors ${getTextStyle()}`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsOpen('services')}
              onMouseLeave={() => setIsOpen(null)}
            >
              <div
                className={`text-lg font-medium transition-colors cursor-pointer ${getTextStyle()}`}
              >
                Services
              </div>
              <div className={`absolute top-full left-0 pt-4 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50`}>
                <div className="bg-white rounded-lg shadow-xl py-2">
                  <Link
                    href="/services/cloud-solutions"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Cloud Solutions
                  </Link>
                  <Link
                    href="/services/database-service"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Database as a Service
                  </Link>
                  <Link
                    href="/services/network-infrastructure"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Network & Infrastructure
                  </Link>
                  <Link
                    href="/services/security-compliance"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Security & Compliance
                  </Link>
                  <Link
                    href="/services/it-project-management"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    IT Project Management
                  </Link>
                </div>
              </div>
            </div>

            {/* SAP Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsOpen('sap')}
              onMouseLeave={() => setIsOpen(null)}
            >
              <div
                className={`font-medium transition-colors cursor-pointer ${getTextStyle()}`}
              >
                SAP Services
              </div>
              <div className={`absolute top-full left-0 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50`}>
                <div className="bg-white rounded-lg shadow-xl py-2">
                  <Link
                    href="/services/sap-basis-support"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    SAP Basis Support
                  </Link>
                  <Link
                    href="/services/sap-authorization"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    SAP Authorization
                  </Link>
                  <Link
                    href="/services/sap-hana"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    SAP HANA Services
                  </Link>
                  <Link
                    href="/services/sap-performance"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    SAP Performance
                  </Link>
                  <Link
                    href="/services/sap-migration"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    SAP Migration
                  </Link>
                  <Link
                    href="/services/sap-cloud-alm"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    SAP Cloud ALM
                  </Link>
                  <Link
                    href="/services/sap-upgrade"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    SAP Upgrade
                  </Link>
                  <Link
                    href="/services/sap-patching"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    SAP Patching
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/blog"
              className={`font-medium transition-colors ${getTextStyle()}`}
            >
              Blog
            </Link>
            <Link
              href="/careers"
              className={`font-medium transition-colors ${getTextStyle()}`}
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className={`px-4 py-2 rounded-lg transition-colors ${getTextStyle(true)}`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-10 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-8 h-8 text-gray-100"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
          <div className="px-4 pt-2 pb-6">
            <Link
              href="/about"
              className="block py-2 text-white hover:text-blue-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <div className="py-2">
              <h3 className="font-medium text-white mb-2">Services</h3>
              <div className="pl-4">
                <Link
                  href="/services/cloud-solutions"
                  className="block py-1 text-blue-100 hover:text-blue-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Cloud Solutions
                </Link>
                <Link
                  href="/services/database-service"
                  className="block py-1 text-blue-100 hover:text-blue-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Database as a Service
                </Link>
                <Link
                  href="/services/network-infrastructure"
                  className="block py-1 text-blue-100 hover:text-blue-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Network & Infrastructure
                </Link>
                <Link
                  href="/services/security-compliance"
                  className="block py-1 text-blue-100 hover:text-blue-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Security & Compliance
                </Link>
                <Link
                  href="/services/it-project-management"
                  className="block py-1 text-blue-100 hover:text-blue-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  IT Project Management
                </Link>
              </div>
            </div>
            <div className="py-2">
              <h3 className="font-medium text-white mb-2">SAP Services</h3>
              <div className="pl-4">
                <Link
                  href="/services/sap-basis-support"
                  className="block py-1 text-blue-100 hover:text-blue-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  SAP Basis Support
                </Link>
                <Link
                  href="/services/sap-authorization"
                  className="block py-1 text-blue-100 hover:text-blue-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  SAP Authorization
                </Link>
                <Link
                  href="/services/sap-hana"
                  className="block py-1 text-blue-100 hover:text-blue-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  SAP HANA Services
                </Link>
                <Link
                  href="/services/sap-performance"
                  className="block py-1 text-blue-100 hover:text-blue-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  SAP Performance
                </Link>
                <Link
                  href="/services/sap-migration"
                  className="block py-1 text-blue-100 hover:text-blue-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  SAP Migration
                </Link>
                <Link
                  href="/services/sap-cloud-alm"
                  className="block py-1 text-blue-100 hover:text-blue-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  SAP Cloud ALM
                </Link>
                <Link
                  href="/services/sap-upgrade"
                  className="block py-1 text-blue-100 hover:text-blue-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  SAP Upgrade
                </Link>
                <Link
                  href="/services/sap-patching"
                  className="block py-1 text-blue-100 hover:text-blue-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  SAP Patching
                </Link>
              </div>
            </div>
            <Link
              href="/careers"
              className="block py-2 text-white hover:text-blue-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Careers
            </Link>
            <Link
              href="/blog"
              className="block py-2 text-white hover:text-blue-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-white hover:text-blue-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
} 