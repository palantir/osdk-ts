import { createPublicOauthClient, type PublicOauthClient } from "@osdk/oauth";
import { createClient, type Client } from "@osdk/client";

function getMetaTagContent(tagName: string): string {
  const elements = document.querySelectorAll(`meta[name="${tagName}"]`);
  const element = elements.item(elements.length - 1);
  const value = element ? element.getAttribute("content") : null;
  if (value == null || value === "") {
    throw new Error(`Meta tag ${tagName} not found or empty`);
  }
  if (value.match(/%.+%/)) {
    throw new Error(`Meta tag ${tagName} contains placeholder value. Please add ${value.replace(/%/g, "")} to your .env files`);
  }
  return value;
}

const foundryUrl = getMetaTagContent("osdk-foundryUrl");
const ontologyRid = getMetaTagContent("osdk-ontologyRid");

const clientId = getMetaTagContent("osdk-clientId");
const redirectUrl = getMetaTagContent("osdk-redirectUrl");

export const auth: PublicOauthClient = createPublicOauthClient(
  clientId,
  foundryUrl,
  redirectUrl,
  {
    scopes: ["api:ontologies-read", "api:ontologies-write"],
  }
);

/**
 * Initialize the client to interact with the Ontology SDK.
 */
const client: Client = createClient(
  foundryUrl,
  ontologyRid,
  auth,
);

export default client;
