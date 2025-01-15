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
import { namespace, ontologyDefinition } from "./defineOntology.js";
import { defineSharedPropertyType } from "./defineSpt.js";
import type { BlueprintIcon } from "./iconNames.js";
import type {
  InterfaceType,
  InterfaceTypeStatus,
  PropertyTypeType,
  SharedPropertyType,
} from "./types.js";

type SimplifiedInterfaceTypeStatus =
  | { type: "deprecated"; message: string; deadline: string }
  | { type: "active" }
  | { type: "experimental" };

export function defineInterface(
  opts: {
    apiName: string;
    displayName?: string;
    description?: string;
    icon?: { locator: BlueprintIcon; color: string };
    status?: SimplifiedInterfaceTypeStatus;
    properties?: Record<
      string,
      SharedPropertyType | PropertyTypeType
    >;

    extends?: InterfaceType | InterfaceType[] | string | string[];
  },
): InterfaceType {
  const apiName = namespace + opts.apiName;
  invariant(
    ontologyDefinition.interfaceTypes[apiName] === undefined,
    `Interface ${apiName} already exists`,
  );

  const properties = Object.fromEntries(
    Object.entries(opts.properties ?? {}).map<
      [string, SharedPropertyType]
    >(
      ([apiName, type]) => {
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
          return [apiName, spt];
        } else {
          const unNamespacedTypeApiName = type.apiName.slice(
            type.apiName.lastIndexOf(".") + 1,
          );
          invariant(
            namespace + apiName === type.apiName
              || apiName === unNamespacedTypeApiName,
            `property key and it's apiName must be identical. ${
              JSON.stringify({ key: apiName, apiName: type.apiName })
            }`,
          );
          return [apiName, type];
        }
      },
    ),
  );

  let extendsInterfaces: string[] = [];
  if (opts.extends) {
    if (typeof opts.extends === "string") {
      extendsInterfaces = [opts.extends];
    } else if (
      Array.isArray(opts.extends)
      && opts.extends.every(item => typeof item === "string")
    ) {
      extendsInterfaces = opts.extends;
    } else if ((opts.extends as InterfaceType).apiName !== undefined) {
      extendsInterfaces = [(opts.extends as InterfaceType).apiName];
    } else {
      extendsInterfaces = (opts.extends as InterfaceType[]).map(item =>
        item.apiName
      );
    }
  }

  const status: InterfaceTypeStatus = mapSimplifiedStatusToInterfaceTypeStatus(
    opts.status ?? { type: "active" },
  );

  invariant(
    status.type !== "deprecated"
      || (status.deprecated.message && status.deprecated.deadline),
    `Deprecated status must include message and deadline properties.`,
  );

  const a: InterfaceType = {
    apiName,
    displayMetadata: {
      displayName: opts.displayName ?? opts.apiName,
      description: opts.description ?? opts.displayName ?? opts.apiName,
      icon: opts.icon !== undefined
        ? {
          type: "blueprint",
          blueprint: { color: opts.icon.color, locator: opts.icon.locator },
        }
        : undefined,
    },
    extendsInterfaces: extendsInterfaces,
    links: [],
    properties,
    status,
  };

  return ontologyDefinition.interfaceTypes[apiName] = a;
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
