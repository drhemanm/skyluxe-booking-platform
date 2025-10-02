export interface Hotel {
  id: string
  slug: string
  name: string
  description: string
  shortDescription: string
  location: string
  address: string
  starRating: number
  featuredImage: string
  galleryImages: string[]
  amenities: string[]
  basePrice: number
  isActive: boolean
  isFeatured: boolean
}

export interface RoomType {
  id: string
  hotelId: string
  name: string
  description: string
  maxAdults: number
  maxChildren: number
  bedConfiguration: string
  pricePerNight: number
  images: string[]
  amenities: string[]
}

export const mockHotels: Hotel[] = [
  {
    id: "1",
    slug: "burj-al-arab-jumeirah",
    name: "Burj Al Arab Jumeirah",
    description: "Standing on its own artificial island, Burj Al Arab Jumeirah is one of the world's most luxurious hotels. This iconic sail-shaped structure offers unparalleled luxury with duplex suites, panoramic views of the Arabian Gulf, and world-class dining experiences. Each suite features contemporary Arabian decor, floor-to-ceiling windows, and personalized butler service available 24/7.",
    shortDescription: "Iconic sail-shaped luxury hotel on its own island with unparalleled views and service",
    location: "Jumeirah Beach",
    address: "Jumeirah Street, Umm Suqeim 3, Dubai, UAE",
    starRating: 5,
    featuredImage: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200",
    galleryImages: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200"
    ],
    amenities: [
      "Private Beach",
      "Infinity Pool",
      "Spa & Wellness",
      "Fine Dining",
      "Butler Service",
      "Airport Transfer",
      "Kids Club",
      "Fitness Center"
    ],
    basePrice: 3500,
    isActive: true,
    isFeatured: true
  },
  {
    id: "2",
    slug: "atlantis-the-palm",
    name: "Atlantis The Palm",
    description: "Located at the apex of the iconic Palm Jumeirah, Atlantis The Palm offers an unforgettable experience with its marine habitat, waterpark, and diverse dining options. The resort features stunning architecture inspired by the myth of Atlantis, with luxurious rooms and suites offering views of the Arabian Gulf or Palm Island. Guests enjoy complimentary access to Aquaventure Waterpark and The Lost Chambers Aquarium.",
    shortDescription: "Iconic resort on Palm Jumeirah with waterpark, aquarium, and world-class entertainment",
    location: "Palm Jumeirah",
    address: "Crescent Road, The Palm, Dubai, UAE",
    starRating: 5,
    featuredImage: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200",
    galleryImages: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200"
    ],
    amenities: [
      "Aquaventure Waterpark",
      "Private Beach",
      "Marine Habitat",
      "Multiple Pools",
      "20+ Restaurants",
      "Spa",
      "Kids Activities",
      "Water Sports"
    ],
    basePrice: 2800,
    isActive: true,
    isFeatured: true
  },
  {
    id: "3",
    slug: "armani-hotel-dubai",
    name: "Armani Hotel Dubai",
    description: "Situated in the iconic Burj Khalifa, Armani Hotel Dubai embodies the elegance and sophistication of Giorgio Armani's style. The hotel offers contemporary luxury with minimalist design, featuring tailored services and amenities. Each room and suite reflects Armani's design philosophy with warm wood, luxurious fabrics, and cutting-edge technology, all while offering spectacular views of downtown Dubai.",
    shortDescription: "Elegant hotel by Giorgio Armani in the world's tallest building, Burj Khalifa",
    location: "Downtown Dubai",
    address: "Burj Khalifa, 1 Sheikh Mohammed bin Rashid Boulevard, Dubai, UAE",
    starRating: 5,
    featuredImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
    galleryImages: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200"
    ],
    amenities: [
      "Burj Khalifa Access",
      "Armani/SPA",
      "Fine Dining",
      "Fashion Boutique",
      "Business Center",
      "Concierge",
      "Valet Parking",
      "Meeting Rooms"
    ],
    basePrice: 2200,
    isActive: true,
    isFeatured: true
  },
  {
    id: "4",
    slug: "jumeirah-beach-hotel",
    name: "Jumeirah Beach Hotel",
    description: "Designed to resemble a breaking wave, Jumeirah Beach Hotel offers a unique beachfront experience with stunning views of Burj Al Arab. The hotel features spacious rooms with private balconies, direct beach access, and complimentary access to Wild Wadi Waterpark. Perfect for families and couples seeking a luxurious beach resort experience with exceptional dining options and water sports activities.",
    shortDescription: "Wave-shaped beachfront resort with waterpark access and stunning Burj Al Arab views",
    location: "Jumeirah Beach",
    address: "Jumeirah Street, Umm Suqeim 3, Dubai, UAE",
    starRating: 5,
    featuredImage: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200",
    galleryImages: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200"
    ],
    amenities: [
      "Private Beach",
      "Wild Wadi Access",
      "Multiple Pools",
      "Water Sports",
      "Kids Club",
      "11 Restaurants",
      "Spa",
      "Tennis Courts"
    ],
    basePrice: 1800,
    isActive: true,
    isFeatured: true
  },
  {
    id: "5",
    slug: "palace-downtown",
    name: "Palace Downtown",
    description: "An Arabian-inspired luxury hotel located in the heart of Downtown Dubai, Palace Downtown offers breathtaking views of Burj Khalifa and The Dubai Fountain. The hotel features traditional Arabian architecture blended with contemporary luxury, offering spacious rooms with private balconies overlooking the Dubai Fountain. Guests enjoy world-class dining, a luxurious spa, and proximity to Dubai Mall.",
    shortDescription: "Arabian luxury hotel with fountain and Burj Khalifa views in downtown Dubai",
    location: "Downtown Dubai",
    address: "Old Town Island, Mohammed Bin Rashid Boulevard, Dubai, UAE",
    starRating: 5,
    featuredImage: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200",
    galleryImages: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200",
      "https://images.unsplash.com/photo-1596178060810-2b59e4e0032c?w=1200",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200",
      "https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=1200"
    ],
    amenities: [
      "Fountain Views",
      "Rooftop Pool",
      "Luxury Spa",
      "Fine Dining",
      "Dubai Mall Access",
      "Business Center",
      "Valet Parking",
      "Concierge Service"
    ],
    basePrice: 1500,
    isActive: true,
    isFeatured: true
  },
  {
    id: "6",
    slug: "one-and-only-royal-mirage",
    name: "One&Only Royal Mirage",
    description: "Set amidst 65 acres of lush gardens, One&Only Royal Mirage offers an exclusive Arabian resort experience with Moorish architecture and elegant interiors. The resort features private beach access, world-renowned restaurants, and luxurious accommodations with traditional Arabian touches. Each room and suite offers stunning views of the Arabian Gulf or beautifully manicured gardens, creating a serene oasis in the heart of Dubai.",
    shortDescription: "Exclusive Arabian resort with 65 acres of gardens and private beach access",
    location: "Dubai Marina",
    address: "Al Sufouh Road, Jumeirah Beach, Dubai, UAE",
    starRating: 5,
    featuredImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200",
    galleryImages: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200",
      "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=1200",
      "https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?w=1200"
    ],
    amenities: [
      "Private Beach",
      "Lush Gardens",
      "Multiple Pools",
      "Award-winning Spa",
      "9 Restaurants",
      "Water Sports",
      "Tennis Courts",
      "Kids Club"
    ],
    basePrice: 1600,
    isActive: true,
    isFeatured: true
  }
]

