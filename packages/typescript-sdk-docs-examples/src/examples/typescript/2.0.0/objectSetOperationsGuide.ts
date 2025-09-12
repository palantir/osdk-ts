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
 * WARNING: This file is generated automatically by the generateExamples.mjs script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

/* eslint-disable no-unused-vars */

// Example: objectSetOperationsGuide

import { Employee } from "../../../generatedNoCheck/ontology/objects";

const objectSetA = client(Employee).where({ fullName: { $containsAnyTerm: "a"}})
const objectSetB = client(Employee).where({ fullName: { $containsAnyTerm: "b"}})
const objectSetC = client(Employee).where({ fullName: { $containsAnyTerm: "c"}})

// Object set operations can be chained. e.g. To find all objects in objectSetA 
// that are present in objectSetB but do not exist in objectSetC:
const result = objectSetA
  .intersect(objectSetB)
  .subtract(objectSetC);