/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
  
      colors: {
        Background: "#F2F2F2",
        Link: "#0EA5E9",
        BgSearch: "#94A3B8",
        BgIcon: "#E2E8F0",
        BgHover: "#CBD5E1",
        TextTitle: "#475569",
      },
    },
  },
  plugins: [],
}