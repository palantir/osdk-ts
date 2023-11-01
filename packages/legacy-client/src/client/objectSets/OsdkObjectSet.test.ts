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

import { createThinClient } from "@osdk/api";
import { describe, expect, it, vi } from "vitest";
import type { ObjectSetDefinition } from "../../ontology-runtime";
import type { ClientContext } from "../../ontology-runtime/ontologyProvider/calls/ClientContext";
import { MockOntology } from "../../util/test";
import { createOsdkObjectSet } from "./OsdkObjectSet";

describe("OsdkObjectSet", () => {
  it("creates a search on an ObjectSet", () => {
    const baseObjectSet: ObjectSetDefinition = {
      type: "base",
      objectType: "Todo",
    };

    const context: ClientContext = {
      client: createThinClient(MockOntology, "", () => "", vi.fn()),
      ontology: MockOntology,
      createObject: vi.fn(),
    };

    const os = createOsdkObjectSet<typeof MockOntology, "Todo">(
      context,
      baseObjectSet,
      MockOntology,
    );

    const whereObjectSet = os.where(a => a.id.eq("123"));

    expect(whereObjectSet.definition).toEqual({
      type: "filter",
      objectSet: baseObjectSet,
      where: {
        type: "eq",
        field: "id",
        value: "123",
      },
    });
  });
});
