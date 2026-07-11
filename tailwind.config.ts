import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["var(--font-sans)", "system-ui", "sans-serif"] },
      colors: { ink: "#070711", panel: "#11101f", pink: "#ff3dbf", violet: "#8b5cf6", electric: "#36d9ff", lime: "#b9ff66" },
      boxShadow: { neon: "0 0 30px rgba(255,61,191,.25)", cyan: "0 0 24px rgba(54,217,255,.25)" },
    },
  },
  plugins: [],
} satisfies Config;
