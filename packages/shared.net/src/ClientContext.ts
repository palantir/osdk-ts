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

/** @deprecated */
export interface ClientContext<O extends { metadata: { userAgent: string } }>
  extends SharedClientContext
{
  /** @deprecated */
  ontology: O;

  /**
   * The base origin to use for requests (e.g. `https://api.example.com`)
   * @deprecated use `baseUrl` instead
   */
  stack: string;
}

/**
 * Strict representation of ClientContext. This is the type that should be used.
 *
 * Upon next major version bump, this should be merged with `ClientContext`.
 */
export interface SharedClientContext {
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
export const symbolClientContext = Symbol("ClientContext");

export interface SharedClient<
  T extends SharedClientContext = SharedClientContext,
> {
  [symbolClientContext]: T;
}
