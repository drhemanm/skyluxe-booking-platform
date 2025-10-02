import Link from "next/link"
import Image from "next/image"
import { mockHotels } from "@/data/hotels"
import { formatCurrency } from "@/lib/utils"

export default function HotelsPage() {
  const hotels = mockHotels.filter(hotel => hotel.isActive)

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-golden py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-neutral-charcoal mb-4">
              Luxury Hotels in Dubai
            </h1>
            <p className="text-xl text-neutral-charcoal/70 max-w-2xl mx-auto">
              Discover our handpicked collection of Dubai&apos;s finest accommodations
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="bg-white py-8 sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="flex-1 w-full">
              <input
                type="text"
                placeholder="Search hotels..."
                className="w-full px-4 py-3 border border-neutral-warmgray rounded-lg focus:outline-none focus:ring-2 focus:ring-desert-gold"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-4 w-full md:w-auto">
              <select className="px-4 py-3 border border-neutral-warmgray rounded-lg focus:outline-none focus:ring-2 focus:ring-desert-gold">
                <option>All Locations</option>
                <option>Downtown Dubai</option>
                <option>Jumeirah Beach</option>
                <option>Palm Jumeirah</option>
                <option>Dubai Marina</option>
              </select>

              <select className="px-4 py-3 border border-neutral-warmgray rounded-lg focus:outline-none focus:ring-2 focus:ring-desert-gold">
                <option>All Prices</option>
                <option>Under AED 2,000</option>
                <option>AED 2,000 - 3,000</option>
                <option>AED 3,000+</option>
              </select>

              <select className="px-4 py-3 border border-neutral-warmgray rounded-lg focus:outline-none focus:ring-2 focus:ring-desert-gold">
                <option>Sort by</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
                <option>Name</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <section className="bg-pearl-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-neutral-charcoal/70">
            Showing <span className="font-semibold text-neutral-charcoal">{hotels.length}</span> luxury hotels
          </p>
        </div>
      </section>

      {/* Hotels Grid */}
      <section className="bg-pearl-white py-12 pb-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel) => (
              <Link 
                key={hotel.id} 
                href={`/hotels/${hotel.slug}`}
                className="group bg-white rounded-2xl overflow-hidden luxury-shadow hover:luxury-shadow-hover transition-all duration-300"
              >
                {/* Hotel Image */}
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={hotel.featuredImage}
                    alt={hotel.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Featured Badge */}
                  {hotel.isFeatured && (
                    <div className="absolute top-4 left-4 bg-royal-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                  {/* Star Rating */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <svg className="w-4 h-4 text-royal-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-semibold text-neutral-charcoal">{hotel.starRating}</span>
                  </div>
                </div>

                {/* Hotel Info */}
                <div className="p-6">
                  <div className="mb-2">
                    <h3 className="text-2xl font-serif font-bold text-neutral-charcoal mb-1 group-hover:text-desert-gold transition-colors">
                      {hotel.name}
                    </h3>
                    <p className="text-sm text-neutral-charcoal/60 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {hotel.location}
                    </p>
                  </div>

                  <p className="text-neutral-charcoal/70 mb-4 line-clamp-2">
                    {hotel.shortDescription}
                  </p>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.amenities.slice(0, 3).map((amenity, index) => (
                      <span 
                        key={index}
                        className="text-xs bg-desert-sand text-neutral-charcoal px-2 py-1 rounded-full"
                      >
                        {amenity}
                      </span>
                    ))}
                    {hotel.amenities.length > 3 && (
                      <span className="text-xs text-neutral-charcoal/60">
                        +{hotel.amenities.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-neutral-warmgray/30">
                    <div>
                      <span className="text-sm text-neutral-charcoal/60">From</span>
                      <p className="text-2xl font-bold text-desert-gold">
                        {formatCurrency(hotel.basePrice)}
                      </p>
                      <span className="text-sm text-neutral-charcoal/60">per night</span>
                    </div>
                    <button className="px-6 py-2 bg-royal-gold hover:bg-desert-gold text-white font-semibold rounded-lg transition-all duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-desert text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Our luxury travel experts are here to help you find the perfect hotel for your stay
          </p>
          <Link 
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-desert-gold hover:bg-pearl-white font-bold rounded-lg transition-all duration-300 text-lg luxury-shadow-hover"
          >
            Contact Us
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
