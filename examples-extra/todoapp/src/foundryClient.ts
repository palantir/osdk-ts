import { createClient } from "@osdk/client";
import { ConfidentialClientAuth, FoundryClient } from "./generatedNoCheck";
import { Ontology } from "./generatedNoCheck2";

const auth = new ConfidentialClientAuth({
  clientId: import.meta.env.VITE_FOUNDRY_CLIENT_ID,
  url: import.meta.env.VITE_FOUNDRY_URL,
  clientSecret: import.meta.env.VITE_FOUNDRY_CLIENT_SECRET,
});

export const foundryClient = new FoundryClient({
  url: import.meta.env.VITE_FOUNDRY_URL,
  auth,
});

export const foundryClient2 = createClient(
  Ontology,
  import.meta.env.VITE_FOUNDRY_URL,
  async () => {
    const token = await auth.getToken();
    return token.accessToken;
  },
);
