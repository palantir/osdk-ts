import { ConfidentialClientAuth, FoundryClient } from "./generatedNoCheck";

export const foundryClient = new FoundryClient({
  url: import.meta.env.VITE_FOUNDRY_URL,
  auth: new ConfidentialClientAuth({
    clientId: import.meta.env.VITE_FOUNDRY_CLIENT_ID,
    url: import.meta.env.VITE_FOUNDRY_URL,
    clientSecret: import.meta.env.VITE_FOUNDRY_CLIENT_SECRET,
  }),
});
