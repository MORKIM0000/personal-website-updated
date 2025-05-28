import { useEffect } from 'react';

interface PerformanceOptimizationProps {
  children: React.ReactNode;
}

const PerformanceOptimization: React.FC<PerformanceOptimizationProps> = ({ children }) => {
  useEffect(() => {
    // Defer non-critical CSS
    const deferCSS = () => {
      const stylesheets = [
        '/fonts.css',
        '/animations.css'
      ];
      
      stylesheets.forEach(stylesheet => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = stylesheet;
        link.type = 'text/css';
        link.media = 'print';
        link.onload = () => { link.media = 'all'; };
        document.head.appendChild(link);
      });
    };
    
    // Preconnect to external domains
    const preconnect = () => {
      const domains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com'
      ];
      
      domains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    };
    
    // Optimize image loading
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[loading="lazy"]');
      images.forEach(img => {
        if ('loading' in HTMLImageElement.prototype) {
          // Browser supports native lazy loading
          (img as HTMLImageElement).loading = 'lazy';
        } else {
          // Fallback for browsers that don't support native lazy loading
          const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const image = entry.target as HTMLImageElement;
                const dataSrc = image.getAttribute('data-src');
                if (dataSrc) {
                  image.src = dataSrc;
                  image.removeAttribute('data-src');
                }
                observer.unobserve(image);
              }
            });
          });
          observer.observe(img);
        }
      });
    };
    
    // Execute optimizations
    if (typeof window !== 'undefined') {
      // Execute immediately
      preconnect();
      
      // Execute after page load
      if (document.readyState === 'complete') {
        deferCSS();
        optimizeImages();
      } else {
        window.addEventListener('load', () => {
          deferCSS();
          optimizeImages();
        });
      }
    }
    
    return () => {
      // Cleanup if needed
      if (typeof window !== 'undefined') {
        window.removeEventListener('load', deferCSS);
        window.removeEventListener('load', optimizeImages);
      }
    };
  }, []);
  
  return <>{children}</>;
};

export default PerformanceOptimization;
