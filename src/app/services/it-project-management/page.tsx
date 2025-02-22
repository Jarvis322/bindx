import Image from 'next/image';
import Link from 'next/link';

export default function ItProjectManagement() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">IT Project & Service Management</h1>
            <p className="text-gray-600">
              Effective IT project and service management is critical for businesses aiming to achieve seamless digital transformation, optimized workflows, and operational excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Comprehensive IT Solutions</h2>
              <p className="text-gray-600 mb-8">
                Our expert consultants utilize agile methodologies, ITIL best practices, and industry-leading frameworks to deliver high-impact IT solutions that enhance productivity, improve service delivery, and ensure long-term business success.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                alt="IT Project Management"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* IT Project Management */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">IT Project Management</h2>
          <p className="text-gray-600 mb-12">
            Managing IT projects requires careful planning, coordination, and execution to ensure timely delivery within scope and budget. Our IT Project Management services provide businesses with a structured approach to handling complex IT initiatives with minimal disruption.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Agile & Waterfall Project Execution</h3>
              <p className="text-gray-600">Leveraging agile, scrum, and waterfall methodologies for efficient IT project delivery.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Risk Assessment & Mitigation</h3>
              <p className="text-gray-600">Identifying potential risks early and implementing proactive mitigation strategies.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Stakeholder Communication</h3>
              <p className="text-gray-600">Ensuring transparent collaboration between IT teams, business leaders, and external vendors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ITIL Service Management */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">ITIL-Based Service Management</h2>
              <p className="text-gray-600 mb-8">
                IT Service Management (ITSM) ensures reliable, efficient, and user-centric IT operations. Our ITIL-based service management framework guarantees seamless incident resolution, change management, and service optimization across all IT functions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2">Incident & Problem Management</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2">Change & Release Management</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2">Service Level Agreement (SLA) Compliance</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80"
                alt="ITIL Service Management"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Digital Transformation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Digital Transformation & Process Optimization</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Organizations looking to modernize IT operations and improve efficiency benefit from our digital transformation strategies and process optimization services.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Business Process Reengineering</h3>
              <p className="text-gray-600">Redesigning business processes to enhance efficiency and eliminate redundancies.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">AI-Driven IT Operations</h3>
              <p className="text-gray-600">Implementing AI-based self-healing IT systems for predictive analytics and auto-remediation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">DevOps & CI/CD</h3>
              <p className="text-gray-600">Enabling faster software development cycles through DevOps pipelines and automation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic IT Consulting */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Strategic IT Consulting</h2>
              <p className="text-gray-600 mb-8">
                Technology should drive business growth, not hinder it. Our Strategic IT Consulting Services help enterprises develop an actionable IT roadmap tailored to their long-term objectives.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">IT Strategy & Digital Roadmap</h3>
                  <p className="text-gray-600">Aligning IT initiatives with corporate goals for maximum impact.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Enterprise Architecture</h3>
                  <p className="text-gray-600">Crafting scalable, secure, and high-performing IT infrastructures.</p>
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
                  <span className="ml-2">Technology Vendor & Partner Management</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2">Regulatory Compliance & Risk Management</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2">M&A IT Integration Services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose BINDX Consulting?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Certified IT Experts</h3>
              <p className="text-gray-600">Our team includes PMP, ITIL, and Agile-certified professionals with extensive IT leadership experience.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Business-First Approach</h3>
              <p className="text-gray-600">We focus on delivering measurable value and aligning IT solutions with your business strategy.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Risk-Optimized Execution</h3>
              <p className="text-gray-600">Mitigating risks with proactive planning and real-time project monitoring.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Transform Your IT Operations</h2>
          <p className="mb-8">
            Contact us to learn how our IT project and service management solutions can help your business achieve operational excellence.
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