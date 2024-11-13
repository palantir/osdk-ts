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

import type { PublicOauthClient } from "@osdk/oauth";
import { createPublicOauthClient } from "@osdk/oauth";
import { beforeAll, describe, expect, it, vi } from "vitest";

const FOUNDRY_CLIENT_ID = "example-foundry-client-id";
const FOUNDRY_URL = "http://example-foundry-url.com";

vi.stubGlobal("window", {
  location: {
    toString: vi.fn(),
  },
});

describe("createPublicOauthClient", () => {
  let authClient: PublicOauthClient;
  let authClientWithOptions: PublicOauthClient;

  beforeAll(() => {
    authClient = createPublicOauthClient(
      FOUNDRY_CLIENT_ID,
      FOUNDRY_URL,
      "http://localhost:8080/auth/callback",
      true,
      undefined,
      undefined,
      undefined,
      fetch,
      undefined,
    );

    authClientWithOptions = createPublicOauthClient(
      FOUNDRY_CLIENT_ID,
      FOUNDRY_URL,
      "http://localhost:8080/auth/callback",
      {
        useHistory: true,
        fetchFn: fetch,
      },
    );
  });

  it("should create a client with options array", () => {
    expect(authClient).toBeDefined();
  });

  it("should create a client with options object", () => {
    expect(authClientWithOptions).toBeDefined();
  });

  // TODO: need a better way to check all the options have resulted in an identical client
  // but currently this check will fail because it just compares the functions which isn't what we want.
  // it("should create identical client for with options array and object", () => {
  //   expect(authClient).toBe(authClientWithOptions);
  // });
});
