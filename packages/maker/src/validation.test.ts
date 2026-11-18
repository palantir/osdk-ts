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
  type MakerValidationIssueCollector,
  parseModel,
  throwIfAnyValidationIssues,
} from "./validation.js";

it("collects failed checks with default or structured issues", () => {
  const collector = createValidationIssueCollector();
  const issue = {
    code: "invalid_format",
    message: "Invalid property.",
    path: ["properties", "file"],
    suggestion: "Use a supported property type.",
  };

  collector.check(true, "Ignored check");
  collector.check("truthy", issue);
  expect(collector.throwIfAnyIssues).not.toThrow();

  collector.check(false, "Invalid definition.");
  collector.check(undefined, issue);
  expect(collector.throwIfAnyIssues).toThrowError(
    expect.objectContaining({
      name: "MakerValidationError",
      issues: [
        { code: "validation_error", message: "Invalid definition.", path: [] },
        issue,
      ],
    }),
  );
  expect(collector.throwIfAnyIssues).toThrowError(MakerValidationError);
  expect(collector.throwIfAnyIssues).toThrowError(
    '[validation_error] Invalid definition.\n$["properties"]["file"] [invalid_format] Invalid property.\n  Use a supported property type.',
  );

  expect(() =>
    createValidationIssueCollector().throwIfAnyIssues(),
  ).not.toThrow();
});

it("throws a failed assertion even when no earlier issues were collected", () => {
  const collector: MakerValidationIssueCollector =
    createValidationIssueCollector();
  expect(() => collector.assert(false, "Missing prerequisite.")).toThrowError(
    expect.objectContaining({
      name: "MakerValidationError",
      issues: [
        {
          code: "validation_error",
          message: "Missing prerequisite.",
          path: [],
        },
      ],
    }),
  );
});

it("only throws collected issues when an assertion fails", () => {
  const collector: MakerValidationIssueCollector =
    createValidationIssueCollector();
  const terminalIssue = {
    code: "missing_source",
    message: "Missing source.",
    path: [],
  };
  collector.check(false, "Invalid parameter.");
  collector.assert("truthy", "Ignored assertion.");
  expect(() => collector.assert(undefined, terminalIssue)).toThrowError(
    expect.objectContaining({
      name: "MakerValidationError",
      issues: [
        { code: "validation_error", message: "Invalid parameter.", path: [] },
        terminalIssue,
      ],
    }),
  );
});

it("keeps a thrown assertion's issues consistent with its message when the collector is reused", () => {
  const collector: MakerValidationIssueCollector =
    createValidationIssueCollector();
  let error: unknown;
  try {
    collector.assert(false, "Missing source.");
  } catch (caught) {
    error = caught;
  }

  collector.check(false, "Invalid parameter.");
  expect(() => collector.assert(false, "Missing target.")).toThrowError(
    MakerValidationError,
  );
  expect(error).toBeInstanceOf(MakerValidationError);
  expect(error).toMatchObject({
    message: "[validation_error] Missing source.",
    issues: [
      { code: "validation_error", message: "Missing source.", path: [] },
    ],
  });
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
