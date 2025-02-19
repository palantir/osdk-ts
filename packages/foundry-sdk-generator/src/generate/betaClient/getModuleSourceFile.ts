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

import type { Project, SourceFile, StringLiteral } from "ts-morph";

export function getModuleSourceFile(
  project: Project,
  node: StringLiteral,
): SourceFile | undefined {
  let exportSourceFile;
  try {
    exportSourceFile = project.getSourceFile(`/${node.getLiteralText()}.ts`);
    if (!exportSourceFile) {
      exportSourceFile = project.getSourceFile(
        `/${node.getLiteralText()}/index.ts`,
      );
      if (!exportSourceFile) {
        return undefined;
      }
    }
  } catch (e) {
    return undefined;
  }
  return exportSourceFile;
}

export function withoutTrailingIndex(filePath: string): string {
  return filePath.endsWith("/index") ? filePath.slice(0, -6) : filePath;
}
