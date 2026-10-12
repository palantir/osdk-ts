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

import { describe, expect, it } from "vitest";
import { enhanceOntology } from "../GenerateContext/enhanceOntology.js";
import { createMockMinimalFiles } from "../util/test/createMockMinimalFiles.js";
import { TodoWireOntology } from "../util/test/TodoWireOntology.js";
import type { WireAgentDefinitionVersion } from "../WireOntologyDefinition.js";
import { generatePerAgentDataFiles } from "./generatePerAgentDataFiles.js";

const agent: WireAgentDefinitionVersion = {
  apiName: "com.example.weatherAgent",
  version: "1.2.3",
  createdTime: "2026-01-01T00:00:00Z",
  createdBy: "user",
  argumentDefinitions: [{ name: "city", dataType: { type: "string" } }],
  eventDefinitions: [],
  agentStateType: { type: "struct", fields: [] },
  contextItemDefinitions: [],
};

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
            ...TodoWireOntology,
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

  it("generates an empty export if there are no agents", async () => {
    const helper = createMockMinimalFiles();
    await generatePerAgentDataFiles({
      fs: helper.minimalFiles,
      outDir: "/foo",
      agentVersionReferences: new Map(),
      ontology: enhanceOntology({
        sanitized: { ...TodoWireOntology, agents: {} },
        importExt: ".js",
      }),
    });
    expect(helper.getFiles()).toEqual({
      "/foo/ontology/agents.ts": "export {};\n",
    });
  });
});
