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

import type { OntologyDataType } from "@osdk/foundry.ontologies";
import { describe, expect, it } from "vitest";
import {
  isInterfaceActionParam,
  isMediaReference,
  matchesOntologyDataType,
} from "./validateAction.js";

describe("matchesOntologyDataType", () => {
  describe("any type", () => {
    it("should return true for any value", () => {
      const dataType: OntologyDataType = { type: "any" };

      expect(matchesOntologyDataType(dataType, undefined)).toBe(true);
      expect(matchesOntologyDataType(dataType, null)).toBe(true);
      expect(matchesOntologyDataType(dataType, "string")).toBe(true);
      expect(matchesOntologyDataType(dataType, 123)).toBe(true);
      expect(matchesOntologyDataType(dataType, true)).toBe(true);
      expect(matchesOntologyDataType(dataType, {})).toBe(true);
      expect(matchesOntologyDataType(dataType, [])).toBe(true);
    });
  });

  describe("boolean type", () => {
    const dataType: OntologyDataType = { type: "boolean" };

    it("should return true for boolean values", () => {
      expect(matchesOntologyDataType(dataType, true)).toBe(true);
      expect(matchesOntologyDataType(dataType, false)).toBe(true);
    });

    it("should return false for non-boolean values", () => {
      expect(matchesOntologyDataType(dataType, "true")).toBe(false);
      expect(matchesOntologyDataType(dataType, 1)).toBe(false);
      expect(matchesOntologyDataType(dataType, 0)).toBe(false);
      expect(matchesOntologyDataType(dataType, null)).toBe(false);
      expect(matchesOntologyDataType(dataType, undefined)).toBe(false);
    });
  });

  describe("string type", () => {
    const dataType: OntologyDataType = { type: "string" };

    it("should return true for string values", () => {
      expect(matchesOntologyDataType(dataType, "")).toBe(true);
      expect(matchesOntologyDataType(dataType, "hello")).toBe(true);
      expect(matchesOntologyDataType(dataType, "123")).toBe(true);
    });

    it("should return false for non-string values", () => {
      expect(matchesOntologyDataType(dataType, 123)).toBe(false);
      expect(matchesOntologyDataType(dataType, true)).toBe(false);
      expect(matchesOntologyDataType(dataType, null)).toBe(false);
      expect(matchesOntologyDataType(dataType, undefined)).toBe(false);
      expect(matchesOntologyDataType(dataType, {})).toBe(false);
    });
  });

  describe("integer type", () => {
    const dataType: OntologyDataType = { type: "integer" };

    it("should return true for valid integer values within bounds", () => {
      expect(matchesOntologyDataType(dataType, 0)).toBe(true);
      expect(matchesOntologyDataType(dataType, 1)).toBe(true);
      expect(matchesOntologyDataType(dataType, -1)).toBe(true);
      expect(matchesOntologyDataType(dataType, 2147483647)).toBe(true); // max int
      expect(matchesOntologyDataType(dataType, -2147483648)).toBe(true); // min int
    });

    it("should return false for non-integer values", () => {
      expect(matchesOntologyDataType(dataType, 1.5)).toBe(false);
      expect(matchesOntologyDataType(dataType, "123")).toBe(false);
      expect(matchesOntologyDataType(dataType, true)).toBe(false);
      expect(matchesOntologyDataType(dataType, null)).toBe(false);
    });

    it("should return false for integers out of bounds", () => {
      expect(matchesOntologyDataType(dataType, 2147483648)).toBe(false); // max + 1
      expect(matchesOntologyDataType(dataType, -2147483649)).toBe(false); // min - 1
    });
  });

  describe("long type", () => {
    const dataType: OntologyDataType = { type: "long" };

    it("should return true for valid long values within safe integer bounds", () => {
      expect(matchesOntologyDataType(dataType, 0)).toBe(true);
      expect(matchesOntologyDataType(dataType, Number.MAX_SAFE_INTEGER)).toBe(
        true,
      );
      expect(matchesOntologyDataType(dataType, Number.MIN_SAFE_INTEGER)).toBe(
        true,
      );
    });

    it("should return false for non-integer values", () => {
      expect(matchesOntologyDataType(dataType, 1.5)).toBe(false);
      expect(matchesOntologyDataType(dataType, "123")).toBe(false);
    });

    it("should return false for values outside safe integer range", () => {
      expect(
        matchesOntologyDataType(dataType, Number.MAX_SAFE_INTEGER + 1),
      ).toBe(false);
      expect(
        matchesOntologyDataType(dataType, Number.MIN_SAFE_INTEGER - 1),
      ).toBe(false);
    });
  });

  describe("double type", () => {
    const dataType: OntologyDataType = { type: "double" };

    it("should return true for valid double values", () => {
      expect(matchesOntologyDataType(dataType, 0)).toBe(true);
      expect(matchesOntologyDataType(dataType, 1.5)).toBe(true);
      expect(matchesOntologyDataType(dataType, -1.5)).toBe(true);
      expect(matchesOntologyDataType(dataType, Number.MAX_VALUE)).toBe(true);
      expect(matchesOntologyDataType(dataType, -Number.MAX_VALUE)).toBe(true);
    });

    it("should return false for non-number values", () => {
      expect(matchesOntologyDataType(dataType, "123")).toBe(false);
      expect(matchesOntologyDataType(dataType, true)).toBe(false);
      expect(matchesOntologyDataType(dataType, null)).toBe(false);
    });

    it("should return false for Infinity", () => {
      expect(matchesOntologyDataType(dataType, Infinity)).toBe(false);
      expect(matchesOntologyDataType(dataType, -Infinity)).toBe(false);
    });
  });

  describe("float type", () => {
    const dataType: OntologyDataType = { type: "float" };

    it("should return true for valid float values within bounds", () => {
      expect(matchesOntologyDataType(dataType, 0)).toBe(true);
      expect(matchesOntologyDataType(dataType, 1.5)).toBe(true);
      expect(matchesOntologyDataType(dataType, -1.5)).toBe(true);
      expect(matchesOntologyDataType(dataType, 3.4028235e38)).toBe(true);
      expect(matchesOntologyDataType(dataType, -3.4028235e38)).toBe(true);
    });

    it("should return false for values outside float bounds", () => {
      expect(matchesOntologyDataType(dataType, 3.5e38)).toBe(false);
      expect(matchesOntologyDataType(dataType, -3.5e38)).toBe(false);
    });
  });

  describe("byte type", () => {
    const dataType: OntologyDataType = { type: "byte" };

    it("should return true for valid byte values", () => {
      expect(matchesOntologyDataType(dataType, 0)).toBe(true);
      expect(matchesOntologyDataType(dataType, 127)).toBe(true);
      expect(matchesOntologyDataType(dataType, -128)).toBe(true);
    });

    it("should return false for values outside byte bounds", () => {
      expect(matchesOntologyDataType(dataType, 128)).toBe(false);
      expect(matchesOntologyDataType(dataType, -129)).toBe(false);
    });

    it("should return false for non-integer values", () => {
      expect(matchesOntologyDataType(dataType, 1.5)).toBe(true); // Note: isInBounds doesn't check for integers for byte
    });
  });

  describe("short type", () => {
    const dataType: OntologyDataType = { type: "short" };

    it("should return true for valid short values", () => {
      expect(matchesOntologyDataType(dataType, 0)).toBe(true);
      expect(matchesOntologyDataType(dataType, 32767)).toBe(true);
      expect(matchesOntologyDataType(dataType, -32768)).toBe(true);
    });

    it("should return false for values outside short bounds", () => {
      expect(matchesOntologyDataType(dataType, 32768)).toBe(false);
      expect(matchesOntologyDataType(dataType, -32769)).toBe(false);
    });
  });

  describe("date type", () => {
    const dataType: OntologyDataType = { type: "date" };

    it("should return true for valid date strings", () => {
      expect(matchesOntologyDataType(dataType, "2025-01-15")).toBe(true);
      expect(matchesOntologyDataType(dataType, "2000-12-31")).toBe(true);
      expect(matchesOntologyDataType(dataType, "1970-01-01")).toBe(true);
    });

    it("should return false for invalid date strings", () => {
      expect(matchesOntologyDataType(dataType, "2025-13-01")).toBe(false); // invalid month
      expect(matchesOntologyDataType(dataType, "2025-01-32")).toBe(false); // invalid day
      expect(matchesOntologyDataType(dataType, "2025/01/15")).toBe(false); // wrong format
      expect(matchesOntologyDataType(dataType, "01-15-2025")).toBe(false); // wrong format
      expect(matchesOntologyDataType(dataType, "not a date")).toBe(false);
    });

    it("should return false for non-string values", () => {
      expect(matchesOntologyDataType(dataType, 123)).toBe(false);
      expect(matchesOntologyDataType(dataType, new Date())).toBe(false);
    });
  });

  describe("timestamp type", () => {
    const dataType: OntologyDataType = { type: "timestamp" };

    it("should return true for valid timestamp strings", () => {
      expect(matchesOntologyDataType(dataType, "2025-01-15T10:30:00Z")).toBe(
        true,
      );
      expect(
        matchesOntologyDataType(dataType, "2025-01-15T10:30:00.123Z"),
      ).toBe(true);
      expect(matchesOntologyDataType(dataType, "2025-01-15")).toBe(true);
    });

    it("should return false for invalid timestamp strings", () => {
      expect(matchesOntologyDataType(dataType, "not a timestamp")).toBe(false);
      expect(matchesOntologyDataType(dataType, "")).toBe(false);
    });

    it("should return false for non-string values", () => {
      expect(matchesOntologyDataType(dataType, 123)).toBe(false);
      expect(matchesOntologyDataType(dataType, new Date())).toBe(false);
    });
  });

  describe("decimal type", () => {
    const dataType: OntologyDataType = { type: "decimal" };

    it("should return true for valid decimal strings", () => {
      expect(matchesOntologyDataType(dataType, "0")).toBe(true);
      expect(matchesOntologyDataType(dataType, "123")).toBe(true);
      expect(matchesOntologyDataType(dataType, "123.456")).toBe(true);
      expect(matchesOntologyDataType(dataType, "-123.456")).toBe(true);
      expect(matchesOntologyDataType(dataType, "+123.456")).toBe(true);
      expect(matchesOntologyDataType(dataType, ".5")).toBe(true);
      expect(matchesOntologyDataType(dataType, "-.5")).toBe(true);
      expect(matchesOntologyDataType(dataType, "123.")).toBe(true);
    });

    it("should return true for valid decimal strings with scientific notation", () => {
      expect(matchesOntologyDataType(dataType, "1E10")).toBe(true);
      expect(matchesOntologyDataType(dataType, "1.5E10")).toBe(true);
      expect(matchesOntologyDataType(dataType, "1.5E+10")).toBe(true);
      expect(matchesOntologyDataType(dataType, "1.5E-10")).toBe(true);
      expect(matchesOntologyDataType(dataType, "-1.5E10")).toBe(true);
    });

    it("should return false for invalid decimal strings", () => {
      expect(matchesOntologyDataType(dataType, "abc")).toBe(false);
      expect(matchesOntologyDataType(dataType, "12.34.56")).toBe(false);
      expect(matchesOntologyDataType(dataType, "1.2.3E10")).toBe(false);
      expect(matchesOntologyDataType(dataType, "")).toBe(false);
      expect(matchesOntologyDataType(dataType, "E10")).toBe(false);
      expect(matchesOntologyDataType(dataType, "1E")).toBe(false);
      expect(matchesOntologyDataType(dataType, "1e10")).toBe(false);
    });

    it("should return false for non-string values", () => {
      expect(matchesOntologyDataType(dataType, 123.456)).toBe(false);
      expect(matchesOntologyDataType(dataType, 123)).toBe(false);
      expect(matchesOntologyDataType(dataType, true)).toBe(false);
      expect(matchesOntologyDataType(dataType, null)).toBe(false);
      expect(matchesOntologyDataType(dataType, undefined)).toBe(false);
      expect(matchesOntologyDataType(dataType, {})).toBe(false);
    });
  });

  describe("marking type", () => {
    const dataType: OntologyDataType = { type: "marking" };

    it("should return true for string values", () => {
      expect(matchesOntologyDataType(dataType, "marking1")).toBe(true);
      expect(matchesOntologyDataType(dataType, "")).toBe(true);
    });

    it("should return false for non-string values", () => {
      expect(matchesOntologyDataType(dataType, 123)).toBe(false);
      expect(matchesOntologyDataType(dataType, null)).toBe(false);
    });
  });

  describe("object type", () => {
    const dataType: OntologyDataType = {
      type: "object",
      objectApiName: "Employee",
      objectTypeApiName: "Employee",
    };

    it("should return true for string (RID) values", () => {
      expect(matchesOntologyDataType(dataType, "ri.object.123")).toBe(true);
      expect(matchesOntologyDataType(dataType, "someId")).toBe(true);
    });

    it("should return true for objects with $primaryKey", () => {
      expect(matchesOntologyDataType(dataType, { $primaryKey: "123" })).toBe(
        true,
      );
      expect(
        matchesOntologyDataType(dataType, {
          $primaryKey: "123",
          name: "test",
        }),
      ).toBe(true);
    });

    it("should return false for objects without $primaryKey", () => {
      expect(matchesOntologyDataType(dataType, { name: "test" })).toBe(false);
      expect(matchesOntologyDataType(dataType, {})).toBe(false);
    });

    it("should return false for other value types", () => {
      expect(matchesOntologyDataType(dataType, 123)).toBe(false);
      expect(matchesOntologyDataType(dataType, true)).toBe(false);
      expect(matchesOntologyDataType(dataType, null)).toBe(false);
    });
  });

  describe("objectSet type", () => {
    const dataType: OntologyDataType = { type: "objectSet" };

    it("should return true for RID strings", () => {
      expect(matchesOntologyDataType(dataType, "ri.objectSet.123")).toBe(true);
      expect(matchesOntologyDataType(dataType, "ri.anything.456")).toBe(true);
    });

    it("should return true for objects with objectSet property", () => {
      expect(
        matchesOntologyDataType(dataType, { objectSet: "definition" }),
      ).toBe(true);
    });

    it("should return false for non-RID strings", () => {
      expect(matchesOntologyDataType(dataType, "not a rid")).toBe(false);
      expect(matchesOntologyDataType(dataType, "objectSet")).toBe(false);
    });

    it("should return false for objects without objectSet property", () => {
      expect(matchesOntologyDataType(dataType, { name: "test" })).toBe(false);
    });
  });

  describe("array type", () => {
    it("should return true for arrays with matching item types", () => {
      const dataType: OntologyDataType = {
        type: "array",
        itemType: { type: "string" },
      };

      expect(matchesOntologyDataType(dataType, [])).toBe(true);
      expect(matchesOntologyDataType(dataType, ["a", "b", "c"])).toBe(true);
    });

    it("should return false for arrays with non-matching item types", () => {
      const dataType: OntologyDataType = {
        type: "array",
        itemType: { type: "string" },
      };

      expect(matchesOntologyDataType(dataType, [1, 2, 3])).toBe(false);
      expect(matchesOntologyDataType(dataType, ["a", 1, "c"])).toBe(false);
    });

    it("should work with nested arrays", () => {
      const dataType: OntologyDataType = {
        type: "array",
        itemType: {
          type: "array",
          itemType: { type: "integer" },
        },
      };

      expect(matchesOntologyDataType(dataType, [[1, 2], [3, 4]])).toBe(true);
      expect(matchesOntologyDataType(dataType, [[1, 2], ["a", "b"]])).toBe(
        false,
      );
    });

    it("should return false for non-array values", () => {
      const dataType: OntologyDataType = {
        type: "array",
        itemType: { type: "string" },
      };

      expect(matchesOntologyDataType(dataType, "not an array")).toBe(false);
      expect(matchesOntologyDataType(dataType, 123)).toBe(false);
      expect(matchesOntologyDataType(dataType, { length: 0 })).toBe(false);
    });
  });

  describe("cipherText type", () => {
    const dataType: OntologyDataType = { type: "cipherText" };

    it("should return true for valid CIPHER format", () => {
      expect(
        matchesOntologyDataType(
          dataType,
          "CIPHER::ri.channel.123::encrypted::CIPHER",
        ),
      ).toBe(true);
    });

    it("should return true for valid BELLASO format", () => {
      expect(
        matchesOntologyDataType(
          dataType,
          "BELLASO::ri.channel.123::encrypted::BELLASO",
        ),
      ).toBe(true);
    });

    it("should return true for valid BELLASO format without suffix", () => {
      expect(
        matchesOntologyDataType(dataType, "BELLASO::ri.channel.123::encrypted"),
      ).toBe(true);
    });

    it("should return false for invalid cipher format", () => {
      expect(matchesOntologyDataType(dataType, "CIPHER::channel::data")).toBe(
        false,
      ); // missing ri. prefix
      expect(
        matchesOntologyDataType(dataType, "CIPHER::ri.channel.123::"),
      ).toBe(false); // empty encrypted value
      expect(
        matchesOntologyDataType(
          dataType,
          "INVALID::ri.channel.123::data::INVALID",
        ),
      ).toBe(false);
    });

    it("should return false for non-string values", () => {
      expect(matchesOntologyDataType(dataType, 123)).toBe(false);
      expect(matchesOntologyDataType(dataType, null)).toBe(false);
    });
  });

  describe("binary type", () => {
    const dataType: OntologyDataType = { type: "binary" };

    it("should throw an error", () => {
      expect(() => matchesOntologyDataType(dataType, "data")).toThrow(
        "validateDataType: binary not implemented yet.",
      );
    });
  });

  describe("map type", () => {
    const dataType: OntologyDataType = {
      type: "map",
      keyType: { type: "string" },
      valueType: { type: "integer" },
    };

    it("should throw an error", () => {
      expect(() => matchesOntologyDataType(dataType, {})).toThrow(
        "matchesOntologyDataType: map not implemented yet.",
      );
    });
  });

  describe("set type", () => {
    const dataType: OntologyDataType = {
      type: "set",
      itemType: { type: "string" },
    };

    it("should throw an error", () => {
      expect(() => matchesOntologyDataType(dataType, new Set())).toThrow(
        "matchesOntologyDataType: set not implemented yet.",
      );
    });
  });

  describe("struct type", () => {
    const dataType: OntologyDataType = {
      type: "struct",
      fields: [],
    };

    it("should throw an error", () => {
      expect(() => matchesOntologyDataType(dataType, {})).toThrow(
        "matchesOntologyDataType: struct not implemented yet.",
      );
    });
  });

  describe("unsupported type", () => {
    const dataType: OntologyDataType = {
      type: "unsupported",
      unsupportedType: "someCustomType",
      params: {},
    };

    it("should throw an error", () => {
      expect(() => matchesOntologyDataType(dataType, "anything")).toThrow(
        "matchesOntologyDataType: unsupported not implemented yet.",
      );
    });
  });
});