export const mockRoomTypes: RoomType[] = [
  // Burj Al Arab
  {
    id: "r1",
    hotelId: "1",
    name: "Deluxe Suite",
    description: "Spacious duplex suite with panoramic Arabian Gulf views, featuring contemporary Arabian decor and 24/7 butler service",
    maxAdults: 3,
    maxChildren: 2,
    bedConfiguration: "1 King Bed",
    pricePerNight: 3500,
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800"
    ],
    amenities: ["Ocean View", "Butler Service", "Jacuzzi", "Living Room"]
  },
  {
    id: "r2",
    hotelId: "1",
    name: "Panoramic Suite",
    description: "Luxurious duplex suite with floor-to-ceiling windows offering breathtaking 180-degree views",
    maxAdults: 3,
    maxChildren: 2,
    bedConfiguration: "1 King Bed",
    pricePerNight: 5000,
    images: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800"
    ],
    amenities: ["Panoramic View", "Butler Service", "Dining Area", "Premium Bathroom"]
  },
  // Atlantis
  {
    id: "r3",
    hotelId: "2",
    name: "Imperial Club Room",
    description: "Elegant room with club lounge access and stunning views of the Arabian Gulf or Palm Island",
    maxAdults: 3,
    maxChildren: 2,
    bedConfiguration: "1 King or 2 Twin Beds",
    pricePerNight: 2800,
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800"
    ],
    amenities: ["Club Lounge", "Sea View", "Balcony", "Premium Amenities"]
  },
  {
    id: "r4",
    hotelId: "2",
    name: "Underwater Suite",
    description: "Unique suite with floor-to-ceiling views into the Ambassador Lagoon aquarium",
    maxAdults: 2,
    maxChildren: 1,
    bedConfiguration: "1 King Bed",
    pricePerNight: 8000,
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800"
    ],
    amenities: ["Aquarium View", "Living Room", "Premium Bathroom", "Butler Service"]
  },
  // Armani Hotel
  {
    id: "r5",
    hotelId: "3",
    name: "Armani Classic Room",
    description: "Minimalist luxury room designed by Giorgio Armani with city or Burj Khalifa views",
    maxAdults: 2,
    maxChildren: 1,
    bedConfiguration: "1 King Bed",
    pricePerNight: 2200,
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800"
    ],
    amenities: ["City View", "Armani Amenities", "Smart TV", "Espresso Machine"]
  },
  {
    id: "r6",
    hotelId: "3",
    name: "Armani Fountain Suite",
    description: "Sophisticated suite with views of The Dubai Fountain and downtown skyline",
    maxAdults: 3,
    maxChildren: 2,
    bedConfiguration: "1 King Bed",
    pricePerNight: 4500,
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800"
    ],
    amenities: ["Fountain View", "Living Area", "Walk-in Closet", "Premium Bathroom"]
  }
]
