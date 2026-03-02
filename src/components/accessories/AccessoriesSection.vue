<template>
  <v-sheet id="accesorios" class="py-16" color="grey-lighten-4">
    <v-container>
      <v-row justify="center" class="mb-12">
        <v-col cols="12" md="8" lg="6" class="text-center">
          <h2 class="text-h3 text-md-h2 font-weight-bold mb-4">
            Venta de <span class="text-primary">Accesorios</span>
          </h2>
          <p class="text-h6 text-medium-emphasis">
            Los mejores accesorios para proteger y potenciar tu dispositivo móvil
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          v-for="accessory in accessories"
          :key="accessory.title"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <AccessoryCard :accessory="accessory" />
        </v-col>
      </v-row>

      <!-- CTA Accesorios -->
      <v-row class="mt-12">
        <v-col cols="12">
          <v-card class="cta-card text-center pa-8" color="secondary" variant="flat" rounded="xl">
            <h3 class="text-h4 text-white font-weight-bold mb-4">
              ¿Buscas algún accesorio específico?
            </h3>
            <p class="text-h6 text-white text-opacity-90 mb-6">
              Tenemos una amplia variedad de accesorios. Consulta disponibilidad y precios.
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
              Consultar Accesorios
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup>
import AccessoryCard from "./AccessoryCard.vue";

const whatsappCTA =
  "https://wa.me/56988964877?text=Hola%20MovilTechnology,%20quiero%20consultar%20sobre%20accesorios%20para%20mi%20celular";

const accessories = [
  {
    icon: "mdi-cellphone",
    title: "Fundas Protectoras",
    subtitle: "Protección completa",
    description: "Fundas de silicona, rígidas, transparentes y antigolpes para todos los modelos.",
    tags: ["Silicona", "Transparente", "Antigolpes"],
    price: "4.990",
    ctaLink: whatsappCTA,
  },
  {
    icon: "mdi-lightning-bolt",
    title: "Cargadores",
    subtitle: "Carga rápida",
    description: "Cargadores rápidos, cables USB-C, Lightning, adaptadores y power banks.",
    tags: ["Rápido", "USB-C", "Lightning"],
    price: "3.990",
    ctaLink: whatsappCTA,
  },
  {
    icon: "mdi-headphones",
    title: "Auriculares",
    subtitle: "Audio premium",
    description: "Auriculares inalámbricos, con cable, Bluetooth y todos los accesorios de audio.",
    tags: ["Bluetooth", "Inalámbricos", "Con cable"],
    price: "7.990",
    ctaLink: whatsappCTA,
  },
  {
    icon: "mdi-shield",
    title: "Protectores",
    subtitle: "Protección de pantalla",
    description:
      "Vidrios templados, protectores de pantalla y láminas de privacidad para displays.",
    tags: ["Vidrio templado", "Privacidad", "HD Clear"],
    price: "2.990",
    ctaLink: whatsappCTA,
  },
];
</script>

<style scoped>
.cta-card {
  background: linear-gradient(
    135deg,
    rgb(var(--v-theme-secondary)) 0%,
    rgb(var(--v-theme-secondary-dark)) 100%
  ) !important;
}
</style>
