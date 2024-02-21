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

import { createClientContext } from "@osdk/shared.net";
import type {
  MinimalClient,
  MinimalClientParams,
} from "./MinimalClientContext.js";
import type { OntologyProviderFactory } from "./ontology/OntologyProvider.js";
import { USER_AGENT } from "./util/UserAgent.js";

export function createMinimalClient(
  metadata: MinimalClientParams["metadata"],
  stack: string,
  tokenProvider: () => Promise<string> | string,
  ontologyProviderFactory: OntologyProviderFactory,
  fetchFn: (
    input: RequestInfo | URL,
    init?: RequestInit | undefined,
  ) => Promise<Response> = global.fetch,
) {
  const clientCtx: MinimalClient = createClientContext(
    {
      metadata,
      provider: undefined as any,
    },
    stack,
    tokenProvider,
    USER_AGENT,
    fetchFn,
  );
  clientCtx.ontology.provider = ontologyProviderFactory(clientCtx);
  return clientCtx;
}
