import React, { useState, useEffect } from 'react';
import './Sparkles.css';

const Sparkles = ({ count = 20, color = '#FFF' }) => {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles = Array.from({ length: count }, (_, index) => {
        const sparkleType = index % 4; // 4 different sparkle types
        const baseSize = Math.random() * 10 + 2;
        
        return {
          id: index,
          left: Math.random() * 100,
          top: Math.random() * 100,
          size: baseSize,
          delay: Math.random() * 4,
          duration: Math.random() * 3 + 1.5,
          opacity: Math.random() * 0.8 + 0.2,
          type: sparkleType,
          // Add some sparkles with special effects
          isSpecial: index % 7 === 0,
          // Add some sparkles that move in patterns
          movePattern: index % 3 === 0 ? 'circular' : index % 3 === 1 ? 'zigzag' : 'straight'
        };
      });
      setSparkles(newSparkles);
    };

    generateSparkles();
    
    // Regenerate sparkles every 10 seconds for variety
    const interval = setInterval(generateSparkles, 10000);
    
    return () => clearInterval(interval);
  }, [count]);

  const getSparkleClassName = (sparkle) => {
    let className = 'sparkle';
    
    if (sparkle.isSpecial) {
      className += ' special-sparkle';
    }
    
    if (sparkle.movePattern === 'circular') {
      className += ' circular-move';
    } else if (sparkle.movePattern === 'zigzag') {
      className += ' zigzag-move';
    }
    
    return className;
  };

  return (
    <div className="sparkles-container">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className={getSparkleClassName(sparkle)}
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            animationDelay: `${sparkle.delay}s`,
            animationDuration: `${sparkle.duration}s`,
            opacity: sparkle.opacity,
            backgroundColor: color,
            // Add custom properties for special effects
            '--sparkle-size': `${sparkle.size}px`,
            '--sparkle-delay': `${sparkle.delay}s`,
            '--sparkle-duration': `${sparkle.duration}s`
          }}
        />
      ))}
      
      {/* Add some floating sparkle dust particles */}
      {Array.from({ length: Math.floor(count / 3) }, (_, index) => (
        <div
          key={`dust-${index}`}
          className="sparkle-dust"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 4 + 3}s`
          }}
        />
      ))}
    </div>
  );
};

export default Sparkles;
