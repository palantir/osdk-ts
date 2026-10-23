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

import type { DataType, StructField } from "@osdk/foundry.agents";
import path from "node:path";
import type { EnhancedAgent } from "../GenerateContext/EnhancedAgent.js";
import type { EnhancedOntologyDefinition } from "../GenerateContext/EnhancedOntologyDefinition.js";
import type { GenerateContext } from "../GenerateContext/GenerateContext.js";
import type { MinimalFs } from "../MinimalFs.js";
import { getObjectImports } from "../shared/getObjectImports.js";
import { getObjectTypeApiNamesFromAgent } from "../shared/getObjectTypeApiNamesFromAgent.js";
import { stringify } from "../util/stringify.js";
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
  await Promise.all(agents.map(agent =>
    generateAgentFile(
      fs,
      outDir,
      relOutDir,
      agent,
      importExt,
      ontology,
      forInternalUse,
      agentVersionReferences,
    )
  ));

  await fs.writeFile(
    `${outDir}.ts`,
    await formatTs(
      agents.length === 0
        ? "export {};"
        : agents.map(agent =>
          `export { ${agent.shortApiName} } from "${
            agent.getImportPathRelTo(relOutDir)
          }";`
        ).join("\n"),
    ),
  );
}

async function generateAgentFile(
  fs: MinimalFs,
  outDir: string,
  relOutDir: string,
  agent: EnhancedAgent,
  importExt: string,
  ontology: EnhancedOntologyDefinition,
  forInternalUse: boolean,
  agentVersionReferences: ReadonlyMap<string, string>,
) {
  const name = agent.shortApiName;
  const relFilePath = path.join(relOutDir, `${name}.ts`);
  const objectTypes = new Set(
    getObjectTypeApiNamesFromAgent(agent).map(o =>
      ontology.requireObjectType(o)
    ),
  );
  const importObjects = getObjectImports(objectTypes, "", relFilePath, true);
  const apiName = JSON.stringify(agent.fullApiName);
  const version = JSON.stringify(
    agentVersionReferences.get(agent.fullApiName) ?? agent.raw.version,
  );
  const createSessionArgs = agent.raw.argumentDefinitions;
  // TODO(mhogberg): Use isOptional instead of checking nullable here once it is available in the public API.
  const optional = createSessionArgs.every(p => p.dataType.type === "nullable");

  await fs.writeFile(
    path.join(outDir, `${name}.ts`),
    await formatTs(`
      import type { VersionBound } from "${
      forInternalUse ? "@osdk/api" : "@osdk/client"
    }";
      import type { AgentDefinition, AgentParam, AgentSession } from "${
      forInternalUse ? "@osdk/api/unstable" : "@osdk/client/experimental"
    }";
      import type { $ExpectedClientVersion } from "../../OntologyMetadata${importExt}";
      import { $osdkMetadata } from "../../OntologyMetadata${importExt}";
      ${importObjects}

      /** @beta */
      export namespace ${name} {
        export interface Signatures {
          experimental_createSession(args${
      optional ? "?" : ""
    }: ${name}.CreateSessionArguments): Promise<AgentSession>;
        }

        ${
      createSessionArgs.length === 0
        ? "export type CreateSessionArguments = Record<string, never>;"
        : `export interface CreateSessionArguments { ${
          agentFields(ontology, createSessionArgs, true)
        } }`
    }
      }

      /** @beta */
      export interface ${name} extends AgentDefinition<${name}.Signatures>, VersionBound<$ExpectedClientVersion> {
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
}

function agentFields(
  ontology: EnhancedOntologyDefinition,
  fields: ReadonlyArray<StructField>,
  topLevel = false,
): string {
  return stringify(
    Object.fromEntries(fields.map(field => [field.name, field.dataType])),
    {
      "*": (dataType, _formatter, name) => {
        // TODO(mhogberg): Use isOptional instead of checking nullable here once it is available in the public API.
        const optional = topLevel && dataType.type === "nullable";
        return [
          `readonly ${JSON.stringify(name)}${optional ? "?" : ""}`,
          getAgentArgType(
            ontology,
            optional ? dataType.wrappedType : dataType,
          ),
        ];
      },
    },
  );
}

export function getAgentArgType(
  ontology: EnhancedOntologyDefinition,
  input: DataType,
): string {
  const recurse = (dataType: DataType) => getAgentArgType(ontology, dataType);
  switch (input.type) {
    case "boolean":
      return "boolean";
    case "date":
    case "timestamp":
    case "string":
      return "string";
    case "double":
    case "float":
    case "integer":
    case "long":
    case "short":
      return "number";
    case "nullable":
      return `(${recurse(input.wrappedType)}) | null`;
    case "list":
      return `ReadonlyArray<${recurse(input.elementType)}>`;
    case "record":
      return `Readonly<Record<string, ${recurse(input.valueType)}>>`;
    case "struct":
      return input.fields.length === 0
        ? "Record<string, never>"
        : `{ ${agentFields(ontology, input.fields)} }`;
    case "discriminatedUnion":
      return input.members.map(member =>
        `{ readonly ${JSON.stringify(input.discriminatorKey)}: ${
          JSON.stringify(member.discriminatorValue)
        };
          ${agentFields(ontology, member.fields)} }`
      ).join(" | ") || "never";
    case "object":
    case "objectSet":
      return `AgentParam.${
        input.type === "object" ? "ObjectType" : "ObjectSetType"
      }<${
        ontology.requireObjectType(input.objectTypeApiName)
          .getImportedDefinitionIdentifier(true)
      }>`;
    default:
      return "unknown";
  }
}
