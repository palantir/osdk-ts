import { OsdkProvider2 } from "@osdk/react/experimental";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import { $ } from "./foundryClient.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <OsdkProvider2 client={$}>
      <App />
    </OsdkProvider2>
  </React.StrictMode>,
);
