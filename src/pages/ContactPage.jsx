import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle, Sparkles, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: 'General Enquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      // Trigger subtle luxury gold confetti celebration!
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#c5a059', '#b86d3b', '#9e522b', '#fbf8f3']
      });

      setSubmitted(true);
    }
  };

  return (
    <div style={{ paddingTop: 'var(--nav-height)', backgroundColor: 'var(--bg-dark)' }}>
      {/* Hero Section */}
      <section style={{ position: 'relative', padding: '7rem 0 5rem', textAlign: 'center', backgroundColor: 'var(--bg-dark-alt)', borderBottom: '1px solid var(--border-dark)' }}>
        <div className="container">
          <span className="section-label" style={{ justifyContent: 'center' }}>ATELIER CONCIERGE</span>
          <h1 className="editorial-heading-lg" style={{ marginBottom: '1rem' }}>
            LET'S TALK<br />CHOCOLATE.
          </h1>
          <p className="editorial-subheading" style={{ fontSize: '1.3rem' }}>
            “Whether for bespoke corporate gifting, wedding favours, or private tasting sessions.”
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section style={{ padding: '6rem 0 8rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem' }}>
            {/* Left Contact Details Placeholder Cards */}
            <div>
              <span className="section-label">DIRECT ENQUIRIES</span>
              <h2 className="editorial-heading-md" style={{ marginBottom: '2.5rem' }}>ATELIER HOUSES</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ backgroundColor: 'var(--bg-card-dark)', border: '1px solid var(--border-dark)', padding: '2rem', borderRadius: '4px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', color: '#c5a059' }}>
                    <Mail size={18} />
                    <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700 }}>GENERAL ENQUIRIES</span>
                  </div>
                  <a href="mailto:hello@chococraft.example" style={{ fontSize: '1.1rem', color: '#fbf8f3', textDecoration: 'none', fontFamily: 'var(--font-serif)' }}>
                    hello@chococraft.example
                  </a>
                  <p style={{ fontSize: '0.8rem', color: '#6e5e54', marginTop: '0.4rem' }}>For store availability and brand questions</p>
                </div>

                <div style={{ backgroundColor: 'var(--bg-card-dark)', border: '1px solid var(--border-dark)', padding: '2rem', borderRadius: '4px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', color: '#c5a059' }}>
                    <Sparkles size={18} />
                    <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700 }}>COLLABORATIONS & GIFTING</span>
                  </div>
                  <a href="mailto:studio@chococraft.example" style={{ fontSize: '1.1rem', color: '#fbf8f3', textDecoration: 'none', fontFamily: 'var(--font-serif)' }}>
                    studio@chococraft.example
                  </a>
                  <p style={{ fontSize: '0.8rem', color: '#6e5e54', marginTop: '0.4rem' }}>Bespoke wedding favours & private corporate chests</p>
                </div>

                <div style={{ backgroundColor: 'var(--bg-card-dark)', border: '1px solid var(--border-dark)', padding: '2rem', borderRadius: '4px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', color: '#c5a059' }}>
                    <Mail size={18} />
                    <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700 }}>CUSTOMER CARE</span>
                  </div>
                  <a href="mailto:care@chococraft.example" style={{ fontSize: '1.1rem', color: '#fbf8f3', textDecoration: 'none', fontFamily: 'var(--font-serif)' }}>
                    care@chococraft.example
                  </a>
                  <p style={{ fontSize: '0.8rem', color: '#6e5e54', marginTop: '0.4rem' }}>Assistance with order reservations & tasting sessions</p>
                </div>

                <div style={{ backgroundColor: 'var(--bg-card-dark)', border: '1px solid var(--border-dark)', padding: '2rem', borderRadius: '4px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', color: '#c5a059' }}>
                    <Sparkles size={18} />
                    <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700 }}>CONNECT WITH US</span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#c4b6a6', marginBottom: '1.25rem', lineHeight: '1.6' }}>
                    Follow our harvest journals, behind-the-scenes tempering videos, and exclusive tasting drops.
                  </p>
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
              </div>
            </div>

            {/* Right Contact Form */}
            <div style={{ backgroundColor: 'var(--bg-card-dark)', border: '1px solid var(--border-dark)', padding: '3rem', borderRadius: '6px' }}>
              <span className="section-label">SEND A MESSAGE</span>
              <h3 className="editorial-heading-md" style={{ fontSize: '2rem', marginBottom: '2rem' }}>CONCIERGE FORM</h3>

              {submitted ? (
                <div 
                  style={{ 
                    textAlign: 'center', 
                    padding: '3rem 1.5rem',
                    backgroundColor: 'rgba(197, 160, 89, 0.08)',
                    border: '1px solid var(--accent-gold)',
                    borderRadius: '4px'
                  }}
                >
                  <CheckCircle size={48} color="#c5a059" style={{ marginBottom: '1rem' }} />
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: '#fbf8f3', marginBottom: '0.5rem' }}>
                    MESSAGE RECEIVED
                  </h4>
                  <p style={{ fontSize: '0.95rem', color: '#c4b6a6', lineHeight: '1.6', marginBottom: '2rem' }}>
                    Thank you, {formData.name}. Our master chocolatier concierge will respond to your enquiry within 24 hours.
                  </p>
                  <button 
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', purpose: 'General Enquiry', message: '' });
                    }}
                    className="btn-secondary"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c5a059', marginBottom: '0.5rem', fontWeight: 600 }}>
                      YOUR FULL NAME *
                    </label>
                    <input 
                      type="text"
                      required
                      placeholder="e.g. Lord / Lady Harrison"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        backgroundColor: 'var(--bg-dark)',
                        border: '1px solid rgba(197, 160, 89, 0.3)',
                        color: '#fbf8f3',
                        padding: '0.85rem 1rem',
                        fontSize: '0.9rem',
                        borderRadius: '2px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c5a059', marginBottom: '0.5rem', fontWeight: 600 }}>
                      EMAIL ADDRESS *
                    </label>
                    <input 
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        backgroundColor: 'var(--bg-dark)',
                        border: '1px solid rgba(197, 160, 89, 0.3)',
                        color: '#fbf8f3',
                        padding: '0.85rem 1rem',
                        fontSize: '0.9rem',
                        borderRadius: '2px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c5a059', marginBottom: '0.5rem', fontWeight: 600 }}>
                      ENQUIRY PURPOSE
                    </label>
                    <select
                      value={formData.purpose}
                      onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                      style={{
                        width: '100%',
                        backgroundColor: 'var(--bg-dark)',
                        border: '1px solid rgba(197, 160, 89, 0.3)',
                        color: '#fbf8f3',
                        padding: '0.85rem 1rem',
                        fontSize: '0.9rem',
                        borderRadius: '2px',
                        outline: 'none'
                      }}
                    >
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Luxury Gifting & Events">Luxury Gifting & Events</option>
                      <option value="Private Tasting Reservation">Private Tasting Reservation</option>
                      <option value="Press & Media">Press & Media</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c5a059', marginBottom: '0.5rem', fontWeight: 600 }}>
                      YOUR MESSAGE *
                    </label>
                    <textarea 
                      required
                      rows={5}
                      placeholder="Tell us about your chocolate preferences or event details..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        backgroundColor: 'var(--bg-dark)',
                        border: '1px solid rgba(197, 160, 89, 0.3)',
                        color: '#fbf8f3',
                        padding: '0.85rem 1rem',
                        fontSize: '0.9rem',
                        borderRadius: '2px',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <button 
                    type="submit"
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
                  >
                    SEND MESSAGE <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Location Section */}
      <section style={{ padding: '0 0 8rem', backgroundColor: 'var(--bg-dark)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>VISIT OUR ATELIER</span>
            <h2 className="editorial-heading-md">ZÜRICH FLAGSHIP & TASTING LAB</h2>
            <p style={{ fontSize: '1rem', color: '#c4b6a6', marginTop: '0.5rem', maxWidth: '600px', margin: '0.5rem auto 0' }}>
              Experience live stone grinding, fresh ganache tempering, and bespoke tasting appointments.
            </p>
          </div>

          {/* Location Info Badges Grid */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '1.5rem', 
              marginBottom: '2.5rem' 
            }}
          >
            <div style={{ backgroundColor: 'var(--bg-card-dark)', border: '1px solid var(--border-dark)', padding: '1.5rem', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'rgba(197, 160, 89, 0.1)', border: '1px solid rgba(197, 160, 89, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c5a059', flexShrink: 0 }}>
                <MapPin size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.75rem', letterSpacing: '0.15em', color: '#c5a059', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.2rem' }}>ADDRESS</h4>
                <p style={{ fontSize: '0.9rem', color: '#fbf8f3' }}>Bahnhofstrasse 42, 8001 Zürich</p>
              </div>
            </div>

            <div style={{ backgroundColor: 'var(--bg-card-dark)', border: '1px solid var(--border-dark)', padding: '1.5rem', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'rgba(197, 160, 89, 0.1)', border: '1px solid rgba(197, 160, 89, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c5a059', flexShrink: 0 }}>
                <Clock size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.75rem', letterSpacing: '0.15em', color: '#c5a059', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.2rem' }}>HOURS</h4>
                <p style={{ fontSize: '0.9rem', color: '#fbf8f3' }}>Mon – Sat: 10:00 – 19:00</p>
              </div>
            </div>

            <div style={{ backgroundColor: 'var(--bg-card-dark)', border: '1px solid var(--border-dark)', padding: '1.5rem', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'rgba(197, 160, 89, 0.1)', border: '1px solid rgba(197, 160, 89, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c5a059', flexShrink: 0 }}>
                <Phone size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.75rem', letterSpacing: '0.15em', color: '#c5a059', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.2rem' }}>CONCIERGE PHONE</h4>
                <p style={{ fontSize: '0.9rem', color: '#fbf8f3' }}>+41 44 211 48 00</p>
              </div>
            </div>
          </div>

          {/* Map Frame Container */}
          <div 
            style={{ 
              position: 'relative', 
              borderRadius: '8px', 
              overflow: 'hidden', 
              border: '1px solid var(--border-dark)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              backgroundColor: 'var(--bg-card-dark)'
            }}
          >
            <iframe
              title="CHOCOCRAFT Zurich Atelier Google Map"
              src="https://maps.google.com/maps?q=Bahnhofstrasse%2042%20Zurich%20Switzerland&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              style={{ border: 0, display: 'block', filter: 'brightness(0.85) contrast(1.1) opacity(0.95)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Direct Directions Overlay Button */}
            <div style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem', zIndex: 10 }}>
              <a
                href="https://maps.google.com/?q=Bahnhofstrasse+42+Zurich+Switzerland"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ padding: '0.8rem 1.6rem', fontSize: '0.75rem', boxShadow: '0 8px 25px rgba(0,0,0,0.5)' }}
              >
                GET DIRECTIONS <MapPin size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
