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

import type {
  ActionTypeStatus,
  OntologyIr,
  OntologyIrActionTypeBlockDataV2,
  OntologyIrActionValidation,
  OntologyIrAllowedParameterValues,
  OntologyIrBaseParameterType,
  OntologyIrInterfaceType,
  OntologyIrInterfaceTypeBlockDataV2,
  OntologyIrLinkDefinition,
  OntologyIrLinkTypeBlockDataV2,
  OntologyIrManyToManyLinkTypeDatasource,
  OntologyIrObjectTypeBlockDataV2,
  OntologyIrObjectTypeDatasource,
  OntologyIrObjectTypeDatasourceDefinition,
  OntologyIrParameter,
  OntologyIrPropertyType,
  OntologyIrSection,
  OntologyIrSharedPropertyType,
  OntologyIrSharedPropertyTypeBlockDataV2,
  OntologyIrStructFieldType,
  OntologyIrType,
  OntologyIrValueTypeBlockData,
  OntologyIrValueTypeBlockDataEntry,
  ParameterId,
  ParameterRenderHint,
  ParameterRequiredConfiguration,
  RetentionPolicy,
  SectionId,
} from "@osdk/client.unstable";
import { isExotic } from "./defineObject.js";
import type {
  ActionParameter,
  ActionParameterRequirementConstraint,
  ActionType,
  InterfaceType,
  LinkTypeDefinition,
  ObjectPropertyType,
  ObjectType,
  Ontology,
  PropertyTypeType,
  SharedPropertyType,
} from "./types.js";

/** @internal */
export let ontologyDefinition: Ontology;

/** @internal */
export let namespace: string;

type OntologyAndValueTypeIrs = {
  ontology: OntologyIr;
  valueType: OntologyIrValueTypeBlockData;
};

export async function defineOntology(
  ns: string,
  body: () => void | Promise<void>,
): Promise<OntologyAndValueTypeIrs> {
  namespace = ns;
  ontologyDefinition = {
    actionTypes: {},
    objectTypes: {},
    queryTypes: {},
    interfaceTypes: {},
    sharedPropertyTypes: {},
    valueTypes: {},
    linkTypes: {},
    importedTypes: {
      sharedPropertyTypes: [],
    },
  };

  try {
    await body();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(
      "Unexpected error while processing the body of the ontology",
      e,
    );
    throw e;
  }

  return {
    ontology: convertToWireOntologyIr(ontologyDefinition),
    valueType: convertOntologyToValueTypeIr(ontologyDefinition),
  };
}

function convertOntologyToValueTypeIr(
  ontology: Ontology,
): OntologyIrValueTypeBlockData {
  return {
    valueTypes: Object.values(ontology.valueTypes).map<
      OntologyIrValueTypeBlockDataEntry
    >(definitions => ({
      metadata: {
        apiName: definitions[0].apiName,
        displayMetadata: definitions[0].displayMetadata,
        status: definitions[0].status,
      },
      versions: definitions.map(definition => ({
        version: definition.version,
        baseType: definition.baseType,
        constraints: definition.constraints,
        exampleValues: definition.exampleValues,
      })),
    })),
  };
}

function convertToWireOntologyIr(
  ontology: Ontology,
): OntologyIr {
  return {
    blockData: {
      objectTypes: Object.fromEntries(
        Object.entries(ontology.objectTypes).map<
          [string, OntologyIrObjectTypeBlockDataV2]
        >(([apiName, objectType]) => {
          return [apiName, convertObject(objectType)];
        }),
      ),
      sharedPropertyTypes: Object.fromEntries(
        Object.entries(
          ontology.sharedPropertyTypes,
        )
          .map<[string, OntologyIrSharedPropertyTypeBlockDataV2]>((
            [apiName, spt],
          ) => [apiName, { sharedPropertyType: convertSpt(spt) }]),
      ),
      interfaceTypes: Object.fromEntries(
        Object.entries(
          ontology.interfaceTypes,
        )
          .map<[string, OntologyIrInterfaceTypeBlockDataV2]>(
            ([apiName, interfaceType]) => {
              return [apiName, {
                interfaceType: convertInterface(interfaceType),
              }];
            },
          ),
      ),
      linkTypes: Object.fromEntries(
        Object.entries(ontology.linkTypes).map<
          [string, OntologyIrLinkTypeBlockDataV2]
        >(([id, link]) => {
          return [id, convertLink(link)];
        }),
      ),
      actionTypes: Object.fromEntries(
        Object.entries(ontology.actionTypes).map<
          [string, OntologyIrActionTypeBlockDataV2]
        >(([apiName, action]) => {
          return [apiName, convertAction(action)];
        }),
      ),
      blockPermissionInformation: {
        actionTypes: {},
        linkTypes: {},
        objectTypes: {},
      },
    },
    importedTypes: ontology.importedTypes,
  };
}

