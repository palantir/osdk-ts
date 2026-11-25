/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { InterfaceMetadata } from "@osdk/api";
import type { InterfaceType } from "@osdk/foundry.ontologies";

import {
  ensureStringEnumSupportedOrUndefined,
  supportedReleaseStatus,
} from "./wireObjectTypeFullMetadataToSdkObjectMetadata.js";
import { wirePropertyV2ToSdkPropertyDefinition } from "./wirePropertyV2ToSdkPropertyDefinition.js";

export { wireInterfaceTypeV2ToSdkObjectDefinition as __UNSTABLE_wireInterfaceTypeV2ToSdkObjectDefinition };

export function wireInterfaceTypeV2ToSdkObjectDefinition(
  interfaceType: InterfaceType,
  v2: boolean,
  log?: { info: (msg: string) => void },
): InterfaceMetadata {
  const rawActionConstraints =
    (interfaceType as any).allActionTypeConstraints ??
    (interfaceType as any).actionTypeConstraints ??
    (interfaceType as any).allActionTypes ??
    (interfaceType as any).actionTypes ??
    (interfaceType as any).actions;

  const actionTypeConstraints =
    convertActionTypeConstraints(rawActionConstraints);

  return {
    type: "interface",
    rid: interfaceType.rid,
    apiName: interfaceType.apiName,
    displayName: interfaceType.displayName,
    description: interfaceType.description,
    implements: interfaceType.allExtendsInterfaces
      ? [...interfaceType.allExtendsInterfaces].sort((a, b) =>
          a.localeCompare(b),
        )
      : interfaceType.extendsInterfaces
        ? [...interfaceType.extendsInterfaces].sort((a, b) =>
            a.localeCompare(b),
          )
        : undefined,
    properties: Object.fromEntries(
      Object.entries(
        // prefer V2 if available and non-empty, otherwise fall back to V1
        interfaceType.allPropertiesV2 &&
          Object.keys(interfaceType.allPropertiesV2).length > 0
          ? interfaceType.allPropertiesV2
          : (interfaceType.allProperties ?? interfaceType.properties),
      )
        .map(([key, value]) => {
          return [key, wirePropertyV2ToSdkPropertyDefinition(value, true, log)];
        })
        .filter(([_, value]) => value != null)
        .sort(([a], [b]) => (a as string).localeCompare(b as string)),
    ),
    links: Object.fromEntries(
      Object.entries(interfaceType.allLinks ?? interfaceType.links ?? {})
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([linkApiName, linkType]) => [
          linkApiName,
          {
            multiplicity: linkType.cardinality === "MANY",
            targetTypeApiName: linkType.linkedEntityApiName.apiName,
            targetType:
              linkType.linkedEntityApiName.type === "objectTypeApiName"
                ? "object"
                : "interface",
          },
        ]),
    ),
    implementedBy: interfaceType.implementedByObjectTypes
      ? [...interfaceType.implementedByObjectTypes].sort((a, b) =>
          a.localeCompare(b),
        )
      : interfaceType.implementedByObjectTypes,
    ...(actionTypeConstraints && Object.keys(actionTypeConstraints).length > 0
      ? {
          actionTypeConstraints,
          actions: actionTypeConstraints,
        }
      : {}),
  };
}

