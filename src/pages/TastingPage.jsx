import React, { useState } from 'react';
import { TASTING_GUIDE, PRODUCTS } from '../data/chococraftData';
import { Sparkles, Eye, Wind, Disc, Smile, Award, ArrowRight } from 'lucide-react';
import { getAssetUrl } from '../utils/assetHelper';

export default function TastingPage({ onSelectProduct, onNavigate }) {
  const [activeRitualStep, setActiveRitualStep] = useState(0);
  const [prefCocoa, setPrefCocoa] = useState(70);

  const matchedProduct =
    PRODUCTS.find(p => p.cocoaPercent >= prefCocoa - 5 && p.cocoaPercent <= prefCocoa + 10) ||
    PRODUCTS[0];

  const getStepIcon = (idx) => {
    switch (idx) {
      case 0: return <Eye size={22} color="#c5a059" />;
      case 1: return <Wind size={22} color="#c5a059" />;
      case 2: return <Disc size={22} color="#c5a059" />;
      case 3: return <Smile size={22} color="#c5a059" />;
      case 4: return <Award size={22} color="#c5a059" />;
      default: return <Sparkles size={22} color="#c5a059" />;
    }
  };

  const sensorySteps = [
    { step: '01', title: 'VISUAL LUSTRE',   desc: 'Examine under natural light for a satin sheen and uniform deep dark hue with zero surface clouding.' },
    { step: '02', title: 'ACOUSTIC SNAP',   desc: 'Break a piece close to your ear. A crisp, clean acoustic snap signals ideal Form V crystal structure.' },
    { step: '03', title: 'AROMA RELEASE',   desc: 'Gently rub between fingers to warm the cocoa butter, inhaling top notes of red fruit, spice, or roasted nut.' },
    { step: '04', title: 'PALATE MELT',     desc: 'Let the chocolate rest on your tongue without chewing. Allow pure body heat to release mid-palate complexity.' },
    { step: '05', title: 'LINGERING FINISH',desc: 'Notice the tail length after swallowing — fine single-origin cocoa leaves pleasant floral acidity for minutes.' },
  ];

  return (
    <div style={{ paddingTop: 'var(--nav-height)', backgroundColor: 'var(--bg-dark)' }}>

      {/* ── Hero ── */}
      <section style={{ position: 'relative', padding: '8rem 0 6rem', textAlign: 'center', overflow: 'hidden' }}>
        <img
          src={getAssetUrl('/assets/images/12.png')}
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
            "Train your palate to identify volatile aromatics, acoustics, and lingering cocoa finishes."
          </p>
        </div>
      </section>

      {/* ── 5-Step Ritual ── */}
      <section style={{ padding: '7rem 0', backgroundColor: 'var(--bg-dark-alt)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>THE 5-STEP RITUAL</span>
            <h2 className="editorial-heading-md">CHOCOLATE TASTING GUIDE</h2>
          </div>

          {/* Tab strip — wraps on mobile */}
          <div className="ritual-tabs">
            {TASTING_GUIDE.ritual.map((step, idx) => (
              <button
                key={step.step}
                onClick={() => setActiveRitualStep(idx)}
                className={`ritual-tab-btn${activeRitualStep === idx ? ' active' : ''}`}
              >
                {step.step}. {step.name}
              </button>
            ))}
          </div>

          {/* Detail card */}
          <div className="ritual-card">
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

              <div className="ritual-card-nav">
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

            <div className="ritual-card-image">
              <img
                src={getAssetUrl(
                  ['/assets/images/12.png', '/assets/images/12.png', '/assets/images/13.png', '/assets/images/2.png', '/assets/images/15.png'][activeRitualStep] || '/assets/images/12.png'
                )}
                alt={TASTING_GUIDE.ritual[activeRitualStep].name}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Flavour & Texture Categories ── */}
      <section style={{ padding: '7rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>AROMATIC TAXONOMY</span>
            <h2 className="editorial-heading-md">FLAVOUR &amp; TEXTURE CATEGORIES</h2>
          </div>

          <div className="flavour-grid">
            {TASTING_GUIDE.categories.map((cat) => (
              <div
                key={cat.title}
                style={{ backgroundColor: 'var(--bg-dark-alt)', border: '1px solid var(--border-dark)', padding: '2.5rem', borderRadius: '4px' }}
              >
                <h3 className="editorial-heading-md" style={{ fontSize: '1.8rem', color: '#c5a059', marginBottom: '1.5rem', borderBottom: '1px solid rgba(197,160,89,0.2)', paddingBottom: '0.75rem' }}>
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

      {/* ── Palate Match ── */}
      <section className="section-cream" style={{ padding: '7rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>PERSONALIZED MATCHING</span>
            <h2 className="editorial-heading-md">CHOCOLATE PALATE MATCH</h2>
            <p style={{ color: 'var(--text-muted-dark)', marginTop: '0.5rem' }}>
              Select your preferred cocoa intensity to discover your ideal CHOCOCRAFT bar.
            </p>
          </div>

          <div style={{ backgroundColor: '#fff', border: '1px solid var(--border-cream)', padding: '3rem', borderRadius: '6px', boxShadow: '0 15px 35px rgba(0,0,0,0.06)' }}>
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#1e120f', fontWeight: 700, marginBottom: '0.75rem' }}>
                PREFERRED COCOA INTENSITY: {prefCocoa}%
              </label>
              <input
                type="range" min="45" max="85" step="5"
                value={prefCocoa}
                onChange={(e) => setPrefCocoa(parseInt(e.target.value))}
                style={{ width: '100%', accentColor: '#9e522b' }}
              />
            </div>

            <div className="palate-match-grid">
              <img src={matchedProduct.image} alt={matchedProduct.name} className="palate-match-img" />
              <div>
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', color: '#9e522b', fontWeight: 700 }}>RECOMMENDED SELECTION</span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#1e120f' }}>{matchedProduct.name}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted-dark)', margin: '0.4rem 0 1rem' }}>{matchedProduct.shortDesc}</p>
                <button onClick={() => onSelectProduct(matchedProduct)} className="btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.75rem' }}>
                  VIEW PRODUCT SPECS <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5-Step Sensory Protocol ── */}
      <section style={{ padding: '6rem 0 8rem', backgroundColor: 'var(--bg-dark)', borderTop: '1px solid var(--border-dark)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>CHOCOLATIER PROTOCOL</span>
            <h2 className="editorial-heading-md">THE 5-STEP SENSORY RITUAL</h2>
            <p style={{ fontSize: '1rem', color: '#c4b6a6', maxWidth: '650px', margin: '0.5rem auto 0' }}>
              How to taste single-origin chocolate like a professional Swiss chocolate judge.
            </p>
          </div>

          <div className="sensory-grid">
            {sensorySteps.map((item) => (
              <div key={item.step} className="sensory-card">
                <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', color: '#c5a059', fontWeight: 700, display: 'block', marginBottom: '0.5rem' }}>
                  STEP {item.step}
                </span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#fbf8f3', marginBottom: '0.75rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#c4b6a6', lineHeight: '1.6' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
