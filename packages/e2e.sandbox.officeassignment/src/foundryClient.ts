import { createClient } from "@osdk/client";
import { BrowserLogger } from "@osdk/client/internal";
import { createPublicOauthClient } from "@osdk/oauth";
import invariant from "tiny-invariant";
import { $ontologyRid } from "./generatedNoCheck2/index.js";

const logger = new BrowserLogger({}, { level: "debug" });

// Requests go to the local dev origin and the Vite proxy forwards them to
// VITE_FOUNDRY_URL (see vite.config.mts). This keeps calls same-origin and avoids CORS.
const baseUrl = "http://localhost:8080";

// DEV ONLY: exposed to the client bundle via the FOUNDRY_ envPrefix in vite.config.mts. Never set
// FOUNDRY_USER_TOKEN in a built or deployed artifact — it would bake a bearer token into the JS.
const userToken = import.meta.env.FOUNDRY_USER_TOKEN;

// If a user token is provided (local dev convenience), authenticate with it directly. Otherwise
// fall back to the public OAuth (PKCE) browser flow.
const tokenProvider: () => Promise<string> =
  userToken != null && userToken !== ""
    ? () => Promise.resolve(userToken)
    : createOauthTokenProvider();

function createOauthTokenProvider(): () => Promise<string> {
  invariant(
    import.meta.env.VITE_FOUNDRY_CLIENT_ID,
    "VITE_FOUNDRY_CLIENT_ID is required",
  );
  return createPublicOauthClient(
    import.meta.env.VITE_FOUNDRY_CLIENT_ID,
    baseUrl,
    `${baseUrl}/auth/callback`,
    { useHistory: true, logger },
  );
}

export const $ = createClient(baseUrl, $ontologyRid, tokenProvider, { logger });
