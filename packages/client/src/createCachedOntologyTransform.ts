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

import type { ObjectOrInterfaceDefinition } from "@osdk/api";
import type { MinimalClient } from "./MinimalClientContext.js";

export type Factory<Q extends ObjectOrInterfaceDefinition, T> = (
  objectDef: Q,
  client: MinimalClient,
) => T;

/**
 * Creates a getter function that caches based on the ontology.objects[type] value
 *
 * Any extra arguments are passed through, but only the first args passed in will be used and are not considered as part of the caching
 */
export function createCachedOntologyTransform<
  Q extends ObjectOrInterfaceDefinition,
  T,
>(creator: Factory<Q, T>): Factory<Q, T> {
  // We can use the ObjectTypeDefinition as the key because it will be a globally unique singleton
  // Use Map instead of WeakMap here so usage for things like object prototypes do not churn over time
  // FIXME(EA): is this still true?
  const cache = new Map<ObjectOrInterfaceDefinition, T>();

  return (objectDefinition, client) => {
    let result = cache.get(objectDefinition);

    if (result == null) {
      result = creator(objectDefinition, client);
      cache.set(objectDefinition, result);
    }

    return result;
  };
}
