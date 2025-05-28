import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PerformanceOptimization from './components/PerformanceOptimization';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import MCATResourcesPage from './pages/MCATResourcesPage';
import StudyGuidesPage from './pages/StudyGuidesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  useEffect(() => {
    // Add meta viewport tag for responsive design
    const meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=5.0';
    document.head.appendChild(meta);
    
    // Add theme color meta tag
    const themeColorMeta = document.createElement('meta');
    themeColorMeta.name = 'theme-color';
    themeColorMeta.content = '#14b8a6'; // Teal accent color
    document.head.appendChild(themeColorMeta);
    
    return () => {
      document.head.removeChild(meta);
      document.head.removeChild(themeColorMeta);
    };
  }, []);

  return (
    <PerformanceOptimization>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/mcat-resources" element={<MCATResourcesPage />} />
          <Route path="/study-guides" element={<StudyGuidesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </PerformanceOptimization>
  );
}

export default App;
