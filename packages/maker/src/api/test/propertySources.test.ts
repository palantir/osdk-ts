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
import { beforeEach, expect, it } from "vitest";

import { defineObject } from "../defineObject.js";
import { defineOntology, dumpOntologyFullMetadata } from "../defineOntology.js";
import { column } from "../object/column.js";
import type { ObjectTypeDefinition } from "../object/ObjectTypeDefinition.js";
import type { PropertySourceInput } from "../object/PropertySource.js";

const struct = {
  type: "struct",
  fields: { FIRST_NAME: { type: "string" }, AGE: { type: "integer" } },
} as const;
const dataset = createDatasetReference(
  {
    type: "rid",
    rid: "ri.foundry.main.dataset.12345678-1234-1234-1234-123456789abc",
  },
  {
    schema: {
      columns: {
        RAW_ID: { type: "string" },
        PROFILE: struct,
        PROFILES: { type: "array", elementType: struct },
      },
    },
  },
);
const base: ObjectTypeDefinition = {
  apiName: "Employee",
  displayName: "Employee",
  pluralDisplayName: "Employees",
  primaryKeyPropertyApiName: "id",
  titlePropertyApiName: "id",
  properties: { id: { type: "string", source: column(dataset, "RAW_ID") } },
  datasources: [{ type: "dataset", dataset }],
};
const profile = {
  type: {
    type: "struct",
    structDefinition: { firstName: "string", age: "integer" },
  },
  source: {
    type: "struct",
    column: column(dataset, "PROFILE"),
    fields: { firstName: "FIRST_NAME", age: "AGE" },
  },
} as const;

beforeEach(async () => {
  await defineOntology("com.acme.", () => {}, undefined);
});

it.each([
  { source: "editOnly" },
  { source: { type: "editOnly" } },
  { editOnly: true },
] as const)("supports edit-only authoring: %j", (attributes) => {
  const result = defineObject({
    ...base,
    properties: { ...base.properties, note: { type: "string", ...attributes } },
  });
  expect(result.properties?.note).toMatchObject(attributes);
  expect(
    dumpOntologyFullMetadata().ontology.objectTypes["com.acme.Employee"]
      .datasources[0].datasource,
  ).toMatchObject({
    datasetV2: {
      propertyMapping: { note: { type: "editOnly", editOnly: {} } },
    },
  });
});

it.each(["editOnly", { type: "editOnly" }] as const)(
  "rejects edit-only primary keys: %j",
  (source) => {
    expect(() =>
      defineObject({
        ...base,
        properties: { id: { type: "string", source } },
      }),
    ).toThrow("cannot be edit-only");
  },
);

it.each([
  { source: "editOnly" },
  { source: { type: "editOnly" } },
  { editOnly: true },
] as const)(
  "rejects edit-only properties on stream-backed objects: %j",
  (attributes) => {
    expect(() =>
      defineObject({
        ...base,
        datasources: [{ type: "stream" }],
        properties: {
          id: { type: "string" },
          note: { type: "string", ...attributes },
        },
      }),
    ).toThrow(
      "Edit only properties are not supported on object types with stream datasources",
    );
  },
);

it("supports direct property sources without column references", () => {
  defineObject({
    ...base,
    datasources: [{ type: "direct" }],
    properties: {
      id: { type: "string", source: { type: "direct" } },
      note: { type: "string", source: "editOnly" },
    },
  });
  expect(
    dumpOntologyFullMetadata().ontology.objectTypes["com.acme.Employee"]
      .datasources[0].datasource,
  ).toMatchObject({
    direct: {
      propertyMapping: {
        id: { type: "column", column: "id" },
        note: { type: "editOnly", editOnly: {} },
      },
    },
  });
});

it("requires a direct datasource for direct property sources", () => {
  expect(() =>
    defineObject({
      ...base,
      properties: { id: { type: "string", source: { type: "direct" } } },
    }),
  ).toThrow("requires a direct datasource");
});

it.each([false, true])("maps explicit struct fields with array=%s", (array) => {
  defineObject({
    ...base,
    properties: {
      ...base.properties,
      profile: {
        ...profile,
        array,
        source: {
          ...profile.source,
          column: column(dataset, array ? "PROFILES" : "PROFILE"),
        },
      },
    },
  });
  expect(
    dumpOntologyFullMetadata().ontology.objectTypes["com.acme.Employee"]
      .datasources[0].datasource,
  ).toMatchObject({
    datasetV2: {
      propertyMapping: {
        profile: {
          type: "struct",
          struct: {
            column: array ? "PROFILES" : "PROFILE",
            mapping: {
              FIRST_NAME: { apiName: "firstName", mappings: {} },
              AGE: { apiName: "age", mappings: {} },
            },
          },
        },
      },
    },
  });
});

it.each([
  [{ firstName: "FIRST_NAME" }, 'must map field "age"'],
  [
    { ...profile.source.fields, missing: "FIRST_NAME" },
    'maps unknown field "missing"',
  ],
  [{ firstName: "MISSING", age: "AGE" }, 'Column "PROFILE" is incompatible'],
  [{ firstName: "AGE", age: "FIRST_NAME" }, 'Column "PROFILE" is incompatible'],
  [
    { firstName: "", age: "AGE" },
    "Struct source field names must not be empty",
  ],
] as const)("validates struct field mappings: %j", (fields, message) => {
  expect(() =>
    defineObject({
      ...base,
      properties: {
        ...base.properties,
        profile: { ...profile, source: { ...profile.source, fields } },
      },
    }),
  ).toThrow(message);
});

it.each([false, true])(
  "rejects repeated backing fields with schemaKnown=%s",
  (schemaKnown) => {
    const reference = schemaKnown
      ? dataset
      : createDatasetReference(dataset.locator);
    expect(() =>
      defineObject({
        ...base,
        datasources: [{ type: "dataset", dataset: reference }],
        properties: {
          id: { type: "string", source: column(reference, "RAW_ID") },
          profile: {
            type: {
              type: "struct",
              structDefinition: { firstName: "string", displayName: "string" },
            },
            source: {
              type: "struct",
              column: column(reference, "PROFILE"),
              fields: { firstName: "FIRST_NAME", displayName: "FIRST_NAME" },
            },
          },
        },
      }),
    ).toThrow(
      'Struct source for property "profile" maps backing field "FIRST_NAME" more than once',
    );
  },
);

it("rejects struct sources on scalar properties", () => {
  expect(() =>
    defineObject({
      ...base,
      properties: {
        ...base.properties,
        profile: { type: "string", source: profile.source },
      },
    }),
  ).toThrow("requires a struct property");
});

it("continues to reject multiple base datasources", () => {
  expect(() =>
    defineObject({
      ...base,
      datasources: [{ type: "dataset", dataset }, { type: "direct" }],
    }),
  ).toThrow("more than one base datasource");
});