function convertObject(
  objectType: ObjectType,
): OntologyIrObjectTypeBlockDataV2 {
  const propertyDatasources: OntologyIrObjectTypeDatasource[] =
    (objectType.properties ?? [])
      .flatMap(prop => extractPropertyDatasource(prop, objectType.apiName));

  const objectDatasource = buildDatasource(
    objectType.apiName,
    convertDatasourceDefinition(
      objectType,
      objectType.properties ?? [],
    ),
  );

  const implementations = objectType.implementsInterfaces ?? [];

  return {
    objectType: {
      displayMetadata: {
        description: objectType.description,
        displayName: objectType.displayName,
        groupDisplayName: undefined,
        icon: {
          type: "blueprint",
          blueprint: objectType.icon ?? { locator: "cube", color: "#2D72D2" },
        },
        pluralDisplayName: objectType.pluralDisplayName,
        visibility: objectType.visibility ?? "NORMAL",
      },
      primaryKeys: objectType.primaryKeys,
      propertyTypes: Object.fromEntries(
        objectType.properties?.map<[string, OntologyIrPropertyType]>(
          val => [val.apiName, convertProperty(val)],
        ) ?? [],
      ),
      titlePropertyTypeRid: objectType.titlePropertyApiName,
      apiName: objectType.apiName,
      status: objectType.status ?? {
        type: "active",
        active: {},
      },
      redacted: false,
      implementsInterfaces2: implementations.map(impl => ({
        interfaceTypeApiName: impl.implements.apiName,
        properties: Object.fromEntries(
          impl.propertyMapping.map(
            mapping => [namespace + mapping.interfaceProperty, {
              propertyTypeRid: mapping.mapsTo,
            }],
          ),
        ),
      })),
      allImplementsInterfaces: {},
    },
    datasources: [...propertyDatasources, objectDatasource],
    entityMetadata: { arePatchesEnabled: objectType.editsEnabled ?? false },
  };
}

function extractPropertyDatasource(
  property: ObjectPropertyType,
  objectTypeApiName: string,
): OntologyIrObjectTypeDatasource[] {
  if (!isExotic(property.type)) {
    return [];
  }
  const identifier = objectTypeApiName + "." + property.apiName;
  switch (property.type as string) {
    case "geotimeSeries":
      const geotimeDefinition: OntologyIrObjectTypeDatasourceDefinition = {
        type: "geotimeSeries",
        geotimeSeries: {
          geotimeSeriesIntegrationRid: identifier,
          properties: [property.apiName],
        },
      };
      return [buildDatasource(property.apiName, geotimeDefinition)];
    case "mediaReference":
      const mediaSetDefinition: OntologyIrObjectTypeDatasourceDefinition = {
        type: "mediaSetView",
        mediaSetView: {
          assumedMarkings: [],
          mediaSetViewLocator: identifier,
          properties: [property.apiName],
        },
      };
      return [buildDatasource(property.apiName, mediaSetDefinition)];
    default:
      return [];
  }
}

function buildDatasource(
  apiName: string,
  definition: OntologyIrObjectTypeDatasourceDefinition,
): OntologyIrObjectTypeDatasource {
  return ({
    rid: "ri.ontology.main.datasource.".concat(apiName),
    datasource: definition,
    editsConfiguration: {
      onlyAllowPrivilegedEdits: false,
    },
    redacted: false,
  });
}

function convertDatasourceDefinition(
  objectType: ObjectType,
  properties: ObjectPropertyType[],
): OntologyIrObjectTypeDatasourceDefinition {
  switch (objectType.datasource?.type) {
    case "stream":
      const window = objectType.datasource.retentionPeriod;
      const retentionPolicy: RetentionPolicy = window
        ? { type: "time", time: { window } }
        : { type: "none", none: {} };
      const propertyMapping = Object.fromEntries(
        properties.map((
          prop,
        ) => [prop.apiName, prop.apiName]),
      );
      return {
        type: "streamV2",
        streamV2: {
          streamLocator: objectType.apiName,
          propertyMapping,
          retentionPolicy,
          propertySecurityGroups: undefined,
        },
      };
    case "dataset":
    default:
      return {
        type: "datasetV2",
        datasetV2: {
          datasetRid: objectType.apiName,
          propertyMapping: Object.fromEntries(
            properties.map((prop) => [
              prop.apiName,
              { type: "column", column: prop.apiName },
            ]),
          ),
        },
      };
  }
}

