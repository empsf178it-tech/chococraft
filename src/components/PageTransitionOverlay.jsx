import React, { useEffect, useState } from 'react';

export default function PageTransitionOverlay({ isAnimating }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isAnimating) {
      setVisible(true);
    } else {
      const timer = setTimeout(() => setVisible(false), 600);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  if (!visible && !isAnimating) return null;

  return (
    <div className={`page-transition-overlay ${isAnimating ? 'animating' : ''}`}>
      <div style={{ textAlign: 'center' }}>
        <h2 className="page-transition-logo">CHOCOCRAFT</h2>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.3em', color: '#c4b6a6', marginTop: '0.5rem' }}>
          CRAFTED FROM COCOA
        </p>
      </div>
    </div>
  );
}
