import { createClient } from "@osdk/client";
import { fauxFoundry } from "./fauxFoundry.js";

export const mockClient = createClient(
  fauxFoundry.baseUrl,
  fauxFoundry.defaultOntologyRid,
  () => Promise.resolve("myAccessToken"),
);

// Export the client selector function
export const $ = mockClient;