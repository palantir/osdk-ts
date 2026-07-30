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

import fs from "node:fs/promises";

import type {
  ActionDefinition,
  InterfaceDefinition,
  ObjectTypeDefinition,
  QueryDefinition,
} from "@osdk/api";
import type { Experiment } from "@osdk/api/unstable";
import { createClient, type Client } from "@osdk/client";
import type * as Ontology from "@osdk/foundry.ontologies";
import {
  SeedBuilder,
  type SeedClient,
  type SeedFunction,
  type SeedOutput,
} from "@osdk/seed-helpers";
import { createMockClient, type MockClient } from "@osdk/unit-testing";
import { fetch as undiciFetch, Agent } from "undici";

import { OntologySeedingService } from "./generated/cli/index.js";

type LocalOntologyClient = Client & {
  // local ontology does not have the ability to support function queries at the moment.
  whenQuery: MockClient["whenQuery"];
};

export interface IntegrationClient {
  client: LocalOntologyClient;
  seed: SeedClient;
}

/** The definition kinds accepted by {@link Client}'s call signatures. */
type ClientArg =
  | ObjectTypeDefinition
  | InterfaceDefinition
  | ActionDefinition
  | QueryDefinition
  | Experiment<"2.0.8">
  | Experiment<"2.1.0">
  | Experiment<"2.8.0">
  | Experiment<"2.19.0">;

type SeedClientConfig = {
  baseUrl: string;
  metadata: Ontology.OntologyFullMetadata;
  fetchFn?: typeof fetch;
};

type PropsOf<T> = { [K in keyof T]: T[K] };
type SeedClientProps = PropsOf<SeedClient>;

function createSeedClient(config: SeedClientConfig): SeedClient {
  const { baseUrl, metadata, fetchFn } = config;
  const builder = new SeedBuilder(metadata);
  const seedClientFunction = async <T = void>(
    seed: SeedFunction<T> | SeedOutput
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
      seed
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
    Object.getOwnPropertyDescriptors(seedClientUtils)
  );
}

export type IntegrationClientConfig = {
  baseUrl: string;
  metadata: Ontology.OntologyFullMetadata;
  caCertPath?: string;
};

export async function createIntegrationClient(
  config: IntegrationClientConfig
): Promise<IntegrationClient> {
  const { baseUrl, metadata, caCertPath } = config;
  const agent = new Agent({
    connect: caCertPath
      ? {
          ca: await fs.readFile(caCertPath),
        }
      : {
          rejectUnauthorized: false,
        },
  });
  const fetchWithCert = ((input, init) =>
    undiciFetch(input, {
      ...init,
      dispatcher: agent,
    })) satisfies typeof undiciFetch as unknown as typeof fetch;
  const realClient = createClient(
    baseUrl,
    metadata.ontology.rid,
    () => Promise.resolve("integration-client-token"),
    {},
    fetchWithCert
  );
  const mockClient = createMockClient();
  const clientInternal = ((def: ClientArg) => {
    if (def.type === "query") {
      return mockClient(def);
    }
    if (def.type === "action") {
      return realClient(def);
    }
    if (def.type === "interface") {
      return realClient(def);
    }
    if (def.type === "object") {
      return realClient(def);
    }
    return realClient(def);
  }) as Client;
  const client = Object.defineProperties<LocalOntologyClient>(
    clientInternal as LocalOntologyClient,
    {
      ...Object.getOwnPropertyDescriptors(realClient),
      whenQuery: {
        value: mockClient.whenQuery.bind(undefined),
      },
    }
  );
  const seed = createSeedClient({
    baseUrl,
    metadata,
    fetchFn: fetchWithCert,
  });
  return {
    client,
    seed,
  };
}
