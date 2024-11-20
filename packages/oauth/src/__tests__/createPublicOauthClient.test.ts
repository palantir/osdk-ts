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
import * as oauthModule from "@osdk/oauth";
import { describe, expect, it, vi } from "vitest";
import * as utilsModule from "../utils.js";

const originalCreatePublicOauthClient = oauthModule.createPublicOauthClient;

const FOUNDRY_CLIENT_ID = "example-foundry-client-id";
const FOUNDRY_URL = "http://example-foundry-url.com";
const REDIRECT_URI = "http://localhost:8080/auth/callback";

vi.stubGlobal("window", {
  location: {
    toString: vi.fn().mockReturnValue("http://example.com"),
  },
});

type CreatePublicOauthClientParams = Parameters<typeof createPublicOauthClient>;

type ProcessedPublicOauthClientOptionsParams = Parameters<
  typeof utilsModule.processOptionsAndAssignDefaults
>;

type ProcessedPublicOauthClientOptionsReturn = ReturnType<
  typeof utilsModule.processOptionsAndAssignDefaults
>;

describe("createPublicOauthClient", () => {
  it("should return the same processed options for both client creation methods", async () => {
    const mockProcessOptionsAndAssignDefaults = vi.fn<
      (
        ...args: ProcessedPublicOauthClientOptionsParams
      ) => ProcessedPublicOauthClientOptionsReturn
    >();

    // Mock processOptionsAndAssignDefaults to call the mock function
    vi.spyOn(utilsModule, "processOptionsAndAssignDefaults").mockImplementation(
      (
        ...args: ProcessedPublicOauthClientOptionsParams
      ) => {
        mockProcessOptionsAndAssignDefaults(...args);
        return utilsModule.processOptionsAndAssignDefaults(...args);
      },
    );

    // Mock createPublicOauthClient to call both the mock and the original function
    vi.spyOn(oauthModule, "createPublicOauthClient").mockImplementation(
      (
        ...args: CreatePublicOauthClientParams
      ) => {
        const [_client_id, ...rest] = args;
        mockProcessOptionsAndAssignDefaults(...rest);
        return originalCreatePublicOauthClient(...args);
      },
    );

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
    expect(mockProcessOptionsAndAssignDefaults).toHaveBeenCalledTimes(1);

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
    expect(mockProcessOptionsAndAssignDefaults).toHaveBeenCalledTimes(2);

    const [result1, result2] = mockProcessOptionsAndAssignDefaults.mock.results;
    expect(result1.value).toEqual(result2.value);
  });
});
