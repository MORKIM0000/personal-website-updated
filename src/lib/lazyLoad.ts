// src/lib/lazyLoad.ts
export const lazyLoadImages = () => {
  // Find all images with data-src attribute
  const lazyImages = document.querySelectorAll('img[data-src]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => {
      imageObserver.observe(img);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    lazyImages.forEach(img => {
      const imgElement = img as HTMLImageElement;
      imgElement.src = imgElement.dataset.src || '';
      imgElement.removeAttribute('data-src');
    });
  }
};

export const deferNonCriticalCSS = (href: string) => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  link.type = 'text/css';
  
  // Use requestIdleCallback if available, otherwise use setTimeout
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(() => {
      document.head.appendChild(link);
    });
  } else {
    setTimeout(() => {
      document.head.appendChild(link);
    }, 1);
  }
};

export const prefetchResources = (urls: string[]) => {
  if (!('requestIdleCallback' in window)) return;
  
  window.requestIdleCallback(() => {
    urls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = url;
      document.head.appendChild(link);
    });
  });
};
