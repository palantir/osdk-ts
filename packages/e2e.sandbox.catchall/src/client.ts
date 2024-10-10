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

import type { Client } from "@osdk/client";
import { createClient, createPlatformClient } from "@osdk/client";
import invariant from "tiny-invariant";
import { logger } from "./logger.js";
import { loggingFetch } from "./loggingFetch.js";

invariant(process.env.FOUNDRY_STACK !== undefined);
invariant(process.env.FOUNDRY_USER_TOKEN !== undefined);

export const client: Client = createClient(
  process.env.FOUNDRY_STACK,
  "ri.ontology.main.ontology.00000000-0000-0000-0000-000000000000",
  async () => process.env.FOUNDRY_USER_TOKEN!,
  { logger },
  loggingFetch,
);

export const danubeClient: Client = createClient(
  "https://danube-staging.palantircloud.com",
  "ri.ontology.main.ontology.6ae2b235-997d-4b5e-9611-85fa88742697",
  async () => process.env.FOUNDRY_USER_TOKEN!,
  { logger },
  loggingFetch,
);

/**
 * Generally consumers wont need this and will use their createClient() but
 * I want to use this to be sure everything works.
 */
export const platformClient = createPlatformClient(
  process.env.FOUNDRY_STACK,
  async () => process.env.FOUNDRY_USER_TOKEN!,
);
