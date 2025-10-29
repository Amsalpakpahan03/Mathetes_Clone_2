import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
   server: {
    host: true,
    port: 5173,
    allowedHosts: [
      'acc884760837.ngrok-free.app' // ganti sesuai hostname ngrok kamu
    ],
  },
});

