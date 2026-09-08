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
import { createMockClient } from "@osdk/unit-testing";
import invariant from "tiny-invariant";
import { fetch as undiciFetch, Agent } from "undici";

import type { IntegrationClient, IntegrationClientConfig } from "./types.js";
import { checkFoundryCliVersion } from "./utils/foundry-cli.js";

/** The definition kinds accepted by {@link Client}'s call signatures. */
type ClientArg =
  | ObjectTypeDefinition
  | InterfaceDefinition
  | ActionDefinition
  | QueryDefinition
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | Experiment<any>;

export async function createIntegrationClient(
  config: IntegrationClientConfig,
): Promise<IntegrationClient> {
  const foundryCli = await checkFoundryCliVersion();
  invariant(
    foundryCli.type !== "not-found",
    "Foundry CLI must be installed before creating an integration client.",
  );
  return createIntegrationClientForRunningServer(config);
}

export async function createIntegrationClientForRunningServer(
  config: IntegrationClientConfig,
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
    fetchWithCert,
  );
  const mockClient = createMockClient();
  const clientInternal = ((def: ClientArg) => {
    switch (def.type) {
      case "query":
        return mockClient(def);
      case "action":
        return realClient(def);
      case "interface":
        return realClient(def);
      case "object":
        return realClient(def);
      case "experiment":
      default:
        return realClient(def);
    }
  }) as Client;
  const client = Object.defineProperties<IntegrationClient>(
    clientInternal as IntegrationClient,
    {
      ...Object.getOwnPropertyDescriptors(realClient),
      whenQuery: {
        value: mockClient.whenQuery.bind(undefined),
      },
      clearStubs: {
        value: mockClient.clearStubs.bind(undefined),
      },
    },
  );
  return client;
}
