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
                WhatsApp: +569 8896 48 77
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
          <!-- Tarjeta de publicidad para IngeniumBright con imagen -->
          <a
            href="https://www.ingeniumbright.com"
            target="_blank"
            rel="noopener noreferrer"
            class="brand-ingenium-link"
          >
            <div class="brand-ingenium">
              <div class="brand-logo">
                <v-img src="/ingenium.png" alt="IngeniumBright" class="logo-img" cover />
              </div>
              <div class="brand-text">
                <p>Tecnología & Desarrollo</p>
                <h5>IngeniumBright</h5>
              </div>
            </div>
          </a>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
import logo from "@/assets/img/movil.png";

const whatsappLink = "https://wa.me/56988964877";
const email = "victoriof1987@gmail.com";

const services = [
  { text: "Reparación de placas", href: "#servicios" },
  { text: "Cambio de pantallas", href: "#servicios" },
  { text: "Baterías 100%", href: "#servicios" },
  { text: "Venta de accesorios", href: "#accesorios" },
];
</script>

<style scoped>
/* Variables de color */
:root {
  --primary: #f5a623;
}

.bg-dark {
  background-color: #0a0a0a !important;
}

.v-list {
  --v-list-padding: 0;
}

/* Tarjeta de IngeniumBright - Estilo premium */
.brand-ingenium-link {
  text-decoration: none;
  display: inline-block;
}

.brand-ingenium {
  display: flex;
  align-items: center;
  gap: 20px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 20px 32px;
  border-radius: 24px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.brand-ingenium:hover {
  border-color: rgba(245, 166, 35, 0.3);
  background: rgba(255, 255, 255, 0.05);
  transform: translateY(-2px);
}

.brand-logo {
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, var(--primary), #ffc837);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: all 0.3s ease;
}

.logo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.brand-ingenium:hover .brand-logo {
  transform: scale(1.05);
  box-shadow: 0 0 15px rgba(245, 166, 35, 0.4);
}

.brand-text {
  text-align: left;
}

.brand-text h5 {
  color: #fff;
  margin-bottom: 4px;
  font-size: 1.3rem;
  font-weight: 700;
  transition: color 0.3s ease;
}

.brand-ingenium:hover .brand-text h5 {
  color: var(--primary);
}

.brand-text p {
  color: var(--primary);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 700;
  margin-bottom: 4px;
}

/* Responsive */
@media (max-width: 960px) {
  .brand-ingenium {
    padding: 16px 24px;
    gap: 16px;
    justify-content: center;
    margin-top: 16px;
  }

  .brand-logo {
    width: 48px;
    height: 48px;
  }

  .brand-text h5 {
    font-size: 1.1rem;
  }
}

@media (max-width: 600px) {
  .brand-ingenium {
    padding: 12px 20px;
    gap: 12px;
  }

  .brand-logo {
    width: 40px;
    height: 40px;
  }

  .brand-text h5 {
    font-size: 1rem;
  }

  .brand-text p {
    font-size: 0.65rem;
    letter-spacing: 1px;
  }
}
</style>