function convertProperty(property: ObjectPropertyType): OntologyIrPropertyType {
  const output: OntologyIrPropertyType = {
    apiName: property.apiName,
    sharedPropertyTypeApiName: property.sharedPropertyType?.apiName,
    displayMetadata: {
      displayName: property.displayName,
      description: property.description,
      visibility: property.visibility ?? "NORMAL",
    },
    indexedForSearch: property.indexedForSearch ?? true,
    ruleSetBinding: undefined,
    baseFormatter: property.baseFormatter,
    type: convertType(property.type),
    typeClasses: property.typeClasses ?? [],
    status: property.status ?? { type: "active", active: {} },
    inlineAction: undefined,
    dataConstraints: property.dataConstraints,
    sharedPropertyTypeRid: property.sharedPropertyType?.apiName,
    valueType: undefined,
  };
  return output;
}

function convertLink(
  linkType: LinkTypeDefinition,
): OntologyIrLinkTypeBlockDataV2 {
  let definition: OntologyIrLinkDefinition;
  let datasource: OntologyIrManyToManyLinkTypeDatasource | undefined =
    undefined;
  if ("one" in linkType) {
    definition = {
      type: "oneToMany",
      oneToMany: {
        cardinalityHint: "ONE_TO_ONE",
        manyToOneLinkMetadata: linkType.toMany.metadata,
        objectTypeRidManySide: linkType.toMany.object.apiName,
        objectTypeRidOneSide: linkType.one.object.apiName,
        oneToManyLinkMetadata: linkType.one.metadata,
        oneSidePrimaryKeyToManySidePropertyMapping: [{
          from: {
            apiName: linkType.one.object.primaryKeys[0],
            object: linkType.one.object.apiName,
          },
          to: {
            apiName: linkType.manyForeignKeyProperty,
            object: linkType.toMany.object.apiName,
          },
        }],
      },
    };
  } else {
    definition = {
      type: "manyToMany",
      manyToMany: {
        objectTypeAToBLinkMetadata: linkType.many.metadata,
        objectTypeBToALinkMetadata: linkType.toMany.metadata,
        objectTypeRidA: linkType.many.object.apiName,
        objectTypeRidB: linkType.toMany.object.apiName,
        peeringMetadata: undefined,
        objectTypeAPrimaryKeyPropertyMapping: [{
          from: {
            apiName: linkType.many.object.primaryKeys[0],
            object: linkType.many.object.apiName,
          },
          to: {
            apiName: linkType.many.object.primaryKeys[0],
            object: linkType.many.object.apiName,
          },
        }],
        objectTypeBPrimaryKeyPropertyMapping: [{
          from: {
            apiName: linkType.toMany.object.primaryKeys[0],
            object: linkType.toMany.object.apiName,
          },
          to: {
            apiName: linkType.toMany.object.primaryKeys[0],
            object: linkType.toMany.object.apiName,
          },
        }],
      },
    };

    datasource = {
      rid: "ri.ontology.main.datasource.link-".concat(linkType.id),
      datasource: {
        type: "dataset",
        dataset: {
          datasetRid: "link-".concat(linkType.id),
          writebackDatasetRid: undefined,
          objectTypeAPrimaryKeyMapping: [{
            property: {
              apiName: linkType.many.object.primaryKeys[0],
              object: linkType.many.object.apiName,
            },
            column: linkType.many.object.primaryKeys[0],
          }],
          objectTypeBPrimaryKeyMapping: [{
            property: {
              apiName: linkType.toMany.object.primaryKeys[0],
              object: linkType.toMany.object.apiName,
            },
            column: linkType.many.object.primaryKeys[0],
          }],
        },
      },
      editsConfiguration: {
        onlyAllowPrivilegedEdits: false,
      },
      redacted: linkType.redacted,
    };
  }

  return {
    linkType: {
      definition: definition,
      id: linkType.id,
      status: linkType.status ?? { type: "active", active: {} },
      redacted: linkType.redacted ?? false,
    },
    datasources: datasource !== undefined ? [datasource] : [],
    entityMetadata: {
      arePatchesEnabled: linkType.editsEnabled ?? false,
    },
  };
}

