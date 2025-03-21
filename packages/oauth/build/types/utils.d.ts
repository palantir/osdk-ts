import type { PublicOauthClientOptions } from "./createPublicOauthClient.js";
interface ProcessedPublicOauthClientOptions extends Omit<Required<PublicOauthClientOptions>, "loginPage" | "refreshTokenMarker"> {
	loginPage?: string;
	refreshTokenMarker?: string;
}
export declare function processOptionsAndAssignDefaults(url: string, redirect_uri: string, useHistory?: boolean | PublicOauthClientOptions, loginPage?: string, postLoginPage?: string, scopes?: string[], fetchFn?: typeof globalThis.fetch, ctxPath?: string): ProcessedPublicOauthClientOptions;
export {};
