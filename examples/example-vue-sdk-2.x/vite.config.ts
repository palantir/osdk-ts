import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {  
  return {
    plugins: [vue()],
    server: {
      port: 8080,
    },
    resolve: {
      alias: {
        vue: "vue/dist/vue.esm-bundler",
      },
    },
    define: {
      "process.env.NODE_ENV": JSON.stringify(mode),
    },
  };
});