function convertInterface(
  interfaceType: InterfaceType,
): OntologyIrInterfaceType {
  return {
    ...interfaceType,
    propertiesV2: Object.fromEntries(
      Object.values(interfaceType.propertiesV2)
        .map((
          spt,
        ) => [spt.sharedPropertyType.apiName, {
          required: spt.required,
          sharedPropertyType: convertSpt(spt.sharedPropertyType),
        }]),
    ),
    // these are omitted from our internal types but we need to re-add them for the final json
    allExtendsInterfaces: [],
    allLinks: [],
    allProperties: [],
    allPropertiesV2: {},
    properties: [],
  };
}

export function dumpOntologyFullMetadata(): OntologyIr {
  return convertToWireOntologyIr(ontologyDefinition);
}

export function dumpValueTypeWireType(): OntologyIrValueTypeBlockData {
  return convertOntologyToValueTypeIr(ontologyDefinition);
}

function convertSpt(
  {
    type,
    array,
    description,
    apiName,
    displayName,
    visibility,
    gothamMapping,
    typeClasses,
    valueType,
  }: SharedPropertyType,
): OntologyIrSharedPropertyType {
  const dataConstraint:
    | OntologyIrSharedPropertyType["dataConstraints"]
    | undefined = (typeof type === "object" && type.type === "marking")
      ? {
        propertyTypeConstraints: [],
        nullability: undefined,
        nullabilityV2: { noEmptyCollections: true, noNulls: true },
      }
      : undefined;
  return {
    apiName,
    displayMetadata: {
      displayName: displayName ?? apiName,
      visibility: visibility ?? "NORMAL",
      description,
    },
    type: array
      ? {
        type: "array" as const,
        array: {
          subtype: convertType(type),
        },
      }
      : convertType(type),
    aliases: [],
    baseFormatter: undefined,
    dataConstraints: dataConstraint,
    gothamMapping: gothamMapping,
    indexedForSearch: true,
    provenance: undefined,
    typeClasses: typeClasses ?? [],
    valueType: valueType,
  };
}

function convertType(
  type: PropertyTypeType,
): OntologyIrType {
  switch (true) {
    case (typeof type === "object" && "markingType" in type):
      return {
        "type": "marking",
        marking: { markingType: type.markingType },
      };

    case (typeof type === "object" && "structDefinition" in type):
      const structFields: Array<OntologyIrStructFieldType> = new Array();
      for (const key in type.structDefinition) {
        const fieldTypeDefinition = type.structDefinition[key];
        let field: OntologyIrStructFieldType;
        if (typeof fieldTypeDefinition === "string") {
          field = {
            apiName: key,
            displayMetadata: { displayName: key, description: undefined },
            typeClasses: [],
            aliases: [],
            fieldType: convertType(fieldTypeDefinition),
          };
        } else {
          // If it is a full form type definition then process it as such
          if ("fieldType" in fieldTypeDefinition) {
            field = {
              ...fieldTypeDefinition,
              apiName: key,
              fieldType: convertType(fieldTypeDefinition.fieldType),
              typeClasses: fieldTypeDefinition.typeClasses ?? [],
              aliases: fieldTypeDefinition.aliases ?? [],
            };
          } else {
            field = {
              apiName: key,
              displayMetadata: { displayName: key, description: undefined },
              typeClasses: [],
              aliases: [],
              fieldType: convertType(fieldTypeDefinition),
            };
          }
        }

        structFields.push(field);
      }

      return {
        type: "struct",
        struct: { structFields },
      };

    case (typeof type === "object" && "isLongText" in type):
      return {
        "type": "string",
        "string": {
          analyzerOverride: undefined,
          enableAsciiFolding: undefined,
          isLongText: type.isLongText,
          supportsEfficientLeadingWildcard:
            type.supportsEfficientLeadingWildcard,
          supportsExactMatching: type.supportsExactMatching,
        },
      };

    case (type === "geopoint"):
      return { type: "geohash", geohash: {} };

    case (type === "decimal"):
      return { type, [type]: { precision: undefined, scale: undefined } };

    case (type === "string"):
      return {
        type,
        [type]: {
          analyzerOverride: undefined,
          enableAsciiFolding: undefined,
          isLongText: false,
          supportsEfficientLeadingWildcard: false,
          supportsExactMatching: true,
        },
      };

    case (type === "mediaReference"):
      return {
        type: type,
        mediaReference: {},
      };

    case (type === "geotimeSeries"):
      return {
        type: "geotimeSeriesReference",
        geotimeSeriesReference: {},
      };

    default:
      // use helper function to distribute `type` properly
      return distributeTypeHelper(type);
  }
}

