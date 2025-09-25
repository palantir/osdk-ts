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

/**
 * Mustache token types based on Mustache.parse() output
 * Much simpler than Handlebars AST - Mustache uses a flat token array
 */

export type MustacheToken =
  | NameToken
  | UnescapedToken
  | TextToken
  | SectionToken
  | InvertedSectionToken;

export interface NameToken {
  0: "name"; // token type
  1: string; // variable name
  2: number; // start position
  3: number; // end position
}

export interface UnescapedToken {
  0: "&"; // token type
  1: string; // variable name
  2: number; // start position
  3: number; // end position
}

export interface TextToken {
  0: "text"; // token type
  1: string; // text content
  2: number; // start position
  3: number; // end position
}

export interface SectionToken {
  0: "#"; // token type
  1: string; // section name
  2: number; // start position
  3: number; // end position
  4: MustacheToken[]; // child tokens
  5: number; // close position
}

export interface InvertedSectionToken {
  0: "^"; // token type
  1: string; // section name
  2: number; // start position
  3: number; // end position
  4: MustacheToken[]; // child tokens
  5: number; // close position
}

/**
 * Type guard functions for token identification
 */
export function isNameToken(token: MustacheToken): token is NameToken {
  return token[0] === "name";
}

export function isUnescapedToken(
  token: MustacheToken,
): token is UnescapedToken {
  return token[0] === "&";
}

export function isTextToken(token: MustacheToken): token is TextToken {
  return token[0] === "text";
}

export function isSectionToken(token: MustacheToken): token is SectionToken {
  return token[0] === "#";
}

export function isInvertedSectionToken(
  token: MustacheToken,
): token is InvertedSectionToken {
  return token[0] === "^";
}

/**
 * Helper to check if token is a variable (name or unescaped)
 */
export function isVariableToken(
  token: MustacheToken,
): token is NameToken | UnescapedToken {
  return token[0] === "name" || token[0] === "&";
}

/**
 * Helper to check if token is a block (section or inverted section)
 */
export function isBlockToken(
  token: MustacheToken,
): token is SectionToken | InvertedSectionToken {
  return token[0] === "#" || token[0] === "^";
}
