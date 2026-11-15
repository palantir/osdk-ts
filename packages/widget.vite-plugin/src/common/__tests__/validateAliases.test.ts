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

import { describe, expect, test } from "vitest";

import { validateAliases } from "../validateAliases.js";

describe("validateAliases", () => {
  test("accepts unique aliases", () => {
    expect(() =>
      validateAliases({
        datasets: [{ alias: "employees" }, { alias: "offices" }],
      }),
    ).not.toThrow();
  });

  test("accepts no resources", () => {
    expect(() => validateAliases({ datasets: [] })).not.toThrow();
  });

  test("accepts camelCase aliases of up to 50 characters", () => {
    expect(() =>
      validateAliases({
        datasets: [{ alias: "employeeOffices2024" }, { alias: "a".repeat(50) }],
      }),
    ).not.toThrow();
  });

  test.each([
    {
      name: "alias is missing",
      alias: undefined,
      error: 'Resource at datasets[1] must have a non-empty "alias"',
    },
    {
      name: "alias is not a string",
      alias: 123,
      error: 'Resource at datasets[1] must have a non-empty "alias"',
    },
    {
      name: "alias is empty",
      alias: "",
      error: 'Resource at datasets[1] must have a non-empty "alias"',
    },
    {
      name: "alias is blank",
      alias: "  ",
      error:
        'Resource alias "  " at datasets[1] does not match allowed pattern (must be camelCase)',
    },
    {
      name: "alias is longer than 50 characters",
      alias: "a".repeat(51),
      error: `Resource alias "${"a".repeat(51)}" at datasets[1] length can be at most 50 characters`,
    },
    {
      name: "alias starts with an uppercase letter",
      alias: "Employees",
      error:
        'Resource alias "Employees" at datasets[1] does not match allowed pattern (must be camelCase)',
    },
    {
      name: "alias is kebab-case",
      alias: "employee-offices",
      error:
        'Resource alias "employee-offices" at datasets[1] does not match allowed pattern (must be camelCase)',
    },
    {
      name: "alias starts with a digit",
      alias: "1employees",
      error:
        'Resource alias "1employees" at datasets[1] does not match allowed pattern (must be camelCase)',
    },
  ])("throws when $name", ({ alias, error }) => {
    expect(() =>
      validateAliases({ datasets: [{ alias: "employees" }, { alias }] }),
    ).toThrow(error);
  });

  test("throws when an alias is duplicated", () => {
    expect(() =>
      validateAliases({
        datasets: [
          { alias: "employees" },
          { alias: "offices" },
          { alias: "employees" },
        ],
      }),
    ).toThrow(
      'Resource alias "employees" is used by more than one resource (datasets[0] and datasets[2]). Aliases must be unique across all resources.',
    );
  });
});
