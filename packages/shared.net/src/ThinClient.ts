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

import type { FetchAsJsonFn } from "./FetchAsJsonFn.js";

export interface ClientContext<O extends { metadata: { userAgent: string } }> {
  ontology: O;
  stack: string;
  /**
   * The fetch function to use for all requests.
   *
   * TODO: Document what is needed to get retry logic
   */
  fetch: typeof globalThis.fetch;

  fetchJson: FetchAsJsonFn;

  tokenProvider: () => Promise<string> | string;
}

/**
 * @deprecated use `ClientContext`
 */
export type ThinClient<O extends { metadata: { userAgent: string } }> =
  ClientContext<O>;
