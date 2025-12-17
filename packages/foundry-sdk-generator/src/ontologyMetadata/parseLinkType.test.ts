/*
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
 */

import { describe, expect, it } from "vitest";
import { parseLinkType } from "./ontologyMetadataResolver.js";

describe("parseLinkType", () => {
  it("parses simple link type without dots in object name", () => {
    const [objectTypeApiName, linkTypeApiName] = parseLinkType(
      "Employee.officeLink",
    );
    expect(objectTypeApiName).toBe("Employee");
    expect(linkTypeApiName).toBe("officeLink");
  });

  it("parses link type with dots in object API name", () => {
    const [objectTypeApiName, linkTypeApiName] = parseLinkType(
      "com.foo.ObjectName.myLink",
    );
    expect(objectTypeApiName).toBe("com.foo.ObjectName");
    expect(linkTypeApiName).toBe("myLink");
  });

  it("parses link type with many dots in object API name", () => {
    const [objectTypeApiName, linkTypeApiName] = parseLinkType(
      "com.palantir.foundry.ontology.MyObject.someLink",
    );
    expect(objectTypeApiName).toBe("com.palantir.foundry.ontology.MyObject");
    expect(linkTypeApiName).toBe("someLink");
  });

  it("throws error for link type without any dot", () => {
    expect(() => parseLinkType("InvalidLinkType")).toThrow(
      "Invalid link type format: \"InvalidLinkType\". Expected format: \"ObjectTypeApiName.linkTypeApiName\"",
    );
  });

  it("handles single character names", () => {
    const [objectTypeApiName, linkTypeApiName] = parseLinkType("A.b");
    expect(objectTypeApiName).toBe("A");
    expect(linkTypeApiName).toBe("b");
  });
});
