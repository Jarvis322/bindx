import Image from 'next/image';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog</h1>
          <p className="text-xl md:text-2xl">Latest Insights & Industry News</p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Featured Post */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Featured Post</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 relative h-64 md:h-auto">
                  <Image
                    src="/images/blog/featured.jpg"
                    alt="Featured blog post"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">SAP S/4HANA</div>
                  <h3 className="mt-2 text-2xl font-semibold leading-tight">
                    The Future of SAP: Embracing Cloud-First Strategy
                  </h3>
                  <p className="mt-4 text-gray-600">
                    Explore how businesses are leveraging SAP's cloud-first approach to drive digital transformation and achieve operational excellence.
                  </p>
                  <div className="mt-6">
                    <Link
                      href="/blog/future-of-sap-cloud-first-strategy"
                      className="inline-block bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition duration-300"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Posts */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Recent Posts</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">{post.category}</div>
                    <h3 className="mt-2 text-xl font-semibold leading-tight">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-gray-600 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                        <p className="text-sm text-gray-500">{post.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const blogPosts = [
  {
    title: "Optimizing SAP Performance in the Cloud",
    excerpt: "Learn the best practices for optimizing your SAP systems' performance in cloud environments.",
    category: "Cloud Computing",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
    author: {
      name: "David Wilson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
    },
    date: "February 15, 2024"
  },
  {
    title: "SAP Security Best Practices",
    excerpt: "Essential security measures to protect your SAP infrastructure from emerging threats.",
    category: "Security",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80",
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
    },
    date: "February 10, 2024"
  },
  {
    title: "Digital Transformation with SAP",
    excerpt: "How businesses are achieving digital transformation success with SAP solutions.",
    category: "Digital Transformation",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
    author: {
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80"
    },
    date: "February 5, 2024"
  }
]; 