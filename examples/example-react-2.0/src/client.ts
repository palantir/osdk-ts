import { Ontology } from "@osdk/e2e.generated.catchall";
import { Client, createClient } from "@osdk/client";
import { createPublicOauthClient } from "@osdk/oauth";

const url = import.meta.env.VITE_FOUNDRY_API_URL;
const clientId = import.meta.env.VITE_FOUNDRY_CLIENT_ID;
const redirectUrl = import.meta.env.VITE_FOUNDRY_REDIRECT_URL;

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
  )
/**
 * Initialize the client to interact with the Ontology SDK
 */
const client: Client = createClient(
  url,
  Ontology.metadata.ontologyRid,
  auth,
);

export default client;
