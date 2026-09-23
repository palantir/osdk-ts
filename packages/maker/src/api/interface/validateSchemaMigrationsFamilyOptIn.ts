/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import invariant from "tiny-invariant";

import type { InterfaceType } from "./InterfaceType.js";
import {
  isImported,
  resolveSchemaMigrationsOptIn,
} from "./schemaMigrationsOptIn.js";

/**
 * Interface schema migrations are opted into by a whole family of interfaces, not by one interface
 * at a time: an object type implementing an interface has to implement everything that interface
 * inherits too, so the inherited half of its schema needs the same backwards-compatibility
 * guarantees as the locally-declared half.
 *
 * A parent whose opt-in state cannot be determined is skipped rather than assumed opted out — see
 * {@link resolveSchemaMigrationsOptIn}.
 */
export function validateSchemaMigrationsFamilyOptIn(
  interfaceApiName: string,
  optedIn: boolean,
  parents: readonly InterfaceType[],
): void {
  for (const parent of parents) {
    const parentOptedIn = resolveSchemaMigrationsOptIn(parent);
    if (parentOptedIn === undefined) {
      continue;
    }
    invariant(
      parentOptedIn === optedIn,
      `${
        optedIn
          ? `Interface ${interfaceApiName} declares \`schemaMigrations\`, but the interface it extends, ${parent.apiName}, does not.`
          : `Interface ${interfaceApiName} extends ${parent.apiName}, which declares \`schemaMigrations\`, but ${interfaceApiName} does not.`
      } Interface schema migrations must be enabled for an entire interface hierarchy, since an object type implementing ${interfaceApiName} must implement the properties it inherits from ${parent.apiName} too. ${remedy(
        interfaceApiName,
        optedIn,
        parent,
      )}`,
    );
  }
}

function remedy(
  interfaceApiName: string,
  optedIn: boolean,
  parent: InterfaceType,
): string {
  // An imported parent belongs to another ontology, so `schemaMigrations` cannot be added to it
  // from here; the only local move is to drop the opt-in from the child.
  if (optedIn && isImported(parent)) {
    return `${parent.apiName} is imported from another ontology, so it must opt in there. Enable schema migrations on ${parent.apiName} in its own ontology and re-import it, or remove \`schemaMigrations\` from ${interfaceApiName}.`;
  }
  return `Add \`schemaMigrations\` to ${
    optedIn ? parent.apiName : interfaceApiName
  }, or remove it from ${optedIn ? interfaceApiName : parent.apiName}.`;
}
