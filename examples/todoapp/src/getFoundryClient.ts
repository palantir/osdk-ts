import { ConfidentialClientAuth, FoundryClient } from "./generatedNoCheck";

let client: FoundryClient<ConfidentialClientAuth> | undefined = undefined;

export default async function getFoundryClient() {
  if (!client) {
    client = new FoundryClient({
      url: import.meta.env.VITE_FOUNDRY_URL,
      auth: new ConfidentialClientAuth({
        clientId: import.meta.env.VITE_FOUNDRY_CLIENT_ID,
        url: import.meta.env.VITE_FOUNDRY_URL,
        clientSecret: import.meta.env.VITE_FOUNDRY_CLIENT_SECRET,
      }),
    });
  }

  // Handle authentication
  if (!client.auth.token) {
    await client.auth.signInAsServiceUser();
  }

  return client;
}
