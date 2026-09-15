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

import type {
  InterfaceParameterConstraint,
  KnownMarketplaceIdentifiers,
  OntologyIrBaseParameterConstraintType,
} from "@osdk/client.unstable";
import type { BaseParameterConstraintType as MarketplaceBaseParameterConstraintType } from "@osdk/client.unstable/api";

import type { OntologyRidGenerator } from "../../util/generateRid.js";
import { resolveInterfaceTypeRid } from "./convertActionParameters.js";

export function convertParameterConstraintTypeReferencesToBlockData(
  parameterType: OntologyIrBaseParameterConstraintType,
  ridGenerator: OntologyRidGenerator,
): InterfaceParameterConstraint["type"] {
  switch (parameterType.type) {
    case "objectReference":
      return {
        ...parameterType,
        objectReference: {
          ...parameterType.objectReference,
          objectTypeId: ridGenerator.generateObjectTypeId(
            parameterType.objectReference.objectTypeId,
          ),
        },
      };
    case "objectReferenceList":
      return {
        ...parameterType,
        objectReferenceList: {
          ...parameterType.objectReferenceList,
          objectTypeId: ridGenerator.generateObjectTypeId(
            parameterType.objectReferenceList.objectTypeId,
          ),
        },
      };
    case "objectSetRid":
      return {
        ...parameterType,
        objectSetRid: {
          ...parameterType.objectSetRid,
          objectTypeId: ridGenerator.generateObjectTypeId(
            parameterType.objectSetRid.objectTypeId,
          ),
        },
      };
    case "interfaceReference":
      return {
        ...parameterType,
        interfaceReference: {
          ...parameterType.interfaceReference,
          interfaceTypeRid: resolveInterfaceTypeRid(
            parameterType.interfaceReference.interfaceTypeRid,
            ridGenerator,
          ),
        },
      };
    case "interfaceReferenceList":
      return {
        ...parameterType,
        interfaceReferenceList: {
          ...parameterType.interfaceReferenceList,
          interfaceTypeRid: resolveInterfaceTypeRid(
            parameterType.interfaceReferenceList.interfaceTypeRid,
            ridGenerator,
          ),
        },
      };
    case "interfaceObjectSetRid":
      return {
        ...parameterType,
        interfaceObjectSetRid: {
          ...parameterType.interfaceObjectSetRid,
          interfaceTypeRid: resolveInterfaceTypeRid(
            parameterType.interfaceObjectSetRid.interfaceTypeRid,
            ridGenerator,
          ),
        },
      };
    default:
      return parameterType as InterfaceParameterConstraint["type"];
  }
}

export function convertParameterConstraintTypeReferencesToShape(
  parameterType: InterfaceParameterConstraint["type"],
  knownIdentifiers: KnownMarketplaceIdentifiers,
): MarketplaceBaseParameterConstraintType {
  switch (parameterType.type) {
    case "objectReference":
      return {
        ...parameterType,
        objectReference: {
          ...parameterType.objectReference,
          objectTypeId: resolveBlockIdentifier(
            knownIdentifiers.objectTypeIds,
            parameterType.objectReference.objectTypeId,
            "object type",
          ),
        },
      };
    case "objectReferenceList":
      return {
        ...parameterType,
        objectReferenceList: {
          ...parameterType.objectReferenceList,
          objectTypeId: resolveBlockIdentifier(
            knownIdentifiers.objectTypeIds,
            parameterType.objectReferenceList.objectTypeId,
            "object type",
          ),
        },
      };
    case "objectSetRid":
      return {
        ...parameterType,
        objectSetRid: {
          ...parameterType.objectSetRid,
          objectTypeId: resolveBlockIdentifier(
            knownIdentifiers.objectTypeIds,
            parameterType.objectSetRid.objectTypeId,
            "object type",
          ),
        },
      };
    case "interfaceReference":
      return {
        ...parameterType,
        interfaceReference: {
          ...parameterType.interfaceReference,
          interfaceTypeRid: resolveBlockIdentifier(
            knownIdentifiers.interfaceTypes,
            parameterType.interfaceReference.interfaceTypeRid,
            "interface type",
          ),
        },
      };
    case "interfaceReferenceList":
      return {
        ...parameterType,
        interfaceReferenceList: {
          ...parameterType.interfaceReferenceList,
          interfaceTypeRid: resolveBlockIdentifier(
            knownIdentifiers.interfaceTypes,
            parameterType.interfaceReferenceList.interfaceTypeRid,
            "interface type",
          ),
        },
      };
    case "interfaceObjectSetRid":
      return {
        ...parameterType,
        interfaceObjectSetRid: {
          ...parameterType.interfaceObjectSetRid,
          interfaceTypeRid: resolveBlockIdentifier(
            knownIdentifiers.interfaceTypes,
            parameterType.interfaceObjectSetRid.interfaceTypeRid,
            "interface type",
          ),
        },
      };
    default:
      return parameterType as MarketplaceBaseParameterConstraintType;
  }
}

function resolveBlockIdentifier(
  identifiers: Record<string, string> | undefined,
  identifier: string,
  identifierType: string,
): string {
  const blockIdentifier = identifiers?.[identifier];
  if (blockIdentifier === undefined) {
    throw new Error(
      `Missing marketplace block identifier for ${identifierType} ${identifier}`,
    );
  }
  return blockIdentifier;
}
