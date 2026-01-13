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

import type { ObjectTypeDefinition } from "@osdk/api";
import type { FilterDefinitionUnion } from "../FilterListApi.js";
import { assertUnreachable } from "./assertUnreachable.js";

export function getFilterKey<Q extends ObjectTypeDefinition>(
  definition: FilterDefinitionUnion<Q>,
): string {
  switch (definition.type) {
    case "property":
      return definition.key;
    case "hasLink":
      return definition.id ?? `hasLink:${definition.linkName}`;
    case "linkedProperty":
      return definition.id ?? `linkedProperty:${definition.linkName}:${definition.linkedPropertyKey}`;
    case "keywordSearch":
      return definition.id ?? `keywordSearch-${
        Array.isArray(definition.properties)
          ? definition.properties.join("-")
          : "all"
      }`;
    case "custom":
      return definition.id ?? definition.key;
    default:
      return assertUnreachable(definition);
  }
}
