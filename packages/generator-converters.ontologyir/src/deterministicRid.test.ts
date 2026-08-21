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
import {
  deterministicRid,
  existingOrDeterministicRid,
} from "./deterministicRid.js";

describe(deterministicRid, () => {
  it("returns the same rid for the same inputs", () => {
    expect(deterministicRid("key", "object", "Employee")).toBe(
      deterministicRid("key", "object", "Employee"),
    );
  });

  it("changes the rid when the key or parts change", () => {
    const rid = deterministicRid("key", "object", "Employee");
    expect(deterministicRid("other-key", "object", "Employee")).not.toBe(rid);
    expect(deterministicRid("key", "object", "Office")).not.toBe(rid);
  });

  it("reuses existing rids", () => {
    const existing = "ri.ontology.main.object-type.employee";
    expect(existingOrDeterministicRid(existing, "key", "object", "Employee"))
      .toBe(existing);
  });
});
