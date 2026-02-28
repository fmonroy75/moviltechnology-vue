<template>
  <v-sheet id="servicios" class="py-16" color="background">
    <v-container>
      <v-row justify="center" class="mb-12">
        <v-col cols="12" md="8" lg="6" class="text-center">
          <h2 class="text-h3 text-md-h2 font-weight-bold mb-4">
            Nuestros <span class="text-primary">Servicios</span>
          </h2>
          <p class="text-h6 text-medium-emphasis">
            Reparación profesional de celulares con repuestos originales y garantía
          </p>
        </v-col>
      </v-row>

      <!-- Feature Cards -->
      <v-row>
        <v-col v-for="feature in features" :key="feature.title" cols="12" md="6" lg="3">
          <v-card class="feature-card text-center h-100" variant="flat" rounded="xl" elevation="0">
            <div class="feature-icon-wrap mb-4">
              <v-icon :icon="feature.icon" size="48" :color="feature.color" class="feature-icon" />
            </div>
            <v-card-title class="text-h6 font-weight-bold">{{ feature.title }}</v-card-title>
            <v-card-text class="text-medium-emphasis">{{ feature.description }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Detailed Services -->
      <v-row class="mt-12">
        <v-col v-for="service in detailedServices" :key="service.title" cols="12" md="6" lg="4">
          <ServiceCard :service="service" />
        </v-col>
      </v-row>

      <!-- CTA Section -->
      <v-row class="mt-16">
        <v-col cols="12">
          <v-card class="cta-card text-center pa-8" color="primary" variant="flat" rounded="xl">
            <h3 class="text-h4 text-white font-weight-bold mb-4">
              ¿Tu celular necesita reparación?
            </h3>
            <p class="text-h6 text-white text-opacity-90 mb-6">
              Consulta sin compromiso. Diagnóstico gratuito y presupuesto al instante.
            </p>
            <v-btn
              :href="whatsappCTA"
              target="_blank"
              color="white"
              size="x-large"
              rounded="lg"
              elevation="8"
            >
              <v-icon start>mdi-whatsapp</v-icon>
              Consultar por WhatsApp
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup>
import ServiceCard from "./ServiceCard.vue";

const whatsappCTA =
  "https://wa.me/5491112345678?text=Hola%20MovilTechnology,%20necesito%20presupuesto%20para%20reparar%20mi%20celular";

const features = [
  {
    icon: "mdi-apple",
    title: "Repuestos iPhone",
    description:
      "Pantallas, baterías, cámaras y componentes originales para todos los modelos de iPhone.",
    color: "primary",
  },
  {
    icon: "mdi-android",
    title: "Repuestos Android",
    description: "Componentes originales para Samsung, Xiaomi, Motorola, LG y todas las marcas.",
    color: "secondary",
  },
  {
    icon: "mdi-microchip",
    title: "Reparación de Placas",
    description: "Micro soldadura y reparación de componentes electrónicos a nivel de placa base.",
    color: "accent",
  },
  {
    icon: "mdi-headphones",
    title: "Accesorios",
    description: "Fundas, cargadores, auriculares y todo tipo de accesorios para tu celular.",
    color: "primary",
  },
];

const detailedServices = [
  {
    icon: "mdi-microchip",
    title: "Reparación de Placas",
    description:
      "Micro soldadura profesional para reparar problemas de placa base, conectores, ICs y componentes electrónicos.",
    tags: ["Micro soldadura", "Reparación de IC", "Cambio de conectores"],
    color: "primary",
    ctaLink: whatsappCTA,
  },
  {
    icon: "mdi-television",
    title: "Pantallas",
    description:
      "Cambio de pantallas rotas con displays originales y de alta calidad para todos los modelos de iPhone y Android.",
    tags: ["Pantallas originales", "Display OLED/AMOLED", "Táctil reparado"],
    color: "secondary",
    ctaLink: whatsappCTA,
  },
  {
    icon: "mdi-battery",
    title: "Baterías",
    description:
      "Cambio de baterías con componentes de alta calidad que garantizan 100% de capacidad y durabilidad.",
    tags: ["Capacidad 100%", "Baterías originales", "Alta duración"],
    color: "accent",
    ctaLink: whatsappCTA,
  },
  {
    icon: "mdi-camera",
    title: "Cámaras",
    description:
      "Reparación y cambio de módulos de cámara delantera y trasera para recuperar la calidad fotográfica.",
    tags: ["Cámara frontal", "Cámara trasera", "Lentes originales"],
    color: "primary",
    ctaLink: whatsappCTA,
  },
  {
    icon: "mdi-lock-open",
    title: "Desbloqueos",
    description:
      "Desbloqueo de operadoras, liberación de dispositivos y solución de problemas de cuenta Google/Apple.",
    tags: ["Liberación", "FRP/Google", "iCloud/Apple ID"],
    color: "secondary",
    ctaLink: whatsappCTA,
  },
  {
    icon: "mdi-cellphone",
    title: "Componentes",
    description:
      "Cambio de tapa trasera, chasis, botones, conectores de carga y todos los componentes físicos.",
    tags: ["Tapa trasera", "Chasis", "Conectores"],
    color: "accent",
    ctaLink: whatsappCTA,
  },
];
</script>

<style scoped>
.feature-card {
  border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
}

.feature-icon-wrap {
  width: 96px;
  height: 96px;
  margin: 0 auto;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    rgba(var(--v-theme-primary), 0.08) 0%,
    rgba(var(--v-theme-primary), 0.04) 100%
  );
}

.feature-icon {
  opacity: 1;
}

.cta-card {
  background: linear-gradient(
    135deg,
    rgb(var(--v-theme-primary)) 0%,
    rgb(var(--v-theme-primary-dark)) 100%
  ) !important;
}
</style>
