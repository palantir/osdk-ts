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
import type {
  InterfaceType,
  PropertyTypeType,
  SharedPropertyType,
} from "./types.js";

export function defineInterface(
  opts: {
    apiName: string;
    displayName?: string;
    description?: string;
    properties?: Record<
      string,
      SharedPropertyType | PropertyTypeType
    >;
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
        if (typeof type === "string") {
          invariant(
            isSimpleType(type),
            `Invalid data type ${type} for property ${apiName} on InterfaceType ${apiName}`,
          );

          const spt = defineSharedPropertyType({
            apiName,
            displayName: apiName,
            type,
            array: false,
          });
          return [apiName, spt];
        } else {
          invariant(
            namespace + apiName === type.apiName,
            `property key and it's apiName must be identical. ${
              JSON.stringify({ key: apiName, apiName: type.apiName })
            }`,
          );
          return [apiName, type];
        }
      },
    ),
  );

  const a: InterfaceType = {
    apiName,
    displayMetadata: {
      displayName: opts.displayName ?? opts.apiName,
      description: opts.description ?? opts.displayName ?? opts.apiName,
      icon: undefined,
    },
    extendsInterfaces: [],
    links: [],
    properties,
    status: { type: "active", active: {} },
  };

  return ontologyDefinition.interfaceTypes[namespace + apiName] = a;
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
