<template>
  <v-sheet id="inicio" class="hero-section" :style="heroStyle">
    <v-container class="fill-height">
      <v-row align="center" class="fill-height">
        <v-col cols="12" md="8" lg="6">
          <v-fade-transition appear>
            <div>
              <v-chip
                class="mb-6"
                color="white"
                variant="outlined"
                prepend-icon="mdi-circle"
                size="large"
              >
                Servicio técnico especializado en celulares
              </v-chip>

              <h1 class="text-h2 text-md-h1 font-weight-bold text-white mb-6">
                Reparación y
                <span class="text-secondary">accesorios</span>
                para tu celular
              </h1>

              <p class="text-h6 text-white text-opacity-90 mb-8">
                Servicio técnico profesional, repuestos originales y los mejores accesorios para
                iPhone y Android. Recupera tu dispositivo con garantía y calidad.
              </p>

              <div class="d-flex flex-wrap ga-4 mb-12">
                <v-btn
                  :href="whatsappRepairLink"
                  target="_blank"
                  color="secondary"
                  size="x-large"
                  rounded="lg"
                  elevation="8"
                  class="btn-hover"
                >
                  <v-icon start>mdi-tools</v-icon>
                  Solicitar Reparación
                </v-btn>

                <v-btn
                  href="#accesorios"
                  variant="outlined"
                  color="white"
                  size="x-large"
                  rounded="lg"
                  class="btn-hover"
                >
                  <v-icon start>mdi-cart</v-icon>
                  Ver Accesorios
                </v-btn>
              </div>

              <!-- Marcas que reparamos -->
              <div>
                <h3 class="text-white text-h6 font-weight-bold mb-4">Especialistas en:</h3>
                <div class="d-flex flex-wrap ga-3">
                  <v-chip
                    v-for="brand in brands"
                    :key="brand.text"
                    :prepend-icon="brand.icon"
                    color="white"
                    variant="outlined"
                  >
                    {{ brand.text }}
                  </v-chip>
                </div>
              </div>
            </div>
          </v-fade-transition>
        </v-col>
      </v-row>
    </v-container>

    <!-- Scroll indicator -->
    <div class="scroll-indicator">
      <v-btn href="#servicios" icon variant="text" color="white" size="small" class="scroll-btn">
        <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
    </div>
  </v-sheet>
</template>

<script setup>
import { computed } from "vue";

const whatsappRepairLink =
  "https://wa.me/5491112345678?text=Hola%20MovilTechnology,%20necesito%20reparar%20mi%20celular";

const brands = [
  { icon: "fa-brands fa-apple", text: "iPhone" }, // Para Font Awesome
  // O
  { icon: "mdi-apple", text: "iPhone" }, // Para MDI
  { icon: "fa-brands fa-android", text: "Android" },
  { icon: "mdi-microchip", text: "Reparación de placas" },
  { icon: "mdi-battery", text: "Baterías 100%" },
];

const heroStyle = computed(() => ({
  backgroundImage:
    "linear-gradient(135deg, rgba(37, 99, 235, 0.9) 0%, rgba(30, 64, 175, 0.9) 100%), url(https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  position: "relative",
}));
</script>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.btn-hover {
  transition: all 0.3s ease;
}

.btn-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2) !important;
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-20px);
  }
  60% {
    transform: translateX(-50%) translateY(-10px);
  }
}

.scroll-btn {
  background: rgba(255, 255, 255, 0.2) !important;
  backdrop-filter: blur(10px);
}

.scroll-btn:hover {
  background: rgba(255, 255, 255, 0.3) !important;
}
</style>
