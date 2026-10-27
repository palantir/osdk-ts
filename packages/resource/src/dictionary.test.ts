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

import { expect, it } from "vitest";

import { createDatasetReference } from "./resourceReference.js";
import { tabularSchemaSchema } from "./schemas.js";

it.each(["__proto__", "constructor"])(
  "preserves column and nested struct field names: %s",
  (name) => {
    const input = {
      columns: {
        [name]: { type: "struct", fields: { [name]: { type: "string" } } },
      },
    };
    const serialized = JSON.stringify(input);
    const schema = tabularSchemaSchema.parse(JSON.parse(serialized));
    const reference = createDatasetReference(
      { type: "apiName", apiName: "employees" },
      { schema },
    );
    expect(reference.schema).toEqual(input);
    expect(JSON.stringify(reference.schema)).toBe(serialized);
    expect(Object.getPrototypeOf(reference.schema.columns)).toBe(
      Object.prototype,
    );
    const column = reference.schema.columns[name];
    expect(column.type).toBe("struct");
    if (column.type === "struct") {
      expect(Object.hasOwn(column.fields, name)).toBe(true);
      expect(Object.getPrototypeOf(column.fields)).toBe(Object.prototype);
    }
  },
);

it.each(["__proto__", "constructor"])(
  "validates values under special keys and retains dictionary error paths: %s",
  (name) => {
    const result = tabularSchemaSchema.safeParse({
      columns: {
        [name]: {
          type: "struct",
          fields: { [name]: { type: "string", nullable: "invalid" } },
        },
      },
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].path).toEqual([
        "columns",
        name,
        "fields",
        name,
        "nullable",
      ]);
    }
  },
);
