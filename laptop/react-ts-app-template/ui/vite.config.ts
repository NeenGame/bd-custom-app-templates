import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  define: {
    global: "window",
  },
  build: {
    sourcemap: false,
  },
  optimizeDeps: {
    esbuildOptions: {
      mainFields: ["module", "main"],
      resolveExtensions: [".js", ".jsx"],
    },
  },
  server: {
    port: 6969,
    open: true,
  },
  plugins: [react()],
});
