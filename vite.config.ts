import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  base: "/tmm25b/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  // Uncomment baris di bawah jika deploy ke GitHub Pages subdirectory
  // Ganti 'NAMA-REPO' dengan nama repository GitHub kamu
  // base: "/NAMA-REPO/",
});
