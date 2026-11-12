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

import type { z } from "zod/v4";

export interface MakerValidationIssue {
  readonly code: string;
  readonly message: string;
  /** Relative to the definition being validated. Array indices are numbers. */
  readonly path: readonly (string | number)[];
  readonly suggestion?: string;
}

export class MakerValidationError extends Error {
  public constructor(public readonly issues: readonly MakerValidationIssue[]) {
    super(
      issues
        .map(
          ({ code, path, message, suggestion }) =>
            `${path.length === 0 ? "" : `${formatValidationPath(path)} `}[${code}] ${message}${suggestion === undefined ? "" : `\n  ${suggestion}`}`,
        )
        .join("\n"),
    );
    this.name = "MakerValidationError";
  }
}

export function throwIfAnyValidationIssues(
  ...groups: (readonly MakerValidationIssue[])[]
): void {
  const issues = groups.flat();
  if (issues.length > 0) throw new MakerValidationError(issues);
}

export interface MakerValidationIssueCollector {
  /** Records an issue when the condition is falsy. Does not narrow its type. */
  addIssue(condition: unknown, issue: string | MakerValidationIssue): void;
  throwIfAnyIssues(): void;
}

/** Records failed checks for a single validation pass. */
export function createValidationIssueCollector(): MakerValidationIssueCollector {
  const issues: MakerValidationIssue[] = [];
  return {
    addIssue(condition, issue) {
      if (!condition) {
        issues.push(
          typeof issue === "string"
            ? { code: "validation_error", message: issue, path: [] }
            : issue,
        );
      }
    },
    throwIfAnyIssues() {
      throwIfAnyValidationIssues(issues);
    },
  };
}

export function formatValidationPath(
  path: MakerValidationIssue["path"],
): string {
  return path.reduce<string>(
    (result, part) =>
      typeof part === "number"
        ? `${result}[${part}]`
        : `${result}[${JSON.stringify(part)}]`,
    "$",
  );
}

/** Structural parsing and semantic validation share one model-relative issue contract. */
export function parseModel<T>(schema: z.ZodType<T>, input: unknown): T {
  const result = schema.safeParse(input, {
    // Zod's default discriminator error omits the allowed tags. Include them so
    // authors can correct the value without inspecting the schema.
    error(issue) {
      if (issue.code !== "invalid_union") return;
      const instance = issue.inst as z.core.$ZodDiscriminatedUnion | undefined;
      if (instance?._zod.def.type !== "union") return;
      const { discriminator, options } = instance._zod.def;
      if (discriminator === undefined) return;
      const values = options.flatMap((option) => [
        ...(option._zod.propValues?.[discriminator] ?? []),
      ]);
      return `Expected ${JSON.stringify(discriminator)} to be one of: ${values.map((value) => JSON.stringify(value)).join(", ")}.`;
    },
  });

  if (!result.success) {
    throw new MakerValidationError(
      result.error.issues.flatMap(({ code, message, path, ...issue }) => {
        const relativePath = path.map((part) =>
          typeof part === "number" ? part : String(part),
        );

        // Zod reports unknown keys on the containing object. Identify each offending field.
        return code === "unrecognized_keys" && "keys" in issue
          ? issue.keys.map((key) => ({
              code,
              message: `Unrecognized field: ${key}`,
              path: [...relativePath, key],
              suggestion: "Remove this field or check its spelling.",
            }))
          : [{ code, message, path: relativePath }];
      }),
    );
  }
  return result.data;
}
