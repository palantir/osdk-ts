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
import { copyright } from "./copyright.js";
import { generateComponents } from "./generateComponents.js";
import { generateResource } from "./generateResource.js";
import type { ApiSpec } from "./ir/index.js";
import { isIgnoredNamespace } from "./isIgnoredNamespace.js";
import { writeCode } from "./writeCode.js";

export async function generateOmniApi(ir: ApiSpec, outputDir: string) {
  let rootOut = `${copyright}
  `;

  await fs.mkdir(path.join(outputDir, "public"), { recursive: true });

  for (const ns of ir.namespaces) {
    if (isIgnoredNamespace(ns.name) || ns.name === "Ontologies") {
      continue;
    }

    let nsRootOut = `${copyright}
    `;

    const nsPath = path.join(outputDir, "public", ns.name);
    await fs.mkdir(nsPath, { recursive: true });

    for (const resource of ns.resources) {
      await generateResource(resource, nsPath);
    }
  }

  await generateComponents(ir, path.join(outputDir, "generated"));

  await writeCode(
    path.join(outputDir, "public", `types.ts`),
    `${copyright}
      export * from "../generated/components.js";\n`,
  );

  rootOut += `export type * from "./generated/components.js";\n`;
  rootOut += "export {};";

  await writeCode(
    path.join(outputDir, "index.ts"),
    rootOut,
  );
}
