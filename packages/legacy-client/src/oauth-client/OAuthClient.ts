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

import type { Token } from "./Token.js";

export type AuthSubscription = {
  onSignIn: () => void;
  onSignOut?: () => void;
  onRefreshToken?: () => void;
} | {
  onSignIn?: () => void;
  onSignOut: () => void;
  onRefreshToken?: () => void;
} | {
  onSignIn?: () => void;
  onSignOut?: () => void;
  onRefreshToken: () => void;
};

export type UnsubscribeFunction = () => void;

export interface SignInResponse {
  session: FoundrySession;
}

export interface RefreshResponse {
  session: FoundrySession;
}

export interface SignOutResponse {
}

interface FoundrySession {
  accessToken: string;
  expiresIn: number;
}

export interface OAuthClient {
  url: string;
  token: Token | null;
}
