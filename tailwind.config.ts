import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        fontFamily: {
        body: ['var(--font-roboto-serif)'],
        cursive: ['var(--font-caveat)'],
      },
    },
  },
  plugins: [],
};
export default config;