function convertAction(action: ActionType): OntologyIrActionTypeBlockDataV2 {
  const actionValidation = convertActionValidation(action);
  const actionParameters: Record<ParameterId, OntologyIrParameter> =
    convertActionParameters(action);
  const actionSections: Record<SectionId, OntologyIrSection> =
    convertActionSections(action);
  return {
    actionType: {
      actionTypeLogic: {
        logic: {
          rules: action.rules,
        },
        validation: actionValidation,
      },
      metadata: {
        apiName: action.apiName,
        displayMetadata: {
          configuration: {
            defaultLayout: "FORM",
            displayAndFormat: {
              table: {
                columnWidthByParameterRid: {},
                enableFileImport: true,
                fitHorizontally: false,
                frozenColumnCount: 0,
                rowHeightInLines: 1,
              },
            },
            enableLayoutUserSwitch: false,
          },
          description: action.description ?? "",
          displayName: action.displayName,
          icon: {
            type: "blueprint",
            blueprint: action.icon ?? { locator: "edit", color: "#000000" },
          },
          successMessage: [],
          typeClasses: action.typeClasses ?? [],
        },
        formContentOrdering: action.formContentOrdering ?? [],
        parameterOrdering: (action.parameters ?? []).map(p => p.id),
        parameters: actionParameters,
        sections: actionSections,
        status: typeof action.status === "string"
          ? {
            type: action.status,
            [action.status]: {},
          } as unknown as ActionTypeStatus
          : action.status,
      },
    },
  };
}

function convertActionValidation(
  action: ActionType,
): OntologyIrActionValidation {
  return {
    actionTypeLevelValidation: {
      rules: Object.fromEntries(
        (action.validation
          ?? [{
            condition: { type: "true", true: {} },
            displayMetadata: { failureMessage: "", typeClasses: [] },
          }]).map((rule, idx) => [idx, rule]),
      ),
    },
    parameterValidations: Object.fromEntries(
      (action.parameters ?? []).map(p => {
        return [
          p.id,
          {
            defaultValidation: {
              display: {
                renderHint: renderHintFromBaseType(p),
                visibility: { type: "editable", editable: {} },
              },
              validation: {
                allowedValues: extractAllowedValues(p),
                required: convertParameterRequirementConstraint(
                  p.validation.required,
                ),
              },
            },
          },
        ];
      }),
    ),
  };
}

function convertActionParameters(
  action: ActionType,
): Record<ParameterId, OntologyIrParameter> {
  return Object.fromEntries((action.parameters ?? []).map(p => [p.id, {
    id: p.id,
    type: (typeof p.type === "string"
      ? { type: p.type, [p.type]: {} }
      : p.type) as OntologyIrBaseParameterType,
    displayMetadata: {
      displayName: p.displayName,
      description: p.description ?? "",
      typeClasses: [],
    },
  }]));
}

function convertActionSections(
  action: ActionType,
): Record<SectionId, OntologyIrSection> {
  return Object.fromEntries(
    Object.entries(action.sections ?? {}).map((
      [sectionId, parameterIds],
    ) => [sectionId, {
      id: sectionId,
      content: parameterIds.map(p => ({ type: "parameterId", parameterId: p })),
      displayMetadata: {
        collapsedByDefault: false,
        columnCount: 1,
        description: "",
        displayName: sectionId,
        showTitleBar: true,
      },
    }]),
  );
}

