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

import { createClientContext } from "@osdk/shared.net";
import type { ClientContext } from "@osdk/shared.net";
import { MockOntology } from "@osdk/shared.test";
import type { MockedFunction } from "vitest";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { GeoPoint, GeoShape, LocalDate, Timestamp } from "../../index.js";
import { USER_AGENT } from "../../USER_AGENT.js";
import { convertWireToOsdkObject } from "./convertWireToOsdkObject.js";

describe("convertWireToOsdkObject", () => {
  let fetch: MockedFunction<typeof globalThis.fetch>;
  let client: ClientContext<MockOntology>;
  beforeEach(() => {
    fetch = vi.fn();
    client = createClientContext(
      MockOntology,
      "https://mock.com",
      () => "Token",
      USER_AGENT,
      fetch,
    );
  });

  it("converts a property correctly", () => {
    const object = convertWireToOsdkObject<
      "ObjectTypeWithAllPropertyTypes",
      MockOntology
    >(client, objectWithAllPropertyTypes);

    const expectedGeoPoint = GeoPoint.fromGeoJson({
      type: "Point",
      coordinates: [1.1, 1.1],
    });
    const expectedGeoShape = GeoShape.fromGeoJson({
      coordinates: [
        [
          [1.0, 1.0],
          [1.0, 2.0],
          [2.0, 2.0],
          [2.0, 1.0],
          [1.0, 1.0],
        ],
      ],
      type: "Polygon",
    });

    expect(object).toMatchObject({
      ...objectWithAllPropertyTypes,
      dateTime: Timestamp.fromISOString("2019-01-01T01:01:01.000Z"),
      dateTimeArray: [Timestamp.fromISOString("2019-01-01T01:01:01.000Z")],
      date: LocalDate.fromISOString("2019-01-01"),
      dateArray: [LocalDate.fromISOString("2019-01-01")],
      attachment: expect.objectContaining({
        attachmentRid:
          "ri.attachments.main.attachment.86016861-707f-4292-b258-6a7108915a75",
        getMetadata: expect.anything(),
        read: expect.anything(),
        type: "Attachment",
      }),
      attachmentArray: [
        expect.objectContaining({
          attachmentRid:
            "ri.attachments.main.attachment.86016861-707f-4292-b258-6a7108915a75",
          getMetadata: expect.anything(),
          read: expect.anything(),
          type: "Attachment",
        }),
      ],
      geoPoint: expectedGeoPoint,
      geoShape: expectedGeoShape,
      geoPointArray: [expectedGeoPoint],
      geoShapeArray: [expectedGeoShape],
    });
  });

  it("reuses the same prototype for subsequent creations", () => {
    const object1 = convertWireToOsdkObject<
      "Task",
      MockOntology
    >(client, {
      __rid: "rid.1",
      __primaryKey: 1,
      __apiName: "Task",
      id: 1,
    });

    const object2 = convertWireToOsdkObject<
      "Task",
      MockOntology
    >(client, {
      __rid: "rid.2",
      __primaryKey: 2,
      __apiName: "Task",
      id: 2,
    });

    expect(Object.getPrototypeOf(object1)).toBe(Object.getPrototypeOf(object2));
  });

  it("adds toString method which performs a json stringification", () => {
    const wireObject = {
      id: 1,
      __primaryKey: 1,
      __apiName: "Task",
      __rid: "rid.1",
    } as const;

    const object = convertWireToOsdkObject<
      "Task",
      MockOntology
    >(client, wireObject);

    expect(object.toString()).toEqual(
      JSON.stringify(wireObject, null, 2),
    );
  });

  it("handles reserved word backcompat in property and link names", () => {
    const wireObject = {
      catch: 1,
      __primaryKey: 1,
      __apiName: "ObjectTypeWithReservedNames",
      __rid: "rid.1",
    } as const;
    const object = convertWireToOsdkObject<
      "ObjectTypeWithReservedNames",
      MockOntology
    >(client, wireObject);

    expect(object.catch).toEqual(1);
    expect((object as any).catch_).toEqual(1);

    expect(object.toString()).toMatchInlineSnapshot(`
      "{
        "catch_": 1,
        "__primaryKey": 1,
        "__apiName": "ObjectTypeWithReservedNames",
        "__rid": "rid.1"
      }"
    `);
  });
});

const objectWithAllPropertyTypes = {
  __rid:
    "ri.phonograph2-objects.main.object.401ac022-89eb-4591-8b7e-0a912b9efb44",
  __primaryKey: 1,
  __apiName: "ObjectTypeWithAllPropertyTypes" as const,
  id: 1,
  string: "string",
  boolean: true,
  date: "2019-01-01",
  dateTime: "2019-01-01T01:01:01.000Z",
  decimal: 1.1,
  integer: 1,
  attachment: {
    rid: "ri.attachments.main.attachment.86016861-707f-4292-b258-6a7108915a75",
  },
  long: 1,
  short: 1,
  float: 1.1,
  double: 1.1,
  byte: 1,
  geoPoint: { type: "Point", coordinates: [1.1, 1.1] },
  geoShape: {
    coordinates: [
      [
        [1.0, 1.0],
        [1.0, 2.0],
        [2.0, 2.0],
        [2.0, 1.0],
        [1.0, 1.0],
      ],
    ],
    type: "Polygon",
  },
  stringArray: ["string"],
  booleanArray: [true],
  dateArray: ["2019-01-01"],
  dateTimeArray: ["2019-01-01T01:01:01.000Z"],
  decimalArray: [1.1],
  integerArray: [1],
  longArray: [1],
  shortArray: [1],
  floatArray: [1.1],
  doubleArray: [1.1],
  byteArray: [1],
  attachmentArray: [
    {
      rid:
        "ri.attachments.main.attachment.86016861-707f-4292-b258-6a7108915a75",
    },
  ],
  geoPointArray: [{ type: "Point", coordinates: [1.1, 1.1] }],
  geoShapeArray: [
    {
      coordinates: [
        [
          [1.0, 1.0],
          [1.0, 2.0],
          [2.0, 2.0],
          [2.0, 1.0],
          [1.0, 1.0],
        ],
      ],
      type: "Polygon",
    },
  ],
};
