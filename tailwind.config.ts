import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto'],
      },
      colors: {
        brand: {
          50: "#ecf8fb",
          100: "#d9f1f7",
          500: "#2ea4c9", // left of gradient
          600: "#1e84a5", // right of gradient
          800: "#0e4b60",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(2, 6, 23, 0.08)",
      },
    },
  },
  plugins: [],
} satisfies Config;
