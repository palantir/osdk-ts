'use strict';

var fs = require('fs');
var path8 = require('path');
var generatorConverters = require('@osdk/generator-converters');
var prettier = require('prettier');
var util = require('util');
var p$1 = require('process');
var tty = require('tty');
var fastDeepEqual = require('fast-deep-equal');
var invariant = require('tiny-invariant');

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
var path8__namespace = /*#__PURE__*/_interopNamespace(path8);
var p$1__default = /*#__PURE__*/_interopDefault(p$1);
var tty__namespace = /*#__PURE__*/_interopNamespace(tty);
var fastDeepEqual__default = /*#__PURE__*/_interopDefault(fastDeepEqual);
var invariant__default = /*#__PURE__*/_interopDefault(invariant);

// src/generateClientSdkPackage.ts
var AbstractImportable = class {
  /**
   * Either a path relative to the ourDir (e.g. "./ontology/objects/foo.js") or a normal
   * module import (e.g. "@something/foo")/
   */
  constructor(common, fullApiName, basePath, isLocal = true) {
    this._common = common;
    this.fullApiName = fullApiName;
    [this.apiNamespace, this.shortApiName] = extractNamespace(this.fullApiName);
    const {
      importExt
    } = common;
    this.importPath = isLocal ? `${basePath}/${this.shortApiName}${importExt}` : basePath;
    this.uniqueImportName = this.shortApiName;
  }
  getImportPathRelTo = (filePath) => {
    if (this.importPath.startsWith(".")) {
      const result = path8__namespace.relative(path8__namespace.dirname(filePath), this.importPath).split(path8__namespace.sep).join("/");
      if (result.startsWith(".")) {
        return result;
      } else {
        return `./${result}`;
      }
    } else {
      return this.importPath;
    }
  };
};
var EnhancedBase = class extends AbstractImportable {
  constructor(common, raw, fullApiName, basePath) {
    super(common, fullApiName, basePath);
    this.raw = raw;
  }
};
function extractNamespace(fqApiName) {
  const last = fqApiName.lastIndexOf(".");
  if (last === -1) return [undefined, fqApiName];
  return [fqApiName.slice(0, last), fqApiName.slice(last + 1)];
}

// src/GenerateContext/EnhancedAction.ts
var EnhancedAction = class extends EnhancedBase {
  constructor(common, raw) {
    super(common, raw, raw.apiName, "./ontology/actions");
    this.raw = raw;
  }
  get description() {
    return this.raw.description;
  }
  get parameters() {
    return this.raw.parameters;
  }
  get operations() {
    return this.raw.operations;
  }
  get paramsIdentifier() {
    return `${this.shortApiName}.Params`;
  }
  get definitionIdentifier() {
    return `${this.shortApiName}.Definition`;
  }
  get definitionParamsIdentifier() {
    return `${this.shortApiName}.ParamsDefinition`;
  }
};

// src/util/deleteUndefineds.ts
function deleteUndefineds(obj) {
  return Object.fromEntries(Object.entries(obj).filter(([, value]) => value !== undefined));
}

// src/GenerateContext/EnhancedInterfaceType.ts
var EnhancedInterfaceType = class extends EnhancedBase {
  constructor(common, raw) {
    super(common, raw, raw.apiName, "./ontology/interfaces");
    this.raw = raw;
  }
  getDefinitionIdentifier(v2) {
    return v2 ? this.shortApiName : `${this.shortApiName}Def`;
  }
  getImportedDefinitionIdentifier(v2) {
    return this.getDefinitionIdentifier(v2);
  }
  get properties() {
    return this.raw.properties;
  }
  getCleanedUpDefinition(v2) {
    return deleteUndefineds(generatorConverters.__UNSTABLE_wireInterfaceTypeV2ToSdkObjectDefinition(this.raw, v2));
  }
};
var EnhancedObjectType = class extends EnhancedBase {
  constructor(common, raw) {
    super(common, raw, raw.objectType.apiName, "./ontology/objects");
    this.raw = raw;
  }
  getDefinitionIdentifier(v2) {
    return v2 ? this.shortApiName : `${this.shortApiName}Def`;
  }
  getImportedDefinitionIdentifier(v2) {
    return this.getDefinitionIdentifier(v2);
  }
  getCleanedUpDefinition(v2) {
    return deleteUndefineds(generatorConverters.wireObjectTypeFullMetadataToSdkObjectMetadata(this.raw, v2));
  }
};

// src/GenerateContext/EnhancedQuery.ts
var EnhancedQuery = class extends EnhancedBase {
  constructor(common, raw) {
    super(common, raw, raw.apiName, "./ontology/queries");
    this.raw = raw;
  }
  get description() {
    return this.raw.description;
  }
  get parameters() {
    return this.raw.parameters;
  }
  get output() {
    return this.raw.output;
  }
  get paramsIdentifier() {
    return `${this.shortApiName}.Parameters`;
  }
  get definitionIdentifier() {
    return this.shortApiName;
  }
  get definitionParamsIdentifier() {
    return `${this.definitionIdentifier}$Params`;
  }
};

// src/GenerateContext/EnhancedSharedPropertyType.ts
var EnhancedSharedPropertyType = class extends EnhancedBase {
  constructor(common, raw) {
    super(common, raw, raw.apiName, "./ontology/interfaces");
    this.raw = raw;
  }
};

// src/GenerateContext/ForeignType.ts
var ForeignType = class extends AbstractImportable {
  constructor(_common, apiNamespace, shortApiName, destinationPackage) {
    super(_common, apiNamespace ? `${apiNamespace}.${shortApiName}` : shortApiName, destinationPackage, false);
    this._common = _common;
  }
  getImportedDefinitionIdentifier(v2) {
    return `$Imported$${this.apiNamespace?.replace(/\./g, "$")}$${this.shortApiName}`;
  }
  getDefinitionIdentifier(v2) {
    return this.uniqueImportName;
  }
};

// src/GenerateContext/EnhancedOntologyDefinition.ts
var EnhancedOntologyDefinition = class {
  #foreignTypes = {};
  constructor(raw, importExt, externalObjects, externalInterfaces, externalSpts) {
    this.common = {
      enhancedOntology: this,
      importExt
    };
    this.raw = raw;
    this.ontology = raw.ontology;
    this.objectTypes = remap(raw.objectTypes, this.common, EnhancedObjectType, externalObjects);
    this.actionTypes = remap(raw.actionTypes, this.common, EnhancedAction);
    this.queryTypes = remap(raw.queryTypes, this.common, EnhancedQuery);
    this.interfaceTypes = remap(raw.interfaceTypes, this.common, EnhancedInterfaceType, externalInterfaces);
    this.sharedPropertyTypes = remap(raw.sharedPropertyTypes, this.common, EnhancedSharedPropertyType, externalSpts);
  }
  #createRequireType = (type) => {
    return (fullApiName, localOnly) => {
      const ret = this[type][fullApiName];
      if (!ret) {
        extractNamespace(fullApiName);
        throw new Error(`Unable to find ${type}: No entry for '${fullApiName}`);
      }
      return ret;
    };
  };
  requireObjectType = this.#createRequireType("objectTypes");
  requireInterfaceType = this.#createRequireType("interfaceTypes");
  requireActionType = this.#createRequireType("actionTypes");
  requireQueryType = this.#createRequireType("queryTypes");
  requireSharedPropertyType = this.#createRequireType("sharedPropertyTypes");
};
function remap(r2, common, Constructor, externalMap) {
  const entries = [];
  for (const [fullApiName, v] of Object.entries(r2 ?? {})) {
    if (externalMap?.has(fullApiName)) ; else {
      entries.push([fullApiName, new Constructor(common, v)]);
    }
  }
  if (externalMap) {
    for (const [fullApiName, destPackage] of externalMap) {
      const [apiNamespace, shortApiName] = extractNamespace(fullApiName);
      entries.push([fullApiName, new ForeignType(common, apiNamespace, shortApiName, destPackage)]);
    }
  }
  return Object.fromEntries(entries.sort((a2, b) => a2[0].localeCompare(b[0])));
}

// src/GenerateContext/enhanceOntology.ts
function enhanceOntology({
  sanitized,
  importExt,
  externalObjects,
  externalInterfaces,
  externalSpts
}) {
  return new EnhancedOntologyDefinition(sanitized, importExt, externalObjects, externalInterfaces, externalSpts);
}

// src/shared/sanitizeMetadata.ts
function sanitizeMetadata(ontology) {
  return {
    ...ontology,
    actionTypes: Object.fromEntries(Object.values(ontology.actionTypes).map((actionType) => {
      return [camelize(actionType.apiName), {
        ...actionType,
        apiName: camelize(actionType.apiName)
      }];
    }))
  };
}
function camelize(name) {
  return name.replace(/-./g, (segment) => segment[1].toUpperCase());
}

// src/util/verifyOutDir.ts
async function verifyOutDir(outDir, fs2) {
  try {
    const contents = await fs2.readdir(outDir);
    if (contents.length !== 0) {
      throw new Error(`outDir ${outDir} is not empty, please delete its contents and try again`);
    }
  } catch (e) {
    if (e.code === "ENOENT") ; else {
      throw e;
    }
  }
}
function formatTs(contents) {
  try {
    return prettier.format(contents, {
      parser: "typescript",
      singleQuote: true,
      trailingComma: "all",
      tabWidth: 2,
      printWidth: 120
    });
  } catch (e) {
    console.error("Failed to format file", e);
    console.log(contents);
    return contents;
  }
}

// src/v2.0/generateMetadata.ts
var ExpectedOsdkVersion = "2.2.0";
async function generateOntologyMetadataFile({
  fs: fs2,
  outDir,
  ontology,
  ontologyApiNamespace
}, userAgent) {
  await fs2.writeFile(path8__namespace.default.join(outDir, "OntologyMetadata.ts"), await formatTs(`
      export type $ExpectedClientVersion = "${ExpectedOsdkVersion}";
      export const $osdkMetadata = { extraUserAgent: "${userAgent}" };
      ${ontologyApiNamespace == null ? `
        export const $ontologyRid = "${ontology.ontology.rid}";
        ` : ""}
      `));
}

// src/shared/getObjectImports.ts
function getObjectImports(objects, curApiName, currentFilePath, v2) {
  return Array.from(objects).filter((obj) => obj.fullApiName !== curApiName).map((obj) => {
    const defId = obj.getDefinitionIdentifier(v2);
    const importedId = obj.getImportedDefinitionIdentifier(v2);
    const nameOrAlias = defId === importedId ? defId : `${defId} as ${importedId}`;
    return `import type { ${nameOrAlias} } from "${obj.getImportPathRelTo("./" + currentFilePath)}";`;
  }).join("\n");
}

// src/util/stringify.ts
var defaultCustomizer = (value, defaultValueFormatter, key, defaultKeyFormatter) => {
  return [defaultKeyFormatter(key), defaultValueFormatter(value)];
};
function stringify(obj, customizer = {}, separator = ",\n") {
  const defaultKeyFormatter = (key) => `${JSON.stringify(key)}`;
  const entries = [];
  const sortedKeys = Object.keys(obj).sort((a2, b) => a2.localeCompare(b));
  for (const key of sortedKeys) {
    const value = obj[key];
    const res = (customizer[key] ?? customizer["*"] ?? defaultCustomizer)(value, (value2) => JSON.stringify(value2, null, 2), key, defaultKeyFormatter);
    if (res) {
      if (typeof res === "string") {
        entries.push(`${defaultKeyFormatter(key)}: ${res}`);
      } else {
        entries.push(`${res[0]}: ${res[1]}`);
      }
    }
  }
  return entries.join(separator);
}

// src/util/stringUnionFrom.ts
function stringUnionFrom(values) {
  if (values.length === 0) {
    return "never";
  } else {
    return values.map((v) => `"${v}"`).join("|");
  }
}

// src/v2.0/getDescriptionIfPresent.ts
function getDescriptionIfPresent(description, includeNewline) {
  if (description) {
    return `/**
 * ${description}
 */${""}`;
  }
  return "";
}

