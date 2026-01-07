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

import type { Sdk, SdkPackage } from "@osdk/client.unstable.tpsa";
import { getSdk, getSdkPackage } from "@osdk/client.unstable.tpsa";
import type {
  ActionParameterType,
  ActionTypeV2,
  ObjectTypeFullMetadata,
  Ontology,
  OntologyFullMetadata,
  OntologyIdentifier,
  QueryDataType,
  QueryTypeV2,
} from "@osdk/foundry.ontologies";
import { createSharedClientContext } from "@osdk/shared.client.impl";
import { Result } from "./Result.js";

/**
 * Parses a link type string in the format "ObjectTypeApiName.linkTypeApiName".
 * Handles object type API names that contain dots (e.g., "com.foo.ObjectName.myLink").
 *
 * @param linkType - The link type string to parse
 * @returns A tuple of [objectTypeApiName, linkTypeApiName]
 * @throws Error if the link type string doesn't contain a dot
 */
export function parseLinkType(
  linkType: string,
): [objectTypeApiName: string, linkTypeApiName: string] {
  const lastDotIndex = linkType.lastIndexOf(".");
  if (lastDotIndex === -1) {
    throw new Error(
      `Invalid link type format: "${linkType}". Expected format: "ObjectTypeApiName.linkTypeApiName"`,
    );
  }
  return [
    linkType.slice(0, lastDotIndex),
    linkType.slice(lastDotIndex + 1),
  ];
}

type PackageInfo = Map<string, {
  sdkPackage: SdkPackage;
  sdk: Sdk;
  packageVersion: string;
}>;

export interface OntologyInfo {
  requestedMetadata: OntologyFullMetadata;
  externalInterfaces: Map<string, string>;
  externalObjects: Map<string, string>;
  fixedVersionQueryTypes: string[];
}

export class OntologyMetadataResolver {
  #authToken: string;
  constructor(authToken: string, private stackName: string) {
    this.#authToken = authToken;
  }

