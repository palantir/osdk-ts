import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { OsdkProvider } from "@osdk/react";
import { $ } from "./foundryClient.js";
import { Router } from "./router.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <OsdkProvider client={$}>
      <Router />
    </OsdkProvider>
  </React.StrictMode>,
);
