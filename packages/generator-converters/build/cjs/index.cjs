'use strict';

// src/wirePropertyV2ToSdkPropertyDefinition.ts
function wirePropertyV2ToSdkPropertyDefinition(input, isNullable = true, log) {
  const sdkPropDefinition = objectPropertyTypeToSdkPropertyDefinition(input.dataType, log);
  if (sdkPropDefinition == null) {
    return undefined;
  }
  switch (input.dataType.type) {
    case "integer":
    case "string":
    case "byte":
    case "decimal":
    case "double":
    case "float":
    case "long":
    case "short":
    case "boolean":
    case "date":
    case "attachment":
    case "mediaReference":
    case "geopoint":
    case "geoshape":
    case "timestamp":
    case "timeseries":
    case "marking":
    case "geotimeSeriesReference":
    case "struct":
      return {
        displayName: input.displayName,
        multiplicity: false,
        description: input.description,
        type: sdkPropDefinition,
        nullable: input.nullable == null ? isNullable : input.nullable
      };
    case "array": {
      return {
        displayName: input.displayName,
        multiplicity: true,
        description: input.description,
        type: sdkPropDefinition,
        nullable: true
      };
    }
    case "cipherText":
    case "vector": {
      log?.info(`${JSON.stringify(input.dataType.type)} is not a supported dataType`);
      return undefined;
    }
    default:
      input.dataType;
      log?.info(`${JSON.stringify(input.dataType)} is not a supported dataType`);
      return undefined;
  }
}
function objectPropertyTypeToSdkPropertyDefinition(propertyType, log) {
  switch (propertyType.type) {
    case "integer":
    case "string":
    case "byte":
    case "decimal":
    case "double":
    case "float":
    case "long":
    case "short":
    case "boolean":
    case "attachment":
    case "geopoint":
    case "geoshape":
    case "timestamp":
    case "marking":
    case "geotimeSeriesReference":
    case "mediaReference":
      return propertyType.type;
    case "date":
      return "datetime";
    case "array":
      return objectPropertyTypeToSdkPropertyDefinition(propertyType.subType);
    case "timeseries":
      if (propertyType.itemType?.type === "string") {
        return "stringTimeseries";
      } else if (propertyType.itemType?.type === "double") {
        return "numericTimeseries";
      } else return "sensorTimeseries";
    case "struct": {
      return propertyType.structFieldTypes.reduce((structMap, structField) => {
        structMap[structField.apiName] = objectPropertyTypeToSdkPropertyDefinition(structField.dataType);
        return structMap;
      }, {});
    }
    case "cipherText":
    case "vector": {
      log?.info(`${JSON.stringify(propertyType.type)} is not a supported propertyType`);
      return undefined;
    }
    default: {
      log?.info(`${JSON.stringify(propertyType)} is not a supported propertyType`);
      return undefined;
    }
  }
}

// src/__UNSTABLE_wireInterfaceTypeV2ToSdkObjectDefinition.ts
function __UNSTABLE_wireInterfaceTypeV2ToSdkObjectDefinition(interfaceType, v2, log) {
  return {
    type: "interface",
    rid: interfaceType.rid,
    apiName: interfaceType.apiName,
    displayName: interfaceType.displayName,
    description: interfaceType.description,
    implements: interfaceType.allExtendsInterfaces ?? interfaceType.extendsInterfaces,
    properties: Object.fromEntries(Object.entries(interfaceType.allProperties ?? interfaceType.properties).map(([key, value]) => {
      return [key, wirePropertyV2ToSdkPropertyDefinition(value, true, log)];
    }).filter(([key, value]) => value != null)),
    links: {},
    implementedBy: interfaceType.implementedByObjectTypes
  };
}

// src/getEditedEntities.ts
function getModifiedEntityTypes(action) {
  const addedObjects = /* @__PURE__ */ new Set();
  const modifiedObjects = /* @__PURE__ */ new Set();
  for (const operation of action.operations) {
    switch (operation.type) {
      case "createObject":
        addedObjects.add(operation.objectTypeApiName);
        break;
      case "modifyObject":
        modifiedObjects.add(operation.objectTypeApiName);
        break;
    }
  }
  return {
    addedObjects,
    modifiedObjects
  };
}

