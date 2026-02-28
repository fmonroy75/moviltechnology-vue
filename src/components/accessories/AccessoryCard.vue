<template>
  <v-card
    class="accessory-card h-100"
    :elevation="hover ? 12 : 4"
    rounded="xl"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <v-badge
      v-if="accessory.price"
      :content="`Desde $${accessory.price}`"
      color="secondary"
      location="top end"
      class="price-badge"
      offset-x="-8"
      offset-y="8"
    />

    <div class="icon-wrapper">
      <div class="icon-circle">
        <v-icon :icon="accessory.icon" size="72" class="product-icon" />
      </div>
    </div>

    <v-card-item class="pt-4">
      <v-card-title class="text-h6 font-weight-bold text-primary">{{ accessory.title }}</v-card-title>
      <v-card-subtitle class="text-medium-emphasis">{{ accessory.subtitle }}</v-card-subtitle>
    </v-card-item>

    <v-card-text class="pt-0">
      <p class="text-body-2 mb-3 text-medium-emphasis">{{ accessory.description }}</p>

      <div class="d-flex flex-wrap ga-1">
        <v-chip
          v-for="tag in accessory.tags"
          :key="tag"
          color="primary"
          variant="tonal"
          size="small"
          class="font-weight-medium"
        >
          {{ tag }}
        </v-chip>
      </div>
    </v-card-text>

    <v-card-actions class="pt-0">
      <v-btn :href="accessory.ctaLink" target="_blank" color="secondary" variant="flat" block rounded="lg">
        <v-icon start icon="mdi-whatsapp" />
        Consultar
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-if="hover" class="overlay-hover">
        <v-btn
          :href="accessory.ctaLink"
          target="_blank"
          color="secondary"
          variant="flat"
          size="large"
          rounded="pill"
          elevation="4"
        >
          <v-icon start icon="mdi-whatsapp" />
          Consultar Disponibilidad
        </v-btn>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  accessory: {
    type: Object,
    required: true,
  },
});

const hover = ref(false);
</script>

<style scoped>
.accessory-card {
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
}

.accessory-card:hover {
  transform: translateY(-4px);
}

.icon-wrapper {
  height: 200px;
  background: linear-gradient(
    145deg,
    rgb(var(--v-theme-primary)) 0%,
    rgba(var(--v-theme-primary), 0.85) 50%,
    rgba(var(--v-theme-secondary), 0.2) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.icon-circle {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
}

.product-icon {
  color: rgb(var(--v-theme-primary)) !important;
}

.overlay-hover {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.price-badge :deep(.v-badge__badge) {
  font-size: 0.75rem;
  font-weight: 700;
  padding: 6px 10px;
  letter-spacing: 0.02em;
}
</style>
