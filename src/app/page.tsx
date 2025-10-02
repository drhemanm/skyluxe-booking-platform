import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-desert overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          {/* Logo placeholder */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-7xl md:text-8xl font-serif font-bold tracking-tight mb-2">
              SkyLuxe
            </h1>
            <div className="w-32 h-1 bg-royal-gold mx-auto"></div>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-light mb-6 tracking-wide">
            Luxury Redefined in Dubai
          </h2>
          
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light opacity-90">
            Experience unparalleled elegance and exceptional service in the world&apos;s most iconic destination
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#hotels"
              className="px-8 py-4 bg-royal-gold hover:bg-desert-gold text-white font-semibold rounded-lg transition-all duration-300 luxury-shadow-hover"
            >
              Explore Hotels
            </Link>
            <Link 
              href="#about"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300 border border-white/30"
            >
              Learn More
            </Link>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Search Bar Section */}
      <section className="bg-pearl-white py-8 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-2xl luxury-shadow p-6 flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-1">
              <label className="block text-sm font-medium text-neutral-charcoal mb-2">Check-in</label>
              <input 
                type="date" 
                className="w-full px-4 py-3 border border-neutral-warmgray rounded-lg focus:outline-none focus:ring-2 focus:ring-desert-gold"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-neutral-charcoal mb-2">Check-out</label>
              <input 
                type="date" 
                className="w-full px-4 py-3 border border-neutral-warmgray rounded-lg focus:outline-none focus:ring-2 focus:ring-desert-gold"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-neutral-charcoal mb-2">Guests</label>
              <select className="w-full px-4 py-3 border border-neutral-warmgray rounded-lg focus:outline-none focus:ring-2 focus:ring-desert-gold">
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4+ Guests</option>
              </select>
            </div>
            <button className="px-8 py-3 bg-royal-gold hover:bg-desert-gold text-white font-semibold rounded-lg transition-all duration-300 whitespace-nowrap">
              Search Hotels
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-serif font-bold text-neutral-charcoal mb-6">
                The SkyLuxe Experience
              </h2>
              <p className="text-lg text-neutral-charcoal/80 mb-6 leading-relaxed">
                At SkyLuxe, we curate extraordinary stays in Dubai&apos;s most prestigious hotels. Each property is handpicked for its exceptional service, stunning design, and unforgettable experiences.
              </p>
              <p className="text-lg text-neutral-charcoal/80 mb-8 leading-relaxed">
                From iconic landmarks to hidden gems, we connect discerning travelers with accommodations that redefine luxury and create memories that last a lifetime.
              </p>
              <Link 
                href="/about"
                className="inline-block px-6 py-3 border-2 border-desert-gold text-desert-gold hover:bg-desert-gold hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Discover Our Story
              </Link>
            </div>
            <div className="relative h-96 bg-gradient-ocean rounded-2xl luxury-shadow"></div>
          </div>
        </div>
      </section>

      {/* Featured Hotels Section */}
      <section id="hotels" className="py-24 bg-pearl-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold text-neutral-charcoal mb-4">
              Featured Hotels
            </h2>
            <p className="text-lg text-neutral-charcoal/70 max-w-2xl mx-auto">
              Discover our hand-selected collection of Dubai&apos;s finest luxury accommodations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Hotel Card 1 */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group bg-white rounded-2xl overflow-hidden luxury-shadow hover:luxury-shadow-hover transition-all duration-300 cursor-pointer">
                <div className="relative h-64 bg-gradient-golden"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-neutral-charcoal mb-2">
                    Luxury Hotel {item}
                  </h3>
                  <p className="text-neutral-charcoal/70 mb-4">
                    Experience unparalleled luxury with stunning views and world-class amenities in the heart of Dubai.
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-neutral-charcoal/60">From</span>
                      <p className="text-2xl font-bold text-desert-gold">AED 1,200</p>
                      <span className="text-sm text-neutral-charcoal/60">per night</span>
                    </div>
                    <button className="px-6 py-2 bg-royal-gold hover:bg-desert-gold text-white font-semibold rounded-lg transition-all duration-300">
                      View Details
                    button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/hotels"
              className="inline-block px-8 py-4 bg-royal-gold hover:bg-desert-gold text-white font-semibold rounded-lg transition-all duration-300"
            >
              View All Hotels
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold text-neutral-charcoal mb-4">
              Guest Experiences
            </h2>
            <p className="text-lg text-neutral-charcoal/70">
              What our guests say about their SkyLuxe journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-pearl-white rounded-2xl p-8 luxury-shadow">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-royal-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-neutral-charcoal/80 mb-6 italic">
                  &quot;An absolutely unforgettable experience. The attention to detail and level of service exceeded all expectations.&quot;
                </p>
                <div>
                  <p className="font-semibold text-neutral-charcoal">Guest Name {item}</p>
                  <p className="text-sm text-neutral-charcoal/60">Stayed at Luxury Hotel</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-desert text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-serif font-bold mb-6">
            Ready for Your Dubai Experience?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book your luxury stay today and create memories that will last a lifetime
          </p>
          <Link 
            href="/book"
            className="inline-block px-10 py-4 bg-white text-desert-gold hover:bg-pearl-white font-bold rounded-lg transition-all duration-300 text-lg luxury-shadow-hover"
          >
            Start Your Journey
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-charcoal text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">SkyLuxe</h3>
              <p className="text-white/70 text-sm">
                Your gateway to luxury accommodations in Dubai
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link href="/hotels" className="hover:text-royal-gold transition-colors">Hotels</Link></li>
                <li><Link href="/about" className="hover:text-royal-gold transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-royal-gold transition-colors">Contact</Link></li>
                <li><Link href="/faq" className="hover:text-royal-gold transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link href="/terms" className="hover:text-royal-gold transition-colors">Terms & Conditions</Link></li>
                <li><Link href="/privacy" className="hover:text-royal-gold transition-colors">Privacy Policy</Link></li>
                <li><Link href="/cancellation" className="hover:text-royal-gold transition-colors">Cancellation Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Email: info@skyluxe.world</li>
                <li>Phone: +971 4 XXX XXXX</li>
                <li>Dubai, UAE</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
            <p>&copy; 2025 SkyLuxe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