// src/wireActionTypeV2ToSdkActionMetadata.ts
function wireActionTypeV2ToSdkActionMetadata(input) {
  const modifiedEntityTypes = getModifiedEntityTypes(input);
  return {
    type: "action",
    apiName: input.apiName,
    parameters: Object.fromEntries(Object.entries(input.parameters).map(([key, value]) => [key, wireActionParameterV2ToSdkParameterDefinition(value)])),
    displayName: input.displayName,
    description: input.description,
    modifiedEntities: createModifiedEntities(modifiedEntityTypes.addedObjects, modifiedEntityTypes.modifiedObjects),
    rid: input.rid,
    status: input.status
  };
}
function wireActionParameterV2ToSdkParameterDefinition(value) {
  return {
    multiplicity: value.dataType.type === "array",
    type: actionPropertyToSdkPropertyDefinition(value.dataType.type === "array" ? value.dataType.subType : value.dataType),
    nullable: !value.required,
    description: value.description
  };
}
function actionPropertyToSdkPropertyDefinition(parameterType) {
  switch (parameterType.type) {
    case "string":
    case "boolean":
    case "attachment":
    case "double":
    case "integer":
    case "long":
    case "timestamp":
    case "mediaReference":
    case "marking":
    case "objectType":
      return parameterType.type;
    case "date":
      return "datetime";
    case "objectSet":
      return {
        type: "objectSet",
        objectSet: parameterType.objectTypeApiName
      };
    case "object":
      return {
        type: "object",
        object: parameterType.objectTypeApiName
      };
    case "array":
      return actionPropertyToSdkPropertyDefinition(parameterType.subType);
    case "interfaceObject":
      return {
        type: "interface",
        interface: parameterType.interfaceTypeApiName
      };
    case "struct":
      return {
        type: "struct",
        struct: parameterType.fields.reduce((structMap, structField) => {
          structMap[structField.name] = actionPropertyToSdkPropertyDefinition(structField.fieldType);
          return structMap;
        }, {})
      };
    default:
      throw new Error(`Unsupported action parameter type: ${JSON.stringify(parameterType)}`);
  }
}
function createModifiedEntities(addedObjects, modifiedObjects) {
  const entities = {};
  for (const key of addedObjects) {
    entities[key] = {
      created: true,
      modified: false
    };
  }
  for (const key of modifiedObjects) {
    if (entities[key]) {
      entities[key].modified = true;
    } else {
      entities[key] = {
        created: false,
        modified: true
      };
    }
  }
  return entities;
}

// src/wirePropertyV2ToSdkPrimaryKeyTypeDefinition.ts
function wirePropertyV2ToSdkPrimaryKeyTypeDefinition(input) {
  switch (input.dataType.type) {
    case "integer":
    case "double":
    case "string":
    case "boolean":
    case "byte":
    case "long":
    case "short": {
      return input.dataType.type;
    }
    case "date": {
      return "datetime";
    }
    case "timestamp": {
      return "timestamp";
    }
    case "geopoint":
    case "geoshape":
    case "decimal":
    case "attachment":
    case "timeseries":
    case "array":
    case "marking":
    case "float":
    case "geotimeSeriesReference":
    case "mediaReference":
    case "struct":
    case "cipherText":
    case "vector":
      throw new Error(`Type not supported for primaryKey: ${input.dataType.type}`);
    default:
      input.dataType;
      throw new Error(`Unknown type encountered for primaryKey: ${input.dataType}`);
  }
}