// src/v2.0/generatePerActionDataFiles.ts
async function generatePerActionDataFiles({
  sanitizedOntology: ontology,
  fs: fs2,
  outDir: rootOutDir,
  importExt = "",
  ontology: enhancedOntology,
  forInternalUse = false
}) {
  const outDir = path8__namespace.default.join(rootOutDir, "ontology", "actions");
  await fs2.mkdir(outDir, {
    recursive: true
  });
  await Promise.all(Object.values(enhancedOntology.actionTypes).map(async (action) => {
    const currentFilePath = path8__namespace.default.join("ontology", "actions", `${action.shortApiName}.ts`);
    const uniqueApiNamesArray = extractReferencedObjectsFromAction(action.raw);
    const uniqueApiNames = new Set(uniqueApiNamesArray);
    stringUnionFrom([...uniqueApiNames]);
    const fullActionDef = deleteUndefineds(generatorConverters.wireActionTypeV2ToSdkActionMetadata(action.raw));
    function createParamsDef() {
      const entries = Object.entries(fullActionDef.parameters ?? {});
      entries.sort((a2, b) => a2[0].localeCompare(b[0]));
      if (entries.length === 0) {
        return `// Represents the definition of the parameters for the action
          export type ParamsDefinition = Record<string, never>;`;
      }
      return `// Represents the definition of the parameters for the action
        export type ParamsDefinition = {
          ${entries.map(([key, value]) => {
        return `"${key}": {
                ${stringify(value, {
          description: (value2, d) => value2 ? d(value2) : undefined,
          // trick to remove undefineds
          type: (type) => {
            if (typeof type === "string") {
              return JSON.stringify(type);
            } else if (type.type === "object") {
              const obj = enhancedOntology.requireObjectType(type.object);
              return `ActionMetadata.DataType.Object<${obj.getImportedDefinitionIdentifier(true)}>`;
            } else if (type.type === "objectSet") {
              const obj = enhancedOntology.requireObjectType(type.objectSet);
              return `ActionMetadata.DataType.ObjectSet<${obj.getImportedDefinitionIdentifier(true)}>`;
            } else if (type.type === "interface") {
              const obj = enhancedOntology.requireInterfaceType(type.interface);
              return `ActionMetadata.DataType.Interface<${obj.getImportedDefinitionIdentifier(true)}>`;
            } else if (type.type === "struct") {
              return `ActionMetadata.DataType.Struct<${JSON.stringify(type.struct)}>`;
            }
            return undefined;
          }
        })}
            }`;
      }).join(";\n")}
        }`;
    }
    function getActionParamType(input) {
      if (typeof input === "string") {
        return `ActionParam.PrimitiveType<${JSON.stringify(input)}>`;
      } else if (input.type === "object") {
        return `ActionParam.ObjectType<${enhancedOntology.requireObjectType(input.object).getImportedDefinitionIdentifier(true)}>`;
      } else if (input.type === "objectSet") {
        return `ActionParam.ObjectSetType<${enhancedOntology.requireObjectType(input.objectSet).getImportedDefinitionIdentifier(true)}>`;
      } else if (input.type === "interface") {
        return `ActionParam.InterfaceType<${enhancedOntology.requireInterfaceType(input.interface).getImportedDefinitionIdentifier(true)}>`;
      } else if (input.type === "struct") {
        return `ActionParam.StructType<${JSON.stringify(input.struct)}>`;
      }
    }
    function createV2Types() {
      `${action.shortApiName}$Params`;
      const jsDocBlock = ["/**"];
      if (action.description != null) {
        jsDocBlock.push(`* ${action.description}`);
      }
      return `
        
          export namespace ${action.shortApiName}{
            ${createParamsDef()}

            ${getDescriptionIfPresent(action.description)}
            export interface Params {
              ${stringify(fullActionDef.parameters, {
        "*": (ogValue, _2, ogKey) => {
          const key = `${getDescriptionIfPresent(ogValue.description)}
                  readonly "${ogKey}"${ogValue.nullable ? "?" : ""}`;
          const value = ogValue.multiplicity ? `ReadonlyArray<${getActionParamType(ogValue.type)}>` : `${getActionParamType(ogValue.type)}`;
          jsDocBlock.push(`* @param {${getActionParamType(ogValue.type)}} ${ogValue.nullable ? `[${ogKey}]` : ogKey} ${ogValue.description ?? ""} `);
          return [key, value];
        }
      })}
            }

            // Represents a fqn of the action
            export interface Signatures {
              ${getDescriptionIfPresent(action.description)}
              applyAction<P extends ${action.paramsIdentifier}, OP extends ApplyActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
           
              batchApplyAction<P extends ReadonlyArray<${action.paramsIdentifier}>, OP extends ApplyBatchActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
            }
  
          }

          
          ${jsDocBlock.join("\n")}
          */
          export interface ${action.shortApiName} extends ActionDefinition<${action.shortApiName}.Signatures> {
            __DefinitionMetadata?: {
              ${stringify(fullActionDef, {
        "parameters": () => action.definitionParamsIdentifier
      })}
              
              signatures: ${action.shortApiName}.Signatures;
            },
            ${stringify(fullActionDef, {
        "description": () => undefined,
        "displayName": () => undefined,
        "modifiedEntities": () => undefined,
        "parameters": () => undefined,
        "rid": () => undefined,
        "status": () => undefined
      })}
            osdkMetadata: typeof $osdkMetadata;
            }
          `;
    }
    function createV2Object() {
      return `  export const ${action.shortApiName}: ${action.shortApiName} = 
        {
          ${stringify(fullActionDef, {
        "description": () => undefined,
        "displayName": () => undefined,
        "modifiedEntities": () => undefined,
        "parameters": () => undefined,
        "rid": () => undefined,
        "status": () => undefined
      })},
          osdkMetadata: $osdkMetadata
        }
        `;
    }
    const referencedObjectDefs = /* @__PURE__ */ new Set();
    for (const p2 of Object.values(action.parameters)) {
      if (p2.dataType.type === "object" || p2.dataType.type === "objectSet") {
        if (p2.dataType.objectApiName) {
          referencedObjectDefs.add(enhancedOntology.requireObjectType(p2.dataType.objectApiName));
        }
        if (p2.dataType.objectTypeApiName) {
          referencedObjectDefs.add(enhancedOntology.requireObjectType(p2.dataType.objectTypeApiName));
        }
      }
      if (p2.dataType.type === "interfaceObject") {
        if (p2.dataType.interfaceTypeApiName) {
          referencedObjectDefs.add(enhancedOntology.requireInterfaceType(p2.dataType.interfaceTypeApiName));
        }
      }
      if (p2.dataType.type === "array") {
        if (p2.dataType.subType.type === "object" || p2.dataType.subType.type === "objectSet") {
          if (p2.dataType.subType.objectApiName) {
            referencedObjectDefs.add(enhancedOntology.requireObjectType(p2.dataType.subType.objectApiName));
          }
          if (p2.dataType.subType.objectTypeApiName) {
            referencedObjectDefs.add(enhancedOntology.requireObjectType(p2.dataType.subType.objectTypeApiName));
          }
        }
        if (p2.dataType.subType.type === "interfaceObject") {
          if (p2.dataType.subType.interfaceTypeApiName) {
            referencedObjectDefs.add(enhancedOntology.requireInterfaceType(p2.dataType.subType.interfaceTypeApiName));
          }
        }
      }
    }
    const imports = getObjectImports(referencedObjectDefs, undefined, currentFilePath, true);
    await fs2.writeFile(path8__namespace.default.join(rootOutDir, currentFilePath), await formatTs(`
          import type {
            ActionDefinition,
            ActionMetadata,
            ActionParam,
            ActionReturnTypeForOptions,
            ApplyActionOptions,
            ApplyBatchActionOptions,
          } from "${forInternalUse ? "@osdk/api" : "@osdk/client"}";
          import { $osdkMetadata} from "../../OntologyMetadata${importExt}";
          ${imports}

        
          ${createV2Types()}

          ${createV2Object()}
        `));
  }));
  const indexFileRelPath = path8__namespace.default.join("ontology", "actions.ts");
  await fs2.writeFile(path8__namespace.default.join(rootOutDir, indexFileRelPath), await formatTs(`
      ${Object.values(enhancedOntology.actionTypes).map((action) => {
    const exportConstLine = `export {${action.shortApiName} } from "${action.getImportPathRelTo(indexFileRelPath)}";`;
    return exportConstLine;
  }).join("\n")}
    ${Object.keys(ontology.actionTypes).length === 0 ? "export {};" : ""}
      `));
}
function extractReferencedObjectsFromAction(actionType) {
  const referencedObjectsInParameters = Object.values(actionType.parameters).flatMap(({
    dataType
  }) => {
    const objectTypeReference = extractReferencedObjectsFromActionParameter(dataType);
    return objectTypeReference ? [objectTypeReference] : [];
  });
  const referenceObjectsInEdits = actionType.operations.flatMap((value) => {
    switch (value.type) {
      case "createObject":
        return [value.objectTypeApiName];
      case "modifyObject":
        return [value.objectTypeApiName];
      case "deleteObject":
      case "createLink":
      case "deleteLink":
      default:
        return [];
    }
  });
  return [...referenceObjectsInEdits, ...referencedObjectsInParameters];
}
function extractReferencedObjectsFromActionParameter(actionParameter) {
  switch (actionParameter.type) {
    case "objectSet":
    case "object":
      return actionParameter.objectTypeApiName;
    case "array":
      return extractReferencedObjectsFromActionParameter(actionParameter.subType);
    case "string":
    case "boolean":
    case "attachment":
    case "date":
    case "double":
    case "integer":
    case "long":
    case "timestamp":
      return undefined;
  }
}

