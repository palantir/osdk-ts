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

import type { OntologyContext } from "../validateOntology.js";

/**
 * Validates that every action an object type names as an interface action type constraint's
 * implementation is defined or imported.
 */
export function validateActionTypeImplementationReferences({
  ontology,
  importedTypes,
}: OntologyContext): void {
  const actionApiNames = new Set([
    ...Object.keys(ontology.ACTION_TYPE),
    ...Object.keys(importedTypes.ACTION_TYPE),
  ]);
  const validationErrors: string[] = [];

  for (const objectType of Object.values(ontology.OBJECT_TYPE)) {
    for (const implementation of objectType.implementsInterfaces ?? []) {
      for (const [constraintApiName, { actionTypeApiName }] of Object.entries(
        implementation.actionTypeImplementations ?? {},
      )) {
        if (!actionApiNames.has(actionTypeApiName)) {
          validationErrors.push(
            `Action "${actionTypeApiName}" referenced by action type constraint "${constraintApiName}" on interface "${implementation.implements.apiName}" for object "${objectType.apiName}" is not defined or imported`,
          );
        }
      }
    }
  }

  invariant(
    validationErrors.length === 0,
    "\n" +
      validationErrors
        .map((error) => `Ontology Definition Error: ${error}\n`)
        .join("\n"),
  );
}
