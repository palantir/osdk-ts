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

  it("escapes field names and discriminator strings", async () => {
    const escapingAgent: WireAgentDefinitionVersion = {
      ...stubData.noArgumentsAgentVersion,
      apiName: "escapingAgent",
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
    expect(helper.getFiles()).toMatchSnapshot();
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
