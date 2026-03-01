# 📱 MovilTechnology - Servicio Técnico y Accesorios para Celulares

![MovilTechnology](https://img.shields.io/badge/version-1.0.0-blue)
![Vue.js](https://img.shields.io/badge/Vue.js-3.x-brightgreen)
![Vuetify](https://img.shields.io/badge/Vuetify-3.x-blue)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 🚀 Descripción

**MovilTechnology** es una aplicación web profesional orientada al
**servicio técnico y venta de accesorios para celulares**, desarrollada
con **Vue 3 + Vuetify**.

Ofrece una experiencia moderna, rápida y totalmente responsive,
incluyendo soporte para **modo oscuro y claro con persistencia
automática**.

---

## ✨ Características Principales

- 🎨 Diseño moderno y profesional\
- 🌓 Modo oscuro / claro dinámico\
- 📱 Totalmente responsive\
- ⚡ Alto rendimiento con Vite\
- 🎯 SEO optimizado\
- 🔧 Arquitectura modular reutilizable\
- 💬 Botón flotante de WhatsApp\
- 🚀 Scroll suave y navegación intuitiva

---

## 📋 Secciones

- **Inicio** → Hero Section con Call-to-Action\
- **Servicios** → Catálogo técnico\
- **Accesorios** → Productos disponibles\
- **Contacto** → Información y ubicación

---

## 🛠️ Tecnologías Utilizadas

- Vue.js 3\
- Vuetify 3\
- Vite\
- Material Design Icons\
- Font Awesome\
- Google Fonts (Poppins & Roboto)

---

## 📦 Instalación

### ✅ Prerrequisitos

- Node.js v16 o superior
- npm o yarn

---

### 🔧 Pasos

#### 2️⃣ Instalar dependencias

```bash
npm install
```

#### 3️⃣ Ejecutar proyecto

```bash
npm run dev
```

#### 4️⃣ Abrir navegador

    http://localhost:3000

---

## 🏗️ Estructura del Proyecto

    moviltechnology-vue/
    │
    ├── public/
    │   └── favicon.ico
    │
    ├── src/
    │   ├── assets/
    │   │   └── img/
    │   │       └── movil.png
    │   │
    │   ├── components/
    │   │   ├── layout/
    │   │   │   ├── AppHeader.vue
    │   │   │   ├── AppFooter.vue
    │   │   │   └── WhatsAppFloat.vue
    │   │   │
    │   │   ├── home/
    │   │   │   └── HeroSection.vue
    │   │   │
    │   │   ├── services/
    │   │   │   ├── ServicesSection.vue
    │   │   │   └── ServiceCard.vue
    │   │   │
    │   │   ├── accessories/
    │   │   │   ├── AccessoriesSection.vue
    │   │   │   └── AccessoryCard.vue
    │   │   │
    │   │   └── contact/
    │   │       └── ContactSection.vue
    │   │
    │   ├── composables/
    │   │   └── useDarkMode.js
    │   │
    │   ├── plugins/
    │   │   └── vuetify.js
    │   │
    │   ├── App.vue
    │   └── main.js
    │
    ├── index.html
    ├── package.json
    ├── vite.config.js
    └── README.md

---

## 🚀 Despliegue en GitHub Pages

### ✅ Configuración IMPORTANTE (`vite.config.js`)

Si usas **GitHub Pages dentro de un repositorio**:

```js
export default defineConfig({
  base: "/repo/",
});
```

👉 Reemplaza `repo` por el nombre de tu repositorio.

---

### ✅ Si usas dominio propio o root

```js
export default defineConfig({
  base: "/",
});
```

✔ Porque el dominio apunta directamente al root.

---

## 🏗️ Crear carpeta `dist`

```bash
npm run build
```

---

## 🚀 Deploy limpio a GitHub Pages

### Eliminar deploy anterior

```bash
git push origin --delete gh-pages
```

### Publicar nueva build

```bash
npx gh-pages -d dist
```

---

### Configurar GitHub

1.  Ir a **Settings**
2.  Entrar en **Pages**
3.  Seleccionar rama:

```{=html}
<!-- -->
```

    gh-pages

✅ Guardar cambios.

---

Tu sitio quedará disponible en:

    https://tu-usuario.github.io/repo/

---

## 🎨 Personalización

### 🎨 Colores del tema

Editar:

    src/plugins/vuetify.js

```js
colors: {
  primary: '#2563eb',
  secondary: '#f59e0b',
  accent: '#10b981'
}
```

---

### 🌓 Modo Oscuro

Persistencia automática mediante:

    localStorage

---

### 📄 Contenido Editable

Modificar datos directamente en componentes:

- Servicios
- Accesorios
- Información de contacto

---

## 📱 Funcionalidades UI

- ✅ Scroll suave
- ✅ Menú hamburguesa móvil
- ✅ WhatsApp flotante
- ✅ Cards interactivas
- ✅ Hover effects
- ✅ Copy email automático

---

## ⚙️ Scripts Disponibles

```bash
npm run dev
npm run build
npm run preview
npm run deploy
```

## 📄 Licencia

Licencia **MIT**

---

## 👨‍💻 Autor

**Francisco Monroy**\
IngeniumBright

Website: www.ingeniumbright.com\
GitHub: @fmonroy75

---

## Desarrollado por IngeniumBright
