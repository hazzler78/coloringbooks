'use client';
import { useState, useRef } from 'react';

const initialFills = {
  petal1: '#fff',
  petal2: '#fff',
  petal3: '#fff',
  center: '#fff',
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
      canvas.width = svg.width.baseVal.value || 240;
      canvas.height = svg.height.baseVal.value || 240;
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

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-4">SVG Coloring Demo</h1>
      <div className="mb-4 flex gap-2 flex-wrap">
        {colors.map((color) => (
          <button
            key={color}
            className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? 'border-black' : 'border-gray-300'}`}
            style={{ background: color }}
            onClick={() => setSelectedColor(color)}
            aria-label={`Select color ${color}`}
          />
        ))}
      </div>
      <svg
        ref={svgRef}
        width="240"
        height="240"
        viewBox="0 0 240 240"
        className="bg-white rounded shadow-lg"
        style={{ touchAction: 'manipulation' }}
      >
        {/* Petal 1 */}
        <path
          d="M120,120 Q60,60 120,20 Q180,60 120,120"
          fill={fills.petal1}
          stroke="#888"
          strokeWidth={2}
          onClick={() => handleFill('petal1')}
          style={{ cursor: 'pointer' }}
        />
        {/* Petal 2 */}
        <path
          d="M120,120 Q180,60 220,120 Q180,180 120,120"
          fill={fills.petal2}
          stroke="#888"
          strokeWidth={2}
          onClick={() => handleFill('petal2')}
          style={{ cursor: 'pointer' }}
        />
        {/* Petal 3 */}
        <path
          d="M120,120 Q220,120 120,220 Q20,120 120,120"
          fill={fills.petal3}
          stroke="#888"
          strokeWidth={2}
          onClick={() => handleFill('petal3')}
          style={{ cursor: 'pointer' }}
        />
        {/* Center */}
        <circle
          cx={120}
          cy={120}
          r={28}
          fill={fills.center}
          stroke="#888"
          strokeWidth={2}
          onClick={() => handleFill('center')}
          style={{ cursor: 'pointer' }}
        />
      </svg>
      <div className="flex gap-4 mt-6">
        <button
          onClick={downloadSVG}
          className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700 transition-colors"
        >
          Download SVG
        </button>
        <button
          onClick={downloadPNG}
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition-colors"
        >
          Download PNG
        </button>
      </div>
      {message && <p className="mt-4 text-green-600 font-semibold">{message}</p>}
      <p className="mt-4 text-gray-500 text-sm">Click a region to fill it with the selected color.</p>
    </main>
  );
}