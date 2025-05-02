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

type PackageInfo = Map<string, {
  sdkPackage: SdkPackage;
  sdk: Sdk;
  packageVersion: string;
}>;

export interface OntologyInfo {
  requestedMetadata: OntologyFullMetadata;
  externalInterfaces: Map<string, string>;
  externalObjects: Map<string, string>;
  pinnedQueryTypes: string[];
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

    const linkTypes = new Map<string, Set<string>>();
    const objectTypes = new Set(entities.objectTypesApiNamesToLoad);
    const interfaceTypes = new Set(entities.interfaceTypesApiNamesToLoad);
    const actionTypes = new Set(
      entities.actionTypesApiNamesToLoad?.map(action => this.camelize(action)),
    );

    for (const linkType of entities.linkTypesApiNamesToLoad ?? []) {
      const [objectTypeApiName, linkTypeApiName] = linkType.split(
        ".",
      );
      if (!linkTypes.has(objectTypeApiName)) {
        linkTypes.set(objectTypeApiName, new Set());
      }
      linkTypes.get(objectTypeApiName)?.add(linkTypeApiName);
    }

    const queryTypes = new Set<string>();
    const pinnedQueryTypes = [];

    for (const queryType of entities.queryTypesApiNamesToLoad ?? []) {
      const [queryTypeApiName, version] = queryType.split(":");
      if (version != null) {
        pinnedQueryTypes.push(queryTypeApiName);
        continue;
      }
      queryTypes.add(queryTypeApiName);
    }

    let requestedMetadata: OntologyFullMetadata;
    try {
      requestedMetadata = await OntologiesV2.loadMetadata(
        this.getClientContext(),
        ontology.rid as OntologyIdentifier,
        {
          actionTypes: [...actionTypes],
          objectTypes: [...objectTypes],
          queryTypes: [...queryTypes],
          interfaceTypes: [...interfaceTypes],
          linkTypes: [...linkTypes.keys()],
        },
      );
    } catch (e) {
      return Result.err([
        `Unable to load the specified Ontology resources with network error: ${
          JSON.stringify(e)
        }`,
      ]);
    }

    const externalObjects = new Map();
    const externalInterfaces = new Map();

    for (const { sdk } of extPackageInfo.values()) {
      if (sdk.npm?.npmPackageName == null) {
        throw new Error("External package is not generated as an npm package");
      }

      const dataScope = sdk.inputs.dataScope.ontologyV2;

      for (const rid of dataScope.objectTypes) {
        const ot = Object.values(requestedMetadata.objectTypes).find(
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
        const it = Object.values(requestedMetadata.interfaceTypes).find(
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

    const validData: Result<{}, string[]> = this.validateLoadedOntologyMetadata(
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
      externalInterfaces,
      externalObjects,
      pinnedQueryTypes,
    });
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

    for (const object of expectedEntities.objectTypes) {
      for (const [, link] of Object.entries(loadedLinkTypes[object])) {
        // Loaded a link where target was not loaded
        if (
          !expectedEntities.objectTypes.has(
            link.objectTypeApiName,
          )
        ) {
          // is it in a package?
          const fromFull =
            filteredFullMetadata.objectTypes[link.objectTypeApiName];
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

    const loadedQueryTypes = Object.fromEntries(
      Object.entries(filteredFullMetadata.queryTypes).map((
        [queryApiName, query],
      ) => [
        queryApiName,
        query,
      ]),
    );

    // Validate parameters and output for Queries
    for (const query of Object.values(loadedQueryTypes)) {
      const result = this.validateQueryParametersAndOutput(
        query,
        expectedEntities.objectTypes,
      );
      if (result.isErr()) {
        for (const errorString of result.error) {
          errors.push(errorString);
        }
      }
    }

    const loadedActionTypes = Object.fromEntries(
      Object.entries(filteredFullMetadata.actionTypes).map((
        [actionApiName, action],
      ) => [
        this.camelize(actionApiName),
        action,
      ]),
    );

    // Validate parameters for Actions
    for (const action of Object.values(loadedActionTypes)) {
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

    if (errors.length > 0) {
      return Result.err(errors);
    }
    return Result.ok({});
  }

  private validateQueryParametersAndOutput(
    query: QueryTypeV2,
    loadedObjectApiNames: Set<string>,
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
        ),
    );

    parameterValidation.push(
      this.visitSupportedQueryTypes(
        query.apiName,
        "output",
        query.output,
        loadedObjectApiNames,
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
    const camelizedApiName = this.camelize(actionType.apiName);

    const parameterValidation: Array<Result<{}, string[]>> = Object.entries(
      actionType.parameters,
    ).map(
      ([_paramName, paramData]) =>
        this.isSupportedActionTypeParameter(
          camelizedApiName,
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
  ): Result<{}, string[]> {
    switch (baseType.type) {
      case "array":
      case "set":
        return this.visitSupportedQueryTypes(
          queryApiName,
          propertyName,
          baseType.subType,
          loadedObjectApiNames,
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
      case "struct":
        const results = baseType.fields?.map(field => {
          return this.visitSupportedQueryTypes(
            queryApiName,
            propertyName,
            field.fieldType,
            loadedObjectApiNames,
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
      case "entrySet":
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
          loadedInterfaceApiNames.has(actionTypeParameter.interfaceTypeApiName)
        ) {
          return Result.ok({});
        }
        return Result.err([
          `Unable to load action ${actionApiName} because it takes an unloaded interface type as a parameter: ${actionTypeParameter.interfaceTypeApiName} `
          + `make sure to specify it as an argument with --ontologyInterfaces ${actionTypeParameter.interfaceTypeApiName}`,
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

  private camelize(name: string) {
    return name.replace(/-./g, segment => segment[1]!.toUpperCase());
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
