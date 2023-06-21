import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": resolve(__dirname, "./src/assets"),
      "@features": resolve(__dirname, "./src/features"),
      components: resolve(__dirname, "./src/components"),
      core: resolve(__dirname, "./src/core"),
      contexts: resolve(__dirname, "./src/contexts"),
    },
  },
});
