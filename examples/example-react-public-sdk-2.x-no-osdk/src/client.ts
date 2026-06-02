import { createPlatformClient, type PlatformClient } from "@osdk/client";
import { createAuthlessClient } from "@osdk/oauth";

const foundryUrl = import.meta.env.VITE_FOUNDRY_API_URL;

/**
 * Initialize the client to interact with the Platform SDK
 */
export const client: PlatformClient = createPlatformClient(foundryUrl, createAuthlessClient());

export default client;
