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

import type * as Ontology from "@osdk/foundry.ontologies";
import {
  SeedBuilder,
  type SeedClient,
  type SeedFunction,
  type SeedOutput,
} from "@osdk/seed-helpers";

import { OntologySeedingService } from "./generated/cli/index.js";

export type IntegrationClientConfig = {
  baseUrl: string;
  metadata: Ontology.OntologyFullMetadata;
  fetchFn?: typeof fetch;
};

export class IntegrationClient {
  #baseUrl: string;
  #metadata: Ontology.OntologyFullMetadata;
  #seed: SeedClient;

  constructor(args: IntegrationClientConfig) {
    this.#baseUrl = args.baseUrl;
    this.#metadata = args.metadata;
    this.#seed = createSeedClient(this.#baseUrl, this.#metadata, args.fetchFn);
  }

  get seed(): SeedClient {
    return this.#seed;
  }
}

const createSeedClient = (
  baseUrl: string,
  metadata: Ontology.OntologyFullMetadata,
  fetchFn?: typeof fetch
): SeedClient => {
  const builder = new SeedBuilder(metadata);
  const applySeed = async (seed: SeedOutput) => {
    const res = await OntologySeedingService.setSeed(
      {
        baseUrl,
        servicePath: "/api",
        fetchFn,
      },
      seed
    );
    return res;
  };
  const seedClientFunction = async <T = void>(
    seed: SeedFunction<T> | SeedOutput
  ): Promise<T> => {
    if (typeof seed === "function") {
      const result = seed(builder);
      await applySeed(builder.build());
      return result;
    }
    await applySeed(seed);
    return undefined as T;
  };

  const seedClient = seedClientFunction as SeedClient;

  seedClient.ref = (o, pk) => builder.ref(o, pk);
  seedClient.addAll = async (output) => {
    builder.addAll(output);
    await applySeed(builder.build());
  };
  seedClient.create = async (o, props) => {
    const ref = builder.create(o, props);
    await applySeed(builder.build());
    return ref;
  };
  seedClient.update = async (ref, props) => {
    const returnedRef = builder.update(ref, props);
    await applySeed(builder.build());
    return returnedRef;
  };
  seedClient.delete = async (ref) => {
    builder.delete(ref);
    await applySeed(builder.build());
  };
  seedClient.link = async (source, apiName, target) => {
    builder.link(source, apiName, target);
    await applySeed(builder.build());
  };
  seedClient.unlink = async (source, apiName, target) => {
    builder.unlink(source, apiName, target);
    await applySeed(builder.build());
  };
  return seedClient;
};
