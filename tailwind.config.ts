import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "white",
        foreground: "black",
        card: {
          DEFAULT: "white",
          foreground: "black",
        },
        popover: {
          DEFAULT: "white",
          foreground: "black",
        },
        primary: {
          DEFAULT: "black",
          foreground: "white",
        },
        secondary: {
          DEFAULT: "#f3f4f6",
          foreground: "black",
        },
        muted: {
          DEFAULT: "#f3f4f6",
          foreground: "#6b7280",
        },
        accent: {
          DEFAULT: "#f3f4f6",
          foreground: "black",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "white",
        },
        border: "#e5e7eb",
        input: "#e5e7eb",
        ring: "black",
        chart: {
          "1": "hsl(12, 76%, 61%)",
          "2": "hsl(173, 58%, 39%)",
          "3": "hsl(197, 37%, 24%)",
          "4": "hsl(43, 74%, 66%)",
          "5": "hsl(27, 87%, 67%)",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
