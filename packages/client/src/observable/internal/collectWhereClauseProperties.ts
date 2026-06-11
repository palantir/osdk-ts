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

import type { SimpleWhereClause } from "./SimpleWhereClause.js";

/**
 * Walk a where clause (including `$and`/`$or`/`$not` logical operators) and
 * collect the set of property names it filters on.
 *
 * Returns `undefined` when the clause references special keys whose effective
 * property dependency is not statically determinable (e.g. `$title`, which
 * maps to whichever property the ontology marks as the title). Callers should
 * treat `undefined` as "conservative — invalidate on any property change."
 *
 * `$primaryKey` is intentionally ignored: per-PK changes drive per-object
 * invalidation directly, not the per-type fan-out this is used for.
 *
 * @internal
 */
export function collectWhereClauseProperties(
  clause: SimpleWhereClause | undefined,
): Set<string> | undefined {
  if (clause == null) {
    return new Set();
  }

  const collected = new Set<string>();
  const ok = walk(clause, collected);
  return ok ? collected : undefined;
}

function walk(
  clause: SimpleWhereClause,
  collected: Set<string>,
): boolean {
  for (const key of Object.keys(clause)) {
    if (key === "$and" || key === "$or") {
      const arr = (clause as Record<string, SimpleWhereClause[]>)[key];
      if (!Array.isArray(arr)) {
        return false;
      }
      for (const sub of arr) {
        if (!walk(sub, collected)) {
          return false;
        }
      }
      continue;
    }
    if (key === "$not") {
      const sub = (clause as Record<string, SimpleWhereClause>)[key];
      if (sub == null) {
        continue;
      }
      if (!walk(sub, collected)) {
        return false;
      }
      continue;
    }
    if (key === "$primaryKey") {
      continue;
    }
    // Any other `$`-prefixed key (today: `$title`; tomorrow: anything new in
    // SpecialPropertyWhereClause) doesn't map to a single backing property we
    // can name, so bail to conservative.
    if (key.startsWith("$")) {
      return false;
    }
    collected.add(key);
  }
  return true;
}
