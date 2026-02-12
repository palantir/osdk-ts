import "@blueprintjs/core/lib/css/blueprint.css";

import { FoundryWidget } from "@osdk/widget.client-react.unstable";
import { createRoot } from "react-dom/client";
import MainConfig from "./main.config.js";
import { Widget } from "./Widget.js";

const root = document.querySelector("body")!;

createRoot(root).render(
  <FoundryWidget config={MainConfig}>
    <Widget />
  </FoundryWidget>,
);
