import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheckIcon, 
  UserGroupIcon, 
  DocumentCheckIcon,
  ClockIcon,
  ChartBarIcon,
  DocumentDuplicateIcon,
  UserCircleIcon,
  ClipboardDocumentCheckIcon,
  LockClosedIcon,
  ArrowPathIcon,
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

export default function SapAuthorization() {
  const services = [
    {
      title: "SAP Role Design and Development",
      description: "We create a scalable and manageable role architecture tailored to your business processes.",
      icon: UserGroupIcon,
      bulletPoints: [
        {
          title: "Needs Analysis",
          description: "Identifying real authorization needs through detailed discussions with business units."
        },
        {
          title: "Role Hierarchy Design",
          description: "Creating a manageable role hierarchy suitable for your organizational structure."
        },
        {
          title: "Least Privilege Principle",
          description: "Giving users only the minimum authorizations they need to do their jobs."
        },
        {
          title: "Function-Based Roles",
          description: "Designing clear roles organized according to specific business functions."
        }
      ]
    },
    {
      title: "SoD (Segregation of Duties) Analysis",
      description: "We provide comprehensive analyses that detect and resolve duty segregation conflicts.",
      icon: DocumentCheckIcon,
      bulletPoints: [
        {
          title: "SoD Matrix Creation",
          description: "Design of a matrix containing duty segregation rules specific to your business."
        },
        {
          title: "Risk Identification",
          description: "Identification of potential risks and classification according to their importance."
        },
        {
          title: "Conflict Analysis",
          description: "Analysis of existing roles and user authorizations in terms of SoD conflicts."
        },
        {
          title: "Solution Roadmap",
          description: "Roadmap containing actions to resolve detected conflicts."
        }
      ]
    },
    {
      title: "Critical Authorization Audit",
      description: "We provide advanced authorization controls and audit mechanisms for sensitive transactions.",
      icon: ShieldCheckIcon,
      bulletPoints: [
        {
          title: "Critical Transaction Control",
          description: "Detection of sensitive transactions of critical importance to your business."
        },
        {
          title: "Profile Management",
          description: "Detection and limitation of profiles containing broad authorization."
        },
        {
          title: "Super User Control",
          description: "Controlled management and monitoring of users with broad authorizations."
        },
        {
          title: "Sensitive Data Protection",
          description: "Access control to sensitive objects such as financial tables, HR data."
        }
      ]
    },
    {
      title: "Emergency Access Management",
      description: "We design fast and controlled authorization elevation processes for crisis situations.",
      icon: ClockIcon,
      bulletPoints: [
        {
          title: "Process Design",
          description: "Structured process for temporary authorization elevation in extraordinary situations."
        },
        {
          title: "Firefighter Configuration",
          description: "Creation and configuration of special accounts for emergency situations."
        },
        {
          title: "Activity Monitoring",
          description: "Detailed logging of all operations performed during emergency access."
        },
        {
          title: "Time Control",
          description: "Temporary authorization elevation mechanisms with automatic expiration."
        }
      ]
    },
    {
      title: "GRC Tools Integration",
      description: "We provide implementation of authorization management tools such as SAP GRC, Soterion, Xiting.",
      icon: ChartBarIcon,
      bulletPoints: [
        {
          title: "Tool Selection",
          description: "Determination of the GRC tool suitable for your business's specific needs."
        },
        {
          title: "Implementation",
          description: "Installation and configuration of enterprise authorization management solutions."
        },
        {
          title: "Customization",
          description: "Adaptation of GRC tools to your business processes."
        },
        {
          title: "Training",
          description: "Training programs for effective use of GRC tools."
        }
      ]
    },
    {
      title: "Authorization Concept Documentation",
      description: "We document your organization's specific authorization strategy and principles in detail.",
      icon: DocumentDuplicateIcon,
      bulletPoints: [
        {
          title: "Strategic Principles",
          description: "Documentation of basic principles for authorization structure."
        },
        {
          title: "Methodology",
          description: "Definition of role design, development, test, and maintenance processes."
        },
        {
          title: "Standards",
          description: "Determination of standards for consistent role naming and management."
        },
        {
          title: "Procedures",
          description: "Documentation of change management and emergency procedures."
        }
      ]
    },
    {
      title: "User Lifecycle Management",
      description: "We ensure integration of recruitment, job change, and departure processes into the SAP authorization system.",
      icon: UserCircleIcon,
      bulletPoints: [
        {
          title: "Process Integration",
          description: "Integration of HR processes with SAP user management."
        },
        {
          title: "Change Management",
          description: "Authorization update process for job changes and departures."
        },
        {
          title: "Self-Service",
          description: "Self-service portals for user authorization requests."
        },
        {
          title: "Activity Monitoring",
          description: "Configuration for monitoring and reporting user activities."
        }
      ]
    },
    {
      title: "Audit and Compliance Reporting",
      description: "We provide compliance reports and audit support for regulations such as SOX, GDPR, KVKK.",
      icon: ClipboardDocumentCheckIcon,
      bulletPoints: [
        {
          title: "Compliance Reports",
          description: "Detailed reports meeting various regulatory requirements."
        },
        {
          title: "Audit Support",
          description: "Preparation and documentation support for audits."
        },
        {
          title: "Risk Assessment",
          description: "Assessment and reporting of authorization-related risks."
        },
        {
          title: "Dashboards",
          description: "Management dashboards visualizing compliance status."
        }
      ]
    },
    {
      title: "SAP Security Optimization",
      description: "We conduct optimization studies that minimize the impact of authorization structure on performance.",
      icon: LockClosedIcon,
      bulletPoints: [
        {
          title: "Performance Optimization",
          description: "Optimization of role sizes and authorization buffers."
        },
        {
          title: "Cleanup",
          description: "Detection and cleaning of unused authorizations."
        },
        {
          title: "Technical Optimization",
          description: "Optimization of technical parameters and table buffering."
        },
        {
          title: "Benchmark Testing",
          description: "Measurement and comparison of authorization performance."
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
              SAP Authorization Management Services
            </h1>
            <p className="mt-3 max-w-3xl mx-auto text-xl text-blue-100">
              Secure, Compliant, and Efficient SAP Authorization Structure
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 leading-relaxed">
            At BINDX, we have a specialized team to design, implement, and manage the authorization structure of your SAP systems. Our deep expertise in SAP authorization enables your business to establish an authorization structure that meets both security needs and supports operational efficiency.
          </p>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white rounded-lg shadow px-6 py-8 text-center">
            <div className="text-3xl font-bold text-blue-600">15+</div>
            <div className="mt-2 text-gray-600">Years of Experience</div>
          </div>
          <div className="bg-white rounded-lg shadow px-6 py-8 text-center">
            <div className="text-3xl font-bold text-blue-600">100+</div>
            <div className="mt-2 text-gray-600">Projects Completed</div>
          </div>
          <div className="bg-white rounded-lg shadow px-6 py-8 text-center">
            <div className="text-3xl font-bold text-blue-600">24/7</div>
            <div className="mt-2 text-gray-600">Support Available</div>
          </div>
          <div className="bg-white rounded-lg shadow px-6 py-8 text-center">
            <div className="text-3xl font-bold text-blue-600">99%</div>
            <div className="mt-2 text-gray-600">Client Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Our SAP Authorization Services
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
            Why Choose BINDX for SAP Authorization
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="inline-block p-3 bg-blue-600 rounded-full">
                <UserGroupIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">Certified Experts</h3>
              <p className="mt-2 text-gray-400">Team of certified SAP security professionals</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-3 bg-blue-600 rounded-full">
                <ClockIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">24/7 Support</h3>
              <p className="mt-2 text-gray-400">Round-the-clock support for critical issues</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-3 bg-blue-600 rounded-full">
                <ChartBarIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">Performance Focus</h3>
              <p className="mt-2 text-gray-400">Optimized solutions for better performance</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-3 bg-blue-600 rounded-full">
                <ArrowPathIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">Innovation</h3>
              <p className="mt-2 text-gray-400">Latest tools and methodologies</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Strengthen Your SAP Security?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today to discuss how we can help secure your SAP systems.
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