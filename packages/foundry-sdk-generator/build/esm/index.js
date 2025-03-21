import { fileURLToPath as fileURLToPath$1 } from 'url';
import path, { join, dirname, isAbsolute, normalize } from 'path';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { exit } from 'process';
import { createSharedClientContext } from '@osdk/shared.client.impl';
import { generateClientSdkVersionTwoPointZero } from '@osdk/generator';
import { mkdir, writeFile, readdir, readFile } from 'fs/promises';
import * as path2 from 'node:path';
import path2__default from 'node:path';
import { fileURLToPath } from 'node:url';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { rollup } from 'rollup';
import nodePolyfill from 'rollup-plugin-polyfill-node';
import { Project, Node } from 'ts-morph';
import * as fs from 'node:fs';
import { ModuleKind, ScriptTarget, createCompilerHost, createSourceFile, createProgram } from 'typescript';

// ../../node_modules/.pnpm/tsup@8.2.3_@microsoft+api-extractor@7.49.1_@types+node@18.19.74__@swc+core@1.7.39_jiti@2.4.2__ujeti7sjay3i2ioyyyu7uezhje/node_modules/tsup/assets/esm_shims.js
var getFilename = () => fileURLToPath$1(import.meta.url);
var getDirname = () => path.dirname(getFilename());
var __dirname = /* @__PURE__ */ getDirname();

// ../../node_modules/.pnpm/conjure-lite@0.4.4/node_modules/conjure-lite/dist/index.mjs
async function conjureFetch({
  fetchFn,
  baseUrl,
  servicePath,
  tokenProvider
}, url, method, body, params, contentType, accept) {
  const queryParams = Object.entries({}).flatMap(([key, value]) => {
    if (value == null) {
      return [];
    }
    if (Array.isArray(value)) {
      return value.map((item) => [key, item]);
    }
    const stringValue = "" + value;
    return stringValue.length === 0 ? [] : [[key, stringValue]];
  });
  const query = Object.keys(queryParams).length === 0 ? "" : `?${new URLSearchParams(queryParams).toString()}`;
  const response = await (fetchFn ?? fetch)(`${baseUrl}${servicePath}${url}${query}`, {
    method,
    credentials: "same-origin",
    headers: {
      "Fetch-User-Agent": "conjure-lite",
      "Content-Type": "application/json",
      accept: "application/json",
      ...tokenProvider ? {
        "Authorization": `Bearer ${await tokenProvider()}`
      } : {}
    },
    ...{}
  });
  try {
    if (response.status === 204) {
      return void 0;
    }
    const body2 = await readBody(response);
    if (!response.ok) {
      throw new ConjureError("STATUS", void 0, response.status, body2);
    }
    return body2;
  } catch (error) {
    if (error instanceof ConjureError) {
      throw error;
    } else if (error instanceof TypeError) {
      throw new ConjureError("NETWORK", error);
    } else {
      throw new ConjureError("OTHER", error);
    }
  }
}
async function readBody(response) {
  const contentType = response.headers.get("Content-Type") != null ? response.headers.get("Content-Type") : "";
  try {
    if (contentType.includes("application/json")) {
      return await response.json();
    } else if (contentType.includes("application/octet-stream")) {
      return await response.blob();
    } else {
      return await response.text();
    }
  } catch (error) {
    throw new ConjureError("PARSE", error, response.status);
  }
}
var ConjureError = class {
  type;
  originalError;
  status;
  body;
  constructor(errorType, originalError, status, body) {
    this.type = errorType;
    this.originalError = originalError;
    this.status = status;
    this.body = body;
  }
  toString() {
    return JSON.stringify({
      body: this.body,
      originalError: this.originalError && this.originalError.toString(),
      status: this.status,
      type: this.type
    }, null, "  ");
  }
};

// ../client.unstable.tpsa/build/esm/index.js
async function getSdk(ctx, repositoryRid, packageName, sdkVersion) {
  return conjureFetch(ctx, `/sdks/${repositoryRid}/${packageName}/${sdkVersion}`, "GET");
}
async function getSdkPackage(ctx, sdkPackageRid) {
  return conjureFetch(ctx, `/sdks/packages/${sdkPackageRid}`, "GET");
}

// src/ontologyMetadata/Result.ts
var Ok = class {
  constructor(value) {
    this.value = value;
  }
  isErr() {
    return false;
  }
  isOk() {
    return true;
  }
  transform(transformOk, _transformErr) {
    return transformOk(this.value);
  }
  map(transformOk) {
    return Result.ok(transformOk(this.value));
  }
  mapErr(_transformErr) {
    return Result.ok(this.value);
  }
};
var Err = class {
  constructor(error) {
    this.error = error;
  }
  isErr() {
    return true;
  }
  isOk() {
    return false;
  }
  transform(_transformOk, transformErr) {
    return transformErr(this.error);
  }
  map(_transformOk) {
    return Result.err(this.error);
  }
  mapErr(transformErr) {
    return Result.err(transformErr(this.error));
  }
};
var Result = {
  ok(ok) {
    return new Ok(ok);
  },
  err(err) {
    return new Err(err);
  },
  /**
   * Returns err E array if any result has an error.
   * Returns T array if all results are ok.
   */
  coalesce(results) {
    return results.reduce((acc, value) => {
      return value.transform((ok) => {
        return acc.transform((accOk) => {
          return Result.ok([...accOk, ok]);
        }, (accErr) => {
          return Result.err(accErr);
        });
      }, (err) => {
        return acc.transform(() => {
          return Result.err([...err]);
        }, (accErr) => {
          return Result.err([...accErr, ...err]);
        });
      });
    }, Result.ok([]));
  }
};

