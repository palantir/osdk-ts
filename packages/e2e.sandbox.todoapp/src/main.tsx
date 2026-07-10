import { OsdkProvider } from "@osdk/react";
import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App.js";
import { $ } from "./foundryClient.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <OsdkProvider client={$}>
      <App />
    </OsdkProvider>
  </React.StrictMode>
);
