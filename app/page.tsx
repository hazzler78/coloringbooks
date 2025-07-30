import ProductCard from '../components/ProductCard'
import BenefitCard from '../components/BenefitCard'
import TestimonialCard from '../components/TestimonialCard'
import Footer from '../components/Footer'

export default function Home() {
  const products = [
    {
      title: "Spooky Fun Halloween",
      price: "$10.99",
      imageUrl: "https://m.media-amazon.com/images/I/71JrG558TXL._SY466_.jpg",
      imageAlt: "Spooky Fun Halloween Coloring Book",
      amazonUrl: "https://www.amazon.com/Spooky-Fun-Halloween-Coloring-Book/dp/B0DGF4MFCK/"
    },
    {
      title: "Pop Princess Vol. 2",
      price: "$14.99",
      imageUrl: "https://m.media-amazon.com/images/I/71JbDz+X0dL._SY466_.jpg",
      imageAlt: "Pictures Princess Coloring Book",
      amazonUrl: "https://www.amazon.com/Coloring-book-adults-pictures-princess/dp/B0DGGXRNBM/"
    },
    {
      title: "Pop Princess Vol. 1",
      price: "$14.99",
      imageUrl: "https://m.media-amazon.com/images/I/51Q03tT38pL._SY445_SX342_.jpg",
      imageAlt: "Princess Pages Coloring Book",
      amazonUrl: "https://www.amazon.com/Coloring-book-adults-pages-princess/dp/B0DG2NNGBX/"
    }
  ]

  const benefits = [
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
        </svg>
      ),
      title: "Premium Thick Paper",
      description: "120gsm acid-free paper prevents bleed-through"
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      title: "Single-Sided Pages",
      description: "Perfect for markers, colored pencils, or any medium"
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
      ),
      title: "Original Artwork",
      description: "Hand-drawn designs for therapeutic coloring"
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      title: "Stress Relief",
      description: "Proven mindfulness and relaxation benefits"
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      ),
      title: "All Ages Welcome",
      description: "From kids to adults, every skill level"
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      title: "Screen-Free Activity",
      description: "Perfect family bonding without technology"
    }
  ]

  const testimonials = [
    {
      quote: "Perfect for stress relief after a long day. The thick paper quality is excellent!",
      author: "Sarah M.",
      authorInitial: "S"
    },
    {
      quote: "My kids love these! The single-sided pages are perfect for markers.",
      author: "James T.",
      authorInitial: "J"
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-8 md:py-16">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight px-2">
            <span className="text-gradient">Premium Coloring Books</span><br />
            <span className="text-emerald-900">for Stress Relief</span>
          </h1>
          
          {/* Clear Value Proposition */}
          <p className="text-xl md:text-2xl mb-8 text-emerald-700 max-w-2xl mx-auto leading-relaxed px-4">
            High-quality adult coloring books with <strong>thick paper</strong> and <strong>single-sided pages</strong>. 
            Perfect for mindfulness, stress relief, and creative relaxation.
          </p>
          
          {/* Single Primary CTA */}
          <div className="mb-8 px-4">
            <a 
              href="https://www.amazon.com/Spooky-Fun-Halloween-Coloring-Book/dp/B0DGF4MFCK/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-button text-white font-bold py-4 px-8 rounded-xl text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 inline-block"
            >
              🎨 Shop Now - Starting at $10.99
            </a>
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

      {/* Product Showcase Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-emerald-900">
            Featured Coloring Books
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
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
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} />
            ))}
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
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
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
          className="cta-button text-white font-bold py-4 px-8 rounded-xl text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 inline-block"
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

      <Footer />
    </>
  )
} 