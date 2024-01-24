import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "src"),
      "@api": path.resolve(__dirname, "src/api"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@common": path.resolve(__dirname, "src/common"),
      "@components": path.resolve(__dirname, "src/components"),
      "@docs": path.resolve(__dirname, "src/docs"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@sections": path.resolve(__dirname, "src/sections"),
    },
  },
});