// src/wireObjectTypeFullMetadataToSdkObjectMetadata.ts
function wireObjectTypeFullMetadataToSdkObjectMetadata(objectTypeWithLink, v2, log) {
  if (objectTypeWithLink.objectType.properties[objectTypeWithLink.objectType.primaryKey] === undefined) {
    throw new Error(`Primary key ${objectTypeWithLink.objectType.primaryKey} not found in ${objectTypeWithLink.objectType.apiName}`);
  }
  if (objectTypeWithLink.implementsInterfaces2 == null && objectTypeWithLink.implementsInterfaces != null) {
    throw new Error("Your ontology.json file is missing the implementsInterfaces2 field. Please regenerate it.");
  }
  const interfaceMap = objectTypeWithLink.implementsInterfaces2 ? Object.fromEntries(Object.entries(objectTypeWithLink.implementsInterfaces2).map(([interfaceApiName, impl]) => [interfaceApiName, impl.properties])) : {};
  return {
    type: "object",
    apiName: objectTypeWithLink.objectType.apiName,
    description: objectTypeWithLink.objectType.description,
    primaryKeyApiName: objectTypeWithLink.objectType.primaryKey,
    primaryKeyType: wirePropertyV2ToSdkPrimaryKeyTypeDefinition(objectTypeWithLink.objectType.properties[objectTypeWithLink.objectType.primaryKey]),
    links: Object.fromEntries(objectTypeWithLink.linkTypes.map((linkType) => {
      return [linkType.apiName, {
        multiplicity: linkType.cardinality === "MANY",
        targetType: linkType.objectTypeApiName
      }];
    })),
    properties: Object.fromEntries(Object.entries(objectTypeWithLink.objectType.properties).map(([key, value]) => [key, wirePropertyV2ToSdkPropertyDefinition(value, !(v2 && objectTypeWithLink.objectType.primaryKey === key), log)]).filter(([key, value]) => value != null)),
    implements: objectTypeWithLink.implementsInterfaces,
    interfaceMap,
    inverseInterfaceMap: Object.fromEntries(Object.entries(interfaceMap).map(([interfaceApiName, props]) => [interfaceApiName, invertProps(props)])),
    icon: supportedIconTypes.includes(objectTypeWithLink.objectType.icon.type) ? objectTypeWithLink.objectType.icon : undefined,
    titleProperty: objectTypeWithLink.objectType.titleProperty,
    displayName: objectTypeWithLink.objectType.displayName,
    pluralDisplayName: objectTypeWithLink.objectType.pluralDisplayName,
    status: objectTypeWithLink.objectType.status,
    rid: objectTypeWithLink.objectType.rid,
    visibility: objectTypeWithLink.objectType.visibility
  };
}
function invertProps(a) {
  return a ? Object.fromEntries(Object.entries(a).map(([k, v]) => [v, k])) : undefined;
}
var supportedIconTypes = ["blueprint"];

// src/isNullableQueryDataType.ts
function isNullableQueryDataType(input) {
  if (input.type === "null") {
    return true;
  }
  if (input.type === "union") {
    return input.unionTypes.some((t) => isNullableQueryDataType(t));
  }
  return false;
}

