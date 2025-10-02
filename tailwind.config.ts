import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dubai-inspired color palette
        desert: {
          gold: '#C9A961',
          sand: '#E8DCC4',
        },
        sky: {
          blue: '#87CEEB',
        },
        pearl: {
          white: '#F8F6F0',
        },
        ocean: {
          turquoise: '#40E0D0',
          teal: '#008B8B',
        },
        sunset: {
          coral: '#FF9B85',
          orange: '#FF6B35',
        },
        royal: {
          gold: '#D4AF37',
        },
        neutral: {
          ivory: '#FFFFF0',
          warmgray: '#D3D3D3',
          charcoal: '#2C2C2C',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-desert': 'linear-gradient(135deg, #FF9B85 0%, #C9A961 100%)',
        'gradient-ocean': 'linear-gradient(135deg, #87CEEB 0%, #40E0D0 100%)',
        'gradient-golden': 'linear-gradient(135deg, #F8F6F0 0%, #C9A961 100%)',
      },
    },
  },
  plugins: [],
}
export default config
