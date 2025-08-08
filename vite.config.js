import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: process.env.VITE_BASE_URL,
  plugins: [react(), tailwindcss()],
  publicDir: './public',
  server: {
    open: true,
    port: 5173,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
