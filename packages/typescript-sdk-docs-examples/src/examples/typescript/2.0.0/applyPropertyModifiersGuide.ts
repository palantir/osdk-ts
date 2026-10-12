/**
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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
 *
 * WARNING: This file is generated automatically by the generateExamples.ts script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

// Example: applyPropertyModifiersGuide

import type { Osdk } from "@osdk/client";

import { Employee } from "../../../generatedNoCheck/index.js";
// Edit this import if your client location differs
import { client } from "./client.js";

// $applyModifiers uses reducers and struct main values configured in the ontology.
// The generated SDK must include that configuration for the property:
// - "applyReducers" reduces an array to one element using its configured reducers.
// - "applyMainValue" extracts a struct's main value: a single configured field returns
//   that field's value; multiple fields return a struct containing only those fields.
// - "applyReducersAndExtractMainValue" reduces a struct array, then extracts its main
//   value. The property must have both reducers and a main value configured.
// Properties not listed in $applyModifiers are not modified by this option.
// Modifiers are supported by fetchPage() and asyncIter(), but not fetchOne().
//
// Assume certifications has reducers configured. When passing $select, include
// every modified property using its plain API name, plus any other properties you need.
const page = await client(Employee).fetchPage({
  $select: ["certifications"],
  $applyModifiers: {
    certifications: "applyReducers",
  },
});

for (const object of page.data) {
  // fetchPage infers the modified property type, preserving property nullability.
  // For an explicit type, use "propertyApiName:modifier" in Osdk.Instance's property keys.
  const reducedObject: Osdk.Instance<
    Employee,
    never,
    "certifications:applyReducers"
  > = object;
  // The value has the array element type, or undefined if the property is nullable.
  console.log(reducedObject.certifications);
}
