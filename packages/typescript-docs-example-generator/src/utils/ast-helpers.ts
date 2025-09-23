/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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
  HandlebarsAST,
  MustacheStatement,
} from "../types/handlebars-ast.js";

/**
 * Type-safe helper to convert Handlebars.parse() result to our internal AST format.
 *
 * This is needed because:
 * 1. Handlebars' actual runtime output differs from their TypeScript definitions
 * 2. Our AST types are simplified and focused on what we actually use
 * 3. Properties like blockParams, hash, and strip have different nullability
 *
 * @param nativeAst The result from Handlebars.parse()
 * @returns Safely typed AST for our internal use
 */
export function convertHandlebarsAST(nativeAst: unknown): HandlebarsAST {
  // Runtime check to ensure it's the shape we expect
  if (
    typeof nativeAst !== "object" || nativeAst == null || !("type" in nativeAst)
  ) {
    throw new Error("Invalid AST structure from Handlebars.parse()");
  }

  // The runtime structure is compatible with our interface, despite type differences
  return nativeAst as HandlebarsAST;
}

/**
 * Type-safe helper to get the original path from a MustacheStatement.
 * Handles the differences between our types and Handlebars' actual structure.
 */
export function getMustacheOriginal(stmt: MustacheStatement): string {
  if ("original" in stmt.path && typeof stmt.path.original === "string") {
    return stmt.path.original;
  }
  return "";
}

/**
 * Helper to safely check if a statement has a hash property with actual values.
 */
export function hasActualHash(stmt: { hash?: unknown }): boolean {
  return stmt.hash != null && typeof stmt.hash === "object";
}

/**
 * Convert ProcessingError to Error for compatibility with error collectors.
 */
export function processingErrorToError(
  processingError: { message: string; cause?: Error },
): Error {
  const error = new Error(processingError.message);
  if (processingError.cause) {
    error.cause = processingError.cause;
  }
  return error;
}

/**
 * Convert BaseTemplateContext to Record<string, unknown> for metadata storage.
 * This is a safe upcast since BaseTemplateContext is more specific.
 */
export function contextToRecord(
  context: Record<string, any>,
): Record<string, unknown> {
  return context;
}
