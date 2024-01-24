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
import type {
  AuthSubscription,
  RefreshResponse,
  SignInResponse,
  SignOutResponse,
  UnsubscribeFunction,
} from "../OAuthClient.js";
import type { OAuthToken } from "../OAuthToken.js";
import type { Token } from "../Token.js";
import {
  generateAuthRequest,
  getTokenWithCodeVerifier,
  refreshTokenPublicClient,
  revokeTokenPublicClient,
} from "./PublicClientFlowProvider.js";

export class PublicClientAuth implements Auth {
  private palantirRefreshToken = "palantir_refresh_token" as const;
  private palantirPcke = "palantir_pcke" as const;

  private nextSubscriberId = 0;
  private onSignInSubscribers: { [id: string]: () => void } = {};
  private onSignOutSubscribers: { [id: string]: () => void } = {};
  private onRefreshTokenSubscribers: { [id: string]: () => void } = {};

  public token: OAuthToken | null = null;
  private refreshTimeout: ReturnType<typeof setTimeout> | null = null;

  /**
   * Creates a new instance of PublicClientAuth
   * Stores the refresh token in local storage
   * Call `signIn()` to perform the full authentication flow
   *
   * @param options An object containing the configuration options for the instance.
   * @param options.clientId The unique identifier of the client application (required).
   * @param options.url The base URL of the OAuth server (required).
   * @param options.redirectUrl The URL where the OAuth server should redirect the user after authentication (required).
   * @param options.multipassContextPath The context path for the multipass authentication (optional).
   * @param options.scopes An array of strings representing the requested OAuth scopes (optional).
   */
  constructor(
    private options: {
      clientId: string;
      url: string;
      redirectUrl: string;
      fetchFn?: typeof globalThis.fetch;
      multipassContextPath?: string;
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
      throw Error("Not signed in");
    }

    return {
      accessToken: this.token!.accessToken,
    } as Token;
  }

  public async executeWithToken<T>(
    call: (token: Token) => Promise<T>,
  ): Promise<T> {
    const token = await this.getToken();
    return call({ accessToken: token.accessToken });
  }

  public async runWithToken(
    call: (token: Token) => Promise<void>,
  ): Promise<void> {
    const token = await this.getToken();
    await call({ accessToken: token.accessToken });
  }

  /**
   * Signs in the user by redirecting to the Palantir OAuth Page
   * If the user is already signed in, will refresh the token
   * Starts a timeout to automatically refresh the token
   * Should also be used to handle the callback from the Palantir OAuth Page
   *
   * @returns {Promise<SignInResponse>}
   */
  public async signIn(): Promise<SignInResponse> {
    let shouldMakeAuthRequest = true;

    // 1. Check if we have a refresh token in local storage
    const refreshToken = localStorage.getItem(this.palantirRefreshToken);
    if (refreshToken) {
      const didRefresh = await this.tryRefreshToken(refreshToken);
      if (didRefresh) {
        shouldMakeAuthRequest = false;
      }
    }

    // 2. If there is no refresh token we are likely trying to perform the callback
    const pcke = localStorage.getItem(this.palantirPcke);
    if (pcke && shouldMakeAuthRequest) {
      try {
        const callbackUrl = window.location.href;
        this.token = await getTokenWithCodeVerifier(
          this.options.clientId,
          this.options.redirectUrl,
          callbackUrl,
          this.options.url,
          pcke,
          this.options.fetchFn,
          this.options.multipassContextPath,
        );
        localStorage.setItem(
          this.palantirRefreshToken,
          this.token.refreshToken,
        );
        shouldMakeAuthRequest = false;
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn(
          "Failed to get OAuth2 token using PCKE, removing PCKE and starting a new auth flow",
          e,
        );
        localStorage.removeItem(this.palantirPcke);
      }
    }

    // 3. If we haven't been able to load the token from one of the two above ways, we need to make the initial auth request
    if (shouldMakeAuthRequest) {
      const authorizeRequest = await generateAuthRequest(
        this.options.clientId,
        this.options.url,
        this.options.redirectUrl,
        this.options.multipassContextPath,
        this.options.scopes,
      );
      localStorage.setItem(this.palantirPcke, authorizeRequest.codeVerifier);
      window.location.href = authorizeRequest.url;

      // Give time for redirect to happen
      await new Promise((_resolve, reject) => {
        setTimeout(() => {
          reject(new Error("Unable to redirect to authorization page"));
        }, 1000);
      });
    }

    // By this point this.token should be valid
    if (!this.token) {
      throw new Error("Error signing in");
    }

    // Refresh the token on an interval so that we don't have to re-authenticate
    // Give buffer of 60 seconds to account for network latency
    this.startRefreshTimeout(this.token);

    for (const notifySubscriber of Object.values(this.onSignInSubscribers)) {
      notifySubscriber();
    }

    return {
      session: {
        accessToken: this.token.accessToken,
        expiresIn: this.token.expiresIn,
      },
    };
  }

