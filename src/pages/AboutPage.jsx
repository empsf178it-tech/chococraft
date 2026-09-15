import React from 'react';
import { ShieldCheck, Sparkles, Compass, Heart, Award, ArrowRight } from 'lucide-react';

export default function AboutPage({ onNavigate }) {
  const values = [
    {
      title: "QUALITY",
      subtitle: "Uncompromising Standards",
      desc: "We source exclusively single-origin heirloom cacao beans grown without synthetic pesticides or forced monoculture harvest."
    },
    {
      title: "CRAFT",
      subtitle: "Patience over Speed",
      desc: "Granite stone wheel grinding for up to 72 hours, hand-tempering on cold marble, and individual bonbon inspection."
    },
    {
      title: "ORIGIN",
      subtitle: "Terroir Integrity",
      desc: "Respecting the natural bio-diversity, volcanic soils, and micro-climates of Ecuador, Ghana, and Madagascar."
    },
    {
      title: "BALANCE",
      subtitle: "Harmonious Flavor Math",
      desc: "Restraining added sugar to let the natural fruit esters, cocoa bitterness, and aromatic fats sing in symphony."
    }
  ];

  return (
    <div style={{ paddingTop: 'var(--nav-height)', backgroundColor: 'var(--bg-dark)' }}>
      {/* Hero Section */}
      <section style={{ position: 'relative', padding: '8rem 0 6rem', textAlign: 'center', overflow: 'hidden' }}>
        <img 
          src="/assets/images/14.png" 
          alt="Vintage Swiss Chocolate Atelier Workbench in Zürich" 
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.35)' }}
        />
        <div className="hero-gradient-overlay" />

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <span className="section-label" style={{ justifyContent: 'center' }}>OUR HERITAGE STORY</span>
          <h1 className="editorial-heading-lg" style={{ marginBottom: '1.5rem' }}>
            A LOVE LETTER<br />TO CHOCOLATE.
          </h1>
          <p className="editorial-subheading" style={{ maxWidth: '650px', margin: '0 auto', fontSize: '1.4rem' }}>
            “Founded on the belief that chocolate is not candy — it is an ancient, noble agricultural art form.”
          </p>
        </div>
      </section>

      {/* Brand Story Editorial Sections */}
      <section style={{ padding: '7rem 0' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          {/* OUR BEGINNING */}
          <div style={{ marginBottom: '5rem' }}>
            <span className="section-label">CHAPTER 01</span>
            <h2 className="editorial-heading-md" style={{ marginBottom: '1.5rem' }}>OUR BEGINNING</h2>
            <p style={{ fontSize: '1.1rem', color: '#c4b6a6', lineHeight: '1.9', marginBottom: '1.5rem' }}>
              CHOCOCRAFT was born out of frustration with industrialized chocolate manufacturing — where cocoa butter is stripped away, synthetic vanillin is substituted for real vanilla pods, and excess refined sugar masks poor quality cocoa beans.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#c4b6a6', lineHeight: '1.9' }}>
              In 2018, our master chocolatiers set up a micro-atelier in Zürich equipped with traditional granite melangeurs and direct trade partnerships in Esmeraldas, Ecuador. Our mandate was simple: restore chocolate to its rightful place among fine wines and single-origin specialty coffees.
            </p>
          </div>

          {/* OUR PHILOSOPHY */}
          <div style={{ marginBottom: '5rem', padding: '3.5rem', backgroundColor: 'var(--bg-card-dark)', border: '1px solid var(--border-dark)', borderRadius: '6px' }}>
            <span className="section-label">CHAPTER 02</span>
            <h2 className="editorial-heading-md" style={{ marginBottom: '1.5rem' }}>OUR PHILOSOPHY</h2>
            <blockquote style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: '#c5a059', fontStyle: 'italic', lineHeight: '1.5', marginBottom: '1.5rem' }}>
              “Quality over quantity. We produce in micro-batches of no more than 100 kilograms to ensure every single bar receives meticulous thermal monitoring.”
            </blockquote>
            <p style={{ fontSize: '1rem', color: '#c4b6a6', lineHeight: '1.8' }}>
              We never use palm oil, soy lecithin, artificial flavorings, or chemical alkali processing (Dutching). Every bar is a pure reflection of bean origin, cane sugar, organic cocoa butter, and time.
            </p>
          </div>

          {/* OUR INGREDIENTS & CRAFT */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <div>
              <span className="section-label">CHAPTER 03</span>
              <h3 className="editorial-heading-md" style={{ fontSize: '2rem', marginBottom: '1rem' }}>OUR INGREDIENTS</h3>
              <p style={{ fontSize: '1rem', color: '#c4b6a6', lineHeight: '1.8' }}>
                From hand-harvested Maldon flake sea salt to IGP Piedmont hazelnuts and authentic Tahitian vanilla pods, we select only the finest natural raw materials.
              </p>
            </div>
            <div>
              <span className="section-label">CHAPTER 04</span>
              <h3 className="editorial-heading-md" style={{ fontSize: '2rem', marginBottom: '1rem' }}>OUR CRAFT</h3>
              <p style={{ fontSize: '1rem', color: '#c4b6a6', lineHeight: '1.8' }}>
                Combining old-world Swiss stone-wheel grinding with contemporary thermal profiling, our chocolatiers bridges three centuries of chocolate history.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Master Chocolatiers Showcase */}
      <section style={{ padding: '6rem 0 7rem', backgroundColor: 'var(--bg-dark)', borderTop: '1px solid var(--border-dark)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>CRAFT GUARDIANS</span>
            <h2 className="editorial-heading-md">MEET OUR MASTER CHOCOLATIERS</h2>
            <p style={{ fontSize: '1rem', color: '#c4b6a6', marginTop: '0.5rem', maxWidth: '650px', margin: '0.5rem auto 0' }}>
              The visionaries, agronomists, and roasters behind CHOCOCRAFT’s unyielding Swiss-Parisian standards.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
            <div style={{ backgroundColor: 'var(--bg-card-dark)', border: '1px solid var(--border-dark)', padding: '2.5rem', borderRadius: '6px' }}>
              <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: '#c5a059', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                FOUNDER & MASTER CHOCOLATIER
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#fbf8f3', marginBottom: '0.5rem' }}>
                Laurent von Berg
              </h3>
              <p style={{ fontSize: '0.8rem', color: '#c5a059', letterSpacing: '0.1em', marginBottom: '1.25rem', fontWeight: 600 }}>
                ZÜRICH ATELIER · 30+ YRS CRAFT
              </p>
              <p style={{ fontSize: '0.9rem', color: '#c4b6a6', lineHeight: '1.7' }}>
                Pioneered CHOCOCRAFT’s signature low-velocity granite stone conching process to lock in pure cacao terroir aromatics.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--bg-card-dark)', border: '1px solid var(--border-dark)', padding: '2.5rem', borderRadius: '6px' }}>
              <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: '#c5a059', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                DIRECT TRADE BOTANIST
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#fbf8f3', marginBottom: '0.5rem' }}>
                Elena Vasquez
              </h3>
              <p style={{ fontSize: '0.8rem', color: '#c5a059', letterSpacing: '0.1em', marginBottom: '1.25rem', fontWeight: 600 }}>
                ESMERALDAS & SAMBIRANO COOP
              </p>
              <p style={{ fontSize: '0.9rem', color: '#c4b6a6', lineHeight: '1.7' }}>
                Leads shade-canopy agroforestry and works directly with cocoa farmers on 6-day wild yeast wooden box fermentations.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--bg-card-dark)', border: '1px solid var(--border-dark)', padding: '2.5rem', borderRadius: '6px' }}>
              <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: '#c5a059', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                HEAD SOMMELIER & FLAVOUR ARTIST
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#fbf8f3', marginBottom: '0.5rem' }}>
                Antoine Mercier
              </h3>
              <p style={{ fontSize: '0.8rem', color: '#c5a059', letterSpacing: '0.1em', marginBottom: '1.25rem', fontWeight: 600 }}>
                PARIS SALON · FLAVOUR ARCHITECT
              </p>
              <p style={{ fontSize: '0.9rem', color: '#c4b6a6', lineHeight: '1.7' }}>
                Former Paris grand-patisserie chef designing rare botanicals, Fleur de Sel caramel infusions, and private tasting pairings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND VALUES GRID */}
      <section className="section-cream" style={{ padding: '7rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>CORE PILLARS</span>
            <h2 className="editorial-heading-md">BRAND VALUES</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2.5rem' }}>
            {values.map((v) => (
              <div 
                key={v.title}
                style={{ 
                  backgroundColor: '#fff', 
                  padding: '2.5rem', 
                  border: '1px solid var(--border-cream)', 
                  borderRadius: '4px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.04)'
                }}
              >
                <h3 className="editorial-heading-md" style={{ fontSize: '2rem', color: '#9e522b', marginBottom: '0.25rem' }}>
                  {v.title}
                </h3>
                <h4 style={{ fontSize: '0.85rem', color: '#1e120f', letterSpacing: '0.1em', marginBottom: '1rem', fontWeight: 700 }}>
                  {v.subtitle}
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted-dark)', lineHeight: '1.6' }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <button 
              onClick={() => onNavigate('contact')}
              className="btn-primary"
            >
              CONNECT WITH OUR ATELIER <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
