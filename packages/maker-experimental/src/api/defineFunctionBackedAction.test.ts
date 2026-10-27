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

import { initializeOntologyState } from "@osdk/maker";
import { createFunctionReference } from "@osdk/resource";
import { beforeEach, expect, it } from "vitest";

import { defineFunctionBackedAction } from "./defineFunctionBackedAction.js";

beforeEach(() => {
  initializeOntologyState("com.acme.");
});

it("accepts product-relative function references", () => {
  expect(
    defineFunctionBackedAction({
      function: createFunctionReference({
        type: "apiName",
        apiName: "updateTags",
      }),
    }).rules[0],
  ).toMatchObject({
    type: "functionRule",
    functionRule: { functionRid: "updateTags" },
  });
});

it("rejects RID and foreign-namespace references instead of treating them as discovered names", () => {
  expect(() =>
    defineFunctionBackedAction({
      function: createFunctionReference({
        type: "rid",
        rid: "ri.function-registry.main.function.12345678-1234-1234-1234-123456789abc",
      }),
    }),
  ).toThrow("RID references are not supported");
  expect(() =>
    defineFunctionBackedAction({
      function: createFunctionReference({
        type: "apiName",
        namespace: "com.other",
        apiName: "updateTags",
      }),
    }),
  ).toThrow("outside the current ontology namespace");
});

it("rejects supplying both authoring forms", () => {
  expect(() => {
    // @ts-expect-error Reference and legacy-name forms are mutually exclusive.
    defineFunctionBackedAction({
      functionApiName: "other",
      function: createFunctionReference({
        type: "apiName",
        apiName: "updateTags",
      }),
    });
  }).toThrow("not both");
});
