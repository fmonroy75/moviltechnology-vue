<template>
  <v-sheet id="contacto" class="py-16" color="background">
    <v-container>
      <v-row justify="center" class="mb-12">
        <v-col cols="12" md="8" lg="6" class="text-center">
          <h2 class="text-h3 text-md-h2 font-weight-bold mb-4">
            <span class="text-primary">Contacto</span> y Ubicación
          </h2>
          <p class="text-h6 text-medium-emphasis">
            Contáctanos para reparaciones, presupuestos o consultas sobre accesorios
          </p>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">
          <v-row>
            <!-- WhatsApp Card -->
            <v-col cols="12" md="6">
              <v-card class="contact-card pa-6 text-center" elevation="4">
                <v-avatar color="#25D366" size="80" class="mb-4">
                  <v-icon color="white" size="48">mdi-whatsapp</v-icon>
                </v-avatar>

                <h3 class="text-h5 font-weight-bold mb-3">WhatsApp Directo</h3>
                <p class="text-body-1 text-medium-emphasis mb-4">
                  Para consultas rápidas, presupuestos y reparaciones. Respuesta inmediata.
                </p>

                <v-btn
                  :href="whatsappLink"
                  target="_blank"
                  color="#25D366"
                  size="large"
                  block
                  rounded="lg"
                  class="mb-3"
                >
                  <v-icon start>mdi-whatsapp</v-icon>
                  Abrir WhatsApp
                </v-btn>

                <div class="text-caption text-medium-emphasis">
                  <v-icon size="small" class="mr-1">mdi-clock</v-icon>
                  Respuesta en minutos
                </div>
              </v-card>
            </v-col>

            <!-- Email Card -->
            <v-col cols="12" md="6">
              <v-card class="contact-card pa-6 text-center" elevation="4">
                <v-avatar color="primary" size="80" class="mb-4">
                  <v-icon color="white" size="48">mdi-email</v-icon>
                </v-avatar>

                <h3 class="text-h5 font-weight-bold mb-3">Email</h3>
                <p class="text-body-1 text-medium-emphasis mb-4">
                  Para consultas detalladas, cotizaciones formales o información corporativa.
                </p>

                <v-text-field
                  v-model="email"
                  readonly
                  variant="solo"
                  density="compact"
                  class="mb-3"
                  :append-inner-icon="copied ? 'mdi-check' : 'mdi-content-copy'"
                  @click:append-inner="copyEmail"
                ></v-text-field>

                <v-btn
                  :href="`mailto:${email}?subject=Consulta%20Servicio%20Técnico&body=Hola,%20necesito%20información%20sobre%3A`"
                  color="primary"
                  size="large"
                  block
                  rounded="lg"
                >
                  <v-icon start>mdi-send</v-icon>
                  Enviar Email
                </v-btn>

                <v-snackbar v-model="showSnackbar" :timeout="2000" color="success" location="top">
                  ¡Email copiado al portapapeles!
                </v-snackbar>
              </v-card>
            </v-col>
          </v-row>

          <!-- Info adicional -->
          <v-row class="mt-6">
            <v-col cols="12" md="4">
              <v-card class="info-card pa-4 text-center" elevation="2">
                <v-icon color="primary" size="32" class="mb-2">mdi-clock</v-icon>
                <h4 class="text-subtitle-1 font-weight-bold">Horarios</h4>
                <p class="text-body-2">Lunes a Viernes: 9:00 - 18:00</p>
                <p class="text-body-2">Sábados: 10:00 - 14:00</p>
              </v-card>
            </v-col>

            <v-col cols="12" md="4">
              <v-card class="info-card pa-4 text-center" elevation="2">
                <v-icon color="secondary" size="32" class="mb-2">mdi-shield</v-icon>
                <h4 class="text-subtitle-1 font-weight-bold">Garantía</h4>
                <p class="text-body-2">90 días en reparaciones</p>
                <p class="text-body-2">30 días en accesorios</p>
              </v-card>
            </v-col>

            <v-col cols="12" md="4">
              <v-card class="info-card pa-4 text-center" elevation="2">
                <v-icon color="accent" size="32" class="mb-2">mdi-tools</v-icon>
                <h4 class="text-subtitle-1 font-weight-bold">Diagnóstico</h4>
                <p class="text-body-2">Gratuito y sin compromiso</p>
                <p class="text-body-2">Presupuesto al instante</p>
              </v-card>
            </v-col>
          </v-row>

          <!-- Mapa de Google sin API -->
          <v-row class="mt-12">
            <v-col cols="12">
              <v-card class="map-card" elevation="4">
                <v-card-title class="text-h5 font-weight-bold pa-4 bg-primary">
                  <v-icon start size="28" color="white">mdi-map-marker</v-icon>
                  <span class="text-white">Nuestra Ubicación</span>
                </v-card-title>

                <v-card-text class="pa-0">
                  <div class="map-container">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.231873796995!2d-71.5615079!3d-33.0240211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689ddfd397d1dab%3A0x4ffc8400e59b70f6!2sVon%20Schroeder%20220%2C%202520000%20Vi%C3%B1a%20del%20Mar%2C%20Valpara%C3%ADso%2C%20Chile!5e0!3m2!1ses!2sca!4v1779898193081!5m2!1ses!2sca"
                      width="600"
                      height="450"
                      style="border: 0"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>

                  <div class="address-container pa-4">
                    <div class="d-flex align-center justify-center">
                      <v-icon color="primary" class="mr-2">mdi-map-marker</v-icon>
                      <span class="text-body-1 font-weight-medium">
                        von Shoeders 220, Valparaíso, Chile
                      </span>
                    </div>

                    <div class="d-flex justify-center mt-3 gap-2">
                      <v-btn
                        :href="directionsLink"
                        target="_blank"
                        color="primary"
                        variant="outlined"
                        size="small"
                        prepend-icon="mdi-directions"
                      >
                        Cómo llegar
                      </v-btn>

                      <v-btn
                        :href="googleMapsLink"
                        target="_blank"
                        color="primary"
                        variant="text"
                        size="small"
                        prepend-icon="mdi-open-in-new"
                      >
                        Ver en Google Maps
                      </v-btn>
                    </div>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup>
