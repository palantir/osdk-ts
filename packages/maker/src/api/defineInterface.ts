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
import { defineSharedPropertyType } from "./defineSpt.js";
import type {
  InterfaceDefinedProperty,
  InterfacePropertyType,
} from "./interface/InterfacePropertyType.js";
import { type InterfaceType } from "./interface/InterfaceType.js";
import { mapSimplifiedStatusToInterfaceTypeStatus } from "./interface/mapSimplifiedStatusToInterfaceTypeStatus.js";
import {
  isPropertyTypeType,
  type PropertyTypeType,
} from "./properties/PropertyTypeType.js";
import { type SharedPropertyType } from "./properties/SharedPropertyType.js";

export type SimplifiedInterfaceTypeStatus =
  | { type: "deprecated"; message: string; deadline: string }
  | { type: "active" }
  | { type: "experimental" };

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

  // const propertiesV2 = Object.fromEntries(
  //   Object.entries(interfaceDef.properties ?? {}).map<
  //     [string, { required: boolean; sharedPropertyType: SharedPropertyType }]
  //   >(
  //     ([unNamespacedPropApiName, type]) => {
  //       if (typeof type === "object" && "propertyDefinition" in type) {
  //         // If the property is an imported SPT, use the SPT's apiName
  //         const apiName = combineApiNamespaceIfMissing(
  //           namespace,
  //           typeof type.propertyDefinition === "object"
  //             && "apiName" in type.propertyDefinition
  //             ? type.propertyDefinition.apiName
  //             : unNamespacedPropApiName,
  //         );

  //         return [apiName, {
  //           required: type.required,
  //           sharedPropertyType: unifyBasePropertyDefinition(
  //             namespace,
  //             unNamespacedPropApiName,
  //             type.propertyDefinition,
  //           ),
  //         }];
  //       }

  //       // If the property is an imported SPT, use the SPT's apiName
  //       const apiName = combineApiNamespaceIfMissing(
  //         namespace,
  //         typeof type === "object" && "apiName" in type
  //           ? type.apiName
  //           : unNamespacedPropApiName,
  //       );
  //       return [apiName, {
  //         required: true,
  //         sharedPropertyType: unifyBasePropertyDefinition(
  //           namespace,
  //           unNamespacedPropApiName,
  //           type,
  //         ),
  //       }];
  //     },
  //   ),
  // );

  const propertiesV3 = Object.fromEntries(
    Object.entries(interfaceDef.properties ?? {}).map<
      [string, InterfacePropertyType]
    >(([apiName, prop]) => {
      const required =
        (typeof prop === "object" && "sharedPropertyType" in prop)
          ? prop.required
          : true;
      const propertyBase: PropertyBase =
        (typeof prop === "object" && "sharedPropertyType" in prop)
          ? prop.sharedPropertyType
          : prop;

      // if (
      //   typeof propertyBase === "string"
      //   || (typeof propertyBase === "object" && !("apiName" in propertyBase))
      // ) {
      //   // construct IDP from minimal PropertyTypeType definition
      //   return [apiName, {
      //     apiName: apiName,
      //     type: propertyBase,
      //   }];
      // } else if (
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
    propertiesV2: {},
    propertiesV3: propertiesV3,
    searchable: interfaceDef.searchable ?? true,
    __type: OntologyEntityTypeEnum.INTERFACE_TYPE,
  };

  updateOntology(fullInterface);
  return fullInterface;
}

function unifyBasePropertyDefinition(
  namespace: string,
  apiName: string,
  type: SharedPropertyType | PropertyTypeType,
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
