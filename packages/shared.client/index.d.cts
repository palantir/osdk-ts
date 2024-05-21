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

export declare interface SharedClientContext {
  /**
   * The base origin to use for requests (e.g. `https://api.example.com`)
   */
  baseUrl: string;

  /**
   * The fetch function to use for all requests.
   */
  fetch: typeof globalThis.fetch;

  tokenProvider: () => Promise<string>;
}

// This allows us to reference the ctx as property referenced by a symbol
// so that its not suggested when you do `client.` in the client code
export declare const symbolClientContext: unique symbol;

export declare interface SharedClient<
  T extends SharedClientContext = SharedClientContext,
> {
  [symbolClientContext]: T;
}
