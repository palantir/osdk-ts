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

import type { ObjectOrInterfaceDefinition, Osdk } from "@osdk/api";
import { describe, expect, it } from "vitest";
import type { ObjectHookArgs } from "../src/new/parseObjectArgs.js";
import { parseObjectArgs } from "../src/new/parseObjectArgs.js";

type MockQ = ObjectOrInterfaceDefinition;

const MockObjectType = {
  apiName: "MockObject",
  primaryKeyType: "string",
} as MockQ;

const mockInstance = {
  $objectType: "MockObject",
  $primaryKey: "pk-123",
  name: "Test",
} as Osdk.Instance<MockQ>;

describe("parseObjectArgs", () => {
  it("should parse type + primaryKey and return the type def", () => {
    const result = parseObjectArgs<MockQ>(
      [MockObjectType, "pk-1"] as ObjectHookArgs<MockQ>,
    );
    expect(result.typeOrApiName).toBe(MockObjectType);
    expect(result.primaryKey).toBe("pk-1");
    expect(result.mode).toBeUndefined();
  });

  it("should parse instance and return apiName string with offline mode", () => {
    const result = parseObjectArgs<MockQ>(
      [mockInstance] as ObjectHookArgs<MockQ>,
    );
    expect(result.typeOrApiName).toBe("MockObject");
    expect(result.primaryKey).toBe("pk-123");
    expect(result.mode).toBe("offline");
  });

  it("should extract $select from options", () => {
    const result = parseObjectArgs<MockQ>(
      [MockObjectType, "pk-1", { $select: ["name", "age"] }] as ObjectHookArgs<
        MockQ
      >,
    );
    expect(result.selectArg).toEqual(["name", "age"]);
  });

  it("should return undefined selectArg when no options", () => {
    const result = parseObjectArgs<MockQ>(
      [MockObjectType, "pk-1"] as ObjectHookArgs<MockQ>,
    );
    expect(result.selectArg).toBeUndefined();
  });

  it("should derive apiNameString for both signatures", () => {
    const typeResult = parseObjectArgs<MockQ>(
      [MockObjectType, "pk-1"] as ObjectHookArgs<MockQ>,
    );
    expect(typeResult.apiNameString).toBe("MockObject");

    const instanceResult = parseObjectArgs<MockQ>(
      [mockInstance] as ObjectHookArgs<MockQ>,
    );
    expect(instanceResult.apiNameString).toBe("MockObject");
  });
});
