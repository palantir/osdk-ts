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

import deepEqual from "fast-deep-equal";
import type { ObjectHolder } from "../../../object/convertWireToOsdkObjects/ObjectHolder.js";

/**
 * Diff two ObjectHolder snapshots and return the set of property keys whose
 * values differ. Metadata keys (those prefixed with `$`) are ignored — only
 * real ontology properties are compared.
 *
 * @internal
 */
export function computePropertyDiff(
  oldHolder: ObjectHolder,
  newHolder: ObjectHolder,
): Set<string> {
  const diff = new Set<string>();
  for (const key of Object.keys(newHolder)) {
    if (key.startsWith("$")) {
      continue;
    }
    if (!deepEqual(oldHolder[key], newHolder[key])) {
      diff.add(key);
    }
  }
  for (const key of Object.keys(oldHolder)) {
    if (key.startsWith("$") || key in newHolder) {
      continue;
    }
    diff.add(key);
  }
  return diff;
}
