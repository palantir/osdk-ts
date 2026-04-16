import { OsdkProvider2 } from "@osdk/react/experimental";
import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { $ } from "./foundryClient.js";
import { Router } from "./router.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <OsdkProvider2 client={$}>
      <Router />
    </OsdkProvider2>
  </React.StrictMode>,
);
