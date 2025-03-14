import Image from 'next/image';
import Link from 'next/link';
import { 
  ClipboardDocumentCheckIcon,
  ShieldCheckIcon,
  ServerIcon,
  CpuChipIcon,
  MagnifyingGlassIcon,
  BeakerIcon,
  ArrowUturnLeftIcon,
  ClockIcon,
  DocumentTextIcon,
  CommandLineIcon,
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

export default function SapPatching() {
  const services = [
    {
      title: "SAP Patch Strategy Development",
      description: "We develop a comprehensive and sustainable patch application strategy tailored to your business.",
      icon: ClipboardDocumentCheckIcon,
      bulletPoints: [
        {
          title: "Policy Development",
          description: "Creation of patch application policies and standards specific to your business."
        },
        {
          title: "Cycle Planning",
          description: "Planning and scheduling of regular patch application cycles."
        },
        {
          title: "Risk Assessment",
          description: "Systematic methodology for risk assessment of patch applications."
        },
        {
          title: "Landscape Strategy",
          description: "Integrated patch application strategy for development, test, and production environments."
        }
      ]
    },
    {
      title: "Critical and Security Patch Tracking",
      description: "We provide services for proactive tracking and priority application of important patches released by SAP.",
      icon: ShieldCheckIcon,
      bulletPoints: [
        {
          title: "Security Note Tracking",
          description: "Regular tracking of SAP notes addressing security vulnerabilities."
        },
        {
          title: "Vulnerability Assessment",
          description: "Assessment of your SAP systems against current security vulnerabilities."
        },
        {
          title: "Emergency Procedures",
          description: "Emergency patch application procedures for critical security vulnerabilities."
        },
        {
          title: "Compliance Reporting",
          description: "Reporting on the status of security patch applications."
        }
      ]
    },
    {
      title: "Regular Kernel Updates",
      description: "We offer comprehensive services for planned updates of SAP kernels.",
      icon: ServerIcon,
      bulletPoints: [
        {
          title: "Update Planning",
          description: "Regular and planned updating of SAP kernels."
        },
        {
          title: "Compatibility Check",
          description: "Compatibility check between kernel and other SAP components."
        },
        {
          title: "Rolling Updates",
          description: "Uninterrupted kernel updates in cluster configurations."
        },
        {
          title: "Performance Validation",
          description: "Performance comparison before and after kernel update."
        }
      ]
    },
    {
      title: "Support Package Implementation",
      description: "We provide expert support for the application of Support Package Stacks to test and production environments.",
      icon: CpuChipIcon,
      bulletPoints: [
        {
          title: "Impact Assessment",
          description: "Assessment of the cumulative impact of Support Packages."
        },
        {
          title: "Stack Application",
          description: "Support Package application for ABAP and Java Stacks."
        },
        {
          title: "Conflict Resolution",
          description: "Detection and resolution of code conflicts."
        },
        {
          title: "Transport Management",
          description: "Support Package transport management and documentation."
        }
      ]
    },
    {
      title: "Patch Impact Analysis",
      description: "We provide services for comprehensive assessment of the potential impacts of patches on existing systems.",
      icon: MagnifyingGlassIcon,
      bulletPoints: [
        {
          title: "System Analysis",
          description: "Analysis of customizations and modifications in the system."
        },
        {
          title: "Process Impact",
          description: "Assessment of impact of patches on business processes."
        },
        {
          title: "Integration Check",
          description: "Assessment of impact of patches on system integrations."
        },
        {
          title: "Risk Mitigation",
          description: "Development of strategies to mitigate identified risks."
        }
      ]
    },
    {
      title: "Patch Test Scenarios",
      description: "We develop comprehensive patch test plans and scenarios covering critical business processes.",
      icon: BeakerIcon,
      bulletPoints: [
        {
          title: "Process Testing",
          description: "Testing of critical business processes after patch application."
        },
        {
          title: "Integration Testing",
          description: "Scenarios for testing integration points."
        },
        {
          title: "Automated Testing",
          description: "Automation scripts for repetitive tests."
        },
        {
          title: "Result Reporting",
          description: "Evaluation and reporting of test results."
        }
      ]
    },
    {
      title: "Patch Rollback Strategy",
      description: "We develop detailed strategies and procedures to ensure quick recovery in case of problems.",
      icon: ArrowUturnLeftIcon,
      bulletPoints: [
        {
          title: "Rollback Planning",
          description: "Detailed rollback plan for each patch application."
        },
        {
          title: "System Snapshots",
          description: "Taking a snapshot of the system state before patching."
        },
        {
          title: "Emergency Response",
          description: "Formation and training of emergency response team."
        },
        {
          title: "Validation Process",
          description: "Checks to validate the system after rollback."
        }
      ]
    },
    {
      title: "Minimal Downtime Patch Application",
      description: "We offer patch application methodologies that ensure business continuity and minimize downtime.",
      icon: ClockIcon,
      bulletPoints: [
        {
          title: "Downtime Strategy",
          description: "Strategies to minimize patch application downtime."
        },
        {
          title: "Parallel Processing",
          description: "Shortening patch application time with parallel processing."
        },
        {
          title: "Shadow Systems",
          description: "Seamless transition with shadow system approach."
        },
        {
          title: "Resource Optimization",
          description: "Optimization of hardware and software resources for the patch process."
        }
      ]
    },
    {
      title: "Patch Documentation",
      description: "We develop standards and processes for detailed documentation of all applied updates.",
      icon: DocumentTextIcon,
      bulletPoints: [
        {
          title: "Documentation Standards",
          description: "Creation of standard documentation templates."
        },
        {
          title: "Change Tracking",
          description: "Keeping detailed logs of all changes made."
        },
        {
          title: "Result Recording",
          description: "Detailed reporting of test results and approvals."
        },
        {
          title: "Knowledge Management",
          description: "Integration of documentation with corporate knowledge base."
        }
      ]
    },
    {
      title: "SAP Note Implementation",
      description: "We offer a systematic approach for applying critical SAP notes to systems.",
      icon: CommandLineIcon,
      bulletPoints: [
        {
          title: "Note Prioritization",
          description: "Filtering and prioritization of SAP notes according to their suitability."
        },
        {
          title: "Implementation Strategy",
          description: "Decision making between manual application or application with SNOTE tool."
        },
        {
          title: "Dependency Analysis",
          description: "Analysis of prerequisite notes and dependent notes."
        },
        {
          title: "Verification Process",
          description: "Verification that the SAP note has been successfully applied."
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
              SAP Patch Management Services
            </h1>
            <p className="mt-3 max-w-3xl mx-auto text-xl text-blue-100">
              Keep Your Systems Updated, Secure, and Stable
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 leading-relaxed">
            At BINDX, we ensure your SAP systems remain current, secure, and stable through systematic and proactive patch management. We provide end-to-end services for the professional and controlled application of security fixes, bug fixes, and performance improvements regularly released by SAP to your business's SAP systems. Our expert team ensures that patch applications are carried out with minimal interruption to your business processes, guaranteeing that your SAP systems are always in the most up-to-date and secure state.
          </p>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white rounded-lg shadow px-6 py-8 text-center">
            <div className="text-3xl font-bold text-blue-600">100%</div>
            <div className="mt-2 text-gray-600">Success Rate</div>
          </div>
          <div className="bg-white rounded-lg shadow px-6 py-8 text-center">
            <div className="text-3xl font-bold text-blue-600">24/7</div>
            <div className="mt-2 text-gray-600">Support</div>
          </div>
          <div className="bg-white rounded-lg shadow px-6 py-8 text-center">
            <div className="text-3xl font-bold text-blue-600">99.9%</div>
            <div className="mt-2 text-gray-600">System Stability</div>
          </div>
          <div className="bg-white rounded-lg shadow px-6 py-8 text-center">
            <div className="text-3xl font-bold text-blue-600">0</div>
            <div className="mt-2 text-gray-600">Security Breaches</div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Our SAP Patch Management Services
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
            Why Choose BINDX for SAP Patch Management
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="inline-block p-3 bg-blue-600 rounded-full">
                <ShieldCheckIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">Proactive Security</h3>
              <p className="mt-2 text-gray-400">Always ahead of threats</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-3 bg-blue-600 rounded-full">
                <ClockIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">Minimal Downtime</h3>
              <p className="mt-2 text-gray-400">Business continuity focus</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-3 bg-blue-600 rounded-full">
                <ServerIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">System Stability</h3>
              <p className="mt-2 text-gray-400">Reliable performance</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-3 bg-blue-600 rounded-full">
                <DocumentTextIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">Full Documentation</h3>
              <p className="mt-2 text-gray-400">Complete transparency</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Secure Your SAP Systems?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today to create and implement a professional patch management strategy.
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