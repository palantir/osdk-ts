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
import { ontologyDefinition } from "./defineOntology.js";
import { defineSharedPropertyType } from "./defineSpt.js";
import type { PropertyTypeType, SharedPropertyType } from "./types.js";

export function defineInterface(
  apiName: string,
  opts: {
    displayName?: string;
    description?: string;
    properties?: Record<
      string,
      SharedPropertyType | PropertyTypeType
    >;
  },
): {
  apiName: string;
  displayName: string;
  extendsInterfaces: never[];
  links: {};
  properties: { [k: string]: SharedPropertyType };
  rid: string;
  description: string;
} {
  invariant(
    ontologyDefinition.interfaceTypes[apiName] === undefined,
    `Interface ${apiName} already exists`,
  );

  const properties = Object.fromEntries(
    Object.entries(opts.properties ?? {}).map<
      [string, SharedPropertyType]
    >(
      ([apiName, type]) => {
        if (typeof type === "string") {
          invariant(
            isSimpleType(type),
            `Invalid data type ${type} for property ${apiName} on InterfaceType ${apiName}`,
          );
          // switch (v) {
          //   case "boolean":
          //   case "byte":
          //   case "date":
          //   case "float":
          //   case "geopoint":
          //   case "geoshape":
          //   case "integer":
          //   case "decimal":
          //   case "double":
          //   case "long":
          //   case "short":
          //   case "string":
          //   case "timestamp":
          //     return [
          //       k,
          //       {
          //         rid: "idk",
          //         apiName: k,
          //         displayName: k,
          //         dataType: {
          //           type: v,
          //         },
          //       } satisfies SharedPropertyType,
          //     ];
          // }

          const spt = defineSharedPropertyType(apiName, {
            displayName: apiName,
            type,
            array: false,
          });
          return [apiName, spt];
        } else {
          invariant(
            apiName === type.apiName,
            `property key and it's apiName must be identical. ${
              JSON.stringify({ key: apiName, apiName: type.apiName })
            }`,
          );
          return [apiName, type];
        }
      },
    ),
  );

  return ontologyDefinition.interfaceTypes[apiName] = {
    apiName,
    displayName: opts.displayName ?? apiName,
    extendsInterfaces: [],
    links: {},
    properties,
    rid: "",
    description: opts.description ?? opts.displayName ?? apiName,
  };
}

function isSimpleType(
  v: string,
): v is PropertyTypeType {
  return v === "boolean" || v === "byte"
    || v === "date" || v === "decimal" || v === "double"
    || v === "float" || v === "geopoint" || v === "geoshape"
    || v === "integer" || v === "long" || v === "marking"
    || v === "short" || v === "string"
    || v === "timestamp";
}