function convertActionTypeConstraints(
  rawConstraints: unknown,
): Record<string, InterfaceMetadata.ActionTypeConstraint> | undefined {
  if (rawConstraints == null) return undefined;

  const rawList: Array<[string, any]> = Array.isArray(rawConstraints)
    ? rawConstraints.map((c) => [c.metadata?.apiName ?? c.apiName ?? "", c])
    : Object.entries(rawConstraints as Record<string, any>);

  const constraintsList: Array<
    [string, InterfaceMetadata.ActionTypeConstraint]
  > = [];

  for (const [key, c] of rawList) {
    if (c == null) continue;
    const apiName = c.metadata?.apiName ?? c.apiName ?? key;
    if (!apiName) continue;

    const displayName = c.metadata?.displayName ?? c.displayName;
    const description = c.metadata?.description ?? c.description;
    const requireImplementation = c.requireImplementation;
    const status = ensureStringEnumSupportedOrUndefined(
      c.status,
      supportedReleaseStatus,
    );

    const rawParams: Array<[string, any]> =
      c.parameters == null
        ? []
        : Array.isArray(c.parameters)
          ? c.parameters.map((p: any) => [
              p.displayMetadata?.apiName ?? p.apiName ?? "",
              p,
            ])
          : Object.entries(c.parameters as Record<string, any>);

    const paramsList: Array<
      [string, InterfaceMetadata.ActionTypeConstraint.Parameter]
    > = [];

    for (const [paramKey, p] of rawParams) {
      if (p == null) continue;
      const paramApiName = p.displayMetadata?.apiName ?? p.apiName ?? paramKey;
      if (!paramApiName) continue;

      const paramDisplayName = p.displayMetadata?.displayName ?? p.displayName;
      const paramDescription = p.description;
      const paramRequireImpl = p.requireImplementation;

      let type: any = "string";
      let multiplicity = false;
      let nullable = false;

      if (p.dataType != null) {
        multiplicity = p.dataType.type === "array";
        nullable = p.required != null ? !p.required : (p.nullable ?? false);
        type = convertParameterDataType(
          multiplicity ? p.dataType.subType : p.dataType,
        );
      } else if (p.type != null) {
        const rawType = p.type;
        if (typeof rawType === "string") {
          type = rawType === "date" ? "datetime" : rawType;
          multiplicity = p.multiplicity ?? false;
          nullable = p.nullable ?? (p.required != null ? !p.required : false);
        } else if (typeof rawType === "object") {
          if (typeof rawType.type === "string") {
            const typeStr = rawType.type as string;
            if (typeStr.endsWith("List")) {
              multiplicity = true;
              const base = typeStr.slice(0, -4);
              type = convertConstraintBaseType(base, rawType);
            } else {
              multiplicity = p.multiplicity ?? false;
              type = convertConstraintBaseType(typeStr, rawType);
            }
            nullable =
              p.nullable ??
              (p.isRequiredParameterOnConcreteAction != null
                ? !p.isRequiredParameterOnConcreteAction
                : p.required != null
                  ? !p.required
                  : false);
          } else {
            type = rawType;
            multiplicity = p.multiplicity ?? false;
            nullable = p.nullable ?? false;
          }
        }
      }

      paramsList.push([
        paramApiName,
        {
          type,
          ...(paramDisplayName ? { displayName: paramDisplayName } : {}),
          ...(paramDescription ? { description: paramDescription } : {}),
          ...(multiplicity ? { multiplicity } : {}),
          ...(nullable ? { nullable } : {}),
          ...(paramRequireImpl !== undefined
            ? { requireImplementation: paramRequireImpl }
            : {}),
        },
      ]);
    }

    const sortedParams = Object.fromEntries(
      paramsList.sort(([a], [b]) => a.localeCompare(b)),
    );

    constraintsList.push([
      apiName,
      {
        apiName,
        ...(c.rid ? { rid: c.rid } : {}),
        ...(displayName ? { displayName } : {}),
        ...(description ? { description } : {}),
        ...(Object.keys(sortedParams).length > 0
          ? { parameters: sortedParams }
          : {}),
        ...(requireImplementation !== undefined
          ? { requireImplementation }
          : {}),
        ...(status ? { status } : {}),
      },
    ]);
  }

  if (constraintsList.length === 0) return undefined;

  return Object.fromEntries(
    constraintsList.sort(([a], [b]) => a.localeCompare(b)),
  );
}

function convertConstraintBaseType(base: string, rawType: any): any {
  switch (base) {
    case "date":
      return "datetime";
    case "decimal":
      return "double";
    case "objectReference":
    case "anyObjectReference":
      return {
        type: "object",
        object:
          rawType.objectReference?.objectTypeApiName ??
          rawType.objectReference?.objectTypeRid ??
          rawType.object ??
          "",
      };
    case "interfaceReference":
    case "anyInterfaceReference":
      return {
        type: "interface",
        interface:
          rawType.interfaceReference?.interfaceTypeApiName ??
          rawType.interfaceReference?.interfaceTypeRid ??
          rawType.interface ??
          "",
      };
    case "objectSetRid":
    case "anyObjectSetRid":
      return {
        type: "objectSet",
        objectSet:
          rawType.objectSetRid?.objectTypeApiName ?? rawType.objectSet ?? "",
      };
    case "struct":
    case "anyStruct":
      return { type: "struct", struct: rawType.struct ?? {} };
    default:
      return base;
  }
}

function convertParameterDataType(dataType: any): any {
  if (typeof dataType === "string") {
    return dataType === "date" ? "datetime" : dataType;
  }
  switch (dataType.type) {
    case "string":
    case "boolean":
    case "attachment":
    case "double":
    case "integer":
    case "long":
    case "timestamp":
    case "mediaReference":
    case "marking":
    case "objectType":
    case "geohash":
    case "geoshape":
    case "scenarioReference":
      return dataType.type;
    case "date":
      return "datetime";
    case "objectSet":
      return {
        type: "objectSet",
        objectSet: dataType.objectTypeApiName ?? dataType.objectSet,
      };
    case "object":
      return {
        type: "object",
        object: dataType.objectTypeApiName ?? dataType.object,
      };
    case "interfaceObject":
    case "interface":
      return {
        type: "interface",
        interface: dataType.interfaceTypeApiName ?? dataType.interface,
      };
    case "struct":
      return { type: "struct", struct: dataType.fields ?? dataType.struct };
    default:
      return dataType.type ?? "string";
  }
}
