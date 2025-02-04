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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        fjalla: ["var(--fjalla)"],
        sourcesans: ["var(--sourcesans)"],
      },
      boxShadow: {
        textshadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        buttonshadow: "5px 5px 0 rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
} satisfies Config;
