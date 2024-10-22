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

import type { Project, StringLiteral } from "ts-morph";
import { DEBUG } from "./minifyBundle.js";

export const splitExtension = /^(.*)(\.[cm]?js)$/;

export function getModuleSourceFile(
  project: Project,
  node: StringLiteral | string,
) {
  let exportSourceFile;

  const literalText = typeof node === "string" ? node : node.getLiteralText();

  const withoutExtension = literalText.match(splitExtension)?.[1]
    ?? literalText;

  try {
    exportSourceFile = project.getSourceFile(`/${withoutExtension}.ts`);
    if (!exportSourceFile) {
      exportSourceFile = project.getSourceFile(
        `/${withoutExtension}/index.ts`,
      );
      if (DEBUG && !exportSourceFile) {
        // eslint-disable-next-line no-console
        console.warn(
          `Could not find source file for ${withoutExtension}`,
        );
        return undefined;
      }
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    return undefined;
  }
  return exportSourceFile;
}

export function withoutTrailingIndex(filePath: string) {
  return filePath.endsWith("/index") ? filePath.slice(0, -6) : filePath;
}
