import { ref, watch } from "vue";
import { useTheme } from "vuetify";

export function useDarkMode() {
  const theme = useTheme();
  const isDark = ref(theme.global.name.value === "dark");

  // Cargar preferencia guardada
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    theme.global.name.value = savedTheme;
    isDark.value = savedTheme === "dark";
  }

  const toggleDarkMode = () => {
    const newTheme = isDark.value ? "light" : "dark";
    theme.global.name.value = newTheme;
    localStorage.setItem("theme", newTheme);
    isDark.value = !isDark.value;
  };

  return {
    isDark,
    toggleDarkMode,
  };
}
