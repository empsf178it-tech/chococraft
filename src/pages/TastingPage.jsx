import React, { useState } from 'react';
import { TASTING_GUIDE, PRODUCTS } from '../data/chococraftData';
import { Sparkles, Eye, Wind, Disc, Smile, Award, ArrowRight, Check } from 'lucide-react';

export default function TastingPage({ onSelectProduct, onNavigate }) {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeRitualStep, setActiveRitualStep] = useState(0);
  const [prefCocoa, setPrefCocoa] = useState(70);
  const [prefNote, setPrefNote] = useState('All');

  // Matcher logic
  const matchedProduct = PRODUCTS.find(p => p.cocoaPercent >= prefCocoa - 5 && p.cocoaPercent <= prefCocoa + 10) || PRODUCTS[0];

  const getStepIcon = (idx) => {
    switch(idx) {
      case 0: return <Eye size={22} color="#c5a059" />;
      case 1: return <Wind size={22} color="#c5a059" />;
      case 2: return <Disc size={22} color="#c5a059" />;
      case 3: return <Smile size={22} color="#c5a059" />;
      case 4: return <Award size={22} color="#c5a059" />;
      default: return <Sparkles size={22} color="#c5a059" />;
    }
  };

  return (
    <div style={{ paddingTop: 'var(--nav-height)', backgroundColor: 'var(--bg-dark)' }}>
      {/* Hero Section */}
      <section style={{ position: 'relative', padding: '8rem 0 6rem', textAlign: 'center', overflow: 'hidden' }}>
        <img 
          src="/assets/images/12.png" 
          alt="Luxury Chocolate Tasting Room Setup - Aroma Evaluation" 
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.35)' }}
        />
        <div className="hero-gradient-overlay" />

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <span className="section-label" style={{ justifyContent: 'center' }}>SENSORY EVALUATION ROOM</span>
          <h1 className="editorial-heading-lg" style={{ marginBottom: '1.5rem' }}>
            TASTE<br />BEYOND SWEETNESS.
          </h1>
          <p className="editorial-subheading" style={{ maxWidth: '650px', margin: '0 auto', fontSize: '1.4rem' }}>
            “Train your palate to identify volatile aromatics, acoustics, and lingering cocoa finishes.”
          </p>
        </div>
      </section>

      {/* 5-Step Tasting Ritual Sequence */}
      <section style={{ padding: '7rem 0', backgroundColor: 'var(--bg-dark-alt)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>THE 5-STEP RITUAL</span>
            <h2 className="editorial-heading-md">CHOCOLATE TASTING GUIDE</h2>
          </div>

          {/* Sequence Tabs */}
          <div 
            style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '1rem', 
              overflowX: 'auto', 
              paddingBottom: '1rem',
              marginBottom: '3rem',
              scrollbarWidth: 'none' 
            }}
          >
            {TASTING_GUIDE.ritual.map((step, idx) => (
              <button
                key={step.step}
                onClick={() => setActiveRitualStep(idx)}
                style={{
                  backgroundColor: activeRitualStep === idx ? '#c5a059' : 'transparent',
                  color: activeRitualStep === idx ? '#120a08' : '#fbf8f3',
                  border: '1px solid ' + (activeRitualStep === idx ? '#c5a059' : 'rgba(197, 160, 89, 0.3)'),
                  padding: '0.8rem 1.6rem',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap'
                }}
              >
                {step.step}. {step.name}
              </button>
            ))}
          </div>

          {/* Active Ritual Display Card */}
          <div 
            style={{ 
              backgroundColor: 'var(--bg-card-dark)', 
              border: '1px solid var(--border-dark)', 
              padding: '3.5rem', 
              borderRadius: '6px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '3rem',
              alignItems: 'center'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                {getStepIcon(activeRitualStep)}
                <span style={{ fontSize: '0.8rem', letterSpacing: '0.2em', color: '#c5a059', fontWeight: 700 }}>
                  RITUAL STEP {TASTING_GUIDE.ritual[activeRitualStep].step} OF 05
                </span>
              </div>

              <h3 className="editorial-heading-md" style={{ fontSize: '2.8rem', marginBottom: '0.5rem' }}>
                {TASTING_GUIDE.ritual[activeRitualStep].name}
              </h3>
              
              <h4 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', color: '#c5a059', marginBottom: '1.5rem' }}>
                {TASTING_GUIDE.ritual[activeRitualStep].action}
              </h4>

              <p style={{ fontSize: '1.05rem', color: '#c4b6a6', lineHeight: '1.8', marginBottom: '2rem' }}>
                {TASTING_GUIDE.ritual[activeRitualStep].desc}
              </p>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <button
                  disabled={activeRitualStep === 0}
                  onClick={() => setActiveRitualStep(prev => Math.max(0, prev - 1))}
                  className="btn-secondary"
                  style={{ padding: '0.7rem 1.4rem', opacity: activeRitualStep === 0 ? 0.4 : 1 }}
                >
                  PREVIOUS
                </button>
                <button
                  disabled={activeRitualStep === TASTING_GUIDE.ritual.length - 1}
                  onClick={() => setActiveRitualStep(prev => Math.min(TASTING_GUIDE.ritual.length - 1, prev + 1))}
                  className="btn-primary"
                  style={{ padding: '0.7rem 1.4rem', opacity: activeRitualStep === TASTING_GUIDE.ritual.length - 1 ? 0.4 : 1 }}
                >
                  NEXT STEP
                </button>
              </div>
            </div>

            <div style={{ height: '360px', borderRadius: '4px', overflow: 'hidden' }}>
              <img 
                src={["/assets/images/12.png", "/assets/images/12.png", "/assets/images/13.png", "/assets/images/2.png", "/assets/images/15.png"][activeRitualStep] || "/assets/images/12.png"}
                alt={TASTING_GUIDE.ritual[activeRitualStep].name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tasting Categories Wheel / Notes Explorer */}
      <section style={{ padding: '7rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>AROMATIC TAXONOMY</span>
            <h2 className="editorial-heading-md">FLAVOUR & TEXTURE CATEGORIES</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
            {TASTING_GUIDE.categories.map((cat, idx) => (
              <div 
                key={cat.title}
                style={{
                  backgroundColor: 'var(--bg-dark-alt)',
                  border: '1px solid var(--border-dark)',
                  padding: '2.5rem',
                  borderRadius: '4px'
                }}
              >
                <h3 className="editorial-heading-md" style={{ fontSize: '1.8rem', color: '#c5a059', marginBottom: '1.5rem', borderBottom: '1px solid rgba(197, 160, 89, 0.2)', paddingBottom: '0.75rem' }}>
                  {cat.title}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {cat.notes.map((note, nIdx) => (
                    <div key={nIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#fbf8f3', fontSize: '0.9rem' }}>
                      <Sparkles size={14} color="#c5a059" />
                      <span>{note}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tasting Recommendation Finder */}
      <section className="section-cream" style={{ padding: '7rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>PERSONALIZED MATCHING</span>
            <h2 className="editorial-heading-md">CHOCOLATE PALATE MATCH</h2>
            <p style={{ color: 'var(--text-muted-dark)', marginTop: '0.5rem' }}>
              Select your preferred cocoa intensity to discover your ideal CHOCOCRAFT bar.
            </p>
          </div>

          <div 
            style={{ 
              backgroundColor: '#fff', 
              border: '1px solid var(--border-cream)', 
              padding: '3rem', 
              borderRadius: '6px',
              boxShadow: '0 15px 35px rgba(0,0,0,0.06)'
            }}
          >
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#1e120f', fontWeight: 700, marginBottom: '0.75rem' }}>
                PREFERRED COCOA INTENSITY: {prefCocoa}%
              </label>
              <input 
                type="range" 
                min="45" 
                max="85" 
                step="5" 
                value={prefCocoa} 
                onChange={(e) => setPrefCocoa(parseInt(e.target.value))}
                style={{ width: '100%', accentColor: '#9e522b' }}
              />
            </div>

            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 2fr', 
                gap: '2rem', 
                alignItems: 'center',
                backgroundColor: 'var(--bg-cream)',
                padding: '1.5rem',
                borderRadius: '4px'
              }}
            >
              <img src={matchedProduct.image} alt={matchedProduct.name} style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '4px' }} />
              <div>
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', color: '#9e522b', fontWeight: 700 }}>RECOMMENDED SELECTION</span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#1e120f' }}>{matchedProduct.name}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted-dark)', margin: '0.4rem 0 1rem' }}>{matchedProduct.shortDesc}</p>
                <button 
                  onClick={() => onSelectProduct(matchedProduct)}
                  className="btn-primary"
                  style={{ padding: '0.6rem 1.2rem', fontSize: '0.75rem' }}
                >
                  VIEW PRODUCT SPECS <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: 5-Step Sensory Evaluation Protocol */}
      <section style={{ padding: '6rem 0 8rem', backgroundColor: 'var(--bg-dark)', borderTop: '1px solid var(--border-dark)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>CHOCOLATIER PROTOCOL</span>
            <h2 className="editorial-heading-md">THE 5-STEP SENSORY RITUAL</h2>
            <p style={{ fontSize: '1rem', color: '#c4b6a6', marginTop: '0.5rem', maxWidth: '650px', margin: '0.5rem auto 0' }}>
              How to taste single-origin chocolate like a professional Swiss chocolate judge.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            <div style={{ backgroundColor: 'var(--bg-card-dark)', border: '1px solid var(--border-dark)', padding: '2rem', borderRadius: '6px' }}>
              <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', color: '#c5a059', fontWeight: 700, display: 'block', marginBottom: '0.5rem' }}>
                STEP 01
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#fbf8f3', marginBottom: '0.75rem' }}>
                VISUAL LUSTRE
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#c4b6a6', lineHeight: '1.6' }}>
                Examine under natural light for a satin sheen and uniform deep dark hue with zero surface clouding.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--bg-card-dark)', border: '1px solid var(--border-dark)', padding: '2rem', borderRadius: '6px' }}>
              <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', color: '#c5a059', fontWeight: 700, display: 'block', marginBottom: '0.5rem' }}>
                STEP 02
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#fbf8f3', marginBottom: '0.75rem' }}>
                ACOUSTIC SNAP
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#c4b6a6', lineHeight: '1.6' }}>
                Break a piece close to your ear. A crisp, clean acoustic snap signals ideal Form V crystal structure.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--bg-card-dark)', border: '1px solid var(--border-dark)', padding: '2rem', borderRadius: '6px' }}>
              <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', color: '#c5a059', fontWeight: 700, display: 'block', marginBottom: '0.5rem' }}>
                STEP 03
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#fbf8f3', marginBottom: '0.75rem' }}>
                AROMA RELEASE
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#c4b6a6', lineHeight: '1.6' }}>
                Gently rub between fingers to warm the cocoa butter, inhaling top notes of red fruit, spice, or roasted nut.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--bg-card-dark)', border: '1px solid var(--border-dark)', padding: '2rem', borderRadius: '6px' }}>
              <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', color: '#c5a059', fontWeight: 700, display: 'block', marginBottom: '0.5rem' }}>
                STEP 04
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#fbf8f3', marginBottom: '0.75rem' }}>
                PALATE MELT
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#c4b6a6', lineHeight: '1.6' }}>
                Let the chocolate rest on your tongue without chewing. Allow pure body heat to release mid-palate complexity.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--bg-card-dark)', border: '1px solid var(--border-dark)', padding: '2rem', borderRadius: '6px' }}>
              <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', color: '#c5a059', fontWeight: 700, display: 'block', marginBottom: '0.5rem' }}>
                STEP 05
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#fbf8f3', marginBottom: '0.75rem' }}>
                LINGERING FINISH
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#c4b6a6', lineHeight: '1.6' }}>
                Notice the tail length after swallowing — fine single-origin cocoa leaves pleasant floral acidity for minutes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
