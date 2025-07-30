export default function Home() {
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-800 mb-4">
          Premium Coloring Books
        </h1>
        <p className="text-xl text-green-600 mb-8">
          Stress Relief & Mindfulness
        </p>
        <a
          href="https://www.amazon.com/Spooky-Fun-Halloween-Coloring-Book/dp/B0DGF4MFCK/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Shop Now
        </a>
        <div className="mt-8">
          <a
            href="/test"
            className="text-green-700 underline"
          >
            Test Page
          </a>
        </div>
      </div>
    </div>
  )
} 