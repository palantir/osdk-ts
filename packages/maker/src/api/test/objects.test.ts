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

import { beforeEach, describe, expect, it } from "vitest";

import { defineCreateObjectAction } from "../defineCreateObjectAction.js";
import { defineDeleteObjectAction } from "../defineDeleteObjectAction.js";
import { defineInterface } from "../defineInterface.js";
import { defineLink } from "../defineLink.js";
import { defineObject } from "../defineObject.js";
import { defineOntology, dumpOntologyFullMetadata } from "../defineOntology.js";
import { defineSharedPropertyType } from "../defineSpt.js";
import type { DerivedPropertyAggregation } from "../object/ObjectTypeDatasourceDefinition.js";
import type { PropertyTypeTypeVector } from "../properties/PropertyTypeType.js";

const VECTOR: PropertyTypeTypeVector = {
  type: "vector",
  dimension: 768,
  supportsSearchWith: "COSINE_SIMILARITY",
};

describe("Object Types", () => {
  beforeEach(async () => {
    await defineOntology("com.palantir.", () => {}, undefined);
  });

  it("allows an empty backing Media Set for a media reference property", () => {
    const object = defineObject({
      titlePropertyApiName: "id",
      displayName: "Document",
      pluralDisplayName: "Documents",
      apiName: "Document",
      primaryKeyPropertyApiName: "id",
      properties: {
        id: { type: "string" },
        file: {
          type: "mediaReference",
          includeEmptyBackingMediaSet: true,
        },
      },
    });

    expect(object.properties?.file.includeEmptyBackingMediaSet).toBe(true);
    expect(
      dumpOntologyFullMetadata().ontology.objectTypes["com.palantir.Document"]
        ?.datasources[0]?.datasource,
    ).toMatchObject({
      type: "mediaSetView",
      mediaSetView: {
        properties: ["file"],
        uploadProperties: ["file"],
      },
    });
  });

  it("rejects an empty backing Media Set for other property types", () => {
    expect(() =>
      defineObject({
        titlePropertyApiName: "id",
        displayName: "Document",
        pluralDisplayName: "Documents",
        apiName: "Document",
        primaryKeyPropertyApiName: "id",
        properties: {
          id: { type: "string" },
          fileName: {
            type: "string",
            includeEmptyBackingMediaSet: true,
          },
        },
      }),
    ).toThrowError(
      "Property fileName on object Document can only use includeEmptyBackingMediaSet when its type is mediaReference",
    );
  });

  it("Fails if the api name is invalid", () => {
    expect(() => {
      defineObject({
        titlePropertyApiName: "bar",
        displayName: "Foo",
        pluralDisplayName: "Foo",
        apiName: "foo_with_underscores",
        primaryKeyPropertyApiName: "bar",
        properties: { bar: { type: "string" } },
      });
    }).toThrowErrorMatchingInlineSnapshot(
      `[Error: Invariant failed: Invalid API name foo_with_underscores. API names must match the regex /^(?=.{1,100}$)[a-zA-Z][a-zA-Z0-9]*(?:\\.[a-zA-Z0-9]+)*$/u.]`,
    );
  });
  it("Fails if any property reference does not exist", () => {
    const spt = defineSharedPropertyType({
      apiName: "foo",
      type: "string",
    });

    const sample = defineInterface({
      apiName: "interface",
      properties: { foo: spt },
    });

    expect(() => {
      defineObject({
        titlePropertyApiName: "fizz",
        displayName: "Foo",
        pluralDisplayName: "Foo",
        apiName: "foo",
        primaryKeyPropertyApiName: "bar",
        properties: { bar: { type: "string" } },
      });
    }).toThrowErrorMatchingInlineSnapshot(
      `[Error: Invariant failed: Title property fizz is not defined on object foo]`,
    );

    expect(() => {
      defineObject({
        titlePropertyApiName: "bar",
        displayName: "Foo",
        pluralDisplayName: "Foo",
        apiName: "foo",
        primaryKeyPropertyApiName: "fizz",
        properties: { bar: { type: "string" } },
      });
    }).toThrowErrorMatchingInlineSnapshot(
      `[Error: Invariant failed: Primary key property fizz does not exist on object foo]`,
    );

    expect(() => {
      defineObject({
        titlePropertyApiName: "bar",
        displayName: "Foo",
        pluralDisplayName: "Foo",
        apiName: "foo",
        primaryKeyPropertyApiName: "bar",
        properties: { bar: { type: "string" } },
        implementsInterfaces: [
          {
            implements: sample,
            propertyMapping: [
              {
                interfaceProperty: "com.palantir.foo",
                mapsTo: "fizz",
              },
            ],
          },
        ],
      });
    }).toThrowErrorMatchingInlineSnapshot(
      `[Error: Invariant failed: \nOntology Definition Error: Object property mapped to interface does not exist. Object Property Mapped: fizz\n]`,
    );

    expect(() => {
      defineObject({
        titlePropertyApiName: "bar",
        displayName: "Foo",
        pluralDisplayName: "Foo",
        apiName: "foo",
        primaryKeyPropertyApiName: "bar",
        properties: { bar: { type: "string" } },
        implementsInterfaces: [
          {
            implements: sample,
            propertyMapping: [
              {
                interfaceProperty: "com.palantir.fizz",
                mapsTo: "bar",
              },
              {
                interfaceProperty: "com.palantir.foo",
                mapsTo: "bar",
              },
            ],
          },
        ],
      });
    }).toThrowErrorMatchingInlineSnapshot(
      `[Error: Invariant failed: \nOntology Definition Error: Interface property com.palantir.fizz referenced in foo object does not exist\n]`,
    );
  });

  it("Allows inherited optional interface properties to be omitted", () => {
    const optionalProperty = defineSharedPropertyType({
      apiName: "optionalProperty",
      type: "string",
    });
    const parentInterface = defineInterface({
      apiName: "parentInterface",
      properties: {
        optionalProperty: {
          required: false,
          sharedPropertyType: optionalProperty,
        },
        optionalInterfaceProperty: {
          required: false,
          type: "string",
        },
      },
    });
    const childInterface = defineInterface({
      apiName: "childInterface",
      extends: parentInterface,
    });

    expect(() =>
      defineObject({
        titlePropertyApiName: "id",
        displayName: "Sample Object",
        pluralDisplayName: "Sample Objects",
        apiName: "sampleObject",
        primaryKeyPropertyApiName: "id",
        properties: { id: { type: "string" } },
        implementsInterfaces: [
          {
            implements: childInterface,
            propertyMapping: [],
          },
        ],
      }),
    ).not.toThrow();
  });

  it("Validates supplied mappings for inherited optional interface properties", () => {
    const optionalProperty = defineSharedPropertyType({
      apiName: "optionalProperty",
      type: "string",
    });
    const parentInterface = defineInterface({
      apiName: "parentInterface",
      properties: {
        optionalProperty: {
          required: false,
          sharedPropertyType: optionalProperty,
        },
        optionalInterfaceProperty: {
          required: false,
          type: "string",
        },
      },
    });
    const childInterface = defineInterface({
      apiName: "childInterface",
      extends: parentInterface,
    });

    expect(() =>
      defineObject({
        titlePropertyApiName: "id",
        displayName: "Sample Object",
        pluralDisplayName: "Sample Objects",
        apiName: "sampleObject",
        primaryKeyPropertyApiName: "id",
        properties: { id: { type: "string" } },
        implementsInterfaces: [
          {
            implements: childInterface,
            propertyMapping: [
              {
                interfaceProperty: "optionalProperty",
                mapsTo: "missingSpt",
              },
              {
                interfaceProperty: "com.palantir.optionalInterfaceProperty",
                mapsTo: "missingIdp",
              },
            ],
          },
        ],
      }),
    ).toThrowError(
      /Object Property Mapped: missingSpt[\s\S]*Object Property Mapped: missingIdp/u,
    );
  });

  it("Objects properly defined", () => {
    const spt = defineSharedPropertyType({
      apiName: "foo",
      type: "string",
    });

    const sample = defineInterface({
      apiName: "interface",
      properties: { foo: spt },
    });

    const object = defineObject({
      titlePropertyApiName: "bar",
      displayName: "Foo",
      pluralDisplayName: "Foo",
      apiName: "foo",
      primaryKeyPropertyApiName: "bar",
      properties: {
        bar: { type: "string", displayName: "Bar" },
        arrayProp: {
          type: "string",
          array: true,
          displayName: "Array Property Test",
        },
        geopoint: {
          type: {
            type: "struct",
            structDefinition: { lat: "double", lng: "double" },
          },
          displayName: "geopoint",
        },
      },
      aliases: ["alias1", "alias2"],
      implementsInterfaces: [
        {
          implements: sample,
          propertyMapping: [
            {
              interfaceProperty: spt.apiName,
              mapsTo: "bar",
            },
          ],
        },
      ],
    });

    expect(dumpOntologyFullMetadata().ontology).toMatchSnapshot();
  });

  it("Vector properties are properly defined", () => {
    defineObject({
      titlePropertyApiName: "bar",
      displayName: "Foo",
      pluralDisplayName: "Foo",
      apiName: "foo",
      primaryKeyPropertyApiName: "bar",
      properties: {
        bar: { type: "string" },
        embedding: {
          type: {
            type: "vector",
            dimension: 1536,
            supportsSearchWith: "COSINE_SIMILARITY",
            embeddingModel: {
              type: "text",
              text: { type: "lms", lms: "OPENAI_TEXT_EMBEDDING_ADA_002" },
            },
            quantization: "BYTE",
          },
        },
      },
    });

    const embedding =
      dumpOntologyFullMetadata().ontology.objectTypes["com.palantir.foo"]
        .objectType.propertyTypes["embedding"];
    expect(embedding.type).toMatchSnapshot();
    expect(embedding.indexedForSearch).toBe(true);
  });

  it("Fails on a vector property declared as an array", () => {
    defineObject({
      titlePropertyApiName: "bar",
      displayName: "Foo",
      pluralDisplayName: "Foo",
      apiName: "foo",
      primaryKeyPropertyApiName: "bar",
      properties: {
        bar: { type: "string" },
        embedding: { type: VECTOR, array: true },
      },
    });

    expect(() => dumpOntologyFullMetadata()).toThrowErrorMatchingInlineSnapshot(
      `[Error: Invariant failed: Vector property 'com.palantir.embedding' cannot be an array]`,
    );
  });

  it("Fails on a vector property with a non-positive dimension", () => {
    defineObject({
      titlePropertyApiName: "bar",
      displayName: "Foo",
      pluralDisplayName: "Foo",
      apiName: "foo",
      primaryKeyPropertyApiName: "bar",
      properties: {
        bar: { type: "string" },
        embedding: { type: { ...VECTOR, dimension: 0 } },
      },
    });

    expect(() => dumpOntologyFullMetadata()).toThrowErrorMatchingInlineSnapshot(
      `[Error: Invariant failed: Vector property 'com.palantir.embedding' must have an integer 'dimension' of at least 1, but got 0]`,
    );
  });

  it("Explicit datasource definitions are properly defined", () => {
    const datasetBackedObject = defineObject({
      titlePropertyApiName: "bar",
      displayName: "datasetBackedObject",
      pluralDisplayName: "datasetBackedObject",
      apiName: "foo",
      primaryKeyPropertyApiName: "bar",
      properties: { bar: { type: "string" } },
      datasources: [{ type: "dataset" }],
    });

    const streamBackedObjectNoRetention = defineObject({
      titlePropertyApiName: "fizz",
      displayName: "streamBackedObjectNoRetention",
      pluralDisplayName: "streamBackedObjectNoRetention",
      apiName: "fizz",
      primaryKeyPropertyApiName: "fizz",
      properties: { fizz: { type: "string" }, bar: { type: "string" } },
      datasources: [{ type: "stream" }],
    });

    const streamBackedObjectWithRetention = defineObject({
      titlePropertyApiName: "buzz",
      displayName: "streamBackedObjectWithRetention",
      pluralDisplayName: "streamBackedObjectWithRetention",
      apiName: "buzz",
      primaryKeyPropertyApiName: "buzz",
      properties: { buzz: { type: "string" } },
      datasources: [{ type: "stream", retentionPeriod: "PT1H" }],
    });

    expect(dumpOntologyFullMetadata().ontology).toMatchSnapshot();
  });

  it("Restricted view datasources are properly defined", () => {
    const object = defineObject({
      titlePropertyApiName: "bar",
      displayName: "Foo",
      pluralDisplayName: "Foo",
      apiName: "foo",
      primaryKeyPropertyApiName: "bar",
      properties: {
        bar: { type: "string" },
      },
      datasources: [{ type: "restrictedView" }],
    });
    expect(dumpOntologyFullMetadata()).toMatchSnapshot();
  });

  it("Edit only properties are properly defined", () => {
    const object = defineObject({
      titlePropertyApiName: "bar",
      displayName: "Foo",
      pluralDisplayName: "Foo",
      apiName: "foo",
      primaryKeyPropertyApiName: "fizz",
      properties: {
        bar: {
          type: "string",
          editOnly: true,
        },
        fizz: {
          type: "string",
        },
      },
    });
    expect(dumpOntologyFullMetadata()).toMatchSnapshot();
  });

  it("Fails if edit only property is primary key", () => {
    expect(() => {
      defineObject({
        titlePropertyApiName: "bar",
        displayName: "Foo",
        pluralDisplayName: "Foo",
        apiName: "foo",
        primaryKeyPropertyApiName: "bar",
        properties: { bar: { type: "string", editOnly: true } },
      });
    }).toThrowErrorMatchingInlineSnapshot(
      `[Error: Invariant failed: Primary key property bar on object foo cannot be edit-only]`,
    );
  });

  it("Fail if stream retention period is not ISO 8601 compliant", () => {
    expect(() =>
      defineObject({
        titlePropertyApiName: "buzz",
        displayName: "streamBackedObjectWithRetention",
        pluralDisplayName: "streamBackedObjectWithRetention",
        apiName: "buzz",
        primaryKeyPropertyApiName: "buzz",
        properties: { buzz: { type: "string" } },
        datasources: [
          {
            type: "stream",
            retentionPeriod: "bad retention period string",
          },
        ],
      }),
    ).toThrowErrorMatchingInlineSnapshot(
      `[Error: Invariant failed: Retention period "bad retention period string" on object "buzz" is not a valid ISO 8601 duration string]`,
    );
  });

  it("Property-level datasources are properly defined", () => {
    const exampleObject = defineObject({
      titlePropertyApiName: "bar",
      displayName: "exampleObject",
      pluralDisplayName: "exampleObject",
      apiName: "fizz",
      primaryKeyPropertyApiName: "bar",
      properties: {
        fizz: { type: "mediaReference" },
        bar: { type: "string" },
      },
      datasources: [{ type: "stream" }],
    });

    expect(dumpOntologyFullMetadata()).toMatchSnapshot();
  });
  it("Fails if a derived datasource added after defineObject maps a property not on the object", () => {
    const passenger = defineObject({
      displayName: "Passenger",
      pluralDisplayName: "Passengers",
      apiName: "passenger",
      primaryKeyPropertyApiName: "name",
      titlePropertyApiName: "name",
      editsEnabled: true,
      properties: {
        name: { type: "string", displayName: "Name" },
        flight_id: { type: "string", displayName: "Flight ID" },
      },
    });
    const flightToPassengers = defineLink({
      apiName: "flightToPassengersLink",
      one: {
        object: "com.palantir.flight",
        metadata: { apiName: "flightFromPassengers" },
      },
      toMany: {
        object: passenger.apiName,
        metadata: { apiName: "passengersFromFlight" },
      },
      manyForeignKeyProperty: "flight_id",
    });
    const flight = defineObject({
      displayName: "Flight",
      pluralDisplayName: "Flights",
      apiName: "flight",
      primaryKeyPropertyApiName: "id",
      titlePropertyApiName: "id",
      editsEnabled: true,
      properties: {
        id: { type: "string", displayName: "ID" },
        passengersList: {
          type: "string",
          array: true,
          displayName: "Passengers",
        },
      },
      datasources: [{ type: "dataset" }],
    });
    // Mirror the real-world factory pattern: the derived datasource is pushed
    // onto the object AFTER defineObject() returns, so defineObject's own
    // validation never sees it. 'ghostProperty' is not a property on flight.
    flight.datasources!.push({
      type: "derived",
      linkDefinition: [{ linkType: flightToPassengers }],
      propertyMapping: {
        ghostProperty: { type: "collectList", property: "name", limit: 100 },
      },
    });
    expect(() => dumpOntologyFullMetadata()).toThrow(
      /Property 'ghostProperty' used in derived datasource .* is not (defined|a property)/u,
    );
  });
  it("Derived datasources are properly defined", () => {
    const passenger = defineObject({
      displayName: "Passenger",
      pluralDisplayName: "Passengers",
      apiName: "passenger",
      primaryKeyPropertyApiName: "name",
      titlePropertyApiName: "name",
      editsEnabled: true,
      properties: {
        name: {
          type: "string",
          displayName: "Name",
        },
        flight_id: {
          type: "string",
          displayName: "Flight ID",
        },
      },
    });
    const flightToPassengers = defineLink({
      apiName: "flightToPassengersLink",
      one: {
        object: "com.palantir.flight",
        metadata: {
          apiName: "flightFromPassengers",
        },
      },
      toMany: {
        object: passenger.apiName,
        metadata: {
          apiName: "passengersFromFlight",
        },
      },
      manyForeignKeyProperty: "flight_id",
    });
    expect(() => {
      defineObject({
        displayName: "Flight",
        pluralDisplayName: "Flights",
        apiName: "flight",
        primaryKeyPropertyApiName: "id",
        titlePropertyApiName: "id",
        properties: {
          id: {
            type: "string",
            displayName: "ID",
          },
          numPassengers: {
            type: "string",
            displayName: "Passengers",
          },
        },
        datasources: [
          { type: "dataset" },
          {
            type: "derived",
            linkDefinition: [
              {
                linkType: flightToPassengers,
              },
            ],
            propertyMapping: {
              numPassengers: {
                type: "collectList",
                property: "name",
                limit: 100,
              },
            },
          },
        ],
      });
    }).toThrowErrorMatchingInlineSnapshot(
      `[Error: Invariant failed: Property 'numPassengers' on object 'flight' is not collectible]`,
    );
    const flight = defineObject({
      displayName: "Flight",
      pluralDisplayName: "Flights",
      apiName: "flight",
      primaryKeyPropertyApiName: "id",
      titlePropertyApiName: "id",
      editsEnabled: true,
      properties: {
        id: {
          type: "string",
          displayName: "ID",
        },
        passengersList: {
          type: "string",
          array: true,
          displayName: "Passengers",
        },
      },
      datasources: [
        { type: "dataset" },
        {
          type: "derived",
          linkDefinition: [
            {
              linkType: flightToPassengers,
            },
          ],
          propertyMapping: {
            passengersList: {
              type: "collectList",
              property: "name",
              limit: 100,
            },
          },
        },
      ],
    });
    defineCreateObjectAction({
      displayName: "Create flight",
      objectType: flight,
    });
    defineDeleteObjectAction({
      displayName: "Delete flight",
      objectType: flight,
    });
    defineCreateObjectAction({
      displayName: "Create passenger",
      objectType: passenger,
    });
    defineDeleteObjectAction({
      displayName: "Delete passenger",
      objectType: passenger,
    });
    expect(dumpOntologyFullMetadata()).toMatchSnapshot();
  });
  it("Self-referential links on derived datasources work", () => {
    const link_person_to_parent = defineLink({
      apiName: "person-to-parent",
      manyForeignKeyProperty: "parentFk",
      one: {
        object: "com.palantir.person",
        metadata: {
          apiName: "parent",
          displayName: "Parent",
          pluralDisplayName: "Parents",
          visibility: "NORMAL",
        },
      },
      toMany: {
        object: "com.palantir.person",
        metadata: {
          apiName: "child",
          displayName: "Child",
          pluralDisplayName: "Children",
          visibility: "NORMAL",
        },
      },
    });

    const obj_person = defineObject({
      displayName: "Person",
      pluralDisplayName: "Persons",
      description: "person",
      apiName: "person",
      titlePropertyApiName: "pk",
      primaryKeyPropertyApiName: "pk",
      properties: {
        pk: { displayName: "pk", type: "string", status: "experimental" },
        parentFk: {
          displayName: "Parent FK",
          type: "string",
          status: "experimental",
        },
        siblingIds: {
          displayName: "Sibling IDs",
          type: "string",
          array: true,
          status: "experimental",
        },
      },
      datasources: [
        { type: "dataset" },
        {
          type: "derived",
          linkDefinition: [
            {
              linkType: link_person_to_parent,
              side: "TARGET",
            },
            {
              linkType: link_person_to_parent,
              side: "SOURCE",
            },
          ],
          propertyMapping: {
            siblingIds: {
              type: "collectList",
              property: "pk",
              limit: 100,
            },
          },
        },
      ],
    });

    expect(dumpOntologyFullMetadata()).toMatchSnapshot();
  });

  it.each<DerivedPropertyAggregation>([
    { type: "count" },
    { type: "avg", property: "fare" },
    { type: "sum", property: "fare" },
    { type: "min", property: "fare" },
    { type: "max", property: "fare" },
    { type: "approximateCardinality", property: "fare" },
    { type: "exactCardinality", property: "fare" },
    { type: "collectList", property: "fare", limit: 20 },
    { type: "collectSet", property: "fare", limit: 30 },
  ])("Derived $type aggregations are defined correctly", (aggregation) => {
    const passenger = defineObject({
      displayName: "Passenger",
      pluralDisplayName: "Passengers",
      apiName: "passenger",
      primaryKeyPropertyApiName: "name",
      titlePropertyApiName: "name",
      properties: {
        name: { type: "string" },
        flight_id: { type: "string" },
        fare: { type: "double" },
      },
    });
    const flightToPassengers = defineLink({
      apiName: "flightToPassengersLink",
      one: {
        object: "com.palantir.flight",
        metadata: { apiName: "flightFromPassengers" },
      },
      toMany: {
        object: passenger.apiName,
        metadata: { apiName: "passengersFromFlight" },
      },
      manyForeignKeyProperty: "flight_id",
    });
    defineObject({
      displayName: "Flight",
      pluralDisplayName: "Flights",
      apiName: "flight",
      primaryKeyPropertyApiName: "id",
      titlePropertyApiName: "id",
      properties: {
        id: { type: "string" },
        result: { type: "double", array: "limit" in aggregation },
      },
      datasources: [
        { type: "dataset" },
        {
          type: "derived",
          linkDefinition: [{ linkType: flightToPassengers }],
          propertyMapping: { result: aggregation },
        },
      ],
    });

    const [derived] = dumpOntologyFullMetadata().ontology.objectTypes[
      "com.palantir.flight"
    ].datasources.flatMap(({ datasource }) =>
      datasource.type === "derived" ? [datasource.derived.definition] : [],
    );
    const fare = { type: "propertyType", propertyType: "fare" };
    const metric =
      aggregation.type === "count"
        ? {}
        : "limit" in aggregation
          ? { linkedProperty: fare, limit: aggregation.limit }
          : fare;
    expect(derived).toEqual({
      type: "aggregatedProperties",
      aggregatedProperties: {
        linkDefinition: expect.anything(),
        propertyTypeMapping: {
          result: { type: aggregation.type, [aggregation.type]: metric },
        },
      },
    });
  });

  it("Default PSGs configurations are defined correctly", () => {
    const obj = defineObject({
      displayName: "Person",
      pluralDisplayName: "Persons",
      description: "person",
      apiName: "person",
      titlePropertyApiName: "pk",
      primaryKeyPropertyApiName: "pk",
      properties: {
        pk: { displayName: "pk", type: "string" },
        normalProperty: { displayName: "Normal Property", type: "string" },
        SSN: {
          displayName: "SSN",
          type: "string",
        },
      },
      datasources: [
        {
          type: "dataset",
          propertySecurityGroups: [
            {
              name: "invalidProperty",
              properties: ["SSN"],
            },
          ],
        },
      ],
    });
    expect(dumpOntologyFullMetadata()).toMatchSnapshot();
  });

  it("Complex PSGs configurations are defined correctly", () => {
    const obj = defineObject({
      displayName: "Person",
      pluralDisplayName: "Persons",
      description: "person",
      apiName: "person",
      titlePropertyApiName: "pk",
      primaryKeyPropertyApiName: "pk",
      properties: {
        pk: { displayName: "pk", type: "string" },
        group: { displayName: "Group Property", type: "string" },
        mandatory: {
          type: {
            type: "marking",
            markingType: "MANDATORY",
            markingInputGroupName: "myMarking",
          },
          displayName: "mandatory",
        },
        SSN: {
          displayName: "SSN",
          type: "string",
        },
      },
      datasources: [
        {
          type: "dataset",
          objectSecurityPolicy: {
            name: "customObjectLevelPolicy",
            granularPolicy: {
              type: "group",
              name: "objectLevelGroup",
            },
            appliedMarkings: {
              objectLevelMarking: "CBAC",
            },
          },
          propertySecurityGroups: [
            {
              name: "customPsg",
              properties: ["SSN"],
              granularPolicy: {
                type: "and",
                conditions: [
                  {
                    type: "groupProperty",
                    property: "group",
                  },
                  {
                    type: "markingProperty",
                    property: "mandatory",
                  },
                ],
              },
              appliedMarkings: {
                propertyLevelMarking: "MANDATORY",
              },
              assumedMarkings: {
                propertyLevelAssumedMarking: "MANDATORY",
              },
            },
          ],
        },
      ],
    });
    expect(dumpOntologyFullMetadata()).toMatchSnapshot();
  });

  it("Reducers and struct main properties are defined correctly", () => {
    const spt = defineSharedPropertyType({
      apiName: "spt",
      displayName: "Struct Array SPT",
      type: {
        type: "struct",
        structDefinition: {
          prop1: "string",
          prop2: "string",
        },
        mainValue: {
          fields: "prop1",
          type: "string",
        },
      },
      array: true,
      reducers: [
        {
          direction: "descending",
          structField: "prop1",
        },
        {
          direction: "ascending",
          structField: "prop2",
        },
      ],
    });
    const object = defineObject({
      titlePropertyApiName: "bar",
      displayName: "Foo",
      pluralDisplayName: "Foo",
      apiName: "foo",
      primaryKeyPropertyApiName: "bar",
      properties: {
        bar: {
          type: "string",
        },
        spt: {
          sharedPropertyType: spt,
          type: {
            type: "struct",
            structDefinition: {
              prop1: "string",
              prop2: "string",
            },
          },
          array: true,
        },
        prop: {
          type: {
            type: "struct",
            structDefinition: {
              field1: "string",
              field2: "string",
            },
            mainValue: {
              fields: ["field1", "field2"],
              type: {
                type: "struct",
                structDefinition: {
                  field1: "string",
                  field2: "string",
                },
              },
            },
          },
          array: true,
          reducers: [
            {
              direction: "descending",
              structField: "field1",
            },
            {
              direction: "ascending",
              structField: "field2",
            },
          ],
        },
      },
    });
    expect(dumpOntologyFullMetadata()).toMatchSnapshot();
  });

  it("serializes ontologyPackage permission on object type", async () => {
    await defineOntology(
      "com.palantir.",
      () => {
        defineObject({
          apiName: "foo",
          displayName: "Foo",
          pluralDisplayName: "Foos",
          primaryKeyPropertyApiName: "id",
          titlePropertyApiName: "id",
          properties: { id: { type: "string" } },
          permission: {
            type: "ontologyPackage",
            ontologyPackageRid:
              "ri.ontology-package.main.ontology-package.abc-123",
          },
        });

        const bpi =
          dumpOntologyFullMetadata().ontology.blockPermissionInformation!;
        const otPerms = Object.values(bpi.objectTypes);
        expect(otPerms).toHaveLength(1);
        expect(otPerms[0].restrictionStatus).toEqual({
          restrictedByDatasources: false,
          editRestrictedByDatasources: false,
          publicProject: false,
          ontologyPackageRid:
            "ri.ontology-package.main.ontology-package.abc-123",
        });
      },
      undefined,
    );
  });

  describe("EditsHistoryConfig", () => {
    it("editsHistory is undefined when no config is provided", () => {
      defineObject({
        titlePropertyApiName: "bar",
        displayName: "Foo",
        pluralDisplayName: "Foo",
        apiName: "foo",
        primaryKeyPropertyApiName: "bar",
        properties: { bar: { type: "string" } },
      });

      const objectData =
        dumpOntologyFullMetadata().ontology.objectTypes["com.palantir.foo"];
      expect(objectData.entityMetadata?.editsHistory).toBeUndefined();
    });

    it("editsHistory is set to config when enabled", () => {
      defineObject({
        titlePropertyApiName: "bar",
        displayName: "Foo",
        pluralDisplayName: "Foo",
        apiName: "foo",
        primaryKeyPropertyApiName: "bar",
        properties: { bar: { type: "string" } },
        editsHistoryConfig: { enabled: true },
      });

      const objectData =
        dumpOntologyFullMetadata().ontology.objectTypes["com.palantir.foo"];
      expect(objectData.entityMetadata?.editsHistory).toEqual({
        type: "config",
        config: {
          store: "com.palantir.foo",
          storeAllPreviousProperties: undefined,
        },
      });
    });

    it("editsHistory is set to none when disabled", () => {
      defineObject({
        titlePropertyApiName: "bar",
        displayName: "Foo",
        pluralDisplayName: "Foo",
        apiName: "foo",
        primaryKeyPropertyApiName: "bar",
        properties: { bar: { type: "string" } },
        editsHistoryConfig: { enabled: false },
      });

      const objectData =
        dumpOntologyFullMetadata().ontology.objectTypes["com.palantir.foo"];
      expect(objectData.entityMetadata?.editsHistory).toEqual({
        type: "none",
        none: {},
      });
    });
  });
});
