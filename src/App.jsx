import React, { useState, useEffect } from 'react';
import './styles/index.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import PageTransitionOverlay from './components/PageTransitionOverlay';
import ProductDetailModal from './components/ProductDetailModal';

import HomePage from './pages/HomePage';
import CollectionPage from './pages/CollectionPage';
import CraftPage from './pages/CraftPage';
import OriginsPage from './pages/OriginsPage';
import TastingPage from './pages/TastingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isHoveringProduct, setIsHoveringProduct] = useState(false);

  const handleNavigate = (pageId) => {
    if (pageId === activePage || isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActivePage(pageId);
      window.scrollTo({ top: 0, behavior: 'auto' });
    }, 300);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  const renderCurrentPage = () => {
    switch (activePage) {
      case 'home':
        return (
          <HomePage 
            onNavigate={handleNavigate} 
            onSelectProduct={setSelectedProduct}
            setIsHoveringProduct={setIsHoveringProduct}
          />
        );
      case 'collection':
        return (
          <CollectionPage 
            onSelectProduct={setSelectedProduct}
            setIsHoveringProduct={setIsHoveringProduct}
          />
        );
      case 'craft':
        return (
          <CraftPage onNavigate={handleNavigate} />
        );
      case 'origins':
        return (
          <OriginsPage onNavigate={handleNavigate} />
        );
      case 'tasting':
        return (
          <TastingPage 
            onSelectProduct={setSelectedProduct}
            onNavigate={handleNavigate}
          />
        );
      case 'about':
        return (
          <AboutPage onNavigate={handleNavigate} />
        );
      case 'contact':
        return (
          <ContactPage />
        );
      default:
        return (
          <HomePage 
            onNavigate={handleNavigate} 
            onSelectProduct={setSelectedProduct}
            setIsHoveringProduct={setIsHoveringProduct}
          />
        );
    }
  };

  return (
    <div className="app-root">
      {/* Desktop Custom Cursor */}
      <CustomCursor isHoveringProduct={isHoveringProduct} />

      {/* Page Transition Effect Overlay */}
      <PageTransitionOverlay isAnimating={isTransitioning} />

      {/* Global Sticky Navigation Header */}
      <Navigation activePage={activePage} onNavigate={handleNavigate} />

      {/* Main Page Content */}
      <main id="main-content">
        {renderCurrentPage()}
      </main>

      {/* Product Detail Modal */}
      <ProductDetailModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
