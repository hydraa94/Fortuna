import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://integrate.api.nvidia.com",
        changeOrigin: true, // Change the origin of the request
        rewrite: (path) => path.replace(/^\/api/, ""), // Remove the /api prefix in the forwarded request
      },
    },
  },
});
