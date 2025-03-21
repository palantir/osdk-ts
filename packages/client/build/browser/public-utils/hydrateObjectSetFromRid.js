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

import { additionalContext } from "../Client.js";
import { createObjectSet } from "../objectSet/createObjectSet.js";

/**
 * Creates an OSDK object set from an object set RID.
 * @param client - An OSDK client.
 * @param definition - An OSDK object or interface definition.
 * @param rid - The RID of an object set.
 * @returns An OSDK object set.
 */
export function hydrateObjectSetFromRid(client, definition, rid) {
  return createObjectSet(definition, client[additionalContext], {
    type: "intersect",
    objectSets: [{
      type: "base",
      objectType: definition.apiName
    }, {
      type: "reference",
      reference: rid
    }]
  });
}
//# sourceMappingURL=hydrateObjectSetFromRid.js.map