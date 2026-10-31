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
} from "./common.js";

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

    makeTokenAndSaveRefresh(
      {
        refresh_token: "refresh",
        access_token: "access",
        token_type: "idk",
        expires_in: 10_000,
      },
      "signIn",
    );

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

describe("refresh timer", () => {
  const authServer = createAuthorizationServer(
    "multipass",
    "https://stack.palantir.com",
  );

  function signInWithExpiry(expires_in: number) {
    const refresh = vi.fn();
    const { makeTokenAndSaveRefresh } = common(
      { client_id: "hi_mom" },
      authServer,
      vi.fn(),
      {},
      refresh,
      undefined,
      "scope",
      undefined,
    );
    makeTokenAndSaveRefresh(
      {
        refresh_token: "refresh",
        access_token: "access",
        token_type: "idk",
        expires_in,
      },
      "signIn",
    );
    return refresh;
  }

  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("waits until half the token life when it lives under a minute", () => {
    const refresh = signInWithExpiry(30);

    vi.advanceTimersByTime(14_999);
    expect(refresh).not.toHaveBeenCalled();

    vi.advanceTimersByTime(1);
    expect(refresh).toHaveBeenCalledTimes(1);
  });

  it("caps the delay at the setTimeout maximum for long lived tokens", () => {
    const setTimeoutSpy = vi.spyOn(globalThis, "setTimeout");
    const refresh = signInWithExpiry(5_000_000);

    expect(setTimeoutSpy).toHaveBeenLastCalledWith(refresh, 2_147_483_647);
    vi.advanceTimersByTime(60_000);
    expect(refresh).not.toHaveBeenCalled();
  });

  it("refreshes a minute before expiry for ordinary tokens", () => {
    const refresh = signInWithExpiry(3600);

    vi.advanceTimersByTime(3_539_999);
    expect(refresh).not.toHaveBeenCalled();

    vi.advanceTimersByTime(1);
    expect(refresh).toHaveBeenCalledTimes(1);
  });
});
