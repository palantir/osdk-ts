import "@radix-ui/themes/styles.css";
import "./main.css";
import { FoundryWidget } from "@osdk/widget.client-react.unstable";
import { Theme } from "@radix-ui/themes";
import React from "react";
import { createRoot } from "react-dom/client";
import Config from "./second.config.js";
import { App } from "./secondApp.js";
const root = document.querySelector("body");
createRoot(root).render(/*#__PURE__*/React.createElement(Theme, null, /*#__PURE__*/React.createElement(FoundryWidget, {
  config: Config
}, /*#__PURE__*/React.createElement(App, null))));
//# sourceMappingURL=second.js.map