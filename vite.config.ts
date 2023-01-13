import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      provider: "istanbul", // or 'c8'
      reporter: ["text", "json", "html"],
    },
    setupFiles: "./src/tests/setup.ts",
  },
});
