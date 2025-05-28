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
        border: "#EC756D",
        input: "#EC756D",
        ring: "#EC756D",
        background: "#FFF6F5", // light coral background for contrast
        foreground: "#2B2B2B", // dark text for readability
        primary: {
          DEFAULT: "#EC756D",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#F7A89E",
          foreground: "#2B2B2B",
        },
        destructive: {
          DEFAULT: "#DC2626",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#FAD9D7",
          foreground: "#6B7280",
        },
        accent: {
          DEFAULT: "#EC756D",
          foreground: "#ffffff",
          secondary: "#FBC4BF",
          tertiary: "#FFDAD4",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#2B2B2B",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#2B2B2B",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 0.25rem)",
        sm: "calc(var(--radius) - 0.5rem)",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#2B2B2B',
            fontFamily: 'Poppins, sans-serif',
            h1: { fontFamily: 'Poppins, sans-serif' },
            h2: { fontFamily: 'Poppins, sans-serif' },
            h3: { fontFamily: 'Poppins, sans-serif' },
            h4: { fontFamily: 'Poppins, sans-serif' },
          },
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.8 },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "pulse-subtle": "pulse-subtle 3s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
      },
      backgroundSize: {
        "300%": "300%",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require('@tailwindcss/typography')],
}
