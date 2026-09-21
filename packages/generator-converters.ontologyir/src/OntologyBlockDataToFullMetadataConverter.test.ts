import type {
  InterfacePropertyTypeImplementation,
  InterfaceTypeBlockDataV2,
  ObjectTypeBlockDataV2,
  OntologyBlockDataV2,
  PropertyType,
} from "@osdk/client.unstable";
import type * as Ontologies from "@osdk/foundry.ontologies";
import { describe, expect, it } from "vitest";
import { OntologyBlockDataToFullMetadataConverter } from "./OntologyBlockDataToFullMetadataConverter.js";

const interfaceApiName = "com.palantir.ontology.actionitem";
const interfaceRid = "ri.ontology.main.interface-type.actionitem";
const objectApiName = "com.palantir.ontology.task";
const objectRid = "ri.ontology.main.object-type.task";
const propertyDefinitions = [
  { interfaceApiName: "id", objectApiName: "id" },
  { interfaceApiName: "title", objectApiName: "taskTitle" },
  { interfaceApiName: "status", objectApiName: "taskStatus" },
  { interfaceApiName: "assigneeId", objectApiName: "assigneeId" },
];

function interfacePropertyRid(apiName: string): string {
  return `ri.ontology.main.interface-property-type.${apiName}`;
}

function objectPropertyRid(apiName: string): string {
  return `ri.ontology.main.property-type.${apiName}`;
}