  private getClientContext() {
    return createSharedClientContext(
      this.stackName.match(/^https?:\/\//)
        ? this.stackName
        : `https://${this.stackName}`,
      () => Promise.resolve(this.#authToken),
      `foundry-typescript-osdk-generator/${process.env.npm_package_version!}`,
    );
  }

  private filterMetadataByApiName(
    ontologyFullMetadata: OntologyFullMetadata,
    expectedEntities: {
      linkTypes: Map<string, Set<string>>;
      objectTypes: Set<string>;
      queryTypes: Set<string>;
      actionTypes: Set<string>;
      interfaceTypes: Set<string>;
    },
    pkgInfo: PackageInfo,
  ): OntologyFullMetadata {
    const filteredObjectTypes = Object.fromEntries(
      Object.entries(ontologyFullMetadata.objectTypes).filter(
        ([, { objectType }]) => {
          for (const { sdk: { inputs: { dataScope } } } of pkgInfo.values()) {
            for (const objectTypeRid of dataScope.ontologyV2.objectTypes) {
              if (objectTypeRid === objectType.rid) {
                return true;
              }
            }
          }
          return expectedEntities.objectTypes.has(objectType.apiName);
        },
      ),
    );

    const filteredInterfaceTypes = Object.fromEntries(
      Object.entries(ontologyFullMetadata.interfaceTypes).filter((
        [interfaceApiName],
      ) => expectedEntities.interfaceTypes.has(interfaceApiName)),
    );

    Object.values(filteredObjectTypes).forEach(objectType => {
      const linkTypesToKeep = expectedEntities.linkTypes.get(
        objectType.objectType.apiName,
      );
      if (!linkTypesToKeep) {
        objectType.linkTypes = [];
        return;
      }

      objectType.linkTypes = objectType.linkTypes.filter(linkType =>
        linkTypesToKeep.has(linkType.apiName)
      );
    });

    const filteredActionTypes = Object.fromEntries(
      Object.entries(ontologyFullMetadata.actionTypes).filter(
        ([actionApiName]) => {
          if (
            expectedEntities.actionTypes.has(actionApiName)
          ) {
            return true;
          }
          return false;
        },
      ),
    );

    const filteredQueryTypes = Object.fromEntries(
      Object.entries(ontologyFullMetadata.queryTypes).filter(([queryApiName]) =>
        expectedEntities.queryTypes.has(queryApiName)
      ),
    );

    return {
      ontology: ontologyFullMetadata.ontology,
      objectTypes: filteredObjectTypes,
      actionTypes: filteredActionTypes,
      queryTypes: filteredQueryTypes,
      interfaceTypes: filteredInterfaceTypes,
      sharedPropertyTypes: {},
      valueTypes: {},
    };
  }

  public async getInfoForPackages(
    pkgs: Map<string, string>,
  ): Promise<PackageInfo> {
    const conjureCtx = {
      baseUrl: `https://${this.stackName}`,
      servicePath: "/third-party-application-service/api",
      tokenProvider: () => Promise.resolve(this.#authToken),
    };

    const ret: PackageInfo = new Map();

    for (const [packageRid, packageVersion] of pkgs) {
      const sdkPackage = await getSdkPackage(
        conjureCtx,
        packageRid,
      );

      const sdk = await getSdk(
        conjureCtx,
        sdkPackage.repositoryRid,
        sdkPackage.packageName,
        packageVersion,
      );

      ret.set(packageRid, { sdkPackage, sdk, packageVersion });
    }

    return ret;
  }

  public async getWireOntologyDefinition(
    ontologyRid: string,
    entities: {
      actionTypesApiNamesToLoad?: string[];
      objectTypesApiNamesToLoad?: string[];
      queryTypesApiNamesToLoad?: string[];
      interfaceTypesApiNamesToLoad?: string[];
      linkTypesApiNamesToLoad?: string[];
    },
    extPackageInfo: PackageInfo = new Map(),
    branch: string | undefined = undefined,
  ): Promise<
    Result<OntologyInfo, string[]>
  > {
    let ontology: Ontology;

    const { OntologiesV2 } = await import("@osdk/foundry.ontologies");

    try {
      ontology = await OntologiesV2.get(
        this.getClientContext(),
        ontologyRid,
      );
    } catch (e) {
      return Result.err([
        `Unable to load the specified Ontology with network error: ${
          JSON.stringify(e)
        }`,
      ]);
    }

    // If we're passing in an external SDK package, we need to load the full metadata. As a result, we cannot use query
    // version pinning. This codepath should be merged with the `loadMetadata` codepath when we have the ability to load
    // objects and interfaces by RID.
    if (extPackageInfo.size > 0) {
      const ontologyFullMetadata = await OntologiesV2.getFullMetadata(
        this.getClientContext(),
        ontology.rid as OntologyIdentifier,
        { branch: branch },
      );

      if ((ontologyFullMetadata as any).errorName != null) {
        return Result.err([
          `Unable to load the specified Ontology metadata.\n${
            JSON.stringify(ontologyFullMetadata, null, 2)
          }`,
        ]);
      }

      const externalObjects = new Map();
      const externalInterfaces = new Map();

      for (const { sdk } of extPackageInfo.values()) {
        if (sdk.npm?.npmPackageName == null) {
          throw new Error(
            "External package is not generated as an npm package",
          );
        }

        const dataScope = sdk.inputs.dataScope.ontologyV2;

        for (const rid of dataScope.objectTypes) {
          const ot = Object.values(ontologyFullMetadata.objectTypes).find(
            (ot) => ot.objectType.rid === rid,
          );

          if (!ot) {
            throw new Error(
              `Could not find external object type with rid ${rid}`,
            );
          }

          externalObjects.set(ot.objectType.apiName, sdk.npm.npmPackageName);
        }

        for (const rid of dataScope.interfaceTypes) {
          const it = Object.values(ontologyFullMetadata.interfaceTypes).find(
            (it) => it.rid === rid,
          );

          if (!it) {
            throw new Error(
              `Could not find external interface type with rid ${rid}`,
            );
          }
          externalInterfaces.set(it.apiName, sdk.npm.npmPackageName);
        }
      }

      const linkTypes = new Map<string, Set<string>>();
      const objectTypes = new Set(entities.objectTypesApiNamesToLoad);
      const queryTypes = new Set(entities.queryTypesApiNamesToLoad);
      for (const queryType of entities.queryTypesApiNamesToLoad ?? []) {
        if (queryType.includes(":")) {
          throw new Error(
            `Query types with fixed versions are not supported with external packages: ${queryType}`,
          );
        }
      }
      const actionTypes = new Set(
        entities.actionTypesApiNamesToLoad,
      );

      const interfaceTypes = new Set(entities.interfaceTypesApiNamesToLoad);

      for (const linkType of entities.linkTypesApiNamesToLoad ?? []) {
        const [objectTypeApiName, linkTypeApiName] = parseLinkType(linkType);
        if (!linkTypes.has(objectTypeApiName)) {
          linkTypes.set(objectTypeApiName, new Set());
        }
        linkTypes.get(objectTypeApiName)?.add(linkTypeApiName);
      }

      const filteredFullMetadata = this.filterMetadataByApiName(
        ontologyFullMetadata,
        {
          objectTypes,
          linkTypes,
          actionTypes,
          queryTypes,
          interfaceTypes,
        },
        extPackageInfo,
      );

      const validData: Result<{}, string[]> = this
        .validateLoadedOntologyMetadata(
          filteredFullMetadata,
          {
            objectTypes,
            linkTypes,
            actionTypes,
            queryTypes,
            interfaceTypes,
          },
          extPackageInfo,
          ontologyFullMetadata,
        );

      if (validData.isErr()) {
        return Result.err(validData.error);
      }
      return Result.ok({
        requestedMetadata: filteredFullMetadata,
        externalInterfaces,
        externalObjects,
        fixedVersionQueryTypes: [],
      });
    } else {
      const objectTypes = new Set(entities.objectTypesApiNamesToLoad);
      const interfaceTypes = new Set(entities.interfaceTypesApiNamesToLoad);
      const actionTypes = new Set(
        entities.actionTypesApiNamesToLoad,
      );

      const linkTypes = new Map<string, Set<string>>();

      for (const linkType of entities.linkTypesApiNamesToLoad ?? []) {
        const [objectTypeApiName, linkTypeApiName] = parseLinkType(linkType);
        if (!linkTypes.has(objectTypeApiName)) {
          linkTypes.set(objectTypeApiName, new Set());
        }
        linkTypes.get(objectTypeApiName)?.add(linkTypeApiName);
      }

      const queryTypes = new Set<string>();
      const fixedVersionQueryTypes = [];

      for (const queryType of entities.queryTypesApiNamesToLoad ?? []) {
        if (queryTypes.has(queryType)) {
          return Result.err([
            `Query type ${queryType} was specified multiple times.`,
          ]);
        }
        const lastColonIndex = queryType.lastIndexOf(":");

        if (lastColonIndex !== -1) {
          const queryTypeApiName = queryType.substring(0, lastColonIndex);
          fixedVersionQueryTypes.push(queryTypeApiName);
        }
        queryTypes.add(queryType);
      }

      const requestedMetadata = await OntologiesV2.loadMetadata(
        this.getClientContext(),
        ontology.rid as OntologyIdentifier,
        {
          actionTypes: [...actionTypes],
          objectTypes: [...objectTypes],
          queryTypes: [...queryTypes],
          interfaceTypes: [...interfaceTypes],
          linkTypes: Array.from(linkTypes.entries()).flatMap(
            ([_, linkTypeApiNames]) => [...linkTypeApiNames],
          ),
        },
        {
          preview: true,
          branch: branch,
        },
      );

      const validData: Result<{}, string[]> = this
        .validateLoadedOntologyMetadata(
          requestedMetadata,
          {
            objectTypes,
            linkTypes,
            actionTypes,
            queryTypes,
            interfaceTypes,
          },
          extPackageInfo,
        );

      if (validData.isErr()) {
        return Result.err(validData.error);
      }
      return Result.ok({
        requestedMetadata,
        externalInterfaces: new Map(),
        externalObjects: new Map(),
        fixedVersionQueryTypes,
      });
    }
  }

  private validateLoadedOntologyMetadata(
    filteredFullMetadata: OntologyFullMetadata,
    expectedEntities: {
      linkTypes: Map<string, Set<string>>;
      objectTypes: Set<string>;
      queryTypes: Set<string>;
      actionTypes: Set<string>;
      interfaceTypes: Set<string>;
    },
    packageInfo: PackageInfo,
    fullMetadata?: OntologyFullMetadata,
  ): Result<{}, string[]> {
    const errors: string[] = [];
    const loadedObjectTypes = Object.fromEntries(
      Object.values(filteredFullMetadata.objectTypes).map(object => [
        object.objectType.apiName,
        object,
      ]),
    );

    const loadedLinkTypes = Object.fromEntries(
      Object.values(filteredFullMetadata.objectTypes).map(object => [
        object.objectType.apiName,
        Object.fromEntries(
          object.linkTypes.map(link => [link.apiName, link]),
        ),
      ]),
    );

    const loadedInterfaceTypes = Object.fromEntries(
      Object.values(filteredFullMetadata.interfaceTypes).map(
        interfaceType => [interfaceType.apiName, interfaceType],
      ),
    );

    const missingObjectTypes: string[] = [];
    for (const object of expectedEntities.objectTypes) {
      // Expected an object that wasn't loaded
      if (!loadedObjectTypes[object]) {
        missingObjectTypes.push(object);
        continue;
      }

      // Expected a link that wasn't received
      for (const expectedLink of expectedEntities.linkTypes.get(object) ?? []) {
        if (!loadedLinkTypes[object][expectedLink]) {
          errors.push(
            `Unable to find link type ${expectedLink} for Object Type ${object}`,
          );
        }
      }

      for (const [, link] of Object.entries(loadedLinkTypes[object])) {
        // Loaded a link where target was not loaded
        if (
          !expectedEntities.objectTypes.has(
            link.objectTypeApiName,
          )
        ) {
          // is it in a package?
          const fromFull = fullMetadata?.objectTypes[link.objectTypeApiName];
          if (fromFull && hasObjectType(packageInfo, fromFull)) {
            continue;
          }

          errors.push(
            `Unable to load link type ${link.apiName} for ${
              loadedObjectTypes[object].objectType.apiName
            }, because the target object type ${link.objectTypeApiName} is not loaded. Please specify the target Object type with --objectTypes ${link.objectTypeApiName}`,
          );
        }
      }
    }

    if (missingObjectTypes.length > 0) {
      errors.push(
        `Unable to find the following Object Types: ${
          missingObjectTypes.join(", ")
        }`,
      );
    }
    const missingInterfaceTypes: string[] = [];
    for (const expectedInterface of expectedEntities.interfaceTypes) {
      if (!loadedInterfaceTypes[expectedInterface]) {
        missingInterfaceTypes.push(expectedInterface);
        continue;
      }
    }
    if (missingInterfaceTypes.length > 0) {
      errors.push(
        `Unable to find the following Interface Types: ${
          missingInterfaceTypes.join(", ")
        }`,
      );
    }

    const loadedQueryTypes = Object.fromEntries(
      Object.entries(filteredFullMetadata.queryTypes).map((
        [queryApiName, query],
      ) => [
        queryApiName,
        query,
      ]),
    );

    // Validate expected queries were loaded
    const missingQueryTypes: string[] = [];
    for (const queryApiName of expectedEntities.queryTypes) {
      if (!loadedQueryTypes[queryApiName]) {
        missingQueryTypes.push(queryApiName);
      }
    }

    // Validate parameters and output for Queries
    for (const query of Object.values(loadedQueryTypes)) {
      const result = this.validateQueryParametersAndOutput(
        query,
        expectedEntities.objectTypes,
        expectedEntities.interfaceTypes,
      );
      if (result.isErr()) {
        for (const errorString of result.error) {
          errors.push(errorString);
        }
      }
    }

    if (missingQueryTypes.length > 0) {
      errors.push(
        `Unable to find the following Query Types: ${missingQueryTypes.join()}`,
      );
    }

    const missingActionTypes: string[] = [];
    for (const actionApiName of expectedEntities.actionTypes) {
      if (!filteredFullMetadata.actionTypes[actionApiName]) {
        missingActionTypes.push(actionApiName);
      }
    }

    // Validate parameters for Actions
    for (const action of Object.values(filteredFullMetadata.actionTypes)) {
      const result = this.validateActionParameters(
        action,
        expectedEntities.objectTypes,
        expectedEntities.interfaceTypes,
      );
      if (result.isErr()) {
        for (const errorString of result.error) {
          errors.push(errorString);
        }
      }
    }

    if (missingActionTypes.length > 0) {
      errors.push(
        `Unable to find the following Action Types: ${missingActionTypes.join()}`,
      );
    }

    if (errors.length > 0) {
      return Result.err(errors);
    }
    return Result.ok({});
  }

  private validateQueryParametersAndOutput(
    query: QueryTypeV2,
    loadedObjectApiNames: Set<string>,
    loadedInterfaceApiNames: Set<string>,
  ): Result<{}, string[]> {
    const parameterValidation: Array<Result<{}, string[]>> = Object.entries(
      query.parameters,
    ).map(
      ([paramName, paramData]) =>
        this.visitSupportedQueryTypes(
          query.apiName,
          paramName,
          paramData.dataType,
          loadedObjectApiNames,
          loadedInterfaceApiNames,
        ),
    );

    parameterValidation.push(
      this.visitSupportedQueryTypes(
        query.apiName,
        "output",
        query.output,
        loadedObjectApiNames,
        loadedInterfaceApiNames,
      ),
    );

    const results = Result.coalesce<{}, string>(parameterValidation);

    return results;
  }

  private validateActionParameters(
    actionType: ActionTypeV2,
    loadedObjectApiNames: Set<string>,
    loadedInterfaceApiNames: Set<string>,
  ): Result<{}, string[]> {
    const parameterValidation: Array<Result<{}, string[]>> = Object.entries(
      actionType.parameters,
    ).map(
      ([_paramName, paramData]) =>
        this.isSupportedActionTypeParameter(
          actionType.apiName,
          paramData.dataType,
          loadedObjectApiNames,
          loadedInterfaceApiNames,
        ),
    );

    return Result.coalesce<{}, string>(parameterValidation);
  }

  private visitSupportedQueryTypes(
    queryApiName: string,
    propertyName: string,
    baseType: QueryDataType,
    loadedObjectApiNames: Set<string>,
    loadedInterfaceApiNames: Set<string>,
  ): Result<{}, string[]> {
    switch (baseType.type) {
      case "array":
      case "set":
        return this.visitSupportedQueryTypes(
          queryApiName,
          propertyName,
          baseType.subType,
          loadedObjectApiNames,
          loadedInterfaceApiNames,
        );
      case "objectSet":
      case "object":
        if (loadedObjectApiNames.has(baseType.objectTypeApiName!)) {
          return Result.ok({});
        }
        return Result.err([
          `Unable to load query ${queryApiName} because it takes an unloaded object type as a parameter: ${baseType
            .objectTypeApiName!} in parameter ${propertyName}. `
          + `Make sure to specify it as an argument with --ontologyObjects ${baseType
            .objectTypeApiName!}.}`,
        ]);
      case "interfaceObject":
      case "interfaceObjectSet":
        if (loadedInterfaceApiNames.has(baseType.interfaceTypeApiName!)) {
          return Result.ok({});
        }
        return Result.err([
          `Unable to load query ${queryApiName} because it takes an unloaded interface type as a parameter: ${baseType
            .interfaceTypeApiName!} in parameter ${propertyName}. `
          + `Make sure to specify it as an argument with --ontologyInterfaces ${baseType
            .interfaceTypeApiName!}.}`,
        ]);
      case "struct":
        const results = baseType.fields?.map(field => {
          return this.visitSupportedQueryTypes(
            queryApiName,
            propertyName,
            field.fieldType,
            loadedObjectApiNames,
            loadedInterfaceApiNames,
          );
        });

        if (!results) {
          return Result.ok({});
        }

        return Result.coalesce(results);
      case "union":
        if (
          baseType.unionTypes.find(unionTypes => unionTypes.type === "null")
        ) {
          return Result.ok({});
        }
        return Result.err([
          `Unable to load query ${queryApiName} because it takes an unsupported parameter type: ${
            JSON.stringify(
              baseType,
            )
          } in parameter ${propertyName}`,
        ]);
      case "entrySet":
        return Result.coalesce([
          this.visitSupportedQueryTypes(
            queryApiName,
            propertyName,
            baseType.keyType,
            loadedObjectApiNames,
            loadedInterfaceApiNames,
          ),
          this.visitSupportedQueryTypes(
            queryApiName,
            propertyName,
            baseType.valueType,
            loadedObjectApiNames,
            loadedInterfaceApiNames,
          ),
        ]);
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
        return Result.err([
          `Unable to load query ${queryApiName} because it takes an unsupported parameter type: ${
            JSON.stringify(
              baseType,
            )
          } in parameter ${propertyName}`,
        ]);
      default:
        const _: never = baseType;
        return Result.err([
          `Unable to load query ${queryApiName} because it takes an unsupported parameter type: ${
            JSON.stringify(
              baseType,
            )
          } in parameter ${propertyName}`,
        ]);
    }
  }

  private isSupportedActionTypeParameter(
    actionApiName: string,
    actionTypeParameter: ActionParameterType,
    loadedObjectApiNames: Set<string>,
    loadedInterfaceApiNames: Set<string>,
  ): Result<{}, string[]> {
    switch (actionTypeParameter.type) {
      case "array":
        if (
          actionTypeParameter.subType.type === "array"
        ) {
          return Result.err([
            `Unable to load action ${actionApiName} because it takes a nested array as a parameter`,
          ]);
        }
        return this.isSupportedActionTypeParameter(
          actionApiName,
          actionTypeParameter.subType,
          loadedObjectApiNames,
          loadedInterfaceApiNames,
        );
      case "object":
        if (loadedObjectApiNames.has(actionTypeParameter.objectTypeApiName!)) {
          return Result.ok({});
        }
        return Result.err([
          `Unable to load action ${actionApiName} because it takes an unloaded object type as a parameter: ${actionTypeParameter
            .objectTypeApiName!} `
          + `make sure to specify it as an argument with --ontologyObjects ${actionTypeParameter
            .objectTypeApiName!})`,
        ]);
      case "objectSet":
        if (loadedObjectApiNames.has(actionTypeParameter.objectTypeApiName!)) {
          return Result.ok({});
        }
        return Result.err([
          `Unable to load action ${actionApiName} because it takes an ObjectSet of unloaded object type as a parameter: ${actionTypeParameter
            .objectTypeApiName!} `
          + `make sure to specify it as an argument with --ontologyObjects ${actionTypeParameter
            .objectTypeApiName!})`,
        ]);
      case "interfaceObject":
        if (
          actionTypeParameter.interfaceTypeApiName != null
          && loadedInterfaceApiNames.has(
            actionTypeParameter.interfaceTypeApiName,
          )
        ) {
          return Result.ok({});
        }
        return Result.err([
          `Unable to load action ${actionApiName} because it takes an unloaded interface type as a parameter: ${actionTypeParameter.interfaceTypeApiName} `
          + `make sure to specify it as an argument with --interfaceTypes ${actionTypeParameter.interfaceTypeApiName}`,
        ]);
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
      case "marking":
      case "geohash":
      case "geoshape":
        return Result.ok({});

      case "vector":
        return Result.err([
          `Unable to load action ${actionApiName} because it takes an unsupported parameter: ${
            JSON.stringify(
              actionTypeParameter,
            )
          } `
          + `specify only the actions you want to load with the --actions argument.`,
        ]);
      default:
        const _: never = actionTypeParameter;
        return Result.err([
          `Unable to load action ${actionApiName} because it takes an unsupported parameter: ${
            JSON.stringify(
              actionTypeParameter,
            )
          } `
          + `specify only the actions you want to load with the --actions argument.`,
        ]);
    }
  }
}

function hasObjectType(z: PackageInfo, fromFull: ObjectTypeFullMetadata) {
  for (const q of z.values()) {
    const { objectTypes } = q.sdk.inputs.dataScope.ontologyV2;
    if (objectTypes.includes(fromFull.objectType.rid)) {
      return true;
    }
  }
  return false;
}
