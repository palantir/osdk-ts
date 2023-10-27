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

import { OAuthToken } from "../OAuthToken";
import { fetchFormEncoded, getRevokeUri, getTokenUri } from "../utils";

export async function getTokenWithClientSecret(
  clientId: string,
  clientSecret: string,
  url: string,
  fetchFn: typeof fetch = globalThis.fetch,
  multipassContextPath?: string,
  scopes?: string[],
): Promise<OAuthToken> {
  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");
  params.append("client_id", clientId);
  params.append("client_secret", clientSecret);
  params.append(
    "scopes",
    ["offline_access", ...(scopes || [])].join(" "),
  );

  const tokenUrl = getTokenUri(
    url,
    multipassContextPath,
  );
  try {
    const response = await fetchFormEncoded(fetchFn, tokenUrl, params);
    const responseText = await response.json();
    return new OAuthToken(responseText);
  } catch (e) {
    throw new Error(
      `Failed to get token: ${e ? e.toString() : "Unknown error"}`,
    );
  }
}

export async function revokeTokenWithClientSecret(
  accessToken: string,
  clientId: string,
  clientSecret: string,
  url: string,
  fetchFn: typeof fetch = globalThis.fetch,
  multipassContextPath?: string,
): Promise<void> {
  const body = new URLSearchParams();
  body.append("client_id", clientId);
  body.append("client_secret", clientSecret);
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
