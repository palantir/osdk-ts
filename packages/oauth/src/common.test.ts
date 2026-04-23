/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  common,
  createAuthorizationServer,
  readLocal,
  removeLocal,
  saveLocal,
  tokenExpired,
  tokenShouldRefresh,
} from "./common.js";
import type { Token } from "./Token.js";

function makeToken(expiresInSeconds: number): Token {
  return {
    access_token: "test-token",
    expires_in: expiresInSeconds,
    expires_at: Date.now() + expiresInSeconds * 1000,
  };
}

describe("tokenExpired", () => {
  it("should return true when within the 60s padding window", () => {
    expect(tokenExpired(makeToken(59))).toBe(true);
  });

  it("should return false when just outside the padding window", () => {
    expect(tokenExpired(makeToken(61))).toBe(false);
  });
});

describe("tokenShouldRefresh", () => {
  it("should return true when past 75% of lifetime", () => {
    // Token with 1 hour lifetime, only 10 minutes left (past the 45 min mark)
    const t: Token = {
      access_token: "test-token",
      expires_in: 3600,
      expires_at: Date.now() + 10 * 60 * 1000,
    };
    expect(tokenShouldRefresh(t)).toBe(true);
  });

  it("should return false when before 75% of lifetime", () => {
    // Token with 1 hour lifetime, 30 minutes left (before the 45 min mark)
    const t: Token = {
      access_token: "test-token",
      expires_in: 3600,
      expires_at: Date.now() + 30 * 60 * 1000,
    };
    expect(tokenShouldRefresh(t)).toBe(false);
  });
});

describe("local functions", () => {
  beforeEach(() => {
    vi.stubGlobal("localStorage", {
      setItem: vi.fn(),
      removeItem: vi.fn(),
      getItem: vi.fn(),
    });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("should use the old style keys when there is no refresh token marker", () => {
    const client = {
      client_id: "hi_mom",
      $refreshTokenMarker: undefined,
    };

    const oldLocalStorageKey = `@osdk/oauth : refresh : ${client.client_id}`;
    const storage = globalThis.localStorage;

    readLocal(client, storage);
    removeLocal(client, storage);
    saveLocal(client, {}, storage);

    expect(vi.mocked(globalThis.localStorage.getItem)).toBeCalledWith(
      oldLocalStorageKey,
    );

    expect(vi.mocked(globalThis.localStorage.setItem)).toBeCalledWith(
      oldLocalStorageKey,
      expect.anything(),
    );

    expect(vi.mocked(globalThis.localStorage.removeItem)).toBeCalledWith(
      oldLocalStorageKey,
    );
  });

  it("should save the refreshTokenMaker if it exists, as well as the requested scopes", () => {
    const client = {
      client_id: "hi_mom",
    };

    const signIn = vi.fn();
    const refresh = vi.fn();
    const storage = globalThis.localStorage;

    const authServer = createAuthorizationServer(
      "multipass",
      "https://stack.palantir.com",
    );

    const { makeTokenAndSaveRefresh } = common(
      client,
      authServer,
      signIn,
      {},
      refresh,
      "marker marker",
      "yay:my-fun-scope sad:my-boring-scope",
      storage,
    );

    makeTokenAndSaveRefresh({
      refresh_token: "refresh",
      access_token: "access",
      token_type: "idk",
      expires_in: 10_000,
    }, "signIn");

    expect(globalThis.localStorage.setItem).toBeCalledWith(
      `@osdk/oauth : refresh : ${client.client_id}`,
      JSON.stringify({
        refresh_token: "refresh",
        refreshTokenMarker: "marker marker",
        requestedScopes: "yay:my-fun-scope sad:my-boring-scope",
      }),
    );
  });
});
