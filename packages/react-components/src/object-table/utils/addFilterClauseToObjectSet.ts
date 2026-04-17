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

import type {
  ObjectOrInterfaceDefinition,
  ObjectSet,
  SimplePropertyDef,
} from "@osdk/api";
import type { WhereClause } from "@osdk/client";
import { isObjectSet } from "@osdk/client";

export function addFilterClauseToObjectSet<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
>(
  objectSet: ObjectSet<Q, RDPs>,
  whereClause: WhereClause<Q>,
): ObjectSet<Q, RDPs> {
  if (
    objectSet == null ||
    typeof objectSet !== "object" ||
    !isObjectSet(objectSet)
  ) {
    return objectSet;
  }

  return objectSet.where(whereClause);
}
