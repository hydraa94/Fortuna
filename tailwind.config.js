/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    // other content paths
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".scrollbar": {
          "scrollbar-width": "thin", // For Firefox
          "scrollbar-color": "#ffffff #000000", // For Firefox
        },
        ".scrollbar-thumb": {
          "background-color": "#ffffff", // Thumb color
          "border-radius": "8px",
        },
        ".scrollbar-track": {
          "background-color": "rgba(255, 255, 255, 0.1)", // Track color
          "border-radius": "8px",
        },
        ".scrollbar::-webkit-scrollbar": {
          width: "8px",
          height: "8px",
        },
        ".scrollbar::-webkit-scrollbar-track": {
          background: "rgba(255, 255, 255, 0.1)",
          "border-radius": "8px",
        },
        ".scrollbar::-webkit-scrollbar-thumb": {
          background: "#ffffff",
          "border-radius": "8px",
        },
        ".scrollbar-thumb:hover": {
          background: "#f0f0f0",
        },
      });
    },
  ],
};
