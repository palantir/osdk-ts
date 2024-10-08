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

import path from "node:path";
import { ForeignType } from "../GenerateContext/ForeignType.js";
import type { GenerateContext } from "../GenerateContext/GenerateContext.js";
import { formatTs } from "../util/test/formatTs.js";

export async function generateRootIndexTsFile(
  { fs, outDir, importExt, ontologyApiNamespace, ontology }: GenerateContext,
) {
  fs.writeFile(
    path.join(outDir, "index.ts"),
    await formatTs(
      `export {${
        helper(ontology.actionTypes)
      }} from "./ontology/actions${importExt}";
        export * as $Actions from "./ontology/actions${importExt}";
        export {${
        helper(ontology.interfaceTypes)
      }} from "./ontology/interfaces${importExt}";
        export * as $Interfaces from "./ontology/interfaces${importExt}";
        export {${
        helper(ontology.objectTypes)
      }} from "./ontology/objects${importExt}";
        export * as $Objects from "./ontology/objects${importExt}";
        export {${
        helper(ontology.queryTypes)
      }} from "./ontology/queries${importExt}";
        export * as $Queries from "./ontology/queries${importExt}";
        ${
        ontologyApiNamespace == null
          ? `export { $ontologyRid } from "./OntologyMetadata${importExt}";`
          : ``
      }
    `,
    ),
  );
}

function helper(x: Record<string, { shortApiName: string }>) {
  return Object.values(x).filter(x => !(x instanceof ForeignType)).map(a =>
    a.shortApiName
  ).join(
    ", ",
  );
}
