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

import type { FauxFoundry, msw } from "@osdk/faux";
import EventEmitter from "node:events";
import * as fs from "node:fs";
import fsPromises from "node:fs/promises";
import type { IncomingMessage, ServerResponse } from "node:http";
import path from "node:path";
import * as util from "node:util";
import type { Connect, ViteDevServer } from "vite";
import { applyOntologyAndSeed } from "./applyOntologyAndSeed.js";
import { generateOntologyAssets } from "./generateOntologyAssets.js";
import type { OacConfig } from "./OacConfig.js";
import { OacServerContext } from "./OacServerContext.js";
import { routeConnectToMsw } from "./routeConnectToMsw.js";

export class OacDevServer extends OacServerContext {
  foundry: FauxFoundry;

  constructor(config: OacConfig, server: ViteDevServer) {
    super(config, server);

    // create one up front so its never null
    this.foundry = this.fauxFoundryFactory();

    this.emitter.on("generatedOntologyAssets", async () => {
      this.foundry = this.fauxFoundryFactory();
      await applyOntologyAndSeed(this.foundry, this);
      const dataStore = this.foundry.getDataStore(
        "ri.ontology.main.ontology.00000000-0000-0000-0000-000000000000",
      );
      const objectsByApiName = dataStore.ontology.getAllObjectTypes().map((
        { objectType },
      ) => [
        objectType.apiName,
        [...dataStore.getObjectsOfType(objectType.apiName)],
      ]);
      await fsPromises.writeFile(
        path.join(this.workDir, ".faux-datastore.json"),
        JSON.stringify(objectsByApiName, null, 2),
      );
      server.hot.send({ type: "full-reload" });
    });

    server.middlewares.use(this.#connectMiddleware);
  }

  #connectMiddleware = async (
    req: Connect.IncomingMessage,
    res: ServerResponse<IncomingMessage>,
    next: Connect.NextFunction,
  ): Promise<void> => {
    const mswEmitter = new EventEmitter<msw.LifeCycleEventsMap>();

    return void await routeConnectToMsw(
      this,
      this.serverUrl,
      this.foundry,
      mswEmitter,
      req,
      res,
      next,
    );
  };

  watchOntologyAsCode = async (): Promise<void> => {
    const { ontologyDir, watcher } = this;

    this.logger.info(`Starting OAC file watcher for ${ontologyDir}`);

    if (!fs.existsSync(ontologyDir)) {
      fs.mkdirSync(ontologyDir, { recursive: true });
    }

    watcher.add(ontologyDir);

    // Add event listeners
    watcher
      .on("add", this.#handleOacFileChanged)
      .on("change", this.#handleOacFileChanged)
      .on("unlink", this.#handleOacFileChanged);

    // invoke the handler at startup
    await this.#handleOacFileChanged(undefined);

    return;
  };

  #handleOacFileChanged = async (filePath: string | undefined) => {
    if (
      filePath
      && (!filePath.startsWith(`${this.ontologyDir}/`))
    ) {
      return;
    }

    if (filePath) {
      this.logger.info(`File ${filePath} changed.`);
    }

    try {
      await fs.promises.mkdir(this.workDir, { recursive: true });
      await generateOntologyAssets(this);
      await this.emitter.emit("generatedOntologyAssets");
    } catch (error) {
      this.logger.error(
        `Error generating ontology assets: ${util.inspect(error)}`,
      );
    }
  };
}

const isTypescriptFile = (filePath: string) =>
  filePath.endsWith(".ts") || filePath.endsWith(".mts");
