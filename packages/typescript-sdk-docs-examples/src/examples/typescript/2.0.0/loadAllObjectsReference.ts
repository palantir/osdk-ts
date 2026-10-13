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

// Example: loadAllObjectsReference

import { Employee } from "../../../generatedNoCheck/index.js";
// Edit this import if your client location differs
import { client } from "./client.js";

// Before loading every object, check whether you need to:
// - Count, sum, or group objects: use .aggregate() instead, which never loads the objects.
// - Show a sample or the first N objects: use fetchPage({ $pageSize }) instead.
//
// asyncIter() fetches page after page until every matching object has been loaded:
// - $select only the properties you read. Without it, the API loads its default property set,
//   and reading fewer properties afterwards does not avoid the cost of fetching them. Loading
//   unused properties wastes bandwidth and compute and can slow down retrieval.
// - Handle each object as it arrives rather than collecting them all into an array, so that
//   memory use does not grow with the size of the object set.
// - asyncIter() requests a consistent snapshot. For non-stream-backed object types, a completed
//   traversal returns each object exactly once even if the data changes. If the snapshot expires
//   or the backend detects a paging inconsistency (PagingInconsistencyDetected), it throws.
//   Stream-backed object types do not provide this guarantee across pages: changes during the
//   traversal can cause it to throw, and exactly-once traversal is not guaranteed.
//   If a traversal fails this way, $select fewer properties and narrow the object set with a
//   filter so it finishes sooner, or page with fetchPage() yourself, which does not request a
//   snapshot by default but may then return duplicate or missing objects if the data changes.
for await (const obj of client(Employee).asyncIter({ $select: ["fullName"] })) {
  console.log(obj.fullName);
}

// Ontology-defined derived properties are not returned by default.
// Pass their API names in $select, along with any other properties you need.
// Runtime-defined derived properties added via .withProperties(...) are returned
// by default only when $select is omitted. If you pass $select, include them
// in the selection as well.
async function logAllWithSelectedProperties(
  properties: Employee.PropertyKeys[],
) {
  for await (const obj of client(Employee).asyncIter({ $select: properties })) {
    console.log(obj);
  }
}
