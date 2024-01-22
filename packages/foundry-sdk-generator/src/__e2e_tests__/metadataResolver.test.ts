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

import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { OntologyMetadataResolver } from "../ontologyMetadata/ontologyMetadataResolver";

import { apiServer, handlers } from "@osdk/shared.test";

describe("Load Ontologies Metadata", () => {
  beforeAll(() => {
    apiServer.listen();
  });

  afterAll(() => {
    apiServer.close();
  });

  it("Loads no object types and action types", async () => {
    const ontologyMetadataResolver = new OntologyMetadataResolver(
      "myAccessToken",
      "https://stack.palantir.com",
    );
    const ontologyDefinitions = await ontologyMetadataResolver
      .getWireOntologyDefinition(
        "ri.ontology.main.ontology.698267cc-6b48-4d98-beff-29beb24e9361",
        {
          objectTypesApiNamesToLoad: [],
          actionTypesApiNamesToLoad: [],
          queryTypesApiNamesToLoad: [],
        },
      );

    if (ontologyDefinitions.isErr()) {
      throw new Error();
    }

    expect(ontologyDefinitions.value).toMatchInlineSnapshot(`
      {
        "actionTypes": {},
        "interfaceTypes": {},
        "objectTypes": {},
        "ontology": {
          "apiName": "default-ontology",
          "description": "The default ontology",
          "displayName": "Ontology",
          "rid": "ri.ontology.main.ontology.698267cc-6b48-4d98-beff-29beb24e9361",
        },
        "queryTypes": {},
        "sharedPropertyTypes": {},
      }
    `);
  });

  it("Fails on missing entities for wire ontology", async () => {
    const ontologyMetadataResolver = new OntologyMetadataResolver(
      "myAccessToken",
      "https://stack.palantir.com",
    );
    const ontologyDefinitions = await ontologyMetadataResolver
      .getWireOntologyDefinition(
        "ri.ontology.main.ontology.698267cc-6b48-4d98-beff-29beb24e9361",
        {
          objectTypesApiNamesToLoad: ["objectDoesNotExist", "employee"],
          actionTypesApiNamesToLoad: ["action-does-not-exit"],
          linkTypesApiNamesToLoad: ["employee.doesNotExist"],
          queryTypesApiNamesToLoad: ["queryDoesNotExist"],
        },
      );

    if (ontologyDefinitions.isOk()) {
      throw new Error();
    }

    expect(ontologyDefinitions.error).toMatchInlineSnapshot(`
      [
        "Unable to find link type doesnotexist for Object Type employee",
        "Unable to find the following Object Types: objectdoesnotexist",
        "Unable to find the following Query Types: querydoesnotexist",
        "Unable to find the following Action Types: actiondoesnotexit",
      ]
    `);
  });

  it("Captures errors while loading wire ontology definition", async () => {
    const ontologyMetadataResolver = new OntologyMetadataResolver(
      "myAccessToken",
      "https://stack.palantir.com",
    );
    apiServer.use(...handlers.unsupportedMetadataHandler);
    const ontologyDefinitions = await ontologyMetadataResolver
      .getWireOntologyDefinition(
        "ri.ontology.main.ontology.698267cc-6b48-4d98-beff-29beb24e9361",
        {
          objectTypesApiNamesToLoad: undefined,
          actionTypesApiNamesToLoad: ["unsupportedAction"],
          queryTypesApiNamesToLoad: ["returnsObject"],
        },
      );

    if (ontologyDefinitions.isOk()) {
      throw new Error();
    }

    expect(ontologyDefinitions.error).toMatchInlineSnapshot(`
      [
        "Unable to load query returnsObject because it takes an unloaded object type as a parameter: Employee in parameter output. Make sure to specify it as an argument with --ontologyObjects Employee.}",
        "Unable to load action unsupportedAction because it takes an unsupported parameter: {"type":"unsupportedType"} specify only the actions you want to load with the --actions argument.",
        "Unable to load action unsupportedAction because it takes an unloaded object type as a parameter: unsupported make sure to specify it as an argument with --ontologyObjects unsupported)",
      ]
    `);
  });

  it("Does not load any entity type using generatePackageV2", async () => {
    const ontologyMetadataResolver = new OntologyMetadataResolver(
      "myAccessToken",
      "https://stack.palantir.com",
    );
    const ontologyDefinitions = await ontologyMetadataResolver
      .getWireOntologyDefinition(
        "ri.ontology.main.ontology.698267cc-6b48-4d98-beff-29beb24e9361",
        {
          objectTypesApiNamesToLoad: undefined,
          actionTypesApiNamesToLoad: undefined,
          linkTypesApiNamesToLoad: undefined,
        },
      );

    if (ontologyDefinitions.isErr()) {
      throw new Error();
    }
    expect(Object.keys(ontologyDefinitions.value.objectTypes)).toHaveLength(0);
    expect(Object.keys(ontologyDefinitions.value.actionTypes)).toHaveLength(0);
    expect(Object.keys(ontologyDefinitions.value.queryTypes)).toHaveLength(0);
  });

  it("Loads object and action types without link types", async () => {
    const ontologyMetadataResolver = new OntologyMetadataResolver(
      "myAccessToken",
      "https://stack.palantir.com",
    );
    const ontologyDefinitions = await ontologyMetadataResolver
      .getWireOntologyDefinition(
        "ri.ontology.main.ontology.698267cc-6b48-4d98-beff-29beb24e9361",
        {
          objectTypesApiNamesToLoad: ["employee"],
          actionTypesApiNamesToLoad: ["promote-employee"],
        },
      );

    if (ontologyDefinitions.isErr()) {
      throw new Error();
    }

    expect(Object.keys(ontologyDefinitions.value.objectTypes)).toHaveLength(1);
    expect(ontologyDefinitions.value.objectTypes.Employee.linkTypes)
      .toHaveLength(0);
    expect(Object.keys(ontologyDefinitions.value.actionTypes)).toHaveLength(1);
    expect(ontologyDefinitions.value).toMatchSnapshot();
  });

  it("Loads object and action types using only specified link types", async () => {
    const ontologyMetadataResolver = new OntologyMetadataResolver(
      "myAccessToken",
      "https://stack.palantir.com",
    );
    const ontologyDefinitions = await ontologyMetadataResolver
      .getWireOntologyDefinition(
        "ri.ontology.main.ontology.698267cc-6b48-4d98-beff-29beb24e9361",
        {
          objectTypesApiNamesToLoad: ["Employee", "Office"],
          actionTypesApiNamesToLoad: ["promote-employee"],
          linkTypesApiNamesToLoad: ["Employee.peeps", "Employee.officeLink"],
        },
      );

    if (ontologyDefinitions.isErr()) {
      throw new Error(ontologyDefinitions.error.join("\n"));
    }

    expect(Object.keys(ontologyDefinitions.value.objectTypes)).toHaveLength(2);
    expect(ontologyDefinitions.value.objectTypes.Employee.linkTypes)
      .toHaveLength(2);
    expect(ontologyDefinitions.value.objectTypes.Office.linkTypes).toHaveLength(
      0,
    );
    expect(Object.keys(ontologyDefinitions.value.actionTypes)).toHaveLength(1);
    expect(ontologyDefinitions.value).toMatchSnapshot();
  });
});
