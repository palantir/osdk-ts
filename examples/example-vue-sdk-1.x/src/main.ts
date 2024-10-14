import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import AuthCallback from "./AuthCallback.vue";
import client from "./client";
import Home from "./Home.vue";
import Layout from "./Layout.vue";
import Login from "./Login.vue";
import "./style.css";

const routes = [
  { path: "/", component: Home, meta: { requiresAuth: true } },
  { path: "/login", component: Login },
  { path: "/auth/callback", component: AuthCallback },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(async (to) => {
  if (
    to.meta.requiresAuth
    && (client.auth.token == null || client.auth.token.isExpired)
  ) {
    try {
      await client.auth.refresh();
    } catch (e: unknown) {
      // If we cannot refresh the token (i.e. the user is not logged in) we redirect to the login page
      return "/login";
    }
  }
});

createApp(Layout).use(router).mount("#app");
