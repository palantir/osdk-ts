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

/**
 * Interface schema migrations are opted into by a whole family of interfaces, not by one interface
 * at a time: an object type implementing an interface has to implement everything that interface
 * inherits too, so the inherited half of its schema needs the same backwards-compatibility
 * guarantees as the half declared locally.
 *
 * Comparing an interface against its direct parents as it is defined is enough to enforce that.
 * A parent is always defined before the child extending it, so every edge of the hierarchy is
 * checked exactly once, and a hierarchy whose every edge agrees is opted in (or out) as a whole.
 *
 * @param parents the direct parents *this* ontology defines. An interface imported from another
 * ontology is deliberately not checked: its opt-in does not survive the import (no representation
 * carries it across), so there is nothing to compare against.
 */
export function validateSchemaMigrationsFamilyOptIn(
  interfaceApiName: string,
  optedIn: boolean,
  parents: readonly InterfaceType[],
): void {
  for (const parent of parents) {
    const parentOptedIn = parent.schemaMigrations !== undefined;
    invariant(
      parentOptedIn === optedIn,
      `${
        optedIn
          ? `Interface ${interfaceApiName} declares \`schemaMigrations\`, but the interface it extends, ${parent.apiName}, does not.`
          : `Interface ${interfaceApiName} extends ${parent.apiName}, which declares \`schemaMigrations\`, but ${interfaceApiName} does not.`
      } Interface schema migrations must be enabled for an entire interface hierarchy, since an object type implementing ${interfaceApiName} must implement the properties it inherits from ${parent.apiName} too. Add \`schemaMigrations\` to ${
        optedIn ? parent.apiName : interfaceApiName
      }, or remove it from ${optedIn ? interfaceApiName : parent.apiName}.`,
    );
  }
}
