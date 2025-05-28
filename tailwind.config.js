/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#1A1A1A", // deep black
        input: "#1A1A1A",
        ring: "#1A1A1A",
        background: "#F9F8F4", // off-white
        foreground: "#1A1A1A",
        primary: {
          DEFAULT: "#1A1A1A",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#EDECE8",
          foreground: "#1A1A1A",
        },
        muted: {
          DEFAULT: "#E5E5E5",
          foreground: "#1A1A1A",
        },
        accent: {
          DEFAULT: "#1A1A1A",
          foreground: "#ffffff",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#1A1A1A",
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'], // Headings
      },
      letterSpacing: {
        widest: '.3em',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#1A1A1A',
            fontFamily: '"Space Grotesk", sans-serif',
            h1: {
              fontWeight: '800',
              letterSpacing: '-0.02em',
              fontSize: '4rem',
              lineHeight: '1.1',
            },
            h2: {
              fontWeight: '700',
              fontSize: '2.5rem',
              lineHeight: '1.2',
            },
            h3: {
              fontWeight: '600',
              fontSize: '1.75rem',
            },
            p: {
              color: '#1A1A1A',
              lineHeight: '1.6',
              fontSize: '1.1rem',
            },
            a: {
              color: '#1A1A1A',
              fontWeight: '500',
              borderBottom: '1px solid #1A1A1A',
            },
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/typography'),
  ],
}
