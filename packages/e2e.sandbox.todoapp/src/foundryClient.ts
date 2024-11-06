import { createClient } from "@osdk/client";
import { createPublicOauthClient } from "@osdk/oauth";
import invariant from "tiny-invariant";
import { $ontologyRid } from "./generatedNoCheck2";

invariant(
  import.meta.env.VITE_FOUNDRY_CLIENT_ID,
  "VITE_FOUNDRY_CLIENT_ID is required",
);
invariant(import.meta.env.VITE_FOUNDRY_URL, "VITE_FOUNDRY_URL is required");

const auth = createPublicOauthClient({
  client_id: import.meta.env.VITE_FOUNDRY_CLIENT_ID,
  // url: import.meta.env.VITE_FOUNDRY_URL,
  url: "http://localhost:8080",
  redirectUrl: "http://localhost:8080/auth/callback",
  useHistory: true,
});
// Alternative:
// const auth = createPublicOauthClient(
//   import.meta.env.VITE_FOUNDRY_CLIENT_ID,
//   // import.meta.env.VITE_FOUNDRY_URL,
//   "http://localhost:8080",
//   "http://localhost:8080/auth/callback",
//   true,
// );

export const $ = createClient(
  "http://localhost:8080",
  $ontologyRid,
  auth,
);
