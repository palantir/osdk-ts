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

import type { Mock } from "vitest";
import { assert, describe, expect, it, vi } from "vitest";
import { OAuthToken } from "../OAuthToken";
import {
  getTokenWithClientSecret,
  revokeTokenWithClientSecret,
} from "./ConfidentialClientFlow";

// Mock data
const clientId = "testClientId";
const clientSecret = "testClientSecret";
const url = "https://example.com";
const scopes = ["api:read", "api:write"];

describe("ConfidentialClientFlow", () => {
  it("getTokenWithClientSecret", async () => {
    const mockFetch: Mock = vi.fn();
    mockFetch.mockResolvedValue({
      ok: true,
      json: () =>
        new Promise((resolve) =>
          resolve({
            access_token: "testAccessToken",
            token_type: "Bearer",
            expires_in: 3600,
          })
        ),
    });

    const token = await getTokenWithClientSecret(
      clientId,
      clientSecret,
      url,
      mockFetch,
      undefined,
      scopes,
    );

    expect(mockFetch).toBeCalledWith(
      `https://example.com/multipass/api/oauth2/token`,
      {
        body:
          "grant_type=client_credentials&client_id=testClientId&client_secret=testClientSecret&scopes=offline_access+api%3Aread+api%3Awrite",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "POST",
      },
    );

    expect(token).toBeInstanceOf(OAuthToken);
    expect(token.accessToken).toEqual("testAccessToken");
    expect(token.tokenType === "Bearer");
    expect(token.expiresIn).approximately(3600, 1);
  });

  it("revokeTokenWithClientSecret", async () => {
    const mockFetch: Mock = vi.fn();
    mockFetch.mockResolvedValue({
      ok: true,
    });

    try {
      await revokeTokenWithClientSecret(
        "testAccessToken",
        clientId,
        clientSecret,
        url,
        mockFetch,
      );
    } catch (e) {
      assert.fail(
        `revokeTokenWithClientSecret threw an error: ${
          e ? e.toString() : "Unknown error"
        }`,
      );
    }

    expect(mockFetch).toBeCalledWith(
      `https://example.com/multipass/api/oauth2/revoke_token`,
      {
        body:
          "client_id=testClientId&client_secret=testClientSecret&token=testAccessToken",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "POST",
      },
    );
  });
});
