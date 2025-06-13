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

import invariant from "tiny-invariant";
import {
  namespace,
  ontologyDefinition,
  updateOntology,
  withoutNamespace,
} from "./defineOntology.js";
import { defineSharedPropertyType } from "./defineSpt.js";
import type { BlueprintIcon } from "./iconNames.js";
import {
  type InterfaceType,
  type InterfaceTypeStatus,
  OntologyEntityTypeEnum,
  type PropertyTypeType,
  type SharedPropertyType,
} from "./types.js";

type SimplifiedInterfaceTypeStatus =
  | { type: "deprecated"; message: string; deadline: string }
  | { type: "active" }
  | { type: "experimental" };

type PropertyBase = SharedPropertyType | PropertyTypeType;
type PropertyWithOptional = {
  required: boolean;
  propertyDefinition: PropertyBase;
};

export type InterfaceTypeDefinition = {
  apiName: string;
  displayName?: string;
  description?: string;
  icon?: { locator: BlueprintIcon; color: string };
  status?: SimplifiedInterfaceTypeStatus;
  properties?: Record<
    string,
    PropertyBase | PropertyWithOptional
  >;
  extends?: InterfaceType | InterfaceType[];
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

  const properties = Object.fromEntries(
    Object.entries(interfaceDef.properties ?? {}).map<
      [string, { required: boolean; sharedPropertyType: SharedPropertyType }]
    >(
      ([apiName, type]) => {
        if (typeof type === "object" && "propertyDefinition" in type) {
          return [apiName, {
            required: type.required,
            sharedPropertyType: unifyBasePropertyDefinition(
              namespace,
              apiName,
              type.propertyDefinition,
            ),
          }];
        }

        return [apiName, {
          required: true,
          sharedPropertyType: unifyBasePropertyDefinition(
            namespace,
            apiName,
            type,
          ),
        }];
      },
    ),
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
    propertiesV2: properties,
    __type: OntologyEntityTypeEnum.INTERFACE_TYPE,
  };

  updateOntology(fullInterface);
  return fullInterface;
}

function isPropertyTypeType(
  v: PropertyTypeType,
): v is PropertyTypeType {
  return v === "boolean" || v === "byte"
    || v === "date" || v === "decimal" || v === "double"
    || v === "float" || v === "geopoint" || v === "geoshape"
    || v === "integer" || v === "long"
    || (typeof v === "object" && v.type === "marking")
    || v === "short" || v === "string"
    || v === "timestamp";
}

function mapSimplifiedStatusToInterfaceTypeStatus(
  status: SimplifiedInterfaceTypeStatus,
): InterfaceTypeStatus {
  switch (status.type) {
    case "deprecated":
      return {
        type: "deprecated",
        deprecated: {
          message: status.message,
          deadline: status.deadline,
          replacedBy: undefined,
        },
      };
    case "active":
      return {
        type: "active",
        active: {},
      };
    case "experimental":
      return {
        type: "experimental",
        experimental: {},
      };
    default:
      throw new Error(`Invalid status type: ${(status as any).type}`);
  }
}

function unifyBasePropertyDefinition(
  namespace: string,
  apiName: string,
  type: PropertyBase,
): SharedPropertyType {
  if (
    typeof type === "string"
    || (typeof type === "object" && !("apiName" in type))
  ) {
    invariant(
      isPropertyTypeType(type),
      `Invalid data type ${
        JSON.stringify(type)
      } for property ${apiName} on InterfaceType ${apiName}`,
    );

    const spt = defineSharedPropertyType({
      apiName,
      displayName: apiName,
      type,
      array: false,
    });
    return spt;
  } else {
    const unNamespacedTypeApiName = withoutNamespace(type.apiName);
    invariant(
      namespace + apiName === type.apiName
        || apiName === unNamespacedTypeApiName,
      `property key and it's apiName must be identical. ${
        JSON.stringify({ key: apiName, apiName: type.apiName })
      }`,
    );
    return type;
  }
}
