export default function TermsOfService() {
  return (
    <main className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose max-w-none">
          <p className="mb-6">Last updated: February 15, 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using our services, you accept and agree to be bound by the terms and conditions of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Services</h2>
            <p className="mb-4">
              We provide cloud management, SAP consulting, and related IT services. The specific services will be detailed in separate service agreements.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Cloud infrastructure management</li>
              <li>SAP implementation and consulting</li>
              <li>IT security services</li>
              <li>Technical support and maintenance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Client Responsibilities</h2>
            <p className="mb-4">Clients are responsible for:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Providing accurate information</li>
              <li>Maintaining confidentiality of account credentials</li>
              <li>Complying with applicable laws and regulations</li>
              <li>Paying agreed-upon fees on time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
            <p className="mb-4">
              All intellectual property rights in our services remain our property. Clients receive a limited license to use our services as agreed upon.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
            <p className="mb-4">
              We are not liable for indirect, incidental, special, or consequential damages arising from the use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these terms at any time. Changes will be effective upon posting to our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Contact Information</h2>
            <p className="mb-4">
              For questions about these terms, please contact us at:
              <br />
              Email: legal@bindx.io
            </p>
          </section>
        </div>
      </div>
    </main>
  );
} 