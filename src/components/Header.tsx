'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
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

  const handleMouseEnter = (menu: string) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const getHeaderStyle = () => {
    if (isHomePage) {
      return isScrolled ? 'bg-gradient-to-r from-blue-900 to-blue-800 shadow-lg' : 'bg-transparent';
    }
    return isScrolled ? 'bg-gradient-to-r from-blue-900 to-blue-800 shadow-lg' : 'bg-gradient-to-r from-blue-900 to-blue-800 shadow-lg';
  };

  const getTextStyle = (isButton = false) => {
    if (isButton) return isScrolled ? "bg-white text-blue-900 hover:bg-blue-50" : "bg-blue-600 text-white hover:bg-blue-700";
    
    if (isHomePage) {
      return isScrolled ? 'text-white hover:text-blue-200' : 'text-white hover:text-blue-200';
    }
    return isScrolled ? 'text-white hover:text-blue-200' : 'text-white hover:text-blue-200';
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getHeaderStyle()}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <Image
              src="/images/logo.svg"
              alt="Bindx Logo"
              width={120}
              height={40}
              className="filter-none"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/about"
              className={`font-medium transition-colors ${getTextStyle()}`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={`font-medium transition-colors cursor-pointer ${getTextStyle()}`}
              >
                Services
              </div>
              <div className={`absolute top-full left-0 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50`}>
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
              onMouseEnter={() => handleMouseEnter('sap')}
              onMouseLeave={handleMouseLeave}
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
            className="md:hidden relative z-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-white"
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
        <div className="md:hidden bg-gradient-to-r from-blue-900 to-blue-800">
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
              href="/blog"
              className="block py-2 text-white hover:text-blue-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/careers"
              className="block py-2 text-white hover:text-blue-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Careers
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

const sapServices = [
  {
    name: "Network & Infrastructure",
    href: "/services/network-infrastructure",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    name: "SAP Patching",
    href: "/services/sap-patching",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    name: "SAP Upgrade",
    href: "/services/sap-upgrade",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    name: "SAP Security",
    href: "/services/sap-security",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    name: "SAP Authorization",
    href: "/services/sap-authorization",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    name: "SAP Migration",
    href: "/services/sap-migration",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    name: "SAP Cloud ALM",
    href: "/services/sap-cloud-alm",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    name: "SAP on Cloud",
    href: "/services/sap-on-cloud",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    name: "SAP On-Premise",
    href: "/services/sap-on-premise",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    name: "Security & Compliance",
    href: "/services/security-compliance",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
];

const cloudServices = [
  {
    name: "AWS Management",
    href: "/services/aws-management",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    name: "Azure Management",
    href: "/services/azure-management",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    name: "Google Cloud",
    href: "/services/google-cloud",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const aboutLinks = [
  {
    name: "Company Overview",
    href: "/about",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    name: "Our Team",
    href: "/about#team",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    name: "Careers",
    href: "/careers",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
]; 