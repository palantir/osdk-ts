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

import type { GenerateContext } from "../GenerateContext/GenerateContext.js";
import { formatTs } from "../util/test/formatTs.js";

// BEGIN: THIS IS GENERATED CODE. DO NOT EDIT.
const ExpectedOsdkVersion = "2.62.0";
// END: THIS IS GENERATED CODE. DO NOT EDIT.

export async function generateOntologyMetadataTypeFile(
  { fs, outDir, ontology, ontologyApiNamespace }: GenerateContext,
  userAgent: string,
): Promise<void> {
  await fs.writeFile(
    path.join(outDir, "OntologyMetadata.ts"),
    await formatTs(
      `
      export type $ExpectedClientVersion = "${ExpectedOsdkVersion}";
      export const $osdkMetadata = { extraUserAgent: "${userAgent}" };
      ${
        ontologyApiNamespace == null
          ? `
        export const $ontologyRid = "${ontology.ontology.rid}";
        /**
         * The RID of the Foundry branch this SDK was generated against, or
         * \`undefined\` if it was generated against the main branch.
         */
        export const $branch: string | undefined = ${
            ontology.raw.branch != null
              ? `"${ontology.raw.branch.rid}"`
              : "undefined"
          };
        `
          : ""
      }
      `,
    ),
  );
}

export const ONTOLOGY_METADATA_JSON_PATH =
  "experimental/ontology-metadata.json";

export const ONTOLOGY_METADATA_DMTS_PATH =
  "experimental/ontology-metadata.d.mts";

export const ONTOLOGY_METADATA_DCTS_PATH =
  "experimental/ontology-metadata.d.cts";

export const ONTOLOGY_METADATA_DTS_PATH = "experimental/ontology-metadata.d.ts";

function getTypeShim(packageType: "commonjs" | "module") {
  const exportStatement = packageType === "commonjs"
    ? "export = ontologyFullMetadata;"
    : "export default ontologyFullMetadata;";
  return `import type { OntologyFullMetadata } from "@osdk/foundry.ontologies";

declare const ontologyFullMetadata: OntologyFullMetadata;

${exportStatement}
`;
}

export async function generateOntologyMetadataJSONFile({
  fs,
  outDir,
  ontology,
}: GenerateContext): Promise<void> {
  const writeAsset = fs.writeAsset ?? fs.writeFile;
  await fs.mkdir(path.dirname(path.join(outDir, ONTOLOGY_METADATA_JSON_PATH)), {
    recursive: true,
  });
  await writeAsset(
    path.join(outDir, ONTOLOGY_METADATA_JSON_PATH),
    JSON.stringify(ontology.raw, null, 4),
  );
  await writeAsset(
    path.join(outDir, ONTOLOGY_METADATA_DMTS_PATH),
    await formatTs(getTypeShim("module")),
  );
  const exportEquals = await formatTs(getTypeShim("commonjs"));
  await writeAsset(
    path.join(outDir, ONTOLOGY_METADATA_DCTS_PATH),
    exportEquals,
  );
  await writeAsset(path.join(outDir, ONTOLOGY_METADATA_DTS_PATH), exportEquals);
}
