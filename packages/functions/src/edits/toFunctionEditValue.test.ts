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

import { describe, expect, it } from "vitest";

import {
  extractCipherTextValue,
  toFunctionEditValue,
} from "./toFunctionEditValue.js";

const value = "CIPHER::ri.test::abc==::CIPHER";

// A minimal structural CipherText — a fetched cipherText property behaves the
// same way (getValue returns the encrypted value).
const existingCipherText = {
  decrypt: () => Promise.resolve("plaintext"),
  getValue: () => value,
};

describe(extractCipherTextValue, () => {
  it("reduces a reused CipherText to its value", () => {
    expect(extractCipherTextValue(existingCipherText)).toEqual({
      ciphertext: value,
    });
  });

  it("passes a plaintext cipherText input through unchanged", () => {
    expect(extractCipherTextValue({ plaintext: "secret" })).toEqual({
      plaintext: "secret",
    });
    expect(
      extractCipherTextValue({ plaintext: "secret", strategy: "X" })
    ).toEqual({ plaintext: "secret", strategy: "X" });
  });

  it("passes primitives, nullish, and plain structs through unchanged", () => {
    expect(extractCipherTextValue(1)).toBe(1);
    expect(extractCipherTextValue("hello")).toBe("hello");
    expect(extractCipherTextValue(null)).toBeNull();
    expect(extractCipherTextValue(undefined)).toBeUndefined();
    const struct = { a: 1, plaintext: "not encrypted" };
    expect(extractCipherTextValue(struct)).toEqual(struct);
  });

  it("normalizes each element of a multiplicity array", () => {
    expect(
      extractCipherTextValue([existingCipherText, { plaintext: "s" }])
    ).toEqual([{ ciphertext: value }, { plaintext: "s" }]);
  });
});

describe(toFunctionEditValue, () => {
  it("normalizes cipherText properties and preserves the rest", () => {
    expect(
      toFunctionEditValue({
        id: 1,
        name: "hi",
        secret: existingCipherText,
        secret2: { plaintext: "p" },
        $objectType: "Foo",
      })
    ).toEqual({
      id: 1,
      name: "hi",
      secret: { ciphertext: value },
      secret2: { plaintext: "p" },
      $objectType: "Foo",
    });
  });
});
