import "@radix-ui/themes/styles.css";
import "./main.css";

import { FoundryWidget } from "@osdk/widget.client-react.unstable";
import { Theme } from "@radix-ui/themes";
import { createRoot } from "react-dom/client";
import MainConfig from "./main.config.js";
import { App } from "./widget.js";

const root = document.querySelector("body")!;

createRoot(root).render(
  <Theme>
    <FoundryWidget config={MainConfig}>
      <App />
    </FoundryWidget>
  </Theme>,
);
