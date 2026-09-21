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

import type {
  InterfaceTypeBlockDataV2,
  ObjectTypeBlockDataV2,
  OntologyBlockDataV2,
  PropertyType,
} from "@osdk/client.unstable";
import { describe, expect, it } from "vitest";
import { OntologyBlockDataToFullMetadataConverter } from "./OntologyBlockDataToFullMetadataConverter.js";

const interfaceApiName = "com.palantir.ontology.actionItem";
const interfaceRid = "ri.ontology.main.interface-type.action-item";
const titleInterfacePropertyRid =
  "ri.ontology.main.interface-property-type.title";
const statusInterfacePropertyRid =
  "ri.ontology.main.interface-property-type.status";
const statusSharedPropertyRid = "ri.ontology.main.shared-property-type.status";
const objectApiName = "com.palantir.ontology.task";
const objectRid = "ri.ontology.main.object-type.task";

function objectPropertyRid(apiName: string): string {
  return `ri.ontology.main.property-type.${apiName}`;
}

function createProperty(apiName: string): PropertyType {
  return {
    apiName,
    rid: objectPropertyRid(apiName),
    id: apiName,
    displayMetadata: {
      displayName: apiName,
      visibility: "NORMAL",
    },
    indexedForSearch: true,
    status: { type: "active", active: {} },
    type: {
      type: "string",
      string: {
        isLongText: false,
        supportsExactMatching: true,
        supportsEfficientLeadingWildcard: false,
      },
    },
    typeClasses: [],
  };
}

function createInterface(): InterfaceTypeBlockDataV2 {
  return {
    interfaceType: {
      apiName: interfaceApiName,
      rid: interfaceRid,
      displayMetadata: { displayName: "Action item" },
      status: { type: "active", active: {} },
      actionTypeConstraints: [],
      extendsInterfaces: [],
      links: [],
      properties: [],
      propertiesV2: {},
      propertiesV3: {
        [titleInterfacePropertyRid]: {
          type: "interfaceDefinedPropertyType",
          interfaceDefinedPropertyType: {
            rid: titleInterfacePropertyRid,
            apiName: "title",
            displayMetadata: {
              displayName: "Title",
              visibility: "NORMAL",
            },
            type: {
              type: "string",
              string: { isLongText: false, supportsExactMatching: true },
            },
            constraints: {
              requireImplementation: true,
              indexedForSearch: true,
              primaryKeyConstraint: "NO_RESTRICTION",
              typeClasses: [],
            },
          },
        },
        [statusInterfacePropertyRid]: {
          type: "sharedPropertyBasedPropertyType",
          sharedPropertyBasedPropertyType: {
            requireImplementation: true,
            sharedPropertyType: {
              rid: statusSharedPropertyRid,
              apiName: "status",
              displayMetadata: {
                displayName: "Status",
                visibility: "NORMAL",
              },
              type: createProperty("unused").type,
              aliases: [],
              indexedForSearch: true,
              typeClasses: [],
            },
          },
        },
      },
    },
  };
}

function createObject(): ObjectTypeBlockDataV2 {
  const id = createProperty("id");
  const taskTitle = createProperty("taskTitle");
  const taskStatus = createProperty("taskStatus");
  return {
    objectType: {
      apiName: objectApiName,
      rid: objectRid,
      id: "task",
      displayMetadata: {
        displayName: "Task",
        pluralDisplayName: "Tasks",
        visibility: "NORMAL",
        icon: {
          type: "blueprint",
          blueprint: { locator: "cube", color: "#2D72D2" },
        },
      },
      status: { type: "active", active: {} },
      primaryKeys: [id.rid],
      titlePropertyTypeRid: taskTitle.rid,
      propertyTypes: {
        [id.rid]: id,
        [taskTitle.rid]: taskTitle,
        [taskStatus.rid]: taskStatus,
      },
      implementsInterfaces: [interfaceRid],
      implementsInterfaces2: [{
        interfaceTypeApiName: interfaceApiName,
        interfaceTypeRid: interfaceRid,
        properties: {},
        propertiesV2: {
          [titleInterfacePropertyRid]: {
            type: "propertyTypeRid",
            propertyTypeRid: taskTitle.rid,
          },
          [statusInterfacePropertyRid]: {
            type: "propertyTypeRid",
            propertyTypeRid: taskStatus.rid,
          },
        },
        links: {},
        linksV2: {},
        actionTypes: {},
      }],
      allImplementsInterfaces: {},
      traits: { workflowObjectTypeTraits: {} },
      typeGroups: [],
    },
    datasources: [],
    writebackDatasets: [],
  };
}

