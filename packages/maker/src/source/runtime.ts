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
import type { SourceMap } from "node:module";
import { fileURLToPath } from "node:url";
import { getCallSites } from "node:util";

import ts from "typescript";

import { MakerValidationError } from "../validation.js";
import { SourceValidationError } from "./diagnostics.js";
import { locateSource } from "./mapping.js";

interface FailureSite {
  readonly fileName: string;
  /** Zero-based authored coordinates; columns count UTF-16 code units. */
  readonly line: number;
  readonly column: number;
  readonly argumentCount: number;
  readonly definitionInput: boolean;
}

/**
 * Connects definition failures to authored calls within one evaluation.
 *
 * The loader registers executed script URLs and their private source maps. Definition
 * boundaries then notify `observe` while the caller is still on the stack, without
 * changing the error seen by user catches. Only an error escaping evaluation reaches
 * `rethrow`, which reads the authored file and adds diagnostics.
 *
 * Files must remain unchanged through evaluation and reporting: the session retains
 * coordinates, not source snapshots. Separate sessions own separate URL/error maps.
 */
export class SourceSession {
  private readonly scripts = new Map<
    string,
    { readonly fileName: string; readonly map?: SourceMap }
  >();
  private readonly failures = new WeakMap<MakerValidationError, FailureSite>();

  /**
   * Registers the executed URL, including its evaluation query parameter. Matching
   * full URLs keeps concurrent evaluations of the same file distinct. The source map
   * translates emitted TypeScript positions; untransformed JavaScript needs none.
   */
  public registerScript(url: string, map?: SourceMap): void {
    this.scripts.set(url, { fileName: fileURLToPath(url), map });
  }

  /**
   * Records the nearest owned caller of an actual definition boundary. For example:
   * `observe → withDefinitionDiagnostics → defineObject → objects.ts`.
   *
   * The immediate caller owns the definition input. If it is an unregistered helper,
   * an outer owned call is useful context, but its arguments may be unrelated. Such
   * calls get enclosing ranges only. Keeping the first observation also prevents an
   * outer definition from replacing an inner definition's location on rethrow.
   */
  public readonly observe = (
    error: MakerValidationError,
    boundary: (...args: never[]) => unknown,
    argumentCount: number,
  ): void => {
    if (this.failures.has(error)) return;
    // Raw structured sites avoid Error.prepareStackTrace and process-wide source-map
    // settings. Skip to the public definition, whose name also survives bundling.
    const sites = getCallSites(200, { sourceMap: false });
    const boundaryIndex = sites.findIndex(
      (site) => site.functionName === boundary.name,
    );
    if (boundaryIndex === -1) return;
    for (const [index, site] of sites.slice(boundaryIndex + 1).entries()) {
      const script = this.scripts.get(site.scriptName);
      if (script === undefined) continue;
      const line = site.lineNumber - 1;
      const column = site.columnNumber - 1;
      const original = script.map?.findEntry(line, column);
      // Generated helpers can have no authored position. Raw emitted coordinates
      // must not be interpreted as coordinates in the original TypeScript file.
      if (original !== undefined && !("originalLine" in original)) return;
      this.failures.set(error, {
        fileName: script.fileName,
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

    const file = ts.createSourceFile(
      site.fileName,
      text,
      ts.ScriptTarget.Latest,
      true,
    );

    const lineStart = file.getLineStarts()[site.line];
    if (lineStart === undefined) throw error;
    const offset = lineStart + site.column;
    let call: ts.CallExpression | undefined;

    const visit = (node: ts.Node): void => {
      // V8 may point at `?.(` rather than the callee. Accept the call head, never an argument.
      if (
        ts.isCallExpression(node) &&
        node.expression.getStart(file) <= offset &&
        offset < node.arguments.pos
      ) {
        call = node;
      }

      ts.forEachChild(node, visit);
    };
    visit(file);

    if (call === undefined) {
      throw error;
    }

    // Type assertions and parentheses do not change which object is passed.
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
    // A bound definition can receive its configuration from bind(), not this call.
    // The argument-count check below detects extra visible arguments in that case.
    // With .call/.apply/Reflect.construct, the first argument is not the input.
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
