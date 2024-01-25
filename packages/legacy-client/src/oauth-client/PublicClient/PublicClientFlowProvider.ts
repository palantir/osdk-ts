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

import { OAuthToken } from "../OAuthToken.js";
import {
  fetchFormEncoded,
  generateCodeChallenge,
  generateRandomString,
  getAuthorizeUri,
  getRevokeUri,
  getTokenUri,
} from "../utils/index.js";

interface AuthorizeRequest {
  url: string;
  state: string;
  codeVerifier: string;
}

export async function generateAuthRequest(
  clientId: string,
  url: string,
  redirectUrl: string,
  multipassContextPath?: string,
  scopes?: string[],
): Promise<AuthorizeRequest> {
  const state = generateRandomString();
  const codeVerifier = generateRandomString();
  const codeChallenge = await generateCodeChallenge(codeVerifier);

  const queryParams = new URLSearchParams();
  queryParams.append("client_id", clientId);
  queryParams.append("response_type", "code");
  queryParams.append("state", state);
  queryParams.append("redirect_uri", redirectUrl);
  queryParams.append("code_challenge", codeChallenge.codeChallenge);
  queryParams.append(
    "code_challenge_method",
    codeChallenge.codeChallengeMethod,
  );
  queryParams.append(
    "scope",
    ["offline_access", ...(scopes || [])].join(" "),
  );

  const finalUrl = getAuthorizeUri(url, multipassContextPath) + "?"
    + queryParams.toString();
  return {
    url: finalUrl,
    state,
    codeVerifier,
  };
}

export async function getTokenWithCodeVerifier(
  clientId: string,
  redirectUrl: string,
  url: string,
  serverUrl: string,
  codeVerifier: string,
  fetchFn: typeof fetch = globalThis.fetch,
  multipassContextPath?: string,
): Promise<OAuthToken> {
  const parsedUrl = new URLSearchParams(url.substring(url.indexOf("?")));
  const code = parsedUrl.get("code");
  if (!code) {
    throw new Error("Code parameter missing in URL: " + url);
  }

  const body = new URLSearchParams();
  body.append("client_id", clientId);
  body.append("grant_type", "authorization_code");
  body.append("code", code);
  body.append("redirect_uri", redirectUrl);
  body.append("code_verifier", codeVerifier);

  const tokenUrl = getTokenUri(serverUrl, multipassContextPath);
  try {
    const response = await fetchFormEncoded(
      fetchFn,
      `${tokenUrl}?`
        + new URLSearchParams({
          state: codeVerifier,
        }),
      body,
    );

    const responseText = await response.json();
    return new OAuthToken(responseText);
  } catch (e) {
    throw new Error(
      `Failed to get token: ${e ? e.toString() : "Unknown error"}`,
    );
  }
}

export async function refreshTokenPublicClient(
  refreshToken: string,
  clientId: string,
  url: string,
  fetchFn: typeof fetch = globalThis.fetch,
  multipassContextPath?: string,
): Promise<OAuthToken> {
  const body = new URLSearchParams();
  body.append("client_id", clientId);
  body.append("grant_type", "refresh_token");
  body.append("refresh_token", refreshToken);

  const tokenUrl = getTokenUri(url, multipassContextPath);
  try {
    const response = await fetchFormEncoded(fetchFn, tokenUrl, body);
    const responseText = await response.json();
    return new OAuthToken(responseText);
  } catch (e) {
    throw new Error(
      `Failed to refresh token: ${e ? e.toString() : "Unknown error"}`,
    );
  }
}

export async function revokeTokenPublicClient(
  accessToken: string,
  clientId: string,
  url: string,
  fetchFn: typeof fetch = globalThis.fetch,
  multipassContextPath?: string,
): Promise<void> {
  const body = new URLSearchParams();
  body.append("client_id", clientId);
  body.append("token", accessToken);

  const tokenUrl = getRevokeUri(url, multipassContextPath);
  try {
    await fetchFormEncoded(fetchFn, tokenUrl, body);
  } catch (e) {
    throw new Error(
      `Failed to revoke token: ${e ? e.toString() : "Unknown error"}`,
    );
  }
}
