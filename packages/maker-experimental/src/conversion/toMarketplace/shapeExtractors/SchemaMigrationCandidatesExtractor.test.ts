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

import { defineObject } from "@osdk/maker";
import invariant from "tiny-invariant";
import { describe, expect, it } from "vitest";

import {
  defineOntologyV2,
  type OntologyPackagingOptions,
} from "../../../api/defineOntologyV2.js";
import type { ReadableId } from "../../../util/generateRid.js";
import { SCHEMA_MIGRATION_INPUTS_SHAPE_READABLE_ID } from "./SchemaMigrationCandidatesExtractor.js";

type ObjectProperties = Parameters<typeof defineObject>[0]["properties"];

const RANDOMNESS_KEY = "61fc46ba-c39c-48d8-9d4a-0c25b3817a99";
const OBJECT_API_NAME = "com.example.Device";
const NON_NULL = { noNulls: true, noEmptyCollections: false };
const OPTIONAL_INPUT_METADATA = {
  isOptional: true,
  isAccessedInReconcile: false,
};

function about(fallbackTitle: string, fallbackDescription: string) {
  return {
    fallbackTitle,
    fallbackDescription,
    localizedTitle: {},
    localizedDescription: {},
  };
}

async function build(
  properties: ObjectProperties,
  {
    datasources,
    packagingOptions,
  }: {
    datasources?: Parameters<typeof defineObject>[0]["datasources"];
    packagingOptions?: OntologyPackagingOptions;
  } = {},
) {
  const result = await defineOntologyV2(
    "com.example.",
    () => {
      defineObject({
        apiName: "Device",
        displayName: "Device",
        pluralDisplayName: "Devices",
        titlePropertyApiName: "id",
        primaryKeyPropertyApiName: "id",
        properties: { id: { type: "string" }, ...properties },
        ...(datasources != null ? { datasources } : {}),
      });
    },
    undefined,
    undefined,
    undefined,
    RANDOMNESS_KEY,
    undefined,
    undefined,
    packagingOptions,
  );
  const { knownIdentifiers, objectTypes } = result.ontologyIr.ontology;
  const [{ objectType }] = Object.values(objectTypes);
  const { idToBlockShapeId } = result.blockDataAddOn;

  function propertyBlockInternalId(apiName: string): string {
    const entry = Object.entries(objectType.propertyTypes).find(
      ([, property]) => property.apiName === apiName,
    );
    invariant(entry != null, `expected property ${apiName}`);
    return knownIdentifiers.propertyTypes[entry[0]];
  }

  return {
    result,
    knownIdentifiers,
    idToBlockShapeId,
    propertyBlockInternalId,
    inputShape: result.shapes.inputShapes.get(
      SCHEMA_MIGRATION_INPUTS_SHAPE_READABLE_ID,
    ),
    inputShapeMetadata: result.shapes.inputShapeMetadata.get(
      SCHEMA_MIGRATION_INPUTS_SHAPE_READABLE_ID,
    ),
  };
}

function candidateIdFor(propertyBlockInternalId: string): string {
  return `property//${propertyBlockInternalId}//set-property-value-if-unset`;
}

function literalCandidate(propertyBlockInternalId: string, apiName: string) {
  return {
    about: about(
      `Backfill for property '${apiName}' on object type 'Device'`,
      `Value to backfill for non-nullable property '${apiName}' on object type 'Device' (API name: '${OBJECT_API_NAME}.${apiName}') when a schema migration is required at installation time.`,
    ),
    migration: {
      type: "setPropertyValueIfUnset",
      setPropertyValueIfUnset: {
        property: propertyBlockInternalId,
        valueSource: { type: "literal", literal: {} },
      },
    },
  };
}

function schemaMigrationInputsShape(candidates: Record<string, unknown>) {
  return {
    type: "ontologySchemaMigrationInputs",
    ontologySchemaMigrationInputs: {
      about: about(
        "Ontology schema migration inputs",
        "Values required by schema migrations inferred at install time.",
      ),
      candidates,
    },
  };
}

