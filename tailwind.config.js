/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-red": "#DC4A2D",
        "logo-bg": "#E7E7E7",
        "nav-text-color": "#B0B0B0",
        "title-text-color": "#888888",
        "job-text-color": "#3D3D3D",
        "delete-bg": "#FEF4F2",
        "location-text": "#5D5D5D",
      },
      fontWeight: {
        job: "1000",
      },
    },
  },
  plugins: [],
};
