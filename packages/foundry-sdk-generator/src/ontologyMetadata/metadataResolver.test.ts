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

import { apiServer, handlers } from "@osdk/shared.test";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { OntologyMetadataResolver } from "./ontologyMetadataResolver.js";

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
        "externalInterfaces": Map {},
        "externalObjects": Map {},
        "filteredFullMetadata": {
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
        },
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
          objectTypesApiNamesToLoad: ["objectDoesNotExist", "Employee"],
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
        "Unable to find the following Object Types: objectDoesNotExist",
        "Unable to find the following Query Types: queryDoesNotExist",
        "Unable to find the following Action Types: actionDoesNotExit",
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

    const fullMetadata = ontologyDefinitions.value.filteredFullMetadata;
    expect(Object.keys(fullMetadata.objectTypes)).toHaveLength(0);
    expect(Object.keys(fullMetadata.actionTypes)).toHaveLength(0);
    expect(Object.keys(fullMetadata.queryTypes)).toHaveLength(0);
  });

  it("Loads object, action, interface types without link types", async () => {
    const ontologyMetadataResolver = new OntologyMetadataResolver(
      "myAccessToken",
      "https://stack.palantir.com",
    );
    const ontologyDefinitions = await ontologyMetadataResolver
      .getWireOntologyDefinition(
        "ri.ontology.main.ontology.698267cc-6b48-4d98-beff-29beb24e9361",
        {
          objectTypesApiNamesToLoad: ["Employee"],
          actionTypesApiNamesToLoad: ["promote-employee"],
          interfaceTypesApiNamesToLoad: ["FooInterface"],
        },
      );

    if (ontologyDefinitions.isErr()) {
      console.error(ontologyDefinitions.error);
      throw new Error();
    }

    const fullMetadata = ontologyDefinitions.value.filteredFullMetadata;

    expect(Object.keys(fullMetadata.objectTypes)).toHaveLength(1);
    expect(fullMetadata.objectTypes.Employee.linkTypes)
      .toHaveLength(0);
    expect(Object.keys(fullMetadata.actionTypes)).toHaveLength(1);
    expect(Object.keys(fullMetadata.interfaceTypes)).toHaveLength(1);
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

    const fullMetadata = ontologyDefinitions.value.filteredFullMetadata;

    expect(Object.keys(fullMetadata.objectTypes)).toHaveLength(2);
    expect(fullMetadata.objectTypes.Employee.linkTypes).toHaveLength(2);
    expect(fullMetadata.objectTypes.Office.linkTypes).toHaveLength(0);
    expect(Object.keys(fullMetadata.actionTypes)).toHaveLength(1);
    expect(ontologyDefinitions.value).toMatchSnapshot();
  });
  it("Loads action types with media refs, interface props, and structs", async () => {
    const ontologyMetadataResolver = new OntologyMetadataResolver(
      "myAccessToken",
      "https://stack.palantir.com",
    );
    const ontologyDefinitions = await ontologyMetadataResolver
      .getWireOntologyDefinition(
        "ri.ontology.main.ontology.698267cc-6b48-4d98-beff-29beb24e9361",
        {
          objectTypesApiNamesToLoad: ["Employee", "Office"],
          actionTypesApiNamesToLoad: [
            "promote-employee",
            "delete-foo-interface",
            "createStructPerson",
            "actionTakesMedia",
          ],
          interfaceTypesApiNamesToLoad: ["FooInterface"],
        },
      );

    if (ontologyDefinitions.isErr()) {
      throw new Error(ontologyDefinitions.error.join("\n"));
    }

    const fullMetadata = ontologyDefinitions.value.filteredFullMetadata;

    expect(Object.keys(fullMetadata.objectTypes)).toHaveLength(2);
    expect(Object.keys(fullMetadata.actionTypes)).toHaveLength(4);
    expect(ontologyDefinitions.value).toMatchSnapshot();
  });
  it("Throws error if loading action type with missing interface type", async () => {
    const ontologyMetadataResolver = new OntologyMetadataResolver(
      "myAccessToken",
      "https://stack.palantir.com",
    );
    const ontologyDefinitions = await ontologyMetadataResolver
      .getWireOntologyDefinition(
        "ri.ontology.main.ontology.698267cc-6b48-4d98-beff-29beb24e9361",
        {
          objectTypesApiNamesToLoad: ["Employee", "Office"],
          actionTypesApiNamesToLoad: [
            "promote-employee",
            "delete-foo-interface",
            "createStructPerson",
            "actionTakesMedia",
          ],
        },
      );

    if (ontologyDefinitions.isOk()) {
      throw new Error();
    }

    expect(ontologyDefinitions.error).toMatchInlineSnapshot(`
        [
          "Unable to load action deleteFooInterface because it takes an unloaded interface type as a parameter: FooInterface make sure to specify it as an argument with --ontologyInterfaces FooInterface",
        ]
      `);
  });
});
