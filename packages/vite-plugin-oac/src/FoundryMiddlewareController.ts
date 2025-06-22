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

import type { msw } from "@osdk/faux";
import { FauxFoundry } from "@osdk/faux";
import type * as Ontologies from "@osdk/foundry.ontologies";
import EventEmitter from "node:events";
import path from "node:path";
import type { Connect } from "vite";
import { applySeed } from "./applySeed.js";
import { ontologyFullMetadataPath } from "./generateOntologyAssets.js";
import { registerOntologyFullMetadata } from "./registerOntologyFullMetadata.js";
import { routeConnectToMsw } from "./routeConnectToMsw.js";
import { readJsonFile } from "./utils/readJsonFile.js";
import type { WatchOntologyAsCodeEvents } from "./watchOntologyAsCode.js";

export interface Hooks {
  preSeed?: (
    fauxOntology: ReturnType<FauxFoundry["getOntology"]>,
  ) => Promise<void>;
}

export class FoundryMiddlewareController {
  #fauxFoundry: FauxFoundry;
  #serverUrl: string;
  #defaultOntologyRid: string;
  readonly mswEmitter: EventEmitter<msw.LifeCycleEventsMap> = new EventEmitter<
    msw.LifeCycleEventsMap
  >();
  #hooks: Hooks | undefined;
  #ontologyDir: string;
  #workDir: string;

  constructor(
    {
      serverUrl,
      defaultOntologyRid,
      oacEmitter,
      ontologyDir,
      hooks,
      workDir,
    }: {
      serverUrl: string;
      defaultOntologyRid: string;
      oacEmitter: EventEmitter<WatchOntologyAsCodeEvents>;
      ontologyDir: string;
      workDir: string;
      hooks?: Hooks;
    },
  ) {
    this.#serverUrl = serverUrl;
    this.#defaultOntologyRid = defaultOntologyRid;
    this.#hooks = hooks;
    this.#ontologyDir = ontologyDir;
    this.#workDir = workDir;

    // create empty initial foundry
    this.#fauxFoundry = this.#createNewFauxFoundry();

    oacEmitter.on("generated", () => {
      this.#reloadOntologyDefinition().catch(e => {
        // eslint-disable-next-line no-console
        console.error("[oac] error reloading ontology definition", e);
      });
    });
  }

  #debugLog(message?: any, ...optionalParams: any[]) {
    // eslint-disable-next-line no-console
    console.log("[oac]", message, ...optionalParams);
  }

  #infoLog(message?: any, ...optionalParams: any[]) {
    // eslint-disable-next-line no-console
    console.log("[oac]", message, ...optionalParams);
  }

  #errorLog(message?: any, ...optionalParams: any[]) {
    // eslint-disable-next-line no-console
    console.error("[oac]", message, ...optionalParams);
  }

  #createNewFauxFoundry() {
    return new FauxFoundry(this.#serverUrl, {
      apiName: "DefaultOntology",
      description: "Description",
      displayName: "Ontology",
      rid: this.#defaultOntologyRid,
    });
  }

  async #reloadOntologyDefinition() {
    // Start with a fresh faux foundry + data
    const fauxFoundry = (this.#fauxFoundry = this.#createNewFauxFoundry());

    const ontology = fauxFoundry.getDefaultOntology();

    const ontologyFullMetadata = readJsonFile<Ontologies.OntologyFullMetadata>(
      ontologyFullMetadataPath(this.#workDir),
    );
    registerOntologyFullMetadata(ontology, ontologyFullMetadata);

    try {
      if (this.#hooks?.preSeed) {
        this.#debugLog("calling preSeed hook");
      }

      await this.#hooks?.preSeed?.(ontology);
    } catch (e) {
      this.#errorLog(
        "Unhandled error from preSeed hook. Ignoring and continuing.",
        e,
      );
    }

    this.#debugLog("applying seed data");
    await applySeed(
      this.#fauxFoundry,
      path.resolve(this.#ontologyDir, "seed.ts"),
    );

    this.#infoLog("Finished reloading ontology & seed data");
    // TODO Maybe emit something that tells the front end associated with this
    // vite plugin to full reload?
  }

  middleware: Connect.NextHandleFunction = async (req, res, next) => {
    return void await routeConnectToMsw(
      this.#serverUrl,
      this.#fauxFoundry.handlers,
      this.mswEmitter,
      req,
      res,
      next,
    );
  };
}
