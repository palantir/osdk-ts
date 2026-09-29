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
import * as ts from "typescript";
import { describe, expect, it } from "vitest";
import { enhanceOntology } from "../GenerateContext/enhanceOntology.js";
import { createMockMinimalFiles } from "../util/test/createMockMinimalFiles.js";
import { TodoWireOntology } from "../util/test/TodoWireOntology.js";
import type {
  WireAgentDefinition,
  WireOntologyDefinition,
} from "../WireOntologyDefinition.js";
import { generateClientSdkVersionTwoPointZero } from "./generateClientSdkVersionTwoPointZero.js";
import { generatePerAgentDataFiles } from "./generatePerAgentDataFiles.js";

const objectTypeRid = TodoWireOntology.objectTypes.Todo.objectType.rid;
const agent: WireAgentDefinition = {
  apiName: "weatherAgent",
  version: "1.2.3-rc1",
  createdTime: "2026-01-01T00:00:00Z",
  createdBy: "user",
  argumentDefinitions: [
    { name: "city", dataType: { type: "string" } },
    {
      name: "nullable",
      dataType: { type: "nullable", wrappedType: { type: "string" } },
    },
  ],
  eventDefinitions: [
    {
      eventType: "LookupWeather",
      payloadType: {
        type: "struct",
        fields: [{ name: "city", dataType: { type: "string" } }],
      },
    },
    {
      eventType: "use-todos",
      payloadType: {
        type: "list",
        elementType: { type: "object", objectTypeRid },
      },
    },
    {
      eventType: "SetTodos",
      payloadType: { type: "objectSet", objectTypeRid },
    },
  ],
  agentStateType: {
    type: "record",
    valueType: {
      type: "discriminatedUnion",
      discriminatorKey: "kind",
      members: [
        {
          discriminatorValue: "todo",
          fields: [{
            name: "todo",
            dataType: { type: "object", objectTypeRid },
          }],
        },
        {
          discriminatorValue: "count",
          fields: [{ name: "count", dataType: { type: "integer" } }],
        },
      ],
    },
  },
  contextItemDefinitions: [
    {
      contextItemType: "weather-result",
      dataType: {
        type: "struct",
        fields: [{ name: "temperature", dataType: { type: "double" } }],
      },
    },
    {
      contextItemType: "todos",
      dataType: { type: "objectSet", objectTypeRid },
    },
  ],
};
const ontology: WireOntologyDefinition = {
  ...TodoWireOntology,
  agentTypes: {
    weatherAgent: agent,
    emptyAgent: {
      ...agent,
      apiName: "emptyAgent",
      argumentDefinitions: [],
      eventDefinitions: [{
        eventType: "Done",
        payloadType: { type: "struct", fields: [] },
      }, {
        eventType: "Progress",
        payloadType: {
          type: "discriminatedUnion",
          discriminatorKey: "kind",
          members: [
            { discriminatorValue: "done", fields: [] },
            {
              discriminatorValue: "pending",
              fields: [{ name: "count", dataType: { type: "integer" } }],
            },
          ],
        },
      }],
    },
  },
};

async function generate() {
  const helper = createMockMinimalFiles();
  await generateClientSdkVersionTwoPointZero(
    ontology,
    "test",
    helper.minimalFiles,
    "/foo",
    "module",
    new Map(),
    new Map(),
    new Map(),
    true,
  );
  return helper.getFiles();
}

