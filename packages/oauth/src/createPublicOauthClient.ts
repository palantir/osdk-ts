/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import delay from "delay";
import type { Client, HttpRequestOptions } from "oauth4webapi";
import {
  authorizationCodeGrantRequest,
  calculatePKCECodeChallenge,
  customFetch,
  generateRandomCodeVerifier,
  generateRandomState,
  processAuthorizationCodeOAuth2Response,
  refreshTokenGrantRequest,
  validateAuthResponse,
} from "oauth4webapi";
import {
  common,
  createAuthorizationServer,
  readLocal,
  removeLocal,
  saveLocal,
} from "./common.js";
import type { PublicOauthClient } from "./PublicOauthClient.js";
import { throwIfError } from "./throwIfError.js";
import type { Token } from "./Token.js";
import { processOptionsAndAssignDefaults } from "./utils.js";

declare const process: {
  env: {
    NODE_ENV: "production" | "development";
    TARGET: "browser" | "node";
  };
};

export interface PublicOauthClientOptions {
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
export function createPublicOauthClient(
  clientId: string,
  url: string,
  redirectUrl: string,
  options?: PublicOauthClientOptions,
): PublicOauthClient;

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
export function createPublicOauthClient(
  client_id: string,
  url: string,
  redirectUrl: string,
  useHistory?: boolean,
  loginPage?: string,
  postLoginPage?: string,
  scopes?: string[],
  fetchFn?: typeof globalThis.fetch,
  ctxPath?: string,
): PublicOauthClient;
export function createPublicOauthClient(
  client_id: string,
  url: string,
  redirect_uri: string,
  useHistory?: boolean | PublicOauthClientOptions,
  loginPage?: string,
  postLoginPage?: string,
  scopes?: string[],
  fetchFn?: typeof globalThis.fetch,
  ctxPath?: string,
): PublicOauthClient {
  ({
    useHistory,
    loginPage,
    postLoginPage,
    scopes,
    fetchFn,
    ctxPath,
  } = processOptionsAndAssignDefaults(
    url,
    redirect_uri,
    useHistory,
    loginPage,
    postLoginPage,
    scopes,
    fetchFn,
    ctxPath,
  ));

  const client: Client = { client_id, token_endpoint_auth_method: "none" };
  const authServer = createAuthorizationServer(ctxPath, url);
  const oauthHttpOptions: HttpRequestOptions = { [customFetch]: fetchFn };

  if (scopes.length === 0) {
    scopes = ["api:ontologies-read", "api:ontologies-write"];
  }

  const { makeTokenAndSaveRefresh, getToken } = common(
    client,
    authServer,
    _signIn,
    oauthHttpOptions,
    maybeRefresh.bind(globalThis, true),
  );

  // as an arrow function, `useHistory` is known to be a boolean
  const go = async (x: string) => {
    if (useHistory) return window.history.replaceState({}, "", x);
    else window.location.assign(x);

    await delay(1000);
    throw new Error("Unable to redirect");
  };

  async function maybeRefresh(
    expectRefreshToken?: boolean,
  ): Promise<Token | undefined> {
    const { refresh_token } = readLocal(client);
    if (!refresh_token) {
      if (expectRefreshToken) throw new Error("No refresh token found");
      return;
    }

    try {
      // note, we don't use processRefreshTokenResponse because the mp oauth implementation
      // doesn't do refresh tokens quite right and this lets us skip the id check
      const result = makeTokenAndSaveRefresh(
        throwIfError(
          await processAuthorizationCodeOAuth2Response(
            authServer,
            client,
            await refreshTokenGrantRequest(
              authServer,
              client,
              refresh_token,
              oauthHttpOptions,
            ),
          ),
        ),
        "refresh",
      );

      if (
        result && window.location.pathname === new URL(redirect_uri).pathname
      ) {
        const { oldUrl } = readLocal(client);
        go(oldUrl ?? "/");
      }
      return result;
    } catch (e) {
      if (process.env.NODE_ENV !== "production") {
        // eslint-disable-next-line no-console
        console.warn(
          "Failed to get OAuth2 refresh token. Removing refresh token",
          e,
        );
      }
      removeLocal(client);
      if (expectRefreshToken) {
        throw new Error("Could not refresh token");
      }
    }
  }

  async function maybeHandleAuthReturn() {
    const { codeVerifier, state, oldUrl } = readLocal(client);
    if (!codeVerifier) return;

    try {
      const ret = makeTokenAndSaveRefresh(
        throwIfError(
          await processAuthorizationCodeOAuth2Response(
            authServer,
            client,
            await authorizationCodeGrantRequest(
              authServer,
              client,
              throwIfError(
                validateAuthResponse(
                  authServer,
                  client,
                  new URL(window.location.href),
                  state,
                ),
              ),
              redirect_uri,
              codeVerifier,
              oauthHttpOptions,
            ),
          ),
        ),
        "signIn",
      );

      go(oldUrl);
      return ret;
    } catch (e) {
      if (process.env.NODE_ENV !== "production") {
        // eslint-disable-next-line no-console
        console.warn(
          "Failed to get OAuth2 token using PKCE, removing PKCE and starting a new auth flow",
          e,
        );
      }
      removeLocal(client);
    }
  }

  // As an arrow function, `scopes` and `postLoginPage` are known at compile time
  const initiateLoginRedirect = async (): Promise<void> => {
    if (
      loginPage
      && window.location.href !== loginPage
      && window.location.pathname !== loginPage
    ) {
      saveLocal(client, { oldUrl: postLoginPage });
      return await go(loginPage);
    }

    const state = generateRandomState()!;
    const codeVerifier = generateRandomCodeVerifier();
    const oldUrl = readLocal(client).oldUrl ?? window.location.toString();
    saveLocal(client, { codeVerifier, state, oldUrl });

    window.location.assign(`${authServer
      .authorization_endpoint!}?${new URLSearchParams({
      client_id,
      response_type: "code",
      state,
      redirect_uri,
      code_challenge: await calculatePKCECodeChallenge(codeVerifier),
      code_challenge_method: "S256",
      scope: ["offline_access", ...scopes].join(" "),
    })}`);

    // Give time for redirect to happen
    await delay(1000);
    throw new Error("Unable to redirect");
  };

  /** Will throw if there is no token! */
  async function _signIn() {
    // 1. Check if we have a refresh token in local storage
    return await maybeRefresh()
      // 2. If there is no refresh token we are likely trying to perform the callback
      ?? await maybeHandleAuthReturn()
      // 3. If we haven't been able to load the token from one of the two above ways, we need to make the initial auth request
      ?? await initiateLoginRedirect() as unknown as Token;
  }

  return getToken;
}
