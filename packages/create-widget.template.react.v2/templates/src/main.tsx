import "@radix-ui/themes/styles.css";
import "./main.css";

import { FoundryWidget } from "@osdk/widget.client-react";
import { Theme } from "@radix-ui/themes";
import { createRoot } from "react-dom/client";
import MainConfig from "./main.config.js";
import { Widget } from "./Widget.js";

const root = document.getElementById("root")!;

createRoot(root).render(
  <Theme hasBackground={false}>
    <FoundryWidget config={MainConfig}>
      <Widget />
    </FoundryWidget>
  </Theme>,
);
