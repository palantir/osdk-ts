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
  ActionDefinition,
  ActionMetadata,
  InterfaceMetadata,
  ObjectMetadata,
  QueryMetadata,
} from "@osdk/api";
import {
  $Actions,
  $Interfaces,
  $Objects,
  $Queries,
  createOffice,
} from "@osdk/client.test.ontology";
import {
  OntologiesV2,
  type ActionTypeFullMetadata,
} from "@osdk/foundry.ontologies";
import { LegacyFauxFoundry, msw, startNodeApiServer } from "@osdk/shared.test";
import { beforeAll, describe, expect, expectTypeOf, it, vi } from "vitest";

import type { Client } from "./Client.js";
import { createClient } from "./createClient.js";

describe("FetchMetadata", () => {
  let client: Client;

  beforeAll(() => {
    const testSetup = startNodeApiServer(new LegacyFauxFoundry(), createClient);
    ({ client } = testSetup);
    return () => {
      testSetup.apiServer.close();
    };
  });

  it("fetches object metadata correctly", async () => {
    const objectMetadata = await client.fetchMetadata($Objects.Employee);

    expectTypeOf(objectMetadata).toEqualTypeOf<ObjectMetadata>();

    expect(objectMetadata).toMatchInlineSnapshot(`
      {
        "apiName": "Employee",
        "description": "A full-time or part-time 

       employee of our firm",
        "displayName": "Employee",
        "icon": {
          "color": "blue",
          "name": "person",
          "type": "blueprint",
        },
        "implements": [
          "FooInterface",
        ],
        "interfaceImplementations": {
          "FooInterface": {
            "fooIdp": {
              "propertyApiName": "office",
              "type": "localProperty",
            },
            "fooSpt": {
              "propertyApiName": "fullName",
              "type": "localProperty",
            },
          },
        },
        "interfaceMap": {
          "FooInterface": {
            "fooIdp": "office",
            "fooSpt": "fullName",
          },
        },
        "inverseInterfaceMap": {
          "FooInterface": {
            "fullName": "fooSpt",
            "office": "fooIdp",
          },
        },
        "links": {
          "lead": {
            "multiplicity": false,
            "targetType": "Employee",
          },
          "officeLink": {
            "multiplicity": false,
            "targetType": "Office",
          },
          "peeps": {
            "multiplicity": true,
            "targetType": "Employee",
          },
          "visitedOffices": {
            "multiplicity": true,
            "targetType": "Office",
          },
        },
        "pluralDisplayName": "Employees",
        "primaryKeyApiName": "employeeId",
        "primaryKeyType": "integer",
        "properties": {
          "bonusHistory": {
            "description": "Bonus history with the latest amount as its main value",
            "displayName": undefined,
            "hasReducers": true,
            "mainValue": {
              "fields": [
                "amount",
              ],
            },
            "multiplicity": true,
            "nullable": true,
            "type": {
              "amount": "integer",
              "year": "integer",
            },
            "valueFormatting": undefined,
            "valueTypeApiName": undefined,
          },
          "class": {
            "description": "",
            "displayName": undefined,
            "multiplicity": false,
            "nullable": true,
            "type": "string",
            "valueFormatting": undefined,
            "valueTypeApiName": undefined,
          },
          "employeeId": {
            "description": undefined,
            "displayName": undefined,
            "multiplicity": false,
            "nullable": false,
            "type": "integer",
            "valueFormatting": undefined,
            "valueTypeApiName": undefined,
          },
          "employeeLocation": {
            "description": "Geotime series reference of the location of the employee",
            "displayName": undefined,
            "multiplicity": false,
            "nullable": true,
            "type": "geotimeSeriesReference",
            "valueFormatting": undefined,
            "valueTypeApiName": undefined,
          },
          "employeeProfile": {
            "description": "Employee profile with main value being the bio",
            "displayName": undefined,
            "mainValue": {
              "fields": [
                "bio",
              ],
            },
            "multiplicity": false,
            "nullable": true,
            "type": {
              "bio": "string",
              "yearsExperience": "integer",
            },
            "valueFormatting": undefined,
            "valueTypeApiName": undefined,
          },
          "employeeSensor": {
            "description": "TimeSeries sensor of the status of the employee",
            "displayName": undefined,
            "multiplicity": false,
            "nullable": true,
            "type": "stringTimeseries",
            "valueFormatting": undefined,
            "valueTypeApiName": undefined,
          },
          "employeeStatus": {
            "description": "TimeSeries of the status of the employee",
            "displayName": undefined,
            "multiplicity": false,
            "nullable": true,
            "type": "stringTimeseries",
            "valueFormatting": undefined,
            "valueTypeApiName": undefined,
          },
          "favoriteRestaurants": {
            "description": undefined,
            "displayName": undefined,
            "hasReducers": false,
            "mainValue": undefined,
            "multiplicity": true,
            "nullable": true,
            "type": "string",
            "valueFormatting": undefined,
            "valueTypeApiName": undefined,
          },
          "fullName": {
            "description": undefined,
            "displayName": undefined,
            "multiplicity": false,
            "nullable": true,
            "type": "string",
            "valueFormatting": undefined,
            "valueTypeApiName": undefined,
          },
          "office": {
            "description": "The unique "ID" of the employee's \\"primary\\" assigned office.
       This is some more text.",
            "displayName": undefined,
            "multiplicity": false,
            "nullable": true,
            "type": "string",
            "valueFormatting": undefined,
            "valueTypeApiName": undefined,
          },
          "performanceScores": {
            "description": "Array of performance scores with reducers",
            "displayName": undefined,
            "hasReducers": true,
            "mainValue": undefined,
            "multiplicity": true,
            "nullable": true,
            "type": "double",
            "valueFormatting": undefined,
            "valueTypeApiName": undefined,
          },
          "skillSet": {
            "description": "The skills of the employee",
            "displayName": undefined,
            "multiplicity": false,
            "nullable": true,
            "type": "string",
            "valueFormatting": undefined,
            "valueTypeApiName": undefined,
          },
          "skillSetEmbedding": {
            "description": "Vectorized skill set",
            "displayName": undefined,
            "multiplicity": false,
            "nullable": true,
            "type": "vector",
            "valueFormatting": undefined,
            "valueTypeApiName": undefined,
          },
          "startDate": {
            "description": "The date the employee was hired (most recently, if they were re-hired)",
            "displayName": undefined,
            "multiplicity": false,
            "nullable": true,
            "type": "datetime",
            "valueFormatting": undefined,
            "valueTypeApiName": undefined,
          },
        },
        "rid": "ri.ontology.main.object-type.401ac022-89eb-4591-8b7e-0a912b9efb44",
        "status": "ACTIVE",
        "titleProperty": "fullName",
        "type": "object",
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
        "apiName": "FooInterface",
        "description": "Interface for Foo",
        "displayName": "Foo Interface",
        "implementedBy": [
          "Employee",
          "Person",
        ],
        "implements": [],
        "links": {
          "toBar": {
            "multiplicity": true,
            "targetType": "interface",
            "targetTypeApiName": "BarInterface",
          },
        },
        "properties": {
          "fooArray": {
            "description": "An array-valued Foo property",
            "displayName": "Foo Array",
            "hasReducers": false,
            "mainValue": undefined,
            "multiplicity": true,
            "nullable": true,
            "type": "string",
            "valueFormatting": undefined,
            "valueTypeApiName": undefined,
          },
          "fooIdp": {
            "description": "A Foo IDP",
            "displayName": "Foo IDP",
            "multiplicity": false,
            "nullable": true,
            "type": "string",
            "valueFormatting": undefined,
            "valueTypeApiName": undefined,
          },
          "fooSpt": {
            "description": "A foo",
            "displayName": "Foo",
            "multiplicity": false,
            "nullable": true,
            "type": "string",
            "valueFormatting": undefined,
            "valueTypeApiName": undefined,
          },
        },
        "rid": "ri.interface.main.interface.1",
        "type": "interface",
      }
    `);
  });

  it("fetches action metadata correctly", async () => {
    const actionMetadata = await client.fetchMetadata($Actions.moveOffice);

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
            "displayName": "New Address",
            "multiplicity": false,
            "nullable": true,
            "type": "string",
          },
          "newCapacity": {
            "description": "The maximum seated-at-desk capacity of the new office (maximum fire-safe capacity may be higher)",
            "displayName": "New Capacity",
            "multiplicity": false,
            "nullable": true,
            "type": "integer",
          },
          "officeId": {
            "description": undefined,
            "displayName": "Office ID",
            "multiplicity": false,
            "nullable": false,
            "type": "string",
          },
          "officeNames": {
            "description": "A list of all office names",
            "displayName": "Office Names",
            "multiplicity": true,
            "nullable": true,
            "type": "integer",
          },
        },
        "rid": "ri.ontology.main.action-type.9f84017d-cf17-4fa8-84c3-8e01e5d594f2",
        "status": "ACTIVE",
        "type": "action",
        "unsanitizedApiName": "moveOffice",
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
        "apiName": "queryAcceptsObject",
        "description": "description of the query that takes object types",
        "displayName": "QueryAcceptsObject",
        "output": {
          "nullable": false,
          "object": "Employee",
          "type": "object",
        },
        "parameters": {
          "object": {
            "description": undefined,
            "nullable": false,
            "object": "Employee",
            "type": "object",
          },
        },
        "rid": "ri.function-registry.main.function.9b55870a-63c7-4d48-8f06-9627c0805968",
        "type": "query",
        "typeReferences": undefined,
        "version": "0.11.0",
      }
    `);
  });

  describe("opt-in action effects", () => {
    const fauxFoundry = new LegacyFauxFoundry(
      "https://example.test/metadata-effects/",
    );
    const createAction: ActionDefinition<never> = {
      type: "action",
      apiName: "createInterfaceRelationship",
      unsanitizedApiName: "create-interface-relationship",
    };
    const deleteAction: ActionDefinition<never> = {
      type: "action",
      apiName: "deleteInterfaceRelationship",
    };
    const createEffect = {
      type: "createInterfaceLink",
      interfaceTypeApiName: "FooInterface",
      interfaceLinkTypeApiName: "toBar",
      sourceObject: "source",
      targetObject: "target",
    } satisfies ActionTypeFullMetadata["fullLogicRules"][number];
    const deleteEffect = {
      type: "deleteInterfaceLink",
      interfaceTypeApiName: "FooInterface",
      interfaceLinkTypeApiName: "toBar",
      sourceObject: "source",
      targetObject: "target",
    } satisfies ActionTypeFullMetadata["fullLogicRules"][number];
    let effectsClient: Client;
    let fetchFn: ReturnType<typeof vi.fn<typeof globalThis.fetch>>;
    let apiServer: ReturnType<typeof startNodeApiServer>["apiServer"];

    beforeAll(() => {
      const ontology = fauxFoundry.getDefaultOntology();
      ontology.registerActionType(
        {
          apiName: "createInterfaceRelationship",
          description: "Create an interface link",
          status: "ACTIVE",
          rid: "ri.ontology.main.action-type.create-interface-relationship",
          parameters: {},
          operations: [],
        },
        undefined,
        [createEffect],
      );
      ontology.registerActionType(
        {
          apiName: "deleteInterfaceRelationship",
          description: "Delete an interface link",
          status: "ACTIVE",
          rid: "ri.ontology.main.action-type.delete-interface-relationship",
          parameters: {},
          operations: [],
        },
        undefined,
        [deleteEffect],
      );
      const testSetup = startNodeApiServer(fauxFoundry);
      ({ apiServer } = testSetup);
      fetchFn = vi.fn(globalThis.fetch);
      effectsClient = createClient(
        fauxFoundry.baseUrl,
        fauxFoundry.defaultOntologyRid,
        testSetup.auth,
        { UNSTABLE_DO_NOT_USE_BRANCH: "test-branch" },
        fetchFn,
      );
      return () => {
        apiServer.close();
      };
    });

    it("returns registered full rules only for requested actions when bulk metadata opts in", async () => {
      fetchFn.mockClear();
      const request = {
        objectTypes: [],
        linkTypes: [],
        actionTypes: [createAction.apiName],
        queryTypes: [],
        interfaceTypes: [],
      };
      const withoutEffects = await OntologiesV2.loadMetadata(
        effectsClient,
        fauxFoundry.defaultOntologyRid,
        request,
      );
      expect(withoutEffects.actionTypesFullMetadata).toEqual({});

      const withEffects = await OntologiesV2.loadMetadata(
        effectsClient,
        fauxFoundry.defaultOntologyRid,
        { ...request, includeActionTypeFullMetadata: true },
      );
      expect(Object.keys(withEffects.actionTypesFullMetadata)).toEqual([
        createAction.apiName,
      ]);
      expect(withEffects.actionTypesFullMetadata[createAction.apiName]).toEqual(
        {
          actionType: expect.objectContaining({
            apiName: createAction.apiName,
          }),
          fullLogicRules: [createEffect],
        },
      );
      expect(withEffects.actionTypes[deleteAction.apiName]).toBeUndefined();

      const withDelete = await OntologiesV2.loadMetadata(
        effectsClient,
        fauxFoundry.defaultOntologyRid,
        {
          ...request,
          actionTypes: [deleteAction.apiName],
          includeActionTypeFullMetadata: true,
        },
      );
      expect(
        withDelete.actionTypesFullMetadata[deleteAction.apiName]
          ?.fullLogicRules,
      ).toEqual([deleteEffect]);

      const withOrdinaryAction = await OntologiesV2.loadMetadata(
        effectsClient,
        fauxFoundry.defaultOntologyRid,
        {
          ...request,
          actionTypes: [$Actions.moveOffice.apiName],
          includeActionTypeFullMetadata: true,
        },
      );
      expect(
        withOrdinaryAction.actionTypesFullMetadata[$Actions.moveOffice.apiName],
      ).toEqual({
        actionType: expect.objectContaining({ apiName: "moveOffice" }),
        fullLogicRules: [],
      });
      expect(fetchFn.mock.calls.map(([input]) => String(input))).toEqual([
        expect.stringContaining(
          `/ontologies/${fauxFoundry.defaultOntologyRid}/metadata`,
        ),
        expect.stringContaining(
          `/ontologies/${fauxFoundry.defaultOntologyRid}/metadata`,
        ),
        expect.stringContaining(
          `/ontologies/${fauxFoundry.defaultOntologyRid}/metadata`,
        ),
        expect.stringContaining(
          `/ontologies/${fauxFoundry.defaultOntologyRid}/metadata`,
        ),
      ]);
    });

    it("returns full rules from the ontology endpoint only when requested", async () => {
      fetchFn.mockClear();
      const ordinary = await OntologiesV2.getFullMetadata(
        effectsClient,
        fauxFoundry.defaultOntologyRid,
      );
      expect(ordinary.actionTypesFullMetadata).toEqual({});

      const withEffects = await OntologiesV2.getFullMetadata(
        effectsClient,
        fauxFoundry.defaultOntologyRid,
        { branch: "test-branch", includeActionTypeFullMetadata: true },
      );
      expect(Object.keys(withEffects.actionTypesFullMetadata)).toEqual(
        Object.keys(withEffects.actionTypes),
      );
      expect(
        withEffects.actionTypesFullMetadata[createAction.apiName]
          ?.fullLogicRules,
      ).toEqual([createEffect]);
      expect(
        withEffects.actionTypesFullMetadata[deleteAction.apiName]
          ?.fullLogicRules,
      ).toEqual([deleteEffect]);
      expect(
        withEffects.actionTypesFullMetadata[$Actions.moveOffice.apiName],
      ).toEqual({
        actionType: expect.objectContaining({ apiName: "moveOffice" }),
        fullLogicRules: [],
      });
      expect(fetchFn.mock.calls.map(([input]) => String(input))).toEqual([
        expect.stringContaining(
          `/ontologies/${fauxFoundry.defaultOntologyRid}/fullMetadata`,
        ),
        expect.stringContaining("includeActionTypeFullMetadata=true"),
      ]);
    });

    it("fetches create effects only when requested, using the branch and original API name", async () => {
      fetchFn.mockClear();
      const ordinary = await effectsClient.fetchMetadata(createAction);
      expectTypeOf(ordinary).toEqualTypeOf<ActionMetadata>();
      expect(ordinary.interfaceLinkEffects).toBeUndefined();
      expect(fetchFn.mock.calls.map(([input]) => String(input))).toEqual([
        expect.stringMatching(
          /\/actionTypes\/create-interface-relationship\?branch=test-branch$/u,
        ),
      ]);

      fetchFn.mockClear();
      const withEffects = await effectsClient.fetchMetadata(createAction, {
        includeActionEffects: true,
      });
      expectTypeOf(withEffects).toEqualTypeOf<ActionMetadata>();
      expect(withEffects).toMatchObject({
        apiName: "createInterfaceRelationship",
        unsanitizedApiName: "create-interface-relationship",
        interfaceLinkEffects: [createEffect],
      });
      expect(withEffects.interfaceLinkEffects).toEqual([createEffect]);
      expect(fetchFn.mock.calls.map(([input]) => String(input))).toEqual([
        expect.stringMatching(
          /\/actionTypes\/create-interface-relationship\/fullMetadata\?branch=test-branch&preview=true$/u,
        ),
      ]);
      expect(String(fetchFn.mock.calls[0][0])).toContain(
        `/metadata-effects/api/v2/ontologies/${fauxFoundry.defaultOntologyRid}`,
      );
    });

    it("does not change metadata for action types without interface link effects", async () => {
      fetchFn.mockClear();
      const withEffects = await effectsClient.fetchMetadata(
        $Actions.moveOffice,
        {
          includeActionEffects: true,
        },
      );
      expect(withEffects.interfaceLinkEffects).toBeUndefined();
      expect(withEffects.modifiedEntities).toEqual({
        Office: { created: false, modified: true },
      });
      expect(fetchFn.mock.calls.map(([input]) => String(input))).toEqual([
        expect.stringContaining("/actionTypes/moveOffice/fullMetadata"),
      ]);
    });

    it("fetches delete effects and keeps the regular action route isolated", async () => {
      fetchFn.mockClear();
      const withEffects = await effectsClient.fetchMetadata(deleteAction, {
        includeActionEffects: true,
      });
      expect(withEffects.interfaceLinkEffects).toEqual([deleteEffect]);
      expect(fetchFn.mock.calls.map(([input]) => String(input))).toEqual([
        expect.stringContaining(
          "/actionTypes/deleteInterfaceRelationship/fullMetadata",
        ),
      ]);

      fetchFn.mockClear();
      const ordinary = await effectsClient.fetchMetadata(deleteAction);
      expect(ordinary.interfaceLinkEffects).toBeUndefined();
      expect(fetchFn.mock.calls.map(([input]) => String(input))).toEqual([
        expect.stringContaining("/actionTypes/deleteInterfaceRelationship?"),
      ]);
    });

    it("rejects full metadata missing logic rules without falling back", async () => {
      await apiServer.boundary(async () => {
        apiServer.use(
          msw.http.get(
            `${fauxFoundry.baseUrl}api/v2/ontologies/${fauxFoundry.defaultOntologyRid}/actionTypes/${deleteAction.apiName}/fullMetadata`,
            () =>
              msw.HttpResponse.json({
                actionType: fauxFoundry
                  .getDefaultOntology()
                  .getActionDef(deleteAction.apiName),
              }),
          ),
        );

        fetchFn.mockClear();
        await expect(
          effectsClient.fetchMetadata(deleteAction, {
            includeActionEffects: true,
          }),
        ).rejects.toThrow("missing actionType or fullLogicRules");
        expect(fetchFn.mock.calls.map(([input]) => String(input))).toEqual([
          expect.stringContaining(
            `/actionTypes/${deleteAction.apiName}/fullMetadata`,
          ),
        ]);
      });
    });

    it("leaves ordinary action application on the standard endpoint", async () => {
      const applyClient = createClient(
        fauxFoundry.baseUrl,
        fauxFoundry.defaultOntologyRid,
        () => Promise.resolve("myAccessToken"),
        { UNSTABLE_DO_NOT_USE_BRANCH: "test-branch" },
        fetchFn,
      );
      fetchFn.mockClear();
      const result = await applyClient(createOffice).applyAction({
        officeId: "NYC",
        address: "123 Main Street",
        capacity: 100,
      });
      expect(result).toBeUndefined();
      expect(fetchFn.mock.calls.map(([input]) => String(input))).toEqual([
        expect.stringContaining("/actionTypes/createOffice?"),
        expect.stringContaining("/actions/createOffice/apply?"),
      ]);
    });

    it("does not fall back to standard metadata when full metadata fails", async () => {
      fetchFn.mockClear();
      await expect(
        effectsClient.fetchMetadata(
          { type: "action", apiName: "missingAction" },
          { includeActionEffects: true },
        ),
      ).rejects.toThrow("ActionNotFound");
      expect(fetchFn.mock.calls.map(([input]) => String(input))).toEqual([
        expect.stringContaining("/actionTypes/missingAction/fullMetadata"),
      ]);
    });
  });
});
