'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    slug: 'sap-s4hana-migration-guide-2024',
    title: "SAP S/4HANA Migration: A Comprehensive Guide for 2024",
    description: "Discover the key steps, best practices, and challenges in migrating to SAP S/4HANA. Learn how to ensure a smooth transition while minimizing business disruption.",
    date: "February 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
    category: "SAP Migration",
    tags: ["SAP S/4HANA", "Digital Transformation", "Enterprise IT"]
  },
  {
    slug: 'cloud-alm-revolutionizing-sap-lifecycle-management',
    title: "Cloud ALM: Revolutionizing SAP Application Lifecycle Management",
    description: "Explore how SAP Cloud ALM is transforming the way organizations manage their SAP landscape, from implementation to operations and continuous improvement.",
    date: "February 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
    category: "Cloud Solutions",
    tags: ["Cloud ALM", "DevOps", "Automation"]
  },
  {
    slug: 'sap-security-best-practices-2024',
    title: "Essential SAP Security Best Practices for 2024",
    description: "Learn about the latest security threats and how to protect your SAP systems. Comprehensive guide to authorization, authentication, and audit compliance.",
    date: "February 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80",
    category: "Security",
    tags: ["Cybersecurity", "Compliance", "Risk Management"]
  },
  {
    slug: 'optimizing-sap-performance-technical-guide',
    title: "Optimizing SAP Performance: A Technical Deep Dive",
    description: "Technical insights into improving SAP system performance, from database optimization to application-level tuning and monitoring strategies.",
    date: "February 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    category: "Performance",
    tags: ["Performance Tuning", "Monitoring", "Optimization"]
  },
  {
    slug: 'sap-cloud-platform-strategy-guide',
    title: "SAP on Cloud: Choosing the Right Platform and Strategy",
    description: "Compare different cloud platforms for SAP workloads and learn how to develop a successful cloud strategy aligned with your business objectives.",
    date: "February 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80",
    category: "Cloud Infrastructure",
    tags: ["Cloud Migration", "AWS", "Azure", "GCP"]
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Latest Insights in SAP Technology
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Stay updated with the latest trends, best practices, and expert insights in SAP infrastructure, cloud solutions, and digital transformation.
          </p>
        </div>
      </div>

      {/* Blog Posts Timeline */}
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <div className="space-y-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 ml-6 md:ml-0 md:left-1/2" />
              
              {/* Timeline Content */}
              <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-start gap-8`}>
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-12 h-12 bg-blue-600 rounded-full transform -translate-x-1/2 flex items-center justify-center z-10">
                  <span className="text-white font-semibold">{index + 1}</span>
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} ml-12 md:ml-0`}>
                  <Link href={`/blog/${post.slug}`} className="block group">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 group-hover:transform group-hover:scale-[1.02]">
                      <div className="relative h-64">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                            {post.category}
                          </span>
                          <span className="text-gray-500 text-sm">{post.date}</span>
                          <span className="text-gray-500 text-sm">{post.readTime}</span>
                        </div>
                        <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 mb-4">
                          {post.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 