function createBlockData(options: {
  interface?: boolean;
  object?: boolean;
} = {}): OntologyBlockDataV2 {
  const includeInterface = options.interface ?? true;
  const includeObject = options.object ?? true;
  return {
    interfaceTypes: includeInterface
      ? { [interfaceRid]: createInterface() }
      : {},
    objectTypes: includeObject ? { [objectRid]: createObject() } : {},
    actionTypes: {},
    linkTypes: {},
    sharedPropertyTypes: {},
    ruleSets: {},
    blockOutputCompassLocations: {},
    knownIdentifiers: {} as OntologyBlockDataV2["knownIdentifiers"],
  };
}

describe(OntologyBlockDataToFullMetadataConverter, () => {
  it("preserves direct interface property implementations", () => {
    const result = OntologyBlockDataToFullMetadataConverter
      .getFullMetadataFromBlockData(createBlockData());

    expect(
      result.objectTypes[objectApiName].implementsInterfaces2[interfaceApiName],
    ).toMatchObject({
      propertiesV2: {
        title: {
          type: "localPropertyImplementation",
          propertyApiName: "taskTitle",
        },
        status: {
          type: "localPropertyImplementation",
          propertyApiName: "taskStatus",
        },
      },
    });
    expect(result.objectTypes[objectApiName].implementsInterfaces).toEqual([
      interfaceApiName,
    ]);
    expect(result.interfaceTypes[interfaceApiName].implementedByObjectTypes)
      .toEqual([objectApiName]);
  });

  it("uses interface property RIDs for resolved shared properties", () => {
    const result = OntologyBlockDataToFullMetadataConverter
      .getFullMetadataFromBlockData(createBlockData());
    const interfaceType = result.interfaceTypes[interfaceApiName];

    expect(interfaceType.propertiesV2.status.rid).toBe(statusSharedPropertyRid);
    expect(interfaceType.allPropertiesV2.status.rid).toBe(
      statusInterfacePropertyRid,
    );
  });

  it.each(["transitive block data", "imported metadata"] as const)(
    "resolves mappings from %s",
    source => {
      const localBlockData = createBlockData({ interface: false });
      const interfaceBlockData = createBlockData({ object: false });
      const importedTypes = source === "imported metadata"
        ? OntologyBlockDataToFullMetadataConverter
          .getFullMetadataFromBlockData(interfaceBlockData)
        : undefined;
      const transitiveBlockData = source === "transitive block data"
        ? interfaceBlockData
        : undefined;

      const result = OntologyBlockDataToFullMetadataConverter
        .getFullMetadataFromBlockData(
          localBlockData,
          importedTypes,
          transitiveBlockData,
        );

      expect(
        result.objectTypes[objectApiName]
          .implementsInterfaces2[interfaceApiName]
          .propertiesV2,
      ).toEqual({
        title: {
          type: "localPropertyImplementation",
          propertyApiName: "taskTitle",
        },
        status: {
          type: "localPropertyImplementation",
          propertyApiName: "taskStatus",
        },
      });
      expect(result.interfaceTypes[interfaceApiName].implementedByObjectTypes)
        .toEqual([objectApiName]);
    },
  );

  it("does not mutate imported interface metadata", () => {
    const importedTypes = OntologyBlockDataToFullMetadataConverter
      .getFullMetadataFromBlockData(createBlockData());
    const importedInterface = importedTypes.interfaceTypes[interfaceApiName];
    const originalImportedTypes = structuredClone(importedTypes);

    const result = OntologyBlockDataToFullMetadataConverter
      .getFullMetadataFromBlockData(
        createBlockData({ interface: false, object: false }),
        importedTypes,
      );

    expect(importedTypes).toEqual(originalImportedTypes);
    expect(result.interfaceTypes[interfaceApiName].implementedByObjectTypes)
      .toEqual([objectApiName]);
    expect(result.interfaceTypes[interfaceApiName]).not.toBe(importedInterface);
    expect(result.interfaceTypes[interfaceApiName].implementedByObjectTypes)
      .not.toBe(importedInterface.implementedByObjectTypes);
  });
});
