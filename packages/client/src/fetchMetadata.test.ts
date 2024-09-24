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

import type {
  ActionMetadata,
  InterfaceMetadata,
  ObjectMetadata,
  QueryMetadata,
} from "@osdk/client.api";
import {
  $Actions,
  $Interfaces,
  $Objects,
  $ontologyRid,
  $Queries,
} from "@osdk/client.test.ontology";
import { apiServer } from "@osdk/shared.test";
import {
  afterAll,
  beforeAll,
  describe,
  expect,
  expectTypeOf,
  it,
} from "vitest";
import type { Client } from "./Client.js";
import { createClient } from "./createClient.js";

describe("FetchMetadata", () => {
  let client: Client;

  beforeAll(async () => {
    apiServer.listen();
    client = createClient(
      "https://stack.palantir.com",
      $ontologyRid,
      async () => "myAccessToken",
    );
  });

  afterAll(() => {
    apiServer.close();
  });

  it("fetches object metadata correctly", async () => {
    const objectMetadata = await client.fetchMetadata($Objects.Employee);

    expectTypeOf(objectMetadata).toEqualTypeOf<ObjectMetadata>();

    expect(objectMetadata).toMatchInlineSnapshot(`
      {
        "description": "A full-time or part-time 

       employee of our firm",
        "displayName": "Employee",
        "icon": {
          "color": "blue",
          "name": "person",
          "type": "blueprint",
        },
        "pluralDisplayName": "Employees",
        "rid": "ri.ontology.main.object-type.401ac022-89eb-4591-8b7e-0a912b9efb44",
        "visibility": "NORMAL",
      }
    `);
  });

  it("fetches interface metadata correctly", async () => {
    const interfaceMetadata = await client.fetchMetadata(
      $Interfaces.FooInterface,
    );

    expectTypeOf(interfaceMetadata).toEqualTypeOf<InterfaceMetadata>();

    expect(interfaceMetadata).toMatchInlineSnapshot(`
      {
        "description": "Interface for Foo",
        "displayName": "Foo Interface",
        "rid": "ri.interface.main.interface.1",
      }
    `);
  });

  it("fetches action metadata correctly", async () => {
    const actionMetadata = await client.fetchMetadata(
      $Actions.moveOffice,
    );

    expectTypeOf(actionMetadata).toEqualTypeOf<ActionMetadata>();

    expect(actionMetadata).toMatchInlineSnapshot(`
      {
        "apiName": "moveOffice",
        "description": "Update an office's physical location",
        "displayName": "move-office",
        "modifiedEntities": {
          "Office": {
            "created": false,
            "modified": true,
          },
        },
        "parameters": {
          "newAddress": {
            "description": "The office's new physical address (not necessarily shipping address)",
            "multiplicity": false,
            "nullable": true,
            "type": "string",
          },
          "newCapacity": {
            "description": "The maximum seated-at-desk capacity of the new office (maximum fire-safe capacity may be higher)",
            "multiplicity": false,
            "nullable": true,
            "type": "integer",
          },
          "officeId": {
            "description": undefined,
            "multiplicity": false,
            "nullable": false,
            "type": "string",
          },
          "officeNames": {
            "description": "A list of all office names",
            "multiplicity": true,
            "nullable": true,
            "type": "integer",
          },
        },
        "rid": "ri.ontology.main.action-type.9f84017d-cf17-4fa8-84c3-8e01e5d594f2",
      }
    `);
  });

  it("fetches query metadata correctly", async () => {
    const queryMetadata = await client.fetchMetadata(
      $Queries.queryAcceptsObject,
    );

    expectTypeOf(queryMetadata).toEqualTypeOf<QueryMetadata>();

    expect(queryMetadata).toMatchInlineSnapshot(`
      {
        "description": "description of the query that takes object types",
        "displayName": "QueryAcceptsObject",
        "rid": "ri.function-registry.main.function.9b55870a-63c7-4d48-8f06-9627c0805968",
      }
    `);
  });
});
