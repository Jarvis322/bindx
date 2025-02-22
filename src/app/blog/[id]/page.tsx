'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { createElement } from 'react';

const blogPosts = {
  "1": {
    title: "SAP S/4HANA Migration: A Comprehensive Guide for 2024",
    date: "February 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
    category: "SAP Migration",
    tags: ["SAP S/4HANA", "Digital Transformation", "Enterprise IT"],
    content: `
      In today's rapidly evolving digital landscape, organizations are increasingly recognizing the imperative to modernize their SAP systems through S/4HANA migration. This comprehensive guide explores the essential aspects of SAP S/4HANA migration, providing organizations with strategic insights and practical recommendations for a successful transition.

      SAP S/4HANA represents a significant leap forward in enterprise resource planning (ERP) technology. Built on the powerful SAP HANA in-memory database, it offers unprecedented speed, real-time analytics, and simplified data models. The migration to S/4HANA is more than a technical upgrade—it's a transformational journey that can revolutionize how organizations operate. With enhanced performance capabilities delivering up to 10x faster processing speeds, organizations can achieve real-time analytics for better decision-making. The simplified data model reduces redundancy and complexity, while the modern, intuitive interfaces with SAP Fiori improve user experience significantly. Furthermore, as a future-ready platform, S/4HANA prepares organizations for emerging technologies like AI and IoT.

      The journey to successful S/4HANA migration begins with comprehensive planning and assessment. Organizations must thoroughly evaluate their current SAP landscape, including existing customizations, system performance, data volumes, and potential technical gaps. This assessment phase is crucial for identifying infrastructure requirements and determining the overall business impact. Change management needs must also be carefully considered to ensure smooth transition and user adoption.

      When it comes to migration approaches, organizations have several options to consider. A Greenfield Implementation involves a complete system re-implementation, ideal for organizations seeking significant business process redesign and a fresh start with best practices. The Brownfield Conversion approach focuses on system conversion of existing SAP ECC, maintaining historical data and customizations while typically offering a faster implementation timeline. For organizations seeking a middle ground, the Selective Data Transition approach combines elements of both methods, offering flexible scope and phased implementation while balancing innovation with continuity.

      Technical preparation plays a vital role in successful migration. Database preparation involves thorough data cleansing and harmonization, implementing effective archiving strategies for historical data, and optimizing custom code for the HANA database. Ensuring compatibility with the S/4HANA data model is essential for smooth operation post-migration. Infrastructure requirements must be carefully considered, including appropriate HANA database sizing, planning for high-availability and disaster recovery, and evaluating whether a cloud or on-premise deployment best suits the organization's needs.

      Strong governance is fundamental to migration success. Organizations should establish clear project structures and responsibilities, define robust decision-making processes, and implement comprehensive risk management procedures. Regular progress monitoring and tracking ensure the project stays on course and meets its objectives. Change management is equally crucial, requiring well-developed training programs, regular stakeholder communication, and proactive measures to address resistance to change.

      Business process optimization should be a key focus during migration. Organizations should take the opportunity to review and streamline existing processes, leveraging S/4HANA best practices where applicable. Identifying automation opportunities and aligning processes with broader digital transformation goals can significantly enhance operational efficiency and competitive advantage.

      Post-migration considerations are vital for long-term success. Organizations should implement robust monitoring tools and KPIs to track system performance, conduct regular health checks, and continuously optimize performance based on actual usage patterns. User feedback and satisfaction surveys provide valuable insights for ongoing improvements. A commitment to continuous improvement through regular updates, patch management, and process optimization ensures the organization maximizes the benefits of their S/4HANA investment.

      The path to successful SAP S/4HANA migration requires careful planning, robust execution, and ongoing commitment to change management. Organizations must recognize that each migration journey is unique and should be tailored to specific business needs, technical requirements, and organizational capabilities. With proper planning and execution, SAP S/4HANA migration becomes not just a technical upgrade but a catalyst for digital transformation and business innovation.

      Success in SAP S/4HANA migration ultimately depends on a holistic approach that combines technical expertise with strategic business thinking. Organizations must balance immediate operational needs with long-term strategic goals, ensuring that the migration delivers both immediate benefits and sustainable value. Through careful attention to these various aspects and a commitment to excellence in execution, organizations can achieve a successful transition to SAP S/4HANA and position themselves for future success in an increasingly digital business landscape.
    `
  },
  "2": {
    title: "Cloud ALM: Revolutionizing SAP Application Lifecycle Management",
    date: "February 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
    category: "Cloud Solutions",
    tags: ["Cloud ALM", "DevOps", "Automation"],
    content: `
      Cloud Application Lifecycle Management (Cloud ALM) is transforming how organizations manage their SAP landscapes, offering a comprehensive solution that streamlines implementation, operations, and continuous improvement processes. This revolutionary approach to application lifecycle management is changing the way businesses handle their SAP environments, providing unprecedented levels of efficiency and control.

      The evolution of SAP application lifecycle management has reached a new milestone with Cloud ALM. Traditional ALM solutions, while effective for their time, often struggled to keep pace with the rapidly evolving needs of modern businesses. Cloud ALM addresses these challenges by providing a cloud-native solution that combines flexibility, scalability, and comprehensive functionality in a single platform.

      At its core, Cloud ALM represents a paradigm shift in how organizations approach application lifecycle management. The platform integrates seamlessly with SAP's cloud solutions, providing real-time insights and automated workflows that significantly reduce manual effort and potential for error. This integration extends across the entire application lifecycle, from initial implementation through ongoing operations and continuous improvement phases.

      Implementation management in Cloud ALM brings a new level of efficiency to project execution. The platform provides structured approaches to project planning, with pre-configured best practices and templates that accelerate deployment while maintaining quality standards. Real-time collaboration features enable team members to work together effectively, regardless of their physical location, while automated quality checks ensure consistent delivery standards.

      One of the most significant advantages of Cloud ALM is its comprehensive approach to requirements management. The platform enables organizations to capture, track, and manage requirements throughout the project lifecycle. Built-in validation tools help ensure that requirements are complete, consistent, and aligned with business objectives. This systematic approach to requirements management helps prevent scope creep and ensures that project deliverables meet stakeholder expectations.

      Process management capabilities in Cloud ALM provide unprecedented visibility into business processes. Organizations can model, analyze, and optimize their processes using intuitive tools that facilitate collaboration between business and IT stakeholders. The platform's process mining capabilities help identify bottlenecks and improvement opportunities, while simulation features allow teams to evaluate the impact of proposed changes before implementation.

      Testing management is another area where Cloud ALM excels. The platform provides comprehensive test management capabilities, including test planning, execution, and defect management. Automated test execution capabilities reduce manual effort and increase test coverage, while integrated defect tracking ensures that issues are identified and resolved quickly. Risk-based testing approaches help organizations focus their testing efforts where they matter most.

      Deployment management in Cloud ALM streamlines the process of moving changes through the landscape. The platform provides sophisticated transport management capabilities that ensure changes are properly sequenced and deployed. Automated validation checks help prevent common deployment issues, while rollback capabilities provide a safety net if problems occur.

      Operations management is greatly enhanced through Cloud ALM's monitoring and analytics capabilities. Real-time monitoring of system health, performance metrics, and business processes provides early warning of potential issues. Predictive analytics help identify trends and potential problems before they impact business operations, while automated incident management streamlines problem resolution.

      Security and compliance management are integral components of Cloud ALM. The platform provides comprehensive tools for managing access controls, monitoring security events, and ensuring compliance with regulatory requirements. Automated compliance checks and documentation features help organizations maintain their compliance posture while reducing the administrative burden on IT staff.

      The future of Cloud ALM looks promising as SAP continues to enhance the platform's capabilities. Machine learning and artificial intelligence features are being integrated to provide more intelligent automation and predictive capabilities. Enhanced integration with DevOps tools and practices is making it easier for organizations to adopt modern development methodologies.

      Success with Cloud ALM requires a thoughtful approach to implementation and adoption. Organizations should start by assessing their current ALM practices and identifying areas where Cloud ALM can provide the most immediate value. A phased approach to adoption, combined with proper training and change management, helps ensure successful implementation and user adoption.

      Cloud ALM represents a significant advancement in how organizations manage their SAP landscapes. By providing comprehensive, integrated capabilities for managing the entire application lifecycle, Cloud ALM helps organizations improve efficiency, reduce risks, and deliver better outcomes. As organizations continue their digital transformation journeys, Cloud ALM will play an increasingly important role in ensuring the success of their SAP investments.
    `
  },
  "3": {
    title: "Essential SAP Security Best Practices for 2024",
    date: "February 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80",
    category: "Security",
    tags: ["Cybersecurity", "Compliance", "Risk Management"],
    content: `
      In the ever-evolving landscape of enterprise technology, SAP security has become a critical concern for organizations worldwide. As cyber threats become more sophisticated and regulatory requirements more stringent, implementing robust security measures for SAP systems is no longer optional but imperative. This comprehensive guide explores the essential security best practices that organizations should implement to protect their SAP environments in 2024 and beyond.

      The foundation of SAP security begins with robust access control and user management. Organizations must implement a comprehensive identity and access management strategy that ensures users have only the permissions they need to perform their jobs. This principle of least privilege is fundamental to preventing unauthorized access and potential security breaches. Regular access reviews and automated user provisioning processes help maintain the integrity of access controls while reducing administrative overhead.

      Authentication mechanisms form another critical layer of SAP security. Multi-factor authentication (MFA) has become a standard requirement for accessing SAP systems, particularly for privileged accounts and remote access scenarios. Organizations should implement strong password policies and consider biometric authentication where appropriate. Single sign-on (SSO) solutions can enhance both security and user experience when properly implemented with appropriate security controls.

      Network security plays a vital role in protecting SAP systems. Organizations should implement network segmentation to isolate SAP systems from other network segments, using firewalls and intrusion detection/prevention systems to monitor and control traffic. Secure communication protocols must be enforced for all SAP system connections, with encryption used for data in transit. Regular network security assessments help identify and address potential vulnerabilities before they can be exploited.

      Data protection is paramount in SAP security. Organizations must implement comprehensive data encryption strategies, covering both data at rest and in transit. Sensitive data should be identified and classified according to its security requirements, with appropriate controls applied based on classification levels. Regular data access auditing and monitoring help ensure that sensitive information remains protected and that any unauthorized access attempts are quickly detected and addressed.

      Security monitoring and incident response capabilities are essential for maintaining a strong security posture. Organizations should implement comprehensive logging and monitoring solutions that provide real-time visibility into security events across their SAP landscape. Security information and event management (SIEM) systems can help correlate security events and identify potential threats. A well-defined incident response plan ensures that security incidents are handled quickly and effectively when they occur.

      Vulnerability management is an ongoing process that requires regular attention. Organizations should implement a systematic approach to identifying and addressing vulnerabilities in their SAP systems. This includes regular security patches and updates, vulnerability scanning, and penetration testing. A risk-based approach to vulnerability management helps organizations prioritize their remediation efforts and focus resources where they will have the greatest impact.

      Compliance management has become increasingly important as regulatory requirements continue to evolve. Organizations must ensure their SAP security controls align with relevant compliance requirements, such as GDPR, SOX, or industry-specific regulations. Regular compliance assessments and automated compliance monitoring help organizations maintain their compliance posture and demonstrate due diligence to auditors and regulators.

      Change management processes must incorporate security considerations throughout the development and deployment lifecycle. Security testing should be integrated into the development process, with automated security scanning tools used to identify potential vulnerabilities in custom code. Change control procedures should ensure that security impacts are assessed and addressed before changes are implemented in production systems.

      Business continuity and disaster recovery planning are essential components of a comprehensive security strategy. Organizations should implement robust backup and recovery procedures, with regular testing to ensure their effectiveness. High availability configurations and disaster recovery sites help ensure that critical SAP systems remain available even in the event of a security incident or other disruption.

      Security awareness and training programs are crucial for maintaining a strong security culture. All users should receive regular security awareness training, with additional specialized training for technical staff and administrators. Regular communication about security risks and best practices helps maintain awareness and encourage secure behavior throughout the organization.

      The future of SAP security will continue to evolve as new threats emerge and technology advances. Organizations must stay informed about emerging security trends and threats, regularly reviewing and updating their security strategies to address new challenges. Artificial intelligence and machine learning technologies are increasingly being incorporated into security solutions, helping organizations detect and respond to threats more quickly and effectively.

      Successful SAP security requires a comprehensive approach that combines technical controls, processes, and people. Organizations must maintain a balance between security requirements and business needs, ensuring that security controls protect critical assets without unduly impacting business operations. Through careful attention to these various aspects and a commitment to continuous improvement, organizations can maintain a strong security posture and protect their SAP investments effectively.
    `
  },
  "4": {
    title: "Optimizing SAP Performance: A Technical Deep Dive",
    date: "February 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    category: "Performance",
    tags: ["Performance Tuning", "Monitoring", "Optimization"],
    content: `
      Performance optimization in SAP systems is a critical aspect of maintaining efficient business operations. As organizations increasingly rely on SAP for their core business processes, ensuring optimal system performance becomes paramount. This technical deep dive explores comprehensive strategies and best practices for optimizing SAP system performance across various dimensions.

      System performance optimization begins with a thorough understanding of the SAP architecture and its components. The interaction between database, application servers, and front-end systems must be carefully analyzed to identify potential bottlenecks and optimization opportunities. Performance optimization is not a one-time activity but rather an ongoing process that requires continuous monitoring, analysis, and adjustment.

      Database performance forms the foundation of SAP system optimization. Modern SAP systems, particularly those running on HANA, require specific optimization techniques to achieve optimal performance. This includes proper sizing of memory areas, optimizing table partitioning strategies, and implementing effective data archiving policies. Regular database maintenance activities, such as statistics updates and reorganizations, play a crucial role in maintaining consistent performance levels.

      Application server optimization involves multiple aspects, from workload distribution to memory management. Proper sizing and configuration of work processes ensure efficient handling of user requests. Buffer settings must be optimized based on workload patterns and available resources. Connection pooling and load balancing strategies help distribute workload effectively across available application servers, preventing bottlenecks and ensuring optimal resource utilization.

      Network performance significantly impacts end-user experience and system responsiveness. Organizations must implement proper network segmentation and quality of service policies to ensure critical SAP traffic receives appropriate priority. Network latency between different system components should be minimized, particularly in distributed landscapes. Regular network performance monitoring helps identify and address potential issues before they impact business operations.

      Code optimization is essential for maintaining good system performance. Custom ABAP code should be regularly reviewed and optimized using tools like the ABAP runtime analysis. Common performance issues such as inefficient database queries, unnecessary loops, and suboptimal data handling should be identified and addressed. Code review guidelines should include performance considerations, ensuring that new developments follow performance best practices.

      Memory management plays a crucial role in SAP system performance. Proper sizing and configuration of various memory areas, including buffer areas and work process memory, ensure efficient resource utilization. Regular monitoring of memory usage patterns helps identify potential memory leaks or configuration issues. Implementing effective garbage collection strategies helps maintain stable memory utilization levels.

      Background job management requires careful attention to prevent impact on online user performance. Job scheduling strategies should consider system load patterns and available resources. Critical background jobs should be prioritized appropriately, with less critical jobs scheduled during off-peak hours. Regular review of job execution statistics helps optimize scheduling patterns and identify problematic jobs.

      Performance monitoring and analytics capabilities are essential for maintaining optimal system performance. Comprehensive monitoring solutions should cover all critical system components, providing real-time visibility into performance metrics. Trend analysis helps identify gradual performance degradation, while alerting mechanisms ensure quick response to performance issues. Regular performance reviews help identify optimization opportunities and validate the effectiveness of implemented measures.

      Cache optimization strategies play a significant role in improving system response times. Various cache levels, from database buffer cache to application server buffers, must be properly sized and configured. Cache hit ratios should be regularly monitored, with adjustments made based on actual usage patterns. Implementation of client-side caching strategies can further improve end-user experience.

      System sizing and capacity planning are fundamental aspects of performance optimization. Regular review of system utilization patterns helps ensure adequate resources are available to meet business needs. Capacity planning should consider both current requirements and projected growth, with appropriate buffer for peak loads. Cloud-based deployments offer additional flexibility in adjusting resources based on actual demand.

      Performance testing and validation procedures ensure that system changes do not negatively impact performance. Load testing should simulate realistic usage patterns, including peak load scenarios. Performance benchmarks help establish baseline performance levels and measure the impact of optimization measures. Regular performance testing helps identify potential issues before they affect production systems.

      The future of SAP performance optimization will increasingly leverage artificial intelligence and machine learning capabilities. These technologies can help identify performance patterns, predict potential issues, and recommend optimization measures. Automated optimization techniques will become more sophisticated, helping organizations maintain optimal performance with reduced manual effort.

      Successful SAP performance optimization requires a holistic approach that considers all system components and their interactions. Organizations must balance performance requirements with resource constraints and operational considerations. Through careful attention to these various aspects and a commitment to continuous optimization, organizations can maintain high-performing SAP systems that effectively support their business operations.
    `
  },
  "5": {
    title: "SAP on Cloud: Choosing the Right Platform and Strategy",
    date: "February 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80",
    category: "Cloud Infrastructure",
    tags: ["Cloud Migration", "AWS", "Azure", "GCP"],
    content: `
      The migration of SAP workloads to the cloud represents a significant strategic decision for organizations. As cloud technologies mature and providers enhance their SAP-specific offerings, organizations face important choices in selecting the right cloud platform and developing an effective cloud strategy. This comprehensive guide explores key considerations and best practices for successfully deploying SAP systems in the cloud.

      Cloud adoption for SAP systems has evolved significantly in recent years. Major cloud providers have developed specialized offerings designed specifically for SAP workloads, providing optimized infrastructure and services that meet SAP's stringent requirements. Understanding the capabilities and limitations of different cloud platforms is crucial for making informed decisions about cloud deployment strategies.

      The choice of cloud platform depends on various factors, including technical requirements, business objectives, and existing technology investments. Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP) each offer unique advantages for SAP deployments. Organizations must carefully evaluate factors such as geographic availability, service offerings, pricing models, and integration capabilities when selecting a cloud provider.

      Infrastructure considerations play a crucial role in cloud platform selection. SAP systems, particularly those running on HANA, have specific requirements for compute, storage, and network resources. Cloud providers offer various instance types optimized for different SAP workloads, from development and testing environments to production systems handling mission-critical processes. Understanding these options and their implications is essential for successful cloud deployment.

      High availability and disaster recovery capabilities are critical factors in cloud platform selection. Cloud providers offer various solutions for ensuring business continuity, from simple backup and restore capabilities to sophisticated multi-region deployment options. Organizations must carefully evaluate their availability requirements and select appropriate solutions that balance cost with business needs.

      Security and compliance requirements significantly influence cloud deployment decisions. Organizations must ensure that their chosen cloud platform provides adequate security controls and compliance certifications. This includes features for network security, data encryption, access control, and audit logging. Integration with existing security tools and processes should also be considered.

      Cost management in the cloud requires careful attention and planning. While cloud deployments can offer significant cost advantages, organizations must implement proper governance and optimization measures to control spending. This includes selecting appropriate instance types, implementing automated scaling policies, and utilizing cost optimization tools provided by cloud platforms.

      Performance optimization in cloud environments presents unique challenges and opportunities. Cloud platforms offer various tools and services for monitoring and optimizing performance, from basic monitoring capabilities to sophisticated analytics and automation features. Organizations must develop strategies for maintaining consistent performance levels while managing costs effectively.

      Integration requirements must be carefully considered when selecting a cloud platform. SAP systems typically integrate with various other applications and services, both on-premises and in the cloud. The chosen cloud platform should support required integration patterns and provide appropriate tools and services for managing these integrations effectively.

      Migration planning is crucial for successful cloud adoption. Organizations must develop comprehensive migration strategies that consider technical requirements, business impact, and risk factors. This includes selecting appropriate migration approaches, planning for data migration, and ensuring adequate testing and validation procedures are in place.

      Operational considerations play a significant role in cloud platform selection. Organizations must evaluate how well different cloud platforms align with their operational processes and tools. This includes capabilities for monitoring, automation, patch management, and problem resolution. The availability of managed services and support options should also be considered.

      Skills and resource requirements vary across cloud platforms. Organizations must consider their existing skill sets and the availability of resources familiar with different cloud platforms. Training requirements and the availability of external expertise should be factored into platform selection decisions.

      The future of SAP in the cloud continues to evolve as providers enhance their offerings and new technologies emerge. Organizations should consider not only current requirements but also future possibilities when selecting a cloud platform. This includes evaluating providers' roadmaps and their commitment to supporting SAP workloads long-term.

      Successful SAP cloud deployment requires careful planning and execution across multiple dimensions. Organizations must develop comprehensive strategies that address technical, operational, and business requirements while managing risks effectively. Through careful attention to these various aspects and a commitment to continuous improvement, organizations can achieve successful SAP deployments in the cloud that deliver lasting business value.
    `
  }
};

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900">Blog post not found</h1>
        </div>
      </div>
    );
  }

  const renderContent = (content: string) => {
    return content.split('\n').map((paragraph, index) => {
      const trimmedParagraph = paragraph.trim();
      
      if (trimmedParagraph.startsWith('#')) {
        const level = trimmedParagraph.match(/^#+/)?.[0].length || 1;
        const text = trimmedParagraph.replace(/^#+\s/, '');
        return createElement(`h${Math.min(level, 6)}`, { 
          key: index,
          className: 'mt-8 mb-4'
        }, text);
      }

      if (trimmedParagraph.startsWith('-')) {
        return (
          <ul key={index} className="list-disc pl-4 my-4">
            <li>{trimmedParagraph.replace(/^-\s/, '')}</li>
          </ul>
        );
      }

      if (trimmedParagraph.startsWith('1.')) {
        return (
          <ol key={index} className="list-decimal pl-4 my-4">
            <li>{trimmedParagraph.replace(/^\d+\.\s/, '')}</li>
          </ol>
        );
      }

      return trimmedParagraph && <p key={index}>{trimmedParagraph}</p>;
    });
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[60vh] w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
                  {post.category}
                </span>
                <span className="text-white/90 text-sm">{post.date}</span>
                <span className="text-white/90 text-sm">{post.readTime}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl">
                {post.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg prose-blue max-w-none"
          >
            {renderContent(post.content)}
          </motion.div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t">
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 