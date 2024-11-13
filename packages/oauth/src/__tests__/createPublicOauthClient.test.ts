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

import { createPublicOauthClient } from "@osdk/oauth";
import { describe, expect, it, vi } from "vitest";
import * as utilsModule from "../utils.js";

const FOUNDRY_CLIENT_ID = "example-foundry-client-id";
const FOUNDRY_URL = "http://example-foundry-url.com";
const REDIRECT_URI = "http://localhost:8080/auth/callback";

vi.stubGlobal("window", {
  location: {
    toString: vi.fn().mockReturnValue("http://example.com"),
  },
});

describe("createPublicOauthClient", () => {
  it("should create a client with options array", () => {
    const authClient = createPublicOauthClient(
      FOUNDRY_CLIENT_ID,
      FOUNDRY_URL,
      REDIRECT_URI,
      true,
      undefined,
      undefined,
      undefined,
      fetch,
      undefined,
    );

    expect(authClient).toBeDefined();
  });

  it("should create a client with options object", () => {
    const authClientWithOptions = createPublicOauthClient(
      FOUNDRY_CLIENT_ID,
      FOUNDRY_URL,
      REDIRECT_URI,
      {
        useHistory: true,
        fetchFn: fetch,
      },
    );
    expect(authClientWithOptions).toBeDefined();
  });

  it("should return the same processed options for both client creation methods", () => {
    const processSpy = vi.spyOn(utilsModule, "processOptionsAndAssignDefaults");

    const authClient = createPublicOauthClient(
      FOUNDRY_CLIENT_ID,
      FOUNDRY_URL,
      REDIRECT_URI,
      true,
      undefined,
      undefined,
      undefined,
      fetch,
      undefined,
    );

    expect(authClient).toBeDefined();

    const authClientWithOptions = createPublicOauthClient(
      FOUNDRY_CLIENT_ID,
      FOUNDRY_URL,
      REDIRECT_URI,
      {
        useHistory: true,
        fetchFn: fetch,
      },
    );

    expect(authClientWithOptions).toBeDefined();

    expect(processSpy).toHaveBeenCalledTimes(2);

    const [call1Args, call2Args] = processSpy.mock.calls;

    expect(call1Args).toEqual([
      FOUNDRY_URL,
      REDIRECT_URI,
      true,
      undefined,
      undefined,
      undefined,
      fetch,
      undefined,
    ]);

    expect(call2Args).toEqual([
      FOUNDRY_URL,
      REDIRECT_URI,
      { useHistory: true, fetchFn: fetch },
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ]);

    const [result1, result2] = processSpy.mock.results;
    expect(result1.value).toEqual(result2.value);
  });
});
