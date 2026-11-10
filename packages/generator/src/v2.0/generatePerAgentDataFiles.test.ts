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

import { LegacyFauxFoundry, stubData } from "@osdk/shared.test";
import * as ts from "typescript";
import { describe, expect, it } from "vitest";
import { enhanceOntology } from "../GenerateContext/enhanceOntology.js";
import { createMockMinimalFiles } from "../util/test/createMockMinimalFiles.js";
import type {
  WireAgentDefinitionVersion,
  WireOntologyDefinition,
} from "../WireOntologyDefinition.js";
import { generatePerAgentDataFiles } from "./generatePerAgentDataFiles.js";

// TODO(mhogberg): Update APIs to include apiName in AgentDefinitionVersion,
//  remove apiName override from here and use noArgumentsAgentVersion directly.
const agent: WireAgentDefinitionVersion = {
  ...stubData.noArgumentsAgentVersion,
  apiName: stubData.noArgumentsAgentApiName,
};

const ontologyMetadata = new LegacyFauxFoundry().getDefaultOntology()
  .getOntologyFullMetadata();

describe(generatePerAgentDataFiles, () => {
  it.each([false, true])(
    "generates an agent with forInternalUse=%s",
    async forInternalUse => {
      const helper = createMockMinimalFiles();
      await generatePerAgentDataFiles({
        fs: helper.minimalFiles,
        outDir: "/foo",
        ontology: enhanceOntology({
          sanitized: {
            ...ontologyMetadata,
            agents: { [agent.apiName]: agent },
          },
          importExt: ".js",
        }),
        importExt: ".js",
        forInternalUse,
        agentVersionReferences: new Map(),
      });
      expect(helper.getFiles()).toMatchSnapshot();
    },
  );

  it("preserves requested version references", async () => {
    const helper = createMockMinimalFiles();
    await generatePerAgentDataFiles({
      fs: helper.minimalFiles,
      outDir: "/foo",
      ontology: enhanceOntology({
        sanitized: { ...ontologyMetadata, agents: { [agent.apiName]: agent } },
        importExt: ".js",
      }),
      agentVersionReferences: new Map([[agent.apiName, "^1.0.0"]]),
    });
    expect(helper.getFiles()).toMatchSnapshot();
  });

  it.each(
    [
      [
        stubData.weatherAgentApiName,
        stubData.weatherAgentVersion,
      ],
      [
        stubData.optionalArgumentsAgentApiName,
        stubData.optionalArgumentsAgentVersion,
      ],
      [
        stubData.objectArgumentsAgentApiName,
        stubData.objectArgumentsAgentVersion,
      ],
      [
        stubData.structuredArgumentsAgentApiName,
        stubData.structuredArgumentsAgentVersion,
      ],
    ] as const,
  )("generates definitions for %s", async (apiName, definition) => {
    const helper = createMockMinimalFiles();
    await generatePerAgentDataFiles({
      fs: helper.minimalFiles,
      outDir: "/foo",
      ontology: enhanceOntology({
        sanitized: {
          ...ontologyMetadata,
          agents: { [apiName]: { ...definition, apiName } },
        },
        importExt: ".js",
      }),
      importExt: ".js",
      forInternalUse: true,
      agentVersionReferences: new Map(),
    });
    expect(helper.getFiles()).toMatchSnapshot();
  });

  it("generates payload types and imports objects used by events", async () => {
    const definition: WireAgentDefinitionVersion = {
      ...agent,
      eventDefinitions: stubData.structuredArgumentsAgentVersion
        .argumentDefinitions.map(
          field => ({
            eventType: String(field.name),
            payloadType: field.dataType,
          }),
        ),
    };
    const helper = createMockMinimalFiles();
    await generatePerAgentDataFiles({
      fs: helper.minimalFiles,
      outDir: "/foo",
      ontology: enhanceOntology({
        sanitized: {
          ...ontologyMetadata,
          agents: { [definition.apiName]: definition },
        },
        importExt: ".js",
      }),
      importExt: ".js",
      agentVersionReferences: new Map(),
    });
    expect(helper.getFiles()).toMatchSnapshot();
  });

  it("generates result types and imports objects used by agent state", async () => {
    const definition: WireAgentDefinitionVersion = {
      ...agent,
      agentStateType: {
        type: "struct",
        fields: stubData.structuredArgumentsAgentVersion.argumentDefinitions,
      },
    };
    const helper = createMockMinimalFiles();
    await generatePerAgentDataFiles({
      fs: helper.minimalFiles,
      outDir: "/foo",
      ontology: enhanceOntology({
        sanitized: {
          ...ontologyMetadata,
          agents: { [definition.apiName]: definition },
        },
        importExt: ".js",
      }),
      importExt: ".js",
      agentVersionReferences: new Map(),
    });
    expect(helper.getFiles()).toMatchSnapshot();
  });

  it("generates result types and imports objects used by context items", async () => {
    const definition: WireAgentDefinitionVersion = {
      ...agent,
      contextItemDefinitions: [{
        contextItemType: "result",
        dataType: {
          type: "struct",
          fields: stubData.structuredArgumentsAgentVersion.argumentDefinitions,
        },
      }],
    };
    const helper = createMockMinimalFiles();
    await generatePerAgentDataFiles({
      fs: helper.minimalFiles,
      outDir: "/foo",
      ontology: enhanceOntology({
        sanitized: {
          ...ontologyMetadata,
          agents: { [definition.apiName]: definition },
        },
        importExt: ".js",
      }),
      importExt: ".js",
      agentVersionReferences: new Map(),
    });
    expect(helper.getFiles()).toMatchSnapshot();
  });

  it("escapes field names and discriminator strings", async () => {
    const escapingAgent: WireAgentDefinitionVersion = {
      ...stubData.noArgumentsAgentVersion,
      apiName: "escapingAgent",
      contextItemDefinitions: [{
        contextItemType: "escaped\"context",
        dataType: { type: "string" },
      }],
      eventDefinitions: [{
        eventType: "escaped\"event",
        payloadType: { type: "string" },
      }],
      argumentDefinitions: [{
        name: "escaped\"argument",
        dataType: {
          type: "discriminatedUnion",
          discriminatorKey: "escaped\"key",
          members: [{
            discriminatorValue: "escaped\"value",
            fields: [{ name: "escaped\"field", dataType: { type: "string" } }],
          }],
        },
      }],
    };
    const helper = createMockMinimalFiles();

    await generatePerAgentDataFiles({
      fs: helper.minimalFiles,
      outDir: "/foo",
      ontology: enhanceOntology({
        sanitized: {
          ...ontologyMetadata,
          agents: { [escapingAgent.apiName]: escapingAgent },
        },
        importExt: ".js",
      }),
      importExt: ".js",
      agentVersionReferences: new Map(),
    });
    const files = helper.getFiles();
    const sourceFile = ts.createSourceFile(
      "escapingAgent.ts",
      files["/foo/ontology/agents/escapingAgent.ts"],
      ts.ScriptTarget.Latest,
      true,
    );
    const parseDiagnostics =
      (sourceFile as unknown as { parseDiagnostics: ts.Diagnostic[] })
        .parseDiagnostics;

    expect(files).toMatchSnapshot();
    expect(parseDiagnostics).toHaveLength(0);
  });

  it("generates special schema keys", async () => {
    const definition: WireAgentDefinitionVersion = {
      ...agent,
      argumentDefinitions: ["constructor", "toString", "__proto__"].map(
        name => ({
          name,
          dataType: {
            type: "discriminatedUnion",
            discriminatorKey: "kind",
            members: [{
              discriminatorValue: name,
              fields: [{ name, dataType: { type: "string" } }],
            }],
          },
        }),
      ),
      eventDefinitions: [{
        eventType: "__proto__",
        payloadType: { type: "string" },
      }],
      contextItemDefinitions: [{
        contextItemType: "constructor",
        dataType: { type: "string" },
      }],
    };
    const helper = createMockMinimalFiles();
    const ontology = enhanceOntology({
      sanitized: {
        ...ontologyMetadata,
        agents: { [definition.apiName]: definition },
      },
      importExt: ".js",
    });

    await generatePerAgentDataFiles({
      fs: helper.minimalFiles,
      outDir: "/foo",
      ontology,
      importExt: ".js",
      agentVersionReferences: new Map(),
    });

    const files = helper.getFiles();
    const sourceFile = ts.createSourceFile(
      `${definition.apiName}.ts`,
      files[`/foo/ontology/agents/${definition.apiName}.ts`],
      ts.ScriptTarget.Latest,
      true,
    );
    const parseDiagnostics =
      (sourceFile as unknown as { parseDiagnostics: ts.Diagnostic[] })
        .parseDiagnostics;

    expect(files).toMatchSnapshot();
    expect(parseDiagnostics).toHaveLength(0);
  });

  it("preserves unknown types", async () => {
    const definition: WireAgentDefinitionVersion = {
      ...agent,
      agentStateType: {
        type: "futureType",
      } as unknown as WireAgentDefinitionVersion["agentStateType"],
    };
    const helper = createMockMinimalFiles();
    const ontology = enhanceOntology({
      sanitized: {
        ...ontologyMetadata,
        agents: { [definition.apiName]: definition },
      },
      importExt: ".js",
    });

    await generatePerAgentDataFiles({
      fs: helper.minimalFiles,
      outDir: "/foo",
      ontology,
      importExt: ".js",
      agentVersionReferences: new Map(),
    });

    expect(helper.getFiles()).toMatchSnapshot();
  });

  it("generates identical definitions regardless of schema field ordering", async () => {
    const cases = [false, true].map(reverse => {
      const ordered = <T>(values: T[]): T[] =>
        reverse ? [...values].reverse() : values;
      const fields: WireAgentDefinitionVersion["argumentDefinitions"] = ordered(
        [
          { name: "z", dataType: { type: "string" } },
          { name: "a", dataType: { type: "integer" } },
        ],
      );
      const definition: WireAgentDefinitionVersion = {
        ...agent,
        argumentDefinitions: ordered([
          { name: "z", dataType: { type: "struct", fields } },
          {
            name: "a",
            dataType: {
              type: "discriminatedUnion",
              discriminatorKey: "kind",
              members: ordered([
                { discriminatorValue: "z", fields },
                { discriminatorValue: "a", fields },
              ]),
            },
          },
        ]),
        eventDefinitions: ordered([
          { eventType: "z", payloadType: { type: "struct", fields } },
          { eventType: "a", payloadType: { type: "string" } },
        ]),
        contextItemDefinitions: ordered([
          { contextItemType: "z", dataType: { type: "struct", fields } },
          { contextItemType: "a", dataType: { type: "string" } },
        ]),
        agentStateType: { type: "struct", fields },
      };
      const helper = createMockMinimalFiles();
      const ontology = enhanceOntology({
        sanitized: {
          ...ontologyMetadata,
          agents: { [definition.apiName]: definition },
        },
        importExt: ".js",
      });
      return { helper, ontology };
    });

    for (const { helper, ontology } of cases) {
      await generatePerAgentDataFiles({
        fs: helper.minimalFiles,
        outDir: "/foo",
        ontology,
        importExt: ".js",
        agentVersionReferences: new Map(),
      });
    }
    const generated = cases.map(({ helper }) => helper.getFiles());

    expect(generated[0]).toEqual(generated[1]);
  });

  it.each(["empty", "omitted"])(
    "generates an empty export if agents are %s",
    async mode => {
      const ontology: WireOntologyDefinition = {
        ...ontologyMetadata,
        agents: {},
      };
      if (mode === "omitted") {
        delete ontology.agents;
      }
      const helper = createMockMinimalFiles();
      await generatePerAgentDataFiles({
        fs: helper.minimalFiles,
        outDir: "/foo",
        agentVersionReferences: new Map(),
        ontology: enhanceOntology({
          sanitized: ontology,
          importExt: ".js",
        }),
      });
      expect(helper.getFiles()).toEqual({
        "/foo/ontology/agents.ts": "export {};\n",
      });
    },
  );
});
