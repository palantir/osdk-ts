import { createClient } from "@osdk/client";
import { BrowserLogger } from "@osdk/client/internal";
import { createPublicOauthClient } from "@osdk/oauth";
import invariant from "tiny-invariant";
import { $ontologyRid } from "./generatedNoCheck2/index.js";

invariant(
  import.meta.env.VITE_FOUNDRY_CLIENT_ID,
  "VITE_FOUNDRY_CLIENT_ID is required",
);
invariant(import.meta.env.VITE_FOUNDRY_URL, "VITE_FOUNDRY_URL is required");
invariant(
  import.meta.env.VITE_FOUNDRY_REDIRECT_URL,
  "VITE_FOUNDRY_REDIRECT_URL is required",
);

export const auth = createPublicOauthClient(
  import.meta.env.VITE_FOUNDRY_CLIENT_ID,
  import.meta.env.VITE_FOUNDRY_URL,
  import.meta.env.VITE_FOUNDRY_REDIRECT_URL,
  { useHistory: true },
);

export const $ = createClient(
  import.meta.env.VITE_FOUNDRY_URL,
  $ontologyRid,
  auth,
  { logger: new BrowserLogger({}, { level: "debug" }) },
);
