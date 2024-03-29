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

import { apiServer } from "@osdk/shared.test";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createMinimalClient } from "../createMinimalClient.js";
import { Ontology as MockOntology } from "../generatedNoCheck/index.js";
import { fetchPage } from "../object/fetchPage.js";
import {
  createStandardOntologyProviderFactory,
  USE_FULL_ONTOLOGY,
} from "./StandardOntologyProvider.js";

describe(createStandardOntologyProviderFactory, () => {
  beforeAll(async () => {
    apiServer.listen();
  });
  afterAll(() => {
    apiServer.close();
  });

  it("doesnt realidate if not needed", async () => {
    const client = createMinimalClient(
      MockOntology.metadata,
      "https://stack.palantir.com",
      () => "myAccessToken",
      {
        alwaysRevalidate: false,
      },
    );

    let loads: string[] = [];
    apiServer.events.on("request:start", (request) => {
      loads.push(request.url.pathname);
    });

    await fetchPage(client, MockOntology.objects.Employee, {});

    // first load should lookup employee and its link types
    expect(loads).toEqual(
      USE_FULL_ONTOLOGY
        ? [
          "/api/v2/ontologies/default-ontology/objectSets/loadObjects",
          "/api/v2/ontologies/default-ontology/interfaceTypes",
          "/api/v2/ontologies/default-ontology/fullMetadata",
        ]
        : [
          "/api/v2/ontologies/default-ontology/objectSets/loadObjects",
          "/api/v2/ontologies/default-ontology/objectTypes/Employee",
          "/api/v2/ontologies/default-ontology/objectTypes/Employee/outgoingLinkTypes",
          "/api/v2/ontologies/default-ontology/interfaceTypes",
          "/ontology-metadata/api/ontology/ontology/ontologies/load/all",
          "/ontology-metadata/api/ontology/ontology/loadEntities",
          "/api/v2/ontologies/default-ontology/interfaceTypes/FooInterface",
        ],
    );

    loads = [];

    await fetchPage(client, MockOntology.objects.Employee, {});
    // second load should not need to load ontology info
    expect(loads).toEqual([
      "/api/v2/ontologies/default-ontology/objectSets/loadObjects",
    ]);
  });

  it("properly works when alwaysRevalidate: true", async () => {
    const client = createMinimalClient(
      MockOntology.metadata,
      "https://stack.palantir.com",
      () => "myAccessToken",
      {
        alwaysRevalidate: true,
      },
    );

    let loads: string[] = [];
    apiServer.events.on("request:start", (request) => {
      loads.push(request.url.pathname);
    });

    const loadSequenceWithoutCaching = USE_FULL_ONTOLOGY
      ? [
        "/api/v2/ontologies/default-ontology/objectSets/loadObjects",
        "/api/v2/ontologies/default-ontology/interfaceTypes",
        "/api/v2/ontologies/default-ontology/fullMetadata",
        // annoyingly happens once for interface load and once for object type load, but its temporary
        "/api/v2/ontologies/default-ontology/interfaceTypes",
        "/api/v2/ontologies/default-ontology/fullMetadata",
      ]
      : [
        "/api/v2/ontologies/default-ontology/objectSets/loadObjects",
        "/api/v2/ontologies/default-ontology/objectTypes/Employee",
        "/api/v2/ontologies/default-ontology/objectTypes/Employee/outgoingLinkTypes",
        "/api/v2/ontologies/default-ontology/interfaceTypes",
        "/ontology-metadata/api/ontology/ontology/ontologies/load/all",
        "/ontology-metadata/api/ontology/ontology/loadEntities",
        "/api/v2/ontologies/default-ontology/interfaceTypes/FooInterface",
      ];

    await fetchPage(client, MockOntology.objects.Employee, {});
    expect(loads).toEqual(loadSequenceWithoutCaching);

    // we expect it to reload ontology info
    loads = [];
    await fetchPage(client, MockOntology.objects.Employee, {});
    expect(loads).toEqual(loadSequenceWithoutCaching);
  });
});
