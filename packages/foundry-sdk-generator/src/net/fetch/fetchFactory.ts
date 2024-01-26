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

import type { Auth } from "@osdk/legacy-client";
import { AuthenticatedFetch } from "./authenticatedFetch";
import { RetryingFetch } from "./retryingFetch";

export class FetchFactory {
  public constructor(private fetchFunction?: typeof globalThis.fetch) {}

  /**
   * Creates a fetch instance with authentication, error handling, and retrying.
   *
   * @returns A fetch instance
   */
  public getDefaultFetch(auth: Auth): typeof globalThis.fetch {
    const authenticatedFetch = new AuthenticatedFetch(this.baseFetch, auth);
    const retryingFetch = new RetryingFetch(authenticatedFetch.getFetch());
    return retryingFetch.getFetch();
  }

  private baseFetch: typeof globalThis.fetch = (input, auth) => {
    const fetchFunction = this.fetchFunction ?? globalThis.fetch;
    return fetchFunction(input, auth);
  };
}
