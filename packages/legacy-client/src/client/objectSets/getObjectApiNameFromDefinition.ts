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

import type { ObjectTypesFrom, OntologyDefinition } from "@osdk/api";
import { type ObjectSetDefinition } from "../../ontology-runtime";

export function getObjectApiNameFromDefinition<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
>(
  objectSetDefinition: ObjectSetDefinition,
): K {
  switch (objectSetDefinition.type) {
    case "base":
      return objectSetDefinition.objectType as K;
    case "filter":
      return getObjectApiNameFromDefinition(objectSetDefinition.objectSet);
    case "intersect":
    case "subtract":
    case "union":
      return getObjectApiNameFromDefinition(objectSetDefinition.objectSets[0]);
    case "searchAround":
      throw new Error("not implemented");
    case "static":
      throw new Error("not implemented");
    case "reference":
      throw new Error("not implemented");
  }
}
