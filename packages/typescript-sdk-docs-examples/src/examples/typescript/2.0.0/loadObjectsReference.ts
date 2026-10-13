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

// Example: loadObjectsReference

import type { Osdk, PageResult } from "@osdk/client";

import { Employee } from "../../../generatedNoCheck/index.js";
// Edit this import if your client location differs
import { client } from "./client.js";
// $select only the properties you read; without it, the default property set is loaded.
// $pageSize is the size of one page. Continue with page.nextPageToken to load more.
try {
  const responseNoErrorWrapper: PageResult<
    Osdk.Instance<Employee, never, "fullName">
  > = await client(Employee).fetchPage({
    $select: ["fullName"],
    $pageSize: 30,
  });
} catch (e) {
  throw e;
}

// Ontology-defined derived properties are not returned by default.
// Pass their API names in $select, along with any other properties you need.
// Runtime-defined derived properties added via .withProperties(...) are returned
// by default only when $select is omitted. If you pass $select, include them
// in the selection as well.
function getPageWithSelectedProperties(properties: Employee.PropertyKeys[]) {
  return client(Employee).fetchPage({
    $pageSize: 30,
    $select: properties,
  });
}
