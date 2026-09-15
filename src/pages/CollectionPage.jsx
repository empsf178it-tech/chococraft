import React, { useState } from 'react';
import { PRODUCTS } from '../data/chococraftData';
import { ArrowRight, Filter, Sparkles } from 'lucide-react';

export default function CollectionPage({ onSelectProduct, setIsHoveringProduct }) {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const categories = ['ALL', 'Single Origin Dark', 'Praline & Nuts', 'Infused & Salt', 'Luxury Gift Sets'];

  const filteredProducts = activeFilter === 'ALL' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.type.toLowerCase().includes(activeFilter.toLowerCase()) || p.type === activeFilter);

  return (
    <div style={{ paddingTop: 'var(--nav-height)', backgroundColor: 'var(--bg-dark)' }}>
      {/* Collection Hero */}
      <section style={{ padding: '6rem 0 4rem', textAlign: 'center', backgroundColor: 'var(--bg-dark-alt)', borderBottom: '1px solid var(--border-dark)' }}>
        <div className="container">
          <span className="section-label" style={{ justifyContent: 'center' }}>OUR ARCHIVE OF FLAVOUR</span>
          <h1 className="editorial-heading-lg" style={{ marginBottom: '1rem' }}>THE COLLECTION</h1>
          <p className="editorial-subheading" style={{ fontSize: '1.4rem' }}>
            “Chocolate made for slow moments.”
          </p>
        </div>
      </section>

      {/* Filter Tabs & Catalogue Grid */}
      <section style={{ padding: '5rem 0 8rem' }}>
        <div className="container">
          {/* Category Filter Tabs */}
          <div 
            style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '1rem', 
              flexWrap: 'wrap', 
              marginBottom: '4rem' 
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  backgroundColor: activeFilter === cat ? '#c5a059' : 'transparent',
                  color: activeFilter === cat ? '#120a08' : '#fbf8f3',
                  border: '1px solid ' + (activeFilter === cat ? '#c5a059' : 'rgba(197, 160, 89, 0.3)'),
                  padding: '0.65rem 1.4rem',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="catalogue-grid">
            {filteredProducts.map((product) => (
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
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.7rem', color: '#c5a059', letterSpacing: '0.15em', fontWeight: 600 }}>
                      {product.origin}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#c4b6a6' }}>{product.cocoaPercent}% COCOA</span>
                  </div>

                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-tagline">{product.tagline}</p>
                  <p className="product-desc">{product.shortDesc}</p>

                  <div className="tasting-notes-pills">
                    {product.tastingNotes.map((note, idx) => (
                      <span key={idx} className="note-pill">✦ {note}</span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid rgba(197, 160, 89, 0.15)' }}>
                    <span style={{ fontSize: '0.75rem', color: '#6e5e54' }}>{product.weight}</span>
                    <span style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: '#c5a059', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      EXPLORE DETAILS <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: Sommelier Pairing Guide */}
      <section style={{ padding: '6rem 0 8rem', backgroundColor: 'var(--bg-card-dark)', borderTop: '1px solid var(--border-dark)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>HAUTE CHOCOLATERIE RITUALS</span>
            <h2 className="editorial-heading-md">THE ART OF PAIRING</h2>
            <p style={{ fontSize: '1rem', color: '#c4b6a6', marginTop: '0.5rem', maxWidth: '650px', margin: '0.5rem auto 0' }}>
              Curated harmonisation notes from our Master Sommelier to elevate your tasting experience.
            </p>
          </div>

          <div className="centered-cards-grid">
            <div className="pairing-card">
              <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: '#c5a059', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                PAIRING NO. 01 · SINGLE MALT
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#fbf8f3', marginBottom: '1rem' }}>
                Esmeraldas 85% & Islay Whisky
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#c4b6a6', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                The deep cocoa tannins and earthy peat notes of 85% Ecuador cocoa melt in harmony with the smoky, oak finish of an 18-year Single Malt.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#c5a059', fontSize: '0.8rem', fontWeight: 600 }}>
                ✦ RECOMMENDED SERVE: Neat in Glencairn Glass
              </div>
            </div>

            <div className="pairing-card">
              <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: '#c5a059', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                PAIRING NO. 02 · GRAND CRU COFFEE
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#fbf8f3', marginBottom: '1rem' }}>
                Sambirano 72% & Yirgacheffe
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#c4b6a6', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Madagascan natural red berry acidity mirrors the floral bergamot notes of light-roast washed Ethiopian espresso.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#c5a059', fontSize: '0.8rem', fontWeight: 600 }}>
                ✦ RECOMMENDED SERVE: 90°C Pour-Over Drip
              </div>
            </div>

            <div className="pairing-card">
              <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: '#c5a059', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                PAIRING NO. 03 · BOTANICAL TEA
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#fbf8f3', marginBottom: '1rem' }}>
                Fleur de Sel & Aged Pu-erh
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#c4b6a6', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Brittany sea salt and slow-roasted butter caramel find balance against the deep woodiness and velvety body of fermented black tea.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#c5a059', fontSize: '0.8rem', fontWeight: 600 }}>
                ✦ RECOMMENDED SERVE: Gongfu Tea Infusion
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
