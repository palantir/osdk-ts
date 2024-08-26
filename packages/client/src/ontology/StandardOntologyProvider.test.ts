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

import { $ontologyRid, Employee } from "@osdk/client.test.ontology";
import { apiServer } from "@osdk/shared.test";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createMinimalClient } from "../createMinimalClient.js";
import { fetchPage } from "../object/fetchPage.js";
import {
  createStandardOntologyProviderFactory,
} from "./StandardOntologyProvider.js";

describe(createStandardOntologyProviderFactory, () => {
  beforeAll(async () => {
    apiServer.listen();
  });
  afterAll(() => {
    apiServer.close();
  });

  it("doesn't revalidate if not needed", async () => {
    const client = createMinimalClient(
      { ontologyRid: $ontologyRid },
      "https://stack.palantir.com",
      async () => "myAccessToken",
    );

    let loads: string[] = [];
    apiServer.events.on("request:start", ({ request }) => {
      loads.push(new URL(request.url).pathname);
    });

    await fetchPage(client, Employee, {});

    // first load should lookup employee and its link types
    expect(loads).toEqual([
      "/api/v2/ontologies/ri.ontology.main.ontology.698267cc-6b48-4d98-beff-29beb24e9361/objectSets/loadObjects",
      "/api/v2/ontologies/ri.ontology.main.ontology.698267cc-6b48-4d98-beff-29beb24e9361/objectTypes/Employee/fullMetadata",
      "/api/v2/ontologies/ri.ontology.main.ontology.698267cc-6b48-4d98-beff-29beb24e9361/interfaceTypes/FooInterface",
    ]);

    loads = [];

    await fetchPage(client, Employee, {});
    // second load should not need to load ontology info
    expect(loads).toEqual([
      "/api/v2/ontologies/ri.ontology.main.ontology.698267cc-6b48-4d98-beff-29beb24e9361/objectSets/loadObjects",
    ]);
  });
});