describe("agent generation", () => {
  it("generates typed bindings, exact event keys and barrel exports", async () => {
    const files = await generate();
    expect(files["/foo/ontology/agents/weatherAgent.ts"]).toMatchSnapshot();
    expect(files["/foo/ontology/agents.ts"]).toContain(
      "export { weatherAgent }",
    );
    expect(files["/foo/index.ts"]).toContain(
      "export { emptyAgent, weatherAgent }",
    );
    expect(files["/foo/index.ts"]).toContain("export * as $Agents");
  });

  it.each([ts.ModuleKind.ESNext, ts.ModuleKind.CommonJS])(
    "compiles generated bindings and enforces their public types (%s)",
    async module => {
      const base = path.resolve("__agent_generated__");
      const files = Object.fromEntries(
        Object.entries(await generate()).map((
          [name, content],
        ) => [name.replace("/foo", base), content]),
      );
      files[`${base}/usage.ts`] = `
      import type { AgentClient, AgentDefinition, AgentSession } from "@osdk/api";
      import { weatherAgent, emptyAgent } from "./index.js";
      declare const agent: AgentClient<typeof weatherAgent>;
      async function check() {
        const session = await agent.createSession({ city: "London", nullable: null });
        // @ts-expect-error nullable fields are still required
        agent.createSession({ city: "London" });
        // @ts-expect-error arguments are required
        agent.createSession();
        await session.sendEvent({ LookupWeather: { city: "London" } });
        // @ts-expect-error event keys retain their exact spelling
        session.sendEvent({ lookupWeather: { city: "London" } });
        // @ts-expect-error wrong payload
        session.sendEvent({ LookupWeather: { city: 1 } });
        // @ts-expect-error events are exclusive
        session.sendEvent({ LookupWeather: { city: "London" }, "use-todos": [] });
        // @ts-expect-error empty events are invalid
        session.sendEvent({});
        const both = { LookupWeather: { city: "London" }, "use-todos": [] };
        // @ts-expect-error exclusivity also applies to variables
        session.sendEvent(both);
        await session.sendEvent({ "use-todos": [123] });
        const state = await session.getState();
        const item = state.contextItems.a;
        if (item.type === "weather-result") {
          const temperature: number = item.data.temperature;
        } else if (item.type === "$unknown") {
          const name: string = item.contextItemType;
          const data: unknown = item.data;
          // @ts-expect-error unknown context items must be narrowed
          item.data.temperature;
        }
        const widened: AgentSession = session;
        await widened.sendEvent({ arbitrary: 1 });
      }
      declare const empty: AgentClient<typeof emptyAgent>;
      empty.createSession();
      // @ts-expect-error empty arguments cannot have extra keys
      empty.createSession({ extra: 1 });
      empty.getSession("id").then(session => {
        session.sendEvent({ Done: {} });
        session.sendEvent({ Progress: { kind: "done" } });
        session.sendEvent({ Progress: { kind: "pending", count: 1 } });
        // @ts-expect-error unknown discriminators are invalid
        session.sendEvent({ Progress: { kind: "unknown" } });
        // @ts-expect-error nonempty members still require their fields
        session.sendEvent({ Progress: { kind: "pending" } });
        // @ts-expect-error empty payloads cannot have extra keys
        session.sendEvent({ Done: { extra: 1 } });
        // @ts-expect-error empty payloads must be objects
        session.sendEvent({ Done: 1 });
      });
      declare const generic: AgentClient<AgentDefinition>;
      generic.createSession({ arbitrary: 1 }).then(session => session.sendEvent({ untyped: { x: true } }));
    `;
      const options: ts.CompilerOptions = {
        strict: true,
        noEmit: true,
        skipLibCheck: true,
        target: ts.ScriptTarget.ES2022,
        module,
        moduleResolution: ts.ModuleResolutionKind.Node10,
        baseUrl: process.cwd(),
        paths: { "@osdk/api": ["../api/build/types/index.d.ts"] },
      };
      const host = ts.createCompilerHost(options);
      const originalRead = host.readFile.bind(host);
      const originalExists = host.fileExists.bind(host);
      const originalDirectoryExists = host.directoryExists!.bind(host);
      host.readFile = file => files[file] ?? originalRead(file);
      host.fileExists = file => file in files || originalExists(file);
      host.directoryExists = dir =>
        dir.startsWith(base) || originalDirectoryExists(dir);
      const program = ts.createProgram([`${base}/usage.ts`], options, host);
      const errors = ts.getPreEmitDiagnostics(program).map(error =>
        ts.flattenDiagnosticMessageText(error.messageText, "\n")
      );
      expect(errors).toEqual([]);
    },
  );

  it("imports agent object references from external SDKs", async () => {
    const helper = createMockMinimalFiles();
    await generatePerAgentDataFiles({
      fs: helper.minimalFiles,
      outDir: "/foo",
      importExt: ".js",
      forInternalUse: true,
      queryVersionReferences: new Map(),
      ontology: enhanceOntology({
        sanitized: ontology,
        importExt: ".js",
        externalObjects: new Map([["Todo", "@other/sdk"]]),
      }),
    });
    expect(helper.getFiles()["/foo/ontology/agents/weatherAgent.ts"]).toContain(
      "from '@other/sdk'",
    );
  });

  it.each(["latest", "^1.0.0", "1.0", ""])(
    "rejects unpinned version %s",
    async version => {
      const helper = createMockMinimalFiles();
      await expect(
        generateClientSdkVersionTwoPointZero(
          { ...ontology, agentTypes: { weatherAgent: { ...agent, version } } },
          "test",
          helper.minimalFiles,
          "/foo",
        ),
      ).rejects.toThrow("pinned version");
    },
  );
});
