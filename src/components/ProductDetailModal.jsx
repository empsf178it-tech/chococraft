import React, { useState } from 'react';
import { X, Sparkles, Check, Heart, ShieldCheck } from 'lucide-react';

export default function ProductDetailModal({ product, onClose }) {
  const [reserved, setReserved] = useState(false);

  if (!product) return null;

  const handleReserve = () => {
    setReserved(true);
    setTimeout(() => setReserved(false), 4000);
  };

  return (
    <div className="modal-backdrop" onClick={onClose} aria-modal="true" role="dialog">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Close Product Detail Window"
        >
          <X size={20} />
        </button>

        {/* Left Column Image */}
        <div className="modal-image-col">
          <img src={product.image} alt={product.name} />
          <div 
            style={{
              position: 'absolute',
              bottom: '1.5rem',
              left: '1.5rem',
              backgroundColor: 'rgba(18, 10, 8, 0.85)',
              backdropFilter: 'blur(8px)',
              padding: '0.6rem 1.2rem',
              border: '1px solid var(--border-dark)',
              borderRadius: '2px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <Sparkles size={16} color="#c5a059" />
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', color: '#c5a059', fontWeight: 600 }}>
              {product.type}
            </span>
          </div>
        </div>

        {/* Right Column Specifications */}
        <div className="modal-info-col">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span className="section-label" style={{ marginBottom: 0 }}>ORIGIN · {product.origin}</span>
              <span style={{ fontSize: '0.8rem', color: '#c5a059', fontWeight: 600 }}>{product.weight}</span>
            </div>

            <h2 className="editorial-heading-md" style={{ marginBottom: '0.25rem', color: '#fbf8f3' }}>
              {product.name}
            </h2>
            <p className="editorial-subheading" style={{ fontSize: '1.1rem', marginBottom: '1.25rem' }}>
              {product.tagline}
            </p>

            <p style={{ fontSize: '0.9rem', color: '#c4b6a6', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              {product.shortDesc}
            </p>

            {/* Tasting Notes */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c5a059', marginBottom: '0.75rem' }}>
                TASTING NOTES PROFILE
              </h4>
              <div className="tasting-notes-pills">
                {product.tastingNotes.map((note, idx) => (
                  <span 
                    key={idx} 
                    className="note-pill" 
                    style={{ fontSize: '0.75rem', padding: '0.35rem 0.75rem' }}
                  >
                    ✦ {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Texture & Aroma Grid */}
            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr', 
                gap: '1rem', 
                marginBottom: '1.5rem',
                backgroundColor: 'rgba(18, 10, 8, 0.5)',
                padding: '1rem',
                border: '1px solid rgba(197, 160, 89, 0.15)',
                borderRadius: '4px'
              }}
            >
              <div>
                <h5 style={{ fontSize: '0.65rem', letterSpacing: '0.15em', color: '#c5a059', marginBottom: '0.3rem' }}>
                  TEXTURE
                </h5>
                <p style={{ fontSize: '0.8rem', color: '#fbf8f3', lineHeight: '1.4' }}>{product.texture}</p>
              </div>
              <div>
                <h5 style={{ fontSize: '0.65rem', letterSpacing: '0.15em', color: '#c5a059', marginBottom: '0.3rem' }}>
                  AROMA
                </h5>
                <p style={{ fontSize: '0.8rem', color: '#fbf8f3', lineHeight: '1.4' }}>{product.aroma}</p>
              </div>
            </div>

            {/* Ingredients & Pairing */}
            <div style={{ fontSize: '0.78rem', color: '#c4b6a6', marginBottom: '1.5rem', lineHeight: '1.5' }}>
              <p><strong style={{ color: '#fbf8f3' }}>Ingredients:</strong> {product.ingredients}</p>
              <p style={{ marginTop: '0.4rem' }}><strong style={{ color: '#c5a059' }}>Suggested Pairing:</strong> {product.pairing}</p>
            </div>
          </div>

          {/* Action Row */}
          <div>
            {reserved ? (
              <div 
                style={{ 
                  backgroundColor: 'rgba(197, 160, 89, 0.15)', 
                  border: '1px solid #c5a059', 
                  color: '#c5a059', 
                  padding: '1rem', 
                  textAlign: 'center',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  borderRadius: '2px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
              >
                <Check size={18} /> SAMPLE RESERVED FOR TASTING SESSION
              </div>
            ) : (
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button 
                  onClick={handleReserve}
                  className="btn-primary" 
                  style={{ flex: 1, justifyContent: 'center' }}
                >
                  RESERVE TASTING SAMPLE
                </button>
                <button 
                  onClick={onClose}
                  className="btn-secondary"
                >
                  CLOSE
                </button>
              </div>
            )}
            <p style={{ fontSize: '0.75rem', color: '#6e5e54', textAlign: 'center', marginTop: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
              <ShieldCheck size={14} color="#c5a059" /> Single-Origin Certified · Non-GMO · Handcrafted
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
