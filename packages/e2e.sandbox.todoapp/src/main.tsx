import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { OsdkProvider } from "@osdk/react";
import { $, store } from "./foundryClient.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <OsdkProvider client={$} store={store}>
      <App />
    </OsdkProvider>
  </React.StrictMode>,
);
