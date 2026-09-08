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

interface SemanticOperation {
  type: string;
  target: string;
}

interface SemanticProperty {
  apiName: string;
  required: boolean;
  valueTypeApiName?: string;
}

export interface SemanticManifest {
  formatVersion: 1;
  packageName: string;
  packageVersion: string;
  interfaces: Array<{
    apiName: string;
    extends: string[];
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
    narrowed: boolean;
  }>;
  actions: Array<{
    apiName: string;
    parameters: string[];
    operations: SemanticOperation[];
  }>;
}

function compareText(left: string, right: string): number {
  return left < right ? -1 : left > right ? 1 : 0;
}

function compareApiName(
  left: { apiName: string },
  right: { apiName: string },
): number {
  return compareText(left.apiName, right.apiName);
}

function sortedByApiName<T extends { apiName: string }>(
  values: Iterable<T>,
  kind: string,
): T[] {
  const result = [...values].sort(compareApiName);
  for (let index = 1; index < result.length; index++) {
    if (result[index - 1]?.apiName === result[index]?.apiName) {
      throw new Error(`Duplicate ${kind} API name: ${result[index]?.apiName}`);
    }
  }
  return result;
}

function compareOperation(
  left: SemanticOperation,
  right: SemanticOperation,
): number {
  const typeComparison = compareText(left.type, right.type);
  return typeComparison !== 0
    ? typeComparison
    : compareText(left.target, right.target);
}

function actionOperations(
  action: Ontologies.ActionTypeV2,
): SemanticOperation[] {
  const result: SemanticOperation[] = [];
  for (const operation of action.operations) {
    switch (operation.type) {
      case "createObject":
      case "modifyObject":
      case "deleteObject":
        result.push({
          type: operation.type,
          target: operation.objectTypeApiName,
        });
        break;
      case "createInterfaceObject":
      case "modifyInterfaceObject":
      case "deleteInterfaceObject":
        result.push({
          type: operation.type,
          target: operation.interfaceTypeApiName,
        });
        break;
      case "createLink":
      case "deleteLink":
        result.push(
          {
            type: operation.type,
            target:
              `${operation.aSideObjectTypeApiName}.${operation.linkTypeApiNameAtoB}`,
          },
          {
            type: operation.type,
            target:
              `${operation.bSideObjectTypeApiName}.${operation.linkTypeApiNameBtoA}`,
          },
        );
        break;
      case "applyScenario":
        for (const objectTypeApiName of operation.objectTypeApiNames) {
          result.push({ type: operation.type, target: objectTypeApiName });
        }
        for (const linkGroup of operation.linkTypes) {
          for (const linkTypeApiName of linkGroup.linkTypes) {
            result.push({
              type: operation.type,
              target: `${linkGroup.objectTypeApiName}.${linkTypeApiName}`,
            });
          }
        }
        break;
    }
  }
  return result.sort(compareOperation);
}

function usableFieldType(
  fieldType: Ontologies.ValueTypeFieldType,
): "string" | "boolean" | undefined {
  if (fieldType.type === "string" || fieldType.type === "boolean") {
    return fieldType.type;
  }
  if (fieldType.type === "array" && fieldType.subType != null) {
    return usableFieldType(fieldType.subType);
  }
  return undefined;
}

function isNarrowed(valueType: Ontologies.OntologyValueType): boolean {
  const fieldType = usableFieldType(valueType.fieldType);
  if (fieldType == null || valueType.constraints.length === 0) {
    return false;
  }
  if (valueType.constraints.length !== 1) {
    throw new Error(
      `Expected exactly one constraint for value type ${valueType.apiName}`,
    );
  }

  let constraint = valueType.constraints[0];
  if (constraint.type === "array" && constraint.valueConstraint != null) {
    constraint = constraint.valueConstraint;
  }
  if (constraint.type !== "enum" || constraint.options.length === 0) {
    return false;
  }

  if (fieldType === "string") {
    return constraint.options.some((value) => typeof value === "string");
  }
  return constraint.options.some((value) => value === true || value === false);
}

export function buildSemanticManifest(
  metadata: Ontologies.OntologyFullMetadata,
  packageMetadata: {
    packageName: string;
    packageVersion: string;
  },
): SemanticManifest {
  return {
    formatVersion: 1,
    packageName: packageMetadata.packageName,
    packageVersion: packageMetadata.packageVersion,
    interfaces: sortedByApiName(
      Object.values(metadata.interfaceTypes),
      "interface",
    ).map((interfaceType) => {
      const properties: SemanticProperty[] = interfaceType.allPropertiesV2
          && Object.keys(interfaceType.allPropertiesV2).length > 0
        ? Object.values(interfaceType.allPropertiesV2).map((property) => ({
          apiName: property.apiName,
          required: property.requireImplementation,
          ...(property.valueTypeApiName == null
            ? {}
            : { valueTypeApiName: property.valueTypeApiName }),
        }))
        : Object.values(
          interfaceType.allProperties ?? interfaceType.properties,
        ).map((property) => ({
          apiName: property.apiName,
          required: property.required,
          ...(property.valueTypeApiName == null
            ? {}
            : { valueTypeApiName: property.valueTypeApiName }),
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
        extends: [
          ...(interfaceType.allExtendsInterfaces
            ?? interfaceType.extendsInterfaces),
        ].sort(compareText),
        properties: sortedByApiName(properties, "interface property"),
        links: sortedByApiName(links, "interface link"),
      };
    }),
    valueTypes: sortedByApiName(
      Object.values(metadata.valueTypes),
      "value type",
    ).map((valueType) => ({
      apiName: valueType.apiName,
      version: valueType.version,
      narrowed: isNarrowed(valueType),
    })),
    actions: sortedByApiName(
      Object.values(metadata.actionTypes),
      "action",
    ).map((action) => ({
      apiName: action.apiName,
      parameters: Object.keys(action.parameters).sort(compareText),
      operations: actionOperations(action),
    })),
  };
}
