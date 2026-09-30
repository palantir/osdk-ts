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
// - $select only the properties you read. Without it every property is loaded, and reading one
//   property afterwards does not reduce what was already fetched. On object types with large
//   text, array, or other wide properties this can be orders of magnitude slower.
// - Handle each object as it arrives rather than collecting them all into an array, so that
//   memory use does not grow with the size of the object set.
// - asyncIter() always reads from a consistent snapshot, so pages never repeat or skip objects.
//   If objects are added or removed faster than the traversal completes (e.g. stream-backed
//   object types), or the traversal runs long enough for the snapshot to expire, it fails.
//   In that case, filter to a stable subset, $select fewer properties so it finishes sooner,
//   or page with fetchPage() yourself, which does not use a snapshot by default but may then
//   return duplicate or missing objects if the data changes.
for await (const obj of client(Employee).asyncIter({ $select: ["fullName"] })) {
  console.log(obj.fullName);
}

// Ontology-defined derived properties are not returned by default.
// Pass their API names in $select, along with any other properties you need.
// Runtime-defined derived properties added via .withProperties(...) are returned
// by default only when $select is omitted. If you pass $select, include them
// in the selection as well.
async function getAllWithSelectedProperties(
  properties: Employee.PropertyKeys[],
) {
  const objects = [];
  for await (const obj of client(Employee).asyncIter({ $select: properties })) {
    objects.push(obj);
  }
  return objects;
}
