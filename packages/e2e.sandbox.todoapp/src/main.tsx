import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { OsdkProvider2 } from "@osdk/react/experimental";
import { $, store } from "./foundryClient.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <OsdkProvider2 client={$} store={store}>
      <App />
    </OsdkProvider2>
  </React.StrictMode>,
);
