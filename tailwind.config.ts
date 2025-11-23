import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        "text-secondary": "var(--text-secondary)",
        "card-border": "var(--card-border)",
        cloud: "var(--color-cloud-gray)",
        neo: "var(--color-neo-blue)",
      },
    },
  },
  plugins: [],
} satisfies Config;
