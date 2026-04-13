

import MascotImage from '@/assets/mascot.png';

interface AnimatedMascotProps {
  className?: string;
  size?: number;
  title?: string;
}

export function AnimatedMascot({ className = '', size = 40, title }: AnimatedMascotProps) {
  return (
    <div 
      className={`inline-flex items-center justify-center ${className}`} 
      style={{ width: size, height: size }}
      title={title}
    >
      <img
        src={MascotImage}
        alt={title || "GitDocs Mascot"}
        className="mascot-image"
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'contain',
          animation: 'var(--floating-animation, ghostFloat 4s ease-in-out infinite)',
          filter: 'invert(1) opacity(0.85)'
        }}
      />
    </div>
  );
}
