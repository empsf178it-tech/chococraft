import React, { useState } from 'react';
import { ArrowUp, Send, Check } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Info Column */}
          <div>
            <h2 className="footer-brand-title">CHOCOCRAFT</h2>
            <p className="footer-tagline">CRAFTED FROM COCOA. CREATED FOR INDULGENCE.</p>
            <p style={{ fontSize: '0.85rem', color: '#c4b6a6', maxWidth: '360px', lineHeight: '1.7', marginBottom: '1.25rem' }}>
              An independent artisan chocolate house dedicated to single-origin cocoa purity, traditional stone grinding, and uncompromising luxury craftsmanship.
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <a href="#instagram" onClick={(e) => e.preventDefault()} className="social-icon-btn" aria-label="Instagram">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#facebook" onClick={(e) => e.preventDefault()} className="social-icon-btn" aria-label="Facebook">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#twitter" onClick={(e) => e.preventDefault()} className="social-icon-btn" aria-label="Twitter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                </svg>
              </a>
              <a href="#youtube" onClick={(e) => e.preventDefault()} className="social-icon-btn" aria-label="YouTube">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="footer-col-title">EXPLORE</h3>
            <ul className="footer-links">
              <li><a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Home</a></li>
              <li><a href="#collection" onClick={(e) => { e.preventDefault(); onNavigate('collection'); }}>The Collection</a></li>
              <li><a href="#craft" onClick={(e) => { e.preventDefault(); onNavigate('craft'); }}>The Craft</a></li>
              <li><a href="#origins" onClick={(e) => { e.preventDefault(); onNavigate('origins'); }}>Cocoa Origins</a></li>
              <li><a href="#tasting" onClick={(e) => { e.preventDefault(); onNavigate('tasting'); }}>Tasting Room</a></li>
            </ul>
          </div>

          {/* Heritage Column */}
          <div>
            <h3 className="footer-col-title">HOUSES</h3>
            <ul className="footer-links">
              <li><span style={{ color: '#c4b6a6' }}>Atelier Esmeraldas — Ecuador</span></li>
              <li><span style={{ color: '#c4b6a6' }}>Salon Sambirano — Madagascar</span></li>
              <li><span style={{ color: '#c4b6a6' }}>Factory & Lab — Zürich</span></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); onNavigate('about'); }}>About Our Heritage</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>Gifting & Private Enquiries</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="footer-col-title">THE CHOCOLATE GAZETTE</h3>
            <p style={{ fontSize: '0.8rem', color: '#c4b6a6', marginBottom: '1rem' }}>
              Receive seasonal harvest announcements and invitation-only tasting releases.
            </p>
            {subscribed ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#c5a059', fontSize: '0.85rem', padding: '0.75rem', backgroundColor: 'rgba(197, 160, 89, 0.1)', border: '1px solid rgba(197, 160, 89, 0.3)', borderRadius: '2px' }}>
                <Check size={16} /> Welcome to the CHOCOCRAFT Journal.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address..."
                  required
                  style={{
                    flex: 1,
                    backgroundColor: 'rgba(18, 10, 8, 0.8)',
                    border: '1px solid rgba(197, 160, 89, 0.3)',
                    color: '#fbf8f3',
                    padding: '0.7rem 0.9rem',
                    fontSize: '0.8rem',
                    borderRadius: '2px',
                    outline: 'none'
                  }}
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  style={{
                    backgroundColor: '#c5a059',
                    color: '#120a08',
                    border: 'none',
                    padding: '0.7rem 1rem',
                    borderRadius: '2px',
                    cursor: 'pointer'
                  }}
                >
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Legal & Back to Top */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} CHOCOCRAFT S.A. All rights reserved. Artisan Luxury Chocolate.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span style={{ color: '#6e5e54' }}>Crafted with passion in Zürich & Paris</span>
            <button
              onClick={scrollToTop}
              style={{
                background: 'none',
                border: '1px solid rgba(197, 160, 89, 0.4)',
                color: '#c5a059',
                padding: '0.4rem 0.75rem',
                borderRadius: '2px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.75rem',
                cursor: 'pointer'
              }}
            >
              TOP <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
