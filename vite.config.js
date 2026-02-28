import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    // Carpeta de salida (por defecto es 'dist')
    outDir: "dist",

    // Limpiar la carpeta antes de construir
    emptyOutDir: true,

    // Generar source maps para producción (opcional)
    sourcemap: false,

    // Tamaño máximo de chunk advetencia (en kB)
    chunkSizeWarningLimit: 1000,

    // Opciones de minificación
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true, // Eliminar console.log en producción
        drop_debugger: true,
      },
    },

    // Configuración de chunks para optimización
    rollupOptions: {
      output: {
        // Manual chunks para separar vendor
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // Separar Vuetify en su propio chunk
            if (id.includes("vuetify")) {
              return "vendor-vuetify";
            }
            // El resto de node_modules
            return "vendor";
          }
        },

        // Nombres de archivos personalizados
        entryFileNames: "assets/js/[name]-[hash].js",
        chunkFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
      },
    },
  },

  // Configuración del servidor de desarrollo
  server: {
    port: 3000,
    open: true,
  },

  // Base URL para producción (útil si se despliega en subdirectorio)
  base: "/",
});
