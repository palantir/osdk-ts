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

import type { AgentDataTypeDefinition } from "@osdk/api/unstable";
import {
  wireAgentDefinitionVersionToSdkAgentDefinitionNoParams,
  wireAgentDefinitionVersionToSdkAgentMetadata,
} from "@osdk/generator-converters";
import path from "node:path";
import type { EnhancedAgent } from "../GenerateContext/EnhancedAgent.js";
import type { EnhancedOntologyDefinition } from "../GenerateContext/EnhancedOntologyDefinition.js";
import type { GenerateContext } from "../GenerateContext/GenerateContext.js";
import type { MinimalFs } from "../MinimalFs.js";
import { getObjectImports } from "../shared/getObjectImports.js";
import { getObjectTypeApiNamesFromAgent } from "../shared/getObjectTypeApiNamesFromAgent.js";
import { deleteUndefineds } from "../util/deleteUndefineds.js";
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
  const metadata = wireAgentDefinitionVersionToSdkAgentMetadata(
    agent.raw,
    agent.fullApiName,
  );
  const baseProps = deleteUndefineds(
    wireAgentDefinitionVersionToSdkAgentDefinitionNoParams(
      agent.raw,
      agent.fullApiName,
    ),
  );

  const apiName = JSON.stringify(agent.fullApiName);
  const version = JSON.stringify(
    agentVersionReferences.get(agent.fullApiName) ?? agent.raw.version,
  );
  const createSessionArgs = metadata.arguments;
  // TODO(mhogberg): Use isOptional instead of checking nullable here once it is available in the public API.
  const optional = Object.values(createSessionArgs).every(p => p.nullable);
  const eventNames = agent.raw.eventDefinitions.map(event => event.eventType);
  const contextItem =
    agent.raw.contextItemDefinitions.map(item =>
      `{ type: ${JSON.stringify(item.contextItemType)}; data: ContextItems[${
        JSON.stringify(item.contextItemType)
      }]; }`
    ).join(" | ") || "never";
  const sendEventArguments =
    eventNames.map(name =>
      `{ ${
        eventNames.map(eventName =>
          eventName === name
            ? `readonly ${JSON.stringify(eventName)}: Events[${
              JSON.stringify(eventName)
            }];`
            : `readonly ${JSON.stringify(eventName)}?: never;`
        ).join("\n")
      } }`
    ).join(" | ") || "never";

  await fs.writeFile(
    path.join(outDir, `${name}.ts`),
    await formatTs(`
      import type { VersionBound as $VersionBound } from "${
      forInternalUse ? "@osdk/api" : "@osdk/client"
    }";
      import type { AgentDefinition as $AgentDefinition, AgentParam as $AgentParam, AgentResult as $AgentResult, AgentSession as $AgentSession, AgentSessionState as $AgentSessionState, AgentGetStateOptions as $AgentGetStateOptions, AgentSendEventOptions as $AgentSendEventOptions } from "${
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
    }: ${name}.CreateSessionArguments): Promise<${name}.Session>;
          experimental_getSession(sessionId: string): Promise<${name}.Session>;
        }

        export interface Session extends $AgentSession {
          experimental_getState(
            $options?: $AgentGetStateOptions,
          ): Promise<SessionState>;
          experimental_sendEvent(
            event: SendEventArguments,
            $options?: $AgentSendEventOptions,
          ): Promise<void>;
        }

        export interface SessionState extends $AgentSessionState {
          arguments: ${
      Object.keys(createSessionArgs).length === 0
        ? "Record<string, never>"
        : `{ ${agentFields(ontology, createSessionArgs, "Result", true)} }`
    };
          agentState: { data: ${
      getAgentDataType(ontology, metadata.agentState, "Result")
    }; };
          contextItems: Record<string, ContextItem>;
        }

        export type ContextItem = ${contextItem};

        ${
      Object.keys(metadata.contextItems).length === 0
        ? "export type ContextItems = Record<never, never>;"
        : `export interface ContextItems { ${
          agentFields(
            ontology,
            metadata.contextItems,
            "Result",
          )
        } }`
    }

        export type SendEventArguments = ${sendEventArguments};

        ${
      eventNames.length === 0
        ? "export type Events = Record<never, never>;"
        : `export interface Events { ${
          agentFields(
            ontology,
            metadata.events,
            "Param",
          )
        } }`
    }

        ${
      Object.keys(createSessionArgs).length === 0
        ? "export type CreateSessionArguments = Record<string, never>;"
        : `export interface CreateSessionArguments { ${
          agentFields(ontology, createSessionArgs, "Param", true)
        } }`
    }
      }

      /** @beta */
      export interface ${name} extends $AgentDefinition<${name}.Signatures>, $VersionBound<$ExpectedClientVersion> {
        __DefinitionMetadata?: {
          ${stringify(baseProps)};
          arguments: { ${parameterDefsForType(ontology, metadata.arguments)} };
          events: { ${parameterDefsForType(ontology, metadata.events)} };
          agentState: { ${dataTypeDefForType(ontology, metadata.agentState)} };
          contextItems: { ${
      parameterDefsForType(ontology, metadata.contextItems)
    } };
          signatures: ${name}.Signatures;
        };
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
  fields: Record<string, AgentDataTypeDefinition>,
  type: "Param" | "Result",
  topLevel = false,
): string {
  return stringify(fields, {
    "*": (dataType, _formatter, name) => {
      // TODO(mhogberg): Use isOptional instead of checking nullable here once it is available in the public API.
      const optional = topLevel && dataType.nullable;
      return [
        `${type === "Param" ? "readonly " : ""}${JSON.stringify(name)}${
          optional ? "?" : ""
        }`,
        getAgentDataType(ontology, dataType, type),
      ];
    },
  });
}

export function getAgentDataType(
  ontology: EnhancedOntologyDefinition,
  input: AgentDataTypeDefinition,
  type: "Param" | "Result",
): string {
  const recurse = (dataType: AgentDataTypeDefinition) =>
    getAgentDataType(ontology, dataType, type);
  if (input.nullable) {
    return `(${recurse({ ...input, nullable: false })}) | null`;
  }
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
    case "array":
      return `${type === "Param" ? "Readonly" : ""}Array<${
        recurse(input.array)
      }>`;
    case "record":
      return type === "Param"
        ? `Readonly<Record<string, ${recurse(input.valueType)}>>`
        : `Record<string, ${recurse(input.valueType)}>`;
    case "struct":
      return Object.keys(input.struct).length === 0
        ? "Record<string, never>"
        : `{ ${agentFields(ontology, input.struct, type)} }`;
    case "discriminatedUnion":
      return Object.entries(input.members).map(([discriminator, fields]) =>
        `{ ${type === "Param" ? "readonly " : ""}${
          JSON.stringify(input.discriminatorKey)
        }: ${JSON.stringify(discriminator)};
          ${agentFields(ontology, fields, type)} }`
      ).join(" | ") || "never";
    case "object":
    case "objectSet":
      return `$Agent${type}.${
        input.type === "object" ? "ObjectType" : "ObjectSetType"
      }<${
        ontology.requireObjectType(
          input.type === "object" ? input.object : input.objectSet,
        )
          .getImportedDefinitionIdentifier(true)
      }>`;
    default:
      const _: never = input;
      throw new Error(
        `Unsupported AgentDataTypeDefinition.type ${(input as any).type}`,
      );
  }
}

function parameterDefsForType(
  ontology: EnhancedOntologyDefinition,
  parameters: Record<string, AgentDataTypeDefinition>,
): string {
  return stringify(parameters, {
    "*": parameter => `{ ${dataTypeDefForType(ontology, parameter)} }`,
  });
}

function dataTypeDefForType(
  ontology: EnhancedOntologyDefinition,
  input: AgentDataTypeDefinition,
): string {
  return [
    stringify(deleteUndefineds(input), {
      "*": (value, formatter, key) => {
        if (key === "array" && input.type === "array") {
          return `{ ${dataTypeDefForType(ontology, input.array)} }`;
        }
        if (key === "valueType" && input.type === "record") {
          return `{ ${dataTypeDefForType(ontology, input.valueType)} }`;
        }
        if (key === "struct" && input.type === "struct") {
          return `{ ${parameterDefsForType(ontology, input.struct)} }`;
        }
        if (key === "members" && input.type === "discriminatedUnion") {
          return `{ ${
            stringify(input.members, {
              "*": fields => `{ ${parameterDefsForType(ontology, fields)} }`,
            })
          } }`;
        }
        return formatter(value);
      },
    }),
    getLineFor__OsdkTargetType(ontology, input),
  ].filter(Boolean).join(",\n");
}

function getLineFor__OsdkTargetType(
  ontology: EnhancedOntologyDefinition,
  adt: AgentDataTypeDefinition,
): string {
  if (adt.type === "object" || adt.type === "objectSet") {
    return `__OsdkTargetType?: ${
      ontology.requireObjectType(
        adt.type === "object" ? adt.object : adt.objectSet,
      ).getImportedDefinitionIdentifier(true)
    }`;
  }
  return "";
}
