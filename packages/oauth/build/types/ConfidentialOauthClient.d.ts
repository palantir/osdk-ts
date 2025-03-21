import type { BaseOauthClient } from "./BaseOauthClient.js";
export interface ConfidentialOauthClient extends BaseOauthClient<"signIn" | "signOut"> {}
