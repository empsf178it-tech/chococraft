import React, { useEffect, useState } from 'react';

export default function CustomCursor({ isHoveringProduct }) {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [followerPos, setFollowerPos] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only activate on desktop devices
    if (window.innerWidth < 1024) return;

    const handleMouseMove = (e) => {
      setIsVisible(true);
      setPos({ x: e.clientX, y: e.clientY });
      
      // Smooth follower lerp
      setTimeout(() => {
        setFollowerPos({ x: e.clientX, y: e.clientY });
      }, 50);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div 
        className={`custom-cursor ${isHoveringProduct ? 'active' : ''}`}
        style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
      />
      <div 
        className="custom-cursor-follower"
        style={{ left: `${followerPos.x}px`, top: `${followerPos.y}px` }}
      />
    </>
  );
}
