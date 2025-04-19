import React, { useState } from 'react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({ 
  children, 
  href, 
  className = ""
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <a
      href={href}
      className={`${className} relative overflow-hidden transition-all duration-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-10">{children}</span>
      <span 
        className={`absolute inset-0 bg-white/10 transform origin-left transition-transform duration-300 ease-out ${
          isHovered ? 'scale-x-100' : 'scale-x-0'
        }`} 
      />
    </a>
  );
};