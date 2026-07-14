/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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
import { lowercase } from "./lowercase.js";

describe(lowercase, () => {
  it.each([
    ["My-App", "my-app"],
    ["UPPER", "upper"],
    ["@Foundry/My-Package", "@foundry/my-package"],
    ["my-osdk-app", "my-osdk-app"],
    ["", ""],
  ])(`lowercases %j to %j`, (input, expected) => {
    expect(lowercase(input)).toBe(expected);
  });

  it.each<[string, unknown]>([
    ["undefined", undefined],
    ["null", null],
    ["a number", 123],
    ["a boolean", true],
    ["an object", {}],
    ["an array", ["Foo"]],
  ])(`throws when the argument is %s`, (_label, value) => {
    expect(() => lowercase(value)).toThrowError(
      /requires a string argument/,
    );
  });
});
