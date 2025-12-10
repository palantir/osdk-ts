import { createApp } from "vue";
import { router } from "./router";
import "./index.css";

const app = createApp({
  template: "<router-view />",
});

app.use(router).mount("#app");
