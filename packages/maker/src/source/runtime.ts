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

import { readFile } from "node:fs/promises";
import { findSourceMap } from "node:module";
import { fileURLToPath } from "node:url";
import { getCallSites } from "node:util";

import ts from "typescript";

import { MakerValidationError } from "../validation.js";
import { SourceValidationError } from "./diagnostics.js";
import { locateSource } from "./mapping.js";

interface FailureSite {
  readonly fileName: string;
  /** Zero-based authored coordinates. Columns count UTF-16 code units. */
  readonly line: number;
  readonly column: number;
  readonly argumentCount: number;
  readonly definitionInput: boolean;
}

/**
 * Connects definition failures to authored calls within one evaluation.
 *
 * The loader records files loaded by Node without changing their identities. Definition
 * boundaries notify `observe` while the caller is still on the stack, without
 * changing the error seen by user catches. Only an error escaping evaluation reaches
 * `rethrow`, which reads the authored file and adds diagnostics.
 *
 * Files must remain unchanged through evaluation and reporting: the session retains
 * coordinates, not source snapshots. Separate sessions own separate URL/error maps.
 */
export class SourceSession {
  private readonly scripts = new Map<string, string>();
  private readonly failures = new WeakMap<MakerValidationError, FailureSite>();

  /** Match both ESM URLs (`file:///src/ontology.ts`) and CommonJS paths (`/src/ontology.ts`). */
  public registerScript(url: string): void {
    const fileName = fileURLToPath(url);
    this.scripts.set(url, fileName);
    this.scripts.set(fileName, fileName);
  }

  /**
   * Finds the nearest call in a file registered with this session.
   *
   * For a helper that calls `defineObject(config)`, prefer that call's location.
   * If only the file calling `myDefineObjectHelper(options)` is registered, highlight
   * that helper call instead. Do not map validation paths onto `options`, since the
   * helper may have transformed it into a different `config`.
   */
  public readonly observe = (
    error: MakerValidationError,
    boundary: (...args: never[]) => unknown,
    argumentCount: number,
  ): void => {
    // Keep the original failure location if the same error is observed again.
    if (this.failures.has(error)) return;
    // getCallSites returns the current stack as structured frames, newest first,
    // without using Error.prepareStackTrace. Disable automatic source mapping so
    // scriptName still identifies the runtime files registered by the loader.
    const sites = getCallSites(200, { sourceMap: false });
    // Skip Maker's frames through the definition function (e.g. defineObject).
    // If ontology.ts calls helper.ts, which calls defineObject, choose helper.ts
    // if the load hook registered it. Otherwise, continue to ontology.ts.
    // This is stack order, not the order files were loaded.
    const boundaryIndex = sites.findIndex(
      (site) => site.functionName === boundary.name,
    );
    if (boundaryIndex === -1) return;
    for (const [index, site] of sites.slice(boundaryIndex + 1).entries()) {
      const fileName = this.scripts.get(site.scriptName);
      if (fileName === undefined) continue;
      // Stack positions are one-based. Source-map lookups use zero-based positions,
      // so stack line 3, column 5 becomes line 2, column 4 for the lookup.
      const line = site.lineNumber - 1;
      const column = site.columnNumber - 1;
      // Use Node's cached source map, if enabled by the host, to translate the
      // generated JS position back to authored source, e.g. document.js:40:8 to
      // document.ts:12:3.
      const original = findSourceMap(fileName)?.findEntry(line, column);
      // A generated position without a mapping is not an authored position.
      if (original !== undefined && !("originalSource" in original)) return;
      const source = original?.originalSource ?? fileName;
      this.failures.set(error, {
        fileName: source.startsWith("file:") ? fileURLToPath(source) : source,
        line: original?.originalLine ?? line,
        column: original?.originalColumn ?? column,
        argumentCount,
        // A helper outside this graph may have changed the definition input.
        definitionInput: index === 0,
      });
      return;
    }
  };

  /**
   * Enriches an observed validation error. For other errors, they are thrown unchanged.
   *
   * An issue at `["apiName"]` highlights the name in `defineObject({ apiName: ... })`.
   * In contrast, for `defineObject(config)`, the call is the fallback.
   */
  public async rethrow(error: unknown): Promise<never> {
    if (!(error instanceof MakerValidationError)) {
      throw error;
    }

    const site = this.failures.get(error);
    if (site === undefined) {
      throw error;
    }

    let text: string;
    try {
      text = await readFile(site.fileName, "utf8");
    } catch {
      // Source reporting is best-effort
      throw error;
    }

    // Parse a syntax tree without executing or type-checking the source.
    const file = ts.createSourceFile(
      site.fileName,
      text,
      ts.ScriptTarget.Latest,
      true,
    );

    // Syntax nodes use UTF-16 offsets into the full text, not line/column pairs.
    // For "a\ncall()", getLineStarts() is [0, 2]. Zero-based line 1, column 0
    // therefore points to offset 2, the start of `call`.
    const lineStart = file.getLineStarts()[site.line];
    if (lineStart === undefined) throw error;
    const offset = lineStart + site.column;
    let call: ts.CallExpression | undefined;

    const visit = (node: ts.Node): void => {
      // V8 may point at `?.(` rather than the callee. Accept the call head, never an argument.
      // getStart skips leading whitespace/comments. arguments.pos is just after `(`.
      // In `defineObject(makeConfig())`, a position inside `makeConfig` must not
      // select the surrounding `defineObject` call.
      if (
        ts.isCallExpression(node) &&
        node.expression.getStart(file) <= offset &&
        offset < node.arguments.pos
      ) {
        call = node;
      }

      // E.g. in `export const doc = defineObject(...)`, the call is nested
      // inside a variable declaration. Visit children to find it.
      ts.forEachChild(node, visit);
    };
    visit(file);

    if (call === undefined) {
      throw error;
    }

    // Parentheses and type assertions add syntax nodes, not different runtime values.
    // E.g. `({ apiName: "Document" } as Config)` unwraps to `{ apiName: "Document" }`.
    const input = call.arguments[0];
    let unwrapped = input;
    while (
      unwrapped !== undefined &&
      (ts.isParenthesizedExpression(unwrapped) ||
        ts.isAsExpression(unwrapped) ||
        ts.isSatisfiesExpression(unwrapped) ||
        ts.isTypeAssertionExpression(unwrapped))
    ) {
      unwrapped = unwrapped.expression;
    }

    // An inline object is only useful if it is the definition's actual input.
    // E.g. `const bound = defineObject.bind(undefined, config)` gets its input
    // from bind(), not from `bound({ apiName: "Decoy" })`. Argument counts differ.
    // For `defineObject.call(undefined, config)`, argument 0 is `this`, not config.
    // .apply and Reflect.construct also require interpreting arguments, so skip them.
    const indirect =
      ts.isPropertyAccessExpression(call.expression) &&
      ["call", "apply", "construct"].includes(call.expression.name.text);

    const inline =
      site.definitionInput &&
      !indirect &&
      call.arguments.length === site.argumentCount &&
      !call.arguments.some(ts.isSpreadElement) &&
      unwrapped !== undefined &&
      ts.isObjectLiteralExpression(unwrapped);

    // An empty path makes locateSource highlight the whole call rather than guess
    // which argument or field corresponds to the validated configuration.
    const expression = inline && input !== undefined ? input : call;
    throw new SourceValidationError(
      error.issues.map((issue) => ({
        ...issue,
        source: locateSource(file, expression, inline ? issue.path : []),
      })),
      text,
      error,
    );
  }
}