// src/ontologyMetadata/ontologyMetadataResolver.ts
var OntologyMetadataResolver = class {
  #authToken;
  constructor(authToken, stackName) {
    this.stackName = stackName;
    this.#authToken = authToken;
  }
  getClientContext() {
    return createSharedClientContext(this.stackName.match(/^https?:\/\//) ? this.stackName : `https://${this.stackName}`, () => Promise.resolve(this.#authToken), `foundry-typescript-osdk-generator/${process.env.npm_package_version}`);
  }
  filterMetadataByApiName(ontologyFullMetadata, expectedEntities, pkgInfo) {
    const filteredObjectTypes = Object.fromEntries(Object.entries(ontologyFullMetadata.objectTypes).filter(([, {
      objectType
    }]) => {
      for (const {
        sdk: {
          inputs: {
            dataScope
          }
        }
      } of pkgInfo.values()) {
        for (const objectTypeRid of dataScope.ontologyV2.objectTypes) {
          if (objectTypeRid === objectType.rid) {
            return true;
          }
        }
      }
      return expectedEntities.objectTypes.has(objectType.apiName);
    }));
    const filteredInterfaceTypes = Object.fromEntries(Object.entries(ontologyFullMetadata.interfaceTypes).filter(([interfaceApiName]) => expectedEntities.interfaceTypes.has(interfaceApiName)));
    Object.values(filteredObjectTypes).forEach((objectType) => {
      const linkTypesToKeep = expectedEntities.linkTypes.get(objectType.objectType.apiName);
      if (!linkTypesToKeep) {
        objectType.linkTypes = [];
        return;
      }
      objectType.linkTypes = objectType.linkTypes.filter((linkType) => linkTypesToKeep.has(linkType.apiName));
    });
    const filteredActionTypes = Object.fromEntries(Object.entries(ontologyFullMetadata.actionTypes).filter(([actionApiName]) => {
      if (expectedEntities.actionTypes.has(this.camelize(actionApiName))) {
        return true;
      }
      return false;
    }));
    const filteredQueryTypes = Object.fromEntries(Object.entries(ontologyFullMetadata.queryTypes).filter(([queryApiName]) => expectedEntities.queryTypes.has(queryApiName)));
    return {
      ontology: ontologyFullMetadata.ontology,
      objectTypes: filteredObjectTypes,
      actionTypes: filteredActionTypes,
      queryTypes: filteredQueryTypes,
      interfaceTypes: filteredInterfaceTypes,
      sharedPropertyTypes: {}
    };
  }
  async getInfoForPackages(pkgs) {
    const conjureCtx = {
      baseUrl: `https://${this.stackName}`,
      servicePath: "/third-party-application-service/api",
      tokenProvider: () => Promise.resolve(this.#authToken)
    };
    const ret = /* @__PURE__ */ new Map();
    for (const [packageRid, packageVersion] of pkgs) {
      const sdkPackage = await getSdkPackage(conjureCtx, packageRid);
      const sdk = await getSdk(conjureCtx, sdkPackage.repositoryRid, sdkPackage.packageName, packageVersion);
      ret.set(packageRid, {
        sdkPackage,
        sdk,
        packageVersion
      });
    }
    return ret;
  }
  async getWireOntologyDefinition(ontologyRid, entities, extPackageInfo = /* @__PURE__ */ new Map()) {
    let ontology;
    const {
      OntologiesV2
    } = await import('@osdk/foundry.ontologies');
    try {
      ontology = await OntologiesV2.get(this.getClientContext(), ontologyRid);
    } catch (e) {
      return Result.err([`Unable to load the specified Ontology with network error: ${JSON.stringify(e)}`]);
    }
    const ontologyFullMetadata = await OntologiesV2.getFullMetadata(this.getClientContext(), ontology.rid);
    if (ontologyFullMetadata.errorName != null) {
      return Result.err([`Unable to load the specified Ontology metadata.
${JSON.stringify(ontologyFullMetadata, null, 2)}`]);
    }
    const externalObjects = /* @__PURE__ */ new Map();
    const externalInterfaces = /* @__PURE__ */ new Map();
    for (const {
      sdk
    } of extPackageInfo.values()) {
      if (sdk.npm?.npmPackageName == null) {
        throw new Error("External package is not generated as an npm package");
      }
      const dataScope = sdk.inputs.dataScope.ontologyV2;
      for (const rid of dataScope.objectTypes) {
        const ot = Object.values(ontologyFullMetadata.objectTypes).find((ot2) => ot2.objectType.rid === rid);
        if (!ot) {
          throw new Error(`Could not find external object type with rid ${rid}`);
        }
        externalObjects.set(ot.objectType.apiName, sdk.npm.npmPackageName);
      }
      for (const rid of dataScope.interfaceTypes) {
        const it = Object.values(ontologyFullMetadata.interfaceTypes).find((it2) => it2.rid === rid);
        if (!it) {
          throw new Error(`Could not find external interface type with rid ${rid}`);
        }
        externalInterfaces.set(it.apiName, sdk.npm.npmPackageName);
      }
    }
    const linkTypes = /* @__PURE__ */ new Map();
    const objectTypes = new Set(entities.objectTypesApiNamesToLoad);
    const queryTypes = new Set(entities.queryTypesApiNamesToLoad);
    const actionTypes = new Set(entities.actionTypesApiNamesToLoad?.map((action) => this.camelize(action)));
    const interfaceTypes = new Set(entities.interfaceTypesApiNamesToLoad);
    for (const linkType of entities.linkTypesApiNamesToLoad ?? []) {
      const [objectTypeApiName, linkTypeApiName] = linkType.split(".");
      if (!linkTypes.has(objectTypeApiName)) {
        linkTypes.set(objectTypeApiName, /* @__PURE__ */ new Set());
      }
      linkTypes.get(objectTypeApiName)?.add(linkTypeApiName);
    }
    const filteredFullMetadata = this.filterMetadataByApiName(ontologyFullMetadata, {
      objectTypes,
      linkTypes,
      actionTypes,
      queryTypes,
      interfaceTypes
    }, extPackageInfo);
    const validData = this.validateLoadedOntologyMetadata(filteredFullMetadata, {
      objectTypes,
      linkTypes,
      actionTypes,
      queryTypes,
      interfaceTypes
    }, ontologyFullMetadata, extPackageInfo);
    if (validData.isErr()) {
      return Result.err(validData.error);
    }
    return Result.ok({
      filteredFullMetadata,
      externalInterfaces,
      externalObjects
    });
  }
  validateLoadedOntologyMetadata(filteredFullMetadata, expectedEntities, fullOntology, packageInfo) {
    const errors = [];
    const loadedObjectTypes = Object.fromEntries(Object.values(filteredFullMetadata.objectTypes).map((object) => [object.objectType.apiName, object]));
    const loadedLinkTypes = Object.fromEntries(Object.values(filteredFullMetadata.objectTypes).map((object) => [object.objectType.apiName, Object.fromEntries(object.linkTypes.map((link) => [link.apiName, link]))]));
    const loadedInterfaceTypes = Object.fromEntries(Object.values(filteredFullMetadata.interfaceTypes).map((interfaceType) => [interfaceType.apiName, interfaceType]));
    const missingObjectTypes = [];
    for (const object of expectedEntities.objectTypes) {
      if (!loadedObjectTypes[object]) {
        missingObjectTypes.push(object);
        continue;
      }
      for (const expectedLink of expectedEntities.linkTypes.get(object) ?? []) {
        if (!loadedLinkTypes[object][expectedLink]) {
          errors.push(`Unable to find link type ${expectedLink} for Object Type ${object}`);
        }
      }
      for (const [, link] of Object.entries(loadedLinkTypes[object])) {
        if (!expectedEntities.objectTypes.has(link.objectTypeApiName)) {
          const fromFull = fullOntology.objectTypes[link.objectTypeApiName];
          if (fromFull && hasObjectType(packageInfo, fromFull)) {
            continue;
          }
          errors.push(`Unable to load link type ${link.apiName} for ${loadedObjectTypes[object].objectType.apiName}, because the target object type ${link.objectTypeApiName} is not loaded. Please specify the target Object type with --objectTypes ${link.objectTypeApiName}`);
        }
      }
    }
    if (missingObjectTypes.length > 0) {
      errors.push(`Unable to find the following Object Types: ${missingObjectTypes.join(", ")}`);
    }
    const missingInterfaceTypes = [];
    for (const expectedInterface of expectedEntities.interfaceTypes) {
      if (!loadedInterfaceTypes[expectedInterface]) {
        missingInterfaceTypes.push(expectedInterface);
        continue;
      }
    }
    if (missingInterfaceTypes.length > 0) {
      errors.push(`Unable to find the following Interface Types: ${missingInterfaceTypes.join(", ")}`);
    }
    const loadedQueryTypes = Object.fromEntries(Object.entries(filteredFullMetadata.queryTypes).map(([queryApiName, query]) => [queryApiName, query]));
    const missingQueryTypes = [];
    for (const queryApiName of expectedEntities.queryTypes) {
      if (!loadedQueryTypes[queryApiName]) {
        missingQueryTypes.push(queryApiName);
      }
    }
    for (const query of Object.values(loadedQueryTypes)) {
      const result = this.validateQueryParametersAndOutput(query, expectedEntities.objectTypes);
      if (result.isErr()) {
        for (const errorString of result.error) {
          errors.push(errorString);
        }
      }
    }
    if (missingQueryTypes.length > 0) {
      errors.push(`Unable to find the following Query Types: ${missingQueryTypes.join()}`);
    }
    const loadedActionTypes = Object.fromEntries(Object.entries(filteredFullMetadata.actionTypes).map(([actionApiName, action]) => [this.camelize(actionApiName), action]));
    const missingActionTypes = [];
    for (const actionApiName of expectedEntities.actionTypes) {
      if (!loadedActionTypes[actionApiName]) {
        missingActionTypes.push(actionApiName);
      }
    }
    for (const action of Object.values(loadedActionTypes)) {
      const result = this.validateActionParameters(action, expectedEntities.objectTypes, expectedEntities.interfaceTypes);
      if (result.isErr()) {
        for (const errorString of result.error) {
          errors.push(errorString);
        }
      }
    }
    if (missingActionTypes.length > 0) {
      errors.push(`Unable to find the following Action Types: ${missingActionTypes.join()}`);
    }
    if (errors.length > 0) {
      return Result.err(errors);
    }
    return Result.ok({});
  }
  validateQueryParametersAndOutput(query, loadedObjectApiNames) {
    const parameterValidation = Object.entries(query.parameters).map(([paramName, paramData]) => this.visitSupportedQueryTypes(query.apiName, paramName, paramData.dataType, loadedObjectApiNames));
    parameterValidation.push(this.visitSupportedQueryTypes(query.apiName, "output", query.output, loadedObjectApiNames));
    const results = Result.coalesce(parameterValidation);
    return results;
  }
  validateActionParameters(actionType, loadedObjectApiNames, loadedInterfaceApiNames) {
    const camelizedApiName = this.camelize(actionType.apiName);
    const parameterValidation = Object.entries(actionType.parameters).map(([_paramName, paramData]) => this.isSupportedActionTypeParameter(camelizedApiName, paramData.dataType, loadedObjectApiNames, loadedInterfaceApiNames));
    return Result.coalesce(parameterValidation);
  }
  visitSupportedQueryTypes(queryApiName, propertyName, baseType, loadedObjectApiNames) {
    switch (baseType.type) {
      case "array":
      case "set":
        return this.visitSupportedQueryTypes(queryApiName, propertyName, baseType.subType, loadedObjectApiNames);
      case "objectSet":
      case "object":
        if (loadedObjectApiNames.has(baseType.objectTypeApiName)) {
          return Result.ok({});
        }
        return Result.err([`Unable to load query ${queryApiName} because it takes an unloaded object type as a parameter: ${baseType.objectTypeApiName} in parameter ${propertyName}. Make sure to specify it as an argument with --ontologyObjects ${baseType.objectTypeApiName}.}`]);
      case "struct":
        const results = baseType.fields?.map((field) => {
          return this.visitSupportedQueryTypes(queryApiName, propertyName, field.fieldType, loadedObjectApiNames);
        });
        if (!results) {
          return Result.ok({});
        }
        return Result.coalesce(results);
      case "union":
        if (baseType.unionTypes.find((unionTypes) => unionTypes.type === "null")) {
          return Result.ok({});
        }
        return Result.err([`Unable to load query ${queryApiName} because it takes an unsupported parameter type: ${JSON.stringify(baseType)} in parameter ${propertyName}`]);
      case "string":
      case "boolean":
      case "attachment":
      case "date":
      case "double":
      case "float":
      case "integer":
      case "long":
      case "threeDimensionalAggregation":
      case "timestamp":
      case "twoDimensionalAggregation":
      case "null":
        return Result.ok({});
      case "unsupported":
      default:
        return Result.err([`Unable to load query ${queryApiName} because it takes an unsupported parameter type: ${JSON.stringify(baseType)} in parameter ${propertyName}`]);
    }
  }
  isSupportedActionTypeParameter(actionApiName, actonTypeParameter, loadedObjectApiNames, loadedInterfaceApiNames) {
    switch (actonTypeParameter.type) {
      case "array":
        return this.isSupportedActionTypeParameter(actionApiName, actonTypeParameter.subType, loadedObjectApiNames, loadedInterfaceApiNames);
      case "object":
        if (loadedObjectApiNames.has(actonTypeParameter.objectTypeApiName)) {
          return Result.ok({});
        }
        return Result.err([`Unable to load action ${actionApiName} because it takes an unloaded object type as a parameter: ${actonTypeParameter.objectTypeApiName} make sure to specify it as an argument with --ontologyObjects ${actonTypeParameter.objectTypeApiName})`]);
      case "objectSet":
        if (loadedObjectApiNames.has(actonTypeParameter.objectTypeApiName)) {
          return Result.ok({});
        }
        return Result.err([`Unable to load action ${actionApiName} because it takes an ObjectSet of unloaded object type as a parameter: ${actonTypeParameter.objectTypeApiName} make sure to specify it as an argument with --ontologyObjects ${actonTypeParameter.objectTypeApiName})`]);
      case "interfaceObject":
        if (loadedInterfaceApiNames.has(actonTypeParameter.interfaceTypeApiName)) {
          return Result.ok({});
        }
        return Result.err([`Unable to load action ${actionApiName} because it takes an unloaded interface type as a parameter: ${actonTypeParameter.interfaceTypeApiName} make sure to specify it as an argument with --ontologyInterfaces ${actonTypeParameter.interfaceTypeApiName}`]);
      case "string":
      case "boolean":
      case "attachment":
      case "date":
      case "double":
      case "integer":
      case "long":
      case "timestamp":
      case "struct":
      case "mediaReference":
      case "objectType":
        return Result.ok({});
      default:
        return Result.err([`Unable to load action ${actionApiName} because it takes an unsupported parameter: ${JSON.stringify(actonTypeParameter)} specify only the actions you want to load with the --actions argument.`]);
    }
  }
  camelize(name) {
    return name.replace(/-./g, (segment) => segment[1].toUpperCase());
  }
};
function hasObjectType(z, fromFull) {
  for (const q of z.values()) {
    const {
      objectTypes
    } = q.sdk.inputs.dataScope.ontologyV2;
    if (objectTypes.includes(fromFull.objectType.rid)) {
      return true;
    }
  }
  return false;
}

// src/utils/semverUtils.ts
var semver = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
function isValidSemver(semverString) {
  return semver.test(semverString);
}

// ../generator-utils/build/esm/changeVersionPrefix.js
function changeVersionPrefix(version, prefix2) {
  const isWorkspaceProtocol = version.startsWith("workspace:");
  if (isWorkspaceProtocol) {
    version = version.slice("workspace:".length);
  }
  if (version[0] === "^" || version[0] === "~" || version[0] === "*") {
    version = version.slice(1);
  }
  return `${isWorkspaceProtocol ? "workspace:" : ""}${prefix2}${version}`;
}

// ../../node_modules/.pnpm/tiny-invariant@1.3.3/node_modules/tiny-invariant/dist/esm/tiny-invariant.js
var isProduction = process.env.NODE_ENV === "production";
var prefix = "Invariant failed";
function invariant(condition, message) {
  if (isProduction) {
    throw new Error(prefix);
  }
  var provided = typeof message === "function" ? message() : message;
  var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
  throw new Error(value);
}

// ../generator-utils/build/esm/getDependencyVersionFromFindUpPackageJson.js
async function getDependencyVersionFromFindUpPackageJson(name, opts) {
  const {
    findUp
  } = await import('find-up');
  const packageJsonPath = await findUp("package.json", opts);
  !(packageJsonPath !== undefined) ? process.env.NODE_ENV !== "production" ? process.env.NODE_ENV !== "production" ? invariant(false, "Could not find package.json") : invariant()  : process.env.NODE_ENV !== "production" ? invariant() : invariant()  : undefined;
  const packageJson = await readFile(packageJsonPath, {
    encoding: "utf-8"
  });
  if (!packageJson) {
    throw new Error(`Could not find package.json in current working directory: ${process.cwd()}`);
  }
  const parsedPackageJson = JSON.parse(packageJson);
  const version = parsedPackageJson.dependencies?.[name] ?? parsedPackageJson.devDependencies?.[name] ?? parsedPackageJson.peerDependencies?.[name];
  !(version !== undefined) ? process.env.NODE_ENV !== "production" ? process.env.NODE_ENV !== "production" ? invariant(false, `Could not find a dependency for ${name} in ${packageJsonPath}`) : invariant()  : process.env.NODE_ENV !== "production" ? invariant() : invariant()  : undefined;
  return version;
}

// ../generator-utils/build/esm/resolveDependenciesFromFindUp.js
async function resolveDependenciesFromFindUp(deps, cwd) {
  return await Promise.all(Object.entries(deps).map(async ([dependencyName, dependencyVersion]) => {
    return {
      dependencyName,
      dependencyVersion: changeVersionPrefix(dependencyVersion ?? await getDependencyVersionFromFindUpPackageJson(dependencyName, {
        cwd
      }), "^")
    };
  }));
}

// src/utils/UserAgent.ts
var USER_AGENT = `typescript-sdk-generator/${"2.2.0-beta.9"}`;
async function createRollupBuild(absolutePackagePath, packageName) {
  const inputPath = `${absolutePackagePath}/${packageName}/esm/index.js`;
  const {
    findUp
  } = await import('find-up');
  const nodeModulesPath = await findUp("node_modules", {
    cwd: __dirname,
    type: "directory"
  });
  return await rollup({
    input: inputPath,
    plugins: [nodeResolve({
      browser: true,
      modulePaths: [nodeModulesPath]
    }), ("default" in commonjs ? commonjs.default : commonjs)({}), ("default" in nodePolyfill ? nodePolyfill.default : nodePolyfill)()],
    onwarn: (warning, warn) => {
      if (warning.code === "CIRCULAR_DEPENDENCY") {
        return;
      }
      warn(warning);
    }
  });
}
async function writeRollupBuild(rollupBuild, absolutePackagePath, packageName, format) {
  const outputPath = `${absolutePackagePath}/${packageName}/dist/bundle/index.${"mjs"}`;
  await Promise.all([rollupBuild.write({
    file: outputPath,
    format,
    name: packageName,
    amd: {
      id: packageName
    },
    plugins: []
  })]);
}
async function generateEsmBuild(absolutePackagePath, packageName) {
  const umdBuild = await createRollupBuild(absolutePackagePath, packageName);
  await writeRollupBuild(umdBuild, absolutePackagePath, packageName, "esm");
}
async function generateBundles(absolutePackagePath, packageName) {
  await Promise.all([generateEsmBuild(absolutePackagePath, packageName)]);
}
function withoutTrailingIndex(filePath) {
  return filePath.endsWith("/index") ? filePath.slice(0, -6) : filePath;
}

// src/generate/betaClient/copyFiles.ts
var KNOWN_EXTERNAL = /* @__PURE__ */ new Set(["geojson"]);
function removeDts(file) {
  return file.replace(/\.d\.c?ts$/, "");
}
async function copyFiles(project, dirs, generatedPackageName, generatedFiles) {
  const importSet = /* @__PURE__ */ new Set();
  for (const [fileName, file] of Object.entries(generatedFiles)) {
    if (!fileName.endsWith(".d.ts") && !fileName.endsWith(".d.cts")) {
      continue;
    }
    const indexOfPackageName = fileName.indexOf(generatedPackageName);
    const tsPath = removeDts(fileName.slice(indexOfPackageName + generatedPackageName.length));
    const newModulePath = `${generatedPackageName}${tsPath}`;
    const sourceFile = project.createSourceFile(newModulePath, file);
    for (const importDeclaration of sourceFile.getImportDeclarations()) {
      const moduleSpecifier = importDeclaration.getModuleSpecifier();
      const newModuleSpecifier = transformModuleSpecifier(moduleSpecifier.getLiteralValue(), newModulePath);
      moduleSpecifier.setLiteralValue(newModuleSpecifier);
      if (newModuleSpecifier.startsWith("internal")) {
        for (const importName of importDeclaration.getNamedImports().map((imp) => imp.getName())) {
          importSet.add(importName);
        }
      }
    }
    for (const exportedDecl of sourceFile.getStatements()) {
      if (Node.isModifierable(exportedDecl)) {
        exportedDecl.toggleModifier("declare", false);
      }
    }
    for (const exportDeclaration of sourceFile.getExportDeclarations()) {
      const moduleSpecifier = exportDeclaration.getModuleSpecifier();
      if (moduleSpecifier) {
        const newModuleSpecifier = transformModuleSpecifier(moduleSpecifier.getLiteralValue(), newModulePath);
        moduleSpecifier.setLiteralValue(newModuleSpecifier);
        if (newModuleSpecifier.startsWith("internal")) {
          for (const exportName of exportDeclaration.getNamedExports().map((exp) => exp.getName())) {
            importSet.add(exportName);
          }
        }
      }
    }
  }
  for (const dir of dirs) {
    const buildDirsToTry = ["build/cjs", "build/esm"];
    const packageName = getPackageName(dir);
    const relativeBuildDir = buildDirsToTry.find((buildDir) => {
      return ["d.ts", "d.cts", "d.mts"].some((ext) => {
        try {
          fs.statSync(path2.join(dir, buildDir, `index.${ext}`));
          return true;
        } catch (e) {
          return false;
        }
      });
    });
    if (!relativeBuildDir) {
      throw new Error("Couldn't find the right build dir");
    }
    for (const file of getTypeFiles(path2.join(dir, relativeBuildDir))) {
      const absoluteBuildDir = path2.join(dir, relativeBuildDir);
      const tsPath = removeDts(path2.relative(absoluteBuildDir, file));
      const newModulePath = `internal/${packageName}/${tsPath}`;
      const fileContents = fs.readFileSync(file).toString();
      const sourceFile = project.createSourceFile(`${newModulePath}.ts`, fileContents, {
        overwrite: true
      });
      for (const importDeclaration of sourceFile.getImportDeclarations()) {
        const moduleSpecifier = importDeclaration.getModuleSpecifier();
        const newModuleSpecifier = transformModuleSpecifier(moduleSpecifier.getLiteralValue(), newModulePath);
        moduleSpecifier.setLiteralValue(newModuleSpecifier);
      }
      for (const exportedDecl of sourceFile.getStatements()) {
        if (Node.isModifierable(exportedDecl)) {
          exportedDecl.toggleModifier("declare", false);
        }
      }
      for (const exportDeclaration of sourceFile.getExportDeclarations()) {
        const moduleSpecifier = exportDeclaration.getModuleSpecifier();
        if (moduleSpecifier) {
          const newModuleSpecifier = transformModuleSpecifier(moduleSpecifier.getLiteralValue(), newModulePath);
          moduleSpecifier.setLiteralValue(withoutTrailingIndex(newModuleSpecifier));
        }
      }
    }
  }
  return importSet;
}
function getPackageName(dir) {
  const pkg = fs.readFileSync(path2.join(dir, "package.json"));
  const parsed = JSON.parse(pkg.toString());
  return parsed.name;
}
function* getTypeFiles(dir) {
  for (const item of fs.readdirSync(dir)) {
    const target = path2.join(dir, item);
    if (target.endsWith(".d.ts") && !target.endsWith(".test.d.ts") || target.endsWith(".d.cts") && !target.endsWith(".test.d.cts")) {
      yield target;
    } else {
      const stat = fs.lstatSync(target);
      if (stat.isDirectory() && item !== "test") {
        yield* getTypeFiles(target);
      }
    }
  }
}
function transformModuleSpecifier(value, filePath) {
  let moduleSpecifier;
  if (value.startsWith("@osdk")) {
    if (value.startsWith("@osdk/gateway/types")) {
      moduleSpecifier = `internal/${value.replace("@osdk/gateway/types", "@osdk/gateway/public/types")}`;
    } else {
      moduleSpecifier = `internal/${value}`;
    }
  } else if (value.startsWith(".")) {
    moduleSpecifier = path2.join(filePath, "..", value);
  } else if (KNOWN_EXTERNAL.has(value)) {
    moduleSpecifier = `internal/${value}`;
  } else {
    throw new Error("Failed generated DTS for package, no handling for: " + value);
  }
  return withoutTrailingIndex(withoutExtension(moduleSpecifier));
}
function withoutExtension(value) {
  return value.replace(".js", "");
}

// src/generate/betaClient/bundleDependencies.ts
async function bundleDependencies(dirs, generatedPackageName, generatedFiles, entry) {
  const project = new Project({
    useInMemoryFileSystem: true,
    compilerOptions: {
      declaration: true,
      emitDeclarationOnly: true,
      outFile: "dist/bundle/index.d.ts"
    }
  });
  await copyFiles(project, dirs, generatedPackageName, generatedFiles);
  return outputModule(project);
}
function outputModule(project) {
  const modules = [];
  project.getSourceFiles().forEach((sourceFile) => {
    const lines = sourceFile.getText().split("\n");
    while (lines.length > 0 && lines[lines.length - 1] === "") {
      lines.pop();
    }
    if (lines.length === 0) {
      return;
    }
    const module = [];
    module.push(`/** ${sourceFile.getFilePath()} **/`);
    module.push(`declare module "${withoutTrailingIndex(sourceFile.getFilePath().replace(".ts", "").replace("/", ""))}" {`);
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.length === 0) {
        continue;
      }
      module.push(`	${line}`);
    }
    module.push(`}`);
    modules.push(module.join("\n"));
  });
  return modules.join("\n");
}
function compileInMemory(files, type) {
  const inMemoryOutputFileSystem = {};
  const compilerOptions = {
    module: type === "cjs" ? ModuleKind.CommonJS : ModuleKind.ES2022,
    target: ScriptTarget.ES2020,
    resolvePackageJsonExports: true,
    declaration: true,
    skipLibCheck: true
  };
  const compilerHost = createCompilerHost(compilerOptions);
  compilerHost.writeFile = (fileName, data) => {
    inMemoryOutputFileSystem[fileName] = data;
  };
  const originalSourceFile = compilerHost.getSourceFile;
  compilerHost.getSourceFile = (fileName, languageVersion) => {
    const sourceText = files[fileName];
    return sourceText !== undefined ? createSourceFile(fileName, sourceText, languageVersion) : originalSourceFile(fileName, languageVersion);
  };
  const program = createProgram(Object.keys(files), compilerOptions, compilerHost);
  const emitOutput = program.emit();
  return {
    files: inMemoryOutputFileSystem,
    diagnostics: emitOutput.diagnostics
  };
}
async function generatePackageJson(options) {
  const packageDeps = constructDependencies(options.dependencies);
  const packagePeerDeps = constructDependencies(options.peerDependencies);
  const packageJson = {
    name: options.packageName,
    version: options.packageVersion,
    main: "./cjs/index.js",
    types: "./cjs/index.d.ts",
    exports: {
      ".": {
        script: {
          types: "./dist/bundle/index.d.mts",
          default: "./dist/bundle/index.mjs"
        },
        require: {
          types: "./cjs/index.d.ts",
          default: "./cjs/index.js"
        },
        import: {
          types: "./esm/index.d.ts",
          default: "./esm/index.js"
        },
        types: "./cjs/index.d.ts",
        default: "./cjs/index.js"
      }
    },
    dependencies: packageDeps,
    peerDependencies: packagePeerDeps,
    type: "commonjs"
  };
  await writeFile(join(options.packagePath, "package.json"), JSON.stringify(packageJson, undefined, 4));
  return packageJson;
}
function constructDependencies(dependencies) {
  return dependencies?.reduce((acc, value) => {
    acc[value.dependencyName] = value.dependencyVersion;
    return acc;
  }, {});
}

// src/generate/betaClient/generatePackage.ts
var betaPeerDependencies = {
  "@osdk/client": undefined
};
async function generatePackage(ontologyInfo, options) {
  const {
    consola
  } = await import('consola');
  let success = true;
  if (options.ontologyJsonOnly) {
    await mkdir(options.outputDir, {
      recursive: true
    });
    await writeFile(path2__default.join(options.outputDir, "ontology.json"), JSON.stringify(ontologyInfo.filteredFullMetadata, null, 2), "utf-8");
    return;
  }
  const packagePath = customNormalize(join(options.outputDir, options.packageName));
  const resolvedPeerDependencies = await resolveDependenciesFromFindUp(betaPeerDependencies, dirname(fileURLToPath(import.meta.url)));
  await mkdir(packagePath, {
    recursive: true
  });
  const inMemoryFileSystem = {};
  const hostFs = {
    writeFile: async (path4, contents2) => {
      inMemoryFileSystem[customNormalize(path4)] = contents2;
    },
    mkdir: async (path4, _options) => {
      await mkdir(customNormalize(path4), {
        recursive: true
      });
    },
    readdir: (path4) => readdir(path4)
  };
  await generateClientSdkVersionTwoPointZero(ontologyInfo.filteredFullMetadata, `typescript-sdk/${options.packageVersion} ${USER_AGENT}`, hostFs, packagePath, "module", ontologyInfo.externalObjects, ontologyInfo.externalInterfaces);
  const contents = await generatePackageJson({
    packageName: options.packageName,
    packagePath,
    packageVersion: options.packageVersion,
    dependencies: [],
    peerDependencies: resolvedPeerDependencies,
    beta: options.beta
  });
  const compilerOutput = {};
  for (const type of ["esm", "cjs"]) {
    await hostFs.writeFile(join(packagePath, "package.json"), JSON.stringify({
      ...contents,
      type: type === "cjs" ? "commonjs" : "module"
    }));
    compilerOutput[type] = compileInMemory(inMemoryFileSystem, type);
    compilerOutput[type].diagnostics.forEach((d) => {
      consola.error(`Error compiling file`, d.file?.fileName, d.messageText);
      success = false;
    });
    await mkdir(join(packagePath, "dist", "bundle"), {
      recursive: true
    });
    await mkdir(join(packagePath, "esm"), {
      recursive: true
    });
    await mkdir(join(packagePath, "cjs"), {
      recursive: true
    });
    for (const [path4, contents2] of Object.entries(compilerOutput[type].files)) {
      const newPath = path4.replace(packagePath, join(packagePath, type));
      await mkdir(dirname(newPath), {
        recursive: true
      });
      await writeFile(newPath, contents2, {
        flag: "w"
      });
    }
    void await writeFile(join(packagePath, type, "package.json"), JSON.stringify({
      type: type === "esm" ? "module" : "commonjs"
    }));
  }
  await mkdir(join(packagePath, "dist", "bundle"), {
    recursive: true
  });
  const {
    findUp
  } = await import('find-up');
  const nodeModulesPath = await findUp("node_modules", {
    cwd: dirname(fileURLToPath(import.meta.url)),
    type: "directory"
  });
  let bundleDts = "";
  if (nodeModulesPath) {
    try {
      bundleDts = await bundleDependencies([], options.packageName, compilerOutput["esm"].files, void 0);
    } catch (e) {
      consola.error("Failed bundling DTS", e);
      success = false;
    }
  } else {
    consola.error("Could not find node_modules directory, skipping DTS bundling");
    success = false;
  }
  await writeFile(join(packagePath, "dist", "bundle", "index.d.mts"), bundleDts, {
    flag: "w"
  });
  const absolutePackagePath = isAbsolute(options.outputDir) ? options.outputDir : join(process.cwd(), options.outputDir);
  try {
    await generateBundles(absolutePackagePath, options.packageName);
  } catch (e) {
    consola.error(e);
    success = false;
  }
  if (!success) {
    throw new Error("Failed to generate package");
  }
}
function customNormalize(pathName) {
  return normalize(pathName.replace(/\\/g, "/"));
}

// src/generate/commandUtils.ts
function transformArrayArg(arg) {
  if (arg && arg.length > 0) {
    if (arg[0] === undefined) {
      return undefined;
    }
  }
  return arg;
}

// src/generate/GeneratePackageCommand.ts
var GeneratePackageCommand = class {
  command = "generatePackage";
  describe = "Generates a new npm package which can be published";
  constructor() {
  }
  builder(args) {
    return args.positional("authToken", {
      type: "string",
      demandOption: true
    }).positional("foundryHostname", {
      type: "string",
      demandOption: true
    }).positional("packageName", {
      type: "string",
      demandOption: true,
      description: "The name of the package to generate"
    }).positional("packageVersion", {
      type: "string",
      demandOption: true,
      description: "The version of the package to generate"
    }).positional("outputDir", {
      type: "string",
      demandOption: true,
      description: "The path where the package with the provided package name will be generated"
    }).positional("ontology", {
      type: "string",
      demandOption: true,
      description: `The ontology rid or ontology API name of the ontology to generate. Example Usage: --ontology palantirOntology`,
      default: "ri.ontology.main.ontology.00000000-0000-0000-0000-000000000000"
    }).options("objectTypes", {
      array: true,
      string: true,
      demandOption: false,
      description: `The API names of the object types to generate. Example Usage: --objectTypes Aircraft Airport`,
      default: undefined,
      defaultDescription: `By default, no arguments will not load any object type.`
    }).options("actionTypes", {
      array: true,
      string: true,
      demandOption: false,
      description: `The API names of the action types to generate. Example Usage: --actionTypes schedule-airplane-maintenance`,
      default: undefined,
      defaultDescription: `By default, no arguments will not load any action type.`
    }).options("linkTypes", {
      array: true,
      string: true,
      demandOption: false,
      description: `The link types to generate in the format of ObjectTypeApiName.LinkTypeApiName. Example Usage: --linkTypes Aircraft.scheduledFlight`,
      default: undefined,
      defaultDescription: `By default, no arguments will not load any link type.`
    }).options("queryTypes", {
      array: true,
      string: true,
      demandOption: false,
      description: `The API Names of the query types to generate. Example Usage: --queryTypes calculateMetric`,
      default: undefined,
      defaultDescription: `By default, no arguments will not load any query type.`
    }).options("interfaceTypes", {
      array: true,
      string: true,
      demandOption: false,
      description: `The API Names of the interface types to generate. Example Usage: --interfaceTypes Geolocatable`,
      default: undefined,
      defaultDescription: `By default, no arguments will not load any interface type.`
    }).options("experimentalFeatures", {
      array: true,
      string: true,
      demandOption: false,
      description: `Experimental features that can be modified or removed at any time. Example Usage: --experimentalFeatures realtimeUpdates`,
      default: undefined,
      defaultDescription: `By default, no arguments will not enable any experimental features.`
    }).options("beta", {
      boolean: true,
      demandOption: false,
      hidden: true,
      default: false
    }).options("sdkPackages", {
      array: true,
      string: true,
      // experimental for now
      hidden: true,
      coerce: (arg) => {
        return new Map(arg.map((sdkPackage) => sdkPackage.split("=", 2)));
      }
    }).strict();
  }
  handler = async (args) => {
    const {
      consola
    } = await import('consola');
    consola.start(`Generating OSDK: ${args.packageName} at version: ${args.packageVersion}`);
    const ontologyRid = args.ontology;
    const ontologyMetadataResolver = new OntologyMetadataResolver(args.authToken, args.foundryHostname);
    if (!isValidSemver(args.packageVersion)) {
      consola.error(new Error(`Invalid argument provided for packageVersion: ${args.packageVersion}, expected valid semver`));
      exit(1);
    }
    const packageInfo = await ontologyMetadataResolver.getInfoForPackages(args.sdkPackages ?? /* @__PURE__ */ new Map());
    const timeStart = Date.now();
    const wireOntologyDefinition = await ontologyMetadataResolver.getWireOntologyDefinition(ontologyRid, {
      objectTypesApiNamesToLoad: transformArrayArg(args.objectTypes),
      actionTypesApiNamesToLoad: transformArrayArg(args.actionTypes),
      queryTypesApiNamesToLoad: transformArrayArg(args.queryTypes),
      interfaceTypesApiNamesToLoad: transformArrayArg(args.interfaceTypes),
      linkTypesApiNamesToLoad: transformArrayArg(args.linkTypes)
    }, packageInfo);
    if (wireOntologyDefinition.isErr()) {
      wireOntologyDefinition.error.forEach((err) => {
        consola.error(err);
      });
      consola.error("Failed generating package");
      exit(1);
    }
    await generatePackage(wireOntologyDefinition.value, {
      packageName: args.packageName,
      packageVersion: args.packageVersion,
      outputDir: args.outputDir,
      beta: !!args.beta,
      ontologyJsonOnly: args.experimentalFeatures?.includes("ontologyJsonOnly") ?? false
    });
    const elapsedTime = Date.now() - timeStart;
    consola.success(`Finished generating package in ${(elapsedTime / 1e3).toFixed(2)}s`);
    return;
  };
};

// src/cli/foundrySdkGeneratorCli.ts
async function cli(args = process.argv) {
  const base = yargs(hideBin(args)).command(new GeneratePackageCommand()).demandCommand().recommendCommands().strict().showHelpOnFail(true).help().version(process.env.npm_package_version);
  try {
    return await base.parseAsync();
  } catch (e) {
    console.log(e);
  }
}

export { GeneratePackageCommand as __testSeamOnly_NotSemverStable__GeneratePackageCommand, cli };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map