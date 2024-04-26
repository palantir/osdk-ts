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

import { convertIrPrimitiveTypeToTsTypeReference } from "./convertIrPrimitiveTypeToTsTypeReference.js";
import type { DataType } from "./ir/index.js";

export function convertIrDataTypeToTsTypeReference(
  dataType: DataType,
  includeUndefined = true,
  namespaceImport?: string,
): string {
  switch (dataType.type) {
    case "reference":
      return `${
        namespaceImport ? `${namespaceImport}.` : ""
      }${dataType.reference}`;

    case "optional":
      return `${
        convertIrDataTypeToTsTypeReference(
          dataType.optional.subType,
          includeUndefined,
          namespaceImport,
        )
      } ${includeUndefined ? "| undefined" : ""}`;

    case "list":
      return `Array<${
        convertIrDataTypeToTsTypeReference(
          dataType.list.subType,
          includeUndefined,
          namespaceImport,
        )
      }>`;

    case "map":
      return `Record<${
        convertIrDataTypeToTsTypeReference(
          dataType.map.keyType,
          includeUndefined,
          namespaceImport,
        )
      }, ${
        convertIrDataTypeToTsTypeReference(
          dataType.map.valueType,
          includeUndefined,
          namespaceImport,
        )
      }>`;

    case "builtin":
      return convertIrPrimitiveTypeToTsTypeReference(dataType.builtin);

    case "external":
      return "any";
  }

  throw "Unsupported type: " + JSON.stringify(dataType);
}
