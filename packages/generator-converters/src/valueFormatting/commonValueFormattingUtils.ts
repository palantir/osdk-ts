/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { PropertyTypeReferenceOrStringConstant } from "@osdk/api";
import type * as Ontologies from "@osdk/foundry.ontologies";

export function convertPropertyTypeReferenceOrStringConstant(
  value: Ontologies.PropertyTypeReferenceOrStringConstant,
): PropertyTypeReferenceOrStringConstant {
  switch (value.type) {
    case "constant":
      return {
        type: "constant",
        value: value.value,
      };
    case "propertyType":
      return {
        type: "propertyType",
        propertyApiName: value.propertyApiName,
      };
    default:
      value satisfies never;
      throw new Error(
        `Unknown property reference type: ${(value as any).type}`,
      );
  }
}
