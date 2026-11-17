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

import { expect } from "vitest";

import {
  MakerValidationError,
  type MakerValidationIssue,
} from "../../validation.js";
import type { LinkTypeDefinition } from "../links/LinkType.js";

/** Uses forward references so defining the link does not require registered objects. */
export function createLinkDefinition(side: "one" | "many"): LinkTypeDefinition {
  const source = {
    object: "com.palantir.Source",
    metadata: { apiName: "targets" },
  };
  return {
    apiName: "sourceToTarget",
    ...(side === "one"
      ? { one: source, manyForeignKeyProperty: "id" }
      : { many: source }),
    toMany: {
      object: "com.palantir.Target",
      metadata: { apiName: "sources" },
    },
  };
}

/** Checks issue count and order; strings match message substrings, objects match selected fields. */
export function expectValidationIssues(
  validate: () => unknown,
  issues: readonly (string | Partial<MakerValidationIssue>)[],
): void {
  let thrown: unknown;
  try {
    validate();
  } catch (error) {
    thrown = error;
  }
  expect(thrown).toBeInstanceOf(MakerValidationError);
  expect(thrown).toMatchObject({
    issues: issues.map((issue) =>
      typeof issue === "string"
        ? { message: expect.stringContaining(issue) }
        : issue,
    ),
  });
}
