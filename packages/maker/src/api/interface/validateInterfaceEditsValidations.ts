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

import { createValidationIssueCollector } from "../../validation.js";
import type { OntologyContext } from "../validateOntology.js";
import { resolveReferences } from "./mapInterfaceEditsValidationReferences.js";

/**
 * Validates that every interface edit validation references entities that are defined or imported.
 */
export function validateInterfaceEditsValidations({
  ontology,
  importedTypes,
}: OntologyContext): void {
  const ontologies = [ontology, importedTypes];
  const collector = createValidationIssueCollector();
  for (const interfaceType of Object.values(ontology.INTERFACE_TYPE)) {
    for (const constraint of interfaceType.actionTypeConstraints ?? []) {
      if (constraint.editsValidation == null) continue;
      resolveReferences(
        constraint.editsValidation,
        interfaceType,
        constraint,
        ontologies,
        collector,
      );
    }
  }
  collector.throwIfAnyIssues();
}
