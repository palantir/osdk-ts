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

import type { InterfaceTypeStatus } from "@osdk/client.unstable";
import invariant from "tiny-invariant";
import type { BlueprintIcon } from "./common/BlueprintIcons.js";
import { OntologyEntityTypeEnum } from "./common/OntologyEntityTypeEnum.js";
import {
  namespace,
  ontologyDefinition,
  updateOntology,
  withoutNamespace,
} from "./defineOntology.js";
import {
  type InterfaceDefinedProperty,
  type InterfacePropertyType,
  isInterfaceSharedPropertyType,
} from "./interface/InterfacePropertyType.js";
import { type InterfaceType } from "./interface/InterfaceType.js";
import { mapSimplifiedStatusToInterfaceTypeStatus } from "./interface/mapSimplifiedStatusToInterfaceTypeStatus.js";
import { combineApiNamespaceIfMissing } from "./namespace/combineApiNamespaceIfMissing.js";
import { isExotic, isPropertyTypeType } from "./properties/PropertyTypeType.js";
import { type SharedPropertyType } from "./properties/SharedPropertyType.js";

export type SimplifiedInterfaceTypeStatus =
  | { type: "deprecated"; message: string; deadline: string }
  | { type: "active" }
  | { type: "experimental" }
  | { type: "example" };

type PropertyBase =
  | SharedPropertyType
  | InterfaceDefinedProperty;
type SptWithOptional = {
  required: boolean;
  sharedPropertyType: SharedPropertyType;
};

export type InterfaceTypeDefinition = {
  apiName: string;
  displayName?: string;
  description?: string;
  icon?: { locator: BlueprintIcon; color: string };
  status?: SimplifiedInterfaceTypeStatus;
  properties?: Record<
    string,
    PropertyBase | SptWithOptional
  >;
  extends?: InterfaceType | InterfaceType[];
  searchable?: boolean;
};

export function defineInterface(
  interfaceDef: InterfaceTypeDefinition,
): InterfaceType {
  const apiName = namespace + interfaceDef.apiName;
  invariant(
    ontologyDefinition[OntologyEntityTypeEnum.INTERFACE_TYPE][apiName]
      === undefined,
    `Interface ${apiName} already exists`,
  );

  // legacy support for propertiesV2 (only SPTs)
  const spts: Record<string, SptWithOptional> = Object.fromEntries(
    Object.entries(interfaceDef.properties ?? {}).filter(([_name, prop]) => {
      return isInterfaceSharedPropertyType(prop) || "apiName" in prop;
    }).map(([s, spt]) => {
      const required = isInterfaceSharedPropertyType(spt) ? spt.required : true;
      return [s, {
        sharedPropertyType: (isInterfaceSharedPropertyType(spt)
          ? spt.sharedPropertyType
          : spt) as SharedPropertyType,
        required: required,
      }];
    }),
  );
  const propertiesV2 = Object.fromEntries(
    Object.entries(spts).map<
      [string, { required: boolean; sharedPropertyType: SharedPropertyType }]
    >(
      ([propName, type]) => {
        const sptApiName = combineApiNamespaceIfMissing(
          namespace,
          type.sharedPropertyType.apiName,
        );
        return [sptApiName, {
          required: type.required,
          sharedPropertyType: verifyBasePropertyDefinition(
            namespace,
            propName,
            type.sharedPropertyType,
          ),
        }];
      },
    ),
  );

  const propertiesV3 = Object.fromEntries(
    Object.entries(interfaceDef.properties ?? {}).map<
      [string, InterfacePropertyType]
    >(([apiName, prop]) => {
      const required =
        (typeof prop === "object" && isInterfaceSharedPropertyType(prop))
          ? prop.required
          : true;
      const propertyBase: PropertyBase =
        (typeof prop === "object" && isInterfaceSharedPropertyType(prop))
          ? prop.sharedPropertyType
          : prop;
      if (
        typeof propertyBase === "object"
        && "nonNameSpacedApiName" in propertyBase
      ) {
        // SPT
        return [apiName, {
          required: required,
          sharedPropertyType: propertyBase,
        }];
      } else {
        // IDP
        return [apiName, propertyBase];
      }
    }),
  );

  const extendsInterfaces = interfaceDef.extends
    ? (Array.isArray(interfaceDef.extends)
      ? interfaceDef.extends
      : [interfaceDef.extends])
    : [];

  const status: InterfaceTypeStatus = mapSimplifiedStatusToInterfaceTypeStatus(
    interfaceDef.status ?? { type: "active" },
  );

  invariant(
    status.type !== "deprecated"
      || (status.deprecated.message && status.deprecated.deadline),
    `Deprecated status must include message and deadline properties.`,
  );

  const fullInterface: InterfaceType = {
    apiName,
    displayMetadata: {
      displayName: interfaceDef.displayName ?? interfaceDef.apiName,
      description: interfaceDef.description ?? interfaceDef.displayName
        ?? interfaceDef.apiName,
      icon: interfaceDef.icon !== undefined
        ? {
          type: "blueprint",
          blueprint: {
            color: interfaceDef.icon.color,
            locator: interfaceDef.icon.locator,
          },
        }
        : undefined,
    },
    extendsInterfaces,
    links: [],
    status,
    propertiesV2: propertiesV2,
    propertiesV3: propertiesV3,
    searchable: interfaceDef.searchable ?? true,
    __type: OntologyEntityTypeEnum.INTERFACE_TYPE,
  };

  updateOntology(fullInterface);
  return fullInterface;
}

function verifyBasePropertyDefinition(
  namespace: string,
  apiName: string,
  type: SharedPropertyType,
): SharedPropertyType {
  const unNamespacedTypeApiName = withoutNamespace(type.apiName);
  invariant(
    isPropertyTypeType(type.type) || isExotic(type.type),
    `Invalid data type ${
      JSON.stringify(type)
    } for property ${apiName} on InterfaceType ${apiName}`,
  );
  invariant(
    namespace + apiName === type.apiName
      || apiName === unNamespacedTypeApiName,
    `property key and it's apiName must be identical. ${
      JSON.stringify({ key: apiName, apiName: type.apiName })
    }`,
  );
  return type;
}
