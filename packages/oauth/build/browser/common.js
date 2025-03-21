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

import { processRevocationResponse, revocationRequest } from "oauth4webapi";
import invariant from "tiny-invariant";
import { TypedEventTarget } from "typescript-event-target";
import { throwIfError } from "./throwIfError.js";
// Node 18 is supposed to have a `CustomEvent` but it is not exposed on `globalThis`
// which creates a problem for making a single codebase for node and browser. This polyfill works around it
const CustomEvent = globalThis.CustomEvent;
function localStorageKey(client) {
  return `@osdk/oauth : refresh : ${client.client_id}`;
}
export function saveLocal(client, x) {
  // MUST `localStorage?` as nodejs does not have localStorage
  globalThis.localStorage?.setItem(localStorageKey(client), JSON.stringify(x));
}
export function removeLocal(client) {
  // MUST `localStorage?` as nodejs does not have localStorage
  globalThis.localStorage?.removeItem(localStorageKey(client));
}
export function readLocal(client) {
  return JSON.parse(
  // MUST `localStorage?` as nodejs does not have localStorage
  globalThis.localStorage?.getItem(localStorageKey(client)) ?? "{}");
}
export function saveSession(client, x) {
  // MUST `sessionStorage?` as nodejs does not have sessionStorage
  globalThis.sessionStorage?.setItem(localStorageKey(client), JSON.stringify(x));
}
export function removeSession(client) {
  // MUST `sessionStorage?` as nodejs does not have sessionStorage
  globalThis.sessionStorage?.removeItem(localStorageKey(client));
}
export function readSession(client) {
  return JSON.parse(
  // MUST `sessionStorage?` as nodejs does not have sessionStorage
  globalThis.sessionStorage?.getItem(localStorageKey(client)) ?? "{}");
}
export function common(client, as, _signIn, oauthHttpOptions, refresh, refreshTokenMarker) {
  let token;
  const eventTarget = new TypedEventTarget();
  function makeTokenAndSaveRefresh(resp, type) {
    const {
      refresh_token,
      expires_in,
      access_token
    } = resp;
    !(expires_in != null) ? process.env.NODE_ENV !== "production" ? invariant(false) : invariant(false) : void 0;
    saveLocal(client, {
      refresh_token,
      refreshTokenMarker
    });
    token = {
      refresh_token,
      expires_in,
      access_token,
      expires_at: Date.now() + expires_in * 1000
    };
    eventTarget.dispatchTypedEvent(type, new CustomEvent(type, {
      detail: token
    }));
    return token;
  }
  let refreshTimeout;
  function rmTimeout() {
    if (refreshTimeout) clearTimeout(refreshTimeout);
  }
  function restartRefreshTimer(evt) {
    if (refresh) {
      rmTimeout();
      refreshTimeout = setTimeout(refresh, evt.detail.expires_in * 1000 - 60 * 1000);
    }
  }
  let pendingSignIn;
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
  eventTarget.addEventListener("signIn", restartRefreshTimer);
  eventTarget.addEventListener("refresh", restartRefreshTimer);
  function getTokenOrUndefined() {
    if (!token || Date.now() >= token.expires_at) {
      return undefined;
    }
    return token?.access_token;
  }
  const getToken = Object.assign(async function getToken() {
    if (!token || Date.now() >= token.expires_at) {
      token = await signIn();
    }
    return token?.access_token;
  }, {
    signIn,
    refresh,
    signOut: async function signOut() {
      !token ? process.env.NODE_ENV !== "production" ? invariant(false, "not signed in") : invariant(false) : void 0;
      const result = await processRevocationResponse(await revocationRequest(as, client, token.access_token, oauthHttpOptions));
      rmTimeout();

      // Clean up
      removeLocal(client);
      token = undefined;
      throwIfError(result);
      eventTarget.dispatchTypedEvent("signOut", new Event("signOut"));
    },
    rmTimeout,
    getTokenOrUndefined,
    addEventListener: eventTarget.addEventListener.bind(eventTarget),
    removeEventListener: eventTarget.removeEventListener.bind(eventTarget)
  });
  return {
    getToken,
    makeTokenAndSaveRefresh
  };
}
export function createAuthorizationServer(ctxPath, url) {
  const issuer = `${new URL(ctxPath, url.endsWith("/") ? url : url + "/")}`;
  return {
    token_endpoint: `${issuer}/api/oauth2/token`,
    authorization_endpoint: `${issuer}/api/oauth2/authorize`,
    revocation_endpoint: `${issuer}/api/oauth2/revoke_token`,
    issuer
  };
}
//# sourceMappingURL=common.js.map