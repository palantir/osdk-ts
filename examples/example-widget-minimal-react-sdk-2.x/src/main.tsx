import "@blueprintjs/core/lib/css/blueprint.css";
import "./main.css";

import { FoundryWidget } from "@osdk/widget.client-react";
import { createRoot } from "react-dom/client";
import MainConfig from "./main.config.js";
import { Widget } from "./Widget.js";

const root = document.getElementById("root")!;

createRoot(root).render(
  <FoundryWidget config={MainConfig}>
    <Widget />
  </FoundryWidget>,
);
