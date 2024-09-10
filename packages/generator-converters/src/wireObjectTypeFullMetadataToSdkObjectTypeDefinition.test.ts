/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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
import { wireObjectTypeFullMetadataToSdkObjectTypeDefinition } from "./wireObjectTypeFullMetadataToSdkObjectTypeDefinition.js";

describe(wireObjectTypeFullMetadataToSdkObjectTypeDefinition, () => {
  it("handles magic nullable properties", () => {
    const result = wireObjectTypeFullMetadataToSdkObjectTypeDefinition({
      implementsInterfaces: [],
      implementsInterfaces2: {},
      linkTypes: [],
      objectType: {
        apiName: "apiName",
        description: "description",
        displayName: "displayName",
        primaryKey: "primaryKey",
        properties: {
          primaryKey: { dataType: { type: "string" } },
          otherKey: { nullable: false, dataType: { type: "string" } },
          defaulted: { dataType: { type: "string" } },
        },
        rid: "rid",
        status: "ACTIVE",
        titleProperty: "otherKey",
      },
      sharedPropertyTypeMapping: {},
    }, true);

    // PK is never nullable
    expect(result.properties["primaryKey"].nullable).toBe(false);

    // was specified above
    expect(result.properties["otherKey"].nullable).toBe(false);

    // was unspecified, so should be nullable
    expect(result.properties["defaulted"].nullable).toBe(true);
  });
});
