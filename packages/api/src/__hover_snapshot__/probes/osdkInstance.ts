/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type { Osdk } from "../../OsdkObjectFrom.js";
import type { EmployeeApiTest } from "../../test/EmployeeApiTest.js";
import type { FooInterfaceApiTest } from "../../test/FooInterfaceApiTest.js";

// === Default and common variants ===

/** A bare Osdk.Instance — what users get when iterating fetchPage results without options. */
declare const probe_default: Osdk.Instance<EmployeeApiTest>;

/** An instance with $select narrowing the property set to a subset. */
declare const probe_select_subset: Osdk.Instance<
  EmployeeApiTest,
  never,
  "fullName" | "employeeId"
>;

/** An instance with derived properties added via withProperties. */
declare const probe_with_rdps: Osdk.Instance<
  EmployeeApiTest,
  never,
  "employeeId",
  { mom: "integer"; dad: "string" | undefined }
>;

// === OPTIONS variants ===

/** An instance fetched with $includeRid: true — exposes $rid. */
declare const probe_with_rid: Osdk.Instance<EmployeeApiTest, "$rid">;

/** An instance fetched with $includeAllBaseObjectProperties: true. */
declare const probe_all_base_props: Osdk.Instance<
  EmployeeApiTest,
  "$allBaseProperties"
>;

/** An instance fetched with $includePropertySecurities: true. */
declare const probe_property_securities: Osdk.Instance<
  EmployeeApiTest,
  "$propertySecurities"
>;

// === Interface-typed instance ===

/** An instance whose Q is an interface rather than an object type. */
declare const probe_interface_default: Osdk.Instance<FooInterfaceApiTest>;
