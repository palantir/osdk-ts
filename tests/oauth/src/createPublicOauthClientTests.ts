import { createPublicOauthClient } from "@osdk/oauth";

const FOUNDRY_CLIENT_ID = "example-foundry-client-id";
const FOUNDRY_URL = "http://example-foundry-url.com";

const authClient = createPublicOauthClient(
  FOUNDRY_CLIENT_ID,
  FOUNDRY_URL,
  "http://localhost:8080/auth/callback",
  true,
  undefined,
  undefined,
  undefined,
  fetch,
  undefined,
);

const authClientWithOptions = createPublicOauthClient(
  FOUNDRY_CLIENT_ID,
  FOUNDRY_URL,
  "http://localhost:8080/auth/callback",
  {
    useHistory: true,
    fetchFn: fetch,
  },
);

// Check that authClient and authClientWithOptions have identical field values
console.log(authClient);
console.log(authClientWithOptions);
