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
import type { Logger } from "./Logger.js";
import type { TsServer } from "./tsserver.js";
import { startTsServer } from "./tsserver.js";

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

describe("intellisense", () => {
  let packagesDir: string;
  let clientPackagePath: string;

  beforeAll(() => {
    const clientsPackageJson = findUpSync("package.json", {
      cwd: import.meta.url,
    });
    invariant(clientsPackageJson != null);
    packagesDir = path.join(
      path.dirname(clientsPackageJson),
      "..",
    );

    clientPackagePath = path.join(packagesDir, "client");
  });

  let tsServer: TsServer;
  let intellisenseFilePath: string;

  beforeEach(async (a) => {
    intellisenseFilePath = path.join(
      clientPackagePath,
      "src",
      "intellisense.test.helpers",
      `${a.task.name}.ts`,
    );

    expect(ts.sys.fileExists(intellisenseFilePath)).toBeTruthy();

    tsServer = await startTsServer(rootLogger);
    await tsServer.sendOpenRequest({ file: intellisenseFilePath });
  });

  afterEach(async () => {
    tsServer.stop();
    tsServer = undefined as any;
  });

  it("callsQueryAcceptsObject", { timeout: 40_000 }, async () => {
    const { resp } = await tsServer.sendQuickInfoRequest({
      file: intellisenseFilePath,
      line: 27,
      offset: 6,
    });
    expect(resp.body?.documentation).toMatchInlineSnapshot(
      `"(no ontology metadata)"`,
    );
  });
});
