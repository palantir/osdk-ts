import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";

import { MonitoredOsdkProvider2 } from "@osdk/react-toolkit-monitor/provider";
import "@osdk/react-toolkit-monitor/build/esm/index.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import { BrowserLogger } from "@osdk/client/internal";
import { createPublicOauthClient } from "@osdk/oauth";
import invariant from "tiny-invariant";
import { $ontologyRid } from "./generatedNoCheck2/index.js";

invariant(
  import.meta.env.VITE_FOUNDRY_CLIENT_ID,
  "VITE_FOUNDRY_CLIENT_ID is required",
);
invariant(import.meta.env.VITE_FOUNDRY_URL, "VITE_FOUNDRY_URL is required");

const auth = createPublicOauthClient(
  import.meta.env.VITE_FOUNDRY_CLIENT_ID,
  "http://localhost:8080",
  "http://localhost:8080/auth/callback",
  {
    useHistory: true,
    scopes: [
      "api:read-data",
      "api:write-data",
      "api:use-ontologies-read",
      "api:use-ontologies-write",
      "api:use-datasets-read",
      "api:use-mediasets-read",
      "api:use-mediasets-write",
    ],
  },
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MonitoredOsdkProvider2
    config={{
      baseUrl: "http://localhost:8080",
      ontologyRid: $ontologyRid,
      auth: auth,
      logger: new BrowserLogger({}, { level: "debug" }),
    }}
    enabled={true}
  >
    <App />
  </MonitoredOsdkProvider2>,
);