// ../../node_modules/.pnpm/consola@3.4.0/node_modules/consola/dist/core.mjs
var LogLevels = {
  silent: Number.NEGATIVE_INFINITY,
  fatal: 0,
  error: 0,
  warn: 1,
  log: 2,
  info: 3,
  success: 3,
  fail: 3,
  ready: 3,
  start: 3,
  box: 3,
  debug: 4,
  trace: 5,
  verbose: Number.POSITIVE_INFINITY
};
var LogTypes = {
  // Silent
  silent: {
    level: -1
  },
  // Level 0
  fatal: {
    level: LogLevels.fatal
  },
  error: {
    level: LogLevels.error
  },
  // Level 1
  warn: {
    level: LogLevels.warn
  },
  // Level 2
  log: {
    level: LogLevels.log
  },
  // Level 3
  info: {
    level: LogLevels.info
  },
  success: {
    level: LogLevels.success
  },
  fail: {
    level: LogLevels.fail
  },
  ready: {
    level: LogLevels.info
  },
  start: {
    level: LogLevels.info
  },
  box: {
    level: LogLevels.info
  },
  // Level 4
  debug: {
    level: LogLevels.debug
  },
  // Level 5
  trace: {
    level: LogLevels.trace
  },
  // Verbose
  verbose: {
    level: LogLevels.verbose
  }
};
function isPlainObject$1(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) {
    return false;
  }
  if (Symbol.iterator in value) {
    return false;
  }
  if (Symbol.toStringTag in value) {
    return Object.prototype.toString.call(value) === "[object Module]";
  }
  return true;
}
function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isPlainObject$1(defaults)) {
    return _defu(baseObject, {}, namespace);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === undefined) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isPlainObject$1(value) && isPlainObject$1(object[key])) {
      object[key] = _defu(value, object[key], (namespace ? `${namespace}.` : "") + key.toString());
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p2, c2) => _defu(p2, c2, ""), {})
  );
}
var defu = createDefu();
function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}
function isLogObj(arg) {
  if (!isPlainObject(arg)) {
    return false;
  }
  if (!arg.message && !arg.args) {
    return false;
  }
  if (arg.stack) {
    return false;
  }
  return true;
}
var paused = false;
var queue = [];
var Consola = class _Consola {
  options;
  _lastLog;
  _mockFn;
  /**
   * Creates an instance of Consola with specified options or defaults.
   *
   * @param {Partial<ConsolaOptions>} [options={}] - Configuration options for the Consola instance.
   */
  constructor(options = {}) {
    const types = options.types || LogTypes;
    this.options = defu({
      ...options,
      defaults: {
        ...options.defaults
      },
      level: _normalizeLogLevel(options.level, types),
      reporters: [...options.reporters || []]
    }, {
      types: LogTypes,
      throttle: 1e3,
      throttleMin: 5,
      formatOptions: {
        date: true,
        colors: false,
        compact: true
      }
    });
    for (const type in types) {
      const defaults = {
        type,
        ...this.options.defaults,
        ...types[type]
      };
      this[type] = this._wrapLogFn(defaults);
      this[type].raw = this._wrapLogFn(defaults, true);
    }
    if (this.options.mockFn) {
      this.mockTypes();
    }
    this._lastLog = {};
  }
  /**
   * Gets the current log level of the Consola instance.
   *
   * @returns {number} The current log level.
   */
  get level() {
    return this.options.level;
  }
  /**
   * Sets the minimum log level that will be output by the instance.
   *
   * @param {number} level - The new log level to set.
   */
  set level(level) {
    this.options.level = _normalizeLogLevel(level, this.options.types, this.options.level);
  }
  /**
   * Displays a prompt to the user and returns the response.
   * Throw an error if `prompt` is not supported by the current configuration.
   *
   * @template T
   * @param {string} message - The message to display in the prompt.
   * @param {T} [opts] - Optional options for the prompt. See {@link PromptOptions}.
   * @returns {promise<T>} A promise that infer with the prompt options. See {@link PromptOptions}.
   */
  prompt(message, opts) {
    if (!this.options.prompt) {
      throw new Error("prompt is not supported!");
    }
    return this.options.prompt(message, opts);
  }
  /**
   * Creates a new instance of Consola, inheriting options from the current instance, with possible overrides.
   *
   * @param {Partial<ConsolaOptions>} options - Optional overrides for the new instance. See {@link ConsolaOptions}.
   * @returns {ConsolaInstance} A new Consola instance. See {@link ConsolaInstance}.
   */
  create(options) {
    const instance = new _Consola({
      ...this.options,
      ...options
    });
    if (this._mockFn) {
      instance.mockTypes(this._mockFn);
    }
    return instance;
  }
  /**
   * Creates a new Consola instance with the specified default log object properties.
   *
   * @param {InputLogObject} defaults - Default properties to include in any log from the new instance. See {@link InputLogObject}.
   * @returns {ConsolaInstance} A new Consola instance. See {@link ConsolaInstance}.
   */
  withDefaults(defaults) {
    return this.create({
      ...this.options,
      defaults: {
        ...this.options.defaults,
        ...defaults
      }
    });
  }
  /**
   * Creates a new Consola instance with a specified tag, which will be included in every log.
   *
   * @param {string} tag - The tag to include in each log of the new instance.
   * @returns {ConsolaInstance} A new Consola instance. See {@link ConsolaInstance}.
   */
  withTag(tag) {
    return this.withDefaults({
      tag: this.options.defaults.tag ? this.options.defaults.tag + ":" + tag : tag
    });
  }
  /**
   * Adds a custom reporter to the Consola instance.
   * Reporters will be called for each log message, depending on their implementation and log level.
   *
   * @param {ConsolaReporter} reporter - The reporter to add. See {@link ConsolaReporter}.
   * @returns {Consola} The current Consola instance.
   */
  addReporter(reporter) {
    this.options.reporters.push(reporter);
    return this;
  }
  /**
   * Removes a custom reporter from the Consola instance.
   * If no reporter is specified, all reporters will be removed.
   *
   * @param {ConsolaReporter} reporter - The reporter to remove. See {@link ConsolaReporter}.
   * @returns {Consola} The current Consola instance.
   */
  removeReporter(reporter) {
    if (reporter) {
      const i2 = this.options.reporters.indexOf(reporter);
      if (i2 !== -1) {
        return this.options.reporters.splice(i2, 1);
      }
    } else {
      this.options.reporters.splice(0);
    }
    return this;
  }
  /**
   * Replaces all reporters of the Consola instance with the specified array of reporters.
   *
   * @param {ConsolaReporter[]} reporters - The new reporters to set. See {@link ConsolaReporter}.
   * @returns {Consola} The current Consola instance.
   */
  setReporters(reporters) {
    this.options.reporters = Array.isArray(reporters) ? reporters : [reporters];
    return this;
  }
  wrapAll() {
    this.wrapConsole();
    this.wrapStd();
  }
  restoreAll() {
    this.restoreConsole();
    this.restoreStd();
  }
  /**
   * Overrides console methods with Consola logging methods for consistent logging.
   */
  wrapConsole() {
    for (const type in this.options.types) {
      if (!console["__" + type]) {
        console["__" + type] = console[type];
      }
      console[type] = this[type].raw;
    }
  }
  /**
   * Restores the original console methods, removing Consola overrides.
   */
  restoreConsole() {
    for (const type in this.options.types) {
      if (console["__" + type]) {
        console[type] = console["__" + type];
        delete console["__" + type];
      }
    }
  }
  /**
   * Overrides standard output and error streams to redirect them through Consola.
   */
  wrapStd() {
    this._wrapStream(this.options.stdout, "log");
    this._wrapStream(this.options.stderr, "log");
  }
  _wrapStream(stream, type) {
    if (!stream) {
      return;
    }
    if (!stream.__write) {
      stream.__write = stream.write;
    }
    stream.write = (data) => {
      this[type].raw(String(data).trim());
    };
  }
  /**
   * Restores the original standard output and error streams, removing the Consola redirection.
   */
  restoreStd() {
    this._restoreStream(this.options.stdout);
    this._restoreStream(this.options.stderr);
  }
  _restoreStream(stream) {
    if (!stream) {
      return;
    }
    if (stream.__write) {
      stream.write = stream.__write;
      delete stream.__write;
    }
  }
  /**
   * Pauses logging, queues incoming logs until resumed.
   */
  pauseLogs() {
    paused = true;
  }
  /**
   * Resumes logging, processing any queued logs.
   */
  resumeLogs() {
    paused = false;
    const _queue = queue.splice(0);
    for (const item of _queue) {
      item[0]._logFn(item[1], item[2]);
    }
  }
  /**
   * Replaces logging methods with mocks if a mock function is provided.
   *
   * @param {ConsolaOptions["mockFn"]} mockFn - The function to use for mocking logging methods. See {@link ConsolaOptions["mockFn"]}.
   */
  mockTypes(mockFn) {
    const _mockFn = mockFn || this.options.mockFn;
    this._mockFn = _mockFn;
    if (typeof _mockFn !== "function") {
      return;
    }
    for (const type in this.options.types) {
      this[type] = _mockFn(type, this.options.types[type]) || this[type];
      this[type].raw = this[type];
    }
  }
  _wrapLogFn(defaults, isRaw) {
    return (...args) => {
      if (paused) {
        queue.push([this, defaults, args, isRaw]);
        return;
      }
      return this._logFn(defaults, args, isRaw);
    };
  }
  _logFn(defaults, args, isRaw) {
    if ((defaults.level || 0) > this.level) {
      return false;
    }
    const logObj = {
      date: /* @__PURE__ */ new Date(),
      args: [],
      ...defaults,
      level: _normalizeLogLevel(defaults.level, this.options.types)
    };
    if (!isRaw && args.length === 1 && isLogObj(args[0])) {
      Object.assign(logObj, args[0]);
    } else {
      logObj.args = [...args];
    }
    if (logObj.message) {
      logObj.args.unshift(logObj.message);
      delete logObj.message;
    }
    if (logObj.additional) {
      if (!Array.isArray(logObj.additional)) {
        logObj.additional = logObj.additional.split("\n");
      }
      logObj.args.push("\n" + logObj.additional.join("\n"));
      delete logObj.additional;
    }
    logObj.type = typeof logObj.type === "string" ? logObj.type.toLowerCase() : "log";
    logObj.tag = typeof logObj.tag === "string" ? logObj.tag : "";
    const resolveLog = (newLog = false) => {
      const repeated = (this._lastLog.count || 0) - this.options.throttleMin;
      if (this._lastLog.object && repeated > 0) {
        const args2 = [...this._lastLog.object.args];
        if (repeated > 1) {
          args2.push(`(repeated ${repeated} times)`);
        }
        this._log({
          ...this._lastLog.object,
          args: args2
        });
        this._lastLog.count = 1;
      }
      if (newLog) {
        this._lastLog.object = logObj;
        this._log(logObj);
      }
    };
    clearTimeout(this._lastLog.timeout);
    const diffTime = this._lastLog.time && logObj.date ? logObj.date.getTime() - this._lastLog.time.getTime() : 0;
    this._lastLog.time = logObj.date;
    if (diffTime < this.options.throttle) {
      try {
        const serializedLog = JSON.stringify([logObj.type, logObj.tag, logObj.args]);
        const isSameLog = this._lastLog.serialized === serializedLog;
        this._lastLog.serialized = serializedLog;
        if (isSameLog) {
          this._lastLog.count = (this._lastLog.count || 0) + 1;
          if (this._lastLog.count > this.options.throttleMin) {
            this._lastLog.timeout = setTimeout(resolveLog, this.options.throttle);
            return;
          }
        }
      } catch {
      }
    }
    resolveLog(true);
  }
  _log(logObj) {
    for (const reporter of this.options.reporters) {
      reporter.log(logObj, {
        options: this.options
      });
    }
  }
};
function _normalizeLogLevel(input, types = {}, defaultLevel = 3) {
  if (input === undefined) {
    return defaultLevel;
  }
  if (typeof input === "number") {
    return input;
  }
  if (types[input] && types[input].level !== undefined) {
    return types[input].level;
  }
  return defaultLevel;
}
Consola.prototype.add = Consola.prototype.addReporter;
Consola.prototype.remove = Consola.prototype.removeReporter;
Consola.prototype.clear = Consola.prototype.removeReporter;
Consola.prototype.withScope = Consola.prototype.withTag;
Consola.prototype.mock = Consola.prototype.mockTypes;
Consola.prototype.pause = Consola.prototype.pauseLogs;
Consola.prototype.resume = Consola.prototype.resumeLogs;
function createConsola(options = {}) {
  return new Consola(options);
}
function parseStack(stack) {
  const cwd = process.cwd() + path8.sep;
  const lines = stack.split("\n").splice(1).map((l2) => l2.trim().replace("file://", "").replace(cwd, ""));
  return lines;
}
function writeStream(data, stream) {
  const write = stream.__write || stream.write;
  return write.call(stream, data);
}
var bracket = (x) => x ? `[${x}]` : "";
var BasicReporter = class {
  formatStack(stack, opts) {
    const indent = "  ".repeat((opts?.errorLevel || 0) + 1);
    return indent + parseStack(stack).join(`
${indent}`);
  }
  formatError(err, opts) {
    const message = err.message ?? util.formatWithOptions(opts, err);
    const stack = err.stack ? this.formatStack(err.stack, opts) : "";
    const level = opts?.errorLevel || 0;
    const causedPrefix = level > 0 ? `${"  ".repeat(level)}[cause]: ` : "";
    const causedError = err.cause ? "\n\n" + this.formatError(err.cause, {
      ...opts,
      errorLevel: level + 1
    }) : "";
    return causedPrefix + message + "\n" + stack + causedError;
  }
  formatArgs(args, opts) {
    const _args = args.map((arg) => {
      if (arg && typeof arg.stack === "string") {
        return this.formatError(arg, opts);
      }
      return arg;
    });
    return util.formatWithOptions(opts, ..._args);
  }
  formatDate(date, opts) {
    return opts.date ? date.toLocaleTimeString() : "";
  }
  filterAndJoin(arr) {
    return arr.filter(Boolean).join(" ");
  }
  formatLogObj(logObj, opts) {
    const message = this.formatArgs(logObj.args, opts);
    if (logObj.type === "box") {
      return "\n" + [bracket(logObj.tag), logObj.title && logObj.title, ...message.split("\n")].filter(Boolean).map((l2) => " > " + l2).join("\n") + "\n";
    }
    return this.filterAndJoin([bracket(logObj.type), bracket(logObj.tag), message]);
  }
  log(logObj, ctx) {
    const line = this.formatLogObj(logObj, {
      columns: ctx.options.stdout.columns || 0,
      ...ctx.options.formatOptions
    });
    return writeStream(line + "\n", logObj.level < 2 ? ctx.options.stderr || process.stderr : ctx.options.stdout || process.stdout);
  }
};
var {
  env = {},
  argv = [],
  platform = ""
} = typeof process === "undefined" ? {} : process;
var isDisabled = "NO_COLOR" in env || argv.includes("--no-color");
var isForced = "FORCE_COLOR" in env || argv.includes("--color");
var isWindows = platform === "win32";
var isDumbTerminal = env.TERM === "dumb";
var isCompatibleTerminal = tty__namespace && tty__namespace.isatty && tty__namespace.isatty(1) && env.TERM && !isDumbTerminal;
var isCI = "CI" in env && ("GITHUB_ACTIONS" in env || "GITLAB_CI" in env || "CIRCLECI" in env);
var isColorSupported = !isDisabled && (isForced || isWindows && !isDumbTerminal || isCompatibleTerminal || isCI);
function replaceClose(index, string, close, replace, head = string.slice(0, Math.max(0, index)) + replace, tail = string.slice(Math.max(0, index + close.length)), next = tail.indexOf(close)) {
  return head + (next < 0 ? tail : replaceClose(next, tail, close, replace));
}
function clearBleed(index, string, open, close, replace) {
  return index < 0 ? open + string + close : open + replaceClose(index, string, close, replace) + close;
}
function filterEmpty(open, close, replace = open, at = open.length + 1) {
  return (string) => string || !(string === "" || string === undefined) ? clearBleed(("" + string).indexOf(close, at), string, open, close, replace) : "";
}
function init(open, close, replace) {
  return filterEmpty(`\x1B[${open}m`, `\x1B[${close}m`, replace);
}
var colorDefs = {
  reset: init(0, 0),
  bold: init(1, 22, "\x1B[22m\x1B[1m"),
  dim: init(2, 22, "\x1B[22m\x1B[2m"),
  italic: init(3, 23),
  underline: init(4, 24),
  inverse: init(7, 27),
  hidden: init(8, 28),
  strikethrough: init(9, 29),
  black: init(30, 39),
  red: init(31, 39),
  green: init(32, 39),
  yellow: init(33, 39),
  blue: init(34, 39),
  magenta: init(35, 39),
  cyan: init(36, 39),
  white: init(37, 39),
  gray: init(90, 39),
  bgBlack: init(40, 49),
  bgRed: init(41, 49),
  bgGreen: init(42, 49),
  bgYellow: init(43, 49),
  bgBlue: init(44, 49),
  bgMagenta: init(45, 49),
  bgCyan: init(46, 49),
  bgWhite: init(47, 49),
  blackBright: init(90, 39),
  redBright: init(91, 39),
  greenBright: init(92, 39),
  yellowBright: init(93, 39),
  blueBright: init(94, 39),
  magentaBright: init(95, 39),
  cyanBright: init(96, 39),
  whiteBright: init(97, 39),
  bgBlackBright: init(100, 49),
  bgRedBright: init(101, 49),
  bgGreenBright: init(102, 49),
  bgYellowBright: init(103, 49),
  bgBlueBright: init(104, 49),
  bgMagentaBright: init(105, 49),
  bgCyanBright: init(106, 49),
  bgWhiteBright: init(107, 49)
};
function createColors(useColor = isColorSupported) {
  return useColor ? colorDefs : Object.fromEntries(Object.keys(colorDefs).map((key) => [key, String]));
}
var colors = createColors();
function getColor(color, fallback = "reset") {
  return colors[color] || colors[fallback];
}
var ansiRegex = [String.raw`[\u001B\u009B][[\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\d\/#&.:=?%@~_]+)*|[a-zA-Z\d]+(?:;[-a-zA-Z\d\/#&.:=?%@~_]*)*)?\u0007)`, String.raw`(?:(?:\d{1,4}(?:;\d{0,4})*)?[\dA-PR-TZcf-nq-uy=><~]))`].join("|");
function stripAnsi(text) {
  return text.replace(new RegExp(ansiRegex, "g"), "");
}
var boxStylePresets = {
  solid: {
    tl: "\u250C",
    tr: "\u2510",
    bl: "\u2514",
    br: "\u2518",
    h: "\u2500",
    v: "\u2502"
  },
  double: {
    tl: "\u2554",
    tr: "\u2557",
    bl: "\u255A",
    br: "\u255D",
    h: "\u2550",
    v: "\u2551"
  },
  doubleSingle: {
    tl: "\u2553",
    tr: "\u2556",
    bl: "\u2559",
    br: "\u255C",
    h: "\u2500",
    v: "\u2551"
  },
  doubleSingleRounded: {
    tl: "\u256D",
    tr: "\u256E",
    bl: "\u2570",
    br: "\u256F",
    h: "\u2500",
    v: "\u2551"
  },
  singleThick: {
    tl: "\u250F",
    tr: "\u2513",
    bl: "\u2517",
    br: "\u251B",
    h: "\u2501",
    v: "\u2503"
  },
  singleDouble: {
    tl: "\u2552",
    tr: "\u2555",
    bl: "\u2558",
    br: "\u255B",
    h: "\u2550",
    v: "\u2502"
  },
  singleDoubleRounded: {
    tl: "\u256D",
    tr: "\u256E",
    bl: "\u2570",
    br: "\u256F",
    h: "\u2550",
    v: "\u2502"
  },
  rounded: {
    tl: "\u256D",
    tr: "\u256E",
    bl: "\u2570",
    br: "\u256F",
    h: "\u2500",
    v: "\u2502"
  }
};
var defaultStyle = {
  borderColor: "white",
  borderStyle: "rounded",
  valign: "center",
  padding: 2,
  marginLeft: 1,
  marginTop: 1,
  marginBottom: 1
};
function box(text, _opts = {}) {
  const opts = {
    ..._opts,
    style: {
      ...defaultStyle,
      ..._opts.style
    }
  };
  const textLines = text.split("\n");
  const boxLines = [];
  const _color = getColor(opts.style.borderColor);
  const borderStyle = {
    ...typeof opts.style.borderStyle === "string" ? boxStylePresets[opts.style.borderStyle] || boxStylePresets.solid : opts.style.borderStyle
  };
  if (_color) {
    for (const key in borderStyle) {
      borderStyle[key] = _color(borderStyle[key]);
    }
  }
  const paddingOffset = opts.style.padding % 2 === 0 ? opts.style.padding : opts.style.padding + 1;
  const height = textLines.length + paddingOffset;
  const width = Math.max(...textLines.map((line) => stripAnsi(line).length)) + paddingOffset;
  const widthOffset = width + paddingOffset;
  const leftSpace = opts.style.marginLeft > 0 ? " ".repeat(opts.style.marginLeft) : "";
  if (opts.style.marginTop > 0) {
    boxLines.push("".repeat(opts.style.marginTop));
  }
  if (opts.title) {
    const title = _color ? _color(opts.title) : opts.title;
    const left = borderStyle.h.repeat(Math.floor((width - stripAnsi(opts.title).length) / 2));
    const right = borderStyle.h.repeat(width - stripAnsi(opts.title).length - stripAnsi(left).length + paddingOffset);
    boxLines.push(`${leftSpace}${borderStyle.tl}${left}${title}${right}${borderStyle.tr}`);
  } else {
    boxLines.push(`${leftSpace}${borderStyle.tl}${borderStyle.h.repeat(widthOffset)}${borderStyle.tr}`);
  }
  const valignOffset = opts.style.valign === "center" ? Math.floor((height - textLines.length) / 2) : opts.style.valign === "top" ? height - textLines.length - paddingOffset : height - textLines.length;
  for (let i2 = 0; i2 < height; i2++) {
    if (i2 < valignOffset || i2 >= valignOffset + textLines.length) {
      boxLines.push(`${leftSpace}${borderStyle.v}${" ".repeat(widthOffset)}${borderStyle.v}`);
    } else {
      const line = textLines[i2 - valignOffset];
      const left = " ".repeat(paddingOffset);
      const right = " ".repeat(width - stripAnsi(line).length);
      boxLines.push(`${leftSpace}${borderStyle.v}${left}${line}${right}${borderStyle.v}`);
    }
  }
  boxLines.push(`${leftSpace}${borderStyle.bl}${borderStyle.h.repeat(widthOffset)}${borderStyle.br}`);
  if (opts.style.marginBottom > 0) {
    boxLines.push("".repeat(opts.style.marginBottom));
  }
  return boxLines.join("\n");
}
var r = /* @__PURE__ */ Object.create(null);
var i = (e) => globalThis.process?.env || undefined || globalThis.Deno?.env.toObject() || globalThis.__env__ || (e ? r : globalThis);
var s$1 = new Proxy(r, {
  get(e, o) {
    return i()[o] ?? r[o];
  },
  has(e, o) {
    const E = i();
    return o in E || o in r;
  },
  set(e, o, E) {
    const b = i(true);
    return b[o] = E, true;
  },
  deleteProperty(e, o) {
    if (!o) return false;
    const E = i(true);
    return delete E[o], true;
  },
  ownKeys() {
    const e = i(true);
    return Object.keys(e);
  }
});
var t = typeof process < "u" && process.env && process.env.NODE_ENV || "";
var B = [["APPVEYOR"], ["AWS_AMPLIFY", "AWS_APP_ID", {
  ci: true
}], ["AZURE_PIPELINES", "SYSTEM_TEAMFOUNDATIONCOLLECTIONURI"], ["AZURE_STATIC", "INPUT_AZURE_STATIC_WEB_APPS_API_TOKEN"], ["APPCIRCLE", "AC_APPCIRCLE"], ["BAMBOO", "bamboo_planKey"], ["BITBUCKET", "BITBUCKET_COMMIT"], ["BITRISE", "BITRISE_IO"], ["BUDDY", "BUDDY_WORKSPACE_ID"], ["BUILDKITE"], ["CIRCLE", "CIRCLECI"], ["CIRRUS", "CIRRUS_CI"], ["CLOUDFLARE_PAGES", "CF_PAGES", {
  ci: true
}], ["CODEBUILD", "CODEBUILD_BUILD_ARN"], ["CODEFRESH", "CF_BUILD_ID"], ["DRONE"], ["DRONE", "DRONE_BUILD_EVENT"], ["DSARI"], ["GITHUB_ACTIONS"], ["GITLAB", "GITLAB_CI"], ["GITLAB", "CI_MERGE_REQUEST_ID"], ["GOCD", "GO_PIPELINE_LABEL"], ["LAYERCI"], ["HUDSON", "HUDSON_URL"], ["JENKINS", "JENKINS_URL"], ["MAGNUM"], ["NETLIFY"], ["NETLIFY", "NETLIFY_LOCAL", {
  ci: false
}], ["NEVERCODE"], ["RENDER"], ["SAIL", "SAILCI"], ["SEMAPHORE"], ["SCREWDRIVER"], ["SHIPPABLE"], ["SOLANO", "TDDIUM"], ["STRIDER"], ["TEAMCITY", "TEAMCITY_VERSION"], ["TRAVIS"], ["VERCEL", "NOW_BUILDER"], ["VERCEL", "VERCEL", {
  ci: false
}], ["VERCEL", "VERCEL_ENV", {
  ci: false
}], ["APPCENTER", "APPCENTER_BUILD_ID"], ["CODESANDBOX", "CODESANDBOX_SSE", {
  ci: false
}], ["STACKBLITZ"], ["STORMKIT"], ["CLEAVR"], ["ZEABUR"], ["CODESPHERE", "CODESPHERE_APP_ID", {
  ci: true
}], ["RAILWAY", "RAILWAY_PROJECT_ID"], ["RAILWAY", "RAILWAY_SERVICE_ID"], ["DENO-DEPLOY", "DENO_DEPLOYMENT_ID"], ["FIREBASE_APP_HOSTING", "FIREBASE_APP_HOSTING", {
  ci: true
}]];
function p() {
  if (globalThis.process?.env) for (const e of B) {
    const o = e[1] || e[0];
    if (globalThis.process?.env[o]) return {
      name: e[0].toLowerCase(),
      ...e[2]
    };
  }
  return globalThis.process?.env?.SHELL === "/bin/jsh" && globalThis.process?.versions?.webcontainer ? {
    name: "stackblitz",
    ci: false
  } : {
    name: "",
    ci: false
  };
}
var l = p();
l.name;
function n(e) {
  return e ? e !== "false" : false;
}
var I = globalThis.process?.platform || "";
var T = n(s$1.CI) || l.ci !== false;
var R = n(globalThis.process?.stdout && globalThis.process?.stdout.isTTY);
var U = n(s$1.DEBUG);
var A = t === "test" || n(s$1.TEST);
n(s$1.MINIMAL) || T || A || !R;
var _ = /^win/i.test(I);
!n(s$1.NO_COLOR) && (n(s$1.FORCE_COLOR) || (R || _) && s$1.TERM !== "dumb" || T);
var C = (globalThis.process?.versions?.node || "").replace(/^v/, "") || null;
Number(C?.split(".")[0]) || null;
var y = globalThis.process || /* @__PURE__ */ Object.create(null);
var c = {
  versions: {}
};
new Proxy(y, {
  get(e, o) {
    if (o === "env") return s$1;
    if (o in e) return e[o];
    if (o in c) return c[o];
  }
});
var L = globalThis.process?.release?.name === "node";
var a = !!globalThis.Bun || !!globalThis.process?.versions?.bun;
var D = !!globalThis.Deno;
var O = !!globalThis.fastly;
var S = !!globalThis.Netlify;
var N = !!globalThis.EdgeRuntime;
var P = globalThis.navigator?.userAgent === "Cloudflare-Workers";
var F = [[S, "netlify"], [N, "edge-light"], [P, "workerd"], [O, "fastly"], [D, "deno"], [a, "bun"], [L, "node"]];
function G() {
  const e = F.find((o) => o[0]);
  if (e) return {
    name: e[1]
  };
}
var u = G();
u?.name || "";
function ansiRegex2({
  onlyFirst = false
} = {}) {
  const ST = "(?:\\u0007|\\u001B\\u005C|\\u009C)";
  const pattern = [`[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?${ST})`, "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|");
  return new RegExp(pattern, onlyFirst ? undefined : "g");
}
var regex = ansiRegex2();
function stripAnsi2(string) {
  if (typeof string !== "string") {
    throw new TypeError(`Expected a \`string\`, got \`${typeof string}\``);
  }
  return string.replace(regex, "");
}
function isAmbiguous(x) {
  return x === 161 || x === 164 || x === 167 || x === 168 || x === 170 || x === 173 || x === 174 || x >= 176 && x <= 180 || x >= 182 && x <= 186 || x >= 188 && x <= 191 || x === 198 || x === 208 || x === 215 || x === 216 || x >= 222 && x <= 225 || x === 230 || x >= 232 && x <= 234 || x === 236 || x === 237 || x === 240 || x === 242 || x === 243 || x >= 247 && x <= 250 || x === 252 || x === 254 || x === 257 || x === 273 || x === 275 || x === 283 || x === 294 || x === 295 || x === 299 || x >= 305 && x <= 307 || x === 312 || x >= 319 && x <= 322 || x === 324 || x >= 328 && x <= 331 || x === 333 || x === 338 || x === 339 || x === 358 || x === 359 || x === 363 || x === 462 || x === 464 || x === 466 || x === 468 || x === 470 || x === 472 || x === 474 || x === 476 || x === 593 || x === 609 || x === 708 || x === 711 || x >= 713 && x <= 715 || x === 717 || x === 720 || x >= 728 && x <= 731 || x === 733 || x === 735 || x >= 768 && x <= 879 || x >= 913 && x <= 929 || x >= 931 && x <= 937 || x >= 945 && x <= 961 || x >= 963 && x <= 969 || x === 1025 || x >= 1040 && x <= 1103 || x === 1105 || x === 8208 || x >= 8211 && x <= 8214 || x === 8216 || x === 8217 || x === 8220 || x === 8221 || x >= 8224 && x <= 8226 || x >= 8228 && x <= 8231 || x === 8240 || x === 8242 || x === 8243 || x === 8245 || x === 8251 || x === 8254 || x === 8308 || x === 8319 || x >= 8321 && x <= 8324 || x === 8364 || x === 8451 || x === 8453 || x === 8457 || x === 8467 || x === 8470 || x === 8481 || x === 8482 || x === 8486 || x === 8491 || x === 8531 || x === 8532 || x >= 8539 && x <= 8542 || x >= 8544 && x <= 8555 || x >= 8560 && x <= 8569 || x === 8585 || x >= 8592 && x <= 8601 || x === 8632 || x === 8633 || x === 8658 || x === 8660 || x === 8679 || x === 8704 || x === 8706 || x === 8707 || x === 8711 || x === 8712 || x === 8715 || x === 8719 || x === 8721 || x === 8725 || x === 8730 || x >= 8733 && x <= 8736 || x === 8739 || x === 8741 || x >= 8743 && x <= 8748 || x === 8750 || x >= 8756 && x <= 8759 || x === 8764 || x === 8765 || x === 8776 || x === 8780 || x === 8786 || x === 8800 || x === 8801 || x >= 8804 && x <= 8807 || x === 8810 || x === 8811 || x === 8814 || x === 8815 || x === 8834 || x === 8835 || x === 8838 || x === 8839 || x === 8853 || x === 8857 || x === 8869 || x === 8895 || x === 8978 || x >= 9312 && x <= 9449 || x >= 9451 && x <= 9547 || x >= 9552 && x <= 9587 || x >= 9600 && x <= 9615 || x >= 9618 && x <= 9621 || x === 9632 || x === 9633 || x >= 9635 && x <= 9641 || x === 9650 || x === 9651 || x === 9654 || x === 9655 || x === 9660 || x === 9661 || x === 9664 || x === 9665 || x >= 9670 && x <= 9672 || x === 9675 || x >= 9678 && x <= 9681 || x >= 9698 && x <= 9701 || x === 9711 || x === 9733 || x === 9734 || x === 9737 || x === 9742 || x === 9743 || x === 9756 || x === 9758 || x === 9792 || x === 9794 || x === 9824 || x === 9825 || x >= 9827 && x <= 9829 || x >= 9831 && x <= 9834 || x === 9836 || x === 9837 || x === 9839 || x === 9886 || x === 9887 || x === 9919 || x >= 9926 && x <= 9933 || x >= 9935 && x <= 9939 || x >= 9941 && x <= 9953 || x === 9955 || x === 9960 || x === 9961 || x >= 9963 && x <= 9969 || x === 9972 || x >= 9974 && x <= 9977 || x === 9979 || x === 9980 || x === 9982 || x === 9983 || x === 10045 || x >= 10102 && x <= 10111 || x >= 11094 && x <= 11097 || x >= 12872 && x <= 12879 || x >= 57344 && x <= 63743 || x >= 65024 && x <= 65039 || x === 65533 || x >= 127232 && x <= 127242 || x >= 127248 && x <= 127277 || x >= 127280 && x <= 127337 || x >= 127344 && x <= 127373 || x === 127375 || x === 127376 || x >= 127387 && x <= 127404 || x >= 917760 && x <= 917999 || x >= 983040 && x <= 1048573 || x >= 1048576 && x <= 1114109;
}
function isFullWidth(x) {
  return x === 12288 || x >= 65281 && x <= 65376 || x >= 65504 && x <= 65510;
}
function isWide(x) {
  return x >= 4352 && x <= 4447 || x === 8986 || x === 8987 || x === 9001 || x === 9002 || x >= 9193 && x <= 9196 || x === 9200 || x === 9203 || x === 9725 || x === 9726 || x === 9748 || x === 9749 || x >= 9776 && x <= 9783 || x >= 9800 && x <= 9811 || x === 9855 || x >= 9866 && x <= 9871 || x === 9875 || x === 9889 || x === 9898 || x === 9899 || x === 9917 || x === 9918 || x === 9924 || x === 9925 || x === 9934 || x === 9940 || x === 9962 || x === 9970 || x === 9971 || x === 9973 || x === 9978 || x === 9981 || x === 9989 || x === 9994 || x === 9995 || x === 10024 || x === 10060 || x === 10062 || x >= 10067 && x <= 10069 || x === 10071 || x >= 10133 && x <= 10135 || x === 10160 || x === 10175 || x === 11035 || x === 11036 || x === 11088 || x === 11093 || x >= 11904 && x <= 11929 || x >= 11931 && x <= 12019 || x >= 12032 && x <= 12245 || x >= 12272 && x <= 12287 || x >= 12289 && x <= 12350 || x >= 12353 && x <= 12438 || x >= 12441 && x <= 12543 || x >= 12549 && x <= 12591 || x >= 12593 && x <= 12686 || x >= 12688 && x <= 12773 || x >= 12783 && x <= 12830 || x >= 12832 && x <= 12871 || x >= 12880 && x <= 42124 || x >= 42128 && x <= 42182 || x >= 43360 && x <= 43388 || x >= 44032 && x <= 55203 || x >= 63744 && x <= 64255 || x >= 65040 && x <= 65049 || x >= 65072 && x <= 65106 || x >= 65108 && x <= 65126 || x >= 65128 && x <= 65131 || x >= 94176 && x <= 94180 || x === 94192 || x === 94193 || x >= 94208 && x <= 100343 || x >= 100352 && x <= 101589 || x >= 101631 && x <= 101640 || x >= 110576 && x <= 110579 || x >= 110581 && x <= 110587 || x === 110589 || x === 110590 || x >= 110592 && x <= 110882 || x === 110898 || x >= 110928 && x <= 110930 || x === 110933 || x >= 110948 && x <= 110951 || x >= 110960 && x <= 111355 || x >= 119552 && x <= 119638 || x >= 119648 && x <= 119670 || x === 126980 || x === 127183 || x === 127374 || x >= 127377 && x <= 127386 || x >= 127488 && x <= 127490 || x >= 127504 && x <= 127547 || x >= 127552 && x <= 127560 || x === 127568 || x === 127569 || x >= 127584 && x <= 127589 || x >= 127744 && x <= 127776 || x >= 127789 && x <= 127797 || x >= 127799 && x <= 127868 || x >= 127870 && x <= 127891 || x >= 127904 && x <= 127946 || x >= 127951 && x <= 127955 || x >= 127968 && x <= 127984 || x === 127988 || x >= 127992 && x <= 128062 || x === 128064 || x >= 128066 && x <= 128252 || x >= 128255 && x <= 128317 || x >= 128331 && x <= 128334 || x >= 128336 && x <= 128359 || x === 128378 || x === 128405 || x === 128406 || x === 128420 || x >= 128507 && x <= 128591 || x >= 128640 && x <= 128709 || x === 128716 || x >= 128720 && x <= 128722 || x >= 128725 && x <= 128727 || x >= 128732 && x <= 128735 || x === 128747 || x === 128748 || x >= 128756 && x <= 128764 || x >= 128992 && x <= 129003 || x === 129008 || x >= 129292 && x <= 129338 || x >= 129340 && x <= 129349 || x >= 129351 && x <= 129535 || x >= 129648 && x <= 129660 || x >= 129664 && x <= 129673 || x >= 129679 && x <= 129734 || x >= 129742 && x <= 129756 || x >= 129759 && x <= 129769 || x >= 129776 && x <= 129784 || x >= 131072 && x <= 196605 || x >= 196608 && x <= 262141;
}
function validate(codePoint) {
  if (!Number.isSafeInteger(codePoint)) {
    throw new TypeError(`Expected a code point, got \`${typeof codePoint}\`.`);
  }
}
function eastAsianWidth(codePoint, {
  ambiguousAsWide = false
} = {}) {
  validate(codePoint);
  if (isFullWidth(codePoint) || isWide(codePoint) || ambiguousAsWide && isAmbiguous(codePoint)) {
    return 2;
  }
  return 1;
}
var emojiRegex = () => {
  return /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC2\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
};
var segmenter = globalThis.Intl?.Segmenter ? new Intl.Segmenter() : {
  segment: (str) => str.split("")
};
var defaultIgnorableCodePointRegex = /^\p{Default_Ignorable_Code_Point}$/u;
function stringWidth$1(string, options = {}) {
  if (typeof string !== "string" || string.length === 0) {
    return 0;
  }
  const {
    ambiguousIsNarrow = true,
    countAnsiEscapeCodes = false
  } = options;
  if (!countAnsiEscapeCodes) {
    string = stripAnsi2(string);
  }
  if (string.length === 0) {
    return 0;
  }
  let width = 0;
  const eastAsianWidthOptions = {
    ambiguousAsWide: !ambiguousIsNarrow
  };
  for (const {
    segment: character
  } of segmenter.segment(string)) {
    const codePoint = character.codePointAt(0);
    if (codePoint <= 31 || codePoint >= 127 && codePoint <= 159) {
      continue;
    }
    if (codePoint >= 8203 && codePoint <= 8207 || codePoint === 65279) {
      continue;
    }
    if (codePoint >= 768 && codePoint <= 879 || codePoint >= 6832 && codePoint <= 6911 || codePoint >= 7616 && codePoint <= 7679 || codePoint >= 8400 && codePoint <= 8447 || codePoint >= 65056 && codePoint <= 65071) {
      continue;
    }
    if (codePoint >= 55296 && codePoint <= 57343) {
      continue;
    }
    if (codePoint >= 65024 && codePoint <= 65039) {
      continue;
    }
    if (defaultIgnorableCodePointRegex.test(character)) {
      continue;
    }
    if (emojiRegex().test(character)) {
      width += 2;
      continue;
    }
    width += eastAsianWidth(codePoint, eastAsianWidthOptions);
  }
  return width;
}
function isUnicodeSupported() {
  const {
    env: env2
  } = p$1__default.default;
  const {
    TERM,
    TERM_PROGRAM
  } = env2;
  if (p$1__default.default.platform !== "win32") {
    return TERM !== "linux";
  }
  return Boolean(env2.WT_SESSION) || Boolean(env2.TERMINUS_SUBLIME) || env2.ConEmuTask === "{cmd::Cmder}" || TERM_PROGRAM === "Terminus-Sublime" || TERM_PROGRAM === "vscode" || TERM === "xterm-256color" || TERM === "alacritty" || TERM === "rxvt-unicode" || TERM === "rxvt-unicode-256color" || env2.TERMINAL_EMULATOR === "JetBrains-JediTerm";
}
var TYPE_COLOR_MAP = {
  info: "cyan",
  fail: "red",
  success: "green",
  ready: "green",
  start: "magenta"
};
var LEVEL_COLOR_MAP = {
  0: "red",
  1: "yellow"
};
var unicode = isUnicodeSupported();
var s = (c2, fallback) => unicode ? c2 : fallback;
var TYPE_ICONS = {
  error: s("\u2716", "\xD7"),
  fatal: s("\u2716", "\xD7"),
  ready: s("\u2714", "\u221A"),
  warn: s("\u26A0", "\u203C"),
  info: s("\u2139", "i"),
  success: s("\u2714", "\u221A"),
  debug: s("\u2699", "D"),
  trace: s("\u2192", "\u2192"),
  fail: s("\u2716", "\xD7"),
  start: s("\u25D0", "o"),
  log: ""
};
function stringWidth(str) {
  const hasICU = typeof Intl === "object";
  if (!hasICU || !Intl.Segmenter) {
    return stripAnsi(str).length;
  }
  return stringWidth$1(str);
}
var FancyReporter = class extends BasicReporter {
  formatStack(stack, opts) {
    const indent = "  ".repeat((opts?.errorLevel || 0) + 1);
    return `
${indent}` + parseStack(stack).map((line) => "  " + line.replace(/^at +/, (m) => colors.gray(m)).replace(/\((.+)\)/, (_2, m) => `(${colors.cyan(m)})`)).join(`
${indent}`);
  }
  formatType(logObj, isBadge, opts) {
    const typeColor = TYPE_COLOR_MAP[logObj.type] || LEVEL_COLOR_MAP[logObj.level] || "gray";
    if (isBadge) {
      return getBgColor(typeColor)(colors.black(` ${logObj.type.toUpperCase()} `));
    }
    const _type = typeof TYPE_ICONS[logObj.type] === "string" ? TYPE_ICONS[logObj.type] : logObj.icon || logObj.type;
    return _type ? getColor2(typeColor)(_type) : "";
  }
  formatLogObj(logObj, opts) {
    const [message, ...additional] = this.formatArgs(logObj.args, opts).split("\n");
    if (logObj.type === "box") {
      return box(characterFormat(message + (additional.length > 0 ? "\n" + additional.join("\n") : "")), {
        title: logObj.title ? characterFormat(logObj.title) : undefined,
        style: logObj.style
      });
    }
    const date = this.formatDate(logObj.date, opts);
    const coloredDate = date && colors.gray(date);
    const isBadge = logObj.badge ?? logObj.level < 2;
    const type = this.formatType(logObj, isBadge, opts);
    const tag = logObj.tag ? colors.gray(logObj.tag) : "";
    let line;
    const left = this.filterAndJoin([type, characterFormat(message)]);
    const right = this.filterAndJoin(opts.columns ? [tag, coloredDate] : [tag]);
    const space = (opts.columns || 0) - stringWidth(left) - stringWidth(right) - 2;
    line = space > 0 && (opts.columns || 0) >= 80 ? left + " ".repeat(space) + right : (right ? `${colors.gray(`[${right}]`)} ` : "") + left;
    line += characterFormat(additional.length > 0 ? "\n" + additional.join("\n") : "");
    if (logObj.type === "trace") {
      const _err = new Error("Trace: " + logObj.message);
      line += this.formatStack(_err.stack || "");
    }
    return isBadge ? "\n" + line + "\n" : line;
  }
};
function characterFormat(str) {
  return str.replace(/`([^`]+)`/gm, (_2, m) => colors.cyan(m)).replace(/\s+_([^_]+)_\s+/gm, (_2, m) => ` ${colors.underline(m)} `);
}
function getColor2(color = "white") {
  return colors[color] || colors.white;
}
function getBgColor(color = "bgWhite") {
  return colors[`bg${color[0].toUpperCase()}${color.slice(1)}`] || colors.bgWhite;
}
function createConsola2(options = {}) {
  let level = _getDefaultLogLevel();
  if (process.env.CONSOLA_LEVEL) {
    level = Number.parseInt(process.env.CONSOLA_LEVEL) ?? level;
  }
  const consola2 = createConsola({
    level,
    defaults: {
      level
    },
    stdout: process.stdout,
    stderr: process.stderr,
    prompt: (...args) => import('./prompt-IKRSF7JL.cjs').then((m) => m.prompt(...args)),
    reporters: options.reporters || [options.fancy ?? !(T || A) ? new FancyReporter() : new BasicReporter()],
    ...options
  });
  return consola2;
}
function _getDefaultLogLevel() {
  if (U) {
    return LogLevels.debug;
  }
  if (A) {
    return LogLevels.warn;
  }
  return LogLevels.info;
}
var consola = createConsola2();

// src/shared/propertyJsdoc.ts
function propertyJsdoc(property, {
  isInherited,
  apiName
}) {
  let ret = `/**
`;
  const renderDisplayName = property.displayName && property.displayName !== apiName;
  if (isInherited || renderDisplayName || property.description) {
    if (isInherited) {
      ret += ` * (inherited from parent)
`;
    }
    if (renderDisplayName) {
      ret += ` *   display name: '${property.displayName}'${property.description ? "," : ""}
`;
    }
    if (property.description) {
      ret += ` *   description: ${property.description}
`;
    }
  } else {
    ret += ` * (no ontology metadata)
`;
  }
  ret += ` */
