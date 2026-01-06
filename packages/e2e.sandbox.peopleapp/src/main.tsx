import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// Import Blueprint theme and component styles
import "@osdk/react-components/styles";
import { OsdkProvider2 } from "@osdk/react/experimental";
import { $ } from "./foundryClient.js";
import { Router } from "./router.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <OsdkProvider2 client={$}>
      <Router />
    </OsdkProvider2>
  </React.StrictMode>,
);
