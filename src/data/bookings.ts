export interface Booking {
  id: string
  referenceNumber: string
  guestName: string
  guestEmail: string
  guestPhone: string
  guestCountry: string
  hotelId: string
  hotelName: string
  suiteTypeId?: string
  suiteTypeName?: string
  checkInDate: string
  checkOutDate: string
  numNights: number
  numAdults: number
  numChildren: number
  childrenAges?: number[]
  bedPreference?: string
  specialRequests?: string
  airportTransfer: boolean
  spaPackage: boolean
  roomRatePerNight: number
  roomSubtotal: number
  servicesTotal: number
  tourismTax: number
  serviceCharge: number
  discountAmount: number
  promoCode?: string
  totalAmount: number
  currency: string
  status: 'new' | 'quoted' | 'expired' | 'paid' | 'confirmed' | 'checked_in' | 'completed' | 'cancelled' | 'rejected'
  quoteSentAt?: string
  quoteExpiresAt?: string
  quoteMessage?: string
  paymentMethod?: string
  paypalInvoiceId?: string
  paymentLink?: string
  paidAt?: string
  adminNotes?: string
  createdAt: string
  updatedAt: string
}

export const mockBookings: Booking[] = [
  {
    id: "b1",
    referenceNumber: "SL-2025-0001",
    guestName: "Sarah Johnson",
    guestEmail: "sarah.johnson@example.com",
    guestPhone: "+1-555-0123",
    guestCountry: "United States",
    hotelId: "1",
    hotelName: "Burj Al Arab Jumeirah",
    suiteTypeId: "r1",
    suiteTypeName: "Deluxe Suite",
    checkInDate: "2025-11-15",
    checkOutDate: "2025-11-18",
    numNights: 3,
    numAdults: 2,
    numChildren: 0,
    bedPreference: "King",
    specialRequests: "High floor with sea view please. Celebrating anniversary.",
    airportTransfer: true,
    spaPackage: false,
    roomRatePerNight: 3500,
    roomSubtotal: 10500,
    servicesTotal: 200,
    tourismTax: 1070,
    serviceCharge: 535,
    discountAmount: 0,
    totalAmount: 12305,
    currency: "AED",
    status: "quoted",
    quoteSentAt: "2025-10-02T10:30:00Z",
    quoteExpiresAt: "2025-10-05T23:59:59Z",
    quoteMessage: "Thank you for choosing SkyLuxe! We've included complimentary champagne for your anniversary celebration.",
    paymentLink: "https://paypal.com/invoice/mock123",
    createdAt: "2025-10-02T09:15:00Z",
    updatedAt: "2025-10-02T10:30:00Z"
  },
  {
    id: "b2",
    referenceNumber: "SL-2025-0002",
    guestName: "Mohammed Al-Rashid",
    guestEmail: "m.alrashid@example.com",
    guestPhone: "+971-50-123-4567",
    guestCountry: "Saudi Arabia",
    hotelId: "2",
    hotelName: "Atlantis The Palm",
    suiteTypeId: "r3",
    suiteTypeName: "Imperial Club Room",
    checkInDate: "2025-10-20",
    checkOutDate: "2025-10-25",
    numNights: 5,
    numAdults: 2,
    numChildren: 2,
    childrenAges: [8, 5],
    specialRequests: "Family vacation. Would like rooms close to the waterpark entrance.",
    airportTransfer: true,
    spaPackage: false,
    roomRatePerNight: 2800,
    roomSubtotal: 14000,
    servicesTotal: 200,
    tourismTax: 1420,
    serviceCharge: 710,
    discountAmount: 0,
    totalAmount: 16330,
    currency: "AED",
    status: "paid",
    quoteSentAt: "2025-09-28T14:20:00Z",
    paidAt: "2025-09-29T08:45:00Z",
    paypalInvoiceId: "INV-MOCK-456",
    paymentMethod: "paypal",
    createdAt: "2025-09-28T13:00:00Z",
    updatedAt: "2025-09-29T08:45:00Z"
  },
  {
    id: "b3",
    referenceNumber: "SL-2025-0003",
    guestName: "Emma Williams",
    guestEmail: "emma.w@example.com",
    guestPhone: "+44-20-7123-4567",
    guestCountry: "United Kingdom",
    hotelId: "3",
    hotelName: "Armani Hotel Dubai",
    suiteTypeId: "r5",
    suiteTypeName: "Armani Classic Room",
    checkInDate: "2025-10-10",
    checkOutDate: "2025-10-13",
    numNights: 3,
    numAdults: 1,
    numChildren: 0,
    specialRequests: "Business trip. Need late checkout if possible.",
    airportTransfer: false,
    spaPackage: true,
    roomRatePerNight: 2200,
    roomSubtotal: 6600,
    servicesTotal: 500,
    tourismTax: 710,
    serviceCharge: 355,
    discountAmount: 0,
    totalAmount: 8165,
    currency: "AED",
    status: "confirmed",
    quoteSentAt: "2025-09-25T11:00:00Z",
    paidAt: "2025-09-26T16:30:00Z",
    paypalInvoiceId: "INV-MOCK-789",
    paymentMethod: "paypal",
    adminNotes: "VIP guest. Late checkout approved until 6 PM.",
    createdAt: "2025-09-25T10:00:00Z",
    updatedAt: "2025-09-27T09:00:00Z"
  },
  {
    id: "b4",
    referenceNumber: "SL-2025-0004",
    guestName: "David Chen",
    guestEmail: "david.chen@example.com",
    guestPhone: "+86-138-0000-1234",
    guestCountry: "China",
    hotelId: "4",
    hotelName: "Jumeirah Beach Hotel",
    checkInDate: "2025-12-01",
    checkOutDate: "2025-12-05",
    numNights: 4,
    numAdults: 2,
    numChildren: 1,
    childrenAges: [10],
    specialRequests: "Family holiday. Interested in water sports activities.",
    airportTransfer: true,
    spaPackage: false,
    roomRatePerNight: 1800,
    roomSubtotal: 7200,
    servicesTotal: 200,
    tourismTax: 740,
    serviceCharge: 370,
    discountAmount: 0,
    totalAmount: 8510,
    currency: "AED",
    status: "new",
    createdAt: "2025-10-02T15:45:00Z",
    updatedAt: "2025-10-02T15:45:00Z"
  },
  {
    id: "b5",
    referenceNumber: "SL-2025-0005",
    guestName: "Olivia Martinez",
    guestEmail: "olivia.m@example.com",
    guestPhone: "+34-91-123-4567",
    guestCountry: "Spain",
    hotelId: "5",
    hotelName: "Palace Downtown",
    checkInDate: "2025-10-25",
    checkOutDate: "2025-10-28",
    numNights: 3,
    numAdults: 2,
    numChildren: 0,
    bedPreference: "King",
    specialRequests: "Honeymoon. Would love fountain view room.",
    airportTransfer: true,
    spaPackage: true,
    roomRatePerNight: 1500,
    roomSubtotal: 4500,
    servicesTotal: 700,
    tourismTax: 520,
    serviceCharge: 260,
    discountAmount: 0,
    totalAmount: 5980,
    currency: "AED",
    status: "new",
    createdAt: "2025-10-01T18:20:00Z",
    updatedAt: "2025-10-01T18:20:00Z"
  }
]

export const getBookingById = (id: string): Booking | undefined => {
  return mockBookings.find(booking => booking.id === id)
}

export const getBookingByReference = (reference: string): Booking | undefined => {
  return mockBookings.find(booking => booking.referenceNumber === reference)
}

export const getBookingsByStatus = (status: Booking['status']): Booking[] => {
  return mockBookings.filter(booking => booking.status === status)
}

export const getBookingsByHotel = (hotelId: string): Booking[] => {
  return mockBookings.filter(booking => booking.hotelId === hotelId)
}
