import Image from 'next/image';
import Link from 'next/link';
import { 
  CloudArrowUpIcon,
  ArrowPathIcon,
  ChartBarIcon,
  ClockIcon,
  CpuChipIcon,
  DocumentCheckIcon,
  UserGroupIcon,
  ClipboardDocumentCheckIcon,
  ArrowsPointingOutIcon,
  CheckCircleIcon,
  CommandLineIcon
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

export default function SapCloudAlm() {
  const services = [
    {
      title: "SAP Cloud ALM Implementation",
      description: "We offer end-to-end services for the installation, configuration, and adaptation of SAP Cloud ALM to your organization.",
      icon: CloudArrowUpIcon,
      bulletPoints: [
        {
          title: "Cloud ALM Readiness Assessment",
          description: "Assessment of your organization's readiness for transition to Cloud ALM."
        },
        {
          title: "Tenant Setup and Activation",
          description: "Setup and activation of SAP Cloud ALM tenant."
        },
        {
          title: "Migration Strategy",
          description: "Transition strategy for organizations using Solution Manager."
        },
        {
          title: "Architecture Design",
          description: "Cloud ALM architecture design tailored to your organization's needs."
        }
      ]
    },
    {
      title: "Cloud ALM Process Management",
      description: "We help you get maximum benefit from Cloud ALM capabilities for the design, modeling, and documentation of your business processes.",
      icon: ArrowPathIcon,
      bulletPoints: [
        {
          title: "Process Management Strategy",
          description: "Strategic approach and roadmap for Cloud ALM process management."
        },
        {
          title: "Process Templates",
          description: "Design and configuration of process templates specific to your organization."
        },
        {
          title: "Best Practice Adaptation",
          description: "Adaptation of best practice content provided by SAP to your organization."
        },
        {
          title: "Process Documentation",
          description: "Documentation of processes and configuration of approval workflows."
        }
      ]
    },
    {
      title: "Cloud ALM Monitoring and Alert System",
      description: "We provide comprehensive monitoring configuration for proactive system monitoring, KPI tracking, and anomaly detection.",
      icon: ChartBarIcon,
      bulletPoints: [
        {
          title: "Health Monitoring",
          description: "Health monitoring configuration for SAP Cloud solutions."
        },
        {
          title: "Integration Monitoring",
          description: "Monitoring of status and performance of system integrations."
        },
        {
          title: "Custom Alerts",
          description: "Configuration of alert thresholds and criteria specific to your organization."
        },
        {
          title: "Anomaly Detection",
          description: "Machine Learning based anomaly detection configuration."
        }
      ]
    },
    {
      title: "Automated Test Management",
      description: "We provide services for creating test scenarios, configuring automated tests, and analyzing test results.",
      icon: CommandLineIcon,
      bulletPoints: [
        {
          title: "Test Strategy",
          description: "Design of Cloud ALM test strategy specific to your organization."
        },
        {
          title: "Test Automation",
          description: "Installation and configuration of automatic test tools."
        },
        {
          title: "Test Case Management",
          description: "Creation of test case library according to business processes."
        },
        {
          title: "Results Analysis",
          description: "Evaluation and reporting of test results."
        }
      ]
    },
    {
      title: "Project and Portfolio Management",
      description: "We offer comprehensive solutions for managing your SAP implementation and transformation projects through Cloud ALM.",
      icon: DocumentCheckIcon,
      bulletPoints: [
        {
          title: "Project Methodology",
          description: "Configuration of SAP Activate or your custom methodology in Cloud ALM."
        },
        {
          title: "Portfolio View",
          description: "Portfolio view for holistic management of all SAP projects."
        },
        {
          title: "Resource Management",
          description: "Configuration for planning and management of project resources."
        },
        {
          title: "Status Reporting",
          description: "Automation of project status reports."
        }
      ]
    },
    {
      title: "Change and Release Management",
      description: "We optimize Cloud ALM capabilities for controlled change management, version planning, and deployment processes.",
      icon: ArrowsPointingOutIcon,
      bulletPoints: [
        {
          title: "Change Process Design",
          description: "Design of change management process specific to your organization."
        },
        {
          title: "Release Management",
          description: "Planning and management of release calendar."
        },
        {
          title: "Impact Analysis",
          description: "Configuration for analysis of potential impacts of changes."
        },
        {
          title: "Emergency Changes",
          description: "Special process design for emergency changes management."
        }
      ]
    },
    {
      title: "End-to-End Change Tracking",
      description: "We establish an integrated monitoring system for tracking all changes from source code to production environment.",
      icon: ClipboardDocumentCheckIcon,
      bulletPoints: [
        {
          title: "Code Change Tracking",
          description: "Configuration for tracking code changes."
        },
        {
          title: "Transport Tracking",
          description: "Status and content tracking of transport packages."
        },
        {
          title: "Change Audit Trail",
          description: "Configuration for complete audit trail of changes."
        },
        {
          title: "Compliance Reporting",
          description: "Change management compliance reporting."
        }
      ]
    },
    {
      title: "Integration Management",
      description: "We configure Cloud ALM capabilities for integration management with API Hub and SAP Integration Suite.",
      icon: CpuChipIcon,
      bulletPoints: [
        {
          title: "Integration Architecture",
          description: "Documentation of integration architecture."
        },
        {
          title: "API Management",
          description: "Management of APIs through Cloud ALM."
        },
        {
          title: "Integration Testing",
          description: "Automation of integration tests."
        },
        {
          title: "Error Handling",
          description: "Workflow design for managing integration errors."
        }
      ]
    },
    {
      title: "Continuous Monitoring and Optimization",
      description: "We provide services for continuous monitoring and improvement of system performance, user experience, and business processes.",
      icon: ClockIcon,
      bulletPoints: [
        {
          title: "Continuous Improvement",
          description: "Design of Cloud ALM based continuous improvement strategy."
        },
        {
          title: "Health Checks",
          description: "Configuration of automated periodic health checks."
        },
        {
          title: "Performance Analysis",
          description: "Configuration for analysis of long-term performance trends."
        },
        {
          title: "Service Level Reporting",
          description: "Tracking and reporting of service level agreements (SLA)."
        }
      ]
    },
    {
      title: "User Experience Management",
      description: "We continuously improve user experience with end-user experience monitoring and analytics.",
      icon: UserGroupIcon,
      bulletPoints: [
        {
          title: "Experience Monitoring",
          description: "Real-time monitoring of end-user experience."
        },
        {
          title: "Satisfaction Measurement",
          description: "Measurement and analysis of user satisfaction."
        },
        {
          title: "Journey Analytics",
          description: "Analysis and optimization of user journeys."
        },
        {
          title: "UX Improvement",
          description: "Creation of user experience improvement roadmap."
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
              SAP Cloud ALM Services
            </h1>
            <p className="mt-3 max-w-3xl mx-auto text-xl text-blue-100">
              Cloud-Based Application Lifecycle Management
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 leading-relaxed">
            At BINDX, we offer comprehensive services for SAP's new generation cloud-based Application Lifecycle Management (ALM) solution, SAP Cloud ALM. Our expert team provides customized solutions and consulting at all stages, from the installation of SAP Cloud ALM to its configuration, from integration to optimization, enabling your business to bring the lifecycle management of your SAP systems to the cloud era.
          </p>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white rounded-lg shadow px-6 py-8 text-center">
            <div className="text-3xl font-bold text-blue-600">100%</div>
            <div className="mt-2 text-gray-600">Cloud Native</div>
          </div>
          <div className="bg-white rounded-lg shadow px-6 py-8 text-center">
            <div className="text-3xl font-bold text-blue-600">24/7</div>
            <div className="mt-2 text-gray-600">Monitoring</div>
          </div>
          <div className="bg-white rounded-lg shadow px-6 py-8 text-center">
            <div className="text-3xl font-bold text-blue-600">50+</div>
            <div className="mt-2 text-gray-600">Integrations</div>
          </div>
          <div className="bg-white rounded-lg shadow px-6 py-8 text-center">
            <div className="text-3xl font-bold text-blue-600">99.9%</div>
            <div className="mt-2 text-gray-600">Availability</div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Our SAP Cloud ALM Services
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
            Why Choose BINDX for SAP Cloud ALM
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="inline-block p-3 bg-blue-600 rounded-full">
                <CloudArrowUpIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">Cloud Expertise</h3>
              <p className="mt-2 text-gray-400">Deep expertise in cloud solutions</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-3 bg-blue-600 rounded-full">
                <ChartBarIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">End-to-End ALM</h3>
              <p className="mt-2 text-gray-400">Complete lifecycle management</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-3 bg-blue-600 rounded-full">
                <ArrowPathIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">Continuous Innovation</h3>
              <p className="mt-2 text-gray-400">Always up-to-date with latest features</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-3 bg-blue-600 rounded-full">
                <UserGroupIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">Expert Support</h3>
              <p className="mt-2 text-gray-400">Dedicated team of Cloud ALM experts</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your SAP Lifecycle Management?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today to discuss how SAP Cloud ALM can revolutionize your SAP operations.
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