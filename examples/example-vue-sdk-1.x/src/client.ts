import { FoundryClient, PublicClientAuth } from "@osdk/e2e.generated.1.1.x";

function getMetaTagContent(tagName: string): string {
  const elements = document.querySelectorAll(`meta[name="${tagName}"]`);
  const element = elements.item(elements.length - 1);
  const value = element ? element.getAttribute("content") : null;
  if (value == null) {
    throw new Error(`Meta tag ${tagName} not found`);
  }
  return value;
}

const foundryUrl = getMetaTagContent("osdk-foundryUrl");
const clientId = getMetaTagContent("osdk-clientId");
const redirectUrl = getMetaTagContent("osdk-redirectUrl");
const scopes = [
  "api:ontologies-read",
  "api:ontologies-write",
];

/**
 * Initialize the client to interact with the Ontology SDK
 */
const client = new FoundryClient({
  foundryUrl,
  auth: new PublicClientAuth({
    clientId,
    foundryUrl,
    redirectUrl,
    scopes,
  }),
});

export default client;
