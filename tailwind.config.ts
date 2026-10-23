import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        neutral: {
          50: "#faf9f6",
          100: "#f3f0e8",
          200: "#e4dfd4",
          300: "#cec7b9",
          400: "#babdc2",
          500: "#a1a5aa",
          600: "#858990",
          700: "#646970",
          800: "#484c52",
          900: "#34373c",
          950: "#25282c"
        },
        blue: {
          50: "#f0f6fc",
          100: "#dceafa",
          200: "#bed8f2",
          300: "#91bde5",
          400: "#5f9bd3",
          500: "#3e7fbd",
          600: "#2c6aad",
          700: "#24558e",
          800: "#224977",
          900: "#203e63",
          950: "#162940"
        },
        gold: {
          50: "#faf6e9",
          100: "#f1e8c9",
          200: "#e4d49b",
          300: "#d2b961",
          400: "#bd9c32",
          500: "#ad8400",
          600: "#ad8400",
          700: "#876700",
          800: "#66500b",
          900: "#4b3b0c",
          950: "#2b2209"
        }
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-in-left": "slideInLeft 0.6s ease-out",
        "slide-in-right": "slideInRight 0.6s ease-out",
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" }
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" }
        },
        glow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" }
        }
      },
      fontSize: {
        xs: ["12px", "16px"],
        sm: ["14px", "20px"],
        base: ["16px", "24px"],
        lg: ["18px", "28px"],
        xl: ["20px", "28px"],
        "2xl": ["24px", "32px"],
        "3xl": ["30px", "36px"],
        "4xl": ["36px", "44px"],
        "5xl": ["48px", "52px"],
        "6xl": ["60px", "68px"]
      },
      borderRadius: {
        lg: "10px",
        xl: "12px",
        "2xl": "16px",
        "3xl": "24px"
      }
    }
  },
  plugins: []
};

export default config;
