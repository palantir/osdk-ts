/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import { describe, expect, it } from "vitest";
import { getAuthorizeUri, getRevokeUri, getTokenUri } from "./oauthUris";

describe("OAuthUris", () => {
  it("creates uris for token, authorize and revoke requests", () => {
    expect(getTokenUri("stack.com")).toEqual(
      "https://stack.com/multipass/api/oauth2/token",
    );
    expect(getTokenUri("https://stack.com")).toEqual(
      "https://stack.com/multipass/api/oauth2/token",
    );
    expect(getAuthorizeUri("stack.com")).toEqual(
      "https://stack.com/multipass/api/oauth2/authorize",
    );
    expect(getAuthorizeUri("https://stack.com")).toEqual(
      "https://stack.com/multipass/api/oauth2/authorize",
    );
    expect(getAuthorizeUri("https://stack.com/")).toEqual(
      "https://stack.com/multipass/api/oauth2/authorize",
    );
    expect(getRevokeUri("stack.com")).toEqual(
      "https://stack.com/multipass/api/oauth2/revoke_token",
    );
    expect(getRevokeUri("https://stack.com")).toEqual(
      "https://stack.com/multipass/api/oauth2/revoke_token",
    );
    expect(getRevokeUri("https://stack.com/")).toEqual(
      "https://stack.com/multipass/api/oauth2/revoke_token",
    );
  });

  it("creates uris with provided context path", () => {
    expect(getTokenUri("stack.com", "/multipass-foundry")).toEqual(
      "https://stack.com/multipass-foundry/api/oauth2/token",
    );
    expect(getTokenUri("https://stack.com", "/multipass-foundry")).toEqual(
      "https://stack.com/multipass-foundry/api/oauth2/token",
    );
    expect(getAuthorizeUri("stack.com", "/multipass-foundry")).toEqual(
      "https://stack.com/multipass-foundry/api/oauth2/authorize",
    );
    expect(getAuthorizeUri("https://stack.com", "/multipass-foundry")).toEqual(
      "https://stack.com/multipass-foundry/api/oauth2/authorize",
    );
    expect(getAuthorizeUri("https://stack.com/", "/multipass-foundry")).toEqual(
      "https://stack.com/multipass-foundry/api/oauth2/authorize",
    );
    expect(getRevokeUri("stack.com", "/multipass-foundry")).toEqual(
      "https://stack.com/multipass-foundry/api/oauth2/revoke_token",
    );
    expect(getRevokeUri("https://stack.com", "/multipass-foundry")).toEqual(
      "https://stack.com/multipass-foundry/api/oauth2/revoke_token",
    );
    expect(getRevokeUri("https://stack.com/", "/multipass-foundry")).toEqual(
      "https://stack.com/multipass-foundry/api/oauth2/revoke_token",
    );
  });
});
