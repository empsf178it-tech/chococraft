import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

export default function Navigation({ activePage, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'collection', label: 'COLLECTION' },
    { id: 'craft', label: 'THE CRAFT' },
    { id: 'origins', label: 'COCOA ORIGINS' },
    { id: 'tasting', label: 'TASTING' },
    { id: 'about', label: 'ABOUT' }
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className={`header-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Left Brand Logo */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} 
            className="brand-logo"
            aria-label="CHOCOCRAFT Home"
          >
            <Sparkles size={22} color="#c5a059" className="brand-emblem" />
            <div className="brand-text-block">
              <span className="brand-name-text">CHOCOCRAFT</span>
              <span className="brand-tagline-sm">PARIS · ZÜRICH</span>
            </div>
          </a>

          {/* Center Navigation Desktop */}
          <nav className="nav-links-desktop" aria-label="Main Navigation">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.id); }}
                className={`nav-link ${activePage === item.id ? 'active' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Contact Link & Mobile Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
              className={`btn-contact-nav ${activePage === 'contact' ? 'active' : ''}`}
            >
              CONTACT <ArrowRight size={14} />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

    {/* Mobile Animated Fullscreen Navigation Drawer */}
    <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
      <button 
        className="mobile-menu-close" 
        onClick={() => setMobileMenuOpen(false)}
        aria-label="Close Navigation Menu"
      >
        <X size={32} />
      </button>

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Sparkles size={24} color="#c5a059" style={{ marginBottom: '0.5rem' }} />
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c5a059' }}>
          CHOCOCRAFT
        </p>
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => { e.preventDefault(); handleNavClick(item.id); }}
            className={`mobile-nav-link ${activePage === item.id ? 'active' : ''}`}
          >
            {item.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
          className={`mobile-contact-cta ${activePage === 'contact' ? 'active' : ''}`}
        >
          CONTACT <ArrowRight size={16} />
        </a>
      </nav>
    </div>
    </>
  );
}
