import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  // Base URL de producción
  base: "/",

  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: false,
    minify: "esbuild",

    // Aumentar el límite de warning para chunks grandes (Vuetify es pesado)
    chunkSizeWarningLimit: 1000,

    // Assets
    assetsDir: "assets",
    assetsInlineLimit: 4096, // inline archivos < 4kb como base64

    rollupOptions: {
      output: {
        entryFileNames: "assets/js/[name]-[hash].js",
        chunkFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          // Organiza assets por tipo de archivo
          const ext = assetInfo.name?.split(".").pop() ?? "";
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/.test(ext)) {
            return "assets/img/[name]-[hash].[ext]";
          }
          if (/woff2?|eot|ttf|otf/.test(ext)) {
            return "assets/fonts/[name]-[hash].[ext]";
          }
          if (ext === "css") {
            return "assets/css/[name]-[hash].[ext]";
          }
          return "assets/[ext]/[name]-[hash].[ext]";
        },

        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("vuetify")) return "vendor-vuetify";
            if (id.includes("vue-router")) return "vendor-vue-router";
            if (id.includes("vue")) return "vendor-vue";
            if (id.includes("@mdi") || id.includes("@fortawesome")) return "vendor-icons";
            return "vendor";
          }
        },
      },
    },
  },

  // Dev server
  server: {
    port: 5173,
    open: false,
  },
});
