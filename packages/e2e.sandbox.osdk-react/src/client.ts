// NOTE: The Foundry base URL points at localhost because vite proxies to the real stack.
// Client ID and Foundry URL come from env vars. The template version is fully env-driven.
import { createClient } from "@osdk/client";
import { createPublicOauthClient } from "@osdk/oauth";
import invariant from "tiny-invariant";
import { $ontologyRid } from "./generatedNoCheck/index.js";

invariant(
  import.meta.env.VITE_FOUNDRY_CLIENT_ID,
  "VITE_FOUNDRY_CLIENT_ID is required",
);
invariant(import.meta.env.VITE_FOUNDRY_URL, "VITE_FOUNDRY_URL is required");

const auth = createPublicOauthClient(
  import.meta.env.VITE_FOUNDRY_CLIENT_ID,
  "http://localhost:8080",
  "http://localhost:8080/auth/callback",
  { useHistory: true },
);

export const client = createClient(
  "http://localhost:8080",
  $ontologyRid,
  auth,
);
