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

import { describe, expect, it } from "vitest";
import { OAuthToken } from "./OAuthToken.js";

describe("OAuthToken", () => {
  it("constructs successfully", () => {
    const tokenResponse = {
      access_token: "testAccessToken",
      token_type: "Bearer",
      expires_in: 3600,
    };

    const token = new OAuthToken(tokenResponse);
    expect(token).toBeInstanceOf(OAuthToken);
    expect(token.accessToken).toEqual("testAccessToken");
    expect(token.tokenType === "Bearer");
    expect(token.expiresIn).approximately(3600, 1);
    expect(token.refreshToken).toBeUndefined();
  });

  it("constructs successfully with refresh token", () => {
    const tokenResponse = {
      access_token: "testAccessToken",
      token_type: "Bearer",
      expires_in: 3600,
      refresh_token: "testRefreshToken",
    };

    const token = new OAuthToken(tokenResponse);
    expect(token).toBeInstanceOf(OAuthToken);
    expect(token.accessToken).toEqual("testAccessToken");
    expect(token.tokenType === "Bearer");
    expect(token.expiresIn).approximately(3600, 1);
    expect(token.refreshToken).toEqual("testRefreshToken");
  });

  it("fails when required token response fields are missing", () => {
    expect(
      () =>
        new OAuthToken({
          token_type: "Bearer",
          expires_in: 3600,
        } as any),
    ).toThrow("missing access_token");
    expect(
      () =>
        new OAuthToken({
          access_token: "testAccessToken",
          expires_in: 3600,
        } as any),
    ).toThrow("missing token_type");
    expect(
      () =>
        new OAuthToken({
          access_token: "testAccessToken",
          token_type: "Bearer",
        } as any),
    ).toThrow("missing expires_in");
  });
});