  /**
   * Signs the user out of the application, stopping the refresh interval and removing the token from local storage
   *
   * @returns {Promise<SignOutResponse>}
   */
  public async signOut(): Promise<SignOutResponse> {
    if (!this.token) {
      throw new Error("Not signed in");
    }

    await revokeTokenPublicClient(
      this.token.accessToken,
      this.options.clientId,
      this.options.url,
      this.options.fetchFn,
      this.options.multipassContextPath,
    );

    for (const notifySubscriber of Object.values(this.onSignOutSubscribers)) {
      notifySubscriber();
    }

    // Clear refresh interval
    this.clearRefreshTimeout();

    // Clean up local storage
    localStorage.removeItem(this.palantirPcke);
    localStorage.removeItem(this.palantirRefreshToken);

    // Remove all references to this token
    this.token = null;

    return {};
  }

  /**
   * Refreshes the token if there is a refresh token in local storage
   * Starts a timeout to automatically refresh the token
   *
   * @returns {Promise<RefreshResponse>}
   */
  public async refresh(): Promise<RefreshResponse> {
    const refreshToken = localStorage.getItem(this.palantirRefreshToken);
    if (!refreshToken) {
      throw new Error("No refresh token found");
    }

    const didRefresh = await this.tryRefreshToken(refreshToken);
    if (!didRefresh) {
      throw new Error("Could not refresh token");
    }

    if (!this.token) {
      throw new Error("Expected token to be present");
    }

    this.startRefreshTimeout(this.token);

    for (
      const notifySubscriber of Object.values(this.onRefreshTokenSubscribers)
    ) {
      notifySubscriber();
    }

    return {
      session: {
        accessToken: this.token!.accessToken,
        expiresIn: this.token!.expiresIn,
      },
    };
  }

  /**
   * Subscribes to events that occur during the authentication flow
   *
   * @param subscriber - The subscriber(s) to add
   * @returns {UnsubscribeFunction}
   */
  public subscribe(subscriber: AuthSubscription): UnsubscribeFunction {
    const subscriberId = this.nextSubscriberId++;
    if (subscriber.onSignIn) {
      this.onSignInSubscribers[subscriberId] = subscriber.onSignIn;
    }
    if (subscriber.onSignOut) {
      this.onSignOutSubscribers[subscriberId] = subscriber.onSignOut;
    }
    if (subscriber.onRefreshToken) {
      this.onRefreshTokenSubscribers[subscriberId] = subscriber.onRefreshToken;
    }
    return () => {
      delete this.onSignInSubscribers[subscriberId];
      delete this.onSignOutSubscribers[subscriberId];
      delete this.onRefreshTokenSubscribers[subscriberId];
    };
  }

  private startRefreshTimeout(token: OAuthToken): void {
    this.clearRefreshTimeout();

    // Refresh the token before it expires with a buffer of
    // 60 seconds to account for network latency
    this.refreshTimeout = setTimeout(async () => {
      await this.refresh();
    }, token.expiresIn * 1000 - 60 * 1000);
  }

  private clearRefreshTimeout(): void {
    if (this.refreshTimeout) {
      clearTimeout(this.refreshTimeout);
      this.refreshTimeout = null;
    }
  }

  private async tryRefreshToken(refreshToken: string): Promise<boolean> {
    try {
      this.token = await refreshTokenPublicClient(
        refreshToken,
        this.options.clientId,
        this.options.url,
        this.options.fetchFn,
        this.options.multipassContextPath,
      );
      localStorage.setItem(this.palantirRefreshToken, this.token.refreshToken);
      return true;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn(
        "Failed to get OAuth2 refresh token. Removing refresh token",
        e,
      );
      localStorage.removeItem(this.palantirRefreshToken);
      return false;
    }
  }
}
