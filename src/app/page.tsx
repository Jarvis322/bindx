'use client';

import Image from "next/image";
import Link from "next/link";
import { HeroSection } from "@/components/HeroSection";
import { FAQ } from "@/components/FAQ";
import { useEffect, useState } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main className="min-h-screen">
      <HeroSection />

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Expert Team</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Your Trusted Partner in SAP Solutions
              </h2>
              <p className="text-gray-600 mb-6">
                At Bindx, we stand by your side in your digital transformation journey. 
                With our SAP consulting and implementation services, we optimize your business processes, 
                increase your efficiency, and provide competitive advantage.
              </p>
              <Link
                href="/about"
                className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
              >
                Learn More
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
            <div className="relative h-[400px]">
            <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                alt="About Bindx"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SAP Services Section */}
      {isClient && (
        <section className="py-20 bg-blue-50 overflow-hidden w-full">
          <div className="text-center mb-12 max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our SAP Services</h2>
            <p className="text-blue-800">
              We are by your side in your business's digital transformation journey with our comprehensive SAP solutions. 
              Our expert team optimizes your SAP systems, ensures security, and enhances performance.
            </p>
          </div>
          <div className="relative w-full">
            <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing" 
                 style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}>
              <div className="flex-none w-[5vw]"></div>
              <div className="flex gap-6 animate-scroll">
                {[...Array(2)].map((_, loopIndex) => (
                  <div key={`loop-${loopIndex}`} className="flex gap-6 flex-none">
                    {[
                      {
                        title: "SAP Patching",
                        description: "We keep your SAP environment up-to-date with security updates and system optimization.",
                        icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      },
                      {
                        title: "SAP Upgrade",
                        description: "We seamlessly upgrade your SAP system to the latest version.",
                        icon: "M13 10V3L4 14h7v7l9-11h-7z"
                      },
                      {
                        title: "SAP Security",
                        description: "We protect your SAP system against internal and external threats.",
                        icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      },
                      {
                        title: "SAP Authorization",
                        description: "Role-based access control and authorization management.",
                        icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      },
                      {
                        title: "SAP Migration",
                        description: "We seamlessly migrate your SAP systems to the cloud.",
                        icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                      },
                      {
                        title: "SAP Cloud ALM",
                        description: "Application lifecycle management with SAP Cloud ALM.",
                        icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                      },
                      {
                        title: "SAP on Cloud",
                        description: "Management and optimization of your SAP systems on cloud.",
                        icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                      },
                      {
                        title: "SAP On-Premise",
                        description: "On-premise SAP infrastructure management and maintenance services.",
                        icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      },
                      {
                        title: "SAP Basis",
                        description: "SAP system management and technical operations.",
                        icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                      },
                      {
                        title: "SAP HANA",
                        description: "SAP HANA database management and optimization.",
                        icon: "M13 10V3L4 14h7v7l9-11h-7z"
                      }
                    ].map((service, index) => (
                      <div key={`${loopIndex}-${index}`} className="flex-none w-[300px] md:w-[320px] snap-start">
                        <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col">
                          <div className="text-blue-600 mb-4">
                            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                            </svg>
                          </div>
                          <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
                          <p className="text-gray-600 mb-4 flex-grow">
                            {service.description}
                          </p>
                          <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} 
                                className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center mt-auto">
                            Learn More
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <div className="flex-none w-[5vw]"></div>
            </div>
            
            <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-50 via-blue-50 to-transparent w-[5vw] h-full z-10"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-blue-50 via-blue-50 to-transparent w-[5vw] h-full z-10"></div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <FAQ />

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1.5" fill="currentColor"/>
            </pattern>
            <rect x="0" y="0" width="100" height="100" fill="url(#pattern-circles)"/>
          </svg>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-6">
            Contact Us for Your SAP Projects
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Our expert team is ready to provide customized solutions for your business needs.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
          >
            Get Free Consultation
          </Link>
    </div>
      </section>
    </main>
  );
}
