<template>
  <v-card
    class="service-card h-100"
    :elevation="hover ? 12 : 4"
    rounded="xl"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <v-card-item class="pb-0">
      <template v-slot:prepend>
        <div class="service-icon-avatar">
          <v-icon :icon="service.icon" size="40" :color="service.color" />
        </div>
      </template>
    </v-card-item>

    <v-card-title class="text-h5 font-weight-bold pt-2">
      {{ service.title }}
    </v-card-title>

    <v-card-text>
      <p class="text-body-1 mb-4 text-medium-emphasis">{{ service.description }}</p>

      <div class="d-flex flex-wrap ga-2">
        <v-chip
          v-for="tag in service.tags"
          :key="tag"
          :color="service.color"
          variant="tonal"
          size="small"
          class="font-weight-medium"
        >
          {{ tag }}
        </v-chip>
      </div>
    </v-card-text>

    <v-overlay :model-value="hover" class="align-center justify-center" scrim="primary" contained>
      <v-btn :href="service.ctaLink" target="_blank" :color="service.color" variant="flat" size="large" rounded="lg">
        <v-icon start icon="mdi-whatsapp" />
        Consultar
      </v-btn>
    </v-overlay>
  </v-card>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  service: {
    type: Object,
    required: true,
  },
});

const hover = ref(false);
</script>

<style scoped>
.service-card {
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
}

.service-card:hover {
  transform: translateY(-4px);
}

.service-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, rgb(var(--v-theme-primary)), rgb(var(--v-theme-secondary)));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-icon-avatar {
  width: 72px;
  height: 72px;
  min-width: 72px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    rgba(var(--v-theme-primary), 0.12) 0%,
    rgba(var(--v-theme-secondary), 0.08) 100%
  );
}

:deep(.v-overlay__content) {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