`;
  return ret;
}

// src/v2.0/wireObjectTypeV2ToSdkObjectConstV2.ts
function wireObjectTypeV2ToSdkObjectConstV2(wireObject, {
  ontology,
  forInternalUse
}, currentFilePath) {
  const object = ontology.requireObjectType(wireObject.objectType.apiName, true);
  if (object instanceof ForeignType) {
    throw new Error("Should not be generating types for an external type");
  }
  const uniqueLinkTargetTypes = new Set(wireObject.linkTypes.map((a2) => ontology.requireObjectType(a2.objectTypeApiName, false)));
  const definition = deleteUndefineds(generatorConverters.wireObjectTypeFullMetadataToSdkObjectMetadata(object.raw, true, consola));
  const objectDefIdentifier = object.getDefinitionIdentifier(true);
  const objectSetIdentifier = `${object.shortApiName}.ObjectSet`;
  const propertyKeysIdentifier = `${object.shortApiName}.PropertyKeys`;
  const osdkObjectPropsIdentifier = `${object.shortApiName}.Props`;
  const osdkObjectStrictPropsIdentifier = `${object.shortApiName}.StrictProps`;
  const osdkObjectLinksIdentifier = `${object.shortApiName}.Links`;
  const osdkObjectIdentifier = `${object.shortApiName}.OsdkObject`;
  const identifiers = {
    objectDefIdentifier: object.shortApiName,
    osdkObjectLinksIdentifier,
    osdkObjectPropsIdentifier,
    osdkObjectStrictPropsIdentifier,
    objectSetIdentifier,
    osdkObjectIdentifier,
    propertyKeysIdentifier
  };
  function getV2Types(object2, forInternalUse2 = false) {
    return `import type {
      PropertyKeys as $PropertyKeys,  
      ObjectTypeDefinition as $ObjectTypeDefinition,
      ObjectMetadata as $ObjectMetadata,
    } from "${forInternalUse2 ? "@osdk/api" : "@osdk/client"}";
     import type {
      ObjectSet as $ObjectSet, 
      Osdk as $Osdk,
      OsdkObject as $OsdkObject,
      PropertyValueWireToClient as $PropType,
      SingleLinkAccessor  as $SingleLinkAccessor,
    } from "${forInternalUse2 ? "@osdk/api" : "@osdk/client"}";


    export namespace ${object2.shortApiName} {

      ${createPropertyKeys(object2)}


      ${createLinks(ontology, object2, "Links")}

      ${createProps(object2, "Props", false)}
      ${createProps(object2, "StrictProps", true)}

      ${createObjectSet(object2, identifiers)}
      
      ${createOsdkObject(object2, "OsdkInstance", identifiers)}
    }    



    ${createDefinition(object2, ontology, object2.shortApiName, identifiers)}
    `;
  }
  const imports = getObjectImports(uniqueLinkTargetTypes, definition.apiName, currentFilePath, true);
  return `${imports}${getV2Types(object, forInternalUse)}

    export const ${object.shortApiName}: ${objectDefIdentifier}
    = {
      type: "${object instanceof EnhancedObjectType ? "object" : "interface"}",
      apiName: "${object.fullApiName}",
      osdkMetadata: $osdkMetadata,  
    };`;
}
function createOsdkObject(object, identifier, {
  osdkObjectPropsIdentifier,
  objectDefIdentifier,
  osdkObjectStrictPropsIdentifier,
  osdkObjectLinksIdentifier
}) {
  object.getCleanedUpDefinition(true);
  return `
    export type ${identifier}<
      OPTIONS extends never | "$rid" = never,
      K extends keyof ${osdkObjectPropsIdentifier}= keyof ${osdkObjectPropsIdentifier},
    > 
    = $Osdk.Instance<
        ${objectDefIdentifier}, 
        OPTIONS,
        K
      >;
   

    /** @deprecated use ${identifier} */
    export type OsdkObject<
      OPTIONS extends never | "$rid" = never,
      K extends keyof ${osdkObjectPropsIdentifier}= keyof ${osdkObjectPropsIdentifier},
    > = ${identifier}<OPTIONS, K>;
  ;
    `;
}
function createObjectSet(object, {
  objectDefIdentifier,
  objectSetIdentifier,
  propertyKeysIdentifier,
  osdkObjectIdentifier
}) {
  return `
