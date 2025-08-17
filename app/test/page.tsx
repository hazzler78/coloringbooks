export default function TestPage() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #F2EAE3 0%, #C5B9AC 50%, #A4BCC2 100%)' }}>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-pantone8021 mb-4">
          Test Page Working! ✅
        </h1>
        <p className="text-xl text-[#6F5220]">
          If you can see this, routing is working correctly.
        </p>
        <a 
          href="/" 
          className="mt-4 inline-block bg-pantone7542 text-white px-6 py-3 rounded-lg hover:brightness-90 transition-colors"
        >
          Back to Home
        </a>
      </div>
    </div>
  )
} 