function createBlockData(): OntologyBlockDataV2 {
  const interfaceType: InterfaceTypeBlockDataV2["interfaceType"] = {
    apiName: interfaceApiName,
    rid: interfaceRid,
    displayMetadata: { displayName: "Action item" },
    status: { type: "active", active: {} },
    actionTypeConstraints: [],
    extendsInterfaces: [],
    links: [],
    properties: [],
    propertiesV2: {},
    propertiesV3: {},
  };
  const objectType: ObjectTypeBlockDataV2["objectType"] = {
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
    primaryKeys: [objectPropertyRid("id")],
    titlePropertyTypeRid: objectPropertyRid("taskTitle"),
    propertyTypes: {},
    implementsInterfaces: [],
    implementsInterfaces2: [],
    allImplementsInterfaces: {},
    traits: { workflowObjectTypeTraits: {} },
    typeGroups: [],
  };
  for (const definition of propertyDefinitions) {
    const property: PropertyType = {
      apiName: definition.objectApiName,
      rid: objectPropertyRid(definition.objectApiName),
      id: definition.objectApiName,
      displayMetadata: {
        displayName: definition.objectApiName,
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
    objectType.propertyTypes[property.rid] = property;
    const propertyRid = interfacePropertyRid(definition.interfaceApiName);
    interfaceType.propertiesV3[propertyRid] =
      definition.interfaceApiName === "status"
        ? {
          type: "sharedPropertyBasedPropertyType",
          sharedPropertyBasedPropertyType: {
            requireImplementation: true,
            sharedPropertyType: {
              rid: propertyRid,
              apiName: definition.interfaceApiName,
              displayMetadata: property.displayMetadata,
              type: property.type,
              aliases: [],
              indexedForSearch: true,
              typeClasses: [],
            },
          },
        }
        : {
          type: "interfaceDefinedPropertyType",
          interfaceDefinedPropertyType: {
            rid: propertyRid,
            apiName: definition.interfaceApiName,
            displayMetadata: property.displayMetadata,
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
        };
  }
  const propertiesV2: Record<string, InterfacePropertyTypeImplementation> = {};
  for (const definition of [...propertyDefinitions].reverse()) {
    propertiesV2[interfacePropertyRid(definition.interfaceApiName)] = {
      type: "propertyTypeRid",
      propertyTypeRid: objectPropertyRid(definition.objectApiName),
    };
  }
  objectType.implementsInterfaces2.push({
    interfaceTypeApiName: interfaceApiName,
    interfaceTypeRid: interfaceRid,
    properties: {},
    propertiesV2,
    links: {},
    linksV2: {},
    actionTypes: {},
  });
  return {
    interfaceTypes: { [interfaceRid]: { interfaceType } },
    objectTypes: {
      [objectRid]: { objectType, datasources: [], writebackDatasets: [] },
    },
    actionTypes: {},
    linkTypes: {},
    sharedPropertyTypes: {},
    ruleSets: {},
    blockOutputCompassLocations: {},
    knownIdentifiers: {
      actionParameterIds: {},
      actionParameters: {},
      actionTypes: {},
      datasourceColumns: {},
      datasources: {},
      filesDatasources: {},
      functions: {},
      geotimeSeriesSyncs: {},
      groupIds: {},
      interfaceActionTypeConstraints: {},
      interfaceLinkTypes: {},
      interfaceParameterConstraints: {},
      interfacePropertyTypes: {},
      interfaceTypes: {},
      interfaceTypeSchemaTransitions: {},
      linkTypeIds: {},
      linkTypes: {},
      markings: {},
      objectPropertyTypeIdsToRids: {},
      objectTypeIds: {},
      objectTypes: {},
      propertyTypeIds: {},
      propertyTypes: {},
      sharedPropertyTypes: {},
      structFieldRidsToApiNames: {},
      timeSeriesSyncs: {},
      valueTypes: {},
      webhooks: {},
      workshopModules: {},
    },
  };
}

function createImportedTypes(): Ontologies.OntologyFullMetadata {
  return OntologyBlockDataToFullMetadataConverter.getFullMetadataFromBlockData({
    ...createBlockData(),
    objectTypes: {},
  });
}

describe(OntologyBlockDataToFullMetadataConverter, () => {
  it.each(["local", "transitive", "imported"])(
    "resolves interface-defined and shared properties from %s interfaces",
    source => {
      const blockData = createBlockData();
      const importedTypes = source === "imported"
        ? createImportedTypes()
        : undefined;
      const transitiveBlockData = source === "transitive"
        ? { ...createBlockData(), objectTypes: {} }
        : undefined;
      if (source !== "local") {
        blockData.interfaceTypes = {};
      }

      const result = OntologyBlockDataToFullMetadataConverter
        .getFullMetadataFromBlockData(
          blockData,
          importedTypes,
          transitiveBlockData,
        );

      expect(
        result.objectTypes[objectApiName].implementsInterfaces2[interfaceApiName],
      ).toEqual({
        properties: {},
        propertiesV2: {
          id: { type: "localPropertyImplementation", propertyApiName: "id" },
          title: {
            type: "localPropertyImplementation",
            propertyApiName: "taskTitle",
          },
          status: {
            type: "localPropertyImplementation",
            propertyApiName: "taskStatus",
          },
          assigneeId: {
            type: "localPropertyImplementation",
            propertyApiName: "assigneeId",
          },
        },
        links: {},
        actionTypes: {},
      });
      expect(result.interfaceTypes[interfaceApiName].implementedByObjectTypes)
        .toEqual([objectApiName]);
    },
  );

  it("preserves legacy property mappings alongside propertiesV2", () => {
    const blockData = createBlockData();
    blockData.objectTypes[objectRid].objectType.implementsInterfaces2[0]
      .properties = { legacyStatus: { propertyTypeRid: "taskStatus" } };

    const result = OntologyBlockDataToFullMetadataConverter
      .getFullMetadataFromBlockData(blockData);

    expect(
      result.objectTypes[objectApiName].implementsInterfaces2[interfaceApiName]
        .properties,
    ).toEqual({ legacyStatus: "taskStatus" });
    expect(result.objectTypes[objectApiName].sharedPropertyTypeMapping)
      .toEqual({ legacyStatus: "taskStatus" });
    expect(
      result.objectTypes[objectApiName].implementsInterfaces2[interfaceApiName]
        .propertiesV2.assigneeId,
    ).toEqual({
      type: "localPropertyImplementation",
      propertyApiName: "assigneeId",
    });
  });

  it("skips unsupported mapping variants and unresolved property RIDs", () => {
    const blockData = createBlockData();
    blockData.objectTypes[objectRid].objectType.implementsInterfaces2[0]
      .propertiesV2 = {
        [interfacePropertyRid("id")]: {
          type: "propertyTypeRid",
          propertyTypeRid: objectPropertyRid("id"),
        },
        [interfacePropertyRid("title")]: {
          type: "structField",
          structField: {
            propertyTypeRid: objectPropertyRid("taskTitle"),
            structFieldRid: "ri.ontology.main.struct-field.title",
          },
        },
        [interfacePropertyRid("status")]: {
          type: "structPropertyTypeMapping",
          structPropertyTypeMapping: {
            propertyTypeRid: objectPropertyRid("taskStatus"),
            structFieldRidMapping: {},
          },
        },
        [interfacePropertyRid("assigneeId")]: {
          type: "propertyTypeRid",
          propertyTypeRid: objectPropertyRid("missing"),
        },
        [interfacePropertyRid("missing")]: {
          type: "propertyTypeRid",
          propertyTypeRid: objectPropertyRid("id"),
        },
      };

    const result = OntologyBlockDataToFullMetadataConverter
      .getFullMetadataFromBlockData(blockData);

    expect(
      result.objectTypes[objectApiName].implementsInterfaces2[interfaceApiName]
        .propertiesV2,
    ).toEqual({
      id: { type: "localPropertyImplementation", propertyApiName: "id" },
    });
  });

  it.each([false, true])(
    "preserves imported implementors without mutation or duplicates (already indexed: %s)",
    alreadyIndexed => {
      const blockData = createBlockData();
      blockData.interfaceTypes = {};
      const importedTypes = createImportedTypes();
      const importedInterface = importedTypes.interfaceTypes[interfaceApiName];
      const existingObjectApiName = "com.palantir.ontology.existingTask";
      importedInterface.implementedByObjectTypes = alreadyIndexed
        ? [existingObjectApiName, objectApiName]
        : [existingObjectApiName];
      const originalImportedTypes = structuredClone(importedTypes);

      const result = OntologyBlockDataToFullMetadataConverter
        .getFullMetadataFromBlockData(blockData, importedTypes);

      expect(result.interfaceTypes[interfaceApiName].implementedByObjectTypes)
        .toEqual([existingObjectApiName, objectApiName]);
      expect(importedTypes).toEqual(originalImportedTypes);
      expect(result.interfaceTypes[interfaceApiName]).not.toBe(importedInterface);
      expect(result.interfaceTypes[interfaceApiName].implementedByObjectTypes)
        .not.toBe(importedInterface.implementedByObjectTypes);
    },
  );

  it("includes imported objects when indexing interface implementations", () => {
    const blockData = { ...createBlockData(), objectTypes: {} };
    const importedTypes = OntologyBlockDataToFullMetadataConverter
      .getFullMetadataFromBlockData(createBlockData());
    importedTypes.interfaceTypes = {};

    const result = OntologyBlockDataToFullMetadataConverter
      .getFullMetadataFromBlockData(blockData, importedTypes);

    expect(result.interfaceTypes[interfaceApiName].implementedByObjectTypes)
      .toEqual([objectApiName]);
  });

  it("skips reverse-indexing interfaces absent from the metadata", () => {
    const blockData = createBlockData();
    blockData.interfaceTypes = {};

    const result = OntologyBlockDataToFullMetadataConverter
      .getFullMetadataFromBlockData(blockData);

    expect(result.interfaceTypes).toEqual({});
    expect(
      result.objectTypes[objectApiName].implementsInterfaces2[interfaceApiName]
        .propertiesV2,
    ).toEqual({});
  });
});
