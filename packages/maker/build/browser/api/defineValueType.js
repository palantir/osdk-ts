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
function convertValueTypeTypeToBaseType(valueType) {
  if (typeof valueType === "string") {}
  switch (true) {
    case typeof valueType === "object" && valueType.type === "array":
      return {
        type: "array",
        array: {
          elementType: convertValueTypeTypeToBaseType(valueType.elementType)
        }
      };
    case typeof valueType === "object" && valueType.type === "struct":
      return {
        type: "structV2",
        structV2: {
          fields: valueType.fields.map(field => ({
            identifier: field.identifier,
            baseType: convertValueTypeTypeToBaseType(field.baseType)
          }))
        }
      };
    case typeof valueType === "object" && valueType.type === "map":
      return {
        type: "map",
        map: {
          keyType: convertValueTypeTypeToBaseType(valueType.keyType),
          valueType: convertValueTypeTypeToBaseType(valueType.valueType)
        }
      };
    case typeof valueType === "object" && valueType.type === "optional":
      return {
        type: "optional",
        optional: {
          wrappedType: convertValueTypeTypeToBaseType(valueType.wrappedType)
        }
      };
    case typeof valueType === "string":
      return {
        type: valueType,
        [valueType]: {}
      };
    default:
      throw new Error("Invalid ValueTypeType");
  }
}
export function defineValueType(opts) {
  const {
    apiName,
    displayName,
    description,
    type,
    version
  } = opts;
  !/^((([0-9]+)\.([0-9]+)\.([0-9]+)(?:-([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?)(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?)$/.test(version) ? process.env.NODE_ENV !== "production" ? invariant(false, "Version is not a valid semver") : invariant(false) : void 0;
  const typeName = typeof type.type === "string" ? type.type : type.type.type === "struct" ? "structV2" : type.type.type;
  // These suck but TS doesn't understand the relationship from the key of the base type to the type string
  const constraints = type.constraints ? type.constraints.map(constraint => {
    const output = {
      constraint: {
        type: typeName,
        [typeName]: constraint.constraint
      },
      failureMessage: constraint.failureMessage
    };
    return {
      constraint: output
    };
  }) : [];
  const baseType = convertValueTypeTypeToBaseType(type.type);
  const vt = {
    apiName,
    displayMetadata: {
      displayName: displayName,
      description: description ?? ""
    },
    status: {
      type: "active",
      active: {}
    },
    version: version,
    baseType: baseType,
    constraints: constraints,
    exampleValues: []
  };
  if (ontologyDefinition.valueTypes[apiName] === undefined) {
    ontologyDefinition.valueTypes[apiName] = [];
  }
  ontologyDefinition.valueTypes[apiName].push(vt);
  return vt;
}
//# sourceMappingURL=defineValueType.js.map