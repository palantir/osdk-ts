import type { BaseOauthClient } from "./BaseOauthClient.js";
import type { Token } from "./Token.js";
export interface PublicOauthClient extends BaseOauthClient<"signIn" | "signOut" | "refresh"> {
	refresh: () => Promise<Token | undefined>;
}
