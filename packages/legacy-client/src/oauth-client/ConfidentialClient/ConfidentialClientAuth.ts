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

import type { Auth } from "../Auth.js";
import type { SignInResponse, SignOutResponse } from "../OAuthClient.js";
import type { OAuthToken } from "../OAuthToken.js";
import type { Token } from "../Token.js";
import {
  getTokenWithClientSecret,
  revokeTokenWithClientSecret,
} from "./index.js";

export class ConfidentialClientAuth implements Auth {
  public token: OAuthToken | undefined;
  private refreshTimeout: ReturnType<typeof setTimeout> | undefined;

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
  constructor(
    private options: {
      clientId: string;
      clientSecret: string;
      url: string;
      multipassContextPath?: string;
      fetchFn?: typeof globalThis.fetch;
      scopes?: string[];
    },
  ) {
    if (!options.fetchFn) {
      options.fetchFn = globalThis.fetch;
    }

    if (!options.scopes) {
      options.scopes = ["api:read-data", "api:write-data"];
    }
  }

  public async getToken(): Promise<Token> {
    if (!this.token) {
      await this.signInAsServiceUser();
    }

    if (this.token?.isExpired) {
      await this.refresh();
    }

    return {
      accessToken: this.token?.accessToken!,
    };
  }

  public async executeWithToken<T>(
    call: (token: Token) => Promise<T>,
  ): Promise<T> {
    return call(await this.getToken());
  }

  public async runWithToken(
    call: (token: Token) => Promise<void>,
  ): Promise<void> {
    await call(await this.getToken());
  }

  /**
   * Signs in using client credentials, refreshing the token on an interval
   *
   * @returns {Promise<SignInResponse>}
   */
  public async signInAsServiceUser(): Promise<SignInResponse> {
    const token = await getTokenWithClientSecret(
      this.options.clientId,
      this.options.clientSecret,
      this.options.url,
      this.options.fetchFn,
      this.options.multipassContextPath,
      this.options.scopes,
    );
    this.token = token;

    this.startRefreshTimeout(token);

    return {
      session: {
        accessToken: this.token.accessToken,
        expiresIn: this.token.expiresIn,
      },
    };
  }

  /**
   * Revokes the token and clears the refresh interval
   *
   * @returns {Promise<SignOutResponse>}
   */
  public async signOut(): Promise<SignOutResponse> {
    this.clearRefreshTimeout();
    if (this.token) {
      await revokeTokenWithClientSecret(
        this.token.accessToken,
        this.options.clientId,
        this.options.clientSecret,
        this.options.url,
        this.options.fetchFn,
        this.options.multipassContextPath,
      );
    }
    this.token = undefined;
    return {};
  }

  private async refresh(): Promise<void> {
    this.token = await getTokenWithClientSecret(
      this.options.clientId,
      this.options.clientSecret,
      this.options.url,
      this.options.fetchFn,
      this.options.multipassContextPath,
      this.options.scopes,
    );
    this.startRefreshTimeout(this.token);
  }

  private startRefreshTimeout(token: OAuthToken): void {
    this.clearRefreshTimeout();

    // Refresh the token before it expires with a buffer of
    // 60 seconds to account for network latency
    this.refreshTimeout = setTimeout(async () => {
      this.refresh();
    }, token.expiresIn * 1000 - 60 * 1000);
  }

  private clearRefreshTimeout(): void {
    if (this.refreshTimeout) {
      clearTimeout(this.refreshTimeout);
      this.refreshTimeout = undefined;
    }
  }
}
