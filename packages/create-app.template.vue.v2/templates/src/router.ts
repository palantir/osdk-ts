import { createRouter, createWebHistory } from "vue-router";
import AuthCallback from "./AuthCallback.vue";
import Home from "./Home.vue";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      // This is the route defined in your application's redirect URL
      path: "/auth/callback",
      component: AuthCallback,
    },
  ],
});
