import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "SkyLuxe | Luxury Hotel Bookings in Dubai",
  description: "Experience world-class luxury hotels in Dubai. Book your perfect stay with SkyLuxe - where elegance meets exceptional service.",
  keywords: ["Dubai hotels", "luxury hotels", "hotel booking", "Dubai accommodation", "5-star hotels"],
  authors: [{ name: "SkyLuxe" }],
  openGraph: {
    title: "SkyLuxe | Luxury Hotel Bookings in Dubai",
    description: "Experience world-class luxury hotels in Dubai",
    url: "https://skyluxe.world",
    siteName: "SkyLuxe",
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
