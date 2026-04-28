/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { Logger } from "@osdk/api";
import type { TsServer } from "@osdk/client/internal-node";
import { startTsServer } from "@osdk/client/internal-node";
import { findUpSync } from "find-up";
import * as path from "node:path";
import invariant from "tiny-invariant";
import * as ts from "typescript";
import {
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";

// it needs to be hoisted because its referenced from our mocked WebSocket
// which must be hoisted to work
const rootLogger = await vi.hoisted(async (): Promise<Logger> => {
  const pino = (await import("pino")).pino;
  const pinoPretty = await import("pino-pretty");
  const { EventEmitter } = await import("node:events");
  class PinoConsoleLogDestination extends EventEmitter {
    write(a: string) {
      // remove trailing newline since console.log adds one
      if (a.at(-1) === "\n") a = a.slice(0, -1);

      // This lets the test framework aggregate the logs per test, whereas direct to stdout does not
      console.log(a);
    }
  }
  return Promise.resolve(pino(
    { level: "info" },
    (pinoPretty.build)({
      sync: true,
      timestampKey: undefined,
      errorLikeObjectKeys: ["error", "err", "exception"],
      errorProps: "stack,cause,properties",
      ignore: "time,hostname,pid",
      destination: new PinoConsoleLogDestination(),
    }),
  ));
});

/**
 * @vitest-environment node
 * @vitest-pool forks
 */
describe("intellisense", () => {
  let packagesDir: string;
  let reactPackagePath: string;

  beforeAll(() => {
    const reactPackageJson = findUpSync("package.json", {
      cwd: import.meta.dirname,
    });
    console.log({ reactPackageJson });
    invariant(reactPackageJson != null);
    packagesDir = path.join(
      path.dirname(reactPackageJson),
      "..",
    );

    reactPackagePath = path.join(packagesDir, "react");
  });

  let tsServer: TsServer | undefined;
  let intellisenseFilePath: string;

  beforeEach(async (a) => {
    intellisenseFilePath = path.join(
      reactPackagePath,
      "src",
      "intellisense.test.helpers",
      `${a.task.name}.ts`,
    );

    console.log(intellisenseFilePath);

    expect(ts.sys.fileExists(intellisenseFilePath)).toBeTruthy();

    try {
      tsServer = await startTsServer(rootLogger);
      await tsServer.sendOpenRequest({ file: intellisenseFilePath });
    } catch (error) {
      if (tsServer) {
        try {
          tsServer.stop();
        } catch {
          // Ignore cleanup errors
        }
        tsServer = undefined;
      }
      throw error;
    }
  });

  afterEach(() => {
    if (tsServer) {
      tsServer.stop();
      tsServer = undefined;
    }
  });

  it("useOsdkObjectsWithPivot", { timeout: 40_000 }, async () => {
    expect(ts.sys.fileExists(intellisenseFilePath)).toBeTruthy();
    invariant(tsServer);

    const { resp } = await tsServer.sendCompletionsRequest({
      file: intellisenseFilePath,
      line: 29,
      offset: 15,
      triggerKind: ts.CompletionTriggerKind.Invoked,
    });

    const completions = resp.body?.entries.map(e => e.name) ?? [];
    expect(completions).toContain("lead");

    const { resp: typeResp } = await tsServer.sendQuickInfoRequest({
      file: intellisenseFilePath,
      line: 33,
      offset: 10,
    });

    expect(typeResp.body?.displayString).toBeDefined();
    expect(typeResp.body?.displayString).toContain("Employee");
  });

  it("useOsdkObjectsWithIltPivot", { timeout: 40_000 }, async () => {
    expect(ts.sys.fileExists(intellisenseFilePath)).toBeTruthy();
    invariant(tsServer);

    // ILT string pivot: completions at the pivotTo field should still show concrete links
    const { resp: completionsResp } = await tsServer.sendCompletionsRequest({
      file: intellisenseFilePath,
      line: 42,
      offset: 15,
      triggerKind: ts.CompletionTriggerKind.Invoked,
    });

    const completions = completionsResp.body?.entries.map(e => e.name) ?? [];
    expect(completions).toContain("lead");

    // ILT pivot: TypeScript accepts the string — verify data resolves to an Osdk instance type
    const { resp: iltTypeResp } = await tsServer.sendQuickInfoRequest({
      file: intellisenseFilePath,
      line: 34,
      offset: 10,
    });

    expect(iltTypeResp.body?.displayString).toBeDefined();
    expect(iltTypeResp.body?.displayString).toContain("Osdk.Instance");

    // Concrete pivot: data type should still be Employee (specific linked type)
    const { resp: concreteTypeResp } = await tsServer.sendQuickInfoRequest({
      file: intellisenseFilePath,
      line: 45,
      offset: 10,
    });

    expect(concreteTypeResp.body?.displayString).toBeDefined();
    expect(concreteTypeResp.body?.displayString).toContain("Employee");
  });

  it("useOsdkObjectsWithRids", { timeout: 40_000 }, async () => {
    expect(ts.sys.fileExists(intellisenseFilePath)).toBeTruthy();
    invariant(tsServer);

    const { resp: ridsResp } = await tsServer.sendQuickInfoRequest({
      file: intellisenseFilePath,
      line: 30,
      offset: 9,
    });

    expect(ridsResp.body?.displayString).toBeDefined();
    expect(ridsResp.body?.displayString).toContain("$rid");

    const { resp: noRidsResp } = await tsServer.sendQuickInfoRequest({
      file: intellisenseFilePath,
      line: 34,
      offset: 9,
    });

    expect(noRidsResp.body?.displayString).toBeDefined();
    expect(noRidsResp.body?.displayString).not.toContain("$rid");
  });

  it("useOsdkObjectsWithProperties", { timeout: 40_000 }, async () => {
    expect(ts.sys.fileExists(intellisenseFilePath)).toBeTruthy();
    invariant(tsServer);

    const { resp } = await tsServer.sendQuickInfoRequest({
      file: intellisenseFilePath,
      line: 27,
      offset: 10,
    });

    expect(resp.body?.displayString).toContain("DerivedProperty.Clause");

    const { resp: dataResp } = await tsServer.sendQuickInfoRequest({
      file: intellisenseFilePath,
      line: 31,
      offset: 11,
    });

    expect(dataResp.body?.displayString).toBeDefined();
    expect(dataResp.body?.displayString).toContain("Osdk.Instance<Employee");
  });

  it(
    "useOsdkObjectsWithPivotStreamUpdates",
    { timeout: 40_000 },
    async () => {
      expect(ts.sys.fileExists(intellisenseFilePath)).toBeTruthy();
      invariant(tsServer);

      // Verify pivotTo-only still gets correct linked type (line 26: data in PivotOnly)
      const { resp: pivotResp } = await tsServer.sendQuickInfoRequest({
        file: intellisenseFilePath,
        line: 26,
        offset: 13,
      });
      expect(pivotResp.body?.displayString).toBeDefined();
      expect(pivotResp.body?.displayString).toContain("Employee");

      // Verify streamUpdates-only compiles (line 33: data in StreamOnly)
      const { resp: streamResp } = await tsServer.sendQuickInfoRequest({
        file: intellisenseFilePath,
        line: 33,
        offset: 13,
      });
      expect(streamResp.body?.displayString).toBeDefined();

      // The @ts-expect-error on line 41 validates that combining pivotTo +
      // streamUpdates is a type error. If the restriction is removed, typecheck
      // will fail with "unused @ts-expect-error".
    },
  );
});
