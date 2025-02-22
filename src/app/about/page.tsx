import Image from 'next/image';

export default function About() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-6">About BINDX Consulting</h1>
              <p className="text-gray-600 mb-6">
                At BINDX Consulting, we are a team of highly skilled and certified professionals with over 15 years of experience in enterprise IT solutions. Our expertise spans across SAP BASIS, cloud computing, infrastructure optimization, and cybersecurity, empowering businesses to achieve seamless digital transformation with efficiency and security at the core of our services.
              </p>
              <p className="text-gray-600 mb-6">
                We take a customer-centric approach, delivering tailored solutions that align with the unique needs of each organization. By optimizing SAP system reliability, performance, and efficiency, we enable companies to enhance their competitive advantage. Our cloud computing services provide businesses with flexible, scalable, and cost-effective infrastructures, ensuring they stay ahead in an ever-evolving technological landscape.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                alt="BINDX Team"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600">
              At BINDX Consulting, we are dedicated to helping businesses scale and compete on a global level by leveraging cutting-edge technologies. Our mission is to integrate technology with business processes, ensuring organizations meet their strategic goals with an agile, scalable, and continuously evolving infrastructure.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Security First</h3>
              <p className="text-gray-600">
                Security and compliance are at the heart of our operations. We implement industry best practices to safeguard digital assets and maintain uninterrupted operations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We continuously evolve our services and solutions to keep pace with the latest technological advancements, ensuring our clients stay ahead of the competition.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
              <p className="text-gray-600">
                We are committed to ITIL and SLA standards, guaranteeing timely and high-quality service delivery, allowing businesses to focus on growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 