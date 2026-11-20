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

import { createValidationIssueCollector } from "../validation.js";
import {
  isValidInputApiName,
  validateInputApiName,
} from "./InputApiNameValidator.js";

it("collects an input name issue at the supplied path", () => {
  const collector = createValidationIssueCollector();
  const path = ["inputs", 0, "apiName"] as const;
  validateInputApiName("archive", collector, path);
  expect(collector.throwIfAnyIssues).not.toThrow();

  validateInputApiName("on", collector, path);
  expect(collector.throwIfAnyIssues).toThrowError(
    expect.objectContaining({
      issues: [
        {
          code: "invalid_api_name",
          message: "Invalid input API name: on",
          path,
          suggestion:
            "Use an NFKC-normalized Unicode identifier of 1–100 code points. Leading _ is allowed; YAML keywords are not.",
        },
      ],
    }),
  );
});

it.each([
  "archive",
  "a_123_x",
  "_",
  "_8propertyType",
  "object",
  "rid",
  "café",
  "北京",
  "a\u0305",
  "online",
  "a".repeat(100),
  "𠀋".repeat(100),
])("accepts Marketplace input API name %j", (apiName) => {
  expect(isValidInputApiName(apiName)).toBe(true);
});

it.each([
  "",
  " ",
  "invalid-name",
  "1invalid",
  "users.id",
  "region:name",
  "my region",
  " archive",
  "archive ",
  "archive\n",
  "archive\r",
  "archive\u2028",
  "a".repeat(101),
  "𠀋".repeat(101),
  "ﬁ",
  "cafe\u0301",
])("rejects invalid Marketplace input API name %j", (apiName) => {
  expect(isValidInputApiName(apiName)).toBe(false);
});

it.each(["y", "n", "yes", "no", "true", "false", "on", "off", "null"])(
  "rejects YAML keyword %j in any casing but accepts its escaped form",
  (keyword) => {
    for (const apiName of [
      keyword,
      keyword.toUpperCase(),
      keyword[0].toUpperCase() + keyword.slice(1),
    ]) {
      expect(isValidInputApiName(apiName)).toBe(false);
      expect(isValidInputApiName(`_${apiName}`)).toBe(true);
    }
  },
);
