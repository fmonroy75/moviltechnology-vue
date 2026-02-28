<template>
  <v-btn
    :href="whatsappLink"
    target="_blank"
    class="whatsapp-float"
    color="#25D366"
    size="x-large"
    elevation="8"
    rounded="circle"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <v-icon size="32">mdi-whatsapp</v-icon>
    <v-badge v-if="showBadge" dot color="error" location="top end" class="badge-pulse"></v-badge>

    <v-tooltip activator="parent" location="left"> ¡Contáctanos por WhatsApp! </v-tooltip>
  </v-btn>
</template>

<script setup>
import { ref } from "vue";

const hover = ref(false);
const showBadge = ref(true);

const whatsappLink =
  "https://wa.me/5491112345678?text=Hola%20MovilTechnology,%20necesito%20información%20sobre%20reparación%20de%20celulares%20o%20accesorios";
</script>

<style scoped>
.whatsapp-float {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 100;
  animation: float 3s ease-in-out infinite;
  transition: all 0.3s ease;
}

.whatsapp-float:hover {
  transform: scale(1.1);
  animation: none;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.badge-pulse :deep(.v-badge__badge) {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
