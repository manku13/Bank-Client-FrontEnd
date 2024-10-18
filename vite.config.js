import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ["@mui/material/Tooltip", "@emotion/styled"],
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@containers": path.resolve(__dirname, "src/containers"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@hooks": path.resolve(__dirname, "src/hooks"),

      // Add other aliases as needed
    },
  },
  plugins: [react()],
});
