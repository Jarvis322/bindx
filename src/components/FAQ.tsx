'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const faqs = [
    {
      question: "What does your SAP Patching service include?",
      answer: "Our SAP Patching service includes comprehensive solutions such as security patch management, kernel and software updates, regression testing, performance optimization, and automated patch distribution. We ensure your systems stay up-to-date and secure."
    },
    {
      question: "How do you manage the SAP S/4HANA migration process?",
      answer: "For SAP S/4HANA migrations, we conduct a detailed compatibility assessment and implement strategies to minimize downtime. We ensure custom code compatibility and manage a smooth transition process with comprehensive testing."
    },
    {
      question: "What are the features of your SAP security services?",
      answer: "Our SAP security services include threat detection and prevention, role and access management, audit and compliance support, vulnerability assessment, and regular implementation of security patches."
    },
    {
      question: "How is SAP Cloud ALM implementation carried out?",
      answer: "In SAP Cloud ALM implementation, we provide customized configuration, real-time monitoring and alert systems, process automation, performance benchmarking, and security integration tailored to your needs."
    },
    {
      question: "How do you manage the process of migrating SAP systems to the cloud?",
      answer: "During cloud migration, we perform detailed analysis and planning, ensuring minimal disruption during the transition. We offer hybrid or full cloud-based solutions for migration to AWS, Azure, or Google Cloud platforms."
    }
  ];

  if (!mounted) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-100"
              >
                <div className="w-full px-6 py-4 text-left flex justify-between items-center">
                  <span className="text-base font-medium text-gray-900">{faq.question}</span>
                  <span className="ml-6 text-blue-600">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-100"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center"
              >
                <span className="text-base font-medium text-gray-900">{faq.question}</span>
                <span className={`ml-6 transform transition-transform duration-200 text-blue-600 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 py-4 text-gray-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 