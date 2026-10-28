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

import path from "node:path";
import type { GenerateContext } from "../GenerateContext/GenerateContext.js";
import { formatTs } from "../util/test/formatTs.js";

export async function generatePerAgentDataFiles({
  fs,
  outDir: rootOutDir,
  ontology,
  agentVersionReferences,
  importExt = "",
  forInternalUse = false,
}: Pick<
  GenerateContext,
  | "fs"
  | "outDir"
  | "importExt"
  | "ontology"
  | "forInternalUse"
  | "agentVersionReferences"
>): Promise<void> {
  const relOutDir = path.join(".", "ontology", "agents");
  const outDir = path.join(rootOutDir, relOutDir);
  await fs.mkdir(outDir, { recursive: true });

  const agents = Object.values(ontology.agents);

  await Promise.all(
    agents.map(async (agent) => {
      const name = agent.shortApiName;
      const apiName = JSON.stringify(agent.fullApiName);
      const version = JSON.stringify(
        agentVersionReferences.get(agent.fullApiName) ?? agent.raw.version,
      );
      await fs.writeFile(
        path.join(outDir, `${name}.ts`),
        await formatTs(`
      import type { VersionBound } from "${
          forInternalUse ? "@osdk/api" : "@osdk/client"
        }";
      import type { AgentDefinition } from "${
          forInternalUse ? "@osdk/api/unstable" : "@osdk/client/experimental"
        }";
      import type { $ExpectedClientVersion } from "../../OntologyMetadata${importExt}";
      import { $osdkMetadata } from "../../OntologyMetadata${importExt}";

      /** @beta */
      export interface ${name} extends AgentDefinition, VersionBound<$ExpectedClientVersion> {
        type: "agent";
        apiName: ${apiName};
        version: ${version};
        osdkMetadata: typeof $osdkMetadata;
      }

      /** @beta */
      export const ${name}: ${name} = {
        type: "agent",
        apiName: ${apiName},
        version: ${version},
        osdkMetadata: $osdkMetadata,
      };
    `),
      );
    }),
  );

  await fs.writeFile(
    `${outDir}.ts`,
    await formatTs(
      agents.length === 0
        ? "export {};"
        : agents
          .map(
            (agent) =>
              `export { ${agent.shortApiName} } from "${
                agent.getImportPathRelTo(
                  relOutDir,
                )
              }";`,
          )
          .join("\n"),
    ),
  );
}
