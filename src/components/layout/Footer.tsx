import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border mt-auto">
      <div className="content-container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Site Info */}
          <div>
            <h3 className="text-lg font-serif font-medium mb-4">
              <span className="text-primary">Med</span>
              <span className="text-accent">Ethics</span>
            </h3>
            <p className="text-muted-foreground">
              A personal website focused on medicine, bioethics, and education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/blog" className="text-muted-foreground hover:text-accent transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/mcat-resources" className="text-muted-foreground hover:text-accent transition-colors">
                  MCAT Resources
                </a>
              </li>
              <li>
                <a href="/study-guides" className="text-muted-foreground hover:text-accent transition-colors">
                  Study Guides
                </a>
              </li>
              <li>
                <a href="/about" className="text-muted-foreground hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-serif font-medium mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://substack.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Substack"
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
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M6 12h12" />
                  <path d="M6 7h12" />
                  <path d="M12 17v-5" />
                </svg>
              </a>
              <a 
                href="mailto:contact@example.com" 
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} MedEthics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
