/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        lg: '3rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1320px',
        '2xl': '1320px',
      },
    },
    extend: {
      maxWidth: {
        container: '1320px',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#7c6fff",
          dark:    "#5a50e0",
          light:   "#9d94ff",
        },
        pink:  "#ff6b9d",
        cyan:  "#00d4ff",
        green: "#4ade80",
        dark: {
          900: "#080810",
          800: "#0e0e1a",
          700: "#13131f",
          600: "#18182a",
        },
      },
      keyframes: {
        fadeDown: {
          "0%":   { opacity: "0", transform: "translateY(-18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInRight: {
          "0%":   { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-12px)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0" },
        },
        pulseRing: {
          "0%":   { transform: "scale(1)", opacity: "0.6" },
          "100%": { transform: "scale(1.7)", opacity: "0" },
        },
        spinSlow: {
          from: { transform: "rotate(0deg)" },
          to:   { transform: "rotate(360deg)" },
        },
        revealUp: {
          "0%":   { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fillBar: {
          from: { width: "0%" },
        },
      },
      animation: {
        fadeDown:    "fadeDown 0.6s ease both",
        fadeUp:      "fadeUp 0.7s ease both",
        fadeInRight: "fadeInRight 0.8s ease both",
        float:       "float 4s ease-in-out infinite",
        float2:      "float 4s 1.3s ease-in-out infinite",
        float3:      "float 4s 2.6s ease-in-out infinite",
        blink:       "blink 0.8s step-end infinite",
        pulseRing:   "pulseRing 1.8s ease-out infinite",
        spinSlow:    "spinSlow 15s linear infinite",
        spinSlow2:   "spinSlow 22s linear infinite reverse",
      },
      backdropBlur: {
        xs: "4px",
      },
    },
  },
  plugins: [],
};
