import { createClient, type Client } from "@osdk/client";
import { getOsdkConfig } from "@osdk/client/unstable-do-not-use";
import { createPublicOauthClient, type PublicOauthClient } from "@osdk/oauth";
import { $ontologyRid } from "@osdk/e2e.generated.catchall";

const { clientId, redirectUrl, foundryUrl, ontologyRid } =
  getOsdkConfig($ontologyRid);

const scopes = [
  "api:ontologies-read",
  "api:ontologies-write",
];

export const auth: PublicOauthClient = createPublicOauthClient(
  clientId,
  foundryUrl,
  redirectUrl,
  { scopes },
);

/**
 * Initialize the client to interact with the Ontology SDK
 */
const client: Client = createClient(
  foundryUrl,
  ontologyRid,
  auth,
);

export default client;
