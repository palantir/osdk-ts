interface Token {
    readonly access_token: string;
    readonly expires_in: number;
    readonly refresh_token?: string;
    readonly expires_at: number;
}

type Events = {
    signIn: CustomEvent<Token>;
    signOut: Event;
    refresh: CustomEvent<Token>;
};
interface BaseOauthClient<K extends keyof Events & string> {
    (): Promise<string>;
    getTokenOrUndefined: () => string | undefined;
    signIn: () => Promise<Token>;
    signOut: () => Promise<void>;
    addEventListener: <T extends K>(type: T, listener: ((evt: Events[T]) => void) | null, options?: boolean | AddEventListenerOptions) => void;
    removeEventListener: <T extends K>(type: T, callback: ((evt: Events[T]) => void) | null, options?: EventListenerOptions | boolean) => void;
}

interface ConfidentialOauthClient extends BaseOauthClient<"signIn" | "signOut"> {
}

/**
 * @param client_id
 * @param client_secret
 * @param url the base url of your foundry server
 * @param scopes
 * @param fetchFn
 * @param ctxPath
 * @returns which can be used as a token provider
 */
declare function createConfidentialOauthClient(client_id: string, client_secret: string, url: string, scopes?: string[], fetchFn?: typeof globalThis.fetch, ctxPath?: string): ConfidentialOauthClient;

interface PublicOauthClient extends BaseOauthClient<"signIn" | "signOut" | "refresh"> {
    refresh: () => Promise<Token | undefined>;
}

interface PublicOauthClientOptions {
    /**
     * If true, uses `history.replaceState()`, otherwise uses `window.location.assign()` (defaults to true)
     */
    useHistory?: boolean;
    /**
     * Custom landing page URL prior to logging in
     */
    loginPage?: string;
    /**
     * URL to return to after completed authentication cycle (defaults to `window.location.toString()`)
     */
    postLoginPage?: string;
    /**
     * * @param {string[]} [scopes=[]] - OAuth scopes to request. If not provided, defaults to `["api:read-data", "api:write-data"]`
     */
    scopes?: string[];
    /**
     * Custom fetch function to use for requests (defaults to `globalThis.fetch`)
     */
    fetchFn?: typeof globalThis.fetch;
    /**
     * Context path for the authorization server (defaults to "multipass")
     */
    ctxPath?: string;
    /**
     * Allows for an additional value to be appended to the local storage key for the refresh token.
     */
    refreshTokenMarker?: string;
}
/**
 * Creates a PublicOauthClient for authentication.
 *
 * @param {string} clientId - The client_id from the OAuth configuration on the server
 * @param {string} url - The base URL of your Foundry server
 * @param {string} redirectUrl - The URL configured for redirect in the OAuth configuration on the server
 * @param {PublicOauthClientOptions} options - Additional options for the client
 * @returns {PublicOauthClient} A client that can be used as a token provider
 */
declare function createPublicOauthClient(clientId: string, url: string, redirectUrl: string, options?: PublicOauthClientOptions): PublicOauthClient;
/**
 * Creates a PublicOauthClient for authentication.
 *
 * @param {string} clientId - The client_id from the OAuth configuration on the server
 * @param {string} url - The base URL of your Foundry server
 * @param {string} redirectUrl - The URL configured for redirect in the OAuth configuration on the server
 * @param {boolean} useHistory - If true, uses `history.replaceState()`, otherwise uses `window.location.assign()` (defaults to true)
 * @param {string} loginPage - Custom landing page URL prior to logging in
 * @param {string} postLoginPage - URL to return to after completed authentication cycle (defaults to `window.location.toString()`)
 * @param {string[]} scopes - OAuth scopes to request. If not provided, defaults to `["api:read-data", "api:write-data"]`
 * @param {typeof globalThis.fetch} fetchFn - Custom fetch function to use for requests (defaults to `globalThis.fetch`)
 * @param {string} ctxPath - Context path for the authorization server (defaults to "multipass")
 * @returns {PublicOauthClient} A client that can be used as a token provider
 */
declare function createPublicOauthClient(client_id: string, url: string, redirectUrl: string, useHistory?: boolean, loginPage?: string, postLoginPage?: string, scopes?: string[], fetchFn?: typeof globalThis.fetch, ctxPath?: string): PublicOauthClient;

export { type PublicOauthClient, createConfidentialOauthClient, createPublicOauthClient };
