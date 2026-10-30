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

import {
  formatValidationPath,
  MakerValidationError,
  type MakerValidationIssue,
} from "../validation.js";
import type { SourceLocation } from "./types.js";

export interface SourceDiagnostic extends MakerValidationIssue {
  readonly source: SourceLocation;
}

export class SourceValidationError extends MakerValidationError {
  public override readonly cause: MakerValidationError;

  public constructor(
    public readonly diagnostics: readonly SourceDiagnostic[],
    text: string,
    cause: MakerValidationError,
  ) {
    // oxlint-disable-next-line unicorn/custom-error-definition -- The base constructor accepts issues, not a message.
    super(cause.issues);
    this.message = diagnostics
      .map((diagnostic) => formatSourceDiagnostic(diagnostic, text))
      .join("\n\n");
    this.name = "SourceValidationError";
    this.cause = cause;
  }
}

export function formatSourceDiagnostic(
  diagnostic: SourceDiagnostic,
  text: string,
): string {
  const { source, code, message, suggestion, path } = diagnostic;
  const { start, end } = source;
  const lines = text.split(/\r\n|\r|\n/u);
  const first = Math.max(1, start.line - 1);
  const last = Math.min(lines.length, start.line + 1);
  const gutter = String(last).length;
  const frame: string[] = [];

  for (let line = first; line <= last; line++) {
    const content = lines[line - 1];
    frame.push(`${String(line).padStart(gutter)} | ${content}`);
    if (line === start.line) {
      const indent = content.slice(0, start.column - 1).replace(/[^\t]/gu, " ");
      const width = Math.max(
        1,
        (end.line === start.line ? end.column - 1 : content.length) -
          (start.column - 1),
      );
      frame.push(`${" ".repeat(gutter)} | ${indent}${"^".repeat(width)}`);
    }
  }

  return [
    `${source.fileName}:${start.line}:${start.column} [${code}] ${message}`,
    ...(path.length === 0 ? [] : [`  at ${formatValidationPath(path)}`]),
    ...frame,
    ...(suggestion === undefined ? [] : [suggestion]),
  ].join("\n");
}
