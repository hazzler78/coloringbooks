'use client';
import { useState, useRef } from 'react';

const initialFills = {
  // Text elements
  think: '#fff',
  positive: '#fff',
  cms: '#fff',
  
  // Decorative elements
  topFlowers: '#fff',
  bottomFlowers: '#fff',
  leftLeaves: '#fff',
  rightLeaves: '#fff',
  centerPatterns: '#fff',
  borderSwirls: '#fff',
  
  // Background sections
  background: '#fff',
  mainArea: '#fff',
  
  // Individual letters (for more precise coloring)
  letterT: '#fff',
  letterH: '#fff',
  letterI: '#fff',
  letterN: '#fff',
  letterK: '#fff',
  letterP: '#fff',
  letterO: '#fff',
  letterS: '#fff',
  letterI2: '#fff',
  letterT2: '#fff',
  letterI3: '#fff',
  letterV: '#fff',
  letterE: '#fff',
};

const colors = ['#f87171', '#fbbf24', '#34d399', '#60a5fa', '#a78bfa', '#f472b6', '#000', '#fff'];

export default function ColoringDemo() {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [fills, setFills] = useState(initialFills);
  const [message, setMessage] = useState('');
  const svgRef = useRef<SVGSVGElement>(null);

  const handleFill = (region: keyof typeof fills) => {
    setFills({ ...fills, [region]: selectedColor });
  };

  const downloadSVG = () => {
    if (!svgRef.current) return;
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svgRef.current);
    const blob = new Blob([source], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'coloring.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setMessage('SVG downloaded!');
    setTimeout(() => setMessage(''), 2000);
  };

  const downloadPNG = () => {
    if (!svgRef.current) return;
    const svg = svgRef.current;
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svg);
    const img = new window.Image();
    const svg64 = btoa(unescape(encodeURIComponent(source)));
    const image64 = 'data:image/svg+xml;base64,' + svg64;
    img.onload = function () {
      const canvas = document.createElement('canvas');
      canvas.width = svg.width.baseVal.value || 600;
      canvas.height = svg.height.baseVal.value || 800;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0);
        const png = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = png;
        link.download = 'coloring.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setMessage('PNG downloaded!');
        setTimeout(() => setMessage(''), 2000);
      }
    };
    img.src = image64;
  };

  const resetColors = () => {
    setFills(initialFills);
    setMessage('Colors reset!');
    setTimeout(() => setMessage(''), 2000);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6">🎨 Interactive Coloring Demo</h1>
      
      {/* Color Palette */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Choose Your Colors:</h2>
        <div className="flex gap-3 flex-wrap justify-center">
          {colors.map((color) => (
            <button
              key={color}
              className={`w-12 h-12 rounded-full border-3 transition-all ${selectedColor === color ? 'border-black scale-110 shadow-lg' : 'border-gray-300 hover:scale-105'}`}
              style={{ background: color }}
              onClick={() => setSelectedColor(color)}
              aria-label={`Select color ${color}`}
            />
          ))}
        </div>
      </div>

      {/* Coloring Canvas */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <svg
          ref={svgRef}
          width="600"
          height="800"
          viewBox="0 0 600 800"
          className="bg-white rounded-lg shadow-md"
          style={{ touchAction: 'manipulation' }}
        >
          {/* Background */}
          <rect width="600" height="800" fill={fills.background} />
          
          {/* Original SVG as background image */}
          <image 
            href="/think_positive.svg" 
            x="0" 
            y="0" 
            width="600" 
            height="800" 
            opacity="0.2"
          />
          
          {/* THINK - Individual letters */}
          <rect x="100" y="150" width="60" height="120" fill={fills.letterT} opacity="0.8" onClick={() => handleFill('letterT')} style={{ cursor: 'pointer' }} />
          <rect x="180" y="150" width="60" height="120" fill={fills.letterH} opacity="0.8" onClick={() => handleFill('letterH')} style={{ cursor: 'pointer' }} />
          <rect x="260" y="150" width="40" height="120" fill={fills.letterI} opacity="0.8" onClick={() => handleFill('letterI')} style={{ cursor: 'pointer' }} />
          <rect x="320" y="150" width="60" height="120" fill={fills.letterN} opacity="0.8" onClick={() => handleFill('letterN')} style={{ cursor: 'pointer' }} />
          <rect x="400" y="150" width="60" height="120" fill={fills.letterK} opacity="0.8" onClick={() => handleFill('letterK')} style={{ cursor: 'pointer' }} />
          
          {/* POSITIVE - Individual letters */}
          <rect x="120" y="350" width="60" height="120" fill={fills.letterP} opacity="0.8" onClick={() => handleFill('letterP')} style={{ cursor: 'pointer' }} />
          <rect x="200" y="350" width="60" height="120" fill={fills.letterO} opacity="0.8" onClick={() => handleFill('letterO')} style={{ cursor: 'pointer' }} />
          <rect x="280" y="350" width="50" height="120" fill={fills.letterS} opacity="0.8" onClick={() => handleFill('letterS')} style={{ cursor: 'pointer' }} />
          <rect x="350" y="350" width="40" height="120" fill={fills.letterI2} opacity="0.8" onClick={() => handleFill('letterI2')} style={{ cursor: 'pointer' }} />
          <rect x="410" y="350" width="60" height="120" fill={fills.letterT2} opacity="0.8" onClick={() => handleFill('letterT2')} style={{ cursor: 'pointer' }} />
          <rect x="490" y="350" width="40" height="120" fill={fills.letterI3} opacity="0.8" onClick={() => handleFill('letterI3')} style={{ cursor: 'pointer' }} />
          <rect x="550" y="350" width="60" height="120" fill={fills.letterV} opacity="0.8" onClick={() => handleFill('letterV')} style={{ cursor: 'pointer' }} />
          <rect x="630" y="350" width="60" height="120" fill={fills.letterE} opacity="0.8" onClick={() => handleFill('letterE')} style={{ cursor: 'pointer' }} />
          
          {/* CMS Logo */}
          <rect x="250" y="520" width="100" height="40" fill={fills.cms} opacity="0.8" onClick={() => handleFill('cms')} style={{ cursor: 'pointer' }} />
          
          {/* Top decorative flowers */}
          <circle cx="150" cy="100" r="25" fill={fills.topFlowers} opacity="0.7" onClick={() => handleFill('topFlowers')} style={{ cursor: 'pointer' }} />
          <circle cx="450" cy="100" r="25" fill={fills.topFlowers} opacity="0.7" onClick={() => handleFill('topFlowers')} style={{ cursor: 'pointer' }} />
          
          {/* Bottom decorative flowers */}
          <circle cx="150" cy="700" r="25" fill={fills.bottomFlowers} opacity="0.7" onClick={() => handleFill('bottomFlowers')} style={{ cursor: 'pointer' }} />
          <circle cx="450" cy="700" r="25" fill={fills.bottomFlowers} opacity="0.7" onClick={() => handleFill('bottomFlowers')} style={{ cursor: 'pointer' }} />
          
          {/* Left side leaves/patterns */}
          <ellipse cx="80" cy="300" rx="30" ry="60" fill={fills.leftLeaves} opacity="0.7" onClick={() => handleFill('leftLeaves')} style={{ cursor: 'pointer' }} />
          <ellipse cx="80" cy="500" rx="30" ry="60" fill={fills.leftLeaves} opacity="0.7" onClick={() => handleFill('leftLeaves')} style={{ cursor: 'pointer' }} />
          
          {/* Right side leaves/patterns */}
          <ellipse cx="520" cy="300" rx="30" ry="60" fill={fills.rightLeaves} opacity="0.7" onClick={() => handleFill('rightLeaves')} style={{ cursor: 'pointer' }} />
          <ellipse cx="520" cy="500" rx="30" ry="60" fill={fills.rightLeaves} opacity="0.7" onClick={() => handleFill('rightLeaves')} style={{ cursor: 'pointer' }} />
          
          {/* Center patterns between letters */}
          <circle cx="300" cy="280" r="20" fill={fills.centerPatterns} opacity="0.6" onClick={() => handleFill('centerPatterns')} style={{ cursor: 'pointer' }} />
          <circle cx="300" cy="480" r="20" fill={fills.centerPatterns} opacity="0.6" onClick={() => handleFill('centerPatterns')} style={{ cursor: 'pointer' }} />
          
          {/* Border swirls */}
          <path d="M 50 200 Q 100 150 150 200" fill="none" stroke={fills.borderSwirls} strokeWidth="8" opacity="0.6" onClick={() => handleFill('borderSwirls')} style={{ cursor: 'pointer' }} />
          <path d="M 450 200 Q 500 150 550 200" fill="none" stroke={fills.borderSwirls} strokeWidth="8" opacity="0.6" onClick={() => handleFill('borderSwirls')} style={{ cursor: 'pointer' }} />
          <path d="M 50 600 Q 100 650 150 600" fill="none" stroke={fills.borderSwirls} strokeWidth="8" opacity="0.6" onClick={() => handleFill('borderSwirls')} style={{ cursor: 'pointer' }} />
          <path d="M 450 600 Q 500 650 550 600" fill="none" stroke={fills.borderSwirls} strokeWidth="8" opacity="0.6" onClick={() => handleFill('borderSwirls')} style={{ cursor: 'pointer' }} />
        </svg>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={resetColors}
          className="bg-yellow-600 text-white px-4 py-2 rounded shadow hover:bg-yellow-700 transition-colors"
        >
          🔄 Reset Colors
        </button>
        <button
          onClick={downloadSVG}
          className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700 transition-colors"
        >
          📥 Download SVG
        </button>
        <button
          onClick={downloadPNG}
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition-colors"
        >
          📥 Download PNG
        </button>
      </div>

      {/* Messages */}
      {message && <p className="mt-4 text-green-600 font-semibold">{message}</p>}
      
      {/* Instructions */}
      <div className="mt-6 text-center text-gray-600 max-w-md">
        <p className="text-sm">
          🎨 <strong>How to color:</strong> Click on individual letters, flowers, or patterns to color them! 
          Each element can be colored separately for a detailed design.
        </p>
        <p className="text-xs mt-2 text-gray-500">
          💡 Tip: Try coloring each letter of "THINK POSITIVE" with different colors!
        </p>
      </div>
    </main>
  );
}