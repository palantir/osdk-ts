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

import { createDatasetReference } from "@osdk/resource";
import { expect, it } from "vitest";

import { column } from "../object/column.js";
import { validateDatasetDatasource } from "../object/validateDatasetDatasource.js";

const locator = {
  type: "rid",
  rid: "ri.foundry.main.dataset.12345678-1234-1234-1234-123456789abc",
} as const;
const dataset = createDatasetReference(locator);
const base = {
  apiName: "Employee",
  displayName: "Employee",
  pluralDisplayName: "Employees",
  titlePropertyApiName: "id",
  primaryKeyPropertyApiName: "id",
  properties: {
    id: { type: "string", source: column(dataset, "id") },
    salary: { type: "integer", source: column(dataset, "salary") },
  },
} as const;

it("accepts a dataset reference without schema knowledge", () => {
  expect(() =>
    validateDatasetDatasource({
      ...base,
      datasources: [
        { type: "dataset", dataset: createDatasetReference(locator) },
      ],
    }),
  ).not.toThrow();
});

it("rejects mixing dataset datasources with and without explicit references", () => {
  expect(() =>
    validateDatasetDatasource({
      ...base,
      datasources: [{ type: "dataset", dataset }, { type: "dataset" }],
    }),
  ).toThrow(
    'Object "Employee" cannot mix dataset datasources with and without explicit dataset references',
  );
});

it.each([undefined, "com.acme"])(
  "rejects API-name dataset references with namespace %s",
  (namespace) => {
    expect(() =>
      validateDatasetDatasource({
        ...base,
        datasources: [
          {
            type: "dataset",
            dataset: createDatasetReference({
              type: "apiName",
              apiName: "employees",
              namespace,
            }),
          },
        ],
      }),
    ).toThrow(
      'Dataset backing datasource for object "Employee" requires a RID locator',
    );
  },
);

it("validates property types against the backing dataset schema", () => {
  const incompatible = createDatasetReference(locator, {
    schema: {
      columns: { id: { type: "integer" }, salary: { type: "integer" } },
    },
  });

  expect(() =>
    validateDatasetDatasource({
      ...base,
      datasources: [{ type: "dataset", dataset: incompatible }],
    }),
  ).toThrow('Column "id" is incompatible with property type "string"');
});

it.each([
  [undefined, "requires an explicit column source"],
  [
    column(
      createDatasetReference({
        type: "rid",
        rid: "ri.foundry.main.dataset.12345678-1234-1234-1234-123456789abd",
      }),
      "id",
    ),
    "must reference its backing dataset",
  ],
] as const)(
  "rejects missing or incompatible property sources",
  (source, message) => {
    expect(() =>
      validateDatasetDatasource({
        ...base,
        datasources: [{ type: "dataset", dataset }],
        properties: { ...base.properties, id: { type: "string", source } },
      }),
    ).toThrow(message);
  },
);

it("rejects column sources without an explicit dataset or on edit-only properties", () => {
  expect(() => validateDatasetDatasource(base)).toThrow(
    "can only specify a column source",
  );
  expect(() =>
    validateDatasetDatasource({
      ...base,
      datasources: [{ type: "dataset", dataset }],
      properties: {
        ...base.properties,
        salary: { ...base.properties.salary, editOnly: true },
      },
    }),
  ).toThrow("cannot combine editOnly: true");
});

it("validates physical column types and skips edit-only properties", () => {
  const dataset = createDatasetReference(locator, {
    schema: {
      columns: {
        id: { type: "string" },
        salary: { type: "integer" },
        tags: { type: "array", elementType: { type: "string" } },
        profile: { type: "struct", fields: { age: { type: "integer" } } },
      },
    },
  });
  expect(() =>
    validateDatasetDatasource({
      ...base,
      datasources: [{ type: "dataset", dataset }],
      properties: {
        ...base.properties,
        tags: { type: "string", array: true, source: column(dataset, "tags") },
        profile: {
          type: { type: "struct", structDefinition: { age: "integer" } },
          source: column(dataset, "profile"),
        },
        note: { type: "string", editOnly: true },
      },
    }),
  ).not.toThrow();
});

it.each([
  [{ columns: { id: { type: "string" } } }, 'no column "salary"'],
  [
    { columns: { id: { type: "string" }, salary: { type: "string" } } },
    'Column "salary" is incompatible with property type "integer" on object "Employee": received {"type":"string"}',
  ],
] as const)("rejects invalid backing schemas", (schema, message) => {
  expect(() =>
    validateDatasetDatasource({
      ...base,
      datasources: [
        {
          type: "dataset",
          dataset: createDatasetReference(locator, { schema }),
        },
      ],
    }),
  ).toThrow(message);
});

it("leaves unknown runtime property kinds unchecked", () => {
  const dataset = createDatasetReference(locator, {
    schema: {
      columns: { id: { type: "string" }, salary: { type: "integer" } },
    },
  });
  expect(() =>
    validateDatasetDatasource({
      ...base,
      properties: {
        ...base.properties,
        // @ts-expect-error Simulate a newer property kind reaching an older validator.
        salary: { type: "future", source: column(dataset, "salary") },
      },
      datasources: [{ type: "dataset", dataset }],
    }),
  ).not.toThrow();
});

it("reports expected and actual decimal precision in mismatches", () => {
  const dataset = createDatasetReference(locator, {
    schema: {
      columns: {
        id: { type: "string" },
        salary: { type: "decimal", precision: 10, scale: 2 },
      },
    },
  });
  expect(() =>
    validateDatasetDatasource({
      ...base,
      properties: {
        ...base.properties,
        salary: {
          type: { type: "decimal", precision: 20, scale: 2 },
          source: column(dataset, "salary"),
        },
      },
      datasources: [{ type: "dataset", dataset }],
    }),
  ).toThrow(
    'Column "salary" is incompatible with property type {"type":"decimal","precision":20,"scale":2} on object "Employee": received {"type":"decimal","precision":10,"scale":2}',
  );
});

it("rejects creating an empty backing dataset for an explicit resource reference", () => {
  expect(() =>
    validateDatasetDatasource({
      ...base,
      includeEmptyBackingDatasource: true,
      datasources: [
        { type: "dataset", dataset: createDatasetReference(locator) },
      ],
    }),
  ).toThrow("cannot also create an empty backing datasource");
});
