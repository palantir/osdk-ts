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

import type {
  ObjectOrInterfaceDefinitionFrom,
  ObjectOrInterfaceKeysFrom,
  OntologyDefinition,
} from "@osdk/api";
import type { ClientContext } from "@osdk/shared.net";
import type { Client } from "./Client.js";
import type { ObjectSet } from "./objectSet/ObjectSet.js";

/**
 * A type that creates an object set for each object in the ontology.
 */
export type ObjectSetCreator<O extends OntologyDefinition<any>> = {
  [T in ObjectOrInterfaceKeysFrom<O>]: ObjectSet<
    ObjectOrInterfaceDefinitionFrom<O, T>
  >;
};

/**
 * Create a proxy for the object set creator.
 * @param client The client to use to create the object sets.
 * @returns A proxy for the object set creator.
 */
export function createObjectSetCreator<
  T extends Client<any>,
  D extends OntologyDefinition<any>,
>(
  client: T,
  clientContext: ClientContext<D>,
) {
  return new Proxy(
    {},
    {
      get: (target, p, receiver) => {
        if (typeof p === "string") return client.objectSet(p);

        return undefined;
      },

      ownKeys(target) {
        return Object.keys(clientContext.ontology.objects);
      },

      getOwnPropertyDescriptor(target, p) {
        if (typeof p === "string") {
          return {
            enumerable: clientContext.ontology.objects[p] != null,
            configurable: true,
            value: client.objectSet(p),
          };
        }
      },
    },
  );
}
