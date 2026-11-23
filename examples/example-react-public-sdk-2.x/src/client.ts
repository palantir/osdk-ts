import { createClient, type Client } from "@osdk/client";
import { createAuthlessClient } from "@osdk/oauth";

function getMetaTagContent(tagName: string): string {
  const elements = document.querySelectorAll(`meta[name="${tagName}"]`);
  const element = elements.item(elements.length - 1);
  const value = element ? element.getAttribute("content") : null;
  if (value == null || value === "") {
    throw new Error(`Meta tag ${tagName} not found or empty`);
  }
  if (value.match(/%.+%/)) {
    throw new Error(
      `Meta tag ${tagName} contains placeholder value. Please add ${value.replace(
        /%/g,
        ""
      )} to your .env files`
    );
  }
  return value;
}

const foundryUrl = getMetaTagContent("osdk-foundryUrl");
const ontologyRid = getMetaTagContent("osdk-ontologyRid");

/**
 * Initialize the client to interact with the Ontology and Platform SDKs
 */
export const client: Client = createClient(foundryUrl, ontologyRid, createAuthlessClient());

export default client;
