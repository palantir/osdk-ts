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

import type {
  ObjectOrInterfaceDefinition,
  ObjectSet,
  PrimaryKeyType,
  SimplePropertyDef,
  WhereClause,
} from "@osdk/api";
import type { UseRowSelectionChange } from "../hooks/useRowSelection.js";

/**
 * Derives the object set representing the current row selection.
 *
 * The selection is filtered down to the selected primary keys via the
 * `$primaryKey` special property, so this works for both object and interface
 * types without resolving the underlying primary key property name. When every
 * row is selected, the full `resultingObjectSet` is returned unchanged.
 *
 * Returns `undefined` when there is no resulting object set to derive from.
 */
export function deriveSelectionObjectSet<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
>(
  resultingObjectSet: ObjectSet<Q, RDPs> | undefined,
  change: UseRowSelectionChange<Q, RDPs>,
): ObjectSet<Q, RDPs> | undefined {
  if (!resultingObjectSet) {
    return undefined;
  }
  if (change.isSelectAll && change.selectedRows.length > 0) {
    return resultingObjectSet;
  }
  const whereClause: Record<string, { $in: Array<PrimaryKeyType<Q>> }> = {
    $primaryKey: { $in: change.selectedRows.map(r => r.$primaryKey) },
  };
  return resultingObjectSet.where(whereClause as WhereClause<Q, RDPs>);
}
