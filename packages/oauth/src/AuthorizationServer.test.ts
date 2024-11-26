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

import {
  afterAll,
  beforeAll,
  describe,
  expect,
  expectTypeOf,
  it,
} from "vitest";

import { createAuthorizationServer } from "./common.js";

describe("Create authorization server", () => {
  it("works with old multipass ctx path", () => {
    const authServer = createAuthorizationServer(
      "/multipass",
      "https://stack.palantir.com",
    );
    expect(authServer).toEqual({
      token_endpoint: "https://stack.palantir.com/multipass/api/oauth2/token",
      authorization_endpoint:
        "https://stack.palantir.com/multipass/api/oauth2/authorize",
      revocation_endpoint:
        "https://stack.palantir.com/multipass/api/oauth2/revoke_token",
      issuer: "https://stack.palantir.com/multipass",
    });
  });

  it("works with new multipass ctx path", () => {
    const authServer = createAuthorizationServer(
      "multipass",
      "https://stack.palantir.com",
    );
    expect(authServer).toEqual({
      token_endpoint: "https://stack.palantir.com/multipass/api/oauth2/token",
      authorization_endpoint:
        "https://stack.palantir.com/multipass/api/oauth2/authorize",
      revocation_endpoint:
        "https://stack.palantir.com/multipass/api/oauth2/revoke_token",
      issuer: "https://stack.palantir.com/multipass",
    });

    const authServerCustom = createAuthorizationServer(
      "multipass",
      "https://stack.palantir.com/foo/first/someStuff",
    );
    expect(authServerCustom).toEqual({
      token_endpoint:
        "https://stack.palantir.com/foo/first/someStuff/multipass/api/oauth2/token",
      authorization_endpoint:
        "https://stack.palantir.com/foo/first/someStuff/multipass/api/oauth2/authorize",
      revocation_endpoint:
        "https://stack.palantir.com/foo/first/someStuff/multipass/api/oauth2/revoke_token",
      issuer: "https://stack.palantir.com/foo/first/someStuff/multipass",
    });
  });
});
