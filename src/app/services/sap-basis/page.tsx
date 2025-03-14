import Image from 'next/image';
import Link from 'next/link';
import { 
  ServerIcon,
  CloudIcon,
  CpuChipIcon,
  CircleStackIcon,
  ArrowPathIcon,
  ShieldCheckIcon,
  ArrowsPointingOutIcon,
  LockClosedIcon,
  CloudArrowUpIcon,
  SignalIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon,
  ClipboardDocumentCheckIcon,
  UserGroupIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

interface ServiceCardProps {
  title: string;
  description: string;
  bulletPoints: { title: string; description: string; }[];
  icon: React.ElementType;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, bulletPoints, icon: Icon }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <Icon className="h-8 w-8 text-blue-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <ul className="space-y-3">
            {bulletPoints.map((point, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-medium text-gray-900">{point.title}</span>
                  <p className="text-gray-600">{point.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default function SapBasis() {
  const services = [
    {
      title: "Infrastructure Design and Installation",
      description: "Our infrastructure solutions for your SAP systems allow you to meet today's needs while being ready for tomorrow's growth targets.",
      icon: ServerIcon,
      bulletPoints: [
        {
          title: "Physical Infrastructure",
          description: "Hardware requirements analysis, server architecture design, and network infrastructure optimization."
        },
        {
          title: "Storage Solutions",
          description: "Special storage strategies for high-volume transaction systems like SAP HANA."
        },
        {
          title: "Disaster Recovery",
          description: "Reliable backup systems that ensure business continuity and prevent data loss."
        },
        {
          title: "Network Configuration",
          description: "Optimized, secure, and high-performance network architecture for SAP systems."
        }
      ]
    },
    {
      title: "Virtualization Expertise",
      description: "Our virtualization solutions enable you to use your physical resources with maximum efficiency.",
      icon: CloudIcon,
      bulletPoints: [
        {
          title: "Platform Expertise",
          description: "Advanced configuration on VMware and Hyper-V virtualization platforms."
        },
        {
          title: "SAP Optimization",
          description: "Specially tuned virtual machine configurations for SAP workloads."
        },
        {
          title: "Capacity Planning",
          description: "Flexible virtualization architecture that can expand with business growth."
        },
        {
          title: "Performance Monitoring",
          description: "Systems that detect bottlenecks and continuously optimize performance."
        }
      ]
    },
    {
      title: "Operating System Management",
      description: "We manage the operating systems your SAP systems run on with our expert team.",
      icon: CpuChipIcon,
      bulletPoints: [
        {
          title: "Linux Enterprise",
          description: "Team specialized in SUSE Linux Enterprise solutions optimized for SAP systems."
        },
        {
          title: "Windows Server",
          description: "Customized management services for Windows-based SAP environments."
        },
        {
          title: "IBM Systems",
          description: "Professional management for enterprise level IBM AIX and Power Systems."
        },
        {
          title: "Security Hardening",
          description: "Advanced security protocols and configurations for SAP environments."
        }
      ]
    },
    {
      title: "SAP Basis Installation",
      description: "We offer comprehensive services in the Basis layer forming the technical foundation of your SAP systems.",
      icon: CircleStackIcon,
      bulletPoints: [
        {
          title: "New Installations",
          description: "SAP system installations from scratch in greenfield projects."
        },
        {
          title: "System Copying",
          description: "Homogeneous and heterogeneous system copying operations."
        },
        {
          title: "Kernel Updates",
          description: "Kernel update operations with minimum interruption."
        },
        {
          title: "Security Configuration",
          description: "System configuration compliant with the latest security standards."
        }
      ]
    },
    {
      title: "System Management",
      description: "We ensure your systems run uninterrupted, secure, and high-performance.",
      icon: ArrowPathIcon,
      bulletPoints: [
        {
          title: "Proactive Monitoring",
          description: "24/7 system health and performance tracking."
        },
        {
          title: "Capacity Management",
          description: "Continuous analysis and planning for optimum resource use."
        },
        {
          title: "Maintenance",
          description: "System maintenance planning that won't affect business processes."
        },
        {
          title: "Problem Management",
          description: "Root cause analysis and permanent solutions for technical issues."
        }
      ]
    },
    {
      title: "Business Continuity",
      description: "We provide uninterrupted operation and data security for your critical SAP systems.",
      icon: ShieldCheckIcon,
      bulletPoints: [
        {
          title: "High Availability",
          description: "Cluster configurations and load balancing systems."
        },
        {
          title: "Disaster Recovery",
          description: "Strategies created with business impact analysis."
        },
        {
          title: "Failover Systems",
          description: "Automatic transition systems for hardware or software failures."
        },
        {
          title: "Recovery Planning",
          description: "Custom solutions meeting your RPO and RTO targets."
        }
      ]
    },
    {
      title: "SAP HANA Services",
      description: "We manage HANA projects with our team specialized in new generation SAP technologies.",
      icon: ArrowsPointingOutIcon,
      bulletPoints: [
        {
          title: "Installation",
          description: "Installation and optimization of the latest SAP HANA versions."
        },
        {
          title: "System Replication",
          description: "HANA replication configuration for high availability."
        },
        {
          title: "Performance",
          description: "Memory management, SQL optimization, and workload analysis."
        },
        {
          title: "Security",
          description: "Database encryption, authorization, and security auditing."
        }
      ]
    },
    {
      title: "Authorization Management",
      description: "Our specialized team ensures security and compliance while maintaining smooth business processes.",
      icon: LockClosedIcon,
      bulletPoints: [
        {
          title: "Role Management",
          description: "Role architecture designed with least privilege principle."
        },
        {
          title: "SoD Analysis",
          description: "Detection and resolution of duty segregation conflicts."
        },
        {
          title: "Access Control",
          description: "Advanced authorization controls for sensitive transactions."
        },
        {
          title: "Compliance",
          description: "Authorization management for SOX, GDPR, KVKK compliance."
        }
      ]
    },
    {
      title: "RISE Extended Services",
      description: "We offer comprehensive services beyond the basic services in the RISE transformation process.",
      icon: CloudArrowUpIcon,
      bulletPoints: [
        {
          title: "Strategic Consulting",
          description: "Customized consulting for S/4HANA Cloud transition with RISE."
        },
        {
          title: "Cloud Optimization",
          description: "Performance and cost optimization on AWS, Azure, or Google Cloud."
        },
        {
          title: "Integration Solutions",
          description: "Integration with non-RISE systems in cloud environment."
        },
        {
          title: "Environment Management",
          description: "Proactive monitoring and continuous improvement services."
        }
      ]
    },
    {
      title: "Performance Optimization",
      description: "We offer expert services to get maximum efficiency from your SAP systems.",
      icon: ChartBarIcon,
      bulletPoints: [
        {
          title: "System Analysis",
          description: "Assessment of CPU, memory, disk I/O, and network performance."
        },
        {
          title: "SQL Optimization",
          description: "Detection and optimization of problematic database queries."
        },
        {
          title: "Workload Management",
          description: "Analysis and optimization of system workload impact."
        },
        {
          title: "Buffer Optimization",
          description: "Optimal configuration of SAP buffers and pools."
        }
      ]
    },
    {
      title: "Patch Management",
      description: "Our systematic approach ensures your systems stay current and secure.",
      icon: WrenchScrewdriverIcon,
      bulletPoints: [
        {
          title: "Strategy Development",
          description: "Organization-specific patch application strategy."
        },
        {
          title: "Critical Updates",
          description: "Tracking and implementation of important SAP patches."
        },
        {
          title: "Impact Analysis",
          description: "Assessment of patch impacts on existing systems."
        },
        {
          title: "Documentation",
          description: "Detailed documentation of all applied updates."
        }
      ]
    },
    {
      title: "Technical Consulting",
      description: "Our expert staff is by your side at every step of your SAP journey.",
      icon: ClipboardDocumentCheckIcon,
      bulletPoints: [
        {
          title: "Strategic Planning",
          description: "Creation and optimization of SAP infrastructure strategies."
        },
        {
          title: "Architecture Design",
          description: "SAP system architecture design for your business needs."
        },
        {
          title: "Growth Planning",
          description: "System expansion strategies aligned with business growth."
        },
        {
          title: "Cost Optimization",
          description: "License and TCO optimization for your SAP systems."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-basis.jpg"
            alt="SAP Basis Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 mix-blend-multiply" />
        </div>
        <div className="relative pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                SAP Basis Services
              </h1>
              <p className="mt-3 max-w-3xl mx-auto text-xl text-blue-100">
                End-to-End SAP Infrastructure Management and Consulting
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 leading-relaxed">
            At BINDX, we strengthen your business's digital backbone with our engineering staff specialized in every layer of your SAP systems from foundation to roof. Our 15+ years of experience in SAP Basis enables us to offer holistic solutions that meet the complex requirements of the modern business world.
          </p>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white rounded-lg shadow px-6 py-8 text-center">
            <div className="text-3xl font-bold text-blue-600">15+</div>
            <div className="mt-2 text-gray-600">Years Experience</div>
          </div>
          <div className="bg-white rounded-lg shadow px-6 py-8 text-center">
            <div className="text-3xl font-bold text-blue-600">24/7</div>
            <div className="mt-2 text-gray-600">Support</div>
          </div>
          <div className="bg-white rounded-lg shadow px-6 py-8 text-center">
            <div className="text-3xl font-bold text-blue-600">99.9%</div>
            <div className="mt-2 text-gray-600">System Uptime</div>
          </div>
          <div className="bg-white rounded-lg shadow px-6 py-8 text-center">
            <div className="text-3xl font-bold text-blue-600">500+</div>
            <div className="mt-2 text-gray-600">Projects Delivered</div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Our SAP Basis Services
        </h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose BINDX for SAP Basis
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="inline-block p-3 bg-blue-600 rounded-full">
                <UserGroupIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">Expert Team</h3>
              <p className="mt-2 text-gray-400">Specialized engineers</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-3 bg-blue-600 rounded-full">
                <SignalIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">24/7 Support</h3>
              <p className="mt-2 text-gray-400">Always available</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-3 bg-blue-600 rounded-full">
                <ShieldCheckIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">Proven Track Record</h3>
              <p className="mt-2 text-gray-400">Years of success</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-3 bg-blue-600 rounded-full">
                <ChartBarIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">End-to-End Service</h3>
              <p className="mt-2 text-gray-400">Complete coverage</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Strengthen Your SAP Foundation?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today to discuss how our SAP Basis expertise can support your business.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
} 