export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-emerald-600">Coloring Books</div>
            <div className="flex gap-4">
              <a href="/generate" className="text-emerald-600 hover:text-emerald-800 font-medium">
                🎨 Generate & Color
              </a>
              <a href="/coloring-demo" className="text-emerald-600 hover:text-emerald-800 font-medium">
                🖌️ Demo
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-8 md:py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight px-2">
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Premium Coloring Books</span><br />
            <span className="text-emerald-900">for Stress Relief</span>
          </h1>
          
          {/* Clear Value Proposition */}
          <p className="text-xl md:text-2xl mb-8 text-emerald-700 max-w-2xl mx-auto leading-relaxed px-4">
            High-quality adult coloring books with <strong>thick paper</strong> and <strong>single-sided pages</strong>. 
            Perfect for mindfulness, stress relief, and creative relaxation.
          </p>
          
          {/* Primary CTAs */}
          <div className="mb-8 px-4 space-y-4">
            <a 
              href="https://www.amazon.com/Spooky-Fun-Halloween-Coloring-Book/dp/B0DGF4MFCK/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold py-4 px-8 rounded-xl text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 inline-block"
            >
              🎨 Shop Now - Starting at $10.99
            </a>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="/generate" 
                className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 inline-block"
              >
                🤖 Try AI Generator
              </a>
              <a 
                href="/coloring-demo" 
                className="bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-purple-700 transition-all duration-300 inline-block"
              >
                🖌️ Interactive Demo
              </a>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-sm text-emerald-600 mb-8">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              Premium Quality
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              Free Shipping
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              30-Day Returns
            </div>
          </div>
        </div>
      </section>

      {/* Interactive AI Coloring Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-emerald-900">
            🎨 Try Our AI Coloring Experience!
          </h2>
          <p className="text-xl text-emerald-700 mb-8 max-w-2xl mx-auto">
            Generate custom coloring pages with AI and color them digitally. Perfect for testing before buying our physical books!
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* AI Generate Feature */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">AI-Generated Pages</h3>
              <p className="text-gray-600 mb-4">Create custom coloring pages with DALL·E AI. Just describe what you want!</p>
              <a 
                href="/generate" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
              >
                Generate Now
              </a>
            </div>
            
            {/* Interactive Demo */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🖌️</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Interactive Demo</h3>
              <p className="text-gray-600 mb-4">Try our coloring interface with a sample design. Click to fill with colors!</p>
              <a 
                href="/coloring-demo" 
                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-block"
              >
                Try Demo
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-3 text-emerald-900">Why Try Our Digital Experience?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Test before buying</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Unlimited designs</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Instant results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-emerald-900">
            Featured Coloring Books
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Product 1 */}
            <div className="text-center">
              <a href="https://www.amazon.com/Spooky-Fun-Halloween-Coloring-Book/dp/B0DGF4MFCK/" target="_blank" rel="noopener noreferrer" className="block">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden p-4 hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="relative w-full h-56 sm:h-64 md:h-72 mb-3 bg-gray-50 rounded-lg">
                    <img
                      src="https://m.media-amazon.com/images/I/71JrG558TXL._SY466_.jpg"
                      alt="Spooky Fun Halloween Coloring Book"
                      className="w-full h-full object-contain sm:object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Spooky Fun Halloween</h3>
                  <p className="text-sm text-gray-600 font-semibold">$10.99</p>
                </div>
              </a>
            </div>
            
            {/* Product 2 */}
            <div className="text-center">
              <a href="https://www.amazon.com/Coloring-book-adults-pictures-princess/dp/B0DGGXRNBM/" target="_blank" rel="noopener noreferrer" className="block">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden p-4 hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="relative w-full h-56 sm:h-64 md:h-72 mb-3 bg-gray-50 rounded-lg">
                    <img
                      src="https://m.media-amazon.com/images/I/71JbDz+X0dL._SY466_.jpg"
                      alt="Pictures Princess Coloring Book"
                      className="w-full h-full object-contain sm:object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Pop Princess Vol. 2</h3>
                  <p className="text-sm text-gray-600 font-semibold">$14.99</p>
                </div>
              </a>
            </div>
            
            {/* Product 3 */}
            <div className="text-center">
              <a href="https://www.amazon.com/Coloring-book-adults-pages-princess/dp/B0DG2NNGBX/" target="_blank" rel="noopener noreferrer" className="block">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden p-4 hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="relative w-full h-56 sm:h-64 md:h-72 mb-3 bg-gray-50 rounded-lg">
                    <img
                      src="https://m.media-amazon.com/images/I/51Q03tT38pL._SY445_SX342_.jpg"
                      alt="Princess Pages Coloring Book"
                      className="w-full h-full object-contain sm:object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Pop Princess Vol. 1</h3>
                  <p className="text-sm text-gray-600 font-semibold">$14.99</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-emerald-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-emerald-900">
            Why Choose Our Coloring Books?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Benefit 1 */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Premium Thick Paper</h3>
              <p className="text-gray-600">120gsm acid-free paper prevents bleed-through</p>
            </div>
            
            {/* Benefit 2 */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Single-Sided Pages</h3>
              <p className="text-gray-600">Perfect for markers, colored pencils, or any medium</p>
            </div>
            
            {/* Benefit 3 */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Original Artwork</h3>
              <p className="text-gray-600">Hand-drawn designs for therapeutic coloring</p>
            </div>
            
            {/* Benefit 4 */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Stress Relief</h3>
              <p className="text-gray-600">Proven mindfulness and relaxation benefits</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-emerald-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            What Our Customers Say
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-emerald-800 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  S
                </div>
                <div>
                  <h4 className="font-bold">Sarah M.</h4>
                  <div className="flex text-yellow-400">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-lg italic">"Perfect for stress relief after a long day. The thick paper quality is excellent!"</p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-emerald-800 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  J
                </div>
                <div>
                  <h4 className="font-bold">James T.</h4>
                  <div className="flex text-yellow-400">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-lg italic">"My kids love these! The single-sided pages are perfect for markers."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 text-center bg-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-emerald-900">Ready to Start Your Creative Journey?</h2>
        <p className="text-xl text-emerald-700 mb-8 max-w-2xl mx-auto">
          Join thousands of happy customers who've discovered the joy of mindful coloring
        </p>
        <a 
          href="https://www.amazon.com/Spooky-Fun-Halloween-Coloring-Book/dp/B0DGF4MFCK/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold py-4 px-8 rounded-xl text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 inline-block"
        >
          🎨 Shop Now - Starting at $10.99
        </a>
      </section>

      {/* Privacy Policy Section */}
      <section className="py-12 px-4 bg-emerald-50" id="privacy-policy">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-emerald-900">Privacy Policy</h2>
          <p className="text-lg text-gray-700 mb-4">
            We respect your privacy. This site does not collect personal data except for anonymous analytics to help us improve the website. We do not sell or share your information with third parties.
          </p>
          <p className="text-lg text-gray-700">
            For privacy questions, contact us at <a href="mailto:Wonderwallart@gmx.net" className="text-emerald-700 underline">Wonderwallart@gmx.net</a>.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-emerald-200">
            © 2024 Premium Coloring Books. All rights reserved.
          </p>
          <p className="text-sm text-emerald-200 mt-2">
            Contact: <a href="mailto:Wonderwallart@gmx.net" className="underline">Wonderwallart@gmx.net</a>
          </p>
        </div>
      </footer>
    </>
  )
} 