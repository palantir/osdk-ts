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

import invariant from "tiny-invariant";
import type { PublicOauthClientOptions } from "./createPublicOauthClient.js";

export type ProcessedPublicOauthClientOptions =
  & Omit<Required<PublicOauthClientOptions>, "loginPage">
  & {
    loginPage?: string;
  };

export function processOptionsAndAssignDefaults(
  url: string,
  redirect_uri: string,
  useHistory?: boolean | PublicOauthClientOptions,
  loginPage?: string,
  postLoginPage?: string,
  scopes?: string[],
  fetchFn?: typeof globalThis.fetch,
  ctxPath?: string,
): ProcessedPublicOauthClientOptions {
  let options: PublicOauthClientOptions = {};

  if (typeof useHistory === "object") {
    invariant(
      !loginPage && !postLoginPage && !scopes && !fetchFn && !ctxPath,
      "If useHistory is an object, other options should not be provided",
    );
    options = useHistory;
  } else {
    options = {
      useHistory,
      loginPage,
      postLoginPage,
      scopes,
      fetchFn,
      ctxPath,
    };
  }

  invariant(url, "url is required");
  invariant(redirect_uri, "redirectUrl is required");

  // Assign defaults
  return {
    useHistory: options.useHistory ?? true,
    loginPage: options.loginPage,
    postLoginPage: options.postLoginPage || window.location.toString(),
    scopes: options.scopes ?? ["api:read-data", "api:write-data"],
    fetchFn: options.fetchFn ?? globalThis.fetch,
    ctxPath: options.ctxPath ?? "multipass",
  };
}
