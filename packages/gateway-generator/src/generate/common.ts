/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type { Documentation } from "../spec";

export type TypeUnionVisitor<T extends { type: string }, R> =
  & {
    [K in T["type"] as K]: (type: Extract<T, { type: K }>) => R;
  }
  & {
    unknown: (type: { type: string }) => R;
  };

export function visitTypeUnion<T extends { type: string }, R>(
  value: T,
  visitor: TypeUnionVisitor<T, R>,
): R {
  if (value.type in visitor) {
    return (visitor as any)[value.type](value);
  }
  return visitor.unknown(value);
}

export function generateDocumentation(documentation: Documentation) {
  if (Object.keys(documentation).length === 0) {
    return "";
  }
  let documentationCode = "/**\n";
  if (documentation.description) {
    documentationCode += `* ${documentation.description}\n`;
  }
  if (documentation.example) {
    documentationCode += `* @Example: ${
      JSON.stringify(documentation.example.example)
    }\n`;
  }
  documentationCode += "*/\n";
  return documentationCode;
}

export function shouldSanitizePameterName(parameterName: string): boolean {
  return parameterName.includes("-");
}

export function sanitizeParameterName(parameterName: string): string {
  return parameterName.replace(/-/g, "_");
}
