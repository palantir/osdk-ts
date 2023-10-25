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

import type { Auth } from "../Auth";
import type { SignInResponse, SignOutResponse } from "../OAuthClient";
import type { OAuthToken } from "../OAuthToken";
import type { Token } from "../Token";

export class ConfidentialClientAuth implements Auth {
  private options;
  private confidentialClientFlowProvider;
  token: OAuthToken | null;
  private refreshTimeout;

  /**
   * Creates a new instance of ConfidentialClientAuth
   * Will automatically sign in as a service user on the first getToken call if the user has not been logged in
   * Will automatically refresh the token on an interval if the user has been logged in
   *
   * @param options An object containing the configuration options for ConfidentialClientAuth.
   * @param options.clientId The unique identifier of the client application (required).
   * @param options.clientSecret The secret key associated with the client application (required).
   * @param options.url The base URL of the OAuth server (required).
   * @param options.multipassContextPath The context path for the multipass authentication (optional).
   * @param options.scopes An array of strings representing the requested OAuth scopes (optional).
   */
  constructor(options: {
    clientId: string;
    clientSecret: string;
    url: string;
    multipassContextPath?: string;
    scopes?: string[];
  }) {
    throw new Error("not implemented");
  }

  getToken(): Promise<Token> {
    throw new Error("not implemented");
  }

  executeWithToken<T>(call: (token: Token) => Promise<T>): Promise<T> {
    throw new Error("not implemented");
  }

  runWithToken(call: (token: Token) => Promise<void>): Promise<void> {
    throw new Error("not implemented");
  }

  /**
   * Signs in using client credentials, refreshing the token on an interval
   *
   * @returns {Promise<SignInResponse>}
   */
  signInAsServiceUser(): Promise<SignInResponse> {
    throw new Error("not implemented");
  }

  /**
   * Revokes the token and clears the refresh interval
   *
   * @returns {Promise<SignOutResponse>}
   */
  signOut(): Promise<SignOutResponse> {
    throw new Error("not implemented");
  }
}
