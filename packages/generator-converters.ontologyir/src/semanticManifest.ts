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

import type * as Ontologies from "@osdk/foundry.ontologies";
import type { OacActionOperation } from "./OntologyIrToFullMetadataConverter.js";

export type ImportedEntityKind =
  | "interface"
  | "object"
  | "sharedPropertyType"
  | "valueType";

export interface ImportedEntityMapping {
  kind: ImportedEntityKind;
  apiName: string;
  package: string;
}

export interface SemanticManifest {
  version: 1;
  packageName?: string;
  packageVersion: string;
  ontologyIdentity: "portable" | "installationSpecific";
  interfaces: Array<{
    apiName: string;
    extends: string[];
    implementerCompleteness: "unknown" | "complete";
    properties: Array<{
      apiName: string;
      required: boolean;
      valueTypeApiName?: string;
    }>;
    links: Array<{
      apiName: string;
      cardinality: string;
      target: string;
    }>;
  }>;
  valueTypes: Array<{
    apiName: string;
    version: string;
  }>;
  actions: Array<{
    apiName: string;
    parameters: string[];
    operations: ReadonlyArray<OacActionOperation>;
  }>;
  imports: ImportedEntityMapping[];
}

function compareApiName(
  left: { apiName: string },
  right: { apiName: string },
): number {
  return left.apiName.localeCompare(right.apiName);
}

function implementerCompletenessOf(
  interfaceType: Ontologies.InterfaceType,
): "unknown" | "complete" {
  if (
    "implementedByCompleteness" in interfaceType
    && interfaceType.implementedByCompleteness === "complete"
  ) {
    return "complete";
  }
  return "unknown";
}

function actionOperationsOf(
  action: Ontologies.ActionTypeV2,
): ReadonlyArray<OacActionOperation> {
  if (
    "oacOperations" in action
    && Array.isArray(action.oacOperations)
  ) {
    return action.oacOperations;
  }
  return [];
}

export function buildSemanticManifest(
  metadata: Ontologies.OntologyFullMetadata,
  options: {
    packageName?: string;
    packageVersion: string;
    ontologyIdentity: "portable" | "installationSpecific";
    imports?: ReadonlyArray<ImportedEntityMapping>;
  },
): SemanticManifest {
  const imports = options.imports ?? [];
  return {
    version: 1,
    ...(options.packageName ? { packageName: options.packageName } : {}),
    packageVersion: options.packageVersion,
    ontologyIdentity: options.ontologyIdentity,
    interfaces: Object.values(metadata.interfaceTypes)
      .map((interfaceType) => {
        const properties = interfaceType.allPropertiesV2
            && Object.keys(interfaceType.allPropertiesV2).length > 0
          ? Object.values(interfaceType.allPropertiesV2).map((property) => ({
            apiName: property.apiName,
            required: property.requireImplementation,
            ...(property.valueTypeApiName
              ? { valueTypeApiName: property.valueTypeApiName }
              : {}),
          }))
          : Object.values(
            interfaceType.allProperties ?? interfaceType.properties,
          ).map((property) => ({
            apiName: property.apiName,
            required: property.required,
            ...(property.valueTypeApiName
              ? { valueTypeApiName: property.valueTypeApiName }
              : {}),
          }));
        const links = Object.values(
          interfaceType.allLinks ?? interfaceType.links,
        ).map((link) => ({
          apiName: link.apiName,
          cardinality: link.cardinality,
          target: link.linkedEntityApiName.apiName,
        }));
        return {
          apiName: interfaceType.apiName,
          extends: [...interfaceType.extendsInterfaces].sort((a, b) =>
            a.localeCompare(b)
          ),
          implementerCompleteness: implementerCompletenessOf(interfaceType),
          properties: properties.sort(compareApiName),
          links: links.sort(compareApiName),
        };
      })
      .sort(compareApiName),
    valueTypes: Object.values(metadata.valueTypes)
      .map((valueType) => ({
        apiName: valueType.apiName,
        version: valueType.version,
      }))
      .sort(compareApiName),
    actions: Object.values(metadata.actionTypes)
      .map((action) => {
        return {
          apiName: action.apiName,
          parameters: Object.keys(action.parameters).sort((a, b) =>
            a.localeCompare(b)
          ),
          operations: actionOperationsOf(action),
        };
      })
      .sort(compareApiName),
    imports: [...imports].sort((left, right) => {
      const kindOrder = left.kind.localeCompare(right.kind);
      if (kindOrder !== 0) {
        return kindOrder;
      }
      return left.apiName.localeCompare(right.apiName);
    }),
  };
}
