import { createRouter, createWebHistory } from "vue-router";

// Como es una página de una sola sección, no necesitamos rutas complejas
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/App.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
