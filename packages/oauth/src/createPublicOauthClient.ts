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

declare const process: undefined | {
  env?: {
    NODE_ENV: "production" | "development";
  };
};

/**
 * @param client_id
 * @param url the base url of your foundry server
 * @param redirectUrl the url configured for redirect in the oauth configuration on the server
 * @param useHistory if true, when possible uses `history.replaceState()`, otherwise uses `window.location.assign()`
 * @param loginPage if you want a custom landing page prior to logging in, set this to that url
 * @param postLoginPage if you want to customize where you return to after a completed authentication cycle. defaults to the url when the page loaded
 * @param scopes
 * @param fetchFn
 * @param ctxPath
 * @returns {PublicOauthClient} which can be used as a token provider
 */
export function createPublicOauthClient(
  client_id: string,
  url: string,
  redirectUrl: string,
  useHistory: boolean = true,
  loginPage?: string,
  postLoginPage: string = window.location.toString(),
  scopes: string[] = [],
  fetchFn: typeof globalThis.fetch = globalThis.fetch,
  ctxPath: string = "/multipass",
): PublicOauthClient {
  const client: Client = { client_id, token_endpoint_auth_method: "none" };
  const authServer = createAuthorizationServer(ctxPath, url);
  const oauthHttpOptions: HttpRequestOptions = { [customFetch]: fetchFn };

  if (scopes.length === 0) {
    scopes = ["api:read-data", "api:write-data"];
  }

  const { makeTokenAndSaveRefresh, getToken } = common(
    client,
    authServer,
    _signIn,
    oauthHttpOptions,
    maybeRefresh.bind(globalThis, true),
  );

  async function go(x: string) {
    if (useHistory) return window.history.replaceState({}, "", x);
    else window.location.assign(x);

    await delay(1000);
    throw new Error("Unable to redirect");
  }

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
        result && window.location.pathname === new URL(redirectUrl).pathname
      ) {
        const { oldUrl } = readLocal(client);
        go(oldUrl ?? "/");
      }
      return result;
    } catch (e) {
      if (process?.env?.NODE_ENV !== "production") {
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
              redirectUrl,
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
      if (process?.env?.NODE_ENV !== "production") {
        // eslint-disable-next-line no-console
        console.warn(
          "Failed to get OAuth2 token using PKCE, removing PKCE and starting a new auth flow",
          e,
        );
      }
      removeLocal(client);
    }
  }

  async function initiateLoginRedirect(): Promise<void> {
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
      redirect_uri: redirectUrl,
      code_challenge: await calculatePKCECodeChallenge(codeVerifier),
      code_challenge_method: "S256",
      scope: ["offline_access", ...scopes].join(" "),
    })}`);

    // Give time for redirect to happen
    await delay(1000);
    throw new Error("Unable to redirect");
  }

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
