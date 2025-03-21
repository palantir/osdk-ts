/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

/** @internal */
export let ontologyDefinition;

/** @internal */
export let namespace;
export async function defineOntology(ns, body) {
  namespace = ns;
  ontologyDefinition = {
    actionTypes: {},
    objectTypes: {},
    queryTypes: {},
    interfaceTypes: {},
    sharedPropertyTypes: {},
    valueTypes: {},
    importedTypes: {
      sharedPropertyTypes: []
    }
  };
  try {
    await body();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error("Unexpected error while processing the body of the ontology", e);
    throw e;
  }
  return {
    ontology: convertToWireOntologyIr(ontologyDefinition),
    valueType: convertOntologyToValueTypeIr(ontologyDefinition)
  };
}
function convertOntologyToValueTypeIr(ontology) {
  return {
    valueTypes: Object.values(ontology.valueTypes).map(definitions => ({
      metadata: {
        apiName: definitions[0].apiName,
        displayMetadata: definitions[0].displayMetadata,
        status: definitions[0].status
      },
      versions: definitions.map(definition => ({
        version: definition.version,
        baseType: definition.baseType,
        constraints: definition.constraints,
        exampleValues: definition.exampleValues
      }))
    }))
  };
}
function convertToWireOntologyIr(ontology) {
  return {
    blockData: {
      objectTypes: Object.fromEntries(Object.entries(ontology.objectTypes).map(([apiName, objectType]) => {
        return [apiName, convertObject(objectType)];
      })),
      sharedPropertyTypes: Object.fromEntries(Object.entries(ontology.sharedPropertyTypes).map(([apiName, spt]) => [apiName, {
        sharedPropertyType: convertSpt(spt)
      }])),
      interfaceTypes: Object.fromEntries(Object.entries(ontology.interfaceTypes).map(([apiName, interfaceType]) => {
        return [apiName, {
          interfaceType: convertInterface(interfaceType)
        }];
      })),
      blockPermissionInformation: {
        actionTypes: {},
        linkTypes: {},
        objectTypes: {}
      }
    },
    importedTypes: ontology.importedTypes
  };
}
function convertObject(objectType) {
  const propertyDatasource = {};
  (objectType.properties ?? []).forEach(property => {
    propertyDatasource[property.apiName] = {
      type: "column",
      column: property.apiName
    };
  });
  const datasource = {
    rid: "ri.ontology.main.datasource.".concat(objectType.apiName),
    datasource: {
      type: "datasetV2",
      datasetV2: {
        datasetRid: objectType.apiName,
        propertyMapping: propertyDatasource
      }
    },
    editsConfiguration: {
      onlyAllowPrivilegedEdits: false
    },
    redacted: false
  };
  const implementations = objectType.implementsInterfaces ?? [];
  return {
    objectType: {
      displayMetadata: {
        description: objectType.description,
        displayName: objectType.displayName,
        groupDisplayName: undefined,
        icon: {
          type: "blueprint",
          blueprint: objectType.icon ?? {
            locator: "cube",
            color: "#2D72D2"
          }
        },
        pluralDisplayName: objectType.pluralDisplayName,
        visibility: objectType.visibility ?? "NORMAL"
      },
      primaryKeys: objectType.primaryKeys,
      propertyTypes: Object.fromEntries(objectType.properties?.map(val => [val.apiName, convertProperty(val)]) ?? []),
      titlePropertyTypeRid: objectType.titlePropertyApiName,
      apiName: objectType.apiName,
      status: objectType.status ?? {
        type: "active",
        active: {}
      },
      redacted: false,
      implementsInterfaces2: implementations.map(impl => ({
        interfaceTypeApiName: impl.implements.apiName,
        properties: Object.fromEntries(impl.propertyMapping.map(mapping => [namespace + mapping.interfaceProperty, {
          propertyTypeRid: mapping.mapsTo
        }]))
      })),
      allImplementsInterfaces: {}
    },
    datasources: [datasource],
    entityMetadata: {
      arePatchesEnabled: objectType.editsEnabled ?? false
    }
  };
}
function convertProperty(property) {
  const output = {
    apiName: property.apiName,
    sharedPropertyTypeApiName: property.sharedPropertyType?.apiName,
    displayMetadata: {
      displayName: property.displayName,
      description: property.description,
      visibility: property.visibility ?? "NORMAL"
    },
    indexedForSearch: property.indexedForSearch ?? true,
    ruleSetBinding: undefined,
    baseFormatter: property.baseFormatter,
    type: convertType(property.type),
    typeClasses: property.typeClasses ?? [],
    status: property.status ?? {
      type: "active",
      active: {}
    },
    inlineAction: undefined,
    dataConstraints: property.dataConstraints,
    sharedPropertyTypeRid: property.sharedPropertyType?.apiName,
    valueType: undefined
  };
  return output;
}
function convertInterface(interfaceType) {
  return {
    ...interfaceType,
    propertiesV2: Object.fromEntries(Object.values(interfaceType.properties).map(spt => [spt.apiName, {
      required: true,
      sharedPropertyType: convertSpt(spt)
    }])),
    // these are omitted from our internal types but we need to re-add them for the final json
    allExtendsInterfaces: [],
    allLinks: [],
    allProperties: [],
    properties: []
  };
}
export function dumpOntologyFullMetadata() {
  return convertToWireOntologyIr(ontologyDefinition);
}
export function dumpValueTypeWireType() {
  return convertOntologyToValueTypeIr(ontologyDefinition);
}
function convertSpt({
  type,
  array,
  description,
  apiName,
  displayName,
  gothamMapping,
  typeClasses,
  valueType
}) {
  const dataConstraint = typeof type === "object" && type.type === "marking" ? {
    propertyTypeConstraints: [],
    nullability: undefined,
    nullabilityV2: {
      noEmptyCollections: true,
      noNulls: true
    }
  } : undefined;
  return {
    apiName,
    displayMetadata: {
      displayName: displayName ?? apiName,
      visibility: "NORMAL",
      description
    },
    type: array ? {
      type: "array",
      array: {
        subtype: convertType(type)
      }
    } : convertType(type),
    aliases: [],
    baseFormatter: undefined,
    dataConstraints: dataConstraint,
    gothamMapping: gothamMapping,
    indexedForSearch: true,
    provenance: undefined,
    typeClasses: typeClasses ?? [],
    valueType: valueType
  };
}
function convertType(type) {
  switch (true) {
    case typeof type === "object" && "markingType" in type:
      return {
        "type": "marking",
        marking: {
          markingType: type.markingType
        }
      };
    case typeof type === "object" && "structDefinition" in type:
      const structFields = new Array();
      for (const key in type.structDefinition) {
        const fieldTypeDefinition = type.structDefinition[key];
        let field;
        if (typeof fieldTypeDefinition === "string") {
          field = {
            apiName: key,
            displayMetadata: {
              displayName: key,
              description: undefined
            },
            typeClasses: [],
            aliases: [],
            fieldType: convertType(fieldTypeDefinition)
          };
        } else {
          // If it is a full form type definition then process it as such
          if ("fieldType" in fieldTypeDefinition) {
            field = {
              ...fieldTypeDefinition,
              apiName: key,
              fieldType: convertType(fieldTypeDefinition.fieldType),
              typeClasses: fieldTypeDefinition.typeClasses ?? [],
              aliases: fieldTypeDefinition.aliases ?? []
            };
          } else {
            field = {
              apiName: key,
              displayMetadata: {
                displayName: key,
                description: undefined
              },
              typeClasses: [],
              aliases: [],
              fieldType: convertType(fieldTypeDefinition)
            };
          }
        }
        structFields.push(field);
      }
      return {
        type: "struct",
        struct: {
          structFields
        }
      };
    case type === "geopoint":
      return {
        type: "geohash",
        geohash: {}
      };
    case type === "decimal":
      return {
        type,
        [type]: {
          precision: undefined,
          scale: undefined
        }
      };
    case type === "string":
      return {
        type,
        [type]: {
          analyzerOverride: undefined,
          enableAsciiFolding: undefined,
          isLongText: false,
          supportsEfficientLeadingWildcard: false,
          supportsExactMatching: true
        }
      };
    case type === "mediaReference":
      return {
        type: type,
        mediaReference: {}
      };
    default:
      // use helper function to distribute `type` properly
      return distributeTypeHelper(type);
  }
}

/**
 * Helper function to avoid duplication. Makes the types match properly with the correct
 * behavior without needing to switch on type.
 * @param type
 * @returns
 */
function distributeTypeHelper(type) {
  return {
    type,
    [type]: {}
  }; // any cast to match conditional return type
}
//# sourceMappingURL=defineOntology.js.map