import { ref } from "vue";

const whatsappLink =
  "https://wa.me/56988964877?text=Hola%20MovilTechnology,%20necesito%20información%20sobre%3A";
const email = ref("victoriof1987@gmail.com");
const showSnackbar = ref(false);
const copied = ref(false);

// Dirección para el mapa
const address = "von Shoeders 220, Valparaíso, Chile";
const encodedAddress = encodeURIComponent(address);

// URLs de Google Maps sin API
const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
const directionsLink = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(email.value);
    copied.value = true;
    showSnackbar.value = true;

    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.error("Error al copiar:", err);
  }
};
</script>

<style scoped>
.contact-card {
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  height: 100%;
}

.contact-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, rgb(var(--v-theme-primary)), rgb(var(--v-theme-accent)));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s ease;
}

.contact-card:hover::before {
  transform: scaleX(1);
}

.contact-card:hover {
  transform: translateY(-4px);
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
}

.info-card {
  transition: all 0.3s ease;
  height: 100%;
}

.info-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1) !important;
}

.map-card {
  transition: all 0.3s ease;
  overflow: hidden;
}

.map-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15) !important;
}

.map-container {
  position: relative;
  width: 100%;
  height: 400px;
  background-color: #f5f5f5;
}

.map-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.address-container {
  background: rgba(var(--v-theme-surface), 0.5);
  border-top: 1px solid rgba(var(--v-theme-primary), 0.1);
}

.gap-2 {
  gap: 8px;
}

/* Responsive */
@media (max-width: 600px) {
  .map-container {
    height: 300px;
  }

  .address-container .d-flex {
    flex-direction: column;
    gap: 12px;
  }
}
</style>
