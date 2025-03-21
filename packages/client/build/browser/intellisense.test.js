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
import { afterEach, beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import { startTsServer } from "./tsserver.js";

// it needs to be hoisted because its referenced from our mocked WebSocket
// which must be hoisted to work
const rootLogger = await vi.hoisted(async () => {
  const pino = (await import("pino")).pino;
  const pinoPretty = await import("pino-pretty");
  const {
    EventEmitter
  } = await import("node:events");
  return Promise.resolve(pino({
    level: "info"
  }, pinoPretty.build({
    sync: true,
    timestampKey: undefined,
    errorLikeObjectKeys: ["error", "err", "exception"],
    errorProps: "stack,cause,properties",
    ignore: "time,hostname,pid",
    destination: new class extends EventEmitter {
      write(a) {
        // remove trailing newline since console.log adds one
        if (a.at(-1) === "\n") a = a.slice(0, -1);

        // This lets the test framework aggregate the logs per test, whereas direct to stdout does not
        console.log(a);
      }
    }()
  })));
});
describe("intellisense", () => {
  let packagesDir;
  let clientPackagePath;
  beforeAll(() => {
    const clientsPackageJson = findUpSync("package.json", {
      cwd: import.meta.dirname
    });
    console.log({
      clientsPackageJson
    });
    !(clientsPackageJson != null) ? process.env.NODE_ENV !== "production" ? invariant(false) : invariant(false) : void 0;
    packagesDir = path.join(path.dirname(clientsPackageJson), "..");
    clientPackagePath = path.join(packagesDir, "client");
  });
  let tsServer;
  let intellisenseFilePath;
  beforeEach(async a => {
    intellisenseFilePath = path.join(clientPackagePath, "src", "intellisense.test.helpers", `${a.task.name}.ts`);
    console.log(intellisenseFilePath);
    expect(ts.sys.fileExists(intellisenseFilePath)).toBeTruthy();
    tsServer = await startTsServer(rootLogger);
    await tsServer.sendOpenRequest({
      file: intellisenseFilePath
    });
  });
  afterEach(async () => {
    tsServer.stop();
    tsServer = undefined;
  });
  it("callsQueryAcceptsObject", {
    timeout: 40_000
  }, async () => {
    const {
      resp
    } = await tsServer.sendQuickInfoRequest({
      file: intellisenseFilePath,
      line: 27,
      offset: 6
    });
    expect(resp.body?.documentation).toMatchInlineSnapshot(`"(no ontology metadata)"`);
  });
});
//# sourceMappingURL=intellisense.test.js.map