import Image from 'next/image';
import Link from 'next/link';
import { 
  DocumentChartBarIcon,
  ArrowPathIcon,
  ServerIcon,
  ArrowUpCircleIcon,
  CloudArrowUpIcon,
  CodeBracketIcon,
  ArrowsRightLeftIcon,
  ChartBarIcon,
  CircleStackIcon,
  WrenchScrewdriverIcon,
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

export default function SapMigration() {
  const services = [
    {
      title: "System Migration Strategy and Planning",
      description: "We create comprehensive strategy and roadmap for your migration projects.",
      icon: DocumentChartBarIcon,
      bulletPoints: [
        {
          title: "Current State Analysis",
          description: "Detailed analysis of existing SAP system landscape and dependencies."
        },
        {
          title: "Target Architecture Design",
          description: "Target architecture design aligned with your business needs and technological goals."
        },
        {
          title: "Risk Assessment",
          description: "Identification of potential risks and mitigation strategies."
        },
        {
          title: "Downtime Strategy",
          description: "Detailed planning to minimize business disruption during migration."
        }
      ]
    },
    {
      title: "Database Migration to SAP HANA",
      description: "We offer specialized services for migrating from your existing database platform to SAP HANA.",
      icon: CircleStackIcon,
      bulletPoints: [
        {
          title: "Source Analysis",
          description: "Analysis of existing database size, usage, and performance."
        },
        {
          title: "Compatibility Check",
          description: "Compatibility check of custom code and applications with HANA."
        },
        {
          title: "Migration Tools",
          description: "Selection and configuration of tools such as DMO, SUM, R3load."
        },
        {
          title: "Zero Downtime",
          description: "Near-Zero Downtime Migration (NZDM) options implementation."
        }
      ]
    },
    {
      title: "OS Migration to Linux",
      description: "We provide expertise and methodology for your operating system migrations.",
      icon: ServerIcon,
      bulletPoints: [
        {
          title: "OS Assessment",
          description: "Comparative analysis of existing and target operating systems."
        },
        {
          title: "Linux Selection",
          description: "Evaluation of options such as SUSE Linux Enterprise Server for SAP, Red Hat Enterprise Linux."
        },
        {
          title: "Migration Strategy",
          description: "OS migration using homogeneous or heterogeneous system copy."
        },
        {
          title: "Post-Migration",
          description: "Performance and security optimization at operating system level."
        }
      ]
    },
    {
      title: "SAP ECC to S/4HANA Migration",
      description: "We offer end-to-end services for transitioning to SAP's next-generation ERP solution.",
      icon: ArrowUpCircleIcon,
      bulletPoints: [
        {
          title: "Readiness Assessment",
          description: "Assessment of system readiness for S/4HANA transition."
        },
        {
          title: "Impact Analysis",
          description: "Analysis of impact on business processes and custom code."
        },
        {
          title: "Conversion Strategy",
          description: "Evaluation of greenfield, brownfield, or selective data transition approaches."
        },
        {
          title: "Post-Migration",
          description: "System stabilization and fine-tuning after transition."
        }
      ]
    },
    {
      title: "Cloud Migration",
      description: "We offer expertise for secure and efficient migration of your SAP systems to cloud platforms.",
      icon: CloudArrowUpIcon,
      bulletPoints: [
        {
          title: "Cloud Strategy",
          description: "Consultancy for selection of cloud provider suitable for your organization."
        },
        {
          title: "Architecture Design",
          description: "Network and security architecture for secure SAP operations in cloud."
        },
        {
          title: "Data Transfer",
          description: "Data transfer strategy suitable for data volume and bandwidth."
        },
        {
          title: "Cloud Operations",
          description: "New operation model design for SAP operation in cloud."
        }
      ]
    },
    {
      title: "Unicode Conversion",
      description: "We offer expertise in converting legacy systems to modern Unicode standards.",
      icon: CodeBracketIcon,
      bulletPoints: [
        {
          title: "Compatibility Analysis",
          description: "Detailed analysis of compatibility of existing system with Unicode."
        },
        {
          title: "Code Adaptation",
          description: "Check and adaptation of Unicode compatibility of custom codes."
        },
        {
          title: "Data Conversion",
          description: "Data simulation and validation tests before conversion."
        },
        {
          title: "Post-Conversion",
          description: "Comprehensive tests to validate success of Unicode conversion."
        }
      ]
    },
    {
      title: "System Copying and Repositioning",
      description: "We offer expert services for copying, moving, and repositioning SAP systems.",
      icon: ArrowsRightLeftIcon,
      bulletPoints: [
        {
          title: "Copy Strategy",
          description: "Determination of homogeneous or heterogeneous system copying strategy."
        },
        {
          title: "Automation",
          description: "Preparation of scripts that make necessary adjustments after system copying."
        },
        {
          title: "Configuration",
          description: "Transport domain and RFC connections reconfiguration."
        },
        {
          title: "Validation",
          description: "Test processes to validate success after system copying."
        }
      ]
    },
    {
      title: "SAP BusinessObjects Migration",
      description: "We offer special solutions for version upgrade and platform change of your SAP BusinessObjects systems.",
      icon: ChartBarIcon,
      bulletPoints: [
        {
          title: "Repository Analysis",
          description: "Analysis and evaluation of BO repository content."
        },
        {
          title: "Object Adaptation",
          description: "Adaptation of legacy BO objects to new version."
        },
        {
          title: "Integration",
          description: "Integration with BW, HANA systems and Fiori Launchpad."
        },
        {
          title: "Performance",
          description: "BusinessObjects performance optimization after migration."
        }
      ]
    },
    {
      title: "Database Platform Change",
      description: "We offer specialized services for migrating SAP databases from one platform to another.",
      icon: ArrowPathIcon,
      bulletPoints: [
        {
          title: "Platform Analysis",
          description: "Comparative analysis of existing and target database platforms."
        },
        {
          title: "Data Migration",
          description: "Configuration of tools and special transfer strategies for large tables."
        },
        {
          title: "Code Migration",
          description: "Migration of stored procedures and database-level code."
        },
        {
          title: "Optimization",
          description: "Performance benchmark and optimization after migration."
        }
      ]
    },
    {
      title: "Post-Migration Support",
      description: "We offer comprehensive go-live and post-support services to ensure the success of your migration projects.",
      icon: WrenchScrewdriverIcon,
      bulletPoints: [
        {
          title: "Go-Live Support",
          description: "24/7 expert support plan for production environment transition."
        },
        {
          title: "Performance Monitoring",
          description: "Post-migration performance monitoring and fine-tuning."
        },
        {
          title: "Knowledge Transfer",
          description: "Knowledge transfer and training to business and support teams."
        },
        {
          title: "Health Checks",
          description: "Periodic system health checks after migration."
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
              SAP Migration Services
            </h1>
            <p className="mt-3 max-w-3xl mx-auto text-xl text-blue-100">
              Manage Your SAP Transformation and Migration Projects with Minimum Risk
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 leading-relaxed">
            At BINDX, our deep expertise in SAP system and database migrations enables your organization to transfer critical SAP systems to new platforms safely, efficiently, and with minimal disruption. From OS/DB migration to S/4HANA transformation, from Unicode migration to cloud transition, we offer end-to-end planning, preparation, implementation, and post-optimization services for all SAP migration scenarios. In each migration project, we protect your business continuity and data integrity with our methodology that minimizes risks at every stage of the process.
          </p>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white rounded-lg shadow px-6 py-8 text-center">
            <div className="text-3xl font-bold text-blue-600">100+</div>
            <div className="mt-2 text-gray-600">Successful Migrations</div>
          </div>
          <div className="bg-white rounded-lg shadow px-6 py-8 text-center">
            <div className="text-3xl font-bold text-blue-600">99.9%</div>
            <div className="mt-2 text-gray-600">Data Integrity</div>
          </div>
          <div className="bg-white rounded-lg shadow px-6 py-8 text-center">
            <div className="text-3xl font-bold text-blue-600">15+</div>
            <div className="mt-2 text-gray-600">Years Experience</div>
          </div>
          <div className="bg-white rounded-lg shadow px-6 py-8 text-center">
            <div className="text-3xl font-bold text-blue-600">24/7</div>
            <div className="mt-2 text-gray-600">Expert Support</div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Our SAP Migration Services
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
            Why Choose BINDX for SAP Migration
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="inline-block p-3 bg-blue-600 rounded-full">
                <DocumentChartBarIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">Proven Methodology</h3>
              <p className="mt-2 text-gray-400">Risk-minimizing approach</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-3 bg-blue-600 rounded-full">
                <ServerIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">Technical Expertise</h3>
              <p className="mt-2 text-gray-400">Certified specialists</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-3 bg-blue-600 rounded-full">
                <ChartBarIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">Minimal Disruption</h3>
              <p className="mt-2 text-gray-400">Business continuity focus</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-3 bg-blue-600 rounded-full">
                <WrenchScrewdriverIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">End-to-End Support</h3>
              <p className="mt-2 text-gray-400">Complete project coverage</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your SAP Migration Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today to create your organization's SAP technology roadmap.
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