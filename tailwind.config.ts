import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          '"Segoe UI"',
          "Roboto",
          '"PingFang TC"',
          '"Noto Sans TC"',
          '"Microsoft JhengHei"',
          '"Heiti TC"',
          "sans-serif",
        ],
      },
      colors: {
        brand: {
          50: "#ecfeff",
          100: "#cffafe",
          600: "#0891b2",
          700: "#0f766e",
          900: "#134e4a",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15, 23, 42, 0.08)",
      },
    },
  },
  plugins: [],
} satisfies Config;
