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
import { copyright } from "./copyright";
import { generateComponents } from "./generateComponents";
import { generateResource } from "./generateResource";
import type { ApiSpec } from "./ir";
import { writeCode } from "./writeCode";

export async function generateOmniApi(ir: ApiSpec, outputDir: string) {
  let rootOut = `${copyright}
  `;
  for (const ns of ir.namespaces) {
    switch (ns.name) {
      case "Ontologies":
      case "OntologiesV2":
      case "Operations":
        continue;
    }

    rootOut += `export * as ${ns.name} from "./${ns.name}/index.js";\n`;
    let nsRootOut = `${copyright}
    `;

    const nsPath = path.join(outputDir, ns.name);
    await fs.mkdir(nsPath, { recursive: true });
    for (const resource of ns.resources) {
      await generateResource(resource, nsPath);
      nsRootOut +=
        `export {${resource.component}} from "./${resource.component}.js";\n`;
    }

    await writeCode(
      path.join(nsPath, "index.ts"),
      nsRootOut,
    );
  }

  await generateComponents(ir, outputDir);
  rootOut += `export * from "./components.js";\n`;

  await writeCode(
    path.join(outputDir, "index.ts"),
    rootOut,
  );
}
