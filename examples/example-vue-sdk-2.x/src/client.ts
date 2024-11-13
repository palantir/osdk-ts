import type { Client } from "@osdk/client";
import { createClient } from "@osdk/client";
import { $ontologyRid } from "@osdk/e2e.generated.catchall";
import { createPublicOauthClient } from "@osdk/oauth";

const url = import.meta.env.VITE_FOUNDRY_API_URL;
const clientId = import.meta.env.VITE_FOUNDRY_CLIENT_ID;
const redirectUrl = import.meta.env.VITE_FOUNDRY_REDIRECT_URL;
const scopes = [
    "api:ontologies-read",
    "api:ontologies-write",
];

checkEnv(url, "VITE_FOUNDRY_API_URL");
checkEnv(clientId, "VITE_FOUNDRY_CLIENT_ID");
checkEnv(redirectUrl, "VITE_FOUNDRY_REDIRECT_URL");

function checkEnv(
  value: string | undefined,
  name: string,
): asserts value is string {
  if (value == null) {
    throw new Error(`Missing environment variable: ${name}`);
  }
}

export const auth = createPublicOauthClient(
  clientId,
  url,
  redirectUrl,
  true,
  undefined,
  window.location.toString(),
  scopes,
);

/**
 * Initialize the client to interact with the Ontology SDK
 */
const client: Client = createClient(
  url,
  $ontologyRid,
  auth,
);

export default client;
