import { useState } from 'react';
import { Search, Filter } from 'lucide-react';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'Ethical Considerations in End-of-Life Care',
      excerpt: 'Exploring the complex ethical questions that arise in hospice and palliative care settings.',
      date: 'May 15, 2025',
      category: 'Bioethics',
      slug: '/blog/ethical-considerations-end-of-life-care'
    },
    {
      id: 2,
      title: 'My Experience as an EMT: First Responder Perspectives',
      excerpt: 'Reflections on the challenges and rewards of emergency medical service work.',
      date: 'April 28, 2025',
      category: 'Medical Humanities',
      slug: '/blog/emt-first-responder-perspectives'
    },
    {
      id: 3,
      title: 'The Intersection of Technology and Healthcare Ethics',
      excerpt: 'How emerging technologies are reshaping ethical frameworks in medicine.',
      date: 'April 10, 2025',
      category: 'Bioethics',
      slug: '/blog/technology-healthcare-ethics'
    },
    {
      id: 4,
      title: 'Narrative Medicine: The Power of Patient Stories',
      excerpt: 'Understanding the importance of narrative in medical practice and education.',
      date: 'March 22, 2025',
      category: 'Medical Humanities',
      slug: '/blog/narrative-medicine-patient-stories'
    },
    {
      id: 5,
      title: 'Global Health Disparities: Causes and Potential Solutions',
      excerpt: 'Examining the factors that contribute to healthcare inequality worldwide.',
      date: 'March 5, 2025',
      category: 'Global Health',
      slug: '/blog/global-health-disparities'
    }
  ];

  // Filter posts based on search term
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Header */}
      <section className="bg-secondary py-16">
        <div className="content-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground">
              Essays and reflections on bioethics, medical humanities, and experiences in healthcare.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 border-b border-border">
        <div className="content-container">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-auto flex-grow max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-2 w-full rounded-md border border-input bg-background"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="text-muted-foreground h-4 w-4" />
              <select className="px-4 py-2 rounded-md border border-input bg-background">
                <option value="all">All Categories</option>
                <option value="bioethics">Bioethics</option>
                <option value="medical-humanities">Medical Humanities</option>
                <option value="global-health">Global Health</option>
                <option value="personal">Personal Experiences</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12">
        <div className="content-container">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-8">
              {filteredPosts.map(post => (
                <article key={post.id} className="border-b border-border pb-8 last:border-0">
                  <div className="mb-2">
                    <span className="text-sm text-accent font-medium">{post.category}</span>
                    <span className="text-sm text-muted-foreground ml-2">• {post.date}</span>
                  </div>
                  <h2 className="text-2xl mb-3">
                    <a href={post.slug} className="hover:text-accent transition-colors">
                      {post.title}
                    </a>
                  </h2>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <a 
                    href={post.slug} 
                    className="inline-flex items-center text-accent hover:underline"
                  >
                    Read More
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="ml-1 h-4 w-4" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M14 5l7 7m0 0l-7 7m7-7H3" 
                      />
                    </svg>
                  </a>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles found matching your search criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Pagination */}
      <section className="py-8">
        <div className="content-container">
          <div className="flex justify-center">
            <nav className="flex items-center gap-1">
              <a 
                href="#" 
                className="px-3 py-1 rounded-md border border-input bg-background hover:bg-secondary transition-colors"
              >
                Previous
              </a>
              <a 
                href="#" 
                className="px-3 py-1 rounded-md border border-input bg-accent text-white"
              >
                1
              </a>
              <a 
                href="#" 
                className="px-3 py-1 rounded-md border border-input bg-background hover:bg-secondary transition-colors"
              >
                2
              </a>
              <a 
                href="#" 
                className="px-3 py-1 rounded-md border border-input bg-background hover:bg-secondary transition-colors"
              >
                3
              </a>
              <span className="px-3 py-1">...</span>
              <a 
                href="#" 
                className="px-3 py-1 rounded-md border border-input bg-background hover:bg-secondary transition-colors"
              >
                Next
              </a>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
