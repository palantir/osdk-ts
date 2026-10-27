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

import { describe, expect, expectTypeOf, it } from "vitest";

import {
  createDatasetReference,
  createFunctionReference,
  createGeotimeIntegrationReference,
  createLiveDeploymentReference,
  createMediaSetReference,
  createRestrictedViewReference,
  createSourceReference,
  createStreamReference,
  createTimeSeriesSyncReference,
  resourceIdentity,
  resourceRefSchema,
} from "./index.js";

describe("resource references", () => {
  const uuid = "11111111-1111-1111-1111-111111111111";
  const locator = { type: "apiName", apiName: "input" } as const;

  it.each([
    [createDatasetReference, "dataset", "foundry", "dataset"],
    [createStreamReference, "stream", "foundry", "stream"],
    [
      createRestrictedViewReference,
      "restrictedView",
      "foundry",
      "restricted-view",
    ],
    [createFunctionReference, "function", "function-registry", "function"],
    [
      createLiveDeploymentReference,
      "liveDeployment",
      "foundry-ml-live",
      "deployment",
    ],
    [createMediaSetReference, "mediaSet", "mio", "media-set"],
    [createSourceReference, "source", "magritte", "source"],
    [
      createTimeSeriesSyncReference,
      "timeSeriesSync",
      "time-series-catalog",
      "sync",
    ],
    [
      createGeotimeIntegrationReference,
      "geotimeIntegration",
      "geotime-catalog",
      "integration",
    ],
    [
      createGeotimeIntegrationReference,
      "geotimeIntegration",
      "geotime",
      "series-integration",
    ],
  ] as const)(
    "constructs and validates references with %s",
    (create, type, service, resource) => {
      const locators = [
        locator,
        { ...locator, namespace: "com.example" },
        ...["", "main", "region-2", "instance_with:punctuation"].map(
          (instance) =>
            ({
              type: "rid",
              rid: `ri.${service}.${instance}.${resource}.${uuid}`,
            }) as const,
        ),
      ] as const;

      for (const input of locators) {
        const reference = create(input);
        expect(reference).toEqual({ type, locator: input });
        expect(Object.isFrozen(reference)).toBe(true);
        const serialized = JSON.stringify(reference);
        expect(resourceRefSchema.parse(JSON.parse(serialized))).toEqual(
          reference,
        );
      }

      for (const rid of [
        `ri.${service}.extra.segment.${resource}.${uuid}`,
        `ri.${service}.main.${resource}.not-a-uuid`,
        `ri.unknown.main.${resource}.${uuid}`,
        `ri.${service}.main.unknown.${uuid}`,
      ]) {
        expect(() => create({ type: "rid", rid })).toThrow();
      }

      expect(
        resourceRefSchema.safeParse({ ...create(locator), branch: "feature" })
          .success,
      ).toBe(false);
    },
  );

  it.each([
    "geotime-catalog.main.series-integration",
    "geotime.main.integration",
  ])("rejects mismatched geotime service/type pairs: %s", (prefix) => {
    expect(() =>
      createGeotimeIntegrationReference({
        type: "rid",
        rid: `ri.${prefix}.${uuid}`,
      }),
    ).toThrow(
      "Expected a geotime integration RID of the form ri.geotime-catalog.<instance>.integration.<UUID> or ri.geotime.<instance>.series-integration.<UUID>",
    );
  });

  it("rejects unknown resource kinds and mismatched RID types", () => {
    const stream = createStreamReference({
      type: "rid",
      rid: `ri.foundry.main.stream.${uuid}`,
    });

    for (const type of ["unknown", "dataset"]) {
      expect(resourceRefSchema.safeParse({ ...stream, type }).success).toBe(
        false,
      );
    }
  });

  it("rejects empty names and empty namespaces", () => {
    for (const input of [
      { type: "apiName", apiName: "" },
      { ...locator, namespace: "" },
    ] as const) {
      expect(() => createDatasetReference(input)).toThrow();
    }
  });

  const contract = {
    schema: {
      columns: {
        amount: { type: "decimal", precision: 30, scale: 10 },
        labels: {
          type: "array",
          elementType: { type: "string", nullable: true },
        },
      },
    },
  } as const;

  it.each([
    createDatasetReference(locator, contract),
    createStreamReference(locator, contract),
    createRestrictedViewReference(locator, contract),
  ])(
    "preserves contract metadata and literal types without changing identity: $type",
    (reference) => {
      expect(reference.schema).toEqual(contract.schema);

      expectTypeOf(
        reference.schema.columns.amount.precision,
      ).toEqualTypeOf<30>();
      expectTypeOf(reference.schema.columns.amount.scale).toEqualTypeOf<10>();
      expectTypeOf(
        reference.schema.columns.labels.elementType.type,
      ).toEqualTypeOf<"string">();
      expectTypeOf(
        reference.schema.columns.labels.elementType.nullable,
      ).toEqualTypeOf<true>();

      expect(Object.isFrozen(reference)).toBe(true);

      const serialized = JSON.stringify(reference);
      expect(resourceRefSchema.parse(JSON.parse(serialized))).toEqual(
        reference,
      );
      expect(resourceIdentity(reference)).toBe(
        resourceIdentity({ type: reference.type, locator }),
      );
    },
  );

  it("requires a schema when a contract or schema type is supplied", () => {
    type KnownSchema = { columns: { id: { type: "string" } } };
    const schema: KnownSchema = { columns: { id: { type: "string" } } };

    // First, confirm this works
    createDatasetReference<KnownSchema>(locator, { schema });
    createStreamReference<KnownSchema>(locator, { schema });
    createRestrictedViewReference<KnownSchema>(locator, { schema });

    // @ts-expect-error A supplied contract must contain its schema.
    createDatasetReference(locator, {});
    // @ts-expect-error A supplied contract must contain its schema.
    createStreamReference(locator, {});
    // @ts-expect-error A supplied contract must contain its schema.
    createRestrictedViewReference(locator, {});

    const optionalContract: { schema?: KnownSchema } = {};
    // @ts-expect-error An optional schema does not guarantee schema knowledge.
    createDatasetReference(locator, optionalContract);
    // @ts-expect-error An optional schema does not guarantee schema knowledge.
    createStreamReference(locator, optionalContract);
    // @ts-expect-error An optional schema does not guarantee schema knowledge.
    createRestrictedViewReference(locator, optionalContract);

    // @ts-expect-error A supplied schema cannot be undefined.
    createDatasetReference(locator, { schema: undefined });
    // @ts-expect-error A supplied schema cannot be undefined.
    createStreamReference(locator, { schema: undefined });
    // @ts-expect-error A supplied schema cannot be undefined.
    createRestrictedViewReference(locator, { schema: undefined });

    // @ts-expect-error An explicit schema type requires an actual contract.
    createDatasetReference<KnownSchema>(locator);
    // @ts-expect-error An explicit schema type requires an actual contract.
    createStreamReference<KnownSchema>(locator);
    // @ts-expect-error An explicit schema type requires an actual contract.
    createRestrictedViewReference<KnownSchema>(locator);
  });

  it.each([
    {
      field: "resource kind",
      left: { type: "custom", locator: { type: "apiName", apiName: "input" } },
      right: { type: "other", locator: { type: "apiName", apiName: "input" } },
    },
    {
      field: "API name",
      left: { type: "custom", locator: { type: "apiName", apiName: "first" } },
      right: {
        type: "custom",
        locator: { type: "apiName", apiName: "second" },
      },
    },
    {
      field: "namespace",
      left: {
        type: "custom",
        locator: { type: "apiName", namespace: "com.first", apiName: "input" },
      },
      right: {
        type: "custom",
        locator: { type: "apiName", namespace: "com.second", apiName: "input" },
      },
    },
    {
      field: "namespace omission",
      left: { type: "custom", locator: { type: "apiName", apiName: "input" } },
      right: {
        type: "custom",
        locator: {
          type: "apiName",
          namespace: "com.example",
          apiName: "input",
        },
      },
    },
    {
      field: "locator type",
      left: { type: "custom", locator: { type: "apiName", apiName: "same" } },
      right: { type: "custom", locator: { type: "rid", rid: "same" } },
    },
    {
      field: "RID",
      left: { type: "custom", locator: { type: "rid", rid: "first" } },
      right: { type: "custom", locator: { type: "rid", rid: "second" } },
    },
  ] as const)(
    "distinguishes $field in resource identity",
    ({ left, right }) => {
      expect(resourceIdentity(left)).not.toBe(resourceIdentity(right));
    },
  );
});
