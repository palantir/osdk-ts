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

import type { OntologyDefinition } from "../ontology";
import type { Client } from "./Client";
import { createThinClient } from "./createThinClient";
import { createObjectSet } from "./objectSet/createObjectSet";
import type { ObjectSetFactory } from "./objectSet/ObjectSet";
import { createObjectSetCreator } from "./ObjectSetCreator";

export function createClient<O extends OntologyDefinition<any>>(
  ontology: O,
  stack: string,
  tokenProvider: () => string,
  fetchFn: typeof globalThis.fetch = fetch,
): Client<O> {
  const thinClient = createThinClient<O>(
    ontology,
    stack,
    tokenProvider,
    fetchFn,
  );

  const objectSetFactory: ObjectSetFactory<O> = (type, opts) =>
    createObjectSet(type, thinClient, opts);

  const client: Client<O> = Object.defineProperties(
    {} as Client<O>,
    {
      objectSet: { get: () => objectSetFactory },
      objects: { get: () => createObjectSetCreator(client) },
    } satisfies Record<keyof Client<any>, PropertyDescriptor>,
  );

  return client;
}
