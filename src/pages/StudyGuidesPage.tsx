import { useState } from 'react';
import { Search, BookOpen, Bookmark, ArrowRight } from 'lucide-react';

const StudyGuidesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSubject, setActiveSubject] = useState('all');
  
  // Mock study guides data
  const subjects = [
    { id: 'all', name: 'All Subjects' },
    { id: 'biology', name: 'AP Biology' },
    { id: 'chemistry', name: 'AP Chemistry' },
    { id: 'physics', name: 'Physics' },
    { id: 'history', name: 'AP US History' },
    { id: 'calculus', name: 'AP Calculus' },
    { id: 'english', name: 'AP English' },
  ];
  
  const studyGuides = [
    {
      id: 1,
      title: 'AP Biology: Cell Structure and Function',
      description: 'Comprehensive guide to cell organelles, membrane transport, and cellular processes.',
      subject: 'biology',
      level: 'AP',
      lastUpdated: 'May 10, 2025',
      slug: '/study-guides/ap-biology/cell-structure'
    },
    {
      id: 2,
      title: 'AP Chemistry: Thermodynamics',
      description: 'In-depth review of enthalpy, entropy, Gibbs free energy, and spontaneous reactions.',
      subject: 'chemistry',
      level: 'AP',
      lastUpdated: 'April 25, 2025',
      slug: '/study-guides/ap-chemistry/thermodynamics'
    },
    {
      id: 3,
      title: 'College Physics: Electromagnetism',
      description: 'Detailed explanations of electric fields, magnetic fields, and electromagnetic induction.',
      subject: 'physics',
      level: 'College',
      lastUpdated: 'April 18, 2025',
      slug: '/study-guides/college-physics/electromagnetism'
    },
    {
      id: 4,
      title: 'AP US History: Civil War and Reconstruction',
      description: 'Timeline, key events, figures, and impacts of the American Civil War and Reconstruction era.',
      subject: 'history',
      level: 'AP',
      lastUpdated: 'March 30, 2025',
      slug: '/study-guides/ap-us-history/civil-war'
    },
    {
      id: 5,
      title: 'AP Calculus AB: Integration Techniques',
      description: 'Methods for integration including substitution, parts, partial fractions, and applications.',
      subject: 'calculus',
      level: 'AP',
      lastUpdated: 'March 15, 2025',
      slug: '/study-guides/ap-calculus/integration'
    },
    {
      id: 6,
      title: 'AP English Literature: Literary Analysis',
      description: 'Frameworks and approaches for analyzing prose, poetry, and dramatic works.',
      subject: 'english',
      level: 'AP',
      lastUpdated: 'March 5, 2025',
      slug: '/study-guides/ap-english/literary-analysis'
    },
    {
      id: 7,
      title: 'AP Biology: Genetics and Heredity',
      description: 'Mendelian genetics, chromosomal inheritance, gene expression, and genetic disorders.',
      subject: 'biology',
      level: 'AP',
      lastUpdated: 'February 20, 2025',
      slug: '/study-guides/ap-biology/genetics'
    },
    {
      id: 8,
      title: 'College Physics: Mechanics',
      description: 'Newton\'s laws, kinematics, dynamics, energy, momentum, and rotational motion.',
      subject: 'physics',
      level: 'College',
      lastUpdated: 'February 10, 2025',
      slug: '/study-guides/college-physics/mechanics'
    }
  ];

  // Filter guides based on search term and active subject
  const filteredGuides = studyGuides.filter(guide => 
    (activeSubject === 'all' || guide.subject === activeSubject) &&
    (guide.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     guide.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div>
      {/* Header */}
      <section className="bg-secondary py-16">
        <div className="content-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-4">Study Guides</h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive guides for AP courses and college subjects, organized by topic for easy reference.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 border-b border-border">
        <div className="content-container">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Subject Navigation */}
            <div className="md:w-64 flex-shrink-0">
              <h3 className="text-lg font-medium mb-4">Subjects</h3>
              <nav className="flex flex-col space-y-1">
                {subjects.map(subject => (
                  <button
                    key={subject.id}
                    className={`text-left px-3 py-2 rounded-md transition-colors ${
                      activeSubject === subject.id 
                        ? 'bg-accent text-white' 
                        : 'text-foreground hover:bg-secondary'
                    }`}
                    onClick={() => setActiveSubject(subject.id)}
                  >
                    {subject.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Search and Results */}
            <div className="flex-grow">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search study guides..."
                  className="pl-10 pr-4 py-2 w-full rounded-md border border-input bg-background"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {filteredGuides.length > 0 ? (
                <div className="grid grid-cols-1 gap-6">
                  {filteredGuides.map(guide => (
                    <div 
                      key={guide.id} 
                      className="bg-card rounded-lg shadow-sm overflow-hidden border border-border hover:shadow-md transition-shadow p-6"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center mb-2">
                            <span className={`text-xs font-medium px-2 py-1 rounded-full mr-2 ${
                              guide.level === 'AP' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                            }`}>
                              {guide.level}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              Updated: {guide.lastUpdated}
                            </span>
                          </div>
                          <h3 className="text-xl mb-2">
                            <a href={guide.slug} className="hover:text-accent transition-colors">
                              {guide.title}
                            </a>
                          </h3>
                          <p className="text-muted-foreground mb-4">{guide.description}</p>
                          <a 
                            href={guide.slug} 
                            className="inline-flex items-center text-accent hover:underline"
                          >
                            View Guide
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </a>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <div className="p-3 bg-secondary rounded-full">
                            <BookOpen className="h-5 w-5 text-accent" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-card rounded-lg border border-border">
                  <p className="text-muted-foreground">No study guides found matching your criteria.</p>
                  <button 
                    className="mt-4 px-4 py-2 rounded-md bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
                    onClick={() => {
                      setSearchTerm('');
                      setActiveSubject('all');
                    }}
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Request Section */}
      <section className="py-12 bg-secondary">
        <div className="content-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4">Need a Specific Study Guide?</h2>
            <p className="text-muted-foreground mb-6">
              Don't see what you're looking for? Request a study guide for any subject or topic.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 rounded-md bg-accent text-white hover:bg-accent-teal-600 transition-colors"
            >
              Request a Guide
            </a>
          </div>
        </div>
      </section>

      {/* Save for Later */}
      <section className="py-12">
        <div className="content-container">
          <div className="max-w-3xl mx-auto bg-card rounded-lg shadow-md overflow-hidden border border-border p-6">
            <div className="flex items-center mb-4">
              <Bookmark className="h-5 w-5 text-accent mr-2" />
              <h3 className="text-xl">Save Guides for Later</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Create an account to bookmark study guides, track your progress, and receive updates when new content is added.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/signup" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-accent text-white hover:bg-accent-teal-600 transition-colors"
              >
                Sign Up
              </a>
              <a 
                href="/login" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
              >
                Log In
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudyGuidesPage;