describe("isMediaReference", () => {
  it("should return true for valid MediaReference objects", () => {
    const validMediaRef = {
      mimeType: "image/png",
      reference: {
        type: "mediaSetViewItem",
        mediaSetViewItem: {
          mediaSetRid: "ri.mediaset.123",
          mediaSetViewRid: "ri.mediasetview.456",
          mediaItemRid: "ri.mediaitem.789",
        },
      },
    };

    expect(isMediaReference(validMediaRef)).toBe(true);
  });

  it("should return false for objects missing required properties", () => {
    expect(isMediaReference({ mimeType: "image/png" })).toBe(false);
    expect(
      isMediaReference({
        reference: {
          type: "mediaSetViewItem",
          mediaSetViewItem: {},
        },
      }),
    ).toBe(false);
  });

  it("should return false for objects with incorrect reference type", () => {
    const invalidMediaRef = {
      mimeType: "image/png",
      reference: {
        type: "wrongType",
        mediaSetViewItem: {
          mediaSetRid: "ri.mediaset.123",
          mediaSetViewRid: "ri.mediasetview.456",
          mediaItemRid: "ri.mediaitem.789",
        },
      },
    };

    expect(isMediaReference(invalidMediaRef)).toBe(false);
  });
});

describe("isInterfaceActionParam", () => {
  it("should return true for valid interface action params with string primary key", () => {
    expect(
      isInterfaceActionParam({
        objectTypeApiName: "Employee",
        primaryKeyValue: "emp-123",
      }),
    ).toBe(true);
  });

  it("should return true for valid interface action params with number primary key", () => {
    expect(
      isInterfaceActionParam({
        objectTypeApiName: "Employee",
        primaryKeyValue: 123,
      }),
    ).toBe(true);
  });

  it("should return true for valid interface action params with boolean primary key", () => {
    expect(
      isInterfaceActionParam({
        objectTypeApiName: "Employee",
        primaryKeyValue: true,
      }),
    ).toBe(true);
  });

  it("should return false for objects missing objectTypeApiName", () => {
    expect(
      isInterfaceActionParam({
        primaryKeyValue: "123",
      }),
    ).toBe(false);
  });

  it("should return false for objects missing primaryKeyValue", () => {
    expect(
      isInterfaceActionParam({
        objectTypeApiName: "Employee",
      }),
    ).toBe(false);
  });

  it("should return false for objects with invalid primaryKeyValue type", () => {
    expect(
      isInterfaceActionParam({
        objectTypeApiName: "Employee",
        primaryKeyValue: {},
      }),
    ).toBe(false);

    expect(
      isInterfaceActionParam({
        objectTypeApiName: "Employee",
        primaryKeyValue: [],
      }),
    ).toBe(false);
  });
});
