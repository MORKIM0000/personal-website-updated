import { useEffect } from 'react';
import { lazyLoadImages, prefetchResources } from '../lib/lazyLoad';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

const LazyImage: React.FC<LazyImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height 
}) => {
  useEffect(() => {
    // Initialize lazy loading when component mounts
    lazyLoadImages();
    
    // Prefetch critical resources
    prefetchResources([src]);
  }, [src]);

  return (
    <img 
      data-src={src} 
      alt={alt} 
      className={`transition-opacity duration-300 opacity-0 loaded:opacity-100 ${className}`}
      width={width}
      height={height}
      loading="lazy"
    />
  );
};

export default LazyImage;
