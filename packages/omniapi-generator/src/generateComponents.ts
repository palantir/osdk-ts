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

import fs from "node:fs/promises";
import * as path from "node:path";
import { accumulateReferencedNames } from "./accumulateReferencedNames";
import { copyright } from "./copyright";
import { generateComponentDeclaration } from "./generateComponentDeclaration";
import type { ApiSpec } from "./ir";
import { isIgnoredType } from "./isIgnoredType";
import { writeCode } from "./writeCode";

export async function generateComponents(
  ir: ApiSpec,
  outputDir: string,
) {
  const componentsToEmit = new Set<string>();

  let out =
    `export type LooselyBrandedString<T extends string> = string & {__LOOSE_BRAND?: T };
      `;

  const componentsCode = new Map<string, string>();

  for (const component of ir.components) {
    componentsCode.set(component.name, generateComponentDeclaration(component));

    if (!isIgnoredType(component)) {
      componentsToEmit.add(component.name);
      accumulateReferencedNames(componentsToEmit, component.type);
    }
  }

  for (const componentName of componentsToEmit) {
    out += componentsCode.get(componentName);
  }

  await fs.mkdir(outputDir, { recursive: true });
  await writeCode(
    path.join(outputDir, "components.ts"),
    `${copyright}
  ${out}`,
  );
}
