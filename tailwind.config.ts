import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: "#080E62",
          deeper: "#12026B",
          orange: "#F26522",
          orangeDark: "#C84A12",
          blue: "#0C399A",
          tint: "#EEF1FF",
        },
      },
      fontFamily: { sans: ["var(--font-exo)", "system-ui", "sans-serif"] },
      maxWidth: { content: "1182px", wide: "1242px", frame: "1536px" },
      backgroundImage: {
        "cta-orange": "linear-gradient(180deg, #F26522 0%, #C84A12 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
