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
import type {
  AuthorizationServer,
  Client,
  HttpRequestOptions,
  OAuth2TokenEndpointResponse,
} from "oauth4webapi";
import {
  authorizationCodeGrantRequest,
  calculatePKCECodeChallenge,
  customFetch,
  generateRandomCodeVerifier,
  generateRandomState,
  processAuthorizationCodeOAuth2Response,
  processRevocationResponse,
  refreshTokenGrantRequest,
  revocationRequest,
  validateAuthResponse,
} from "oauth4webapi";
import invariant from "tiny-invariant";
import { TypedEventTarget } from "typescript-event-target";
import type { Events, PublicOauthClient } from "./PublicOauthClient.js";
import { throwIfError } from "./throwIfError.js";
import type { Token } from "./Token.js";

const storageKey = "asdfasdfdhjlkajhgj";

declare const __DEV__: boolean;

type LocalStorageState =
  // when we are going to the login page
  | {
    refresh_token?: never;
    codeVerifier?: never;
    state?: never;
    oldUrl: string;
  }
  // when we are redirecting to oauth login
  | {
    refresh_token?: never;
    codeVerifier: string;
    state: string;
    oldUrl: string;
  }
  // when we have the refresh token
  | {
    refresh_token?: string;
    codeVerifier?: never;
    state?: never;
    oldUrl?: never;
  }
  | {
    refresh_token?: never;
    codeVerifier?: never;
    state?: never;
    oldUrl?: never;
  };

