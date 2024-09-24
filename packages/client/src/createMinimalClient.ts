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

import { createSharedClientContext } from "@osdk/shared.client.impl";
import type { Logger } from "./Logger.js";
import type {
  ClientCacheKey,
  MinimalClient,
  MinimalClientParams,
} from "./MinimalClientContext.js";
import { createObjectSet } from "./objectSet/createObjectSet.js";
import type { ObjectSetFactory } from "./objectSet/ObjectSetFactory.js";
import {
  createStandardOntologyProviderFactory,
  type OntologyCachingOptions,
} from "./ontology/StandardOntologyProvider.js";
import { USER_AGENT } from "./util/UserAgent.js";

/** @internal */
export function createMinimalClient(
  metadata: MinimalClientParams["metadata"],
  baseUrl: string,
  tokenProvider: () => Promise<string>,
  options: OntologyCachingOptions & { logger?: Logger } = {},
  fetchFn: (
    input: Request | URL | string,
    init?: RequestInit | undefined,
  ) => Promise<Response> = global.fetch,
  objectSetFactory: ObjectSetFactory<any, any> = createObjectSet,
) {
  if (process?.env?.NODE_ENV !== "production") {
    try {
      new URL(baseUrl);
    } catch (e) {
      const hint =
        !baseUrl.startsWith("http://") || !baseUrl.startsWith("https://")
          ? ". Did you forget to add 'http://' or 'https://'?"
          : "";
      throw new Error(`Invalid stack URL: ${baseUrl}${hint}`);
    }
  }

  const minimalClient: MinimalClient = {
    ...createSharedClientContext(
      baseUrl,
      tokenProvider,
      USER_AGENT,
      fetchFn,
    ),
    objectSetFactory,
    ontologyRid: metadata.ontologyRid,
    logger: options.logger,
    clientCacheKey: {} as ClientCacheKey,
    requestContext: {},
  } satisfies Omit<
    MinimalClient,
    "ontologyProvider"
  > as any;

  return Object.assign(minimalClient, {
    ontologyProvider: createStandardOntologyProviderFactory(
      options,
    )(minimalClient),
  });
}
