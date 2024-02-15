import { FoundryClient, PublicClientAuth } from "@fake/sdk";

const url = process.env.NEXT_PUBLIC_FOUNDRY_API_URL;
const clientId = process.env.NEXT_PUBLIC_FOUNDRY_CLIENT_ID;
const redirectUrl = process.env.NEXT_PUBLIC_FOUNDRY_REDIRECT_URL;
checkEnv(url, "NEXT_PUBLIC_FOUNDRY_API_URL");
checkEnv(clientId, "NEXT_PUBLIC_FOUNDRY_CLIENT_ID");
checkEnv(redirectUrl, "NEXT_PUBLIC_FOUNDRY_REDIRECT_URL");

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
  }),
});

export default client;
