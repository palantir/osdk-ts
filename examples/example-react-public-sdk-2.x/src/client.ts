import { createClient, type Client } from "@osdk/client";
import { createAuthlessClient } from "@osdk/oauth";

const foundryUrl = import.meta.env.VITE_FOUNDRY_API_URL;
const ontologyRid = import.meta.env.VITE_FOUNDRY_ONTOLOGY_RID;

/**
 * Initialize the client to interact with the Ontology and Platform SDKs
 */
export const client: Client = createClient(foundryUrl, ontologyRid, createAuthlessClient());

export default client;
