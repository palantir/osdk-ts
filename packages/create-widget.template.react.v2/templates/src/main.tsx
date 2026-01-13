import "@radix-ui/themes/styles.css";
import "./main.css";

import { FoundryWidget } from "@osdk/widget.client-react";
import { createRoot } from "react-dom/client";
import { client } from "./client.js";
import MainConfig from "./main.config.js";
import { Widget } from "./Widget.js";

const root = document.getElementById("root")!;

createRoot(root).render(
  <FoundryWidget config={MainConfig} client={client}>
    <Widget />
  </FoundryWidget>,
);
