'use client';
import { useState, useRef, useEffect } from 'react';

export default function GeneratePage() {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedColor, setSelectedColor] = useState('#ff6b6b');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const colors = [
    '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', 
    '#ff9ff3', '#54a0ff', '#5f27cd', '#00d2d3', '#ff9f43',
    '#000000', '#ffffff'
  ];

  // Auto-load image to canvas when imageUrl changes
  useEffect(() => {
    if (imageUrl) {
      loadImageToCanvas();
    }
  }, [imageUrl]);

  const generateImage = async () => {
    setLoading(true);
    setError('');
    setImageUrl('');
    try {
      const res = await fetch('/api/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      if (data.imageUrl) {
        setImageUrl(data.imageUrl);
      } else {
        setError('No image returned.');
      }
    } catch (e) {
      setError('Failed to generate image.');
    } finally {
      setLoading(false);
    }
  };

  const downloadImage = () => {
    if (!imageUrl) return;
    
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `coloring-${prompt.replace(/\s+/g, '-')}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadColored = () => {
    if (!canvasRef.current || !imageUrl) return;
    
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.download = `colored-${prompt.replace(/\s+/g, '-')}.png`;
    link.href = canvas.toDataURL();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current || !imageUrl) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Simple flood fill implementation
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    const targetColor = { r: 255, g: 255, b: 255 }; // White background
    const fillColor = {
      r: parseInt(selectedColor.slice(1, 3), 16),
      g: parseInt(selectedColor.slice(3, 5), 16),
      b: parseInt(selectedColor.slice(5, 7), 16)
    };

    // Simple flood fill (basic implementation)
    const stack = [{ x: Math.floor(x), y: Math.floor(y) }];
    while (stack.length > 0) {
      const { x, y } = stack.pop()!;
      const index = (y * canvas.width + x) * 4;
      
      if (x < 0 || x >= canvas.width || y < 0 || y >= canvas.height) continue;
      if (data[index] !== targetColor.r || data[index + 1] !== targetColor.g || data[index + 2] !== targetColor.b) continue;
      
      data[index] = fillColor.r;
      data[index + 1] = fillColor.g;
      data[index + 2] = fillColor.b;
      
      stack.push({ x: x + 1, y });
      stack.push({ x: x - 1, y });
      stack.push({ x, y: y + 1 });
      stack.push({ x, y: y - 1 });
    }
    
    ctx.putImageData(imageData, 0, 0);
  };

  const loadImageToCanvas = () => {
    if (!canvasRef.current || !imageUrl) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    };
    img.src = imageUrl;
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6">Generate & Color with DALL·E</h1>
      
      {/* Generate Section */}
      <div className="w-full max-w-2xl mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <input
            className="border p-3 w-full rounded mb-4 text-lg"
            placeholder="Describe your coloring page (e.g., 'cute cat', 'flower mandala')"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button
            onClick={generateImage}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg mb-4 disabled:opacity-50 text-lg font-semibold hover:bg-blue-700 transition-colors"
            disabled={loading || !prompt.trim()}
          >
            {loading ? 'Generating...' : 'Generate Coloring Page'}
          </button>
          {error && <p className="text-red-500 mb-4">{error}</p>}
        </div>
      </div>

      {/* Color Palette */}
      {imageUrl && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Choose Color:</h2>
          <div className="flex gap-2 flex-wrap justify-center">
            {colors.map((color) => (
              <button
                key={color}
                className={`w-10 h-10 rounded-full border-3 ${selectedColor === color ? 'border-black scale-110' : 'border-gray-300'}`}
                style={{ background: color }}
                onClick={() => setSelectedColor(color)}
                aria-label={`Select color ${color}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Image Display and Coloring */}
      {imageUrl && (
        <div className="w-full max-w-4xl">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Original Image */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-3">Original Image</h3>
                <img 
                  src={imageUrl} 
                  alt="Generated Coloring Page" 
                  className="max-w-full border rounded shadow-lg"
                />
                <button
                  onClick={downloadImage}
                  className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                >
                  Download Original
                </button>
              </div>

              {/* Coloring Canvas */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-3">Color Here (Click to Fill)</h3>
                <canvas
                  ref={canvasRef}
                  className="border rounded shadow-lg cursor-crosshair max-w-full"
                  onClick={handleCanvasClick}
                />
                <div className="mt-3 space-x-2">
                  <button
                    onClick={loadImageToCanvas}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    Reset Canvas
                  </button>
                  <button
                    onClick={downloadColored}
                    className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
                  >
                    Download Colored
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Instructions */}
      {imageUrl && (
        <div className="mt-6 text-center text-gray-600 max-w-2xl">
          <p className="text-sm">
            💡 <strong>How to color:</strong> Click on any white area of the image to fill it with the selected color. 
            Use "Reset Canvas" to start over, and "Download Colored" to save your artwork!
          </p>
        </div>
      )}
    </main>
  );
}