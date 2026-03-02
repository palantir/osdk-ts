import { createClient } from "@osdk/client";
import { createPublicOauthClient } from "@osdk/oauth";
import invariant from "tiny-invariant";
import { $ontologyRid } from "./generatedNoCheck/index.js";

// Environment variables required to run this example
// Create a .env file in the root of this project with:
// VITE_FOUNDRY_URL=your-foundry-url (e.g., https://swirl.palantirfoundry.com)
// VITE_FOUNDRY_CLIENT_ID=your-oauth-client-id
// VITE_FOUNDRY_REDIRECT_URL=http://localhost:5173/auth/callback (optional, defaults to window.location.origin)

invariant(
  import.meta.env.VITE_FOUNDRY_URL,
  "VITE_FOUNDRY_URL is required. Please set it in your .env file."
);

invariant(
  import.meta.env.VITE_FOUNDRY_CLIENT_ID,
  "VITE_FOUNDRY_CLIENT_ID is required. Please set it in your .env file."
);

// Use custom redirect URL if provided, otherwise use current origin
const redirectUrl = import.meta.env.VITE_FOUNDRY_REDIRECT_URL
  || `${window.location.origin}/auth/callback`;

// Create OAuth client for authentication
export const auth = createPublicOauthClient(
  import.meta.env.VITE_FOUNDRY_CLIENT_ID,
  import.meta.env.VITE_FOUNDRY_URL,
  redirectUrl,
  { useHistory: true }
);

// Create OSDK client with OAuth authentication
export const client = createClient(
  import.meta.env.VITE_FOUNDRY_URL,
  $ontologyRid,
  auth
);
