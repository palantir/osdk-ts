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
import { convertDataType } from "./convertDataType.js";
import type { IDataType } from "./OntologyIrToFullMetadataConverter.js";

const STRING: IDataType = { type: "string", string: {} } as IDataType;
const INTEGER: IDataType = { type: "integer", integer: {} } as IDataType;

function convert(
  dataType: IDataType,
  customTypes: Record<string, unknown> = {},
) {
  return convertDataType(dataType, customTypes, {});
}

describe(convertDataType, () => {
  it("converts a media reference", () => {
    expect(convert({ type: "mediaReference", mediaReference: {} } as IDataType))
      .toEqual({ type: "mediaReference" });
  });

  it("converts an optional media reference to a union with null", () => {
    expect(
      convert(
        {
          type: "optionalType",
          optionalType: {
            wrappedType: { type: "mediaReference", mediaReference: {} },
          },
        } as IDataType,
      ),
    ).toEqual({
      type: "union",
      unionTypes: [{ type: "mediaReference" }, { type: "null" }],
    });
  });

  it("converts a map to an entrySet, recursing into both sides", () => {
    expect(
      convert(
        {
          type: "map",
          map: { keysType: STRING, valuesType: INTEGER },
        } as IDataType,
      ),
    ).toEqual({
      type: "entrySet",
      keyType: { type: "string" },
      valueType: { type: "integer" },
    });
  });

  it("converts an anonymous custom type to a struct", () => {
    expect(
      convert(
        {
          type: "anonymousCustomType",
          anonymousCustomType: {
            fields: { test: STRING },
            fieldMetadata: { test: { required: true } },
          },
        } as IDataType,
      ),
    ).toEqual({
      type: "struct",
      fields: [{ name: "test", fieldType: { type: "string" } }],
    });
  });

  it("treats an anonymous custom type field as required when fieldMetadata is absent", () => {
    expect(
      convert(
        {
          type: "anonymousCustomType",
          anonymousCustomType: { fields: { test: STRING } },
        } as IDataType,
      ),
    ).toEqual({
      type: "struct",
      fields: [{ name: "test", fieldType: { type: "string" } }],
    });
  });

  it("wraps an optional custom type field in a union with null", () => {
    expect(
      convert(
        {
          type: "anonymousCustomType",
          anonymousCustomType: {
            fields: { test: STRING },
            fieldMetadata: { test: { required: false } },
          },
        } as IDataType,
      ),
    ).toEqual({
      type: "struct",
      fields: [{
        name: "test",
        fieldType: {
          type: "union",
          unionTypes: [{ type: "string" }, { type: "null" }],
        },
      }],
    });
  });

  it("resolves a named custom type through the customTypes map", () => {
    expect(
      convert(
        {
          type: "functionCustomType",
          functionCustomType: "some-uuid",
        } as IDataType,
        {
          "some-uuid": {
            fields: { test: STRING, testTwo: INTEGER },
            fieldMetadata: {
              test: { required: true },
              testTwo: { required: true },
            },
          },
        },
      ),
    ).toEqual({
      type: "struct",
      fields: [
        { name: "test", fieldType: { type: "string" } },
        { name: "testTwo", fieldType: { type: "integer" } },
      ],
    });
  });

  it("still reports genuinely unsupported data types", () => {
    expect(() => convert({ type: "vector" } as unknown as IDataType)).toThrow(
      "Unsupported data type: vector",
    );
  });
});
