import React, { useState, useEffect } from 'react';
import './PaperAirplane.scss';

const PaperAirplane = ({ imageSrc, alt = "Paper Airplane", trigger = false, direction = 'left' }) => {
  const [isFlying, setIsFlying] = useState(false);

  useEffect(() => {
    if (trigger) {
      setIsFlying(true);
      
      setTimeout(() => {
        setIsFlying(false);
      }, 2000);
    }
  }, [trigger]);

  return (
    <div className={`paper-airplane-container ${isFlying ? 'flying' : 'hidden'} ${direction}`}>
      <img src={imageSrc} alt={alt} className="airplane-image" />
    </div>
  );
};

export default PaperAirplane;