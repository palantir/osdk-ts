import { FoundryClient, PublicClientAuth } from "@osdk/e2e.generated.1.1.x";

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

/**
 * Initialize the client to interact with the Ontology SDK
 */
const client = new FoundryClient({
  url,
  auth: new PublicClientAuth({
    clientId,
    url,
    redirectUrl,
    scopes: [
        "api:read-data",
        "api:write-data",
    ],
  }),
});

export default client;
