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
import type {
  AuthSubscription,
  RefreshResponse,
  SignInResponse,
  SignOutResponse,
  UnsubscribeFunction,
} from "../OAuthClient";
import type { OAuthToken } from "../OAuthToken";
import type { Token } from "../Token";

export class PublicClientAuth implements Auth {
  private options;
  private palantirRefreshToken;
  private palantirPcke;
  private publicClientFlowProvider;
  private nextSubscriberId;
  private onSignInSubscribers;
  private onSignOutSubscribers;
  private onRefreshTokenSubscribers;
  token: OAuthToken | null;
  private refreshTimeout;
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
  constructor(options: {
    clientId: string;
    url: string;
    redirectUrl: string;
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
   * Signs in the user by redirecting to the Palantir OAuth Page
   * If the user is already signed in, will refresh the token
   * Starts a timeout to automatically refresh the token
   * Should also be used to handle the callback from the Palantir OAuth Page
   *
   * @returns {Promise<SignInResponse>}
   */
  signIn(): Promise<SignInResponse> {
    throw new Error("not implemented");
  }

  /**
   * Signs the user out of the application, stopping the refresh interval and removing the token from local storage
   *
   * @returns {Promise<SignOutResponse>}
   */
  signOut(): Promise<SignOutResponse> {
    throw new Error("not implemented");
  }

  /**
   * Refreshes the token if there is a refresh token in local storage
   * Starts a timeout to automatically refresh the token
   *
   * @returns {Promise<RefreshResponse>}
   */
  refresh(): Promise<RefreshResponse> {
    throw new Error("not implemented");
  }

  /**
   * Subscribes to events that occur during the authentication flow
   *
   * @param subscriber - The subscriber(s) to add
   * @returns {UnsubscribeFunction}
   */
  subscribe(subscriber: AuthSubscription): UnsubscribeFunction {
    throw new Error("not implemented");
  }
}
