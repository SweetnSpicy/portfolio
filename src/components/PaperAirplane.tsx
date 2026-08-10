import { useState, useEffect } from 'react';
import './PaperAirplane.scss';

interface PaperAirplaneProps {
  imageSrc: string;
  alt?: string;
  trigger?: boolean;
  direction?: 'left' | 'right';
}

const PaperAirplane = ({ imageSrc, alt = "Paper Airplane", trigger = false, direction = 'left' }: PaperAirplaneProps) => {
  const [isFlying, setIsFlying] = useState(false);

  useEffect(() => {
    if (!trigger) return;

    const start = setTimeout(() => setIsFlying(true), 0);
    const stop = setTimeout(() => setIsFlying(false), 2000);

    return () => {
      clearTimeout(start);
      clearTimeout(stop);
    };
  }, [trigger]);

  return (
    <div className={`paper-airplane-container ${isFlying ? 'flying' : 'hidden'} ${direction}`}>
      <img src={imageSrc} alt={alt} className="airplane-image" />
    </div>
  );
};

export default PaperAirplane;