function extractAllowedValues(
  parameter: ActionParameter,
): OntologyIrAllowedParameterValues {
  switch (parameter.validation.allowedValues.type) {
    case "oneOf":
      return {
        type: "oneOf",
        oneOf: {
          type: "oneOf",
          oneOf: {
            labelledValues: parameter.validation.allowedValues.oneOf,
            otherValueAllowed: { allowed: false },
          },
        },
      };
    case "range":
      const { min, max } = parameter.validation.allowedValues;
      return {
        type: "range",
        range: {
          type: "range",
          range: {
            ...(min === undefined
              ? {}
              : { minimum: { inclusive: true, value: min } }),
            ...(max === undefined
              ? {}
              : { maximum: { inclusive: true, value: max } }),
          },
        },
      };
    case "text":
      const { minLength, maxLength, regex } =
        parameter.validation.allowedValues;
      return {
        type: "text",
        text: {
          type: "text",
          text: {
            ...(minLength === undefined
              ? {}
              : { minimumLength: minLength }),
            ...(maxLength === undefined
              ? {}
              : { maximumLength: maxLength }),
            ...(regex === undefined
              ? {}
              : { regex: { regex: regex, failureMessage: "Invalid input" } }),
          },
        },
      };
    case "datetime":
      const { minimum, maximum } = parameter.validation.allowedValues;
      return {
        type: "datetime",
        datetime: {
          type: "datetime",
          datetime: {
            minimum,
            maximum,
          },
        },
      };
    case "objectTypeReference":
      return {
        type: "objectTypeReference",
        objectTypeReference: {
          type: "objectTypeReference",
          objectTypeReference: {
            interfaceTypeRids:
              parameter.validation.allowedValues.interfaceTypes,
          },
        },
      };
    case "redacted":
      return {
        type: "redacted",
        redacted: {},
      };
    case "geotimeSeriesReference":
      return {
        type: "geotimeSeriesReference",
        geotimeSeriesReference: {
          type: "geotimeSeries",
          geotimeSeries: {},
        },
      };
    default:
      const k: Partial<OntologyIrAllowedParameterValues["type"]> =
        parameter.validation.allowedValues.type;
      return {
        type: k,
        [k]: {
          type: k,
          [k]: {},
        },
      } as unknown as OntologyIrAllowedParameterValues;
      // TODO(dpaquin): there's probably a TS clean way to do this
  }
}

function renderHintFromBaseType(
  parameter: ActionParameter,
): ParameterRenderHint {
  // TODO(dpaquin): these are just guesses, we should find where they're actually defined
  const type = typeof parameter.type === "string"
    ? parameter.type
    : parameter.type.type;
  switch (type) {
    case "boolean":
    case "booleanList":
      return { type: "checkbox", checkbox: {} };
    case "integer":
    case "integerList":
    case "long":
    case "longList":
    case "double":
    case "doubleList":
    case "decimal":
    case "decimalList":
      return { type: "numericInput", numericInput: {} };
    case "string":
    case "stringList":
    case "geohash":
    case "geohashList":
    case "geoshape":
    case "geoshapeList":
    case "objectSetRid":
      return { type: "textInput", textInput: {} };
    case "timestamp":
    case "timestampList":
    case "date":
    case "dateList":
      return { type: "dateTimePicker", dateTimePicker: {} };
    case "attachment":
    case "attachmentList":
      return { type: "filePicker", filePicker: {} };
    case "marking":
    case "markingList":
      if (parameter.validation.allowedValues.type === "mandatoryMarking") {
        return { type: "mandatoryMarkingPicker", mandatoryMarkingPicker: {} };
      } else if (parameter.validation.allowedValues.type === "cbacMarking") {
        return { type: "cbacMarkingPicker", cbacMarkingPicker: {} };
      } else {
        throw new Error(
          `The allowed values for "${parameter.displayName}" are not compatible with the base parameter type`,
        );
      }
    case "timeSeriesReference":
    case "objectReference":
    case "objectReferenceList":
    case "interfaceReference":
    case "interfaceReferenceList":
    case "objectTypeReference":
    case "mediaReference":
    case "mediaReferenceList":
    case "geotimeSeriesReference":
    case "geotimeSeriesReferenceList":
      return { type: "dropdown", dropdown: {} };
    case "struct":
    case "structList":
      throw new Error("Structs are not supported yet");
    default:
      throw new Error(`Unknown type ${type}`);
  }
}

function convertParameterRequirementConstraint(
  required: ActionParameterRequirementConstraint,
): ParameterRequiredConfiguration {
  if (typeof required === "boolean") {
    return required
      ? { type: "required", required: {} }
      : { type: "notRequired", notRequired: {} };
  }
  const { min, max } = required.listLength;
  return {
    type: "listLengthValidation",
    listLengthValidation: { minLength: min, maxLength: max },
  };
}

/**
 * Helper function to avoid duplication. Makes the types match properly with the correct
 * behavior without needing to switch on type.
 * @param type
 * @returns
 */
function distributeTypeHelper<T extends string>(
  type: T,
): T extends any ? { type: T } & { [K in T]: {} } : never {
  return { type, [type]: {} } as any; // any cast to match conditional return type
}
