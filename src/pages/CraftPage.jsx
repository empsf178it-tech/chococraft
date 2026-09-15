import React, { useState } from 'react';
import { CRAFT_SECTIONS } from '../data/chococraftData';
import { ArrowRight, Flame, Thermometer, Sparkles, Sliders } from 'lucide-react';
import { getAssetUrl } from '../utils/assetHelper';

export default function CraftPage({ onNavigate }) {
  const [temperTemp, setTemperTemp] = useState(31.5); // ideal Form V temp

  const getTemperState = (temp) => {
    if (temp < 28) return { state: "UNDER-HEATED / BLOOM RISK", text: "Too cool — crystals clump irregularly causing dull surface finish.", color: "#e74c3c" };
    if (temp >= 28 && temp <= 29.5) return { state: "FORM IV CRYSTAL ZONE", text: "Soft snap with low heat stability.", color: "#e67e22" };
    if (temp >= 30.5 && temp <= 32.5) return { state: "PERFECT FORM V BETA CRYSTAL", text: "OPTIMAL: Brilliant satin gloss, acoustic snap, clean release.", color: "#2ecc71" };
    return { state: "OVER-HEATED / DE-TEMPERED", text: "Form V crystals destroyed. Requires complete re-tempering.", color: "#e74c3c" };
  };

  const temperState = getTemperState(temperTemp);

  return (
    <div style={{ paddingTop: 'var(--nav-height)', backgroundColor: 'var(--bg-dark)' }}>
      {/* Hero Section */}
      <section style={{ position: 'relative', padding: '8rem 0 6rem', textContent: 'center', overflow: 'hidden' }}>
        <img 
          src={getAssetUrl("/assets/images/7.png")} 
          alt="Molten Dark Chocolate Ribbon Pouring Continuous Tempering"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.35)' }}
        />
        <div className="hero-gradient-overlay" />

        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <span className="section-label" style={{ justifyContent: 'center' }}>ARTISAN METHODOLOGY</span>
          <h1 className="editorial-heading-lg" style={{ marginBottom: '1.5rem' }}>
            THE CRAFT<br />BEHIND THE BAR
          </h1>
          <p className="editorial-subheading" style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.4rem' }}>
            “Where raw tropical harvest meets unyielding Swiss precision.”
          </p>
        </div>
      </section>

      {/* Craft Deep Dive Sections */}
      {CRAFT_SECTIONS.map((sec, idx) => (
        <section 
          key={sec.id}
          className={idx % 2 === 1 ? 'section-cream' : ''}
          style={{ padding: '7rem 0', borderBottom: '1px solid var(--border-dark)' }}
        >
          <div className="container">
            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
                gap: '4rem', 
                alignItems: 'center' 
              }}
            >
              <div style={{ order: idx % 2 === 1 ? 2 : 1 }}>
                <span className="section-label">{sec.subtitle}</span>
                <h2 className="editorial-heading-md" style={{ marginBottom: '1.5rem' }}>
                  {sec.title}
                </h2>
                <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', color: idx % 2 === 1 ? '#9e522b' : '#c5a059', marginBottom: '1.5rem' }}>
                  {sec.heading}
                </h3>
                <p style={{ fontSize: '1rem', lineHeight: '1.8', color: idx % 2 === 1 ? 'var(--text-muted-dark)' : '#c4b6a6', marginBottom: '2rem' }}>
                  {sec.copy}
                </p>
                <blockquote 
                  style={{ 
                    borderLeft: '2px solid ' + (idx % 2 === 1 ? '#9e522b' : '#c5a059'), 
                    paddingLeft: '1.25rem', 
                    fontStyle: 'italic', 
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.1rem',
                    color: idx % 2 === 1 ? '#1e120f' : '#fbf8f3' 
                  }}
                >
                  “{sec.quote}”
                </blockquote>
              </div>

              <div style={{ order: idx % 2 === 1 ? 1 : 2, height: '440px', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
                <img 
                  src={sec.image} 
                  alt={sec.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Interactive Tempering Simulator */}
      <section style={{ padding: '7rem 0', backgroundColor: 'var(--bg-card-dark)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>INTERACTIVE SIMULATION</span>
            <h2 className="editorial-heading-md">TEMPERING PRECISION SIMULATOR</h2>
            <p style={{ color: '#c4b6a6', marginTop: '0.5rem' }}>
              Adjust the marble cooling temperature to align Form V beta crystals.
            </p>
          </div>

          <div 
            style={{ 
              backgroundColor: 'var(--bg-dark)', 
              border: '1px solid var(--border-dark)', 
              padding: '3rem', 
              borderRadius: '6px',
              textAlign: 'center' 
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <Thermometer size={28} color="#c5a059" />
              <span style={{ fontSize: '3.5rem', fontFamily: 'var(--font-serif)', color: '#fbf8f3', fontWeight: 600 }}>
                {temperTemp.toFixed(1)}°C
              </span>
            </div>

            <input 
              type="range"
              min="26.0"
              max="35.0"
              step="0.1"
              value={temperTemp}
              onChange={(e) => setTemperTemp(parseFloat(e.target.value))}
              style={{
                width: '100%',
                maxWidth: '500px',
                accentColor: '#c5a059',
                marginBottom: '2rem',
                cursor: 'pointer'
              }}
            />

            <div 
              style={{ 
                padding: '1.25rem', 
                borderRadius: '4px', 
                border: `1px solid ${temperState.color}`,
                backgroundColor: `${temperState.color}15`,
                color: '#fbf8f3'
              }}
            >
              <h4 style={{ fontSize: '0.9rem', letterSpacing: '0.15em', color: temperState.color, marginBottom: '0.4rem', fontWeight: 700 }}>
                STATUS: {temperState.state}
              </h4>
              <p style={{ fontSize: '0.9rem', color: '#c4b6a6' }}>{temperState.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Swiss Atelier Refining Benchmarks */}
      <section style={{ padding: '6rem 0 7rem', backgroundColor: 'var(--bg-dark-alt)', borderTop: '1px solid var(--border-dark)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>LABORATORY STANDARDS</span>
            <h2 className="editorial-heading-md">FOUR PILLARS OF CRAFT ACCURACY</h2>
            <p style={{ fontSize: '1rem', color: '#c4b6a6', marginTop: '0.5rem', maxWidth: '650px', margin: '0.5rem auto 0' }}>
              The uncompromising metallurgical & temperature parameters strictly enforced inside our Zürich atelier.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
            <div style={{ backgroundColor: 'var(--bg-card-dark)', border: '1px solid var(--border-dark)', padding: '2rem', borderRadius: '4px', textAlign: 'center' }}>
              <span style={{ fontSize: '2.8rem', fontFamily: 'var(--font-serif)', color: '#c5a059', display: 'block', fontWeight: 700, marginBottom: '0.5rem' }}>
                14 µm
              </span>
              <h4 style={{ fontSize: '0.8rem', letterSpacing: '0.15em', color: '#fbf8f3', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 700 }}>
                PARTICLE FINENESS
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#c4b6a6', lineHeight: '1.6' }}>
                Grinding cocoa mass below the human tongue perception threshold (18 microns) for absolute silkiness.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--bg-card-dark)', border: '1px solid var(--border-dark)', padding: '2rem', borderRadius: '4px', textAlign: 'center' }}>
              <span style={{ fontSize: '2.8rem', fontFamily: 'var(--font-serif)', color: '#c5a059', display: 'block', fontWeight: 700, marginBottom: '0.5rem' }}>
                72 HRS
              </span>
              <h4 style={{ fontSize: '0.8rem', letterSpacing: '0.15em', color: '#fbf8f3', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 700 }}>
                STONE CONCHING
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#c4b6a6', lineHeight: '1.6' }}>
                Continuous granite roller aeration to eliminate harsh volatiles while preserving delicate terroir florals.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--bg-card-dark)', border: '1px solid var(--border-dark)', padding: '2rem', borderRadius: '4px', textAlign: 'center' }}>
              <span style={{ fontSize: '2.8rem', fontFamily: 'var(--font-serif)', color: '#c5a059', display: 'block', fontWeight: 700, marginBottom: '0.5rem' }}>
                31.5°C
              </span>
              <h4 style={{ fontSize: '0.8rem', letterSpacing: '0.15em', color: '#fbf8f3', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 700 }}>
                FORM V TEMPERING
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#c4b6a6', lineHeight: '1.6' }}>
                Exact thermal curve locking in acoustic snap, heat stability up to 24°C, and brilliant satin reflection.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--bg-card-dark)', border: '1px solid var(--border-dark)', padding: '2rem', borderRadius: '4px', textAlign: 'center' }}>
              <span style={{ fontSize: '2.8rem', fontFamily: 'var(--font-serif)', color: '#c5a059', display: 'block', fontWeight: 700, marginBottom: '0.5rem' }}>
                100%
              </span>
              <h4 style={{ fontSize: '0.8rem', letterSpacing: '0.15em', color: '#fbf8f3', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 700 }}>
                PURE COCOA BUTTER
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#c4b6a6', lineHeight: '1.6' }}>
                Zero palm oil, soy lecithin, or artificial emulsifiers — pure unadulterated cocoa butter extraction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Banner */}
      <section 
        style={{ 
          position: 'relative', 
          padding: '8rem 0', 
          textAlign: 'center',
          overflow: 'hidden' 
        }}
      >
        <img 
          src={getAssetUrl("/assets/images/1.png")} 
          alt="Macro Chocolate Shards" 
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.3)' }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <h2 className="editorial-heading-lg" style={{ marginBottom: '2rem' }}>
            FROM COCOA TO CRAFT.
          </h2>
          <button 
            onClick={() => onNavigate('collection')}
            className="btn-primary"
          >
            DISCOVER THE RESULT <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
