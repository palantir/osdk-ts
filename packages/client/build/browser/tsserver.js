/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import { execaNode } from "execa";
import { findUpMultiple } from "find-up";
import { EventEmitter } from "node:events";
import * as fs from "node:fs/promises";
import * as path from "node:path";
import pLocate from "p-locate";
import pMap from "p-map";
import invariant from "tiny-invariant";
import { server as s } from "typescript";
class TsServerImpl extends EventEmitter {
  #tsServerPath;
  #nextSeq = 1;
  #subprocess;
  #logger;
  constructor(tsServerPath, logger) {
    super();
    this.#tsServerPath = tsServerPath;
    this.#logger = logger;
  }
  get subprocess() {
    return this.#subprocess;
  }
  async start() {
    this.#subprocess = execaNode({
      ipc: true,
      serialization: "json"
    })`${this.#tsServerPath} --useNodeIpc`;
    if (this.#logger.isLevelEnabled("trace")) {
      this.#subprocess.on("message", req => {
        this.#logger.trace({
          req
        }, "message received");
      });
    }
    this.#subprocess.on("exit", () => {
      this.#logger.info("tsserver exited");
      this.emit("exit");
    });
    return this;
  }
  stop() {
    if (this.#subprocess?.connected) {
      this.#subprocess?.disconnect();
    }
  }
  async getOneMessage(filter) {
    return await this.subprocess.getOneMessage({
      filter
    });
  }
  #requestFactory = (command, isResponse) => async args => {
    return await this.#makeRequest(command, args, isResponse);
  };
  sendOpenRequest = this.#requestFactory(s.protocol.CommandTypes.Open);
  sendQuickInfoRequest = this.#requestFactory(s.protocol.CommandTypes.Quickinfo, isQuickInfoResponse);
  async #makeRequest(command, args, isResponse) {
    const seq = this.#nextSeq++;
    const req = {
      type: "request",
      command,
      arguments: args,
      seq
    };
    this.#logger.trace({
      req
    }, "requesting");
    await this.#subprocess?.sendMessage(req);
    if (isResponse) {
      return {
        req,
        resp: await this.#subprocess?.getOneMessage({
          filter: isResponse
        })
      };
    }
    return {
      req,
      resp: undefined
    };
  }
}
export async function startTsServer(logger) {
  const tsServerPath = await getTsServerPath();
  !(tsServerPath != null) ? process.env.NODE_ENV !== "production" ? invariant(false) : invariant(false) : void 0;
  return new TsServerImpl(tsServerPath, logger).start();
}
async function getTsServerPath() {
  const nodeModuleDirs = await findUpMultiple("node_modules", {
    cwd: import.meta.url,
    type: "directory"
  });
  const possibleTsServerPaths = await pMap(nodeModuleDirs, dir => path.join(dir, "typescript", "lib", "tsserver.js"));
  const tsServerPath = await pLocate(["no", ...possibleTsServerPaths], async dir => {
    try {
      const c = await fs.stat(dir);
      return c.isFile();
    } catch (e) {
      return false;
    }
  });
  return tsServerPath;
}
export function isEvent(m) {
  return !!(m && typeof m === "object" && "type" in m && m.type === "event");
}
export function isResponse(m) {
  return !!(m && typeof m === "object" && "type" in m && m.type === "response");
}
export function isProjectLoadingStart(m) {
  return isEvent(m) && m.event === "projectLoadingStart";
}
export function isProjectLoadingEnd(m) {
  return isEvent(m) && m.event === "projectLoadingFinish";
}
export function isQuickInfoResponse(m, requestSeq) {
  return isResponse(m) && m.command === s.protocol.CommandTypes.Quickinfo && (requestSeq == null || m.request_seq === requestSeq);
}
//# sourceMappingURL=tsserver.js.map