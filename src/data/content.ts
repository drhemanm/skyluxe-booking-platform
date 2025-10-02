export interface Testimonial {
  id: string
  customerName: string
  hotelName: string
  rating: number
  quote: string
  customerTitle: string
  isFeatured: boolean
}

export interface SiteContent {
  heroTitle: string
  heroSubtitle: string
  heroDescription: string
  aboutTitle: string
  aboutDescription: string
  aboutDescription2: string
  contactEmail: string
  contactPhone: string
  socialMedia: {
    facebook?: string
    instagram?: string
    twitter?: string
    linkedin?: string
  }
}

export const mockTestimonials: Testimonial[] = [
  {
    id: "t1",
    customerName: "Alexandra Bennett",
    hotelName: "Burj Al Arab Jumeirah",
    rating: 5,
    quote: "An absolutely unforgettable experience. The attention to detail and level of service exceeded all expectations. Every moment felt like pure luxury.",
    customerTitle: "Luxury Travel Blogger",
    isFeatured: true
  },
  {
    id: "t2",
    customerName: "James Richardson",
    hotelName: "Atlantis The Palm",
    rating: 5,
    quote: "Perfect family vacation! The kids loved the waterpark and aquarium. The staff went above and beyond to make our stay memorable.",
    customerTitle: "Family Traveler",
    isFeatured: true
  },
  {
    id: "t3",
    customerName: "Sophia Laurent",
    hotelName: "Armani Hotel Dubai",
    rating: 5,
    quote: "Elegance personified. The design, the service, the location - everything was impeccable. SkyLuxe made our anniversary truly special.",
    customerTitle: "Interior Designer",
    isFeatured: true
  },
  {
    id: "t4",
    customerName: "Michael Zhang",
    hotelName: "Palace Downtown",
    rating: 5,
    quote: "The fountain views from our suite were breathtaking. Excellent service and the perfect location for exploring Dubai.",
    customerTitle: "Business Executive",
    isFeatured: false
  },
  {
    id: "t5",
    customerName: "Isabella Costa",
    hotelName: "One&Only Royal Mirage",
    rating: 5,
    quote: "A hidden gem! The gardens are stunning and the private beach is pristine. Felt like we had our own paradise.",
    customerTitle: "Honeymoon Couple",
    isFeatured: false
  },
  {
    id: "t6",
    customerName: "Omar Al-Mahmoud",
    hotelName: "Jumeirah Beach Hotel",
    rating: 5,
    quote: "Outstanding hospitality and facilities. The beach access and waterpark made it perfect for our family getaway.",
    customerTitle: "Frequent Traveler",
    isFeatured: false
  }
]

export const siteContent: SiteContent = {
  heroTitle: "SkyLuxe",
  heroSubtitle: "Luxury Redefined in Dubai",
  heroDescription: "Experience unparalleled elegance and exceptional service in the world's most iconic destination",
  aboutTitle: "The SkyLuxe Experience",
  aboutDescription: "At SkyLuxe, we curate extraordinary stays in Dubai's most prestigious hotels. Each property is handpicked for its exceptional service, stunning design, and unforgettable experiences.",
  aboutDescription2: "From iconic landmarks to hidden gems, we connect discerning travelers with accommodations that redefine luxury and create memories that last a lifetime.",
  contactEmail: "info@skyluxe.world",
  contactPhone: "+971 4 XXX XXXX",
  socialMedia: {
    instagram: "https://instagram.com/skyluxe",
    facebook: "https://facebook.com/skyluxe",
    twitter: "https://twitter.com/skyluxe"
  }
}

export const getFeaturedTestimonials = (): Testimonial[] => {
  return mockTestimonials.filter(t => t.isFeatured)
}

export const getAllTestimonials = (): Testimonial[] => {
  return mockTestimonials
}
