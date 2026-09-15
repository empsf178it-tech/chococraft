import React, { useState } from 'react';
import { ORIGINS } from '../data/chococraftData';
import { MapPin, Globe, Compass, Sun, Mountain, Calendar, ArrowRight } from 'lucide-react';

export default function OriginsPage({ onNavigate }) {
  const [selectedOrigin, setSelectedOrigin] = useState(ORIGINS[0]);

  return (
    <div style={{ paddingTop: 'var(--nav-height)', backgroundColor: 'var(--bg-dark)' }}>
      {/* Hero Section */}
      <section style={{ position: 'relative', padding: '8rem 0 6rem', textAlign: 'center', overflow: 'hidden' }}>
        <img 
          src="/assets/images/9.png" 
          alt="Fresh Cocoa Pods on Cacao Tree in Rainforest" 
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.4)' }}
        />
        <div className="hero-gradient-overlay" />

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <span className="section-label" style={{ justifyContent: 'center' }}>TERROIR & ETHICAL HARVEST</span>
          <h1 className="editorial-heading-lg" style={{ marginBottom: '1.5rem' }}>
            EVERY BAR<br />HAS AN ORIGIN.
          </h1>
          <p className="editorial-subheading" style={{ maxWidth: '650px', margin: '0 auto', fontSize: '1.3rem' }}>
            “Soil, rainfall, and shade trees leave an indelible mark on cocoa flavor profiles.”
          </p>
        </div>
      </section>

      {/* Origin Story Cards Grid */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>SINGLE ORIGIN TERROIR</span>
            <h2 className="editorial-heading-md">THE THREE TERROIR HOUSES</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {ORIGINS.map((origin) => (
              <div
                key={origin.id}
                onClick={() => setSelectedOrigin(origin)}
                style={{
                  backgroundColor: selectedOrigin.id === origin.id ? 'var(--bg-card-dark)' : 'var(--bg-dark-alt)',
                  border: '1px solid ' + (selectedOrigin.id === origin.id ? '#c5a059' : 'rgba(197, 160, 89, 0.2)'),
                  padding: '2rem',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  position: 'relative'
                }}
              >
                {origin.image && (
                  <div style={{ height: '180px', borderRadius: '4px', overflow: 'hidden', marginBottom: '1.5rem' }}>
                    <img src={origin.image} alt={origin.country} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                )}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: '#c5a059', fontWeight: 700 }}>
                    {origin.coordinates}
                  </span>
                  <MapPin size={18} color="#c5a059" />
                </div>

                <h3 className="editorial-heading-md" style={{ fontSize: '2.2rem', marginBottom: '0.25rem' }}>
                  {origin.country}
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#c5a059', letterSpacing: '0.1em', marginBottom: '1.25rem', fontWeight: 600 }}>
                  {origin.region} · {origin.profile}
                </p>

                <p style={{ fontSize: '0.9rem', color: '#c4b6a6', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                  {origin.desc}
                </p>

                <div className="tasting-notes-pills" style={{ marginBottom: '1.5rem' }}>
                  {origin.notes.map((n, i) => (
                    <span key={i} className="note-pill">✦ {n}</span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.75rem', color: '#6e5e54', borderTop: '1px solid rgba(197, 160, 89, 0.15)', paddingTop: '1rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Mountain size={14} color="#c5a059" /> {origin.elevation}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Calendar size={14} color="#c5a059" /> {origin.harvest}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Large Cocoa Pod Section */}
      <section className="section-cream" style={{ padding: '7rem 0' }}>
        <div className="container">
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
              gap: '4rem', 
              alignItems: 'center' 
            }}
          >
            <div>
              <span className="section-label">AGRICULTURAL HERITAGE</span>
              <h2 className="editorial-heading-lg" style={{ marginBottom: '1.5rem', lineHeight: '1.05' }}>
                BEFORE IT BECOMES CHOCOLATE,<br />
                <span style={{ fontStyle: 'italic', fontFamily: 'var(--font-serif)', color: '#9e522b' }}>IT HAS A</span> STORY.
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted-dark)', lineHeight: '1.8', marginBottom: '2rem' }}>
                Cacao trees thrive exclusively within 20 degrees north and south of the Equator under the dense shade of banana and hardwood canopy trees. Each cocoa pod takes five months to mature, holding roughly 40 seeds cradled in sweet white mucilage.
              </p>
              <button 
                onClick={() => onNavigate('tasting')}
                className="btn-primary"
              >
                EXPERIENCE THE TASTING ROOM <ArrowRight size={16} />
              </button>
            </div>

            <div style={{ height: '480px', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}>
              <img 
                src="/assets/images/10.png" 
                alt="Ripe Cocoa Pod Harvesting in Ashanti Ghana" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Direct Trade & Sustainability */}
      <section style={{ padding: '6rem 0 8rem', backgroundColor: 'var(--bg-card-dark)', borderTop: '1px solid var(--border-dark)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>ETHICAL CONSERVATION</span>
            <h2 className="editorial-heading-md">OUR DIRECT TRADE GUARANTEE</h2>
            <p style={{ fontSize: '1rem', color: '#c4b6a6', marginTop: '0.5rem', maxWidth: '650px', margin: '0.5rem auto 0' }}>
              We bypass commodity exchanges to work directly with generational cocoa guardians.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
            <div style={{ backgroundColor: 'var(--bg-dark)', border: '1px solid var(--border-dark)', padding: '2.5rem', borderRadius: '6px' }}>
              <div style={{ fontSize: '0.75rem', letterSpacing: '0.2em', color: '#c5a059', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                ✦ 100% DIRECT FAIR PREMIUM
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#fbf8f3', marginBottom: '1rem' }}>
                40% Above Market Value
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#c4b6a6', lineHeight: '1.7' }}>
                By paying 40% above fair-trade floor prices, we ensure cacao farming communities invest in healthcare, clean water, and local schools.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--bg-dark)', border: '1px solid var(--border-dark)', padding: '2.5rem', borderRadius: '6px' }}>
              <div style={{ fontSize: '0.75rem', letterSpacing: '0.2em', color: '#c5a059', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                ✦ SHADE-GROWN CANOPY
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#fbf8f3', marginBottom: '1rem' }}>
                Rainforest Agroforestry
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#c4b6a6', lineHeight: '1.7' }}>
                Our cacao pods grow beneath native mahogany and banana trees, preserving soil moisture and sheltering endangered rainforest birds.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--bg-dark)', border: '1px solid var(--border-dark)', padding: '2.5rem', borderRadius: '6px' }}>
              <div style={{ fontSize: '0.75rem', letterSpacing: '0.2em', color: '#c5a059', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                ✦ FULL BATCH TRACEABILITY
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#fbf8f3', marginBottom: '1rem' }}>
                From Farm GPS to Bar
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#c4b6a6', lineHeight: '1.7' }}>
                Every single chocolate bar carries a unique micro-lot batch number linking back to the exact cooperative harvest date and fermentation logs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
