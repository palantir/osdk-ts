import { createClient } from "@osdk/client";
import { fauxFoundry } from "./fauxFoundry.js";

// Create a client that will use MSW for all requests
export const mockClient = createClient(
  fauxFoundry.baseUrl,
  fauxFoundry.defaultOntologyRid,
  () => Promise.resolve("myAccessToken"),
);

// Export the client selector function
export const $ = mockClient;