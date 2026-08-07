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
  type SeedFunction,
  type SeedOutput,
} from "@osdk/seed-helpers";

import { OntologySeedingService } from "./generated/cli/index.js";
import type { SeedClient } from "./types.js";

type SeedClientConfig = {
  baseUrl: string;
  metadata: Ontology.OntologyFullMetadata;
  fetchFn?: typeof fetch;
};

type PropsOf<T> = { [K in keyof T]: T[K] };
type SeedClientProps = PropsOf<SeedClient>;

export function createSeedClient(config: SeedClientConfig): SeedClient {
  const { baseUrl, metadata, fetchFn } = config;
  const builder = new SeedBuilder(metadata);
  const seedClientFunction = async <T = void>(
    seed: SeedFunction<T> | SeedOutput,
  ): Promise<T> => {
    let result;
    if (typeof seed === "function") {
      result = seed(builder);
    } else {
      builder.addAll(seed);
    }
    await applySeed(builder.build());
    return result as T;
  };
  const applySeed = async (seed: SeedOutput) => {
    const res = await OntologySeedingService.setSeed(
      {
        baseUrl,
        servicePath: "/api",
        fetchFn,
      },
      seed,
    );
    return res;
  };
  const seedClientUtils: SeedClientProps = {
    ref: (o, pk) => builder.ref(o, pk),
    addAll: async (output) => {
      builder.addAll(output);
      await applySeed(builder.build());
    },
    set: async (output) => {
      builder.set(output);
      await applySeed(builder.build());
    },
    create: async (o, props) => {
      const ref = builder.create(o, props);
      await applySeed(builder.build());
      return ref;
    },
    update: async (ref, props) => {
      const returnedRef = builder.update(ref, props);
      await applySeed(builder.build());
      return returnedRef;
    },
    delete: async (ref) => {
      builder.delete(ref);
      await applySeed(builder.build());
    },
    link: async (source, apiName, target) => {
      builder.link(source, apiName, target);
      await applySeed(builder.build());
    },
    unlink: async (source, apiName, target) => {
      builder.unlink(source, apiName, target);
      await applySeed(builder.build());
    },
  };
  return Object.defineProperties<SeedClient>(
    seedClientFunction as SeedClient,
    Object.getOwnPropertyDescriptors(seedClientUtils),
  );
}
