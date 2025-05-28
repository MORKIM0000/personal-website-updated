import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const AboutPage = () => {
  return (
    <div>
      {/* Header */}
      <section className="bg-secondary py-16">
        <div className="content-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-4">About Me</h1>
            <p className="text-lg text-muted-foreground">
              Pre-med student passionate about bioethics, medical humanities, and global health.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="content-container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Profile Image */}
              <div className="md:col-span-1">
                <div className="bg-muted rounded-lg aspect-square flex items-center justify-center mb-6">
                  <span className="text-6xl">👨‍⚕️</span>
                </div>
                
                {/* Social Links */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium mb-2">Connect With Me</h3>
                  
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-3 rounded-md bg-card border border-border hover:bg-secondary transition-colors"
                  >
                    <Github className="h-5 w-5 mr-3 text-accent" />
                    <span>GitHub</span>
                  </a>
                  
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-3 rounded-md bg-card border border-border hover:bg-secondary transition-colors"
                  >
                    <Linkedin className="h-5 w-5 mr-3 text-accent" />
                    <span>LinkedIn</span>
                  </a>
                  
                  <a 
                    href="https://substack.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-3 rounded-md bg-card border border-border hover:bg-secondary transition-colors"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="h-5 w-5 mr-3 text-accent"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M6 12h12" />
                      <path d="M6 7h12" />
                      <path d="M12 17v-5" />
                    </svg>
                    <span>Substack</span>
                  </a>
                  
                  <a 
                    href="mailto:contact@example.com" 
                    className="flex items-center p-3 rounded-md bg-card border border-border hover:bg-secondary transition-colors"
                  >
                    <Mail className="h-5 w-5 mr-3 text-accent" />
                    <span>Email Me</span>
                  </a>
                  
                  <a 
                    href="/resume.pdf" 
                    target="_blank"
                    className="flex items-center p-3 rounded-md bg-card border border-border hover:bg-secondary transition-colors"
                  >
                    <FileText className="h-5 w-5 mr-3 text-accent" />
                    <span>Resume</span>
                  </a>
                </div>
              </div>
              
              {/* Bio */}
              <div className="md:col-span-2 prose-custom">
                <h2>My Journey</h2>
                <p>
                  Hello! I'm a pre-medical student with a passion for exploring the intersections of medicine, ethics, and humanities. My academic journey has been shaped by a deep curiosity about how healthcare systems work and how we can make them more equitable and compassionate.
                </p>
                
                <p>
                  As an aspiring physician, I believe that understanding the human aspects of medicine is just as important as mastering the scientific foundations. This perspective has led me to pursue studies in bioethics and medical humanities alongside my pre-med coursework.
                </p>
                
                <h3>Education</h3>
                <p>
                  I'm currently pursuing a Bachelor of Science in Biology with a minor in Bioethics. My coursework spans the natural sciences, social sciences, and humanities, providing me with a well-rounded foundation for a career in medicine.
                </p>
                
                <h3>Clinical Experience</h3>
                <p>
                  My time as a hospice volunteer has been one of the most formative experiences in my pre-medical journey. Working with patients and families during end-of-life care has taught me invaluable lessons about compassion, dignity, and the importance of patient-centered care.
                </p>
                
                <p>
                  Additionally, my work as an EMT has provided me with hands-on clinical experience and a deeper understanding of emergency medicine and pre-hospital care. These experiences have reinforced my commitment to pursuing a career in medicine.
                </p>
                
                <h3>Research Interests</h3>
                <p>
                  My research interests lie at the intersection of bioethics, global health, and healthcare policy. I'm particularly interested in exploring how ethical frameworks can inform healthcare delivery in resource-limited settings and how we can address healthcare disparities both locally and globally.
                </p>
                
                <h3>Teaching and Mentorship</h3>
                <p>
                  I'm passionate about education and mentorship. Through tutoring and creating study resources, I aim to help other students navigate their academic journeys, particularly in challenging STEM courses and standardized test preparation.
                </p>
                
                <h3>Future Goals</h3>
                <p>
                  Looking ahead, I aspire to become a physician who integrates clinical practice with advocacy, education, and research. I hope to contribute to improving healthcare systems and medical education, with a focus on promoting ethical practice and addressing healthcare inequities.
                </p>
                
                <p>
                  This website serves as a platform to share my thoughts, experiences, and resources with others who share similar interests or are on similar paths. I hope you find the content here helpful and thought-provoking!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
