import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
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
