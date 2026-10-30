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
import { z } from "zod/v4";

import {
  createValidationIssueCollector,
  formatValidationPath,
  MakerValidationError,
  parseModel,
  throwIfAnyValidationIssues,
} from "./validation.js";

it("collects failed checks with default or structured issues", () => {
  const collector = createValidationIssueCollector();
  const { addIssue, throwIfAnyIssues } = collector;
  const issue = {
    code: "invalid_format",
    message: "Invalid property.",
    path: ["properties", "file"],
    suggestion: "Use a supported property type.",
  };

  addIssue(true, "Ignored check");
  addIssue("truthy", issue);
  expect(throwIfAnyIssues).not.toThrow();

  addIssue(false, "Invalid definition.");
  addIssue(undefined, issue);
  expect(throwIfAnyIssues).toThrowError(
    expect.objectContaining({
      name: "MakerValidationError",
      issues: [
        { code: "validation_error", message: "Invalid definition.", path: [] },
        issue,
      ],
    }),
  );
  expect(throwIfAnyIssues).toThrowError(MakerValidationError);
  expect(throwIfAnyIssues).toThrowError(
    '[validation_error] Invalid definition.\n$["properties"]["file"] [invalid_format] Invalid property.\n  Use a supported property type.',
  );

  expect(() =>
    createValidationIssueCollector().throwIfAnyIssues(),
  ).not.toThrow();
});

it("formats model-relative paths with escaped keys and numeric indices", () => {
  expect(formatValidationPath([])).toBe("$");
  expect(formatValidationPath(["items", 2, 'a."b'])).toBe(
    '$["items"][2]["a.\\"b"]',
  );
});

it("lists allowed discriminator values at the invalid field's path", () => {
  const schema = z.strictObject({
    items: z.array(
      z.discriminatedUnion("kind", [
        z.strictObject({ kind: z.literal(["image", "video"]) }),
        z.strictObject({ kind: z.literal("document") }),
      ]),
    ),
  });

  expect(() =>
    parseModel(schema, { items: [{ kind: "unknown" }] }),
  ).toThrowError(
    expect.objectContaining({
      name: "MakerValidationError",
      issues: [
        {
          code: "invalid_union",
          message:
            'Expected "kind" to be one of: "image", "video", "document".',
          path: ["items", 0, "kind"],
        },
      ],
    }),
  );
});

it("identifies each unknown field while preserving other structural issues", () => {
  const schema = z.strictObject({
    items: z.array(z.strictObject({ count: z.number() })),
  });
  expect(() =>
    parseModel(schema, {
      items: [{ count: "invalid", extra: true, typo: 1 }],
    }),
  ).toThrowError(
    expect.objectContaining({
      name: "MakerValidationError",
      issues: [
        {
          code: "invalid_type",
          message: expect.any(String),
          path: ["items", 0, "count"],
        },
        {
          code: "unrecognized_keys",
          message: "Unrecognized field: extra",
          path: ["items", 0, "extra"],
          suggestion: "Remove this field or check its spelling.",
        },
        {
          code: "unrecognized_keys",
          message: "Unrecognized field: typo",
          path: ["items", 0, "typo"],
          suggestion: "Remove this field or check its spelling.",
        },
      ],
    }),
  );
});

it("accepts empty validation groups", () => {
  expect(() => throwIfAnyValidationIssues()).not.toThrow();
  expect(() => throwIfAnyValidationIssues([], [])).not.toThrow();
});

it("combines readonly issue groups in order without losing diagnostic details", () => {
  const modelIssues = Object.freeze([
    {
      code: "invalid_format",
      message: "Invalid input format.",
      path: ["formats", 1],
      suggestion: "Choose a supported format.",
    },
  ]);
  const registrationIssues = Object.freeze([
    {
      code: "duplicate_resource",
      message: "Resource already defined.",
      path: ["apiName"],
    },
  ]);

  expect(() =>
    throwIfAnyValidationIssues(modelIssues, [], registrationIssues),
  ).toThrowError(
    expect.objectContaining({
      name: "MakerValidationError",
      issues: [...modelIssues, ...registrationIssues],
    }),
  );
  expect(() => throwIfAnyValidationIssues(modelIssues)).toThrow(
    MakerValidationError,
  );
});
