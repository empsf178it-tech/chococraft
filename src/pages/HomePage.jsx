import React, { useState } from 'react';
import { ArrowRight, ChevronDown, Sparkles, Eye, Compass, Award } from 'lucide-react';
import CocoaParticles from '../components/CocoaParticles';
import { PRODUCTS, PROCESS_STEPS } from '../data/chococraftData';
import { getAssetUrl } from '../utils/assetHelper';

export default function HomePage({ onNavigate, onSelectProduct, setIsHoveringProduct }) {
  const [activeStep, setActiveStep] = useState(0);
  const featuredProducts = PRODUCTS.filter(p => p.featured);

  return (
    <div className="page-home">
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <img 
          src={getAssetUrl("/assets/images/1.png")} 
          alt="CHOCOCRAFT Luxury Dark Chocolate Bar on Stone Surface" 
          className="hero-bg-image"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = getAssetUrl("/assets/images/hero.jpg");
          }}
        />
        <div className="hero-gradient-overlay" />
        <CocoaParticles />

        <div className="container hero-content">
          <div 
            style={{ 
              backgroundColor: 'rgba(18, 10, 8, 0.55)', 
              backdropFilter: 'blur(10px)', 
              WebkitBackdropFilter: 'blur(10px)',
              padding: '3rem 2rem', 
              borderRadius: '8px', 
              border: '1px solid rgba(197, 160, 89, 0.3)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.6)'
            }}
          >
            <div className="section-label" style={{ justifyContent: 'center', marginBottom: '1.25rem' }}>
              ARTISAN CHOCOLATE HOUSE · EST. 2018
            </div>
            
            <h1 className="editorial-heading-lg" style={{ marginBottom: '1.5rem', lineHeight: '1.02' }}>
              THE ART<br />
              <span style={{ fontStyle: 'italic', fontFamily: 'var(--font-serif)', color: '#c5a059' }}>OF</span> CHOCOLATE.
            </h1>

            <p style={{ 
              fontSize: 'clamp(1rem, 1.8vw, 1.3rem)', 
              color: '#c4b6a6', 
              maxWidth: '650px', 
              margin: '0 auto 2.5rem',
              lineHeight: '1.7',
              fontWeight: 300
            }}>
              “From exceptional cocoa to beautifully finished chocolate, every detail is crafted with intention.”
            </p>

            <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button 
                onClick={() => onNavigate('collection')}
                className="btn-primary"
              >
                EXPLORE THE COLLECTION <ArrowRight size={16} />
              </button>
              <button 
                onClick={() => {
                  const craftEl = document.getElementById('philosophy-section');
                  if (craftEl) craftEl.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-secondary"
              >
                DISCOVER OUR CRAFT <ChevronDown size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED COLLECTION SECTION */}
      <section style={{ padding: '8rem 0', backgroundColor: 'var(--bg-dark-alt)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <span className="section-label">CURATED INDULGENCE</span>
              <h2 className="editorial-heading-md">A COLLECTION OF INDULGENCE</h2>
            </div>
            <button 
              onClick={() => onNavigate('collection')}
              className="btn-secondary"
              style={{ padding: '0.8rem 1.6rem' }}
            >
              VIEW ALL CHOCOLATES <ArrowRight size={16} />
            </button>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '2.5rem' 
          }}>
            {featuredProducts.map((product) => (
              <div 
                key={product.id}
                className="product-card"
                onMouseEnter={() => setIsHoveringProduct(true)}
                onMouseLeave={() => setIsHoveringProduct(false)}
                onClick={() => onSelectProduct(product)}
                style={{ cursor: 'pointer' }}
              >
                <div className="product-image-wrap">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <span className="product-badge">{product.type}</span>
                </div>
                
                <div className="product-body">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-tagline">{product.tagline}</p>
                  <p className="product-desc">{product.shortDesc}</p>
                  
                  <div className="tasting-notes-pills">
                    {product.tastingNotes.slice(0, 3).map((note, idx) => (
                      <span key={idx} className="note-pill">✦ {note}</span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid rgba(197, 160, 89, 0.15)' }}>
                    <span style={{ fontSize: '0.75rem', color: '#c5a059', fontWeight: 600 }}>{product.cocoaPercent}% COCOA</span>
                    <span style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: '#fbf8f3', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      EXPLORE <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE CHOCOCRAFT PHILOSOPHY SECTION */}
      <section id="philosophy-section" className="section-cream" style={{ padding: '8rem 0', position: 'relative' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>OUR ESSENCE</span>
            
            <h2 className="editorial-heading-lg" style={{ marginBottom: '2rem', lineHeight: '1.05' }}>
              LESS ABOUT SWEETNESS.<br />
              <span style={{ fontStyle: 'italic', fontFamily: 'var(--font-serif)', color: '#9e522b' }}>MORE ABOUT</span> FLAVOUR.
            </h2>

            <p style={{ 
              fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', 
              color: 'var(--text-muted-dark)', 
              lineHeight: '1.8',
              fontFamily: 'var(--font-serif)',
              marginBottom: '3rem'
            }}>
              “We believe exceptional chocolate is built through balance — the character of cocoa, the quality of ingredients and the patience of the craft.”
            </p>
          </div>

          {/* Immersive Full Width Chocolate Photo Frame */}
          <div 
            style={{ 
              width: '100%', 
              height: '520px', 
              borderRadius: '4px', 
              overflow: 'hidden', 
              position: 'relative',
              boxShadow: '0 25px 50px rgba(0,0,0,0.2)'
            }}
          >
            <img 
              src={getAssetUrl("/assets/images/7.png")} 
              alt="Artisan Chocolatier Tempering Liquid Dark Chocolate Ribbon" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = getAssetUrl("/assets/images/liquid.jpg");
              }}
            />
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(18, 10, 8, 0.7) 0%, transparent 60%)',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '3rem'
              }}
            >
              <div style={{ color: '#fbf8f3' }}>
                <p style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c5a059', marginBottom: '0.5rem' }}>
                  ATELIER ZÜRICH
                </p>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem' }}>Form V Beta-Crystal Tempering</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COCOA TO CHOCOLATE HORIZONTAL STORYTELLING SEQUENCE */}
      <section style={{ padding: '8rem 0', backgroundColor: 'var(--bg-dark)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>JOURNEY OF FLAVOUR</span>
            <h2 className="editorial-heading-md">COCOA TO CHOCOLATE</h2>
            <p style={{ color: '#c4b6a6', marginTop: '0.5rem' }}>The seven stages of artisan alchemy</p>
          </div>

          {/* Interactive Stage Selector */}
          <div 
            style={{ 
              display: 'flex', 
              gap: '1rem', 
              overflowX: 'auto', 
              paddingBottom: '1.5rem',
              marginBottom: '3rem',
              borderBottom: '1px solid var(--border-dark)',
              scrollbarWidth: 'none'
            }}
          >
            {PROCESS_STEPS.map((step, idx) => (
              <button
                key={step.step}
                onClick={() => setActiveStep(idx)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeStep === idx ? '#c5a059' : '#6e5e54',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  padding: '0.75rem 1.25rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  borderBottom: activeStep === idx ? '2px solid #c5a059' : '2px solid transparent',
                  transition: 'all 0.3s ease'
                }}
              >
                {step.step}. {step.title}
              </button>
            ))}
          </div>

          {/* Active Stage Display */}
          <div className="process-card-wrapper">
            <div className="process-card-content">
              <div>
                <span className="process-step-num">
                  {PROCESS_STEPS[activeStep].step}
                </span>
                <h3 className="editorial-heading-md process-step-title">
                  {PROCESS_STEPS[activeStep].title}
                </h3>
                <h4 className="process-step-subtitle">
                  {PROCESS_STEPS[activeStep].subtitle}
                </h4>
                <p className="process-step-desc">
                  {PROCESS_STEPS[activeStep].desc}
                </p>
                
                <button 
                  onClick={() => onNavigate('craft')}
                  className="btn-primary"
                >
                  LEARN MORE IN THE CRAFT <ArrowRight size={16} />
                </button>
              </div>

              <div className="process-step-img-box">
                <img 
                  src={PROCESS_STEPS[activeStep].image} 
                  alt={PROCESS_STEPS[activeStep].title}
                  onError={(e) => {
                    e.target.onerror = null;
                    const fallbacks = [
                      "/assets/images/cocoapod.jpg",
                      "/assets/images/drying.jpg",
                      "/assets/images/roasting.jpg",
                      "/assets/images/liquid.jpg",
                      "/assets/images/hero.jpg",
                      "/assets/images/truffles.jpg",
                      "/assets/images/1.png"
                    ];
                    e.target.src = getAssetUrl(fallbacks[activeStep] || "/assets/images/cocoapod.jpg");
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL HOME CTA */}
      <section 
        style={{ 
          position: 'relative', 
          minHeight: '75vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          overflow: 'hidden' 
        }}
      >
        <img 
          src={getAssetUrl("/assets/images/1.png")} 
          alt="CHOCOCRAFT Dark Chocolate Slab Macro" 
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.5)' }} 
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = getAssetUrl("/assets/images/hero.jpg");
          }}
        />
        <div className="hero-gradient-overlay" />
        
        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <span className="section-label" style={{ justifyContent: 'center' }}>INDULGE YOUR SENSES</span>
          
          <h2 className="editorial-heading-lg" style={{ marginBottom: '2rem' }}>
            TASTE THE CRAFT.
          </h2>
          
          <p style={{ fontSize: '1.2rem', color: '#c4b6a6', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Discover our collection of single-origin dark chocolates, slow-cooked caramel bonbons, and signature gift chests.
          </p>

          <button 
            onClick={() => onNavigate('collection')}
            className="btn-primary"
            style={{ padding: '1.2rem 2.8rem', fontSize: '0.9rem' }}
          >
            EXPLORE CHOCOCRAFT <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
