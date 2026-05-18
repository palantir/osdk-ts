import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "normalize.css/normalize.css";
import "@osdk/react-components/styles.css";
import "./theme.css";

import { OsdkProvider } from "@osdk/react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { client } from "./client.js";
import { router } from "./routes.js";

const rootEl = document.getElementById("root");
if (!rootEl) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootEl).render(
  <StrictMode>
    <OsdkProvider client={client}>
      <RouterProvider router={router} />
    </OsdkProvider>
  </StrictMode>,
);
