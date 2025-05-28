import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="content-container py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Site Name */}
          <Link to="/" className="text-xl font-serif font-medium">
            <span className="text-primary">Med</span>
            <span className="text-accent">Ethics</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-accent transition-colors">
              Home
            </Link>
            <Link to="/blog" className="text-foreground hover:text-accent transition-colors">
              Blog
            </Link>
            <Link to="/mcat-resources" className="text-foreground hover:text-accent transition-colors">
              MCAT Resources
            </Link>
            <Link to="/study-guides" className="text-foreground hover:text-accent transition-colors">
              Study Guides
            </Link>
            <Link to="/about" className="text-foreground hover:text-accent transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-foreground hover:text-accent transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-foreground hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/blog" 
              className="text-foreground hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/mcat-resources" 
              className="text-foreground hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              MCAT Resources
            </Link>
            <Link 
              to="/study-guides" 
              className="text-foreground hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Study Guides
            </Link>
            <Link 
              to="/about" 
              className="text-foreground hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-foreground hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
