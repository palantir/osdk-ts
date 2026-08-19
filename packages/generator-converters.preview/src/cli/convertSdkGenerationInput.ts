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

import type { OntologyBlockDataV2, OntologyIrV2 } from "@osdk/client.unstable";
import type * as Ontologies from "@osdk/foundry.ontologies";
import { OntologyIrToFullMetadataConverter } from "@osdk/generator-converters.ontologyir";
import {
  type PreviewOntologyFullMetadata,
  PreviewOntologyIrConverter,
} from "../PreviewOntologyIrConverter.js";

export type SdkGenerationInput = OntologyBlockDataV2 | OntologyIrV2;

type SdkGenerationActionType =
  | Ontologies.ActionTypeV2
  | Ontologies.ActionTypeFullMetadata;

export function normalizeSdkGenerationActionTypes(
  actionTypes: Record<string, SdkGenerationActionType>,
): Record<string, Ontologies.ActionTypeV2> {
  return Object.fromEntries(
    Object.entries(actionTypes).map(([apiName, action]) => [
      apiName,
      "actionType" in action ? action.actionType : action,
    ]),
  );
}

export function unwrapSdkGenerationInput(value: unknown): unknown {
  if (
    typeof value === "object"
    && value != null
    && "ontology" in value
    && !("transitiveImportedOntology" in value)
  ) {
    return value.ontology;
  }
  return value;
}

export function isSdkGenerationInput(
  value: unknown,
): value is SdkGenerationInput {
  if (typeof value !== "object" || value == null) {
    return false;
  }

  if ("transitiveImportedOntology" in value) {
    return "ontology" in value
      && "importedOntology" in value
      && "valueTypes" in value
      && "importedValueTypes" in value;
  }

  return "objectTypes" in value && "actionTypes" in value;
}

export function convertSdkGenerationInput(
  input: SdkGenerationInput,
  importedTypes?: Ontologies.OntologyFullMetadata,
): PreviewOntologyFullMetadata | Ontologies.OntologyFullMetadata {
  if ("transitiveImportedOntology" in input) {
    return OntologyIrToFullMetadataConverter.getFullMetadataFromEnvelope(input);
  }

  return PreviewOntologyIrConverter.getPreviewFullMetadataFromBlockData(
    input,
    importedTypes,
  );
}
