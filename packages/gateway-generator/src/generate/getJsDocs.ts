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

import type { JSDocStructure } from "ts-morph";
import { StructureKind } from "ts-morph";
import type { Documentation } from "../spec/Common.js";

export function getJsDocs(documentation: Documentation): JSDocStructure[] {
  if (!hasDocs(documentation)) {
    return [];
  }

  const jsDocStructure: JSDocStructure = {
    kind: StructureKind.JSDoc,
    description: getDocs(documentation),
  };

  return [jsDocStructure];
}

export function hasDocs(documentation: Documentation): boolean {
  const { description, plainTextDescription, example } = documentation;

  return !!(description || plainTextDescription || example);
}

export function getDocs(documentation: Documentation): string {
  const { description, plainTextDescription, example } = documentation;

  const formattedExample = example
    ? `\n@example\n\`\`\`json\n${
      JSON.stringify(example.example, null, 2)
    }\n\`\`\``
    : "";

  const formattedDescription = description || plainTextDescription || "";

  const jsDocDescription = `${formattedDescription}${formattedExample}`;

  return jsDocDescription;
}
