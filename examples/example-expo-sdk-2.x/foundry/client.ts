import {
  Client,
  createClient,
  createPlatformClient,
  PlatformClient,
} from "@osdk/client";
import { FOUNDRY_URL, ONTOLOGY_RID } from "./osdkConst";
import { getValidAuthToken } from "./Auth";

/**
 * Initialize the client to interact with the Ontology and Platform SDKs
 */
export const client: Client = createClient(
    FOUNDRY_URL, 
    ONTOLOGY_RID, 
    getValidAuthToken,
);
