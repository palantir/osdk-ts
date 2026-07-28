import { OsdkProvider } from "@osdk/react";
import React from "react";

import "./index.css";
import ReactDOM from "react-dom/client";

import { $ } from "./foundryClient.js";
import { Router } from "./router.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <OsdkProvider client={$}>
      <Router />
    </OsdkProvider>
  </React.StrictMode>
);
