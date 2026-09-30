/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import * as fs from "node:fs";
import * as path from "node:path";

import type { DatasetDefinition } from "./defineDataset.js";
import { importDataset } from "./importDataset.js";

export function writeDatasetExports(
  outputDir: string,
  namespace: string,
  datasets: DatasetDefinition[],
  randomnessKey?: string,
): Record<string, string> {
  const file = path.join(outputDir, "codegen", "datasets.ts");
  if (datasets.length === 0 || namespace.length === 0) {
    fs.rmSync(file, { force: true });
    return {};
  }
  const packageName = namespace.endsWith(".")
    ? namespace.slice(0, -1)
    : namespace;
  const entries = datasets.map((dataset) => {
    const imported = importDataset({ ...dataset, packageName, randomnessKey });
    const serialized = JSON.stringify(JSON.stringify(imported));
    return `  [${JSON.stringify(dataset.name)}]: importDataset(JSON.parse(${serialized})),`;
  });
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(
    file,
    `import { importDataset } from "@osdk/maker-experimental";\n\nexport const datasets = {\n${entries.join("\n")}\n};\n`,
  );
  return { datasets: "./codegen/datasets.js" };
}
