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

import { format } from "prettier";
// @ts-ignore the plugin doesn't have types but we need to import the actual plugin
// so we can bundle it rather than trying to resolve it at runtime
import organizeImports from "prettier-plugin-organize-imports";

export function formatTs(contents: string) {
  try {
    return format(contents, {
      parser: "typescript",
      singleQuote: true,
      trailingComma: "all",
      plugins: [organizeImports],
      tabWidth: 2,
      printWidth: 120,
    });
  } catch (e) {
    console.error("Failed to format file", e);
    console.log(contents);
    return contents;
  }
}
