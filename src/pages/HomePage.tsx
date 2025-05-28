import { ArrowRight } from 'lucide-react';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-secondary py-20">
        <div className="content-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">
              Exploring Medicine, Bioethics, and Education
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              A personal journey through pre-med studies, bioethical questions, 
              and educational resources for aspiring healthcare professionals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/blog" 
                className="inline-flex items-center px-6 py-3 rounded-md bg-accent text-white hover:bg-accent-teal-600 transition-colors"
              >
                Read the Blog
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a 
                href="/about" 
                className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                About Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-16">
        <div className="content-container">
          <h2 className="text-center mb-12">Featured Content</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blog Card */}
            <div className="bg-card rounded-lg shadow-sm overflow-hidden border border-border hover:shadow-md transition-shadow">
              <div className="h-48 bg-muted flex items-center justify-center">
                <span className="text-4xl">📝</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2">Blog</h3>
                <p className="text-muted-foreground mb-4">
                  Essays and reflections on bioethics, medical humanities, and experiences in hospice volunteering and EMT work.
                </p>
                <a 
                  href="/blog" 
                  className="inline-flex items-center text-accent hover:underline"
                >
                  Explore Articles
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* MCAT Resources Card */}
            <div className="bg-card rounded-lg shadow-sm overflow-hidden border border-border hover:shadow-md transition-shadow">
              <div className="h-48 bg-muted flex items-center justify-center">
                <span className="text-4xl">📚</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2">MCAT Resources</h3>
                <p className="text-muted-foreground mb-4">
                  Study guides, tips, and resources to help you prepare for the Medical College Admission Test.
                </p>
                <a 
                  href="/mcat-resources" 
                  className="inline-flex items-center text-accent hover:underline"
                >
                  View Resources
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Study Guides Card */}
            <div className="bg-card rounded-lg shadow-sm overflow-hidden border border-border hover:shadow-md transition-shadow">
              <div className="h-48 bg-muted flex items-center justify-center">
                <span className="text-4xl">🧠</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2">Study Guides</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive guides for AP courses and college subjects, organized by topic for easy reference.
                </p>
                <a 
                  href="/study-guides" 
                  className="inline-flex items-center text-accent hover:underline"
                >
                  Browse Guides
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-secondary">
        <div className="content-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to receive notifications when new content is published.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2 rounded-md border border-input bg-background"
              />
              <button className="px-6 py-2 rounded-md bg-accent text-white hover:bg-accent-teal-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
