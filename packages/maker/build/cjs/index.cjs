'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var consola = require('consola');
var fs = require('fs/promises');
var path = require('path');
var invariant2 = require('tiny-invariant');
var yargs = require('yargs');
var helpers = require('yargs/helpers');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var fs__namespace = /*#__PURE__*/_interopNamespace(fs);
var path__namespace = /*#__PURE__*/_interopNamespace(path);
var invariant2__default = /*#__PURE__*/_interopDefault(invariant2);
var yargs__default = /*#__PURE__*/_interopDefault(yargs);

// src/cli/main.ts

// src/api/defineOntology.ts
var ontologyDefinition;
var namespace;
async function defineOntology(ns, body) {
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
    valueTypes: Object.values(ontology.valueTypes).map((definitions) => ({
      metadata: {
        apiName: definitions[0].apiName,
        displayMetadata: definitions[0].displayMetadata,
        status: definitions[0].status
      },
      versions: definitions.map((definition) => ({
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
  (objectType.properties ?? []).forEach((property) => {
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
      propertyTypes: Object.fromEntries(objectType.properties?.map((val) => [val.apiName, convertProperty(val)]) ?? []),
      titlePropertyTypeRid: objectType.titlePropertyApiName,
      apiName: objectType.apiName,
      status: objectType.status ?? {
        type: "active",
        active: {}
      },
      redacted: false,
      implementsInterfaces2: implementations.map((impl) => ({
        interfaceTypeApiName: impl.implements.apiName,
        properties: Object.fromEntries(impl.propertyMapping.map((mapping) => [namespace + mapping.interfaceProperty, {
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
    propertiesV2: Object.fromEntries(Object.values(interfaceType.properties).map((spt) => [spt.apiName, {
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
    gothamMapping,
    indexedForSearch: true,
    provenance: undefined,
    typeClasses: typeClasses ?? [],
    valueType
  };
}
function convertType(type) {
  switch (true) {
    case (typeof type === "object" && "markingType" in type):
      return {
        "type": "marking",
        marking: {
          markingType: type.markingType
        }
      };
    case (typeof type === "object" && "structDefinition" in type):
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
        type,
        mediaReference: {}
      };
    default:
      return distributeTypeHelper(type);
  }
}
function distributeTypeHelper(type) {
  return {
    type,
    [type]: {}
  };
}
var defaultTypeClasses = [{
  kind: "render_hint",
  name: "SELECTABLE"
}, {
  kind: "render_hint",
  name: "SORTABLE"
}];
function defineSharedPropertyType(opts) {
  const apiName = namespace + opts.apiName;
  !(ontologyDefinition.sharedPropertyTypes[apiName] === undefined) ? process.env.NODE_ENV !== "production" ? invariant2__default.default(false, `Shared property type ${apiName} already exists`) : invariant2__default.default(false) : undefined;
  return ontologyDefinition.sharedPropertyTypes[apiName] = {
    ...opts,
    apiName,
    nonNameSpacedApiName: opts.apiName,
    displayName: opts.displayName ?? opts.apiName,
    // This way the non-namespaced api name is the display name (maybe not ideal)
    typeClasses: opts.typeClasses ?? defaultTypeClasses
  };
}

// src/api/defineInterface.ts
function defineInterface(opts) {
  const apiName = namespace + opts.apiName;
  !(ontologyDefinition.interfaceTypes[apiName] === undefined) ? process.env.NODE_ENV !== "production" ? invariant2__default.default(false, `Interface ${apiName} already exists`) : invariant2__default.default(false) : undefined;
  const properties = Object.fromEntries(Object.entries(opts.properties ?? {}).map(([apiName2, type]) => {
    if (typeof type === "string" || typeof type === "object" && !("apiName" in type)) {
      !isPropertyTypeType(type) ? process.env.NODE_ENV !== "production" ? invariant2__default.default(false, `Invalid data type ${JSON.stringify(type)} for property ${apiName2} on InterfaceType ${apiName2}`) : invariant2__default.default(false) : undefined;
      const spt = defineSharedPropertyType({
        apiName: apiName2,
        displayName: apiName2,
        type,
        array: false
      });
      return [apiName2, spt];
    } else {
      const unNamespacedTypeApiName = type.apiName.slice(type.apiName.lastIndexOf(".") + 1);
      !(namespace + apiName2 === type.apiName || apiName2 === unNamespacedTypeApiName) ? process.env.NODE_ENV !== "production" ? invariant2__default.default(false, `property key and it's apiName must be identical. ${JSON.stringify({
        key: apiName2,
        apiName: type.apiName
      })}`) : invariant2__default.default(false) : undefined;
      return [apiName2, type];
    }
  }));
  let extendsInterfaces = [];
  if (opts.extends) {
    if (typeof opts.extends === "string") {
      extendsInterfaces = [opts.extends];
    } else if (Array.isArray(opts.extends) && opts.extends.every((item) => typeof item === "string")) {
      extendsInterfaces = opts.extends;
    } else if (opts.extends.apiName !== undefined) {
      extendsInterfaces = [opts.extends.apiName];
    } else {
      extendsInterfaces = opts.extends.map((item) => item.apiName);
    }
  }
  const status = mapSimplifiedStatusToInterfaceTypeStatus(opts.status ?? {
    type: "active"
  });
  !(status.type !== "deprecated" || status.deprecated.message && status.deprecated.deadline) ? process.env.NODE_ENV !== "production" ? invariant2__default.default(false, `Deprecated status must include message and deadline properties.`) : invariant2__default.default(false) : undefined;
  const a = {
    apiName,
    displayMetadata: {
      displayName: opts.displayName ?? opts.apiName,
      description: opts.description ?? opts.displayName ?? opts.apiName,
      icon: opts.icon !== undefined ? {
        type: "blueprint",
        blueprint: {
          color: opts.icon.color,
          locator: opts.icon.locator
        }
      } : undefined
    },
    extendsInterfaces,
    links: [],
    properties,
    status,
    allPropertiesV2: {}
  };
  return ontologyDefinition.interfaceTypes[apiName] = a;
}
function isPropertyTypeType(v) {
  return v === "boolean" || v === "byte" || v === "date" || v === "decimal" || v === "double" || v === "float" || v === "geopoint" || v === "geoshape" || v === "integer" || v === "long" || typeof v === "object" && v.type === "marking" || v === "short" || v === "string" || v === "timestamp";
}
function mapSimplifiedStatusToInterfaceTypeStatus(status) {
  switch (status.type) {
    case "deprecated":
      return {
        type: "deprecated",
        deprecated: {
          message: status.message,
          deadline: status.deadline,
          replacedBy: undefined
        }
      };
    case "active":
      return {
        type: "active",
        active: {}
      };
    case "experimental":
      return {
        type: "experimental",
        experimental: {}
      };
    default:
      throw new Error(`Invalid status type: ${status.type}`);
  }
}
function defineObject(objectDef) {
  const apiName = namespace + objectDef.apiName;
  const propertyApiNames = (objectDef.properties ?? []).map((val) => val.apiName);
  if (ontologyDefinition.objectTypes[apiName] !== undefined) {
    throw new Error(`Object type with apiName ${objectDef.apiName} is already defined`);
  }
  !propertyApiNames.includes(objectDef.titlePropertyApiName) ? process.env.NODE_ENV !== "production" ? invariant2__default.default(false, `Title property ${objectDef.titlePropertyApiName} is not defined on object ${objectDef.apiName}`) : invariant2__default.default(false) : undefined;
  !(objectDef.primaryKeys.length !== 0) ? process.env.NODE_ENV !== "production" ? invariant2__default.default(false, `${objectDef.apiName} does not have any primary keys, objects must have at least one primary key`) : invariant2__default.default(false) : undefined;
  const nonExistentPrimaryKeys = objectDef.primaryKeys.filter((primaryKey) => !objectDef.properties?.map((val) => val.apiName).includes(primaryKey));
  !(nonExistentPrimaryKeys.length === 0) ? process.env.NODE_ENV !== "production" ? invariant2__default.default(false, `Primary key properties ${nonExistentPrimaryKeys} do not exist on object ${objectDef.apiName}`) : invariant2__default.default(false) : undefined;
  objectDef.implementsInterfaces?.forEach((interfaceImpl) => {
    const nonExistentInterfaceProperties = interfaceImpl.propertyMapping.map((val) => val.interfaceProperty).filter((interfaceProperty) => interfaceImpl.implements.properties[interfaceProperty] === undefined).map((interfaceProp) => ({
      type: "invalid",
      reason: `Interface property ${interfaceImpl.implements.apiName}.${interfaceProp} referenced in ${objectDef.apiName} object does not exist`
    }));
    const interfaceToObjectProperties = Object.fromEntries(interfaceImpl.propertyMapping.map((mapping) => [mapping.interfaceProperty, mapping.mapsTo]));
    const validateProperty = (interfaceProp) => {
      if (interfaceProp[1].nonNameSpacedApiName in interfaceToObjectProperties) {
        return validateInterfaceImplProperty(interfaceProp[1], interfaceToObjectProperties[interfaceProp[0]], objectDef);
      }
      return {
        type: "invalid",
        reason: `Interface property ${interfaceImpl.implements.apiName}.${interfaceProp[1].nonNameSpacedApiName} not implemented by ${objectDef.apiName} object definition`
      };
    };
    const baseValidations = Object.entries(interfaceImpl.implements.properties).map(validateProperty);
    const extendsValidations = interfaceImpl.implements.extendsInterfaces.flatMap((interfaceApiName) => Object.entries(ontologyDefinition.interfaceTypes[interfaceApiName].properties).map(validateProperty));
    const allFailedValidations = baseValidations.concat(extendsValidations, nonExistentInterfaceProperties).filter((val) => val.type === "invalid");
    !(allFailedValidations.length === 0) ? process.env.NODE_ENV !== "production" ? invariant2__default.default(false, "\n" + allFailedValidations.map(formatValidationErrors).join("\n")) : invariant2__default.default(false) : undefined;
  });
  ontologyDefinition.objectTypes[apiName] = {
    ...objectDef,
    apiName
  };
  return {
    ...objectDef,
    apiName
  };
}
function formatValidationErrors(error) {
  return `Ontology Definition Error: ${error.reason}
`;
}
function validateInterfaceImplProperty(spt, mappedObjectProp, object) {
  const objProp = object.properties?.find((prop) => prop.apiName === mappedObjectProp);
  if (objProp === undefined) {
    return {
      type: "invalid",
      reason: `Object property mapped to interface does not exist. Object Property Mapped: ${mappedObjectProp}`
    };
  }
  if (spt.type !== objProp?.type) {
    return {
      type: "invalid",
      reason: `Object property type does not match the interface property it is mapped to. Interface Property: ${spt.apiName}, objectProperty: ${mappedObjectProp}`
    };
  }
  return {
    type: "valid"
  };
}

// src/cli/main.ts
var apiNamespaceRegex = /^[a-z0-9-]+(\.[a-z0-9-]+)*\.$/;
async function main(args = process.argv) {
  const commandLineOpts = await yargs__default.default(helpers.hideBin(args)).version("0.10.0-beta.9").wrap(Math.min(150, yargs__default.default().terminalWidth())).strict().help().options({
    input: {
      alias: "i",
      describe: "Input file",
      type: "string",
      default: ".ontology/ontology.ts",
      coerce: path__namespace.resolve
    },
    output: {
      alias: "o",
      describe: "Output file",
      type: "string",
      default: "ontology.json",
      coerce: path__namespace.resolve
    },
    apiNamespace: {
      describe: "Api name prefix for namespaced ontology types",
      type: "string",
      default: ""
    },
    snapshotDir: {
      alias: "s",
      describe: "Snapshot directory",
      type: "string",
      default: "snapshots",
      coerce: path__namespace.resolve
    },
    valueTypesOutput: {
      describe: "Value Type Output File",
      type: "string",
      default: "value-types.json",
      coerce: path__namespace.resolve
    }
  }).parseAsync();
  let apiNamespace = "";
  if (commandLineOpts.apiNamespace.length !== 0) {
    apiNamespace = commandLineOpts.apiNamespace.slice(-1) !== "." ? commandLineOpts.apiNamespace + "." : commandLineOpts.apiNamespace;
    !(apiNamespace.length < 1024) ? process.env.NODE_ENV !== "production" ? invariant2__default.default(false, "API namespace is too long.") : invariant2__default.default(false) : undefined;
    !apiNamespaceRegex.test(apiNamespace) ? process.env.NODE_ENV !== "production" ? invariant2__default.default(false, "API namespace is invalid! It is expected to conform to ^[a-z0-9-]+(.[a-z0-9-]+)*.$") : invariant2__default.default(false) : undefined;
  }
  consola.consola.info(`Loading ontology from ${commandLineOpts.input}`);
  const ontology = await loadOntology(commandLineOpts.input, apiNamespace);
  consola.consola.info(`Saving ontology to ${commandLineOpts.output}`);
  await fs__namespace.writeFile(commandLineOpts.output, JSON.stringify(ontology.ontology, null, 2));
  if (ontology.valueType.valueTypes.length > 0) {
    await fs__namespace.writeFile(commandLineOpts.valueTypesOutput, JSON.stringify(ontology.valueType, null, 2));
  }
}
async function loadOntology(input, apiNamespace) {
  const q = await defineOntology(apiNamespace, async () => await import(input));
  return q;
}
function importSharedPropertyType(opts) {
  const {
    apiName,
    packageName,
    typeHint
  } = opts;
  if (packageName !== undefined) {
    ontologyDefinition.importedTypes.sharedPropertyTypes.push({
      apiName,
      packageName
    });
    !!packageName.endsWith(".") ? process.env.NODE_ENV !== "production" ? invariant2__default.default(false, "Package name format invalid ends with period") : invariant2__default.default(false) : undefined;
    !(packageName.match("[A-Z]") == null) ? process.env.NODE_ENV !== "production" ? invariant2__default.default(false, "Package name includes upper case characters") : invariant2__default.default(false) : undefined;
    return {
      apiName: packageName + "." + apiName,
      type: typeHint,
      nonNameSpacedApiName: apiName
    };
  }
  return {
    apiName,
    type: typeHint,
    nonNameSpacedApiName: apiName
  };
}
function defineInterfaceLinkConstraint(linkDef) {
  const fromLinkMeta = getLinkMeta(linkDef);
  !(linkDef.from.links.find((a) => a.metadata.apiName === fromLinkMeta.apiName) == null) ? process.env.NODE_ENV !== "production" ? invariant2__default.default(false, `Link with apiName ${fromLinkMeta.apiName} already exists on ${linkDef.apiName}`) : invariant2__default.default(false) : undefined;
  linkDef.from.links.push({
    cardinality: linkDef.toMany ? "MANY" : "SINGLE",
    linkedEntityTypeId: getLinkedType(linkDef.toMany ?? linkDef.toOne),
    metadata: fromLinkMeta,
    required: linkDef.required ?? true
  });
}
function getLinkedType(t) {
  return {
    type: "interfaceType",
    interfaceType: typeof t === "string" ? t : t.apiName
  };
}
function getLinkMeta(meta) {
  return typeof meta === "string" ? withDefaults({
    apiName: namespace + meta
  }) : withDefaults(meta);
}
function withDefaults({
  apiName,
  description,
  displayName
}) {
  return {
    apiName: namespace + apiName,
    displayName: displayName ?? apiName,
    description: description ?? displayName ?? apiName
  };
}
function convertValueTypeTypeToBaseType(valueType) {
  switch (true) {
    case (typeof valueType === "object" && valueType.type === "array"):
      return {
        type: "array",
        array: {
          elementType: convertValueTypeTypeToBaseType(valueType.elementType)
        }
      };
    case (typeof valueType === "object" && valueType.type === "struct"):
      return {
        type: "structV2",
        structV2: {
          fields: valueType.fields.map((field) => ({
            identifier: field.identifier,
            baseType: convertValueTypeTypeToBaseType(field.baseType)
          }))
        }
      };
    case (typeof valueType === "object" && valueType.type === "map"):
      return {
        type: "map",
        map: {
          keyType: convertValueTypeTypeToBaseType(valueType.keyType),
          valueType: convertValueTypeTypeToBaseType(valueType.valueType)
        }
      };
    case (typeof valueType === "object" && valueType.type === "optional"):
      return {
        type: "optional",
        optional: {
          wrappedType: convertValueTypeTypeToBaseType(valueType.wrappedType)
        }
      };
    case typeof valueType === "string":
      return {
        type: valueType,
        [valueType]: {}
      };
    default:
      throw new Error("Invalid ValueTypeType");
  }
}
function defineValueType(opts) {
  const {
    apiName,
    displayName,
    description,
    type,
    version
  } = opts;
  const semverValidation = /^((([0-9]+)\.([0-9]+)\.([0-9]+)(?:-([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?)(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?)$/;
  !semverValidation.test(version) ? process.env.NODE_ENV !== "production" ? invariant2__default.default(false, "Version is not a valid semver") : invariant2__default.default(false) : undefined;
  const typeName = typeof type.type === "string" ? type.type : type.type.type === "struct" ? "structV2" : type.type.type;
  const constraints = type.constraints ? type.constraints.map((constraint) => {
    const output = {
      constraint: {
        type: typeName,
        [typeName]: constraint.constraint
      },
      failureMessage: constraint.failureMessage
    };
    return {
      constraint: output
    };
  }) : [];
  const baseType = convertValueTypeTypeToBaseType(type.type);
  const vt = {
    apiName,
    displayMetadata: {
      displayName,
      description: description ?? ""
    },
    status: {
      type: "active",
      active: {}
    },
    version,
    baseType,
    constraints,
    exampleValues: []
  };
  if (ontologyDefinition.valueTypes[apiName] === undefined) {
    ontologyDefinition.valueTypes[apiName] = [];
  }
  ontologyDefinition.valueTypes[apiName].push(vt);
  return vt;
}

exports.default = main;
exports.defineInterface = defineInterface;
exports.defineInterfaceLinkConstraint = defineInterfaceLinkConstraint;
exports.defineObject = defineObject;
exports.defineSharedPropertyType = defineSharedPropertyType;
exports.defineValueType = defineValueType;
exports.importSharedPropertyType = importSharedPropertyType;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map