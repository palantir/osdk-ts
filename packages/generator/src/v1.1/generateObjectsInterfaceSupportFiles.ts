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

import { join } from "path";
import type { MinimalFs } from "../MinimalFs";
import type { WireOntologyDefinition } from "../WireOntologyDefinition";

export async function generateObjectsInterfaceSupportFiles(
  ontology: WireOntologyDefinition,
  fs: MinimalFs,
  outDir: string,
) {
  await fs.mkdir(outDir, { recursive: true });

  for (const { apiName } of Object.values(ontology.objectTypes)) {
    const fileName = join(outDir, `${apiName}.ts`);

    const contents: string[] = [];

    contents.push(
      `import { ObjectSetAggregateArg, ObjectSetFilterArg, ObjectSetGroupByArg, ObjectSetMultipleAggregateArg, ObjectSetOrderByArg } from "@osdk/legacy-client";`,
    );
    contents.push(`import { ${apiName} } from "../${apiName}";`);
    contents.push(""); // empty line

    contents.push(
      `/** @deprecated Use ObjectSetFilterArg<${apiName}> instead */`,
      `export type ${apiName}Filter = ObjectSetFilterArg<${apiName}>;`,
    );
    contents.push(
      `/** @deprecated Use ObjectSetOrderByArg<${apiName}> instead */`,
      `export type ${apiName}OrderBy = ObjectSetOrderByArg<${apiName}>;`,
    );
    contents.push(
      `/** @deprecated Use ObjectSetGroupByArg<${apiName}> instead */`,
      `export type ${apiName}GroupByProperties = ObjectSetGroupByArg<${apiName}>;`,
    );
    contents.push(
      `/**
        * Aggregation properties for ${apiName}
        * @deprecated Use ObjectSetAggregateArg<${apiName}> instead
        */`,
      `export type ${apiName}AggregationProperties = ObjectSetAggregateArg<${apiName}>;`,
    );
    contents.push(
      `/**
        * Multiple aggregation properties for ${apiName}.
        * @deprecated Use ObjectSetMultipleAggregateArg<${apiName}> instead
        */`,
      `export type ${apiName}MultipleAggregationProperties = ObjectSetMultipleAggregateArg<${apiName}>;`,
    );

    await fs.writeFile(fileName, contents.join("\n"));
  }
}