export interface ObjectSet extends 
$ObjectSet<${objectDefIdentifier},

${objectSetIdentifier}
>
{

}
`;
}
function maybeStripNamespace(type, q) {
  if (type.apiNamespace && q.startsWith(`${type.apiNamespace}.`)) {
    return q.slice(type.apiNamespace.length + 1);
  } else {
    return q;
  }
}
function createProps(type, identifier, strict) {
  if (identifier === "StrictProps") {
    return `export type StrictProps = Props`;
  }
  const definition = type.getCleanedUpDefinition(true);
  return `export interface ${identifier} {
${stringify(definition.properties, {
    "*": (propertyDefinition, _2, apiName) => {
      return [`readonly "${maybeStripNamespace(type, apiName)}"${// after we convert everything over we can do this:
      // !strict || propertyDefinition.nullable ? "?" : ""
      ""}`, (typeof propertyDefinition.type === "object" ? remapStructType(propertyDefinition.type) : `$PropType[${JSON.stringify(propertyDefinition.type)}]`) + `${propertyDefinition.multiplicity ? "[]" : ""}${propertyDefinition.nullable || !strict && !(definition.type === "object" && definition.primaryKeyApiName === apiName) ? `| undefined` : ""}`];
    }
  })}
    }`;
}
function createDefinition(object, ontology, identifier, {
  objectDefIdentifier,
  objectSetIdentifier,
  osdkObjectPropsIdentifier,
  osdkObjectStrictPropsIdentifier,
  osdkObjectLinksIdentifier
}) {
  const definition = object.getCleanedUpDefinition(true);
  return `
    export interface ${identifier} extends ${object instanceof EnhancedObjectType ? `$ObjectTypeDefinition` : `$InterfaceDefinition`} {
      osdkMetadata: typeof $osdkMetadata;
      type: "${object instanceof EnhancedObjectType ? "object" : "interface"}";
      apiName: "${object.fullApiName}";
      __DefinitionMetadata?: {
      objectSet: ${objectSetIdentifier};
      props: ${osdkObjectPropsIdentifier};
      linksType: ${osdkObjectLinksIdentifier};
      strictProps: ${osdkObjectStrictPropsIdentifier};
      ${stringify(definition, {
    links: (_value) => `{
        ${stringify(definition.links, {
      "*": (definition2) => `$ObjectMetadata.Link<${ontology.requireObjectType(definition2.targetType).getImportedDefinitionIdentifier(true)}, ${definition2.multiplicity}>`
    })}
      }`,
    properties: (_value) => `{
        ${stringify(definition.properties, {
      "*": (propertyDefinition, _2, apiName) => [`${propertyJsdoc(propertyDefinition, {
        apiName
      })}"${maybeStripNamespace(object, apiName)}"`, `$PropertyDef<${JSON.stringify(propertyDefinition.type)}, "${propertyDefinition.nullable ? "nullable" : "non-nullable"}", "${propertyDefinition.multiplicity ? "array" : "single"}">`]
    })}
      }`
  })}
  } 
}
  `;
}
function createLinks(ontology, object, identifier) {
  const definition = object.getCleanedUpDefinition(true);
  return `
    ${Object.keys(definition.links).length === 0 ? `export type ${identifier} = {};` : `
        export interface ${identifier}  {
${stringify(definition.links, {
    "*": (definition2, _2, key) => {
      const linkTarget = ontology.requireObjectType(definition2.targetType).getImportedDefinitionIdentifier(true);
      return [`readonly ${key}`, `${definition2.multiplicity ? `${linkTarget}.ObjectSet` : `$SingleLinkAccessor<${linkTarget}>`}
          `];
    }
  })}
    }
    `}`;
}
function createPropertyKeys(type) {
  const properties = Object.keys(type.getCleanedUpDefinition(true).properties);
  return `export type PropertyKeys = ${properties.length === 0 ? "never" : properties.map((a2) => maybeStripNamespace(type, a2)).map((a2) => `"${a2}"`).join("|")};`;
}
function remapStructType(structType) {
  let output = `{`;
  Object.entries(structType).map(([key, value]) => output += `${key}:$PropType[${JSON.stringify(value)}]|undefined;`);
  output += "}";
  return output;
}

// src/v2.0/UNSTABLE_wireInterfaceTypeV2ToSdkObjectConst.ts
function __UNSTABLE_wireInterfaceTypeV2ToSdkObjectConst(interfaceDef, ontology, v2 = false, forInternalUse = false) {
  const definition = deleteUndefineds(generatorConverters.__UNSTABLE_wireInterfaceTypeV2ToSdkObjectDefinition(interfaceDef.raw, v2));
  const objectDefIdentifier = interfaceDef.getDefinitionIdentifier(v2);
  const parents = definition.implements?.map((p2) => {
    const parent = ontology.requireInterfaceType(p2, true);
    if (parent instanceof EnhancedInterfaceType) {
      const it = deleteUndefineds(generatorConverters.__UNSTABLE_wireInterfaceTypeV2ToSdkObjectDefinition(parent.raw, v2, consola));
      return it;
    }
  }) ?? [];
  const mergedProperties = {
    ...definition.properties
  };
  for (const parent of parents) {
    if (parent == null) {
      continue;
    }
    for (const apiName of Object.keys(parent.properties)) {
      if (definition.properties[apiName] != null) {
        !fastDeepEqual__default.default(definition.properties[apiName], parent.properties[apiName]) ? process.env.NODE_ENV !== "production" ? invariant__default.default(false, `Interface ${definition.apiName} redefines property '${apiName}' from parent '${parent.apiName}' but the properties do not match`) : invariant__default.default(false) : undefined;
      } else if (mergedProperties[apiName] != null) {
        !fastDeepEqual__default.default(mergedProperties[apiName], parent.properties[apiName]) ? process.env.NODE_ENV !== "production" ? invariant__default.default(false, `Some interface defines a conflicting property '${apiName}' that does not match property from parent '${parent.apiName}'`) : invariant__default.default(false) : undefined;
      }
      mergedProperties[apiName] = parent.properties[apiName];
    }
  }
  definition.properties = mergedProperties;
  const objectSetIdentifier = `${interfaceDef.shortApiName}.ObjectSet`;
  const propertyKeysIdentifier = `${interfaceDef.shortApiName}.PropertyKeys`;
  const osdkObjectPropsIdentifier = `${interfaceDef.shortApiName}.Props`;
  const osdkObjectStrictPropsIdentifier = `${interfaceDef.shortApiName}.StrictProps`;
  const osdkObjectLinksIdentifier = `OsdkObjectLinks$${objectDefIdentifier}`;
  const osdkObjectIdentifier = `${interfaceDef.shortApiName}.OsdkObject`;
  const ids = {
    objectDefIdentifier: interfaceDef.shortApiName,
    osdkObjectLinksIdentifier,
    osdkObjectPropsIdentifier,
    osdkObjectStrictPropsIdentifier,
    objectSetIdentifier,
    osdkObjectIdentifier,
    propertyKeysIdentifier
  };
  if (interfaceDef.apiNamespace) {
    const badProperties = Object.keys(definition.properties).filter((apiName) => extractNamespace(apiName)[0] == null);
    if (badProperties.length > 0) {
      throw new Error(`Interfaces with fully qualified api names MUST NOT have any properties with an unqualified api name. Interface: ${interfaceDef.fullApiName}, properties: ${badProperties.join(", ")}`);
    }
  }
  function getV2Types(forInternalUse2 = false) {
    return `import type {
      InterfaceDefinition as $InterfaceDefinition,
      ObjectSet as $ObjectSet, 
      Osdk as $Osdk,
      PropertyValueWireToClient as $PropType,
    } from "${forInternalUse2 ? "@osdk/api" : "@osdk/client"}";
    
        ${Object.keys(definition.links).length === 0 ? `export type ${osdkObjectLinksIdentifier} = {};` : `
        export interface ${osdkObjectLinksIdentifier}  {
${stringify(definition.links, {
      "*": (definition2) => {
        const linkTarget = ontology.requireObjectType(definition2.targetType).getImportedDefinitionIdentifier(v2);
        return `${definition2.multiplicity ? `${linkTarget}["objectSet"]` : `SingleLinkAccessor<${linkTarget}>`}
          `;
      }
    })}
    }
    `}

    export namespace ${interfaceDef.shortApiName} {

      ${createPropertyKeys(interfaceDef)}


      ${createProps(interfaceDef, "Props", false)}
      ${createProps(interfaceDef, "StrictProps", true)}


      ${createObjectSet(interfaceDef, ids)}

      ${createOsdkObject(interfaceDef, "OsdkInstance", ids)}
      
    }    

    ${createDefinition(interfaceDef, ontology, interfaceDef.shortApiName, ids)}

`;
  }
  const imports = [];
  return `${imports.join("\n")}
    ${v2 ? getV2Types(forInternalUse) : ""}

    export const ${interfaceDef.shortApiName}: ${interfaceDef.shortApiName} = {
      type: "interface",
      apiName: "${interfaceDef.fullApiName}",
      osdkMetadata: $osdkMetadata,
       };`;
}

// src/v2.0/generatePerInterfaceDataFiles.ts
async function generatePerInterfaceDataFiles({
  fs: fs2,
  outDir,
  ontology,
  importExt,
  forInternalUse
}) {
  const interfacesDir = path8__namespace.default.join(outDir, "ontology", "interfaces");
  await fs2.mkdir(interfacesDir, {
    recursive: true
  });
  for (const obj of Object.values(ontology.interfaceTypes)) {
    if (obj instanceof ForeignType) continue;
    await fs2.writeFile(path8__namespace.default.join(interfacesDir, `${obj.shortApiName}.ts`), await formatTs(`
        import type { PropertyDef as $PropertyDef } from "${forInternalUse ? "@osdk/api" : "@osdk/client"}";
        import { $osdkMetadata } from "../../OntologyMetadata${importExt}";
      ${__UNSTABLE_wireInterfaceTypeV2ToSdkObjectConst(obj, ontology, true, forInternalUse)}
    `));
  }
  await fs2.writeFile(interfacesDir + ".ts", await formatTs(`
    ${Object.values(ontology.interfaceTypes).filter((i2) => i2 instanceof EnhancedInterfaceType).map((interfaceType) => `export {${interfaceType.shortApiName}} from "./interfaces/${interfaceType.shortApiName}${importExt}";`).join("\n")}
    ${Object.keys(ontology.interfaceTypes).length === 0 ? "export {}" : ""}
    `));
}
async function generatePerObjectDataFiles(ctx) {
  const {
    fs: fs2,
    outDir,
    ontology,
    importExt
  } = ctx;
  await fs2.mkdir(path8__namespace.default.join(outDir, "ontology", "objects"), {
    recursive: true
  });
  for (const obj of Object.values(ontology.objectTypes)) {
    if (obj instanceof ForeignType) continue;
    const relPath = path8__namespace.default.join(".", "ontology", `objects`, `${obj.shortApiName}.ts`);
    const outFilePath = path8__namespace.default.join(outDir, relPath);
    await fs2.writeFile(outFilePath, await formatTs(`
        import type { PropertyDef as $PropertyDef } from "${ctx.forInternalUse ? "@osdk/api" : "@osdk/client"}";
        import { $osdkMetadata } from "../../OntologyMetadata${importExt}";
        import type { $ExpectedClientVersion } from "../../OntologyMetadata${importExt}";
        ${wireObjectTypeV2ToSdkObjectConstV2(obj.raw, ctx, relPath)}
      `));
  }
  await fs2.writeFile(path8__namespace.default.join(outDir, "ontology", "objects.ts"), await formatTs(`
    ${Object.values(ctx.ontology.objectTypes).filter((o) => o instanceof EnhancedObjectType).map((objType) => `export {${objType.shortApiName}} from "./objects/${objType.shortApiName}${importExt}";`).join("\n")}
    ${Object.keys(ontology.objectTypes).length === 0 ? "export {};" : ""}
    `));
}

// src/shared/getObjectTypesFromQueryDataType.ts
function getObjectTypesFromQueryDataType(dataType, types) {
  switch (dataType.type) {
    case "array":
    case "set":
      getObjectTypesFromQueryDataType(dataType.subType, types);
      return;
    case "object":
      types.add(dataType.objectTypeApiName);
      return;
    case "objectSet":
      types.add(dataType.objectTypeApiName);
      return;
    case "struct":
      for (const prop of Object.values(dataType.fields)) {
        getObjectTypesFromQueryDataType(prop.fieldType, types);
      }
      return;
    case "union":
      for (const type of dataType.unionTypes) {
        getObjectTypesFromQueryDataType(type, types);
      }
      return;
    case "entrySet":
      getObjectTypesFromQueryDataType(dataType.keyType, types);
      getObjectTypesFromQueryDataType(dataType.valueType, types);
      return;
    case "attachment":
    case "boolean":
    case "date":
    case "double":
    case "float":
    case "integer":
    case "long":
    case "null":
    case "string":
    case "threeDimensionalAggregation":
    case "timestamp":
    case "twoDimensionalAggregation":
    case "entrySet":
    case "unsupported":
      return;
    default:
      throw new Error(`Cannot find object types from unsupported QueryDataType ${dataType.type}`);
  }
}

// src/shared/getObjectTypeApiNamesFromQuery.ts
function getObjectTypeApiNamesFromQuery(query) {
  const types = /* @__PURE__ */ new Set();
  for (const {
    dataType
  } of Object.values(query.parameters)) {
    getObjectTypesFromQueryDataType(dataType, types);
  }
  getObjectTypesFromQueryDataType(query.output, types);
  return Array.from(types);
}

// src/v2.0/generatePerQueryDataFiles.ts
async function generatePerQueryDataFilesV2({
  fs: fs2,
  outDir: rootOutDir,
  ontology,
  importExt = "",
  forInternalUse = false
}, v2) {
  const relOutDir = path8__namespace.default.join(".", "ontology", "queries");
  const outDir = path8__namespace.default.join(rootOutDir, "ontology", "queries");
  await fs2.mkdir(outDir, {
    recursive: true
  });
  await Promise.all(Object.values(ontology.queryTypes).map(async (query) => {
    await generateV2QueryFile(fs2, outDir, relOutDir, query, importExt, ontology, forInternalUse);
  }));
  const indexFilePath = `${outDir}.ts`;
  await fs2.writeFile(indexFilePath, await formatTs(`
    ${Object.values(ontology.queryTypes).map((query) => `export {${query.shortApiName}} from "${query.getImportPathRelTo(relOutDir)}";`).join("\n")}
      ${Object.keys(ontology.queryTypes).length === 0 ? "export {};" : ""}
    `));
}
async function generateV2QueryFile(fs2, outDir, relOutDir, query, importExt, ontology, forInternalUse) {
  const relFilePath = path8__namespace.default.join(relOutDir, `${query.shortApiName}.ts`);
  const objectTypes = getObjectTypeApiNamesFromQuery(query);
  const objectTypeObjects = new Set(objectTypes.map((o) => ontology.requireObjectType(o)));
  const importObjects = getObjectImports(objectTypeObjects, "", relFilePath, true);
  const baseProps = deleteUndefineds(generatorConverters.wireQueryTypeV2ToSdkQueryDefinitionNoParams(query.raw));
  const outputBase = deleteUndefineds(generatorConverters.wireQueryDataTypeToQueryDataTypeDefinition(query.output));
  objectTypes.length > 0 ? objectTypes.map((apiNameObj) => `"${apiNameObj}"`).join("|") : "never";
  await fs2.writeFile(path8__namespace.default.join(outDir, `${query.shortApiName}.ts`), await formatTs(`
        import type { ObjectSpecifier, QueryDefinition, QueryParam, QueryResult, VersionBound} from "${forInternalUse ? "@osdk/api" : "@osdk/client"}";
        import type { $ExpectedClientVersion } from "../../OntologyMetadata${importExt}";
        import { $osdkMetadata} from "../../OntologyMetadata${importExt}";
        ${importObjects}

        export namespace ${query.shortApiName} {
          export interface Signature {
            ${getDescriptionIfPresent(query.description)}
            (${Object.keys(query.parameters).length > 0 ? `query: ${query.paramsIdentifier}` : ""}): Promise<${query.shortApiName}.ReturnType>
          }

        ${Object.keys(query.parameters).length > 0 ? `
            export interface Parameters {
            ${stringify(query.parameters, {
    "*": (parameter, formatter, apiName) => {
      const q = generatorConverters.wireQueryParameterV2ToQueryParameterDefinition(parameter);
      return [`
                ${queryParamJsDoc(generatorConverters.wireQueryParameterV2ToQueryParameterDefinition(parameter), {
        apiName
      })}readonly "${apiName}"${q.nullable ? "?" : ""}`, getQueryParamType(ontology, q, "Param")];
    }
  })}
            }` : ""}

            ${query.output.type === "struct" ? `
            export interface ReturnType 
            ${getQueryParamType(ontology, generatorConverters.wireQueryParameterV2ToQueryParameterDefinition({
    dataType: query.output
  }), "Result")}
        ` : `
        export type ReturnType = ${getQueryParamType(ontology, generatorConverters.wireQueryParameterV2ToQueryParameterDefinition({
    dataType: query.output
  }), "Result")}
          `}
      }
    
            
        export interface ${query.shortApiName} extends QueryDefinition<
          ${query.shortApiName}.Signature
        >, VersionBound<$ExpectedClientVersion>{
         __DefinitionMetadata?: {
             ${stringify(baseProps)}
            parameters: {
            ${parameterDefsForType(ontology, query)}
            };
            output: {
            ${stringify(outputBase)},
            ${getLineFor__OsdkTargetType(ontology, query.output)}
            };
            signature: ${query.shortApiName}.Signature;
        }, 
        ${stringify(baseProps, {
    "description": () => undefined,
    "displayName": () => undefined,
    "rid": () => undefined
  })}, 
          osdkMetadata: typeof $osdkMetadata;
              }


        export const ${query.shortApiName}: ${query.definitionIdentifier} = {
            ${stringify(baseProps, {
    "description": () => undefined,
    "displayName": () => undefined,
    "rid": () => undefined
  })},
    osdkMetadata: $osdkMetadata
        };
        `));
}
function parameterDefsForType(ontology, query) {
  return stringify(query.parameters, {
    "*": (parameter, valueFormatter, apiName) => [`${queryParamJsDoc(generatorConverters.wireQueryParameterV2ToQueryParameterDefinition(parameter), {
      apiName
    })} ${apiName}`, ` {
          ${stringify(deleteUndefineds(generatorConverters.wireQueryParameterV2ToQueryParameterDefinition(parameter)))},
          ${getLineFor__OsdkTargetType(ontology, parameter.dataType)}
        }`]
  });
}
function getLineFor__OsdkTargetType(ontology, qdt) {
  if (qdt.type === "object" || qdt.type === "objectSet") {
    return `__OsdkTargetType?: ${ontology.requireObjectType(qdt.objectTypeApiName).getImportedDefinitionIdentifier(true)}`;
  }
  return "";
}
function queryParamJsDoc(param, {
  apiName
}) {
  let ret = `/**
`;
  if (param.description) {
    if (param.description) {
      ret += ` *   description: ${param.description}
`;
    }
  } else {
    ret += ` * (no ontology metadata)
`;
  }
  ret += ` */
`;
  return ret;
}
function getQueryParamType(enhancedOntology, input, type, isMapKey = false) {
  let inner = `unknown /* ${input.type} */`;
  switch (input.type) {
    case "date":
      inner = `Query${type}.PrimitiveType<${JSON.stringify("datetime")}>`;
      break;
    case "attachment":
    case "boolean":
    case "double":
    case "float":
    case "integer":
    case "long":
    case "string":
    case "timestamp":
      inner = `Query${type}.PrimitiveType<${JSON.stringify(input.type)}>`;
      break;
    case "struct":
      inner = `{
            ${stringify(input.struct, {
        "*": (p2, formatter, apiName) => {
          return [`
                ${type === "Param" ? "readonly " : ""}"${apiName}"${p2.nullable ? "?" : ""}`, getQueryParamType(enhancedOntology, p2, type)];
        }
      })}
            }`;
      break;
    case "twoDimensionalAggregation":
      inner = `Query${type}.TwoDimensionalAggregationType<${input.twoDimensionalAggregation.keyType === "range" ? `Query${type}.RangeKey<"${input.twoDimensionalAggregation.keySubtype}">` : `"${input.twoDimensionalAggregation.keyType}"`}, "${input.twoDimensionalAggregation.valueType}">`;
      break;
    case "threeDimensionalAggregation":
      inner = `Query${type}.ThreeDimensionalAggregationType<${input.threeDimensionalAggregation.keyType === "range" ? `Query${type}.RangeKey<"${input.threeDimensionalAggregation.keySubtype}">` : `"${input.threeDimensionalAggregation.keyType}"`},${input.threeDimensionalAggregation.valueType.keyType === "range" ? `Query${type}.RangeKey<"${input.threeDimensionalAggregation.valueType.keySubtype}">` : `"${input.threeDimensionalAggregation.valueType.keyType}"`}, 
        "${input.threeDimensionalAggregation.valueType.valueType}">`;
      break;
    case "object":
      if (isMapKey) {
        inner = `ObjectSpecifier<${enhancedOntology.requireObjectType(input.object).getImportedDefinitionIdentifier(true)}>`;
        break;
      }
      inner = `Query${type}.ObjectType<${enhancedOntology.requireObjectType(input.object).getImportedDefinitionIdentifier(true)}>`;
      break;
    case "objectSet":
      inner = `Query${type}.ObjectSetType<${enhancedOntology.requireObjectType(input.objectSet).getImportedDefinitionIdentifier(true)}>`;
      break;
    case "set":
      inner = `${type === "Param" ? "Readonly" : ""}Set<${getQueryParamType(enhancedOntology, input.set, type)}>`;
      break;
    case "union":
      inner = input.union.map((u2) => getQueryParamType(enhancedOntology, u2, type)).join(" | ");
      break;
    case "map":
      inner = `Record<${getQueryParamType(enhancedOntology, input.keyType, type, true)}, ${getQueryParamType(enhancedOntology, input.valueType, type)}>`;
  }
  if (input.multiplicity && type === "Param") {
    return `ReadonlyArray<${inner}>`;
  } else if (input.multiplicity) {
    return `Array<${inner}>`;
  }
  return inner;
}
async function generateRootIndexTsFile({
  fs: fs2,
  outDir,
  importExt,
  ontologyApiNamespace,
  ontology
}) {
  await fs2.writeFile(path8__namespace.default.join(outDir, "index.ts"), await formatTs(`export {${helper(ontology.actionTypes)}} from "./ontology/actions${importExt}";
        export * as $Actions from "./ontology/actions${importExt}";
        export {${helper(ontology.interfaceTypes)}} from "./ontology/interfaces${importExt}";
        export * as $Interfaces from "./ontology/interfaces${importExt}";
        export {${helper(ontology.objectTypes)}} from "./ontology/objects${importExt}";
        export * as $Objects from "./ontology/objects${importExt}";
        export {${helper(ontology.queryTypes)}} from "./ontology/queries${importExt}";
        export * as $Queries from "./ontology/queries${importExt}";
        export { $osdkMetadata } from "./OntologyMetadata${importExt}";
        ${ontologyApiNamespace == null ? `export { $ontologyRid } from "./OntologyMetadata${importExt}";` : ``}
    `));
}
function helper(x) {
  return Object.values(x).filter((x2) => !(x2 instanceof ForeignType)).map((a2) => a2.shortApiName).join(", ");
}

// src/v2.0/generateClientSdkVersionTwoPointZero.ts
async function generateClientSdkVersionTwoPointZero(ontology, userAgent, fs2, outDir, packageType = "commonjs", externalObjects = /* @__PURE__ */ new Map(), externalInterfaces = /* @__PURE__ */ new Map(), externalSpts = /* @__PURE__ */ new Map(), forInternalUse = false) {
  const importExt = ".js";
  await verifyOutDir(outDir, fs2);
  const sanitizedOntology = sanitizeMetadata(ontology);
  await fs2.mkdir(outDir, {
    recursive: true
  });
  const enhancedOntology = enhanceOntology({
    sanitized: sanitizedOntology,
    importExt,
    externalObjects,
    externalInterfaces,
    externalSpts
  });
  const ctx = {
    sanitizedOntology,
    ontology: enhancedOntology,
    importExt,
    fs: fs2,
    outDir,
    forInternalUse
  };
  await generateRootIndexTsFile(ctx);
  await generateOntologyMetadataFile(ctx, userAgent);
  await generatePerObjectDataFiles(ctx);
  await generatePerInterfaceDataFiles(ctx);
  await generatePerActionDataFiles(ctx);
  await generatePerQueryDataFilesV2(ctx);
}

// src/generateClientSdkPackage.ts
async function generateClientSdkPackage(packageName, packageVersion, sdkVersion, baseOutDir, ontology, minimalFs, dependencyVersions, cliVersion, externalObjects = /* @__PURE__ */ new Map(), externalInterfaces = /* @__PURE__ */ new Map()) {
  if (!packageName) throw new Error("Package name is required");
  if (sdkVersion === "1.1") {
    throw new Error("This generator version does not support generating v1 sdks");
  }
  for (const packageType of ["module", "commonjs"]) {
    const outDir = path8__namespace.join(baseOutDir, "dist", packageType);
    await generateClientSdkVersionTwoPointZero(ontology, `typescript-sdk/${packageVersion} osdk-cli/${cliVersion}`, minimalFs, outDir, packageType, externalObjects, externalInterfaces);
    await fs__namespace.promises.mkdir(outDir, {
      recursive: true
    });
    await writeJson(minimalFs, path8__namespace.join(outDir, "package.json"), {
      type: packageType
    });
    await writeJson(minimalFs, path8__namespace.join(outDir, `tsconfig.json`), {
      compilerOptions: getTsCompilerOptions(packageType)
    });
  }
  await writeJson(minimalFs, path8__namespace.join(baseOutDir, "package.json"), getPackageJsonContents(packageName, packageVersion, dependencyVersions));
  await minimalFs.mkdir(path8__namespace.join(baseOutDir, "ontology"), {
    recursive: true
  });
  await minimalFs.writeFile(path8__namespace.join(baseOutDir, "ontology", "objects.js"), `module.exports = require("../../dist/module/ontology/objects")`);
  await minimalFs.writeFile(path8__namespace.join(baseOutDir, "ontology", "objects.d.ts"), `export * from "../dist/module/ontology/objects"`);
}
function getTsCompilerOptions(packageType) {
  const commonTsconfig = {
    importHelpers: true,
    declaration: true,
    isolatedModules: true,
    esModuleInterop: true,
    forceConsistentCasingInFileNames: true,
    strict: true,
    skipLibCheck: true
  };
  const compilerOptions = packageType === "commonjs" ? {
    ...commonTsconfig,
    module: "commonjs",
    target: "es2018"
  } : {
    ...commonTsconfig,
    module: "NodeNext",
    target: "ES2020"
  };
  return compilerOptions;
}
function getExpectedDependencies({
  osdkApiVersion,
  osdkClientVersion
}) {
  return {
    devDependencies: {
      "@osdk/api": osdkApiVersion
    },
    peerDependencies: {
      "@osdk/api": osdkApiVersion,
      "@osdk/client": osdkClientVersion
    }
  };
}
function getExpectedDependenciesFull(dependencyVersions) {
  const {
    typescriptVersion,
    tslibVersion,
    areTheTypesWrongVersion
  } = dependencyVersions;
  const base = getExpectedDependencies(dependencyVersions);
  return {
    devDependencies: {
      ...base.devDependencies,
      "typescript": typescriptVersion,
      "tslib": tslibVersion,
      "@arethetypeswrong/cli": areTheTypesWrongVersion
    },
    peerDependencies: {
      ...base.peerDependencies
    }
  };
}
function getPackageJsonContents(name, version, dependencyVersions) {
  const esmPrefix = "./dist/module";
  const commonjsPrefix = "./dist/commonjs";
  return {
    name,
    version,
    main: `${commonjsPrefix}/index.js`,
    module: `${esmPrefix}/index.js`,
    exports: {
      ".": {
        import: `${esmPrefix}/index.js`,
        require: `${commonjsPrefix}/index.js`
      }
    },
    scripts: {
      prepack: `tsc -p ${esmPrefix}/tsconfig.json && tsc -p ${commonjsPrefix}/tsconfig.json`,
      check: "npm exec attw $(npm pack)"
    },
    ...getExpectedDependenciesFull(dependencyVersions),
    files: ["**/*.js", "**/*.d.ts", "dist/**/package.json"]
  };
}
async function writeJson(minimalFs, filePath, body) {
  return void await minimalFs.writeFile(filePath, JSON.stringify(body, undefined, 2) + "\n");
}

exports.__UNSTABLE_generateClientSdkPackage = generateClientSdkPackage;
exports.generateClientSdkVersionTwoPointZero = generateClientSdkVersionTwoPointZero;
exports.getExpectedDependencies = getExpectedDependencies;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map