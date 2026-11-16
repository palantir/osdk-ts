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

import { describe, expect, test } from "vitest";

import { validateDatasets } from "../validateDatasets.js";

const DATASET_RID_1 = "ri.foundry.main.dataset.1";
const DATASET_RID_2 = "ri.foundry.main.dataset.2";

function createDatasets(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    identifier: { rid: `ri.foundry.main.dataset.${i}` },
    usage: ["read"],
    alias: `dataset${i}`,
  }));
}

describe("validateDatasets", () => {
  test("accepts datasets with a valid rid and supported usages", () => {
    expect(() =>
      validateDatasets([
        {
          identifier: { rid: DATASET_RID_1 },
          usage: ["read"],
          alias: "employees",
        },
        {
          identifier: { rid: DATASET_RID_2 },
          usage: ["read"],
          alias: "offices",
        },
      ]),
    ).not.toThrow();
  });

  test("accepts an empty array", () => {
    expect(() => validateDatasets([])).not.toThrow();
  });

  test.each([
    {
      name: "datasets is not an array",
      datasets: { identifier: { rid: DATASET_RID_1 } },
      error: /"resources\.datasets" must be an array/u,
    },
    {
      name: "dataset is not an object",
      datasets: ["employees"],
      error: /Dataset at index 0 must be an object/u,
    },
    {
      name: "rid is missing",
      datasets: [{ identifier: {}, usage: ["read"], alias: "employees" }],
      error: /Dataset at index 0 must have a non-empty "identifier\.rid"/u,
    },
    {
      name: "identifier is missing",
      datasets: [{ usage: ["read"], alias: "employees" }],
      error: /Dataset at index 0 must have a non-empty "identifier\.rid"/u,
    },
    {
      name: "rid is not a rid",
      datasets: [
        {
          identifier: { rid: "not-a-rid" },
          usage: ["read"],
          alias: "employees",
        },
      ],
      error:
        /Dataset rid "not-a-rid" at index 0 does not match allowed pattern/u,
    },
    {
      name: "rid has the dataset type component but a different service component",
      datasets: [
        {
          identifier: { rid: "ri.other.main.dataset.1" },
          usage: ["read"],
          alias: "employees",
        },
      ],
      error: /does not match allowed pattern/u,
    },
    {
      name: "rid has the foundry service component but a different type component",
      datasets: [
        {
          identifier: { rid: "ri.foundry.main.transaction.1" },
          usage: ["read"],
          alias: "employees",
        },
      ],
      error: /does not match allowed pattern/u,
    },
    {
      name: "rid contains whitespace",
      datasets: [
        {
          identifier: { rid: "ri.foundry.main.dataset.a b" },
          usage: ["read"],
          alias: "employees",
        },
      ],
      error: /does not match allowed pattern/u,
    },
  ])("throws when $name", ({ datasets, error }) => {
    expect(() => validateDatasets(datasets)).toThrow(error);
  });
});
