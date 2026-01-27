import { OsdkProvider2 } from "@osdk/react/experimental";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { $ } from "./foundryClient.js";
import "./index.css";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error(
    "Root element not found. Ensure index.html has <div id='root'></div>",
  );
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <OsdkProvider2 client={$}>
      <App />
    </OsdkProvider2>
  </React.StrictMode>,
);
