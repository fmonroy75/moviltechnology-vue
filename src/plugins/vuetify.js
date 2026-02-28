import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";

// Configuración de temas premium
export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#2563eb",
          secondary: "#f59e0b",
          accent: "#10b981",
          error: "#ef4444",
          info: "#3b82f6",
          success: "#22c55e",
          warning: "#f97316",
          background: "#f8fafc",
          surface: "#ffffff",
          "primary-dark": "#1d4ed8",
          "secondary-dark": "#d97706",
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: "#3b82f6",
          secondary: "#f59e0b",
          accent: "#10b981",
          error: "#ef4444",
          info: "#3b82f6",
          success: "#22c55e",
          warning: "#f97316",
          background: "#0f172a",
          surface: "#1e293b",
          "primary-dark": "#2563eb",
          "secondary-dark": "#d97706",
        },
      },
    },
  },
});
