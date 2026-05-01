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

// User-facing Query parameter and result helper types. The full
// `client(MyQuery).executeFunction(args)` signature is composed in
// @osdk/client, so this surface pins each per-shape building block (object,
// objectSet, interface, primitive, range, 2D/3D aggregation) — any drift in
// what users see for a given query parameter or return type will surface
// here even before the client-side composition runs.

import type { QueryParam, QueryResult } from "../../queries/Queries.js";
import type { EmployeeApiTest } from "../../test/EmployeeApiTest.js";
import type { FooInterfaceApiTest } from "../../test/FooInterfaceApiTest.js";

// === Param shapes (what users pass into a query) ===

/** What an object-typed query parameter accepts. */
declare const probe_param_object: QueryParam.ObjectType<EmployeeApiTest>;

/** What an interface-typed query parameter accepts. */
declare const probe_param_interface: QueryParam.InterfaceType<
  FooInterfaceApiTest
>;

/** What an objectSet-typed query parameter accepts. */
declare const probe_param_objectSet: QueryParam.ObjectSetType<EmployeeApiTest>;

/** A primitive (string) query parameter. */
declare const probe_param_primitive_string: QueryParam.PrimitiveType<"string">;

/** A primitive (timestamp) query parameter — separate from datetime in client mappings. */
declare const probe_param_primitive_timestamp: QueryParam.PrimitiveType<
  "timestamp"
>;

/** A range key over an integer aggregation bucket. */
declare const probe_param_range_integer: QueryParam.RangeKey<"integer">;

/** A 2D aggregation parameter — string buckets, double values. */
declare const probe_param_2d_aggregation:
  QueryParam.TwoDimensionalAggregationType<
    "string",
    "double"
  >;

/** A 3D aggregation parameter — string outer buckets, range-of-integer inner buckets, double values. */
declare const probe_param_3d_aggregation:
  QueryParam.ThreeDimensionalAggregationType<
    "string",
    QueryParam.RangeKey<"integer">,
    "double"
  >;

// === Result shapes (what users receive when a query resolves) ===

/** What an object-typed query result yields — an OsdkBase view, not a full Osdk.Instance. */
declare const probe_result_object: QueryResult.ObjectType<EmployeeApiTest>;

/** What an interface-typed query result yields. */
declare const probe_result_interface: QueryResult.InterfaceType<
  FooInterfaceApiTest
>;

/** What an objectSet-typed query result yields. */
declare const probe_result_objectSet: QueryResult.ObjectSetType<
  EmployeeApiTest
>;

/** A primitive (string) query result. */
declare const probe_result_primitive_string: QueryResult.PrimitiveType<
  "string"
>;

/** A primitive (timestamp) query result — separate from datetime in wire mappings. */
declare const probe_result_primitive_timestamp: QueryResult.PrimitiveType<
  "timestamp"
>;

/** A media reference query result — surfaced as the Media interface. */
declare const probe_result_media: QueryResult.MediaType;

/** A 2D aggregation result — string buckets, double values. */
declare const probe_result_2d_aggregation:
  QueryResult.TwoDimensionalAggregationType<
    "string",
    "double"
  >;

/** A 3D aggregation result — string outer buckets, range-of-integer inner buckets, double values. */
declare const probe_result_3d_aggregation:
  QueryResult.ThreeDimensionalAggregationType<
    "string",
    QueryResult.RangeKey<"integer">,
    "double"
  >;
