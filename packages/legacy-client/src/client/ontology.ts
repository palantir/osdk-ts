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

import type { OntologyDefinition } from "@osdk/api";
import type { Objects } from "./objects";
import { createBaseOsdkObjectSet } from "./objectSets/OsdkObjectSet";

export class Ontology<O extends OntologyDefinition<any>> {
  #definition: O;
  constructor(definition: O) {
    this.#definition = definition;
  }

  get objects(): Objects<O> {
    return createObjectSetCreator(this.#definition);
  }

  get actions(): never {
    throw new Error("not implemented");
  }

  get queries(): never {
    throw new Error("not implemented");
  }

  get attachments(): never {
    throw new Error("not implemented");
  }
}

export function createObjectSetCreator<
  O extends OntologyDefinition<any>,
>(definition: O): Objects<O> {
  return new Proxy(
    {},
    {
      get: (_target, p, _receiver) => {
        if (typeof p === "string") {
          return createBaseOsdkObjectSet(p, definition);
        }

        return undefined;
      },
    },
  ) as Objects<O>;
}
