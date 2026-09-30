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

// Example: loadAllInterfacesReference

import { HasAddress } from "../../../generatedNoCheck/index.js";
// Edit this import if your client location differs
import { client } from "./client.js";

// asyncIter() fetches page after page until every matching object has been loaded, always from
// a consistent snapshot (see loadAllObjectsReference). Pass $select: [...] with only the
// properties you read, since every property is loaded by default, and handle each object as it
// arrives rather than collecting them all into an array. For counts, sums, or group-bys, use
// .aggregate() instead; for a sample or the first N objects, use fetchPage({ $pageSize }).
for await (const int of client(HasAddress).asyncIter()) {
  console.log(int.$primaryKey);
}
