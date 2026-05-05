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

import { describe, expect, it } from "vitest";
import { schemaFromMetadata } from "./schema.js";

describe("schemaFromMetadata", () => {
  it("indexes object types by apiName and extracts wire types + primary key", () => {
    const metadata = {
      objectTypes: {
        Employee: {
          objectType: {
            apiName: "Employee",
            primaryKey: "employeeId",
            properties: {
              employeeId: { dataType: { type: "string" } },
              age: { dataType: { type: "integer" } },
              createdAt: { dataType: { type: "timestamp" } },
            },
          },
        },
      },
    };

    // OntologyFullMetadata is a wide structural type from @osdk/foundry.ontologies;
    // for the unit test we only need the subset schemaFromMetadata reads.
    const schema = schemaFromMetadata(metadata as never);

    expect(schema.size).toBe(1);
    const employee = schema.get("Employee");
    expect(employee?.primaryKeyApiName).toBe("employeeId");
    expect(employee?.properties.get("employeeId")).toBe("string");
    expect(employee?.properties.get("age")).toBe("integer");
    expect(employee?.properties.get("createdAt")).toBe("timestamp");
  });

  it("returns an empty map for metadata with no object types", () => {
    const schema = schemaFromMetadata({ objectTypes: {} } as never);
    expect(schema.size).toBe(0);
  });
});
