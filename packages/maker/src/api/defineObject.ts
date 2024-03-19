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

import type * as api from "@osdk/api";
import type { ObjectTypeFullMetadata, PropertyV2 } from "@osdk/gateway/types";
import invariant from "tiny-invariant";
import { ontologyDefinition } from "./defineOntology.js";

type Writeable<T> = {
  -readonly [P in keyof T]: T[P] extends ReadonlyArray<infer Q> ? Array<Q>
    : Writeable<T[P]>;
};

export interface ObjectType {
  data: ObjectTypeFullMetadata;
  linkTypes: Record<string, {
    // hasMany: (apiName: string, t: ObjectType, {
    //   reverse: {}
    // })
  }>;
}

export function defineObject(
  apiName: string,
  opts: {
    displayName?: string;
    pluralDisplayName?: string;
    primaryKey: api.ObjectTypePropertyDefinition & { apiName: string };
    properties?: Record<
      string,
      | api.WirePropertyTypes
      | api.ObjectTypePropertyDefinition
    >;
  },
): ObjectType {
  ontologyDefinition.objectTypes[apiName] = {
    implementsInterfaces: [],
    linkTypes: [],
    objectType: {
      apiName,
      primaryKey: opts.primaryKey.apiName,

      properties: {
        [opts.primaryKey.apiName]: {
          dataType: convertType(opts.primaryKey),
        },
      },
      rid: "PLACEHOLDER",
      status: "ACTIVE",
      titleProperty: opts.primaryKey.apiName,
    },
    sharedPropertyTypeMapping: {},
  };

  // FIXME: dont return the raw value
  return {
    data: ontologyDefinition.objectTypes[apiName],
    linkTypes: {},
  };
}

function convertType(
  t: api.ObjectTypePropertyDefinition & {
    apiName: string;
  },
): PropertyV2["dataType"] {
  switch (true) {
    case t.multiplicity === true:
      return {
        type: "array",
        subType: convertType({ ...t, multiplicity: false }),
      };

    case t.type === "stringTimeseries":
      return {
        itemType: {
          type: "string",
        },
        type: "timeseries",
      };
      break;

    case t.type === "numericTimeseries":
      return {
        itemType: {
          type: "double",
        },
        type: "timeseries",
      };

    case t.type === "datetime":
      return {
        type: "timestamp",
      };

    default:
      return {
        type: t.type,
      };
  }

  invariant(false);
}
