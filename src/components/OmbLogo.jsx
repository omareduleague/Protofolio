import React from 'react';

const OmbLogo = ({ width = "100%", height = "100%", className = "" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 1000 1000" 
      width={width} 
      height={height} 
      className={className}
      style={{ backgroundColor: '#080b10' }}
    >
      <defs>
        {/* Background Grid Pattern */}
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#121824" strokeWidth="1"/>
          <circle cx="0" cy="0" r="1" fill="#1e293b"/>
        </pattern>

        {/* Glowing Filters */}
        <filter id="glow-strong" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur1" />
          <feGaussianBlur stdDeviation="15" result="blur2" />
          <feMerge>
            <feMergeNode in="blur2" />
            <feMergeNode in="blur1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="glow-subtle" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Radial Background Gradient */}
        <radialGradient id="bg-glow" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#111d2e" stopOpacity="0.8"/>
          <stop offset="60%" stopColor="#090d14" stopOpacity="0.95"/>
          <stop offset="100%" stopColor="#05070a" stopOpacity="1"/>
        </radialGradient>

        {/* Bag/Icon Gradient */}
        <linearGradient id="bag-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffbe0b"/>
          <stop offset="50%" stopColor="#ff006e"/>
          <stop offset="100%" stopColor="#8338ec"/>
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="1000" height="1000" fill="#080b10" />
      <rect width="1000" height="1000" fill="url(#grid)" />
      <circle cx="500" cy="400" r="420" fill="url(#bg-glow)" />

      {/* Outer Tech Rings & Dashed Circles */}
      <g opacity="0.35">
        <circle cx="500" cy="380" r="260" fill="none" stroke="#00f2fe" strokeWidth="1" strokeDasharray="4 8" />
        <circle cx="500" cy="380" r="230" fill="none" stroke="#3a5a40" strokeWidth="1" strokeDasharray="2 12" />
        <circle cx="500" cy="380" r="210" fill="none" stroke="#00f2fe" strokeWidth="1" strokeDasharray="80 10 30 10" />
        <circle cx="500" cy="380" r="180" fill="none" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.3"/>
        
        {/* Orbital Dots & Accents */}
        <circle cx="346" cy="233" r="3" fill="#00f2fe" />
        <circle cx="676" cy="298" r="2.5" fill="#00f2fe" />
        <circle cx="313" cy="449" r="2.5" fill="#ffb199" />
        <path d="M 262 320 A 260 260 0 0 1 280 280" fill="none" stroke="#ffb199" strokeWidth="1.5"/>
        <path d="M 720 240 A 260 260 0 0 1 740 290" fill="none" stroke="#ffb199" strokeWidth="1.5"/>
      </g>

      {/* Hexagon Wireframe */}
      <g stroke="#1a3a5c" strokeWidth="1" opacity="0.6">
        <line x1="500" y1="380" x2="500" y2="230" />
        <line x1="500" y1="380" x2="630" y2="305" />
        <line x1="500" y1="380" x2="630" y2="455" />
        <line x1="500" y1="380" x2="500" y2="530" />
        <line x1="500" y1="380" x2="370" y2="455" />
        <line x1="500" y1="380" x2="370" y2="305" />
        
        <polygon points="500,268 604,328 604,448 500,508 396,448 396,328" fill="none" stroke="#00f2fe" strokeWidth="1" strokeDasharray="3 6" opacity="0.5"/>
      </g>

      {/* Main Outer Glowing Hexagon */}
      <g filter="url(#glow-strong)">
        <line x1="500" y1="230" x2="370" y2="305" stroke="#00f5d4" strokeWidth="3.5" strokeLinecap="round"/>
        <line x1="370" y1="305" x2="370" y2="455" stroke="#00f5d4" strokeWidth="3.5" strokeLinecap="round"/>
        <line x1="370" y1="455" x2="500" y2="530" stroke="#ff9e7d" strokeWidth="3.5" strokeLinecap="round"/>
        <line x1="500" y1="530" x2="630" y2="455" stroke="#ffee93" strokeWidth="3.5" strokeLinecap="round"/>
        <line x1="630" y1="455" x2="630" y2="305" stroke="#ff9e7d" strokeWidth="3.5" strokeLinecap="round"/>
        <line x1="630" y1="305" x2="500" y2="230" stroke="#ffee93" strokeWidth="3.5" strokeLinecap="round"/>
      </g>

      {/* Hexagon Corner Glowing Nodes */}
      <g filter="url(#glow-strong)">
        <circle cx="500" cy="230" r="5" fill="#00f5d4" />
        <circle cx="630" cy="305" r="5" fill="#ffee93" />
        <circle cx="630" cy="455" r="5" fill="#00f5d4" />
        <circle cx="500" cy="530" r="5" fill="#ffee93" />
        <circle cx="370" cy="455" r="5" fill="#00f5d4" />
        <circle cx="370" cy="305" r="5" fill="#ffee93" />
      </g>

      {/* Center Shopping Bag */}
      <g filter="url(#glow-subtle)">
        <path d="M 470 350 A 30 30 0 0 1 530 350" fill="none" stroke="#ffee93" strokeWidth="3.5" strokeLinecap="round"/>
        <polygon points="450,360 550,360 560,405 440,405" fill="none" stroke="url(#bag-grad)" strokeWidth="3" strokeLinejoin="round"/>
        <line x1="450" y1="360" x2="500" y2="405" stroke="#ff006e" strokeWidth="2"/>
        <line x1="550" y1="360" x2="500" y2="405" stroke="#8338ec" strokeWidth="2"/>
        <line x1="440" y1="405" x2="560" y2="405" stroke="#ff006e" strokeWidth="2"/>
        <circle cx="500" cy="380" r="3" fill="#00f2fe" filter="url(#glow-strong)"/>
      </g>

      {/* FUTURE SHOP Badge */}
      <g filter="url(#glow-subtle)">
        <rect x="420" y="425" width="160" height="26" rx="13" ry="13" fill="#08101a" fillOpacity="0.9" stroke="#00f2fe" strokeWidth="1.5"/>
        <text x="500" y="442" fontFamily="'Segoe UI', Roboto, sans-serif" fontSize="10" fontWeight="600" fill="#00f2fe" letterSpacing="3" textAnchor="middle">FUTURE SHOP</text>
      </g>

      {/* Main Branding Text: OMB */}
      <g filter="url(#glow-strong)">
        <text x="500" y="680" fontFamily="'Inter', 'Montserrat', sans-serif" fontSize="92" fontWeight="300" fill="#ffedd8" letterSpacing="45" textAnchor="middle" dx="22">O M B</text>
      </g>

      {/* Small Diamond Accent */}
      <g filter="url(#glow-strong)">
        <polygon points="500,728 506,734 500,740 494,734" fill="#00f2fe" />
      </g>

      {/* Subtitle Text */}
      <text x="500" y="785" fontFamily="'Inter', 'Montserrat', sans-serif" fontSize="18" fontWeight="400" fill="#ffffff" letterSpacing="8" textAnchor="middle" opacity="0.95">
        OMNI MARKETING &amp; BUSINESS
      </text>

      {/* Tagline Text */}
      <text x="500" y="825" fontFamily="'Inter', sans-serif" fontSize="13" fontWeight="300" fill="#8a99ad" letterSpacing="2" text-anchor="middle">
        Next-Gen Smart Commerce &amp; Enterprise Growth Ecosystem
      </text>
    </svg>
  );
};

export default OmbLogo;