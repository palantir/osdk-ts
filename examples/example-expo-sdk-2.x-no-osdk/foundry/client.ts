import {
  Client,
  createClient,
  createPlatformClient,
  PlatformClient,
} from "@osdk/client";
import { FOUNDRY_URL } from "./osdkConst";
import { getValidAuthToken } from "./Auth";

/**
 * Initialize the client to interact with the Platform SDK
 *
 * If you later add an Ontology SDK to your application, follow the steps in 
 * https://fake.palantirfoundry.com/docs/foundry/ontology-sdk/add-osdk-to-bootstrapped-repository/
 * to correctly set it up in this code repository.
 */
export const client: PlatformClient = createPlatformClient(FOUNDRY_URL, getValidAuthToken);
