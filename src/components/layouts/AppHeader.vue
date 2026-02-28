<template>
  <v-app-bar :elevation="4" class="px-4" :class="{ 'dark-mode-header': isDark }">
    <v-container class="d-flex align-center justify-space-between">
      <!-- Logo - usar href en lugar de router-link -->
      <a href="/" class="d-flex align-center text-decoration-none">
        <v-avatar size="48" class="mr-3" rounded="lg">
          <v-img :src="logo" alt="MovilTechnology" />
        </v-avatar>
        <span class="text-h5 font-weight-bold" :class="isDark ? 'text-white' : 'text-dark'">
          Movil<span class="text-primary">Technology</span>
        </span>
      </a>

      <!-- Desktop Menu -->
      <div class="d-none d-md-flex ga-8">
        <a
          v-for="item in menuItems"
          :key="item.text"
          :href="item.href"
          class="nav-link text-decoration-none"
          :class="[
            isDark ? 'text-grey-lighten-1' : 'text-grey-darken-1',
            { 'nav-link--active text-primary': activeSection === item.href.slice(1) },
          ]"
          @click="handleNavClick"
        >
          {{ item.text }}
        </a>
      </div>

      <!-- Actions -->
      <div class="d-flex align-center ga-2">
        <v-btn :icon="true" @click="toggleDarkMode" variant="text" size="small">
          <v-icon>{{ isDark ? "mdi-weather-sunny" : "mdi-weather-night" }}</v-icon>
        </v-btn>

        <!-- Mobile Menu Button -->
        <v-btn class="d-md-none" :icon="true" @click="mobileMenu = !mobileMenu" variant="text">
          <v-icon>{{ mobileMenu ? "mdi-close" : "mdi-menu" }}</v-icon>
        </v-btn>
      </div>
    </v-container>
  </v-app-bar>

  <!-- Mobile Menu -->
  <v-navigation-drawer v-model="mobileMenu" temporary location="right" class="d-md-none">
    <v-list>
      <v-list-item
        v-for="item in menuItems"
        :key="item.text"
        :href="item.href"
        @click="mobileMenu = false"
      >
        <v-list-item-title>{{ item.text }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useDarkMode } from "@/composables/useDarkMode";
import logo from "@/assets/img/movil.png";

const { isDark, toggleDarkMode } = useDarkMode();
const mobileMenu = ref(false);
const activeSection = ref("inicio");

const menuItems = [
  { text: "Inicio", href: "#inicio" },
  { text: "Servicios", href: "#servicios" },
  { text: "Accesorios", href: "#accesorios" },
  { text: "Contacto", href: "#contacto" },
];

const handleNavClick = (e) => {
  const href = e.target.closest("a").getAttribute("href");
  if (href && href.startsWith("#")) {
    e.preventDefault();
    const targetId = href.slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
      activeSection.value = targetId;
    }
    mobileMenu.value = false;
  }
};

// Detectar sección activa por scroll
const handleScroll = () => {
  const sections = ["inicio", "servicios", "accesorios", "contacto"];
  for (const section of sections) {
    const element = document.getElementById(section);
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        activeSection.value = section;
        break;
      }
    }
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.nav-link {
  position: relative;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: rgb(var(--v-theme-secondary));
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link--active::after {
  width: 100%;
}

.nav-link--active {
  color: rgb(var(--v-theme-primary)) !important;
}
</style>
