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

import { beforeEach, describe, expect, it } from "vitest";
import type { DataType } from "../../spec";
import { generateType } from "../types";

describe("generateTypes", () => {
  let referenceSet: Set<string>;

  beforeEach(() => {
    referenceSet = new Set<string>();
  });

  it("should generate a string for a primitive string type", () => {
    const dataType: DataType = {
      type: "builtin",
      builtin: {
        type: "string",
        string: {},
      },
    };

    expect(generateType(dataType, referenceSet)).toBe("string");
  });

  it("should generate a string for a primitive rid type", () => {
    const dataType: DataType = {
      type: "builtin",
      builtin: {
        type: "rid",
        rid: {},
      },
    };

    expect(generateType(dataType, referenceSet)).toBe("string");
  });

  it("should generate a string for a primitive datetime type", () => {
    const dataType: DataType = {
      type: "builtin",
      builtin: {
        type: "datetime",
        datetime: {},
      },
    };

    expect(generateType(dataType, referenceSet)).toBe("string");
  });

  it("should generate a number for a primitive integer type", () => {
    const dataType: DataType = {
      type: "builtin",
      builtin: {
        type: "integer",
        integer: {},
      },
    };

    expect(generateType(dataType, referenceSet)).toBe("number");
  });

  it("should generate a number for a primitive double type", () => {
    const dataType: DataType = {
      type: "builtin",
      builtin: {
        type: "double",
        double: {},
      },
    };

    expect(generateType(dataType, referenceSet)).toBe("number");
  });

  it("should generate a string for a primitive uuid type", () => {
    const dataType: DataType = {
      type: "builtin",
      builtin: {
        type: "uuid",
        uuid: {},
      },
    };

    expect(generateType(dataType, referenceSet)).toBe("string");
  });

  it("should generate a any for a primitive any type", () => {
    const dataType: DataType = {
      type: "builtin",
      builtin: {
        type: "any",
        any: {},
      },
    };

    expect(generateType(dataType, referenceSet)).toBe("any");
  });

  it("should generate a boolean for a primitive boolean type", () => {
    const dataType: DataType = {
      type: "builtin",
      builtin: {
        type: "boolean",
        boolean: {},
      },
    };

    expect(generateType(dataType, referenceSet)).toBe("boolean");
  });

  it("should generate an object for an object type", () => {
    const dataType: DataType = {
      type: "object",
      object: {
        properties: {
          name: {
            type: {
              type: "builtin",
              builtin: {
                type: "string",
                string: {},
              },
            },
            safety: "SAFE",
            documentation: {},
          },
          optionalType: {
            type: {
              type: "optional",
              optional: {
                subType: {
                  type: "builtin",
                  builtin: {
                    type: "string",
                    string: {},
                  },
                },
              },
            },
            safety: "SAFE",
            documentation: {},
          },
        },
      },
    };

    expect(generateType(dataType, referenceSet)).toBe(
      "{ name: string; optionalType?: string; }",
    );
  });

  it("should generate a type union for a union type", () => {
    const dataType: DataType = {
      type: "union",
      union: {
        discriminator: "type",
        subTypes: {
          foo: "Foo",
          bar: "Bar",
        },
      },
    };

    expect(generateType(dataType, referenceSet)).toBe(
      "(Foo & { type: \"foo\" }) | (Bar & { type: \"bar\" })",
    );
  });

  it("should generate a typeunion for an enum type", () => {
    const dataType: DataType = {
      type: "enum",
      enum: {
        values: ["A", "B", "C"],
      },
    };

    expect(generateType(dataType, referenceSet)).toBe("'A' | 'B' | 'C'");
  });

  it("should generate a ReadableStream<UintArray> for a binary type", () => {
    const dataType: DataType = {
      type: "binary",
      binary: {
        mediaType: "application/octet-stream",
      },
    };

    expect(generateType(dataType, referenceSet)).toBe(
      "ReadableStream<Uint8Array> | Blob",
    );
  });

  it("should generate an any for an async operation type", () => {
    const dataType: DataType = {
      type: "asyncOperation",
      asyncOperation: {
        operationType: "getData",
        resultType: "Data",
        stageType: "Stage",
      },
    };

    expect(generateType(dataType, referenceSet)).toBe("any");
  });

  it("should generate a optional for an optional type", () => {
    const dataType: DataType = {
      type: "optional",
      optional: {
        subType: {
          type: "builtin",
          builtin: {
            type: "string",
            string: {},
          },
        },
      },
    };

    expect(generateType(dataType, referenceSet)).toBe("string");
  });

  it("should generate a string for a list type", () => {
    const dataType: DataType = {
      type: "list",
      list: {
        subType: {
          type: "builtin",
          builtin: {
            type: "string",
            string: {},
          },
        },
      },
    };

    expect(generateType(dataType, referenceSet)).toBe("Array<string>");
  });

  it("should generate a type reference for a reference type", () => {
    const dataType: DataType = {
      type: "reference",
      reference: "SomeType",
    };

    expect(generateType(dataType, referenceSet)).toBe("SomeType");
    expect(referenceSet.has("SomeType")).toBeTruthy();
  });

  it("should generate a Record for a map type", () => {
    const dataType: DataType = {
      type: "map",
      map: {
        keyType: {
          type: "builtin",
          builtin: {
            type: "string",
            string: {},
          },
        },
        valueType: {
          type: "builtin",
          builtin: {
            type: "long",
            long: {},
          },
        },
      },
    };

    expect(generateType(dataType, referenceSet)).toBe("Record<string, number>");
  });

  it("should generate an any for an external type", () => {
    const dataType: DataType = {
      type: "external",
      external: "ExternalType",
    };

    expect(generateType(dataType, referenceSet)).toBe("any");
  });
});
