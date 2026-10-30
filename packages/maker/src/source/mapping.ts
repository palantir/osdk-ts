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

import ts from "typescript";

import type { MakerValidationIssue } from "../validation.js";
import type { SourceLocation, SourcePosition } from "./types.js";

/**
 * Follows an issue path relative to an original-source expression, returning the
 * deepest reliable source range without evaluating code.
 * Typically, `expression` is a Maker definition's first argument:
 * ```ts
 * defineObject({
 *   apiName: "Document",
 *   properties: { id: { type: "string" } },
 *   // Other definition fields omitted.
 * });
 * ```
 * The path ["properties", "id", "type"] selects `"string"` with
 * `exact` precision. If id is instead written as `id: property`, the same
 * path selects the use of `property` with `enclosing` precision—not its initializer,
 * even if that initializer is in the same file. Helper results behave similarly.
 *
 * Missing fields and uncertain writes stop traversal at the enclosing expression.
 * Paths must already refer to authored input; this function neither resolves
 * bindings nor translates paths from normalized models.
 */
export function locateSource(
  file: ts.SourceFile,
  expression: ts.Node,
  path: MakerValidationIssue["path"],
): SourceLocation {
  let node = expression;
  let remaining = path;
  while (true) {
    // These wrappers do not add fields or indices to the configuration path.
    if (
      ts.isParenthesizedExpression(node) ||
      ts.isAsExpression(node) ||
      ts.isSatisfiesExpression(node) ||
      ts.isTypeAssertionExpression(node)
    ) {
      node = node.expression;
      continue;
    }

    let child: ts.Node | undefined;
    if (remaining.length > 0 && ts.isObjectLiteralExpression(node)) {
      // Scan all writes in source order: a later explicit field replaces an earlier one.
      for (const member of node.properties) {
        if (
          ts.isSpreadAssignment(member) ||
          (member.name !== undefined && ts.isComputedPropertyName(member.name))
        ) {
          // Spreads/computed keys might overwrite an earlier match. A later explicit
          // field can restore it: { value: 5, ...other } is uncertain, whereas
          // { ...other, value: 5 } still locates 5 for the path ["value"].
          child = undefined;
        } else if (
          member.name !== undefined &&
          (ts.isIdentifier(member.name) ||
            ts.isStringLiteral(member.name) ||
            ts.isNumericLiteral(member.name)) &&
          member.name.text === String(remaining[0])
        ) {
          // Shorthand points at the identifier's use here, not its declaration.
          child = ts.isPropertyAssignment(member)
            ? member.initializer
            : ts.isShorthandPropertyAssignment(member)
              ? member.name
              : member;
        }
      }
    } else if (
      remaining.length > 0 &&
      ts.isArrayLiteralExpression(node) &&
      typeof remaining[0] === "number"
    ) {
      const index = remaining[0];
      // A spread at/before the requested index makes its position uncertain:
      // [5, ...items] has a known index 0; [...items, 5] has no known index for 5.
      if (!node.elements.slice(0, index + 1).some(ts.isSpreadElement)) {
        const element = node.elements[index];
        // A hole or absent element has no expression to highlight; retain the array.
        if (element !== undefined && !ts.isOmittedExpression(element)) {
          child = element;
        }
      }
    }

    if (child === undefined) break;
    node = child;
    remaining = remaining.slice(1);
  }

  const position = (offset: number): SourcePosition => {
    const { line, character } = file.getLineAndCharacterOfPosition(offset);
    return { offset, line: line + 1, column: character + 1 };
  };

  // A fully matched path can still end at an identifier or call
  const literal =
    ts.isStringLiteral(node) ||
    ts.isNoSubstitutionTemplateLiteral(node) ||
    ts.isNumericLiteral(node) ||
    node.kind === ts.SyntaxKind.TrueKeyword ||
    node.kind === ts.SyntaxKind.FalseKeyword ||
    node.kind === ts.SyntaxKind.NullKeyword ||
    (ts.isPrefixUnaryExpression(node) &&
      (node.operator === ts.SyntaxKind.MinusToken ||
        node.operator === ts.SyntaxKind.PlusToken) &&
      ts.isNumericLiteral(node.operand));

  return {
    fileName: file.fileName,
    start: position(node.getStart(file)),
    end: position(node.getEnd()),
    precision:
      remaining.length === 0 &&
      (literal ||
        ts.isObjectLiteralExpression(node) ||
        ts.isArrayLiteralExpression(node))
        ? "exact"
        : "enclosing",
  };
}
