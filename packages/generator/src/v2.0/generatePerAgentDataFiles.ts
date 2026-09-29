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
import {
  GeneratorError,
  isPinnedAgentVersion,
} from "@osdk/generator-converters";
import path from "node:path";
import type { EnhancedOntologyDefinition } from "../GenerateContext/EnhancedOntologyDefinition.js";
import type { GenerateContext } from "../GenerateContext/GenerateContext.js";
import { getObjectImports } from "../shared/getObjectImports.js";
import { formatTs } from "../util/test/formatTs.js";

export async function generatePerAgentDataFiles(
  ctx: GenerateContext,
): Promise<void> {
  const agents = Object.values(ctx.ontology.agentTypes);
  if (agents.length === 0) return;
  const directory = path.join(ctx.outDir, "ontology", "agents");
  await ctx.fs.mkdir(directory, { recursive: true });
  for (const agent of agents) {
    const { raw, shortApiName: name } = agent;
    if (!isPinnedAgentVersion(raw.version)) {
      throw new GeneratorError("Agents require a pinned version", {
        apiName: raw.apiName,
        version: raw.version,
      });
    }
    const imports = new Set<
      ReturnType<EnhancedOntologyDefinition["requireObjectType"]>
    >();
    const objectByRid = new Map(
      Object.values(ctx.ontology.raw.objectTypes).map((
        { objectType },
      ) => [objectType.rid, objectType.apiName]),
    );
    const fields = (
      structFields: StructField[],
      mode: "Param" | "Result",
    ): string =>
      structFields.length === 0
        ? "Record<string, never>"
        : `{ ${
          structFields.map(field =>
            `readonly ${JSON.stringify(field.name)}: ${
              render(field.dataType, mode)
            };`
          ).join("\n")
        } }`;
    const render = (type: DataType, mode: "Param" | "Result"): string => {
      switch (type.type) {
        case "boolean":
          return "boolean";
        case "string":
        case "date":
        case "timestamp":
          return "string";
        case "integer":
        case "long":
        case "short":
        case "double":
        case "float":
          return "number";
        case "nullable":
          return `(${render(type.wrappedType, mode)}) | null`;
        case "list":
          return `${mode === "Param" ? "ReadonlyArray" : "Array"}<${
            render(type.elementType, mode)
          }>`;
        case "record":
          return `Record<string, ${render(type.valueType, mode)}>`;
        case "struct":
          return fields(type.fields, mode);
        case "discriminatedUnion":
          return type.members.map(member => {
            const discriminator = `{ readonly ${
              JSON.stringify(type.discriminatorKey)
            }: ${JSON.stringify(member.discriminatorValue)} }`;
            return member.fields.length === 0
              ? discriminator
              : `(${discriminator} & ${fields(member.fields, mode)})`;
          }).join(" | ") || "never";
        case "object":
        case "objectSet": {
          const apiName = objectByRid.get(type.objectTypeRid);
          if (!apiName) {
            throw new GeneratorError(
              "Missing object type referenced by agent",
              { apiName: raw.apiName },
              { objectTypeRid: type.objectTypeRid },
            );
          }
          const target = ctx.ontology.requireObjectType(apiName);
          imports.add(target);
          return `Query${mode}.${
            type.type === "object" ? "ObjectType" : "ObjectSetType"
          }<${target.getImportedDefinitionIdentifier(true)}>`;
        }
        default: {
          const unsupported: never = type;
          throw new GeneratorError("Unsupported agent data type", {
            dataType: unsupported,
          });
        }
      }
    };
    const args = fields(raw.argumentDefinitions, "Param");
    const argumentValues = fields(raw.argumentDefinitions, "Result");
    const events = `{ ${
      raw.eventDefinitions.map(event =>
        `readonly ${JSON.stringify(event.eventType)}: ${
          render(event.payloadType, "Param")
        };`
      ).join("\n")
    } }`;
    const state = render(raw.agentStateType, "Result");
    const contextItems = raw.contextItemDefinitions.map(item =>
      `{ type: ${JSON.stringify(item.contextItemType)}; data: ${
        render(item.dataType, "Result")
      } }`
    ).join(" | ") || "never";
    const file = `ontology/agents/${name}.ts`;
    const definitionProps = JSON.stringify({
      type: "agent",
      apiName: raw.apiName,
      version: raw.version,
      contextItemTypes: raw.contextItemDefinitions.map(item =>
        item.contextItemType
      ),
    });
    await ctx.fs.writeFile(
      path.join(directory, `${name}.ts`),
      await formatTs(`
      import type { AgentDefinition, AgentSession, AgentSessionState, QueryParam, QueryResult, UnknownContextItem, VersionBound } from "${
        ctx.forInternalUse ? "@osdk/api" : "@osdk/client"
      }";
      import type { $ExpectedClientVersion } from "../../OntologyMetadata${ctx.importExt}";
      import { $osdkMetadata } from "../../OntologyMetadata${ctx.importExt}";
      ${getObjectImports(imports, "", file, true)}

      /** @experimental */
      export namespace ${name} {
        export type CreateSessionArgs = ${args};
        export type SessionArguments = ${argumentValues};
        export type Events = ${events};
        export type AgentState = ${state};
        export type ContextItem = ${contextItems} | UnknownContextItem;
        export interface Types {
          arguments: CreateSessionArgs;
          argumentValues: SessionArguments;
          events: Events;
          state: AgentState;
          contextItem: ContextItem;
        }
        export type Session = AgentSession<Types>;
        export type SessionState = AgentSessionState<Types>;
      }

      /** @experimental */
      export interface ${name} extends AgentDefinition, VersionBound<$ExpectedClientVersion> {
        type: "agent";
        apiName: ${JSON.stringify(raw.apiName)};
        version: ${JSON.stringify(raw.version)};
        __DefinitionMetadata?: ${name}.Types;
      }

      /** @experimental */
      export const ${name}: ${name} = { ${
        definitionProps.slice(1, -1)
      }, osdkMetadata: $osdkMetadata };
    `),
    );
  }
  await ctx.fs.writeFile(
    `${directory}.ts`,
    await formatTs(
      agents.map(agent =>
        `export { ${agent.shortApiName} } from "./agents/${agent.shortApiName}${ctx.importExt}";`
      ).join("\n"),
    ),
  );
}
