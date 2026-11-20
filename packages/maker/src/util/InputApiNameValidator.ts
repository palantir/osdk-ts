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

import type {
  MakerValidationIssue,
  MakerValidationIssueCollector,
} from "../validation.js";

const INPUT_API_NAME_PATTERN = /^[_\p{ID_Start}]\p{ID_Continue}{0,99}$/u;

// YAML 1.1 and 1.2 can interpret these keys as booleans or null.
const RESERVED_YAML_KEYWORDS = new Set([
  "y",
  "n",
  "yes",
  "no",
  "true",
  "false",
  "on",
  "off",
  "null",
]);

/** Marketplace input names are unqualified, NFKC-normalized Unicode identifiers of 1–100 code points. */
export function isValidInputApiName(apiName: string): boolean {
  return (
    INPUT_API_NAME_PATTERN.test(apiName) &&
    apiName.normalize("NFKC") === apiName &&
    !RESERVED_YAML_KEYWORDS.has(apiName.toLowerCase())
  );
}

export function validateInputApiName(
  apiName: string,
  collector: MakerValidationIssueCollector,
  path: MakerValidationIssue["path"],
): void {
  collector.check(isValidInputApiName(apiName), {
    code: "invalid_api_name",
    message: `Invalid input API name: ${apiName}`,
    path,
    suggestion:
      "Use an NFKC-normalized Unicode identifier of 1–100 code points. Leading _ is allowed; YAML keywords are not.",
  });
}
