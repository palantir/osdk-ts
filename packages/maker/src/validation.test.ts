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
  observeDefinitionFailures,
  parseModel,
  throwIfAnyValidationIssues,
  withDefinitionDiagnostics,
} from "./validation.js";

it("collects failed checks with default or structured issues", () => {
  const collector = createValidationIssueCollector();
  const issue = {
    code: "invalid_format",
    message: "Invalid property.",
    path: ["properties", "file"],
    suggestion: "Use a supported property type.",
  };

  expect(collector.check(true, "Ignored check")).toBe(true);
  expect(collector.check("truthy", issue)).toBe(true);
  expect(collector.throwIfAnyIssues).not.toThrow();

  expect(collector.check(false, "Invalid definition.")).toBe(false);
  expect(collector.check(undefined, issue)).toBe(false);
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

function definition(): void {}

it("preserves errors when observation fails and stops observing after cleanup", () => {
  const error = new MakerValidationError([]);
  const stack = error.stack;

  const observed: Array<readonly [MakerValidationError, number]> = [];
  const stopFailing = observeDefinitionFailures(() => {
    throw new RangeError("observer failed");
  });

  const stop = observeDefinitionFailures((observedError, _boundary, count) => {
    observed.push([observedError, count]);
  });

  try {
    expect(() =>
      withDefinitionDiagnostics(definition, 2, () => {
        throw error;
      }),
    ).toThrow(error);
    expect(observed).toEqual([[error, 2]]);
    expect(error.stack).toBe(stack);
  } finally {
    stopFailing();
    stop();
  }

  expect(() =>
    withDefinitionDiagnostics(definition, 1, () => {
      throw error;
    }),
  ).toThrow(error);
  expect(observed).toHaveLength(1);
});

it("returns the original value and leaves unrelated exceptions unobserved", () => {
  const observed: MakerValidationError[] = [];
  const stop = observeDefinitionFailures((error) => {
    observed.push(error);
  });
  const value = {};
  const error = new RangeError("original");
  let calls = 0;
  try {
    expect(
      withDefinitionDiagnostics(definition, 1, () => {
        calls++;
        return value;
      }),
    ).toBe(value);
    expect(calls).toBe(1);
    expect(() =>
      withDefinitionDiagnostics(definition, 1, () => {
        throw error;
      }),
    ).toThrow(error);
    expect(observed).toEqual([]);
  } finally {
    stop();
  }
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
