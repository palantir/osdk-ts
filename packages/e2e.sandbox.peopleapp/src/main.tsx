import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createClient } from "@osdk/client";
import { OsdkProvider2 } from "@osdk/react/experimental";
import { $ontologyRid, auth, logger } from "./foundryClient.js";
import { Router } from "./router.js";

const client = createClient(
  import.meta.env.VITE_FOUNDRY_URL,
  $ontologyRid,
  auth,
  { logger },
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <OsdkProvider2 client={client}>
      <Router />
    </OsdkProvider2>
  </React.StrictMode>,
);
