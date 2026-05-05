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

import type { DerivedProperty, SimplePropertyDef } from "@osdk/api";
import { Employee, FooInterface } from "@osdk/client.test.ontology";
import { describe, it } from "vitest";
import { useOsdkAggregation } from "./useOsdkAggregation.js";

describe("useOsdkAggregation types", () => {
  it("accepts an RDP-named key in $select when RDPs are supplied", () => {
    useOsdkAggregation<
      typeof Employee,
      { leadCount: "integer" },
      {
        $select: {
          "leadCount:sum": "unordered";
          "employeeId:avg": "unordered";
        };
      }
    >(Employee, {
      withProperties: {
        leadCount: (base) => base.pivotTo("lead").aggregate("$count"),
      },
      aggregate: {
        $select: {
          "leadCount:sum": "unordered",
          "employeeId:avg": "unordered",
        },
      },
    });
  });

  it("accepts an RDP-named key in $groupBy when RDPs are supplied", () => {
    useOsdkAggregation<
      typeof Employee,
      { leadCount: "integer" },
      {
        $select: { $count: "unordered" };
        $groupBy: { leadCount: "exact" };
      }
    >(Employee, {
      withProperties: {
        leadCount: (base) => base.pivotTo("lead").aggregate("$count"),
      },
      aggregate: {
        $select: { $count: "unordered" },
        $groupBy: { leadCount: "exact" },
      },
    });
  });

  it("still supports RDP references in where clauses", () => {
    useOsdkAggregation<
      typeof Employee,
      { leadCount: "integer" },
      { $select: { $count: "unordered" } }
    >(Employee, {
      withProperties: {
        leadCount: (base) => base.pivotTo("lead").aggregate("$count"),
      },
      where: { leadCount: { $gt: 0 } },
      aggregate: {
        $select: { $count: "unordered" },
      },
    });
  });

  it("rejects references to unknown RDP keys", () => {
    useOsdkAggregation<
      typeof Employee,
      { leadCount: "integer" },
      // @ts-expect-error — "notARealRdp" was not declared in withProperties
      {
        $select: {
          "notARealRdp:sum": "unordered";
        };
      }
    >(Employee, {
      withProperties: {
        leadCount: (base) => base.pivotTo("lead").aggregate("$count"),
      },
      aggregate: {
        $select: {
          "notARealRdp:sum": "unordered",
        },
      },
    });
  });

  it("still compiles for interface types without RDPs", () => {
    useOsdkAggregation(FooInterface, {
      aggregate: {
        $select: { $count: "unordered" },
      },
    });
  });

  it("preserves existing behavior when no RDPs are provided", () => {
    useOsdkAggregation(Employee, {
      aggregate: {
        $select: {
          "employeeId:avg": "unordered",
          $count: "unordered",
        },
      },
    });
  });

  it("accepts RDP clauses annotated with DerivedProperty.Clause", () => {
    const withProps: DerivedProperty.Clause<typeof Employee> = {
      leadCount: (base) => base.pivotTo("lead").aggregate("$count"),
    };

    useOsdkAggregation<
      typeof Employee,
      Record<string, SimplePropertyDef>,
      { $select: { $count: "unordered" } }
    >(Employee, {
      withProperties: withProps,
      aggregate: { $select: { $count: "unordered" } },
    });
  });
});
