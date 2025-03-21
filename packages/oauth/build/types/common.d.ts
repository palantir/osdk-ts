import type { AuthorizationServer, Client, HttpRequestOptions, OAuth2TokenEndpointResponse } from "oauth4webapi";
import type { BaseOauthClient, Events } from "./BaseOauthClient.js";
import type { Token } from "./Token.js";
export interface LocalStorageState {
	refresh_token?: string;
	refreshTokenMarker?: string;
}
export type SessionStorageState = {
	codeVerifier?: never
	state?: never
	oldUrl: string
} | {
	codeVerifier: string
	state: string
	oldUrl: string
} | {
	codeVerifier?: never
	state?: never
	oldUrl?: never
};
export declare function saveLocal(client: Client, x: LocalStorageState): void;
export declare function removeLocal(client: Client): void;
export declare function readLocal(client: Client): LocalStorageState;
export declare function saveSession(client: Client, x: SessionStorageState): void;
export declare function removeSession(client: Client): void;
export declare function readSession(client: Client): SessionStorageState;
export declare function common<R extends undefined | (() => Promise<Token | undefined>)>(client: Client, as: AuthorizationServer, _signIn: () => Promise<Token>, oauthHttpOptions: HttpRequestOptions, refresh: R, refreshTokenMarker: string | undefined): {
	getToken: BaseOauthClient<keyof Events & string> & {
		refresh: R
	}
	makeTokenAndSaveRefresh: (resp: OAuth2TokenEndpointResponse, type: "signIn" | "refresh") => Token
};
export declare function createAuthorizationServer(ctxPath: string, url: string): Required<Pick<AuthorizationServer, "issuer" | "token_endpoint" | "authorization_endpoint" | "revocation_endpoint">>;
