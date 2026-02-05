import { OsdkProvider2 } from "@osdk/react/experimental";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { client } from "./client.js";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <OsdkProvider2 client={client}>
      <App />
    </OsdkProvider2>
  </React.StrictMode>,
);
