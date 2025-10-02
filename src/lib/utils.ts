import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number, currency: string = "AED"): string {
  return new Intl.NumberFormat('en-AE', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(date)
}

export function formatDateShort(dateString: string): string {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(date)
}

export function calculateNights(checkIn: string, checkOut: string): number {
  const start = new Date(checkIn)
  const end = new Date(checkOut)
  const diffTime = Math.abs(end.getTime() - start.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays
}

export function generateBookingReference(): string {
  const year = new Date().getFullYear()
  const random = Math.floor(Math.random() * 9999).toString().padStart(4, '0')
  return `SL-${year}-${random}`
}

export function getStatusColor(status: string): string {
  const colors: Record<string, string> = {
    new: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    quoted: 'bg-blue-100 text-blue-800 border-blue-200',
    expired: 'bg-gray-100 text-gray-800 border-gray-200',
    paid: 'bg-green-100 text-green-800 border-green-200',
    confirmed: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    checked_in: 'bg-purple-100 text-purple-800 border-purple-200',
    completed: 'bg-teal-100 text-teal-800 border-teal-200',
    cancelled: 'bg-red-100 text-red-800 border-red-200',
    rejected: 'bg-red-100 text-red-800 border-red-200'
  }
  return colors[status] || 'bg-gray-100 text-gray-800 border-gray-200'
}

export function getStatusLabel(status: string): string {
  const labels: Record<string, string> = {
    new: 'New',
    quoted: 'Quoted',
    expired: 'Expired',
    paid: 'Paid',
    confirmed: 'Confirmed',
    checked_in: 'Checked In',
    completed: 'Completed',
    cancelled: 'Cancelled',
    rejected: 'Rejected'
  }
  return labels[status] || status
}

export function getStatusEmoji(status: string): string {
  const emojis: Record<string, string> = {
    new: '🟡',
    quoted: '🔵',
    expired: '⏰',
    paid: '🟢',
    confirmed: '✅',
    checked_in: '🏨',
    completed: '✔️',
    cancelled: '❌',
    rejected: '❌'
  }
  return emojis[status] || '⚪'
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validatePhone(phone: string): boolean {
  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/
  return phoneRegex.test(phone)
}

export function calculateBookingTotal(
  roomRate: number,
  nights: number,
  servicesTotal: number = 0,
  discountAmount: number = 0
): {
  roomSubtotal: number
  servicesTotal: number
  tourismTax: number
  serviceCharge: number
  discountAmount: number
  total: number
} {
  const roomSubtotal = roomRate * nights
  const subtotalBeforeTax = roomSubtotal + servicesTotal - discountAmount
  const tourismTax = subtotalBeforeTax * 0.10 // 10% tourism tax
  const serviceCharge = subtotalBeforeTax * 0.05 // 5% service charge
  const total = subtotalBeforeTax + tourismTax + serviceCharge

  return {
    roomSubtotal,
    servicesTotal,
    tourismTax,
    serviceCharge,
    discountAmount,
    total
  }
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim()
}
