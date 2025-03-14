import Image from 'next/image';
import Link from 'next/link';
import { 
  ChartBarIcon,
  BoltIcon,
  CircleStackIcon,
  CpuChipIcon,
  ArrowsPointingInIcon,
  DocumentMagnifyingGlassIcon,
  ExclamationTriangleIcon,
  QueueListIcon,
  TableCellsIcon,
  ClockIcon,
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

export default function SapPerformance() {
  const services = [
    {
      title: "Comprehensive Performance Analysis",
      description: "We perform detailed analysis of all factors affecting the performance of your systems.",
      icon: ChartBarIcon,
      bulletPoints: [
        {
          title: "Infrastructure Assessment",
          description: "Comprehensive analysis of CPU, memory, disk I/O, and network performance."
        },
        {
          title: "End-to-End Monitoring",
          description: "Performance tracking across all layers from user screen to database."
        },
        {
          title: "Resource Profiling",
          description: "Profiling the usage of system resources and capacity planning."
        },
        {
          title: "Benchmark Analysis",
          description: "Comparison of system performance with industry standards."
        }
      ]
    },
    {
      title: "SAP Early Watch Alert Analysis",
      description: "Professional evaluation of proactive system health reports and creation of action plans.",
      icon: BoltIcon,
      bulletPoints: [
        {
          title: "Regular EWA Review",
          description: "Expert analysis of Early Watch Alert reports provided by SAP."
        },
        {
          title: "Trend Analysis",
          description: "Detection and evaluation of performance changes over time."
        },
        {
          title: "Proactive Planning",
          description: "Proactive plans to solve potential problems before they occur."
        },
        {
          title: "Alert Management",
          description: "Rapid intervention and solution plans for critical alerts."
        }
      ]
    },
    {
      title: "SQL Performance Optimization",
      description: "We improve response times by increasing efficiency at the database layer.",
      icon: CircleStackIcon,
      bulletPoints: [
        {
          title: "Query Optimization",
          description: "Detection and optimization of queries that degrade system performance."
        },
        {
          title: "Index Strategy",
          description: "Creation of optimum index structure and cleaning of unnecessary indexes."
        },
        {
          title: "Memory Management",
          description: "Optimization of SQL memory usage and plan cache."
        },
        {
          title: "Table Partitioning",
          description: "Creation of efficient partitioning strategy for large tables."
        }
      ]
    },
    {
      title: "Memory Management",
      description: "We increase system performance with optimal configuration of SAP memory parameters.",
      icon: CpuChipIcon,
      bulletPoints: [
        {
          title: "Memory Areas Analysis",
          description: "Analysis of all SAP memory areas in terms of usage and performance."
        },
        {
          title: "Buffer Optimization",
          description: "Optimization of program, screen, table, and other buffers."
        },
        {
          title: "Leak Detection",
          description: "Detection and solution of potential memory leaks."
        },
        {
          title: "HANA Optimization",
          description: "Optimization of memory management in HANA systems."
        }
      ]
    },
    {
      title: "Workload Analysis and Balancing",
      description: "We balance resource usage by analyzing and optimizing the impact of workload on the system.",
      icon: ArrowsPointingInIcon,
      bulletPoints: [
        {
          title: "Load Distribution",
          description: "Analysis and optimization of workload distribution on the system."
        },
        {
          title: "Process Balancing",
          description: "Balancing the impact of dialog and background jobs."
        },
        {
          title: "Peak Load Management",
          description: "Strategies to maintain system performance during high usage periods."
        },
        {
          title: "Load Balancing",
          description: "Load balancing configuration in multi-server environments."
        }
      ]
    },
    {
      title: "Custom Business Transaction Analysis",
      description: "We optimize the most important processes for your business with performance analysis of critical business processes.",
      icon: DocumentMagnifyingGlassIcon,
      bulletPoints: [
        {
          title: "Process Analysis",
          description: "Detailed analysis of performance at each step of the business process."
        },
        {
          title: "Bottleneck Detection",
          description: "Detection of steps causing slowdown in the business process."
        },
        {
          title: "Integration Optimization",
          description: "Performance improvement of RFC calls and external integrations."
        },
        {
          title: "User Experience",
          description: "Performance improvements enhancing end user experience."
        }
      ]
    },
    {
      title: "SAP Trace Analysis",
      description: "We delve into the root causes of problems with detailed analysis of performance traces.",
      icon: ExclamationTriangleIcon,
      bulletPoints: [
        {
          title: "SQL Trace Analysis",
          description: "Analysis of detailed SQL traces of database accesses."
        },
        {
          title: "ABAP Trace Analysis",
          description: "Detailed analysis of ABAP traces to detect performance bottlenecks."
        },
        {
          title: "RFC Trace Analysis",
          description: "Evaluation of performance traces of RFC calls."
        },
        {
          title: "HTTP Analysis",
          description: "Performance analysis of HTTP requests and responses."
        }
      ]
    },
    {
      title: "Performance Bottleneck Detection",
      description: "We develop detection and solution strategies for bottlenecks in the system using scientific methods.",
      icon: QueueListIcon,
      bulletPoints: [
        {
          title: "Systematic Analysis",
          description: "Systematic analysis and detection of performance constraints."
        },
        {
          title: "Infrastructure Review",
          description: "Detection of hardware and network related bottlenecks."
        },
        {
          title: "Database Analysis",
          description: "Detection of performance constraints at database layer."
        },
        {
          title: "Custom Code Review",
          description: "Detection of performance issues in custom developments."
        }
      ]
    },
    {
      title: "Buffer and Pool Optimization",
      description: "We maximize system performance with optimal configuration of SAP buffers and pools.",
      icon: TableCellsIcon,
      bulletPoints: [
        {
          title: "Buffer Configuration",
          description: "Optimization of table, program, and screen buffers."
        },
        {
          title: "Cache Management",
          description: "Configuration of database and dictionary caches."
        },
        {
          title: "Communication Cache",
          description: "Optimization of Internet communication caches."
        },
        {
          title: "Enqueue Buffering",
          description: "Optimization of enqueue buffering operations."
        }
      ]
    },
    {
      title: "Scheduled Jobs Optimization",
      description: "We increase system efficiency with performance and scheduling optimization of background jobs.",
      icon: ClockIcon,
      bulletPoints: [
        {
          title: "Job Strategy",
          description: "Creation of optimal job planning and scheduling strategy."
        },
        {
          title: "Workload Distribution",
          description: "Balanced distribution of workload using server groups."
        },
        {
          title: "Job Analysis",
          description: "Performance analysis and optimization of long-running jobs."
        },
        {
          title: "Periodic Planning",
          description: "Optimal planning of periodic jobs such as month-end, year-end."
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
              SAP Performance Optimization Services
            </h1>
            <p className="mt-3 max-w-3xl mx-auto text-xl text-blue-100">
              Get Maximum Efficiency from Your Systems
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 leading-relaxed">
            At BINDX, we use scientific approaches and proven methodologies to maximize the performance of your SAP systems. Our expert team in performance optimization identifies system bottlenecks and provides solutions that enhance the speed, response time, and overall efficiency of your systems through comprehensive analysis and measurements. We perform performance improvements at every level - hardware, operating system, database, and application - to ensure your business gets the highest value from its SAP investment.
          </p>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white rounded-lg shadow px-6 py-8 text-center">
            <div className="text-3xl font-bold text-blue-600">50%</div>
            <div className="mt-2 text-gray-600">Performance Boost</div>
          </div>
          <div className="bg-white rounded-lg shadow px-6 py-8 text-center">
            <div className="text-3xl font-bold text-blue-600">99.9%</div>
            <div className="mt-2 text-gray-600">System Uptime</div>
          </div>
          <div className="bg-white rounded-lg shadow px-6 py-8 text-center">
            <div className="text-3xl font-bold text-blue-600">200+</div>
            <div className="mt-2 text-gray-600">Optimized Systems</div>
          </div>
          <div className="bg-white rounded-lg shadow px-6 py-8 text-center">
            <div className="text-3xl font-bold text-blue-600">24/7</div>
            <div className="mt-2 text-gray-600">Monitoring</div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Our SAP Performance Optimization Services
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
            Why Choose BINDX for SAP Performance
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="inline-block p-3 bg-blue-600 rounded-full">
                <ChartBarIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">Scientific Approach</h3>
              <p className="mt-2 text-gray-400">Data-driven optimization</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-3 bg-blue-600 rounded-full">
                <BoltIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">Rapid Results</h3>
              <p className="mt-2 text-gray-400">Quick performance gains</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-3 bg-blue-600 rounded-full">
                <CpuChipIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">Deep Expertise</h3>
              <p className="mt-2 text-gray-400">Technical excellence</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-3 bg-blue-600 rounded-full">
                <DocumentMagnifyingGlassIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">Comprehensive Analysis</h3>
              <p className="mt-2 text-gray-400">End-to-end optimization</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Boost Your SAP Performance?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today to take your SAP systems to the next level.
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