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

import { beforeEach, describe, expect, it, vi } from "vitest";
import { readLocal, removeLocal, saveLocal } from "./common.js";

describe("local functions", () => {
  beforeEach(() => {
    vi.stubGlobal("localStorage", {
      setItem: vi.fn(),
      removeItem: vi.fn(),
      getItem: vi.fn(),
    });
  });

  it("should use the old style keys when there is no refresh token marker", () => {
    const client = {
      client_id: "hi_mom",
      $refreshTokenMarker: undefined,
    };

    const oldLocalStorageKey = `@osdk/oauth : refresh : ${client.client_id}`;

    readLocal(client);
    removeLocal(client);
    saveLocal(client, {});

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

  it("should respect the refresh token marker", () => {
    const client = {
      client_id: "hi_mom",
      $refreshTokenMarker: "magic_marker_friend",
    };

    const localStorageKey =
      `@osdk/oauth : refresh : ${client.client_id} : ${client.$refreshTokenMarker}`;

    readLocal(client);
    removeLocal(client);
    saveLocal(client, {});

    expect(vi.mocked(globalThis.localStorage.getItem)).toBeCalledWith(
      localStorageKey,
    );

    expect(vi.mocked(globalThis.localStorage.setItem)).toBeCalledWith(
      localStorageKey,
      expect.anything(),
    );

    expect(vi.mocked(globalThis.localStorage.removeItem)).toBeCalledWith(
      localStorageKey,
    );
  });
});