function saveLocal(x: LocalStorageState) {
  localStorage.setItem(storageKey, JSON.stringify(x));
}
function removeLocal() {
  localStorage.removeItem(storageKey);
}
function readLocal(): LocalStorageState {
  return JSON.parse(localStorage.getItem(storageKey) ?? "{}");
}

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
  useHistory?: boolean,
  loginPage?: string,
  postLoginPage: string = window.location.toString(),
  scopes: string[] = ["api:read-data", "api:write-data"],
  fetchFn: typeof globalThis.fetch = globalThis.fetch,
  ctxPath: string = "/multipass",
): PublicOauthClient {
  const oauthHttpOptions: HttpRequestOptions = { [customFetch]: fetchFn };
  const eventTarget = new TypedEventTarget<Events>();

  const issuer = `${new URL(ctxPath, url)}`;

  const as: AuthorizationServer = {
    token_endpoint: `${issuer}/api/oauth2/token`,
    authorization_endpoint: `${issuer}/api/oauth2/authorize`,
    revocation_endpoint: `${issuer}/api/oauth2/revoke_token`,
    issuer,
  };

  const client: Client = { client_id, token_endpoint_auth_method: "none" };

  async function go(x: string) {
    if (useHistory) return window.history.replaceState({}, "", x);
    else window.location.assign(x);

    await delay(1000);
    throw new Error("Unable to redirect");
  }

  function makeTokenAndSaveRefresh(
    resp: OAuth2TokenEndpointResponse,
    type: "signIn" | "refresh",
  ): Token {
    const { refresh_token, expires_in, access_token } = resp;
    invariant(expires_in != null);
    saveLocal({ refresh_token });
    token = {
      refresh_token,
      expires_in,
      access_token,
      expires_at: Date.now() + expires_in * 1000,
    };

    eventTarget.dispatchTypedEvent(
      type,
      new CustomEvent(type, { detail: token }),
    );
    return token;
  }

  async function maybeRefresh(expectRefreshToken?: boolean) {
    const { refresh_token } = readLocal();
    if (!refresh_token) {
      if (expectRefreshToken) throw new Error("No refresh token found");
      return;
    }

    try {
      // note, we dont use processRefreshTokenResponse because the mp oauth implementation
      // doesn't do refresh tokens quite right and this lets us skip the id check
      return makeTokenAndSaveRefresh(
        throwIfError(
          await processAuthorizationCodeOAuth2Response(
            as,
            client,
            await refreshTokenGrantRequest(
              as,
              client,
              refresh_token,
              oauthHttpOptions,
            ),
          ),
        ),
        "refresh",
      );
    } catch (e) {
      if (!__DEV__) {
        // eslint-disable-next-line no-console
        console.warn(
          "Failed to get OAuth2 refresh token. Removing refresh token",
          e,
        );
      }
      removeLocal();
      if (expectRefreshToken) {
        throw new Error("Could not refresh token");
      }
    }
  }

  async function maybeHandleAuthReturn() {
    const { codeVerifier, state, oldUrl } = readLocal();
    if (!codeVerifier) return;

    try {
      const ret = makeTokenAndSaveRefresh(
        throwIfError(
          await processAuthorizationCodeOAuth2Response(
            as,
            client,
            await authorizationCodeGrantRequest(
              as,
              client,
              throwIfError(
                validateAuthResponse(
                  as,
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
      if (__DEV__) {
        // eslint-disable-next-line no-console
        console.warn(
          "Failed to get OAuth2 token using PCKE, removing PCKE and starting a new auth flow",
          e,
        );
      }
      removeLocal();
    }
  }

  async function initiateLoginRedirect(): Promise<void> {
    if (loginPage && window.location.href !== loginPage) {
      saveLocal({ oldUrl: postLoginPage });
      return await go(loginPage);
    }

    const state = generateRandomState()!;
    const codeVerifier = generateRandomCodeVerifier();
    const oldUrl = readLocal().oldUrl ?? window.location.toString();
    saveLocal({ codeVerifier, state, oldUrl });

    window.location.assign(`${as
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

  let refreshTimeout: ReturnType<typeof setTimeout>;
  function rmTimeout() {
    if (refreshTimeout) clearTimeout(refreshTimeout);
  }
  function restartRefreshTimer(evt: CustomEvent<Token>) {
    rmTimeout();
    refreshTimeout = setTimeout(
      refresh,
      evt.detail.expires_in * 1000 - 60 * 1000,
    );
  }

  const refresh = maybeRefresh.bind(globalThis, true);

  async function signOut() {
    invariant(token, "not signed in");

    const result = await processRevocationResponse(
      await revocationRequest(
        as,
        client,
        token.access_token,
        oauthHttpOptions,
      ),
    );

    rmTimeout();

    // Clean up
    removeLocal();
    token = undefined;
    throwIfError(result);
    eventTarget.dispatchTypedEvent("signOut", new Event("signOut"));
  }

  let pendingSignIn: Promise<Token> | undefined;
  async function signIn() {
    if (pendingSignIn) {
      return pendingSignIn;
    }
    try {
      pendingSignIn = _signIn();
      return await pendingSignIn;
    } finally {
      pendingSignIn = undefined;
    }
  }
  /** Will throw if there is no token! */
  async function _signIn() {
    // 1. Check if we have a refresh token in local storage
    return token = await maybeRefresh()
      // 2. If there is no refresh token we are likely trying to perform the callback
      ?? await maybeHandleAuthReturn()
      // 3. If we haven't been able to load the token from one of the two above ways, we need to make the initial auth request
      ?? await initiateLoginRedirect() as unknown as Token;
  }

  eventTarget.addEventListener("signIn", restartRefreshTimer);
  eventTarget.addEventListener("refresh", restartRefreshTimer);

  let token: Token | undefined;
  const ret = Object.assign(async function ret() {
    if (!token || Date.now() >= token.expires_at) {
      token = await signIn();
    }
    return token!.access_token;
  }, {
    signIn,
    refresh,
    signOut,
    addEventListener: eventTarget.addEventListener.bind(
      eventTarget,
    ) as typeof eventTarget.addEventListener,
    removeEventListener: eventTarget.removeEventListener.bind(
      eventTarget,
    ) as typeof eventTarget.removeEventListener,
  });

  return ret;
}
