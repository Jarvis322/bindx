import Image from 'next/image';
import Link from 'next/link';

export default function NetworkInfrastructure() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Network & Infrastructure</h1>
            <p className="text-gray-600">
              A robust, scalable, and high-performing network infrastructure is the backbone of modern enterprises. As businesses expand and digital transformation accelerates, seamless network connectivity and infrastructure optimization become essential.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Enterprise Network Solutions</h2>
              <p className="text-gray-600 mb-8">
                We specialize in enterprise-grade networking solutions, ensuring that your business operations run smoothly with minimal latency, maximum security, and full scalability to support growing workloads and evolving business needs.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-2">Network as a Service (NaaS)</h3>
                    <p className="text-gray-600">Traditional networking models often struggle to keep up with modern cloud-driven and distributed workforces. Our NaaS solutions provide scalable, software-defined, and cloud-integrated networking capabilities.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80"
                alt="Network Infrastructure"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* NaaS Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Network as a Service Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Software-Defined Networking</h3>
              <p className="text-gray-600">
                Deploying dynamic, programmable networks that enhance agility and automation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Zero Trust Network Architecture</h3>
              <p className="text-gray-600">
                Implementing strong identity-based network security policies to prevent unauthorized access.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Remote Access</h3>
              <p className="text-gray-600">
                Enabling secure, high-speed connectivity for remote employees and branch offices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Networking Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Cloud Networking & Hybrid Infrastructure</h2>
              <p className="text-gray-600 mb-8">
                Modern enterprises operate in a mix of on-premise, cloud, and hybrid environments, requiring seamless networking solutions that bridge multiple infrastructures. We provide integrated cloud networking services to maximize performance and security.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2">Hybrid Cloud Connectivity</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2">Direct Cloud Peering & Interconnects</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2">Container Networking & Service Mesh</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80"
                alt="Cloud Networking"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Enterprise Network Security & Threat Prevention</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            A secure network is critical to preventing cyber threats, ensuring regulatory compliance, and maintaining business continuity. Our network security solutions offer end-to-end protection with AI-powered detection and automated mitigation strategies.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Next-Generation Firewall Solutions</h3>
              <p className="text-gray-600">Implementing state-of-the-art firewalls with deep packet inspection, intrusion prevention, and DDoS mitigation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Network Access Control</h3>
              <p className="text-gray-600">Enforcing strict security policies to prevent unauthorized devices from connecting to enterprise networks.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">AI-Driven Threat Intelligence</h3>
              <p className="text-gray-600">Leveraging real-time analytics to detect and mitigate network-based attacks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance & DR Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Network Performance & Disaster Recovery</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Performance Optimization</h3>
                  <p className="text-gray-600">End-to-end network visibility with AI-driven analytics for real-time insights into network health and performance.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Disaster Recovery</h3>
                  <p className="text-gray-600">High-availability network architecture and multi-site failover strategies for business continuity.</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2">Network Automation & Orchestration</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2">Predictive Maintenance & Proactive Alerts</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2">Automated Backup & Recovery Solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Transform Your Network Infrastructure</h2>
          <p className="mb-8">
            Contact us to learn how our comprehensive network and infrastructure solutions can enhance your business operations and prepare you for future growth.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
} 