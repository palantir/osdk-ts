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

import { toBoundProperty } from "../../ontology/objectTypeAliases.js";
import { extractNamespace } from "./extractNamespace.js";

/**
 * Converts a property name as written in user code into the name to put on the
 * wire. Two transformations apply, each to one kind of type:
 *
 * - **interfaces** get their properties qualified with the interface's api
 *   namespace when the property name does not carry one already.
 * - **object types** that have been alias-remapped get their code-facing
 *   property names replaced with the bound names used on this stack.
 *
 * Names that need neither are returned unchanged.
 */
export function toWirePropName(
  fieldName: string,
  objectOrInterface: ObjectOrInterfaceDefinition,
): string {
  if (objectOrInterface.type === "interface") {
    const [objApiNamespace] = extractNamespace(objectOrInterface.apiName);
    const [fieldApiNamespace, fieldShortName] = extractNamespace(fieldName);
    return fieldApiNamespace == null && objApiNamespace != null
      ? `${objApiNamespace}.${fieldShortName}`
      : fieldName;
  }
  return toBoundProperty(objectOrInterface, fieldName);
}
