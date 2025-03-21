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
export function defineInterface(opts) {
  const apiName = namespace + opts.apiName;
  !(ontologyDefinition.interfaceTypes[apiName] === undefined) ? process.env.NODE_ENV !== "production" ? invariant(false, `Interface ${apiName} already exists`) : invariant(false) : void 0;
  const properties = Object.fromEntries(Object.entries(opts.properties ?? {}).map(([apiName, type]) => {
    if (typeof type === "string" || typeof type === "object" && !("apiName" in type)) {
      !isPropertyTypeType(type) ? process.env.NODE_ENV !== "production" ? invariant(false, `Invalid data type ${JSON.stringify(type)} for property ${apiName} on InterfaceType ${apiName}`) : invariant(false) : void 0;
      const spt = defineSharedPropertyType({
        apiName,
        displayName: apiName,
        type,
        array: false
      });
      return [apiName, spt];
    } else {
      const unNamespacedTypeApiName = type.apiName.slice(type.apiName.lastIndexOf(".") + 1);
      !(namespace + apiName === type.apiName || apiName === unNamespacedTypeApiName) ? process.env.NODE_ENV !== "production" ? invariant(false, `property key and it's apiName must be identical. ${JSON.stringify({
        key: apiName,
        apiName: type.apiName
      })}`) : invariant(false) : void 0;
      return [apiName, type];
    }
  }));
  let extendsInterfaces = [];
  if (opts.extends) {
    if (typeof opts.extends === "string") {
      extendsInterfaces = [opts.extends];
    } else if (Array.isArray(opts.extends) && opts.extends.every(item => typeof item === "string")) {
      extendsInterfaces = opts.extends;
    } else if (opts.extends.apiName !== undefined) {
      extendsInterfaces = [opts.extends.apiName];
    } else {
      extendsInterfaces = opts.extends.map(item => item.apiName);
    }
  }
  const status = mapSimplifiedStatusToInterfaceTypeStatus(opts.status ?? {
    type: "active"
  });
  !(status.type !== "deprecated" || status.deprecated.message && status.deprecated.deadline) ? process.env.NODE_ENV !== "production" ? invariant(false, `Deprecated status must include message and deadline properties.`) : invariant(false) : void 0;
  const a = {
    apiName,
    displayMetadata: {
      displayName: opts.displayName ?? opts.apiName,
      description: opts.description ?? opts.displayName ?? opts.apiName,
      icon: opts.icon !== undefined ? {
        type: "blueprint",
        blueprint: {
          color: opts.icon.color,
          locator: opts.icon.locator
        }
      } : undefined
    },
    extendsInterfaces: extendsInterfaces,
    links: [],
    properties: properties,
    status,
    allPropertiesV2: {}
  };
  return ontologyDefinition.interfaceTypes[apiName] = a;
}
function isPropertyTypeType(v) {
  return v === "boolean" || v === "byte" || v === "date" || v === "decimal" || v === "double" || v === "float" || v === "geopoint" || v === "geoshape" || v === "integer" || v === "long" || typeof v === "object" && v.type === "marking" || v === "short" || v === "string" || v === "timestamp";
}
function mapSimplifiedStatusToInterfaceTypeStatus(status) {
  switch (status.type) {
    case "deprecated":
      return {
        type: "deprecated",
        deprecated: {
          message: status.message,
          deadline: status.deadline,
          replacedBy: undefined
        }
      };
    case "active":
      return {
        type: "active",
        active: {}
      };
    case "experimental":
      return {
        type: "experimental",
        experimental: {}
      };
    default:
      throw new Error(`Invalid status type: ${status.type}`);
  }
}
//# sourceMappingURL=defineInterface.js.map