import { useState } from 'react';
import { Search, BookOpen, Download, Star } from 'lucide-react';

const MCATResourcesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock MCAT resources data
  const mcatResources = [
    {
      id: 1,
      title: 'MCAT Biology Study Guide',
      description: 'Comprehensive review of biological systems and processes tested on the MCAT.',
      type: 'Study Guide',
      difficulty: 'Intermediate',
      downloadable: true,
      slug: '/mcat-resources/biology-study-guide'
    },
    {
      id: 2,
      title: 'MCAT Chemistry Flashcards',
      description: 'Interactive flashcards covering general and organic chemistry concepts.',
      type: 'Flashcards',
      difficulty: 'Advanced',
      downloadable: true,
      slug: '/mcat-resources/chemistry-flashcards'
    },
    {
      id: 3,
      title: 'CARS Practice Questions',
      description: 'Practice questions for the Critical Analysis and Reasoning Skills section.',
      type: 'Practice Questions',
      difficulty: 'Advanced',
      downloadable: true,
      slug: '/mcat-resources/cars-practice-questions'
    },
    {
      id: 4,
      title: 'Physics Equation Sheet',
      description: 'Quick reference guide for all physics equations needed for the MCAT.',
      type: 'Reference',
      difficulty: 'Beginner',
      downloadable: true,
      slug: '/mcat-resources/physics-equation-sheet'
    },
    {
      id: 5,
      title: 'Psychology & Sociology Terms',
      description: 'Comprehensive glossary of behavioral science terms tested on the MCAT.',
      type: 'Reference',
      difficulty: 'Intermediate',
      downloadable: true,
      slug: '/mcat-resources/psychology-sociology-terms'
    }
  ];

  // Filter resources based on search term
  const filteredResources = mcatResources.filter(resource => 
    resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Header */}
      <section className="bg-secondary py-16">
        <div className="content-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-4">MCAT Resources</h1>
            <p className="text-lg text-muted-foreground">
              Study guides, practice questions, and reference materials to help you prepare for the MCAT.
            </p>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 border-b border-border">
        <div className="content-container">
          <div className="relative w-full max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Search resources..."
              className="pl-10 pr-4 py-2 w-full rounded-md border border-input bg-background"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-12">
        <div className="content-container">
          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map(resource => (
                <div 
                  key={resource.id} 
                  className="bg-card rounded-lg shadow-sm overflow-hidden border border-border hover:shadow-md transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 bg-secondary rounded-md">
                        <BookOpen className="h-5 w-5 text-accent" />
                      </div>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        resource.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                        resource.difficulty === 'Intermediate' ? 'bg-blue-100 text-blue-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {resource.difficulty}
                      </span>
                    </div>
                    <h3 className="text-xl mb-2">
                      <a href={resource.slug} className="hover:text-accent transition-colors">
                        {resource.title}
                      </a>
                    </h3>
                    <p className="text-muted-foreground mb-4">{resource.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{resource.type}</span>
                      {resource.downloadable && (
                        <a 
                          href={`${resource.slug}/download`} 
                          className="inline-flex items-center text-accent hover:underline"
                        >
                          <Download className="mr-1 h-4 w-4" />
                          Download
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No resources found matching your search criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Resource */}
      <section className="py-12 bg-secondary">
        <div className="content-container">
          <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-md overflow-hidden border border-border">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 text-yellow-500 mr-2" />
                <span className="text-sm font-medium text-yellow-500">Featured Resource</span>
              </div>
              <h2 className="text-2xl mb-4">Complete MCAT Study Timeline</h2>
              <p className="text-muted-foreground mb-6">
                A comprehensive 3-month study plan covering all MCAT sections with weekly goals, 
                practice test schedules, and resource recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/mcat-resources/study-timeline" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-accent text-white hover:bg-accent-teal-600 transition-colors"
                >
                  View Study Plan
                </a>
                <a 
                  href="/mcat-resources/study-timeline/download" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-12">
        <div className="content-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4">Coming Soon</h2>
            <p className="text-muted-foreground mb-8">
              We're working on expanding our MCAT resources with interactive flashcards, 
              practice exams, and personalized study recommendations.
            </p>
            <div className="flex justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 rounded-md bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
              >
                Request a Resource
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MCATResourcesPage;