// src/wireQueryDataTypeToQueryDataTypeDefinition.ts
function wireQueryDataTypeToQueryDataTypeDefinition(input) {
  switch (input.type) {
    case "double":
    case "float":
    case "integer":
    case "long":
    case "attachment":
    case "boolean":
    case "date":
    case "string":
    case "timestamp":
      return {
        type: input.type,
        nullable: false
      };
    case "object":
      return {
        type: "object",
        object: input.objectTypeApiName,
        nullable: false
      };
    case "objectSet":
      return {
        type: "objectSet",
        objectSet: input.objectTypeApiName,
        nullable: false
      };
    case "array":
      return {
        ...wireQueryDataTypeToQueryDataTypeDefinition(input.subType),
        multiplicity: true
      };
    case "set":
      return {
        type: "set",
        set: wireQueryDataTypeToQueryDataTypeDefinition(input.subType),
        nullable: false
      };
    case "union":
      const allowNulls = isNullableQueryDataType(input);
      if (allowNulls && input.unionTypes.length === 2) {
        const nonNull = input.unionTypes.find((t) => t.type != null);
        if (nonNull) {
          return {
            ...wireQueryDataTypeToQueryDataTypeDefinition(nonNull),
            nullable: true
          };
        }
      }
      return {
        type: "union",
        union: input.unionTypes.reduce((acc, t) => {
          if (t.type === "null") {
            return acc;
          }
          acc.push(wireQueryDataTypeToQueryDataTypeDefinition(t));
          return acc;
        }, []),
        nullable: allowNulls
      };
    case "struct":
      return {
        type: "struct",
        struct: Object.fromEntries(input.fields.map((f) => [f.name, wireQueryDataTypeToQueryDataTypeDefinition(f.fieldType)])),
        nullable: false
      };
    case "twoDimensionalAggregation":
      return {
        type: "twoDimensionalAggregation",
        twoDimensionalAggregation: get2DQueryAggregationProps(input),
        nullable: false
      };
    case "threeDimensionalAggregation":
      return {
        type: "threeDimensionalAggregation",
        threeDimensionalAggregation: get3DQueryAggregationProps(input),
        nullable: false
      };
    case "entrySet":
      const keyType = wireQueryDataTypeToQueryDataTypeDefinition(input.keyType);
      if (!validMapKeyTypes.includes(keyType.type)) {
        throw new Error("Map types with a key type of " + keyType.type + " are not supported" + validMapKeyTypes.toString());
      }
      if (keyType.multiplicity === true) {
        throw new Error("Map types cannot have keys as arrays");
      }
      return {
        type: "map",
        nullable: false,
        keyType,
        valueType: wireQueryDataTypeToQueryDataTypeDefinition(input.valueType)
      };
    case "null":
    case "unsupported":
      throw new Error(`Unable to process query because the server indicated an unsupported QueryDataType.type: ${input.type}. Please check that your query is using supported types.`);
    default:
      throw new Error(`Unsupported QueryDataType.type ${input.type}`);
  }
}
function get2DQueryAggregationProps(input) {
  if (input.keyType.type === "range") {
    return {
      keyType: input.keyType.type,
      keySubtype: input.keyType.subType.type,
      valueType: input.valueType.type
    };
  } else {
    if (guardInvalidKeyTypes(input.keyType)) {
      return {
        keyType: input.keyType.type,
        valueType: input.valueType.type
      };
    }
    throw new Error(`Cannot create 2D aggregation with ${input.keyType.type} as its type`);
  }
}
function get3DQueryAggregationProps(input) {
  if (input.keyType.type === "range") {
    return {
      keyType: input.keyType.type,
      keySubtype: input.keyType.subType.type,
      valueType: get2DQueryAggregationProps(input.valueType)
    };
  } else {
    if (guardInvalidKeyTypes(input.keyType)) {
      return {
        keyType: input.keyType.type,
        valueType: get2DQueryAggregationProps(input.valueType)
      };
    }
    throw new Error(`Cannot create 3D aggregation with ${input.keyType.type} as its type`);
  }
}
function guardInvalidKeyTypes(key) {
  return key.type === "string" || key.type === "boolean";
}
var validMapKeyTypes = ["string", "object", "double", "float", "integer", "long", "date", "timestamp", "byte", "datetime", "decimal", "marking", "short", "objectType"];

// src/wireQueryTypeV2ToSdkQueryMetadata.ts
function wireQueryTypeV2ToSdkQueryMetadata(input) {
  return {
    type: "query",
    apiName: input.apiName,
    description: input.description,
    displayName: input.displayName,
    version: input.version,
    parameters: Object.fromEntries(Object.entries(input.parameters).map(([name, parameter]) => [name, wireQueryParameterV2ToQueryParameterDefinition(parameter)])),
    output: wireQueryDataTypeToQueryDataTypeDefinition(input.output),
    rid: input.rid
  };
}
function wireQueryTypeV2ToSdkQueryDefinitionNoParams(input) {
  return {
    type: "query",
    apiName: input.apiName,
    description: input.description,
    displayName: input.displayName,
    version: input.version,
    rid: input.rid
  };
}
function wireQueryParameterV2ToQueryParameterDefinition(parameter) {
  return {
    description: parameter.description,
    ...wireQueryDataTypeToQueryDataTypeDefinition(parameter.dataType)
  };
}

exports.__UNSTABLE_wireInterfaceTypeV2ToSdkObjectDefinition = __UNSTABLE_wireInterfaceTypeV2ToSdkObjectDefinition;
exports.wireActionTypeV2ToSdkActionMetadata = wireActionTypeV2ToSdkActionMetadata;
exports.wireObjectTypeFullMetadataToSdkObjectMetadata = wireObjectTypeFullMetadataToSdkObjectMetadata;
exports.wirePropertyV2ToSdkPropertyDefinition = wirePropertyV2ToSdkPropertyDefinition;
exports.wireQueryDataTypeToQueryDataTypeDefinition = wireQueryDataTypeToQueryDataTypeDefinition;
exports.wireQueryParameterV2ToQueryParameterDefinition = wireQueryParameterV2ToQueryParameterDefinition;
exports.wireQueryTypeV2ToSdkQueryDefinitionNoParams = wireQueryTypeV2ToSdkQueryDefinitionNoParams;
exports.wireQueryTypeV2ToSdkQueryMetadata = wireQueryTypeV2ToSdkQueryMetadata;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map