describe("schema migration candidates", () => {
  it("emits a literal candidate for a non-nullable property on a dataset-backed object", async () => {
    const {
      inputShape,
      inputShapeMetadata,
      knownIdentifiers,
      idToBlockShapeId,
      propertyBlockInternalId,
    } = await build({
      name: { type: "string", displayName: "name", nullability: NON_NULL },
    });

    const nameId = propertyBlockInternalId("name");
    expect(inputShape).toEqual(
      schemaMigrationInputsShape({
        [candidateIdFor(nameId)]: literalCandidate(nameId, "name"),
      }),
    );
    expect(inputShapeMetadata).toEqual(OPTIONAL_INPUT_METADATA);
    expect(knownIdentifiers.shapeIdForOntologySchemaMigrationInputs).toBe(
      idToBlockShapeId[SCHEMA_MIGRATION_INPUTS_SHAPE_READABLE_ID],
    );
  });

  it.each<{ name: string; properties: ObjectProperties }>([
    {
      name: "a non-nullable primary key",
      properties: { id: { type: "string", nullability: NON_NULL } },
    },
    {
      name: "a nullable property",
      properties: {
        nullable: {
          type: "string",
          nullability: { noNulls: false, noEmptyCollections: false },
        },
      },
    },
    {
      name: "a property without data constraints",
      properties: { unconstrained: { type: "string" } },
    },
    {
      name: "a struct",
      properties: {
        struct: {
          type: { type: "struct", structDefinition: { a: "string" } },
          nullability: NON_NULL,
        },
      },
    },
    {
      name: "a vector",
      properties: {
        vector: {
          type: {
            type: "vector",
            dimension: 3,
            supportsSearchWith: "COSINE_SIMILARITY",
          },
          nullability: NON_NULL,
        },
      },
    },
    {
      name: "a media reference",
      properties: { media: { type: "mediaReference", nullability: NON_NULL } },
    },
    {
      name: "an array of an unsupported type",
      properties: {
        geoshapes: { type: "geoshape", array: true, nullability: NON_NULL },
      },
    },
  ])("emits no candidate for $name", async ({ properties }) => {
    const { inputShape, knownIdentifiers } = await build(properties);

    expect(inputShape).toBeUndefined();
    expect(knownIdentifiers.shapeIdForOntologySchemaMigrationInputs).toBe(null);
  });

  it("emits no candidates for a stream-only object", async () => {
    const { inputShape, knownIdentifiers } = await build(
      { name: { type: "string", nullability: NON_NULL } },
      { datasources: [{ type: "stream" }] },
    );

    expect(inputShape).toBeUndefined();
    expect(knownIdentifiers.shapeIdForOntologySchemaMigrationInputs).toBe(null);
  });

  it("emits a candidate for a stream object whose edge remapping supports backfilling", async () => {
    const { inputShape, propertyBlockInternalId } = await build(
      { name: { type: "string", displayName: "name", nullability: NON_NULL } },
      {
        datasources: [{ type: "stream" }],
        packagingOptions: { targetEnvironment: "EDGE" },
      },
    );

    const nameId = propertyBlockInternalId("name");
    expect(inputShape).toEqual(
      schemaMigrationInputsShape({
        [candidateIdFor(nameId)]: literalCandidate(nameId, "name"),
      }),
    );
  });

  it.each([
    { array: false, maxNumberInclusive: 1 },
    { array: true, maxNumberInclusive: 100 },
  ])(
    "sources a marking candidate from a dedicated markings input (array: $array)",
    async ({ array, maxNumberInclusive }) => {
      const { result, inputShape, idToBlockShapeId, propertyBlockInternalId } =
        await build({
          classification: {
            type: {
              type: "marking",
              markingType: "CBAC",
              markingInputGroupName: "classificationGroup",
            },
            displayName: "classification",
            array,
            nullability: NON_NULL,
          },
        });

      const propertyId = propertyBlockInternalId("classification");
      const candidateId = candidateIdFor(propertyId);
      // Matches OMS's ontology-as-code SchemaMigrationCandidateShapeExtractor.
      const markingsReadableId =
        `schema-migration-candidate-input-${OBJECT_API_NAME}-property-type-classification-set-property-value-if-unset` as ReadableId;
      const identifierClause = `API name: '${OBJECT_API_NAME}.classification'`;

      expect(result.shapes.inputShapes.get(markingsReadableId)).toEqual({
        type: "markings",
        markings: {
          about: about(
            "Markings to backfill for property 'classification' on object type 'Device'",
            `Markings applied to existing objects with no value for non-nullable property 'classification' on object type 'Device' (${identifierClause}) when a backfill schema migration is required and supported at installation time.`,
          ),
          operation: "USE",
          affectedShapes: [propertyId],
          supportedMarkingsType: "CBAC",
          stableId: `schema-migration-candidate-input//${candidateId}//value`,
          sizeConstraints: { minNumberInclusive: 0, maxNumberInclusive },
        },
      });
      expect(result.shapes.inputShapeMetadata.get(markingsReadableId)).toEqual(
        OPTIONAL_INPUT_METADATA,
      );
      expect(inputShape).toEqual(
        schemaMigrationInputsShape({
          [candidateId]: {
            about: about(
              "Backfill for property 'classification' on object type 'Device'",
              `Markings to backfill for non-nullable property 'classification' on object type 'Device' (${identifierClause}) when a schema migration is required at installation time. Supplied by this property's markings input rather than set here.`,
            ),
            migration: {
              type: "setPropertyValueIfUnset",
              setPropertyValueIfUnset: {
                property: propertyId,
                valueSource: {
                  type: "markings",
                  markings: idToBlockShapeId[markingsReadableId],
                },
              },
            },
          },
        }),
      );
    },
  );

  it("emits a marking candidate under the default marking nullability", async () => {
    const { inputShape, propertyBlockInternalId } = await build({
      classification: {
        type: {
          type: "marking",
          markingType: "MANDATORY",
          markingInputGroupName: "classificationGroup",
        },
      },
    });

    invariant(inputShape?.type === "ontologySchemaMigrationInputs");
    expect(
      Object.keys(inputShape.ontologySchemaMigrationInputs.candidates),
    ).toEqual([candidateIdFor(propertyBlockInternalId("classification"))]);
  });

  it("produces identical output for the same randomness key", async () => {
    const properties: ObjectProperties = {
      name: { type: "string", nullability: NON_NULL },
      classification: {
        type: {
          type: "marking",
          markingType: "CBAC",
          markingInputGroupName: "classificationGroup",
        },
      },
    };
    const first = await build(properties);
    const second = await build(properties);

    expect(second.result.shapes).toEqual(first.result.shapes);
    expect(second.idToBlockShapeId).toEqual(first.idToBlockShapeId);
    expect(second.knownIdentifiers).toEqual(first.knownIdentifiers);
  });
});
