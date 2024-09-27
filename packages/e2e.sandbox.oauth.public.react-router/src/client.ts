import { createClient } from "@osdk/client";
import { createPublicOauthClient } from "@osdk/oauth";

const url = import.meta.env.VITE_FOUNDRY_API_URL;
const clientId = import.meta.env.VITE_FOUNDRY_CLIENT_ID;
const redirectUrl = import.meta.env.VITE_FOUNDRY_REDIRECT_URL;
checkEnv(url, "VITE_FOUNDRY_API_URL");
checkEnv(clientId, "VITE_FOUNDRY_CLIENT_ID");
checkEnv(redirectUrl, "VITE_FOUNDRY_REDIRECT_URL");

function checkEnv(
  value: string | undefined,
  name: string,
): asserts value is string {
  if (value == null) {
    throw new Error(`Missing environment variable: ${name}`);
  }
}

const showLoginPage = true;

export const publicOauthClient = createPublicOauthClient(
  clientId,
  url,
  redirectUrl,
  // remaining arguments are optional:
  //
  // if you want to use history.replaceState instead of window.location.assign
  /* useHistory */ true,
  //
  // if you want to show a login loading page:
  /* loginPage */ showLoginPage ? "/login" : undefined,
  //
  // where to redirect after login, defaults to "page before redirect"
  /* post login page */ undefined,
  //
  // Scopes to use, defaults to: ["api:read-data", "api:write-data"],
  /* scopes */ undefined,
);

// Normally you would also export a client from here
export default createClient(url, "yourOntologyRid", publicOauthClient);
