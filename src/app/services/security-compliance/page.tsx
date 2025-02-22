import Image from 'next/image';
import Link from 'next/link';

export default function SecurityCompliance() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Security & Compliance Solutions</h1>
            <p className="text-gray-600">
              In today's interconnected world, cybersecurity threats are evolving at an unprecedented pace. Businesses must take a proactive approach to securing their critical IT infrastructure, applications, and data.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Enterprise Security Solutions</h2>
              <p className="text-gray-600 mb-8">
                We help organizations establish robust security frameworks, integrate zero-trust architectures, and implement industry best practices to mitigate risks and strengthen resilience against cyber attacks. Whether your business operates in the cloud, on-premise, or within a hybrid environment, our solutions offer end-to-end protection against vulnerabilities and compliance breaches.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80"
                alt="Security Solutions"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FWaaS Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Firewall as a Service (FWaaS)</h2>
          <p className="text-gray-600 mb-12">
            With the increasing complexity of cyber threats, traditional firewalls are no longer sufficient. Our Firewall as a Service (FWaaS) provides next-generation network protection with real-time monitoring, AI-driven threat intelligence, and automated responses to security incidents.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Advanced Threat Prevention</h3>
              <p className="text-gray-600">Identifying and mitigating cyber threats before they infiltrate your network.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Zero Trust Network Access</h3>
              <p className="text-gray-600">Ensuring only authorized users and devices can access critical business resources.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">DDoS Mitigation</h3>
              <p className="text-gray-600">Protecting your infrastructure from distributed denial-of-service attacks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* IT Security & Compliance */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">IT Security & Compliance</h2>
              <p className="text-gray-600 mb-8">
                Regulatory compliance is no longer optional—it is a business imperative. Our IT Security & Compliance services ensure that your organization meets global security standards, including GDPR, ISO 27001, HIPAA, SOX, and NIST frameworks.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2">Security Risk Assessments</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2">Regulatory Compliance Audits</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2">Identity & Access Management (IAM)</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80"
                alt="IT Security"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Security */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Cloud Security & Governance</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            As organizations transition to cloud environments, securing cloud workloads becomes a critical challenge. Our Cloud Security & Governance services offer proactive security management to protect cloud-native applications, sensitive data, and hybrid infrastructures.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Multi-Cloud Security</h3>
              <p className="text-gray-600">Ensuring security consistency across AWS, Azure, and Google Cloud.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Workload Protection</h3>
              <p className="text-gray-600">Securing Kubernetes, Docker, and other cloud-based microservices.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">CASB Solutions</h3>
              <p className="text-gray-600">Providing visibility and control over cloud applications and user activities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Threat Intelligence */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Threat Intelligence & Advanced Security</h2>
              <p className="text-gray-600 mb-8">
                Cybercriminals are becoming increasingly sophisticated, requiring advanced security solutions that go beyond conventional measures. Our threat intelligence and security analytics help businesses stay ahead of cyber adversaries.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">AI-Driven Threat Hunting</h3>
                  <p className="text-gray-600">Utilizing machine learning to detect anomalies and unknown attack patterns.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">SOC as a Service</h3>
                  <p className="text-gray-600">Providing 24/7 monitoring, rapid incident response, and forensic investigations.</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Advanced Security Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2">Security Information & Event Management (SIEM)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2">Endpoint Detection & Response (EDR)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2">Zero-Day Exploit Protection</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Data Protection */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Data Protection & Disaster Recovery</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Data breaches and system failures can lead to significant financial and reputational damage. Our Data Protection & Disaster Recovery services ensure business continuity by safeguarding critical data and enabling rapid recovery in case of disruptions.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Backup & Recovery</h3>
              <p className="text-gray-600">Implementing automated, encrypted backups with versioning capabilities.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Business Continuity</h3>
              <p className="text-gray-600">Developing tailored strategies for handling unexpected outages.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Ransomware Protection</h3>
              <p className="text-gray-600">Implementing anti-ransomware tools and disaster recovery protocols.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Secure Your Enterprise Today</h2>
          <p className="mb-8">
            Contact us to learn how our comprehensive security and compliance solutions can protect your business from evolving cyber threats.
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