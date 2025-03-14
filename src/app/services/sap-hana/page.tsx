import Image from 'next/image';
import Link from 'next/link';
import { 
  ServerIcon,
  ArrowPathIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  CloudArrowUpIcon,
  ArrowsRightLeftIcon,
  CpuChipIcon,
  ArrowUpCircleIcon,
  CloudIcon,
  CircleStackIcon,
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

export default function SapHana() {
  const services = [
    {
      title: "SAP HANA Installation and Configuration",
      description: "We offer end-to-end services for the installation and optimal configuration of the latest SAP HANA versions.",
      icon: ServerIcon,
      bulletPoints: [
        {
          title: "Infrastructure Preparation",
          description: "Preparation and validation of hardware and operating system requirements for SAP HANA."
        },
        {
          title: "Scale-Up and Scale-Out",
          description: "Vertically or horizontally scalable HANA installation according to your business needs."
        },
        {
          title: "Operating System Optimization",
          description: "Optimal OS configuration on SUSE Linux, Red Hat, or IBM AIX for HANA."
        },
        {
          title: "Network Configuration",
          description: "Optimum network configuration for inter-node communication and client access."
        }
      ]
    },
    {
      title: "HANA System Replication",
      description: "We provide HANA replication configuration services for high availability and disaster recovery.",
      icon: ArrowsRightLeftIcon,
      bulletPoints: [
        {
          title: "Replication Strategy",
          description: "HANA system replication strategy suitable for your business requirements."
        },
        {
          title: "Active/Active Setup",
          description: "Active/active read-enabled replication configuration."
        },
        {
          title: "Automatic Failover",
          description: "Automatic transition configuration with tools like Pacemaker."
        },
        {
          title: "Performance Optimization",
          description: "Minimization of replication delays and optimization of network resources."
        }
      ]
    },
    {
      title: "HANA Performance Optimization",
      description: "We provide comprehensive optimization services to help you get maximum performance from your systems.",
      icon: ChartBarIcon,
      bulletPoints: [
        {
          title: "Memory Management",
          description: "Analysis and optimization of HANA memory usage."
        },
        {
          title: "SQL Performance",
          description: "Detection and optimization of slow SQL queries and procedures."
        },
        {
          title: "Workload Analysis",
          description: "Analysis and management of performance impact of different workloads."
        },
        {
          title: "Data Temperature",
          description: "Strategies for hot and cold data management."
        }
      ]
    },
    {
      title: "HANA Backup and Recovery",
      description: "We develop advanced backup solutions and recovery strategies that ensure data integrity.",
      icon: ArrowPathIcon,
      bulletPoints: [
        {
          title: "Backup Strategy",
          description: "Comprehensive backup strategy according to your RPO and RTO targets."
        },
        {
          title: "Automated Solutions",
          description: "Automation for regular full and incremental backups."
        },
        {
          title: "Storage Integration",
          description: "Storage snapshot integration for fast backup and recovery."
        },
        {
          title: "Recovery Testing",
          description: "Periodic testing of disaster recovery scenarios."
        }
      ]
    },
    {
      title: "HANA Security Management",
      description: "We elevate the security of your HANA systems to the highest level with database encryption, authorization, and security auditing.",
      icon: ShieldCheckIcon,
      bulletPoints: [
        {
          title: "Security Assessment",
          description: "Comprehensive assessment of HANA security configuration."
        },
        {
          title: "Data Encryption",
          description: "Data encryption solutions at rest and in motion."
        },
        {
          title: "Authentication",
          description: "Implementation of 2FA and integration with central identity management."
        },
        {
          title: "Security Policies",
          description: "Documentation and standardization of HANA security policies."
        }
      ]
    },
    {
      title: "SAP S/4HANA Migration",
      description: "We offer end-to-end migration services for successful transition from existing SAP ECC systems to S/4HANA.",
      icon: ArrowUpCircleIcon,
      bulletPoints: [
        {
          title: "Migration Assessment",
          description: "Assessment of existing system's readiness for S/4HANA."
        },
        {
          title: "Migration Strategy",
          description: "Evaluation of options such as DMO, SUM, classic migration."
        },
        {
          title: "Downtime Optimization",
          description: "Strategies to minimize business disruption during migration."
        },
        {
          title: "Post-Migration Support",
          description: "Post go-live stabilization and optimization support."
        }
      ]
    },
    {
      title: "SAP BW/4HANA Transformation",
      description: "We offer comprehensive technical services for the transformation of traditional SAP BW systems to BW/4HANA.",
      icon: CpuChipIcon,
      bulletPoints: [
        {
          title: "Readiness Assessment",
          description: "BW/4HANA compatibility analysis of existing BW system."
        },
        {
          title: "Object Transformation",
          description: "Strategy for converting traditional BW objects to BW/4HANA objects."
        },
        {
          title: "Data Integration",
          description: "Integration of modern real-time data loading technologies."
        },
        {
          title: "Data Optimization",
          description: "Data layering with HANA Native Storage Extensions and Dynamic Tiering."
        }
      ]
    },
    {
      title: "SAP HANA Version Upgrade",
      description: "We provide expert support for safe and seamless upgrading of your SAP HANA database and application versions.",
      icon: CircleStackIcon,
      bulletPoints: [
        {
          title: "Upgrade Assessment",
          description: "Analysis of differences and impacts between current and target versions."
        },
        {
          title: "Minimal Downtime",
          description: "Upgrade approaches minimizing downtime."
        },
        {
          title: "Validation Process",
          description: "Validation of upgrade success with comprehensive checks."
        },
        {
          title: "Version Optimization",
          description: "Maximizing benefit from features offered by the new version after upgrade."
        }
      ]
    },
    {
      title: "SAP HANA Cloud Services",
      description: "We offer installation, management, and optimization services for SAP HANA Cloud platform.",
      icon: CloudIcon,
      bulletPoints: [
        {
          title: "Cloud Strategy",
          description: "Assessment of readiness and determination of suitable cloud model."
        },
        {
          title: "Cloud Migration",
          description: "Data migration strategy from on-premise systems to HANA Cloud."
        },
        {
          title: "Security & Integration",
          description: "Security configuration and integration with other systems."
        },
        {
          title: "Cost Optimization",
          description: "Efficient resource usage and cost management in cloud environment."
        }
      ]
    },
    {
      title: "SAP Data Intelligence Integration",
      description: "We offer expertise for integration of SAP's artificial intelligence and machine learning platform, Data Intelligence, with HANA.",
      icon: CloudArrowUpIcon,
      bulletPoints: [
        {
          title: "Platform Integration",
          description: "Setup of data flow between HANA and Data Intelligence."
        },
        {
          title: "ML Pipeline Design",
          description: "Design of machine learning pipelines using HANA data."
        },
        {
          title: "Real-Time Analytics",
          description: "Configuration for real-time analytics on HANA."
        },
        {
          title: "ML Ops Strategy",
          description: "Strategy and tool implementation for Machine Learning operations."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              SAP HANA Services
            </h1>
            <p className="mt-3 max-w-3xl mx-auto text-xl text-blue-100">
              New Generation Database Technology Expertise
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 leading-relaxed">
            At BINDX, we offer deep expertise in SAP's revolutionary in-memory database platform, HANA. Our certified HANA specialists ensure your business derives maximum value from this high-performance database platform. We provide comprehensive services across all technical aspects of SAP HANA, from infrastructure design to performance optimization, from migration projects to high availability solutions.
          </p>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white rounded-lg shadow px-6 py-8 text-center">
            <div className="text-3xl font-bold text-blue-600">100x</div>
            <div className="mt-2 text-gray-600">Faster Performance</div>
          </div>
          <div className="bg-white rounded-lg shadow px-6 py-8 text-center">
            <div className="text-3xl font-bold text-blue-600">99.9%</div>
            <div className="mt-2 text-gray-600">Availability</div>
          </div>
          <div className="bg-white rounded-lg shadow px-6 py-8 text-center">
            <div className="text-3xl font-bold text-blue-600">50+</div>
            <div className="mt-2 text-gray-600">Migrations</div>
          </div>
          <div className="bg-white rounded-lg shadow px-6 py-8 text-center">
            <div className="text-3xl font-bold text-blue-600">15+</div>
            <div className="mt-2 text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Our SAP HANA Services
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
            Why Choose BINDX for SAP HANA
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="inline-block p-3 bg-blue-600 rounded-full">
                <ServerIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">Certified Experts</h3>
              <p className="mt-2 text-gray-400">HANA certified specialists</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-3 bg-blue-600 rounded-full">
                <ChartBarIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">Performance Focus</h3>
              <p className="mt-2 text-gray-400">Optimized for speed</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-3 bg-blue-600 rounded-full">
                <ShieldCheckIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">Enterprise Security</h3>
              <p className="mt-2 text-gray-400">Maximum data protection</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-3 bg-blue-600 rounded-full">
                <CloudArrowUpIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">Cloud Ready</h3>
              <p className="mt-2 text-gray-400">Hybrid and cloud solutions</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your SAP HANA Environment?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today to discuss how we can optimize your SAP HANA infrastructure.
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