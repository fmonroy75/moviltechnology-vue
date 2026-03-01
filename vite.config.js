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
  // IMPORTANTE: Usa el nombre EXACTO de tu repositorio
  // Si tu repo se llama "moviltechnology-vue" (con guión)
  //base: "/moviltechnology-vue/",
  base: "/",

  // Si tu repo tiene otro nombre, cámbialo:
  // base: '/nombre-exacto-del-repo/',

  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: false,
    minify: "esbuild",

    // Configuración de assets
    assetsDir: "assets",

    rollupOptions: {
      output: {
        // Rutas relativas al base
        entryFileNames: "assets/js/[name]-[hash].js",
        chunkFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",

        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("vuetify")) {
              return "vendor-vuetify";
            }
            if (id.includes("vue")) {
              return "vendor-vue";
            }
            return "vendor";
          }
        },
      },
    },
  },
});
