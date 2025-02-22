'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-blue-600"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-gray-50 text-gray-600">
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