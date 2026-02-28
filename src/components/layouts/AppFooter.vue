<template>
  <v-footer class="bg-dark text-white pa-0">
    <v-container class="py-12">
      <v-row>
        <v-col cols="12" md="4">
          <div class="d-flex align-center mb-4">
            <v-avatar size="48" rounded="lg" class="mr-3">
              <v-img :src="logo" alt="MovilTechnology" />
            </v-avatar>
            <span class="text-h5 font-weight-bold">
              Movil<span class="text-primary">Technology</span>
            </span>
          </div>
          <p class="text-grey-lighten-1">
            Servicio técnico especializado en celulares y venta de accesorios. Reparación de placas,
            micro soldadura y componentes originales.
          </p>
        </v-col>

        <v-col cols="12" md="4">
          <h4 class="text-h6 font-weight-bold mb-4">Servicios</h4>
          <v-list class="bg-transparent">
            <v-list-item
              v-for="service in services"
              :key="service.text"
              :href="service.href"
              class="px-0"
              density="compact"
            >
              <v-list-item-title class="text-grey-lighten-1">
                {{ service.text }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>

        <v-col cols="12" md="4">
          <h4 class="text-h6 font-weight-bold mb-4">Contacto Rápido</h4>
          <v-list class="bg-transparent">
            <v-list-item :href="whatsappLink" target="_blank" class="px-0" density="compact">
              <template v-slot:prepend>
                <v-icon color="green" class="mr-2">mdi-whatsapp</v-icon>
              </template>
              <v-list-item-title class="text-grey-lighten-1">
                WhatsApp: +54 9 11 1234-5678
              </v-list-item-title>
            </v-list-item>

            <v-list-item :href="`mailto:${email}`" class="px-0" density="compact">
              <template v-slot:prepend>
                <v-icon color="blue-lighten-1" class="mr-2">mdi-email</v-icon>
              </template>
              <v-list-item-title class="text-grey-lighten-1">
                {{ email }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>

      <v-divider class="border-grey-darken-1 my-8"></v-divider>

      <v-row justify="space-between" align="center">
        <v-col cols="12" md="auto" class="text-center text-md-start">
          <p class="text-grey-darken-1 text-body-2">
            &copy; 2023 MovilTechnology. Servicio técnico especializado en celulares.
          </p>
          <p class="text-grey-darken-1 text-caption mt-2">
            Reparación de placas • Micro soldadura • Pantallas • Baterías • Accesorios
          </p>
        </v-col>

        <v-col cols="12" md="auto" class="text-center text-md-end">
          <p class="text-grey-darken-1 text-caption">
            Desarrollado por
            <a
              href="https://www.ingeniumbright.com"
              target="_blank"
              class="text-white text-decoration-none"
            >
              IngeniumBright
            </a>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
import logo from "@/assets/img/movil.png";

const whatsappLink = "https://wa.me/5491112345678";
const email = "servicio@moviltechnology.com";

const services = [
  { text: "Reparación de placas", href: "#servicios" },
  { text: "Cambio de pantallas", href: "#servicios" },
  { text: "Baterías 100%", href: "#servicios" },
  { text: "Venta de accesorios", href: "#accesorios" },
];
</script>

<style scoped>
.bg-dark {
  background-color: #1e293b !important;
}

.v-list {
  --v-list-padding: 0;
}
</style>
