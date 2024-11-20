import "@radix-ui/themes/styles.css";
import "./main.css";

import { FoundryView } from "@osdk/views-client-react.unstable";
import { Theme } from "@radix-ui/themes";
import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app.js";
import MainConfig from "./main.parameters.js";

const root = document.querySelector("body")!;

createRoot(root).render(
  (
    <Theme>
      <FoundryView
        config={MainConfig}
      >
        <App />
      </FoundryView>
    </Theme>
  ),
);
