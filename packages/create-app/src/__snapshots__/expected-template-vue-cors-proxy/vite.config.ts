import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8080,
    proxy: {
      "^(/multipass/api|/api)": {
        target: "https://example.palantirfoundry.com",
        changeOrigin: true,
        secure: true,
      },
    },
  },
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler",
    },
  },
});
