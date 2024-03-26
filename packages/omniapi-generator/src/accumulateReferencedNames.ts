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

import type { DataType } from "./ir";

export function accumulateReferencedNames(accum: Set<string>, type: DataType) {
  switch (type.type) {
    case "enum":
    case "builtin":
      break;
    case "list":
      accumulateReferencedNames(accum, type.list.subType);
      break;
    case "map":
      accumulateReferencedNames(accum, type.map.keyType);
      accumulateReferencedNames(accum, type.map.valueType);
      break;
    case "reference":
      accum.add(type.reference);
      break;
    case "object":
      for (const propertySpec of Object.values(type.object.properties)) {
        accumulateReferencedNames(accum, propertySpec.type);
      }
      break;
    case "optional":
      accumulateReferencedNames(accum, type.optional.subType);
      break;
    case "union":
      for (const subTypeName of Object.values(type.union.subTypes)) {
        accum.add(subTypeName);
      }
      break;

    case "external":
      break;

    case "binary":
      throw new Error("not supported :" + JSON.stringify(type));
  }
  return accum;
}
