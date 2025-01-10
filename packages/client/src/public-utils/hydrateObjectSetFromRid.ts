/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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
import { OntologyObjectSets } from "@osdk/internal.foundry.ontologiesv2";
import type { Client } from "../Client.js";
import { additionalContext } from "../Client.js";
import { createObjectSet } from "../objectSet/createObjectSet.js";

/**
 * Creates an OSDK object set from a temporary object set RID.
 * @param client An OSDK client.
 * @param definition An OSDK object or interface definition.
 * @param rid The RID of the temporary object set.
 * @returns
 */
export function hydrateObjectSetFromRid<T extends ObjectOrInterfaceDefinition>(
  client: Client,
  definition: T,
  rid: string,
) {
  OntologyObjectSets.get;
  return createObjectSet(
    definition,
    client[additionalContext],
    {
      type: "intersect",
      objectSets: [
        {
          type: "base",
          objectType: definition.apiName,
        },
        {
          type: "reference",
          reference: rid,
        },
      ],
    },
  );
}
