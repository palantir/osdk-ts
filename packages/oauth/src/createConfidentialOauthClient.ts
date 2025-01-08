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

import type { Client, HttpRequestOptions } from "oauth4webapi";
import {
  clientCredentialsGrantRequest,
  customFetch,
  processClientCredentialsResponse,
} from "oauth4webapi";
import { common, createAuthorizationServer } from "./common.js";
import type { ConfidentialOauthClient } from "./ConfidentialOauthClient.js";
import { throwIfError } from "./throwIfError.js";

/**
 * @param client_id
 * @param client_secret
 * @param url the base url of your foundry server
 * @param scopes
 * @param fetchFn
 * @param ctxPath
 * @returns which can be used as a token provider
 */
export function createConfidentialOauthClient(
  client_id: string,
  client_secret: string,
  url: string,
  scopes: string[] = ["api:read-data", "api:write-data"],
  fetchFn: typeof globalThis.fetch = globalThis.fetch,
  ctxPath: string = "multipass",
): ConfidentialOauthClient {
  const client: Client = { client_id, client_secret };
  const authServer = createAuthorizationServer(ctxPath, url);
  const oauthHttpOptions: HttpRequestOptions = { [customFetch]: fetchFn };

  const { getToken, makeTokenAndSaveRefresh } = common(
    client,
    authServer,
    _signIn,
    oauthHttpOptions,
    undefined,
  );

  async function _signIn() {
    return makeTokenAndSaveRefresh(
      throwIfError(
        await processClientCredentialsResponse(
          authServer,
          client,
          await clientCredentialsGrantRequest(
            authServer,
            client,
            new URLSearchParams({ scope: scopes.join(" ") }),
            oauthHttpOptions,
          ),
        ),
      ),
      "signIn",
    );
  }

  return getToken;
}
