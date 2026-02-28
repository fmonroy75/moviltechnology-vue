<template>
  <v-app>
    <AppHeader />

    <v-main>
      <HeroSection />
      <ServicesSection />
      <AccessoriesSection />
      <ContactSection />
    </v-main>

    <AppFooter />
    <WhatsAppFloat />
  </v-app>
</template>

<script setup>
import AppHeader from "@/components/layouts/AppHeader.vue";
import AppFooter from "@/components/layouts/AppFooter.vue";
import WhatsAppFloat from "@/components/layouts/WhatsAppFloat.vue";
import HeroSection from "@/components/home/HeroSection.vue";
import ServicesSection from "@/components/services/ServicesSection.vue";
import AccessoriesSection from "@/components/accessories/AccessoriesSection.vue";
import ContactSection from "@/components/contact/ContactSection.vue";
</script>

<style>
/* Estilos globales */
:root {
  --color-primary: #2563eb;
  --color-secondary: #f59e0b;
  --color-accent: #10b981;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Roboto", sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Poppins", sans-serif;
}

/* Clases utilitarias premium */
.text-gradient {
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.shadow-premium {
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Animaciones */
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Transiciones suaves */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
