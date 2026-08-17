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

interface SemanticOperation {
  type: string;
  target: string;
}

type InterfaceLinkOperation =
  | {
    type: "createInterfaceLink";
    interfaceTypeApiName: string;
    interfaceLinkTypeApiName: string;
  }
  | {
    type: "deleteInterfaceLink";
    interfaceTypeApiName: string;
    interfaceLinkTypeApiName: string;
  };

export interface SemanticManifest {
  version: 1;
  packageName: string;
  packageVersion: string;
  ontologyIdentity: "portable" | "installationSpecific";
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
  imports: ImportedEntityMapping[];
  externalPackages: Record<string, string>;
  exclusions: string[];
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

function compareOperation(
  left: SemanticOperation,
  right: SemanticOperation,
): number {
  const typeComparison = compareText(left.type, right.type);
  return typeComparison !== 0
    ? typeComparison
    : compareText(left.target, right.target);
}

function semanticOperations(
  action: Ontologies.ActionTypeV2,
): SemanticOperation[] {
  const operations: Array<Ontologies.LogicRule | InterfaceLinkOperation> =
    action.operations;
  const result: SemanticOperation[] = [];
  for (const operation of operations) {
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
        for (const target of operation.objectTypeApiNames) {
          result.push({ type: operation.type, target });
        }
        for (const linkGroup of operation.linkTypes) {
          for (const linkType of linkGroup.linkTypes) {
            result.push({
              type: operation.type,
              target: `${linkGroup.objectTypeApiName}.${linkType}`,
            });
          }
        }
        break;
      case "createInterfaceLink":
      case "deleteInterfaceLink":
        result.push({
          type: operation.type,
          target:
            `${operation.interfaceTypeApiName}.${operation.interfaceLinkTypeApiName}`,
        });
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
  const usableType = usableFieldType(valueType.fieldType);
  if (usableType == null || valueType.constraints.length !== 1) {
    return false;
  }

  let constraint = valueType.constraints[0];
  if (constraint.type === "array" && constraint.valueConstraint) {
    constraint = constraint.valueConstraint;
  }
  if (constraint.type !== "enum" || constraint.options.length === 0) {
    return false;
  }

  if (usableType === "string") {
    return constraint.options.length > 0;
  }

  return constraint.options.some((value) => value === true || value === false);
}

export function buildSemanticManifest(
  metadata: Ontologies.OntologyFullMetadata,
  options: {
    packageName: string;
    packageVersion: string;
    ontologyIdentity: "portable" | "installationSpecific";
    imports?: ReadonlyArray<ImportedEntityMapping>;
  },
): SemanticManifest {
  const imports = [...(options.imports ?? [])].sort((left, right) => {
    const kindComparison = compareText(left.kind, right.kind);
    if (kindComparison !== 0) {
      return kindComparison;
    }
    const apiNameComparison = compareText(left.apiName, right.apiName);
    return apiNameComparison !== 0
      ? apiNameComparison
      : compareText(left.package, right.package);
  });
  const externalPackages = Object.fromEntries(
    imports.map((entry) => [
      `${entry.kind}:${entry.apiName}`,
      entry.package,
    ]),
  );
  const importedInterfaces = new Set(
    imports.filter((entry) => entry.kind === "interface").map((entry) =>
      entry.apiName
    ),
  );

  return {
    version: 1,
    packageName: options.packageName,
    packageVersion: options.packageVersion,
    ontologyIdentity: options.ontologyIdentity,
    interfaces: Object.values(metadata.interfaceTypes)
      .filter((interfaceType) => !importedInterfaces.has(interfaceType.apiName))
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
          extends: [...interfaceType.extendsInterfaces].sort(compareText),
          properties: properties.sort(compareApiName),
          links: links.sort(compareApiName),
        };
      })
      .sort(compareApiName),
    valueTypes: Object.values(metadata.valueTypes)
      .map((valueType) => ({
        apiName: valueType.apiName,
        version: valueType.version,
        narrowed: isNarrowed(valueType),
      }))
      .sort(compareApiName),
    actions: Object.values(metadata.actionTypes)
      .map((action) => ({
        apiName: action.apiName,
        parameters: Object.keys(action.parameters).sort(compareText),
        operations: semanticOperations(action),
      }))
      .sort(compareApiName),
    imports,
    externalPackages,
    exclusions: [],
  };
}
