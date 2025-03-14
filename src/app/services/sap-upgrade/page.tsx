import Image from 'next/image';
import Link from 'next/link';
import { 
  RocketLaunchIcon,
  PuzzlePieceIcon,
  ArrowPathIcon,
  CommandLineIcon,
  CircleStackIcon,
  WrenchScrewdriverIcon,
  WindowIcon,
  ChartBarIcon,
  UserGroupIcon,
  ArrowTrendingUpIcon,
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

export default function SapUpgrade() {
  const services = [
    {
      title: "Version Upgrade Strategy and Planning",
      description: "We create a custom version upgrade strategy and detailed roadmap for your business.",
      icon: RocketLaunchIcon,
      bulletPoints: [
        {
          title: "Roadmap Analysis",
          description: "Analysis of SAP's product and technology roadmap for your business."
        },
        {
          title: "Impact Assessment",
          description: "Assessment of the impact on business processes and technical infrastructure."
        },
        {
          title: "Risk Management",
          description: "Identification and management of potential risks in the upgrade process."
        },
        {
          title: "Downtime Strategy",
          description: "Determination of strategies to minimize business interruption."
        }
      ]
    },
    {
      title: "SAP EhP (Enhancement Package) Upgrades",
      description: "We provide services to integrate functional enhancements into your systems with minimal risk.",
      icon: PuzzlePieceIcon,
      bulletPoints: [
        {
          title: "Enhancement Analysis",
          description: "Analysis of functional enhancements needed by your business."
        },
        {
          title: "Function Activation",
          description: "Phased activation strategy for business functions."
        },
        {
          title: "Code Impact",
          description: "Assessment of the impact of EhP on custom developments."
        },
        {
          title: "Post-EhP Testing",
          description: "Regression tests and optimization after EhP implementation."
        }
      ]
    },
    {
      title: "ECC to S/4HANA Version Upgrade",
      description: "We manage comprehensive upgrade projects including migration from SAP ECC to S/4HANA.",
      icon: ArrowPathIcon,
      bulletPoints: [
        {
          title: "Readiness Assessment",
          description: "Assessment of the ECC system's readiness for S/4HANA."
        },
        {
          title: "Code Adaptation",
          description: "Correction of custom ABAP codes for S/4HANA compatibility."
        },
        {
          title: "Data Transformation",
          description: "Transformation of data models to S/4HANA standards."
        },
        {
          title: "UX Implementation",
          description: "Fiori UX implementation and configuration for S/4HANA."
        }
      ]
    },
    {
      title: "NetWeaver Version Upgrade",
      description: "We manage SAP NetWeaver Application Server and Java Stack upgrade projects.",
      icon: CommandLineIcon,
      bulletPoints: [
        {
          title: "Stack Analysis",
          description: "Analysis of ABAP and Java stack compatibility."
        },
        {
          title: "Kernel Upgrade",
          description: "SAP kernel upgrade strategy and implementation."
        },
        {
          title: "Security Enhancement",
          description: "Security improvements in the new NetWeaver version."
        },
        {
          title: "Performance Tuning",
          description: "NetWeaver performance optimization after upgrade."
        }
      ]
    },
    {
      title: "SAP BW Version Upgrades",
      description: "We offer specialized version upgrade services for your SAP BusinessWarehouse systems.",
      icon: CircleStackIcon,
      bulletPoints: [
        {
          title: "Object Compatibility",
          description: "Compatibility analysis of InfoObjects and DataStore Objects."
        },
        {
          title: "HANA Optimization",
          description: "Transformation of objects to HANA optimized versions."
        },
        {
          title: "Query Optimization",
          description: "Performance optimization of queries in the new version."
        },
        {
          title: "Process Migration",
          description: "Migration of Process Chains to the new version."
        }
      ]
    },
    {
      title: "SAP SolMan (Solution Manager) Upgrades",
      description: "We offer comprehensive upgrade services for your SAP Solution Manager systems.",
      icon: WrenchScrewdriverIcon,
      bulletPoints: [
        {
          title: "Stack Upgrades",
          description: "SolMan ABAP and Java stack upgrades."
        },
        {
          title: "System Configuration",
          description: "Connection updates for managed systems."
        },
        {
          title: "Process Management",
          description: "Migration of change and quality management processes."
        },
        {
          title: "Monitoring Setup",
          description: "Configuration of technical and business process monitoring."
        }
      ]
    },
    {
      title: "Fiori / UI Technology Upgrades",
      description: "We provide SAP Fiori and UI technology upgrade services for modern user experience.",
      icon: WindowIcon,
      bulletPoints: [
        {
          title: "Frontend Upgrade",
          description: "Upgrading Fiori frontend server and SAPUI5 components."
        },
        {
          title: "Service Compatibility",
          description: "Making backend OData services compatible with new versions."
        },
        {
          title: "Design Updates",
          description: "Application of latest Fiori design system updates."
        },
        {
          title: "Performance Optimization",
          description: "Fiori performance optimization after upgrade."
        }
      ]
    },
    {
      title: "SAP BI/BO/BPC Upgrades",
      description: "We provide version upgrade services for SAP Business Intelligence solutions.",
      icon: ChartBarIcon,
      bulletPoints: [
        {
          title: "Platform Upgrade",
          description: "BusinessObjects platform upgrade and planning."
        },
        {
          title: "Data Migration",
          description: "Migration of universes and data models to new versions."
        },
        {
          title: "Report Conversion",
          description: "Conversion and validation of reports to new version."
        },
        {
          title: "Cloud Integration",
          description: "Integration setup for hybrid scenarios with SAP Analytics Cloud."
        }
      ]
    },
    {
      title: "SAP CRM and C/4HANA Upgrades",
      description: "We provide version upgrade services for SAP CRM and C/4HANA product portfolio.",
      icon: UserGroupIcon,
      bulletPoints: [
        {
          title: "Suite Updates",
          description: "Updating Sales/Service/Commerce Cloud components."
        },
        {
          title: "Integration Updates",
          description: "Adaptation of CRM-ERP integrations to new version."
        },
        {
          title: "Experience Upgrade",
          description: "Integrated upgrading of Customer Experience solutions."
        },
        {
          title: "Commerce Upgrade",
          description: "E-Commerce platform and CPQ solution upgrades."
        }
      ]
    },
    {
      title: "Post-Upgrade Optimization",
      description: "We provide system stabilization and performance optimization services after version upgrade.",
      icon: ArrowTrendingUpIcon,
      bulletPoints: [
        {
          title: "Health Check",
          description: "Comprehensive system health check after upgrade."
        },
        {
          title: "Performance Tuning",
          description: "System performance optimization in the new version."
        },
        {
          title: "Integration Verification",
          description: "Verification of external system integrations."
        },
        {
          title: "Continuous Improvement",
          description: "Creation of continuous improvement plan for post-upgrade."
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
              SAP Upgrade Services
            </h1>
            <p className="mt-3 max-w-3xl mx-auto text-xl text-blue-100">
              Keep Your SAP Systems Current and Powerful
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 leading-relaxed">
            At BINDX, we offer end-to-end services for SAP system version upgrade projects. Our experienced expert team ensures your business benefits from the latest SAP features and improvements through upgrade projects aligned with your SAP technology roadmap, implemented with minimal disruption and risk. From upgrades between ECC versions to S/4HANA migrations, from Enhancement Package (EhP) applications to SAP NetWeaver version upgrades, we guarantee that your systems are transferred to current versions smoothly, efficiently, and with minimal interruption across all SAP upgrade scenarios by being by your side at every stage of the project.
          </p>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white rounded-lg shadow px-6 py-8 text-center">
            <div className="text-3xl font-bold text-blue-600">500+</div>
            <div className="mt-2 text-gray-600">Successful Upgrades</div>
          </div>
          <div className="bg-white rounded-lg shadow px-6 py-8 text-center">
            <div className="text-3xl font-bold text-blue-600">99.9%</div>
            <div className="mt-2 text-gray-600">Success Rate</div>
          </div>
          <div className="bg-white rounded-lg shadow px-6 py-8 text-center">
            <div className="text-3xl font-bold text-blue-600">15+</div>
            <div className="mt-2 text-gray-600">Years Experience</div>
          </div>
          <div className="bg-white rounded-lg shadow px-6 py-8 text-center">
            <div className="text-3xl font-bold text-blue-600">24/7</div>
            <div className="mt-2 text-gray-600">Support</div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Our SAP Upgrade Services
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
            Why Choose BINDX for SAP Upgrades
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="inline-block p-3 bg-blue-600 rounded-full">
                <RocketLaunchIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">Proven Methodology</h3>
              <p className="mt-2 text-gray-400">Risk-minimizing approach</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-3 bg-blue-600 rounded-full">
                <ArrowPathIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">Minimal Disruption</h3>
              <p className="mt-2 text-gray-400">Business continuity focus</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-3 bg-blue-600 rounded-full">
                <WrenchScrewdriverIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">Expert Team</h3>
              <p className="mt-2 text-gray-400">Deep technical knowledge</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-3 bg-blue-600 rounded-full">
                <ArrowTrendingUpIcon className="h-8 w-8 text-white" />
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
            Ready to Upgrade Your SAP Systems?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today to create your business-specific upgrade strategy.
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