import "@radix-ui/themes/styles.css";
import "./main.css";

import { FoundryWidget } from "@osdk/widget-client-react.unstable";
import { Theme } from "@radix-ui/themes";
import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app.js";
import MainConfig from "./main.config.js";

const root = document.querySelector("body")!;

createRoot(root).render(
  <Theme>
    <FoundryWidget config={MainConfig}>
      <App />
    </FoundryWidget>
  </Theme>,
);
