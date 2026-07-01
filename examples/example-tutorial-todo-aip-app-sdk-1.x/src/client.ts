import { FoundryClient, PublicClientAuth } from "@osdk/e2e.generated.1.1.x";

function getMetaTagContent(tagName: string): string {
  const elements = document.querySelectorAll(`meta[name="${tagName}"]`);
  const element = elements.item(elements.length - 1);
  const value = element ? element.getAttribute("content") : null;
  if (value === undefined || value === null || value === "") {
    throw new Error(`Meta tag ${tagName} not found or empty`);
  }
  if (/%.+%/u.test(value)) {
    throw new Error(
      `Meta tag ${tagName} contains placeholder value. Please add ${value.replaceAll(
        "%",
        ""
      )} to your .env files`
    );
  }
  return value;
}

const url = getMetaTagContent("osdk-foundryUrl");
const clientId = getMetaTagContent("osdk-clientId");
const redirectUrl = getMetaTagContent("osdk-redirectUrl");

const scopes = ["api:ontologies-read", "api:ontologies-write"];

/**
 * Initialize the client to interact with the Ontology and Platform SDKs
 */
const client = new FoundryClient({
  auth: new PublicClientAuth({
    clientId,
    redirectUrl,
    scopes,
    url,
  }),
  url,
});

export default client;
