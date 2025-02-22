import Image from 'next/image';
import Link from 'next/link';

export default function DatabaseService() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Database as a Service (DBaaS)</h1>
            <p className="text-gray-600">
              Reliable, Scalable, and Secure Database Management for Modern Enterprises. Our fully managed DBaaS offerings cover deployment, maintenance, optimization, security, and disaster recovery across on-premise, cloud, and hybrid environments.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Enterprise Database Solutions</h2>
              <p className="text-gray-600 mb-8">
                Data is the lifeblood of modern enterprises, and managing databases efficiently is crucial for business success. With automated scaling, performance tuning, and compliance-driven security frameworks, we empower businesses to achieve unparalleled data reliability, cost efficiency, and operational excellence.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80"
                alt="Database Management"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Deployment & Architecture */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Database Deployment & Architecture Design</h2>
          <p className="text-gray-600 mb-12">
            Setting up a database requires careful planning to ensure high availability, security, and performance. We specialize in designing customized database architectures tailored to business needs.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Cloud-Native & On-Premise</h3>
              <p className="text-gray-600">Supporting databases on AWS, Azure, Google Cloud, and private cloud environments.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">High-Availability</h3>
              <p className="text-gray-600">Implementing replication, clustering, and geo-distributed architectures.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Automated Provisioning</h3>
              <p className="text-gray-600">Streamlining database setup with infrastructure-as-code methodologies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Database Security & Compliance</h2>
              <p className="text-gray-600 mb-8">
                Ensuring data integrity and regulatory compliance is fundamental to database management. Our DBaaS security solutions safeguard sensitive data and align with industry standards.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2">Data Encryption at Rest & In Transit</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2">Role-Based Access Control (RBAC)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2">Regulatory Compliance & Audit Logging</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80"
                alt="Database Security"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Performance Optimization */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Performance Optimization & Scaling</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Database performance directly impacts application responsiveness and user experience. Our optimization and scaling services ensure maximum efficiency, reduced query latencies, and resource utilization efficiency.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Query Optimization</h3>
              <p className="text-gray-600">Enhancing SQL query execution times and improving indexing techniques.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Dynamic Auto-Scaling</h3>
              <p className="text-gray-600">Adjusting database capacity based on real-time traffic patterns and usage spikes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">AI-Powered Optimization</h3>
              <p className="text-gray-600">Leveraging machine learning algorithms to enhance database tuning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Disaster Recovery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Backup & Disaster Recovery</h2>
              <p className="text-gray-600 mb-8">
                Data loss or corruption can have catastrophic consequences. Our DBaaS disaster recovery solutions provide robust backup, failover, and high-availability configurations.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Automated Backups</h3>
                  <p className="text-gray-600">Scheduled backups with point-in-time recovery (PITR) options.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Zero-Downtime Migration</h3>
                  <p className="text-gray-600">Seamlessly migrating databases with minimal business disruption.</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Recovery Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2">Geo-Redundant Replication</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2">Disaster Recovery Planning</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2">Continuous Data Integrity Checks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Databases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Supported Databases</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Relational (SQL)</h3>
              <ul className="text-gray-600 space-y-2">
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>Microsoft SQL Server</li>
                <li>Oracle Database</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">NoSQL</h3>
              <ul className="text-gray-600 space-y-2">
                <li>MongoDB</li>
                <li>Cassandra</li>
                <li>CouchDB</li>
                <li>DynamoDB</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">In-Memory</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Redis</li>
                <li>Memcached</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Data Warehouses</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Google BigQuery</li>
                <li>Amazon Redshift</li>
                <li>Snowflake</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Transform Your Database Management</h2>
          <p className="mb-8">
            Contact us to learn how our Database as a Service solutions can help your business achieve optimal data management and performance.
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