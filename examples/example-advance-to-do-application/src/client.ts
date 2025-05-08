import { Client, createClient } from "@osdk/client";
import { createPublicOauthClient } from "@osdk/oauth";

function getMetaTagContent(tagName: string): string {
  const elements = document.querySelectorAll(`meta[name="${tagName}"]`);
  const element = elements.item(elements.length - 1);
  const value = element ? element.getAttribute("content") : null;

  if (value == null || value === "") {
    throw new Error(`Meta tag ${tagName} not found or empty`);
  }

  if (value.match(/^%.+%$/)) {
    throw new Error(`Meta tag ${tagName} contains placeholder value. Add ${value.replace(`/docs/%/g`, "")} to your .env files`);
  }

  return value;
}

const foundryUrl = getMetaTagContent("osdk-foundryUrl");
const clientId = getMetaTagContent("osdk-clientId");
const redirectUrl = getMetaTagContent("osdk-redirectUrl");
const ontologyRid = getMetaTagContent("osdk-ontologyRid");
const scopes = [
	"api:read-data",
	"api:write-data",
	"api:admin-read",
	"api:mediasets-read",
	"api:mediasets-write"
]

export const auth = createPublicOauthClient(
  clientId,
  foundryUrl,
  redirectUrl,
  undefined,
  undefined,
  undefined,
  scopes,
  )
/**
 * Initialize the client to interact with the Ontology SDK
 */
const client: Client = createClient(
  foundryUrl,
  ontologyRid,
  auth,
);

export default client;
