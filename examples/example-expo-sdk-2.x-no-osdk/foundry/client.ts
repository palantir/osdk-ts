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
 */
export const client: PlatformClient = createPlatformClient(FOUNDRY_URL, getValidAuthToken);
